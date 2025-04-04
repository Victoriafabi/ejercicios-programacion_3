import { useState } from "react";
import BeersList from "./components/BeerList";
import AvailableBeers from "./components/AvailableBeers";
import BeerCount from "./components/BeerCount";
import BeerStyles from "./components/BeerStyles";
import ChangeDollar from "./components/ChangeDollar";
import NewBeer from "./components/NewBeer";
import beersData from "./data/beers";

const App = () => {
  const [exchangeRate, setExchangeRate] = useState(1200);
  const [beers, setBeers] = useState(beersData);
  const [showDollarChange, setShowDollarChange] = useState(false);
  contt [setShowDollarChange, setSearch] = useState("")

  const toggleDollarChange = () => {
    setShowDollarChange(!showDollarChange);
  };

  const addBeer = (newBeer) => {
    setBeers([...beers, { id: beers.length + 1, ...newBeer }]);
  };

  return (
    <div>
      <h1>🍺 Cervezas 🍺</h1>
      <button onClick={toggleDollarChange}>
        {showDollarChange ? "Ocultar Cambio Dólar" : "Mostrar Cambio Dólar"}
      </button>
      {showDollarChange && (
        <ChangeDollar
          exchangeRate={exchangeRate}
          setExchangeRate={setExchangeRate}
        />
      )}

      <BeersList beers={beers} exchangeRate={exchangeRate} />
      <AvailableBeers beers={beers} exchangeRate={exchangeRate} />
      <BeerCount beers={beers} />
      <BeerStyles beers={beers} />
      <NewBeer addBeer={addBeer} />
    </div>
  );
};

export default App;