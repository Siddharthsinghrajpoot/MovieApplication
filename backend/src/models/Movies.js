import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: String,
  description: String,
  rating: Number,
  releaseDate: String,
  duration: Number,
  image: String
});

export default mongoose.model("Movie", movieSchema);
 