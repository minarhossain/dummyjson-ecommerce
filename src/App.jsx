import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import ProductDetails from "./components/ProductDetails";
import Navbar from "./components/Navbar";
import CartPage from "./pages/CartPage";
import About from "./pages/About";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
