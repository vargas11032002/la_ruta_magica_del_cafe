import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Store from "./pages/Store";
import Productos from "./pages/productos";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import CartProvider from "./Cart";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Routes>
            <Route
              path="/"
              element={
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                  <Register />
                </div>
              }
            />
            <Route
              path="/login"
              element={
                <div className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
                  <Login />
                </div>
              }
            />
            <Route
              path="/*"
              element={<Navbar />}
            />
          </Routes>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/success" element={<Success />} />
            <Route path="/cancel" element={<Cancel />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
