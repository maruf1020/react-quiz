import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import PrivateOutlet from "../Routes/PrivateOutlet";
import PublicOutlet from "../Routes/PublicOutlet";
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
            <Route path="/*" element={<PublicOutlet />}>
              <Route path="signup" element={<SignUp />} />
              <Route path="login" element={<Login />} />
            </Route>
            <Route path="/*" element={<PrivateOutlet />}>
              <Route path="quiz/:id" element={<Quiz />} />
              <Route path="result/:id" element={<Result />} />
            </Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </Router>
  );
}

export default App;
