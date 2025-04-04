const BeerCount = ({ beers }) => {
    const redCount = beers.filter((beer) => beer.beerStyle === "Red").length;
    const ipaCount = beers.filter((beer) => beer.beerStyle === "IPA").length;
  
    return (
      <div>
        <h2>Conteo de Cervezas</h2>
        <p>IPA: {ipaCount}</p>
        <p>Red: {redCount}</p>
      </div>
    );
  };
  
  export default BeerCount;