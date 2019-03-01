import React, { Component } from 'react';
import AlarmDetail from './AlarmDetail'

class Alarm extends Component {
  onTitleChanged(e){
    if (e.key === "Enter"){
      this.props.fixAlarmTitle(this.props.alarm.title, e.target.value)
    }
  }
  onFocusOut(e) {
    this.props.fixAlarmTitle(this.props.alarm.title, e.target.value)
  }
  onAlarmClick(e){
    this.props.toggleDone(this.props.alarm.title);
  }
  onAlarmDoubleClick(){
    if (window.confirm('알람 "'+this.props.alarm.title+'"을 삭제하시겠습니까?')){
      this.props.removeAlarm(this.props.alarm.title)
    }
  }
  render() {
    return (
        <div className="alarm"  onBlur={this.onFocusOut.bind(this)} onClick={this.onAlarmClick.bind(this)} onDoubleClick={this.onAlarmDoubleClick.bind(this)}>
          { this.props.alarm.done? <input type="checkbox"checked/> : <input type="checkbox"/>}
          
            <input onKeyPress={this.onTitleChanged.bind(this)} className={ this.props.alarm.done? "alarm-done": "alarm-input"} defaultValue={this.props.alarm.title}/>
            <AlarmDetail></AlarmDetail>
        </div>
    );
  }
}

export default Alarm;
