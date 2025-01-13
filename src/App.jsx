import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Sports from "./pages/Sports";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<Layout />}>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/login"
            element={<Login />}
          />
          <Route
            path="/register"
            element={<Register />}
          />
          <Route
            path="/sports"
            element={<Sports />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
