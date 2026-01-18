import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MovieCard from "../components/MovieCard";
import SearchBar from "../components/SearchBar";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, []);

  const fetchMovies = async () => {
    const token = localStorage.getItem("token");

    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}api/movies/all`,
      {
        headers: { token },
      }
    );

    setMovies(res.data);
    setFilteredMovies(res.data);
  };

  //  DELETE FUNCTION
  const handleDelete = async (id) => {
    try {
      const token = localStorage.getItem("token");

      await axios.delete(
        `${import.meta.env.VITE_API_URL}api/movies/${id}`,
        {
          headers: { token },
        }
      );

      // frontend se bhi hata do
      const updated = movies.filter((movie) => movie._id !== id);
      setMovies(updated);
      setFilteredMovies(updated);

      alert("Movie deleted successfully");
    } catch (error) {
      console.error(error);
      alert("Delete failed");
    }
  };

  const handleSearch = (text) => {
    const filtered = movies.filter((movie) =>
      movie.title.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredMovies(filtered);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">All Movies</h1>

        <button
          onClick={() => navigate("/add-movie")}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add Movie
        </button>
      </div>

      <SearchBar onSearch={handleSearch} />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie._id}
            movie={movie}
            onDelete={handleDelete}   // 
          />
        ))}
      </div>
    </div>
  );
};

export default Movies;
