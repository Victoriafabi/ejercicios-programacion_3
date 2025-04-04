const ChangeDollar = ({ exchangeRate, setExchangeRate }) => {
    return (
      <div>
        <h2>Cambiar Valor del Dólar</h2>
        <input
          type="number"
          value={exchangeRate}
          onChange={(e) => setExchangeRate(Number(e.target.value))}
        />
      </div>
    );
  };
  
  export default ChangeDollar;