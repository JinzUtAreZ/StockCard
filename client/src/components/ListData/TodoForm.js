import React, { useState } from "react";
import { MDBInput } from "mdbreact";
//import useInputState from "./useInputState";

import * as ListActions from "../../actions/StockPrintActions";

const TodoForm = ({ saveTodo }) => {
  const [value, setValue] = useState("");

  const onChange = event => {
    setValue(event.target.value);
  };

  return (
    <form
    // onSubmit={event => {
    //   event.preventDefault();

    //   saveTodo(value);
    //   setValue("");
    // }}
    >
      {/* <MDBInput
        label="Material input"
        variant="outlined"
        placeholder="Add todo"
        margin="normal"
        onChange={onChange}
        value={value}
      /> */}
    </form>
  );
};

export default TodoForm;
