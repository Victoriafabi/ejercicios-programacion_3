import React from 'react'
import filmsInitial from '../../Data/Films'
import Pelicula from '../pelicula/Pelicula'


const Cartelera = ({films}) => {
    
    
return (
    <div className="container mt-4">
    <div className="row justify-content-center">
      {filmsInitial.map((film, index) => (
        <div className="col-md-4 d-flex justify-content-center" key={index}>
          <Pelicula {...film} />
        </div>
      ))}
    </div>
  </div>
);
};

export default Cartelera