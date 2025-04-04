const AvailableBeers = ({ beers, exchangeRate }) => {
    const availableBeers = beers.filter(({ available }) => available);
  
    return (
      <div>
        <h2>Cervezas Disponibles</h2>
        <ul>
          {availableBeers.map(({ id, beerName, beerStyle, price }) => (
            <li key={id}>
              {beerName} - {beerStyle} - ${price * exchangeRate} ARS
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default AvailableBeers;