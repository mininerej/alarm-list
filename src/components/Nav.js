import React, { Component } from 'react';
import Search from './Search';
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

class Nav extends Component {
  addNewCategory(){

  }
  render() {
    return (
      <div className="nav">
        <Search></Search>
        <CategoryList addNewCategory={this.props.addNewCategory} setCurrentCategory={this.props.setCurrentCategory} categories={this.props.categories}></CategoryList>
        <AddCategory></AddCategory>
      </div>
    );
  }
}

export default Nav;
