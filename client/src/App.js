import React from "react";
import "./components/Bootstrap.min.css";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import ReduxThunk from "redux-thunk";

import StockReducer from "../src/reducers/StockPrintReducers";

//import Tester from "./Pages/TestPages";
import StockCard from "./Pages/StockCard";

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
      </div>
    </Provider>
  );
}

export default App;
