import React, { Component } from 'react';

class NewCategory extends Component {
  onKeyPressed(e){
    console.log(e.key)
    if (e.key === "Enter" && e.target.value){
        this.props.addNewCategory(e.target.value);
        e.target.value = ""
    } else if(e.key === "Escape"){
      e.target.style.display = 'none'
    }
  }
  onFocusOut(e) {
    if (e.target.value){
        this.props.addNewCategory(e.target.value);
        e.target.value = ""
    }
    
  }
  render() {
    return (
        <input onKeyDown={this.onKeyPressed.bind(this)} onBlur={this.onFocusOut.bind(this)} className="new-category"/>
    );
  }
}

export default NewCategory;
