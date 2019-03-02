import React, { Component } from 'react';
import Search from './Search';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

class Nav extends Component {
  render() {
    return (
      <div className="nav">
        <Search></Search>
        <CategoryList 
        addNewCategory={this.props.addNewCategory} 
        setCurrentCategory={this.props.setCurrentCategory} 
        categories={this.props.categories}>
        {this.props.children}</CategoryList>
        <AddCategory
        className="add-category" 
        showNewCategoryInput={this.props.showNewCategoryInput}>Add Category</AddCategory>
      </div>
    );
  }
}

export default Nav;
