import "./beers.css";

const exchangeRate = 1200;

const BeerCard = ({ beerName, beerStyle, price }) => {
  return (
    <div className="beer-card">
      <h3>{beerName}</h3>
      <p>
        <strong>Estilo:</strong> {beerStyle}
      </p>
      <p>
        <strong>Precio:</strong> ${price * exchangeRate} ARS
      </p>
    </div>
  );
};

export default BeerCard;