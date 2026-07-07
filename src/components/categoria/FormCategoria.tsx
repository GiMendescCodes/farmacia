import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CategoriaService from "../../services/CategoriaService";


function FormCategoria() {

    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    const [nome, setNome] = useState("");



    useEffect(() => {

        if (id !== undefined) {

            CategoriaService.buscarPorId(Number(id))
                .then(response => {
                    setNome(response.data.nome);
                });

        }

    }, [id]);



    function salvar(e: React.FormEvent<HTMLFormElement>) {

        e.preventDefault();


        if (id !== undefined) {

            CategoriaService.atualizar({

                id: Number(id),
                nome: nome

            })
            .then(() => {

                alert("Categoria atualizada com sucesso!");
                navigate("/categorias");

            });


        } else {


            CategoriaService.cadastrar({

                id: 0,
                nome: nome

            })
            .then(() => {

                alert("Categoria cadastrada com sucesso!");
                navigate("/categorias");

            });

        }

    }



    return (

        <div className="bg-[#FDFDF5] min-h-screen">

            <form
                onSubmit={salvar}
                className="flex flex-col items-center gap-5 py-10"
            >

                <h1 className="font-['Julius_Sans_One'] text-[#3D568F] text-2xl">

                    {id === undefined
                        ? "CADASTRAR CATEGORIA"
                        : "ATUALIZAR CATEGORIA"}

                </h1>


                <div className="w-full max-w-md flex flex-col gap-1">

                    <label className="text-[#3D568F] text-xs font-['Karla']">
                        Título categoria
                    </label>

                    <input
                        value={nome}
                        onChange={(e) => setNome(e.target.value)}
                        placeholder="Descreva sua categoria"
                        className="
                        w-full
                        h-10
                        px-3
                        rounded-md
                        border-2
                        border-[#3D568F]
                        text-[#3D568F]
                        placeholder:text-[#9FBAF1]
                        outline-none
                        font-['Karla']
                        "
                    />

                </div>


                <button
                    type="submit"
                    className="
                    bg-[#9FBAF1]
                    text-[#3D568F]
                    px-8
                    py-2
                    rounded-full
                    text-xs
                    font-['Karla']
                    shadow-md
                    hover:bg-[#8AA9E8]
                    transition
                    "
                >

                    {id === undefined ? "CADASTRAR" : "ATUALIZAR"}

                </button>


            </form>

        </div>

    );

}


export default FormCategoria;