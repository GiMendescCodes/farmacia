import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-[#3D568F] shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-10 py-5">

        <Link
          to="/"
          className="text-[#9FBAF1] text-3xl hover:text-[#FDFDF5] transition-all duration-300"
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >
          VivaBem
        </Link>

        <div
          className="flex items-center gap-8 text-lg"
          style={{ fontFamily: "'Julius Sans One', sans-serif" }}
        >

          <Link
            to="/categorias"
            className="text-[#9FBAF1] border-b-2 border-transparent hover:text-[#FDFDF5] hover:border-[#FDFDF5] transition-all duration-300"
          >
            Categorias
          </Link>


          <Link
            to="/cadastrar-categoria"
            className="text-[#9FBAF1] border-b-2 border-transparent hover:text-[#FDFDF5] hover:border-[#FDFDF5] transition-all duration-300"
          >
            Cadastrar Categoria
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;