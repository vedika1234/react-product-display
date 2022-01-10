import React, { useEffect, useState } from "react";

import ProductSlider from "./Components/ProductSlider";

import "./App.css";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  function groupBy(arr, property) {
    return arr.reduce(function (memo, x) {
      if (!memo[x[property]]) { memo[x[property]] = []; }
      memo[x[property]].push(x);
      return memo;
    }, {});
  }

  useEffect(() => {
    fetch("https://assessment-edvora.herokuapp.com")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          let segregatedList = groupBy(result, 'brand_name')
          setItems(segregatedList);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

  return (
    <div className="App">
      <div className={'left-panel'}>{'left panel'}</div>
      <div>

        {Object.keys(items).map((brand) => {
          return <><ProductSlider items={items[brand]} brand={brand} /></>
        })}
      </div>


    </div>
  );
}

export default App;
