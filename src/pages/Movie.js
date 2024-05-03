import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "../components/MovieCard";

function Movie() {
  const {id} = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:4000/')
    .then(res => {
      setMovie(res.data)
    })
  })
  return (
    <>
      <header>
        {movie && <MovieCard movie={movie}/>}
        {/* What component should go here? */}
      </header>
      <main>
        {/* Movie info here! */}
        {movie && (
          <div>
            <h1>{movie.title}</h1>
            <p>Time: {movie.time} minuts</p>
            <div>
              Genres: {" "}
              {movie.genres.map((genre, index) => (
                <span key={index}>{genre}</span>
              ))}
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default Movie;
