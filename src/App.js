import React, { useReducer, useState } from "react";
import "./styles.css";
import Form from "./Form";
import ListTask from "./ListTask";
import { initialState, reducer } from "./reducers.js";
import { MyContext } from "./context.js";

export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [id, setId] = useState("");

  let checkId = i => {
    setId(i);
  };

  return (
    <MyContext.Provider value={{ state, dispatch, checkId }}>
      <div className="jumbotron">
        <h4 className="text-center">CRUD con React</h4>
      </div>
      <div className="container">
        <div className="row">
          <ListTask />
          <Form id={id} />
        </div>
      </div>
    </MyContext.Provider>
  );
}
