import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Movies = () => {
  const [movies, setMovies] = useState([]);        // original DB movies
  const [filteredMovies, setFilteredMovies] = useState([]); // search result

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const token = localStorage.getItem("token");

        const res = await axios.get(
          `${import.meta.env.VITE_API_URL}api/movies/all`,
          {
            headers: {
              token: token,
            },
          }
        );

        setMovies(res.data);
        setFilteredMovies(res.data); //  initially all movies
      } catch (error) {
        console.error(error);
      }
    };

    fetchMovies();
  }, []);

  //  SEARCH FUNCTION (frontend only)
  const handleSearch = (text) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );

    setFilteredMovies(filtered);
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">All Movies</h1>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie._id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Movies;
