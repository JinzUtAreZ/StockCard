import React, { Fragment } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

import * as ListActions from "../../actions/StockPrintActions";
import { useSelector, useDispatch } from "react-redux";

const FormAndList = () => {
  //const { todos, addTodo, deleteTodo } = useTodoState([]);
  const optionList = useSelector(state => state.stock.optionList);
  const dispatch = useDispatch();

  return (
    <Fragment>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            dispatch(ListActions.addTodo(trimmedText));
          }
        }}
      />

      <TodoList
        todos={optionList}
        deleteTodo={dispatch(ListActions.deleteTodo)}
      />
    </Fragment>
  );
};

export default FormAndList;
