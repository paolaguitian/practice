import React from "react";
import ReactDOM from "react-dom";
import FetchData from './fetchDataHook';


const App = () => {
  const [StarWars, error] = FetchData('https://swapi.dev/api/people');
  return (
    <div>
      <h1>
        Fetch It
      </h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));