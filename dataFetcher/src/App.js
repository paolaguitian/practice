import React from "react";
import ReactDOM from "react-dom";
import FetchData from './fetchDataHook';
import InfoCard from './InfoCard'

const App = () => {
  const [characterData, peopleLoading] = FetchData('https://swapi.dev/api/people');
  const [speciesData, speciesLoading] = FetchData('https://swapi.dev/api/species/');
  return (
    <div>
      <h1>
        Fetch It
      </h1>
      {!peopleLoading ? <InfoCard data={characterData} /> : null}
      {!speciesLoading ? <InfoCard data={speciesData} /> : null}
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));