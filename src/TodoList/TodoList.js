import React, { Component } from "react";
import "./TodoList.css";
import EditTodo from "../EditTodo/EditTodo.js";

// // const showButton= ()=>{

// // return(
// //   <div>
// //     <button>edit</button>
// //     <button>delete</button>
// //   </div>
// // );

// };

class todoList extends Component {
  state = {
    showButton: false
  };

  // toggleHover = () => {
  //   this.setState({
  //     showButton: !this.state.showButton
  //   });
  // };

  render() {
    // let butt = null;
    // if (this.state.showButton == true)
    //   butt = (
    //     <div>
    //       <button onClick={this.}>edit</button>
    //       <button onClick={this.props.clicked}>delete</button>
    //     </div>
    //   );

    return this.props.todo.map((todo, index) => (
      <ul>
        <li
          className="listItem"
          //key={index}
          // onMouseEnter={this.toggleHover}
          // onMouseLeave={this.toggleHover}
        >
          {todo.title + " -> " + todo.discription}
          <button onClick={() => this.props.number(index)}>edit</button>
          <button onClick={() => this.props.clicked(index)}>delete</button>
          {this.props.editNum == index ? (
            <EditTodo
              handleTitle={this.props.handleTitle}
              handleDiscription={this.props.handleDiscription}
              editDataInStorage={i => this.props.editDataInStorage(i)}
              i={index}
            />
          ) : null}
        </li>
      </ul>
    ));
  }
}

export default todoList;
