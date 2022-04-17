import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import About from "./components/About";
import Dashboard from "./components/Dashboard";
import Dictionary from "./components/Dictionary";
import Images from "./components/Images";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Webcam from "./components/Webcam";
import { AuthProvider } from "./utils/AuthContext";
import ProtectedRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div className="bg-custom">
      <Router>
        <AuthProvider>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/about" element={<About/>} />
            <Route
              path="/"
              element={<ProtectedRoute Component={Dashboard} />}
            />
            <Route
              path="/sign-detect"
              element={<ProtectedRoute Component={Webcam} />}
            />
            <Route
              path="/character-wise"
              element={<ProtectedRoute Component={Images} />}
            />
            <Route
              path="/dictionary"
              element={<ProtectedRoute Component={Dictionary} />}
            />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
