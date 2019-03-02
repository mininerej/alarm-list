import React, { Component } from 'react';
import Category from './Category';
import NewCategory from './NewCategory';

class CategoryList extends Component {
  render() {
    return (
      <div className="category-list">
      {
        this.props.categories.map(category => <Category setCurrentCategory={this.props.setCurrentCategory} key={category} title={category}/>)
      }
      {this.props.children}
      </div>
    );
  }
}

export default CategoryList;
