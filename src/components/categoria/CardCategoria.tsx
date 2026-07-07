import { useNavigate } from "react-router-dom";
import type { Categoria } from "../../models/Categoria";
import DeletarCategoria from "./DeletarCategoria";


interface Props {
    categoria: Categoria;
}


function CardCategoria({ categoria }: Props) {

    const navigate = useNavigate();


    return (
        <div className="w-full rounded-3xl overflow-hidden shadow-md flex flex-col">

            <div
                className="bg-[#3D568F] h-20 px-5 flex items-center"
                style={{ fontFamily: "'Julius Sans One', sans-serif" }}
            >
                <h2 className="text-[#FDFDF5] text-3xl">
                    CATEGORIA
                </h2>
            </div>


            <div
                className="bg-[#9FBAF1] h-28 flex items-center justify-center px-4"
                style={{ fontFamily: "'Julius Sans One', sans-serif" }}
            >
                <p className="text-[#3D568F] text-xl text-center break-words">
                    {categoria.nome}
                </p>
            </div>


            <div className="flex h-14">

                <button
                    onClick={() => navigate(`/editar-categoria/${categoria.id}`)}
                    className="w-1/2 bg-[#EAF3B2] text-[#3D568F] text-lg hover:opacity-80 transition"
                    style={{ fontFamily: "'Karla', sans-serif" }}
                >
                    Editar
                </button>


                <div className="w-1/2">
                    <DeletarCategoria id={categoria.id}/>
                </div>

            </div>

        </div>
    );
}


export default CardCategoria;