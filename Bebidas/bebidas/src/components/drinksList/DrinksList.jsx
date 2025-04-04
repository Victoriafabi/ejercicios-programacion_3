import React, { useState } from 'react';
import DrinksSearch from './DrinksSearch';

const DrinksList = ({ drinks }) => {
  const [drinksSearch, setDrinksSearch] = useState("");

  const filteredDrinks = drinks.filter((drink) =>
    drinksSearch
      ? drink.name.toLowerCase().includes(drinksSearch.toLowerCase()) ||
        drink.category.toLowerCase().includes(drinksSearch.toLowerCase())
      : true
  );

  return (
    <div>
      <DrinksSearch drinksSearch={drinksSearch} setDrinksSearch={setDrinksSearch} />

      <h2>Drinks</h2>
      {filteredDrinks.length ? (
        <ul>
          {filteredDrinks.map((drink) => (
            <li key={drink.id}>
              {drink.name} - {drink.category}
            </li>
          ))}
        </ul>
      ) : (
        <p>No se encontró la bebida</p>
      )}
    </div>
  );
};

export default DrinksList;