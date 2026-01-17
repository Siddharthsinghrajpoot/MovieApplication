import dotenv from "dotenv";
import express from "express";
import connectDB from "./config/db.js";
import authRoutes from "./routes/auth.routes.js";
import moviesRoutes from "./routes/movies.routes.js";
import cors from "cors";

dotenv.config();
const app = express();

const PORT= process.env.PORT||3000;
app.use(cors());
app.use(express.json());

app.use("/api/auth", authRoutes); 
 app.use("/api/movies", moviesRoutes);

connectDB().then(() => {
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}).catch((err) => {
  console.error("Failed to connect to DB", err);
});
