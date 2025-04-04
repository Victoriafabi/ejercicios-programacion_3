import { useState } from "react";

const NewBeer = ({ addBeer }) => {
  const [beerName, setBeerName] = useState("");
  const [beerStyle, setBeerStyle] = useState("");
  const [price, setPrice] = useState(0);
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBeer({ beerName, beerStyle, price: Number(price), available });
    setBeerName("");
    setBeerStyle("");
    setPrice(0);
    setAvailable(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        maxWidth: "300px",
        marginTop: "20px",
        padding: "15px",
        border: "1px solid #ccc",
        borderRadius: "8px",
        backgroundColor: "#f9f9f9"
      }}
    >
      <h2>Agregar Nueva Cerveza</h2>
      <input
        type="text"
        placeholder="Nombre"
        value={beerName}
        onChange={(e) => setBeerName(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Estilo"
        value={beerStyle}
        onChange={(e) => setBeerStyle(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Precio en USD"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        required
      />
      <label>
        Disponible:
        <input
          type="checkbox"
          checked={available}
          onChange={(e) => setAvailable(e.target.checked)}
        />
      </label>
      <button type="submit">Agregar Cerveza</button>
    </form>
  );
};

export default NewBeer;