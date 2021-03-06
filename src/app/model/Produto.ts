import { Categoria } from "./Categoria";
import { Usuario } from "./Usuario";

export class Produto {
    public id: number;
    public descricao: string;
    public nome: string;
    public preco: number;
    public unidade: number;
    public imagem: string;
    public usuario: Usuario;
    public categoria: Categoria;
    
}