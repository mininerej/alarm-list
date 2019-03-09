import React, { Component } from 'react';

class Category extends Component {
  onClick(e){
    this.props.setCurrentCategory(e.target.value);
  }
  render() {
    return (<input className="category" onClick={this.onClick.bind(this)} defaultValue={this.props.title} readOnly/>);
  }
}

export default Category;
