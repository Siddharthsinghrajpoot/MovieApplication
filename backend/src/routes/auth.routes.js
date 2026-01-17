import express from "express";
import User from "../models/User.js";
import jwt from "jsonwebtoken"
const router=express.Router();

router.get('/hello',(req,res)=>{

res.send("hello world")

});
router.post("/register", async (req, res) => {
  const { name, email, password, role } = req.body;

  const user = await User.create({
    name,
    email,
    password,
    role // admin or user (frontend se)
  });

  res.json({ message: "Registration successful" });
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email, password });
  if (!user) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },process.env.jwt_secret 
  
  );

  res.json({ token, role: user.role });
});






export default router;