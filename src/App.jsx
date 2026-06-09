import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/navbar";
import MainPage from "./pages/main-landing-page";
import Footer from "./components/footer";
import ProductsPage from "./pages/productsPage.jsx";
import ProductDetail from "./pages/product-detail-page.jsx";
import ShoppingCart from "./pages/shopping-cart.jsx";
import ProductManagement from "./pages/ProductManagement.jsx";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/product/:productId" element={<ProductDetail />} />
          <Route path="/cart" element={<ShoppingCart />} />
          <Route path="/productManagement" element={<ProductManagement />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}
export default App;
