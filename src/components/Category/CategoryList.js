import React, { Component } from 'react';
import Category from './Category';

class CategoryList extends Component {
  show() {
      this.refs.categoryList.style.display = 'block'
  }
  hide(){
    this.refs.categoryList.style.display = "none"

  }
  render() {
    return (
      <div ref="categoryList" className="category-list">
        {
          this.props.categories.map(category => <Category setCurrentCategory={this.props.setCurrentCategory} key={category} title={category} />)
        }
        {this.props.children}
      </div>
    );
  }
}

export default CategoryList;
