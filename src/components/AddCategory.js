import React, { Component } from 'react';

class AddCategory extends Component {
  onClick(){
    // this.props.addNewCategory();
  }
  
  render() {
    return (
      <button className="add-category" onClick={this.onClick.bind(this)}>AddCategory</button>
    );
  }
}

export default AddCategory;
