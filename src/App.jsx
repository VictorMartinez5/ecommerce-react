//react
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import NavBar from "./components/NavBar/NavBar"
import HomePage from "./pages/HomePage/HomePage"
import ProductsPage from "./pages/ProductsPage/ProductsPage"
import AboutPage from "./pages/AboutPage/AboutPage"
import DetailPage from "./pages/DetailPage/DetailPage"
import ShopPage from "./pages/ShopPage/ShopPage";
import { CartProvider } from "./context/cart";



const App = () => {
  return (
    <Router>
      <CartProvider>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:category" element={<ProductsPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/detail/:id" element={<DetailPage />} />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
      </CartProvider>
    </Router>
  );
}

export default App