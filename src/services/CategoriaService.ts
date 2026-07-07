import axios from "axios";
import type { Categoria } from "../models/Categoria";

const api = axios.create({
    baseURL: "https://farmacia-jjxo.onrender.com/"
});

class CategoriaService {


    listar() {
        return api.get<Categoria[]>("/categorias");
    }


    buscarPorId(id: number) {
        return api.get<Categoria>(`/categorias/${id}`);
    }


    cadastrar(categoria: Categoria) {
        return api.post("/categorias", categoria);
    }


    atualizar(categoria: Categoria) {
    return api.put("/categorias", categoria);
}


    deletar(id: number) {
        return api.delete(`/categorias/${id}`);
    }

}


export default new CategoriaService();