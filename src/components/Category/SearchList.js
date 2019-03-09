import React, { Component } from 'react';
import Alarm from '../Alarm/Alarm';

class SearchList extends Component {
  render() {
    return (
        this.props.searchList.map(searchItem => {
            return <Alarm 
            toggleDone={this.props.toggleDone} 
            removeAlarm={this.props.removeAlarm} 
            fixAlarmTitle={this.props.fixAlarmTitle} 
            alarm={searchItem} key={searchItem.title}/>
        })
    );
  }
}

export default SearchList;
