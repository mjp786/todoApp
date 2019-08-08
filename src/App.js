import React, { Component } from "react";
import "./App.css";
import TodoList from "./TodoList/TodoList";
// import { stringify } from "querystring";

class App extends Component {
  state = {
    showform: false,
    title: "",
    discription: "",
    todoList: [],
    editNumber: -1
  };

  showForm = () => {
    let toShow = this.state.showform;
    this.setState({ showform: !toShow });
  };

  handleTitle = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleDiscription = e => {
    this.setState({
      discription: e.target.value
    });
  };

  deleteTodo = index => {
    //alert("delete button is pressed. index is : " + index);

    var aa = [...this.state.todoList];
    //console.log(aa);
    aa.splice(index, 1);
    this.setState({
      todoList: aa
    });
    //console.log(aa);
  };

  editClicked = index => {
    // console.log("edit is clicked at index " + index);

    this.setState({
      editNumber: index
    });
  };
  editDataInStorage = index => {
    //alert("Edit data in storage. index is : " + index);
    //preventDefault();
    this.state.todoList[index].title = this.state.title;
    this.state.todoList[index].discription = this.state.discription;
    this.setState({
      title: "",
      discription: "",
      editNumber: -1
    });
  };

  addDataToStorage = e => {
    e.preventDefault();
    var titlee, discriptionn;
    titlee = this.state.title;
    discriptionn = this.state.discription;

    //alert(titlee);
    //alert(discriptionn);
    //console.log(e);
    var ele = {
      title: titlee,
      discription: discriptionn
    };

    var jj = this.state.todoList;
    jj.push(ele);
    this.setState({
      todoList: jj
    });
    //console.log(this.state.todoList);

    let todo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    //alert(JSON.parse(localStorage.users));
    todo.push(ele);
    localStorage.setItem("todo", JSON.stringify(todo));
    this.setState({
      title: "",
      discription: ""
    });

    this.setState({
      showform: false
    });
  };

  render() {
    let form = null;

    if (this.state.showform) {
      form = (
        <form className="f1">
          <h2>ToDo form</h2>
          Title:
          <br />
          <input
            id="title"
            type="text"
            value={this.state.title}
            onChange={this.handleTitle}
          />
          <br />
          Discription:
          <br />
          <textarea
            id="discription"
            value={this.state.discription}
            onChange={this.handleDiscription}
            rows="10"
            cols="20"
          />
          <br />
          <button
            onClick={e => {
              this.addDataToStorage(e);
            }}
          >
            Test
          </button>
        </form>
      );
    }

    return (
      <div className="App">
        <h1>ToDo App</h1>

        <button id="buttt" onClick={this.showForm}>
          Add Another ToDo
        </button>

        {form}

        <TodoList
          todo={this.state.todoList}
          clicked={d => this.deleteTodo(d)}
          number={i => this.editClicked(i)}
          editDataInStorage={i => this.editDataInStorage(i)}
          editNum={this.state.editNumber}
          handleTitle={this.handleTitle}
          handleDiscription={this.handleDiscription}
        />
      </div>
    );
  }
}

export default App;
