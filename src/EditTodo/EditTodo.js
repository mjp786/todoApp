import React, { Component } from "react";

const editTodo = props => {
  return (
    <div>
      Title:
      <input
        id="title"
        type="text"
        // value={this.state.title}
        onChange={props.handleTitle}
      />
      <br />
      Discription:
      <br />
      <textarea
        id="discription"
        // value={this.state.discription}
        onChange={props.handleDiscription}
        // rows="10"
        // cols="20"
      />
      <br />
      <button
        onClick={() => {
          props.editDataInStorage(props.i);
        }}
      >
        Test
      </button>
    </div>
  );
};
export default editTodo;
