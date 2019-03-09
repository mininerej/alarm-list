import React, { Component } from 'react';
import Title from './Title';
import AlarmList from './AlarmList';
import AddAlarm from './AddAlarm';


class Content extends Component {
  render() {
    const {title, 
      showNewAlarmInput,
      toggleDone,
      currentCategory,
      removeAlarm,
      fixAlarmTitle,
      addNewAlarm,
      alarmList,
      children} = this.props
    return (
      <div className="content">
          <div>
            <Title title={title}></Title>
          <AddAlarm showNewAlarmInput={showNewAlarmInput}></AddAlarm>
          </div>
          
          <AlarmList 
          toggleDone={toggleDone}
          currentCategory={currentCategory}
          removeAlarm={removeAlarm} 
          fixAlarmTitle={fixAlarmTitle} 
          addNewAlarm={addNewAlarm} 
          alarmList={alarmList}>
          {children}       
          </AlarmList>
      </div>
    );
  }
}

export default Content;
