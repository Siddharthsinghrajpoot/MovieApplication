🎬 Movie Application (MERN Stack)

A full-stack Movie Management Application using MERN with JWT Authentication and Role-Based Access.

This project demonstrates secure APIs, protected frontend routes, and a clear separation of user/admin functionalities.

🚀 Tech Stack

Frontend

React (Vite), React Router DOM

Tailwind CSS

Axios

JWT Authentication (token in localStorage)

Backend

Node.js, Express.js

MongoDB + Mongoose

JWT-based auth

Role-based middleware (admin/user)

🔐 Authentication Flow

Register: Name, Email, Password, Role (admin/user)

Login: JWT token returned and stored in localStorage

Protected Routes: Movies page accessible only if token is valid

🎥 Features

User (Frontend Ready)

Register & Login

View all movies

Search movie (UI ready, functionality can be extended)

Protected access using JWT

Admin (Frontend+Backend Ready)

Add movie

Update movie

Delete movie

All admin operations are protected via JWT + role check


🧩 Project Structure

frontend/src/
├── pages/
│   ├── Register.jsx
│   ├── Login.jsx
│   ├── Movies.jsx
│   └── AddMovie.jsx
├── components/
│   ├── ProtectedRoutes.jsx
│   ├── MovieCard.jsx
│   └── SearchBar.jsx

Clean folder structure

Reusable components

Easy to scale and extend

📡API Endpoints 

Auth Routes

POST /api/auth/register → Register user

POST /api/auth/login → Login user

Movie Routes

GET /api/movies/all → All logged-in users

GET /api/movies/:id → All logged-in users

POST /api/movies/add → Admin only

PUT /api/movies/:id → Admin only

DELETE /api/movies/:id → Admin only

▶️ Running the Project
Backend

cd backend
npm install
npm run dev

Frontend

cd frontend
npm install
npm run dev

💡 Why This Project is Interview-Ready

Fully functional JWT-based authentication

Proper role-based access control

Secure backend APIs

Protected frontend routes

Clean and scalable project structure

Demonstrates real-world MERN stack implementation


