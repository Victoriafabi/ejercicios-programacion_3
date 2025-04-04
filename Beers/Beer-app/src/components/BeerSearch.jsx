import React from "react";

const BeerSearch = ({ search, setSearch }) => {
    return (
        <div>
            <h2>Buscar Cervezas</h2>
            <input
                type="text"
                placeholder="Búsqueda"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
        </div>
    );
};

export default BeerSearch;
