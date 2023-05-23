import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "../components/Layout";
import Login from "../components/pages/Login";
import Quiz from "../components/pages/Quiz";
import Result from "../components/pages/Result";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/App.css";
import SignUp from "./pages/SignUp";
import Home from "./pages/home";

function App() {
  return (
    <Router>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/quiz" element={<Quiz />} />
            <Route path="/result" element={<Result />} />
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
