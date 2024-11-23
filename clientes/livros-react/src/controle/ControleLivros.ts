import { Livro } from '../modelo/Livro';

// URL base do servidor Express
const baseURL = "http://localhost:3030/livros";

// Interface para compatibilidade com o MongoDB
interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

export class ControleLivro {
  // Método para obter todos os livros
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseURL, { method: "GET" });
    const dados: LivroMongo[] = await resposta.json();

    return dados.map(
      (livro) =>
        new Livro(
          livro._id || "", 
          livro.codEditora,
          livro.titulo,
          livro.resumo,
          livro.autores
        )
    );
  }

  // Método para incluir um novo livro
  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null, 
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores,
    };

    const resposta = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo),
    });

    return resposta.ok;
  }

  // Método para excluir um livro pelo código
  async excluir(codigo: string): Promise<boolean> {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    return resposta.ok; 
  }
}
