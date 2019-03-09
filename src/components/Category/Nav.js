import React, { Component } from 'react';
import Search from './Search';
import SearchList from './SearchList'

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Search
        search={this.props.search}></Search>
        <SearchList 
        searchList={this.props.searchList}
        toggleDone={this.props.toggleDone} 
        removeAlarm={this.props.removeAlarm} 
        fixAlarmTitle={this.props.fixAlarmTitle} ></SearchList>
        <div>
        {this.props.children}
      </div>
      </div>
    );
  }
}

export default Nav;
