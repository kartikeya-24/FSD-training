import movies from "./movies";
import "./movies.css"
function Movie(){
    return (
        <div  key={movies.id} className="movie-container">
            {
                movies.map(movie=>(
                    <div key={movie.id}>
                        <h3>{movie.id}</h3>
                        <h3>{movie.title}</h3>
                        <h3>{movie.cost}</h3>
                        <h3>{movie.language}</h3>
                        <img src={movie.image}  height="300px"/>
                    </div>
                ))
            }
        </div>
    );
};

export default  Movie;