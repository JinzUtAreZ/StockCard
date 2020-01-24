import React from "react";
//import List from '@material-ui/core/List';
//import ListItem from '@material-ui/core/ListItem';
//import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
//import ListItemText from '@material-ui/core/ListItemText';

import { MDBListGroup, MDBListGroupItem, MDBContainer } from "mdbreact";

// import Checkbox from '@material-ui/core/Checkbox';
// import IconButton from '@material-ui/core/IconButton';
// import DeleteIcon from '@material-ui/icons/Delete';

const TodoList = ({ todos, deleteTodo }) => (
  <MDBListGroup>
    {todos.map((todo, index) => (
      //   <ListItem key={index.toString()} dense button>
      //     <Checkbox tabIndex={-1} disableRipple />
      //     <ListItemText primary={todo} />
      //     <ListItemSecondaryAction>
      //       <IconButton
      //         aria-label="Delete"
      //         onClick={() => {
      //           deleteTodo(index);
      //         }}
      //       >
      //         <DeleteIcon />
      //       </IconButton>
      //     </ListItemSecondaryAction>
      //   </ListItem>
      <MDBListGroup key={index.toString()}>
        <MDBListGroupItem>{todo}</MDBListGroupItem>
      </MDBListGroup>
    ))}
  </MDBListGroup>
);

export default TodoList;
