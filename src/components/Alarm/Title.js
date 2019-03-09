import React, { Component } from 'react';

class Title extends Component {
  render() {
    return (
      <span className="title">{this.props.title}</span>
    );
  }
}

export default Title;
