import React, { useState } from "react";
import CounterView from "./CounterView";

import "./App.css";
import { users } from "./data";

const Person = (props) => {
  return <p>{props.name}</p>;
};

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <div className="App">
        {users.map((user, i) => (
          <Person key={i} name={`${user.firstName} ${user.lastName}`} />
        ))}
      </div>
      <CounterView counter={counter} setCounter={setCounter} />
    </>
  );
};

export default App;
