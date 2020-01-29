import React, { Fragment } from "react";

const listStyle = {
  marginBottom: "5px"
};

const SelectedList = ({ todos, clickDelete }) => (
  <Fragment>
    {todos.length > 0 && <h4> Printed List: </h4>}
    <ul className="list-group">
      {todos.map((todo, index) => (
        <li
          className="list-group-item z-depth-2 "
          style={listStyle}
          key={todo.value}
        >
          {todo.label}
          <i
            className="fas fa-trash float-right hoverable grey p-2 white-text rounded-circle"
            onClick={() => clickDelete(todo.value)}
          ></i>
        </li>
      ))}
    </ul>
  </Fragment>
);

export default SelectedList;
