import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import axios from "axios";

function Home() {
  const [movies, setMovies] = useState([]);

  useEffect(() =>{
    axios.get('http://localhost:4000/movies')
    .then(res => (
      console.log(res.data),
      setMovies(res.data)
    ))
  },[])
  return (
    <>
      <header>
        <h1>Home Page</h1>
      </header>
      <main>
         {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie}/>
         ))} 
      </main>
    </>
  );
};

export default Home;
