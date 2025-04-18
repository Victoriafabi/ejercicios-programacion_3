import React from 'react'

const Pelicula = ({titulo, director, duracion, calificacionPorEdad, imagen, cine}) => {
  return (
    <div className='card mb-3' style={{width: '18rem'}}>
        <img src={imagen} className="card-img-top" alt={titulo} />
      <div className="card-body">
        <h5 className="card-title text-center">{titulo}</h5>
        <p className="card-text"><strong>Director:</strong> {director}</p>
        <p className="card-text"><strong>Duración:</strong> {duracion} min</p>
        <p className="card-text"><strong>Clasificación:</strong> {calificacionPorEdad}</p>
        <p className="card-text"><strong>Cine:</strong> {cine}</p>
      </div>
    </div>
  );
}

export default Pelicula