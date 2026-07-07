import { useEffect, useState } from "react";
import type { Categoria } from "../../models/Categoria";
import CardCategoria from "./CardCategoria";
import { listar } from "../../services/CategoriaService";


function ListarCategorias() {

    const [categorias, setCategorias] = useState<Categoria[]>([]);


    function buscarCategorias() {
        listar("/categorias", setCategorias);
    }


    useEffect(() => {
        buscarCategorias();
    }, []);


    return (
        <div className="bg-[#FDFDF5] min-h-screen px-10 py-8">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

                {
                    categorias.map(categoria => (
                        <CardCategoria
                            key={categoria.id}
                            categoria={categoria}
                        />
                    ))
                }

            </div>

        </div>
    );
}


export default ListarCategorias;