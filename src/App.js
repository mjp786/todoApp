import React, { Component } from "react";
import "./App.css";
// import { stringify } from "querystring";

class App extends Component {
  state = {
    showform: false,
    title: "",
    discription: ""
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

  addDataToStorage = e => {
    e.preventDefault();
    var titlee, discriptionn;
    titlee = this.state.title;
    discriptionn = this.state.discription;

    //alert(titlee);
    //alert(discriptionn);

    var ele = {
      title: titlee,
      discription: discriptionn
    };

    //alert(ele.discription);

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
    const buttonStyle = {
      backgroundColor: "white",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
      margin: "2px"
    };

    let form = null;

    if (this.state.showform) {
      form = (
        <div className="form">
          {/* <form
            onSubmit={() => {
              this.addDataToStorage();
            }}
          > */}
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
          {/* <input type="submit" value="Submit" /> */}
          {/* </form> */}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>ToDo App</h1>
        <button style={buttonStyle} onClick={this.showForm}>
          Add ToDo
        </button>
        <button style={buttonStyle}>Show ToDo</button>
        {form}
      </div>
    );
  }
}

export default App;
