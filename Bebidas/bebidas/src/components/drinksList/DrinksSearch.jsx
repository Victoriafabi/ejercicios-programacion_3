import React from 'react';

const DrinksSearch = ({ drinksSearch, setDrinksSearch }) => {
  return (
    <div>
      <h2>Buscar Bebida</h2>
      <input
        type="text"
        placeholder="Buscar bebida..."
        value={drinksSearch}
        onChange={(e) => setDrinksSearch(e.target.value)}
      />
    </div>
  );
};

export default DrinksSearch;