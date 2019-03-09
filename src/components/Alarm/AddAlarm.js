import React, { Component } from 'react';

class AddAlarm extends Component {
  onClick(){
    this.props.showNewAlarmInput();
  }
  render() {
    return (
      <button onClick={this.onClick.bind(this)} className="add-alarm">Add Alarm</button>
    );
  }
}

export default AddAlarm;
