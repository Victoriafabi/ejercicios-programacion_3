function contarVelasMaximas(velas) {
    const alturaMaxima = Math.max(...velas);
    
    const cantidad = velas.filter(vela => vela === alturaMaxima).length;
    
    return cantidad;
  }
  
  const velas = [4, 4, 1, 3];
  console.log(contarVelasMaximas(velas)); 
  