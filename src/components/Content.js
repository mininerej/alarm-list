import React, { Component } from 'react';
import Title from './Title';
import AlarmList from './AlarmList';
import AddAlarm from './AddAlarm';


class Content extends Component {
  render() {
    return (
      <div className="content">
          <Title title={this.props.title}></Title>
          <AddAlarm showNewAlarmInput={this.props.showNewAlarmInput}></AddAlarm>
          <AlarmList 
          toggleDone={this.props.toggleDone}
          currentCategory={this.props.currentCategory}
          removeAlarm={this.props.removeAlarm} 
          fixAlarmTitle={this.props.fixAlarmTitle} 
          addNewAlarm={this.props.addNewAlarm} 
          alarmList={this.props.alarmList}>
          {this.props.children}       
          </AlarmList>
      </div>
    );
  }
}

export default Content;
