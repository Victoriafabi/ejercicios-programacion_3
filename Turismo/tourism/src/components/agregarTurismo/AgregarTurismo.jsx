import React, { useState } from 'react';

const AgregarTurismo = ({ onAgregar }) => {
  const [nuevoDestino, setNuevoDestino] = useState({
    nombre: "",
    pais: "",
    descripcion: "",
    imagen: ""
  });

  const handleChange = (e) => {
    setNuevoDestino({
      ...nuevoDestino,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!nuevoDestino.nombre || !nuevoDestino.pais) {
      alert("Por favor completá al menos el nombre y el país.");
      return;
    }
    onAgregar(nuevoDestino);
    setNuevoDestino({
      nombre: "",
      pais: "",
      descripcion: "",
      imagen: ""
    });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-5">
      <div className="row">
        <div className="col-md-3">
          <input 
            type="text" 
            name="nombre" 
            value={nuevoDestino.nombre} 
            onChange={handleChange} 
            placeholder="Nombre" 
            className="form-control" 
          />
        </div>
        <div className="col-md-3">
          <input 
            type="text" 
            name="pais" 
            value={nuevoDestino.pais} 
            onChange={handleChange} 
            placeholder="País" 
            className="form-control" 
          />
        </div>
        <div className="col-md-3">
          <input 
            type="text" 
            name="descripcion" 
            value={nuevoDestino.descripcion} 
            onChange={handleChange} 
            placeholder="Descripción" 
            className="form-control" 
          />
        </div>
        <div className="col-md-3">
          <input 
            type="text" 
            name="imagen" 
            value={nuevoDestino.imagen} 
            onChange={handleChange} 
            placeholder="URL de imagen" 
            className="form-control" 
          />
        </div>
      </div>
      <div className="text-center mt-3">
        <button type="submit" className="btn btn-primary">Agregar Destino</button>
      </div>
    </form>
  );
};

export default AgregarTurismo;
