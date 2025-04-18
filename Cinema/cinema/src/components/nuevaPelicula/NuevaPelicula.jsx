import React from 'react'
import { useState } from 'react';



const NuevaPelicula = ({ onFilmsAdded }) => {
    const [titulo, setTitulo] = useState("");
    const [director, setDirector] = useState("");
    const [duracion, setDuracion] = useState(0);
    const [calificacionPorEdad, setCalificacionPorEdad] = useState(0);
    const [imagen, setImagen] = useState("");
    const [cine, setCine] = useState("");
  
    const handleAddFilm = (e) => {
      e.preventDefault();
  
      // Crear el objeto de la nueva película
      const newFilm = {
        titulo,
        director,
        duracion,
        calificacionPorEdad,
        imagen,
        cine
      };
  
      // Llamar a la función onFilmsAdded que se pasó como prop
      onFilmsAdded(newFilm);
  
      // Limpiar el formulario
      setTitulo("");
      setDirector("");
      setDuracion(0);
      setCalificacionPorEdad(0);
      setImagen("");
      setCine("");
    };
  
    return (
      <div className="container mt-4">
        <h2 className="text-center">Nueva Película</h2>
        <form onSubmit={handleAddFilm}>
          <div className="mb-3">
            <label htmlFor="titulo" className="form-label">Título</label>
            <input
              type="text"
              className="form-control"
              id="titulo"
              value={titulo}
              onChange={(e) => setTitulo(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="director" className="form-label">Director</label>
            <input
              type="text"
              className="form-control"
              id="director"
              value={director}
              onChange={(e) => setDirector(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="duracion" className="form-label">Duración</label>
            <input
              type="number"
              className="form-control"
              id="duracion"
              value={duracion}
              onChange={(e) => setDuracion(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="calificacionPorEdad" className="form-label">Clasificación por Edad</label>
            <input
              type="text"
              className="form-control"
              id="calificacionPorEdad"
              value={calificacionPorEdad}
              onChange={(e) => setCalificacionPorEdad(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="imagen" className="form-label">Imagen</label>
            <input
              type="text"
              className="form-control"
              id="imagen"
              value={imagen}
              onChange={(e) => setImagen(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="cine" className="form-label">Cine</label>
            <input
              type="text"
              className="form-control"
              id="cine"
              value={cine}
              onChange={(e) => setCine(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary">Agregar Película</button>
        </form>
      </div>
    );
  };
  

export default NuevaPelicula;