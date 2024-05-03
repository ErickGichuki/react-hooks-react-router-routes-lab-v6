import axios from "axios";
import { useEffect, useState } from "react";

function Directors() {
  const [directors, setDirectors] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:4000/directors')
    .then(res => {
      setDirectors(res.data)
    })
  },[])
  return (
    <>
      <header>
        <h1>Directors Page</h1>
        {/* What component should go here? */}
      </header>
      <main>
        {/* Director info here! */}
        {directors.map((director, index) =>(
          <article key={index}>
            <h2>{director.name}</h2>
            <ul>
              {director.movies.map((movie,index) => (
                <li key={index}>{movie}</li>
              ))}
            </ul>
          </article>
        ))}
      </main>
    </>
  );
};

export default Directors;
