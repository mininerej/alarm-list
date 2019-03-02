import React, { Component } from 'react';
import Nav from './Nav';
import Content from './Content';
import { fakeList, categories } from '../dummy'
import NewAlarm from './NewAlarm'
import NewCategory from './NewCategory'
import CategoryList from './CategoryList';
import AddCategory from './AddCategory';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      alarmList: fakeList,
      categoryList: categories,
      currentCategory: categories[0],
      searchList: []
    }
  }
  search(query) {
    if (query === "") {
      this.setState({
        searchList: [],
      })
      this.refs.categoryList.show()
      this.refs.addCategory.show()
    } else {
      const newSearchList = this.state.alarmList.filter(alarm => alarm.title.indexOf(query) !== -1)
      this.setState({
        searchList: newSearchList,
      })
      this.refs.categoryList.hide();
      this.refs.addCategory.hide();
    }

  }
  showNewCategoryInput() {
    this.refs.newCategory.showNewCategoryInput();
  }
  showNewAlarmInput() {
    this.refs.newAlarm.showNewAlarmInput();
  }
  toggleDone(title) {
    for (var i = 0; i < this.state.alarmList.length; i++) {
      if (this.state.alarmList[i].title === title) {
        const newAlarm = {
          category: this.state.alarmList[i].category,
          title: title,
          done: !this.state.alarmList[i].done,
          memo: this.state.alarmList[i].memo,
        }
        const newAlarmList = [...this.state.alarmList];
        newAlarmList[i] = newAlarm;
        this.setState({
          alarmList: newAlarmList
        })
      }
    }
  }
  setCurrentCategory(category) {
    this.setState({
      currentCategory: category
    })
  }
  addNewCategory(category) {
    this.setState({
      categoryList: [...this.state.categoryList, category],
      currentCategory: category
    })
  }
  removeAlarm(title) {
    for (var i = 0; i < this.state.alarmList.length; i++) {
      if (this.state.alarmList[i].title === title) {
        const newAlarmList = this.state.alarmList.slice();
        newAlarmList.splice(i, 1)
        this.setState({
          alarmList: newAlarmList
        })
      }
    }
  }
  fixAlarmTitle(before, after) {
    for (var alarm of this.state.alarmList) {
      if (alarm.title === before) {
        alarm.title = after;
      }
    }
  }
  addNewAlarm(title) {
    const newAlarm = {
      category: this.state.currentCategory,
      title: title,
      done: false,
      memo: ""
    }
    this.setState({
      alarmList: [...this.state.alarmList, newAlarm]
    })
  }
  render() {
    return (
      <div className="App">
        <Nav
          search={this.search.bind(this)}
          searchList={this.state.searchList}
          toggleDone={this.toggleDone.bind(this)}
          removeAlarm={this.removeAlarm.bind(this)}
          fixAlarmTitle={this.fixAlarmTitle.bind(this)}
          showNewCategoryInput={this.showNewCategoryInput.bind(this)}>
          <CategoryList
            ref="categoryList"
            addNewCategory={this.addNewCategory.bind(this)}
            setCurrentCategory={this.setCurrentCategory.bind(this)}
            categories={this.state.categoryList}>
            <NewCategory ref="newCategory" addNewCategory={this.addNewCategory.bind(this)} />
          </CategoryList>
          <AddCategory
            ref="addCategory"
            className="add-category"
            showNewCategoryInput={this.props.showNewCategoryInput}>Add Category</AddCategory>
        </Nav>
        <Content
          toggleDone={this.toggleDone.bind(this)}
          showNewAlarmInput={this.showNewAlarmInput.bind(this)}
          currentCategory={this.state.currentCategory}
          removeAlarm={this.removeAlarm.bind(this)}
          fixAlarmTitle={this.fixAlarmTitle.bind(this)}
          addNewAlarm={this.addNewAlarm.bind(this)}
          title={this.state.currentCategory}
          alarmList={this.state.alarmList}>
          <NewAlarm ref="newAlarm" addNewAlarm={this.addNewAlarm.bind(this)} />
        </Content>
      </div>
    );
  }
}

export default App;
