import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";
import ProtectedRoute from "./components/ProtectedRoutes";

const App = () => {
  const token = localStorage.getItem("token");

  return (
    <BrowserRouter>
      <Routes>

        {/* DEFAULT ROUTE */}
        <Route
          path="/"
          element={
            token
              ? <Navigate to="/movies" replace />
              : <Navigate to="/register" replace />
          }
        />

        {/* REGISTER */}
        <Route
          path="/register"
          element={token ? <Navigate to="/movies" replace /> : <Register />}
        />

        {/* LOGIN */}
        <Route
          path="/login"
          element={token ? <Navigate to="/movies" replace /> : <Login />}
        />

        {/* PROTECTED MOVIES */}
        <Route
          path="/movies"
          element={
            <ProtectedRoute>
              <Movies />
            </ProtectedRoute>
          }
        />

        {/* PROTECTED ADD MOVIE */}
        <Route
          path="/add-movie"
          element={
            <ProtectedRoute>
              <AddMovie />
            </ProtectedRoute>
          }
        />

        {/* ANY WRONG URL */}
        <Route path="*" element={<Navigate to="/" replace />} />

      </Routes>
    </BrowserRouter>
  );
};

export default App;
