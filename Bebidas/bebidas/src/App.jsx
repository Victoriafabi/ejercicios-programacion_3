import React, { useState } from 'react';
import DrinksList from './components/drinksList/DrinksList';

const initialBebidas = [
  { id: 1, name: "Vino Malbec", category: "Vino" },
  { id: 2, name: "Whisky Johnnie Walker", category: "Whisky" },
  { id: 3, name: "Cerveza IPA", category: "Cerveza" },
  { id: 4, name: "Gin London Dry", category: "Gin" },
  { id: 5, name: "Café Colombiano", category: "Café" }
];

const App = () => {
  const [bebidas] = useState(initialBebidas); // Renombramos la constante original para evitar conflictos
  
  return (
    <div>
      <h1>Lista de bebidas</h1>
      <DrinksList drinks={bebidas} />
    </div>
  );
};

export default App;
