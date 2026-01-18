import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AddMovie = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [rating, setRating] = useState("");
  const [releaseDate, setReleaseDate] = useState("");
  const [duration, setDuration] = useState("");
  const [image, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !description || !rating) {
      alert("Please fill all required fields");
      return;
    }

    try {
      const token = localStorage.getItem("token");

    const res=  await axios.post(
        `${import.meta.env.VITE_API_URL}api/movies/Add`,
        {
          title,
          description,
          rating,
          releaseDate,
          duration,
          image,
        },
        {
          headers: {
            token: token,
          },
        }
      );
      console.log(res.data.movie);
      

      alert(res.data.message);
      navigate("/movies");
    } catch (error) {
      console.error(error);
      alert("Failed to add movie");
    }
  };

  return (
    <div className="max-w-xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Add Movie</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="number"
          placeholder="Rating"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="date"
          value={releaseDate}
          onChange={(e) => setReleaseDate(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Duration (minutes)"
          value={duration}
          onChange={(e) => setDuration(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700"
        >
          Add Movie
        </button>
      </form>
    </div>
  );
};

export default AddMovie;
