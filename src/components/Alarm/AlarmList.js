import React, { Component } from 'react';
import Alarm from './Alarm'

class AlarmList extends Component {
  render() {
    return (
        <div className="alarm-list">
        {this.props.alarmList.filter(alarm => this.props.currentCategory === alarm.category)
          .map(alarm => <Alarm toggleDone={this.props.toggleDone} removeAlarm={this.props.removeAlarm} fixAlarmTitle={this.props.fixAlarmTitle} alarm={alarm} key={alarm.title}/>)}
        {this.props.children}
        </div>
    );
  }
}

export default AlarmList;
