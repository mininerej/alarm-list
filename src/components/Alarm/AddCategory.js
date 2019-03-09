import React, { Component } from 'react';

class AddCategory extends Component {
  onClick(){
    this.props.showNewCategoryInput();
  }
  show() {
      this.refs.addCategory.style.display = 'block'
  }
  hide(){
    this.refs.addCategory.style.display = "none"

  }
  render() {
    return (
      <button ref="addCategory" className="add-category" onClick={this.onClick.bind(this)}>Add Category</button>
    );
  }
}

export default AddCategory;
