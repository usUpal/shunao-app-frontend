import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Webcam from "./components/Webcam";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./utils/PrivateRoute";

function App() {
  return (
    <>
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route
              path="/"
              element={<ProtectedRoute Component={Dashboard} />}
            />
            <Route
              path="/sign-detect"
              element={<ProtectedRoute Component={Webcam} />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </>
  );
}

export default App;
