import React from "react";
import { Link } from "react-router-dom";


const NavBar = () => {
    return (
      <nav
        className="d-flex justify-content-between align-items-center bg-black text-white px-4 py-2 shadow"
        style={{ position: "fixed", top: 0, width: "100%", zIndex: 1000 }}
      >
        <ul className="nav nav-pills mb-0">
          <li className="nav-item">
            <Link to="/" className="nav-link text-white">
              Cartelera
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/NuevaPelicula" className="nav-link text-white">
              Nueva Película
            </Link>
          </li>
        </ul>
      </nav>
    );
  };
  
  export default NavBar;