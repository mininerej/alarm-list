import React, { Component } from 'react';

class AddCategory extends Component {
  onClick(){
    this.props.showNewCategoryInput();
  }
  render() {
    return (
      <button className="add-category" onClick={this.onClick.bind(this)}>Add Category</button>
    );
  }
}

export default AddCategory;
