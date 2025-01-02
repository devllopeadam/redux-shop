import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./pages/Layout";
import Products from "./pages/Products";
import Cart from "./pages/Cart";
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
            path="/products"
            element={<Products />}
          />
          <Route
            path="/cart"
            element={<Cart />}
          />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
