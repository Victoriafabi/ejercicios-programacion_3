import React from "react";

const MovieSearch = ({ MovieSearch, setMovieSearch }) => {
    return (
        <div>
            <form>
                <label>Buscar película:</label>
                <input
                type="text"
                placeholder="Ingrese el nombre de la película"
                value={MovieSearch}
                onChange={(e) => setMovieSearch(e.target.value)}
                
                
                />
            </form>
        </div>
    )
}

export default MovieSearch