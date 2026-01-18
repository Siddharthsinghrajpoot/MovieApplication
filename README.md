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

⚠️ Note: Backend is fully complete — including admin operations (Add/Update/Delete movies).
Frontend is user-facing only: users can view and search movies. Admin functionalities in frontend will be added in the future.

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

Admin (Backend Ready)

Add movie

Update movie

Delete movie

Admin operations not exposed in frontend yet

🧩 Component Structure

frontend/src/
├── pages/
│   ├── Register.jsx
│   ├── Login.jsx
│   └── Movies.jsx
├── components/
│   ├── ProtectedRoutes.jsx
│   ├── MovieCard.jsx
│   └── SearchBar.jsx

Clear separation of concerns

Reusable components for scalability

📡 API Endpoints
Auth

POST /api/auth/register → Register user

POST /api/auth/login → Login user

Movies

GET /api/movies/all → All users

GET /api/movies/:id → All users

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

Environment Variables

Backend .env: PORT, MONGO_URI, JWT_SECRET

Frontend .env: VITE_API_URL=http://localhost:3000

Why This Project is Interview-Ready

Backend fully functional with secure role-based API

Frontend ready for users with protected routes

JWT-based authentication

Clean code structure and reusable components

Demonstrates full-stack skills in MERN + JWT + Protected Routes