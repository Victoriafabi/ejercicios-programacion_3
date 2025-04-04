const BeerStyles = ({ beers }) => {
    const uniqueStyles = [...new Set(beers.map((beer) => beer.beerStyle))];
  
    return (
      <div>
        <h2>Estilos de Cerveza</h2>
        <ul>
          {uniqueStyles.map((style, index) => (
            <li key={index}>{style}</li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default BeerStyles;