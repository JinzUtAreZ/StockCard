import React, { Fragment } from "react";

const listStyle = {
  marginBottom: "5px"
};

const SelectedList = ({ todos, deleteTodo }) => (
  <Fragment>
    {todos.length > 0 && <h4> Printed List: </h4>}
    <ul class="list-group">
      {todos.map((todo, index) => (
        <li
          class="list-group-item z-depth-2 "
          style={listStyle}
          key={index.toString()}
        >
          {todo}
          <i
            class="fas fa-trash float-right hoverable grey p-2 white-text rounded-circle"
            onClick={deleteTodo}
          ></i>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default SelectedList;
