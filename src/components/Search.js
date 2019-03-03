import React, { Component } from 'react';

class Search extends Component {

  onKeyPressed(e) {
    if (e.target.value === "") {
      this.props.search("")
    }
    if (e.key === "Enter") {
      if (e.target.value !== "") {
        this.props.search(e.target.value);
      }
    }

  }
  render() {
    return (
      <input 
      className="search" 
      onKeyDown={this.onKeyPressed.bind(this)} 
      placeholder="Search"></input>
    );
  }
}

export default Search;
