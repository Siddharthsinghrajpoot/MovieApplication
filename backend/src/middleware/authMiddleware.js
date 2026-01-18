import jwt from "jsonwebtoken";

export const authMiddleware = (req, res, next) => {

  
  const token = req.headers.token;
    console.log(token);

  if (!token) {
    return res.status(401).json({ message: "Token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.jwt_secret );
    req.user = decoded; // { id, role }
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token" });
  }
};

export const adminOnly = (req, res, next) => {
  if (req.user.role !== "admin") {
    return res.status(403).json({ message: "Admin access only" });
  }
  next();
};
