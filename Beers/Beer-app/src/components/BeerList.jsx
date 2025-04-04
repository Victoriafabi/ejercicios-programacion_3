const BeersList = ({ beers, exchangeRate }) => {
    return (
      <div>
        <h2>Lista de Cervezas</h2>
        <ul>
          {beers.map(({ id, beerName, beerStyle, price }) => (
            <li key={id}>
              {beerName} - {beerStyle} - ${price * exchangeRate} ARS
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BeersList;