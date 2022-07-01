import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Productos from "./pages/Productos";
import Productores from "./pages/Productores";
import QuienesSomos from "./pages/QuienesSomos";
import Contactanos from "./pages/Contactanos";
import Blog from "./pages/Blog";
import Registrarse from "./pages/Registrarse";
import Ingresar from "./pages/Ingresar";
import InformacionProducto from "./pages/InformacionProducto";
import InformacionMarca from "./pages/InformacionMarca";
import NavBar  from "./components/navBar/NavBar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/productos" element={<Productos />} />
        <Route path="/productores" element={<Productores />} />
        <Route path="/quienesomos" element={<QuienesSomos />} />
        <Route path="/contactanos" element={<Contactanos />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/registrarse" element={<Registrarse />} />
        <Route path="/ingresar" element={<Ingresar />} />
        <Route path="/productoinfo" element={<InformacionProducto />} />
        <Route path="/marcainfo" element={<InformacionMarca />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
