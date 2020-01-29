import React from "react";
// import "./components/Bootstrap.min.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap-css-only/css/bootstrap.min.css";
import "mdbreact/dist/css/mdb.css";
// import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import "../src/design/App.css";

import StockReducer from "../src/reducers/StockPrintReducers";

//import Tester from "./Pages/TestPages";
import StockCard from "./Pages/StockCard";
//import ButtonMDB from "./Pages/ButtonMDB";
//import TodoList from "../src/components/ListData/FormAndList";

const rootReducer = combineReducers({
  stock: StockReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        {/* <Tester /> */}
        <StockCard />
        {/* <ButtonMDB /> */}
        {/* <TodoList /> */}
      </div>
    </Provider>
  );
}

export default App;
