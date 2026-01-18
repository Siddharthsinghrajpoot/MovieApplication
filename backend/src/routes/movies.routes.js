import express from "express";
import Movie from "../models/Movies.js";
import { authMiddleware, adminOnly } from "../middleware/authMiddleware.js";
const router = express.Router();



// GET all movies (any logged-in user)
// ----------------------------
router.get("/all", authMiddleware, async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

// GET a single movie by ID
// ----------------------------
router.get("/:id", authMiddleware, async (req, res) => {
  const movie = await Movie.findById(req.params.id);
  res.json(movie);
});

router.post("/Add", authMiddleware, adminOnly, async (req, res) => {
 // destructure movie fields from req.body
  const { title, description, rating, releaseDate, duration, image } = req.body;

  // create movie in DB
  const movie = await Movie.create({
    title,
    description,
    rating:Number(rating) ,
    releaseDate: new Date(releaseDate),
    duration: Number(duration),
    image
  });

  // send response
  res.json({ message: "Movie added successfully", movie });
});

// UPDATE a movie by ID (admin only)
// ----------------------------
router.put("/:id", authMiddleware, adminOnly, async (req, res) => {
  const { title, description, rating, releaseDate, duration, image } = req.body;

  const movie = await Movie.findByIdAndUpdate(
    req.params.id,
    { title, description, rating, releaseDate, duration, image },
    { new: true }
  );

  res.json({ message: "Movie updated successfully", movie });
});

// ----------------------------
// DELETE a movie by ID (admin only)
// ----------------------------
router.delete("/:id", authMiddleware, adminOnly, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.json({ message: "Movie deleted successfully" });
});






export default router;