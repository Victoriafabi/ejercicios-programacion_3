import React, { useState } from 'react';
import destinosIniciales from './data/destinosIniciales.jsx';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AgregarTurismo from './components/agregarTurismo/AgregarTurismo.jsx';

const App = () => {
  const [destinos, setDestinos] = useState(destinosIniciales);

  const agregarTurismo = (nuevoDestino) => {
    setDestinos([...destinos, { ...nuevoDestino, id: destinos.length + 1 }]);
  }

  return (
    <div className="container my-4">
      <h1 className="text-center mb-4">¡Bienvenidos!</h1>
      <h2 className="text-center mb-5">Destinos Turísticos</h2>

      {/* Mostrás el formulario arriba de la lista */}
      <AgregarTurismo onAgregar={agregarTurismo} />

      <div className="row mt-5">
        {destinos.map((destino) => (
          <div key={destino.id} className="col-md-3 mb-4">
            <div className="card h-100 shadow-sm">
              <img 
                src={destino.imagen} 
                alt={destino.nombre} 
                className="card-img-top" 
                style={{ height: '200px', objectFit: 'cover' }} 
              />
              <div className="card-body">
                <h5 className="card-title">{destino.nombre}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{destino.pais}</h6>
                <p className="card-text">{destino.descripcion}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;



