import CategoriaService from "../../services/CategoriaService";


interface Props{
    id:number;
}


function DeletarCategoria({id}:Props){


    function deletar(){

        CategoriaService.deletar(id)
        .then(()=>{
            alert("Categoria deletada");
            window.location.reload();
        })

    }


    return(

        <button
            onClick={deletar}
            className="w-full h-full bg-[#F3B2B3] text-[#3D568F] text-lg hover:opacity-80 transition"
            style={{ fontFamily: "'Karla', sans-serif" }}
        >
            Deletar
        </button>

    )

}


export default DeletarCategoria;