import React from "react";

import "./App.css";

const App = () => {
  const [counter, setCounter] = React.useState(0);

  const updateCounter = () => {
    setCounter(counter + 1);
  };

  const doubledCounter = counter * 2;

  return (
    <div className="App">
      <button onClick={updateCounter}>Update Counter</button> {counter}
      <p>{`Twice Counter: ${doubledCounter}`}</p>
      <input type="checkbox" checked />
      {/*counter >= 5 ? (
        <p>That's a lot of button pressing!</p>
      ) : (
        <p>Keep pressing that button!</p>
      )}
      {counter && (
        <div
          style={{
            backgroundColor: "green",
            width: 40,
            height: 40,
            textAlign: "center",
          }}
        />
      )*/}
    </div>
  );
};

export default App;
