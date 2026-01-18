const MovieCard = ({ movie }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 hover:shadow-lg transition duration-200">

      {/*  Movie Image */}
      {movie.image && (
        <img
          src={movie.image}
          alt={movie.title}
          className="w-full h-48 object-cover rounded-lg mb-3"
        />
      )}

      <h2 className="text-xl font-semibold mb-2">{movie.title}</h2>

      <p className="text-gray-700 mb-2">{movie.description}</p>

      <p className="text-gray-500 mb-2">
        Rating: {movie.rating}
      </p>

      <p className="text-gray-400 text-sm">
        Release Date: {movie.releaseDate}
      </p>
    </div>
  );
};

export default MovieCard;
