import axios from "axios";
import type { Categoria } from "../models/Categoria";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});

export const listar = async (url: string, setDados: Function) => {
    const resposta = await api.get<Categoria[]>(url);
    setDados(resposta.data);
}

export const buscarPorId = async (url: string, setDados: Function) => {
    const resposta = await api.get<Categoria>(url);
    setDados(resposta.data);
}

export const cadastrar = async (url: string, dados: Categoria, setDados: Function) => {
    const resposta = await api.post(url, dados);
    setDados(resposta.data);
}

export const atualizar = async (url: string, dados: Categoria, setDados: Function) => {
    const resposta = await api.put(url, dados);
    setDados(resposta.data);
}

export const deletar = async (url: string) => {
    await api.delete(url);
}