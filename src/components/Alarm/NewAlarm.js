import React, { Component } from 'react';

class NewAlarm extends Component {
  showNewAlarmInput(){
    this.refs.newAlarm.value = '';
    this.refs.newAlarm.style.display = 'block';
    this.refs.newAlarm.focus();
  }
  onKeyPressed(e){
    if (e.key === "Enter" && e.target.value){
        this.props.addNewAlarm(e.target.value);
        e.target.value = ""
    } else if(e.key === "Escape"){
      e.target.value = ""
      e.target.style.display = 'none'
    }
  }
  onFocusOut(e) {
    if (e.target.value){
        this.props.addNewAlarm(e.target.value);
        e.target.value = ""
    }
  }
  render() {
    return (
        <input 
        ref="newAlarm" 
        onKeyDown={this.onKeyPressed.bind(this)} 
        onBlur={this.onFocusOut.bind(this)}
        className="newAlarm"/>
    );
  }
}

export default NewAlarm;
