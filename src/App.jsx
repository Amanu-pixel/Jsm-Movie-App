import { useState, useEffect } from "react";
import Search from "./Components/Search";

const API_BASE_URL = "https://api.themoviedb.org/3";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`,
  },
};

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const fetchMovies = async () => {
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

      const response = await fetch(endpoint, API_OPTIONS);

      if (!response.ok) {
        throw new Error("Failed to fetch movies");
      }

      const data = await response.json();

      console.log(data);

      setMovies(data.results);
      setErrorMessage("");
    } catch (error) {
      console.error(error);
      setErrorMessage("Error fetching movies. Please try again later.");
    }
  };

  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <main>
      <div className="pattern" />

      <div className="wrapper">
        <header>
          <img src="/hero.png" alt="Hero Banner" />

          <h1>
            Find <span className="text-gradient">Movies</span> You Will Enjoy
            Without The Hassle
          </h1>

          <Search
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
          />
        </header>

        {errorMessage && <p>{errorMessage}</p>}

        <section>
          <h2>Popular Movies</h2>

          {movies.length > 0 ? (
            <ul>
              {movies.map((movie) => (
                <li key={movie.id}>{movie.title}</li>
              ))}
            </ul>
          ) : (
            !errorMessage && <p>Loading movies...</p>
          )}
        </section>
      </div>
    </main>
  );
};

export default App;