import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import ListarCategorias from "./components/categoria/ListarCategorias";
import FormCategoria from "./components/categoria/FormCategoria";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#FDFDF5]">
      <Navbar />

      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/categorias"
            element={<ListarCategorias />}
          />
          <Route
            path="/cadastrar-categoria"
            element={<FormCategoria />}
          />
          <Route
            path="/editar-categoria/:id"
            element={<FormCategoria />}
          />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;