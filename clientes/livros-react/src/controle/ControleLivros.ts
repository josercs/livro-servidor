import Livro from "../modelo/Livro";

const baseURL = "http://localhost:3030/livros";

interface LivroMongo {
  _id: string | null;
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

class ControleLivros {
  async obterLivros(): Promise<Livro[]> {
    const response = await fetch(baseURL, { method: "GET" });
    if (!response.ok) {
      throw new Error('Failed to fetch');
    }
    const data: LivroMongo[] = await response.json();
    return data.map((livro) => new Livro(
      livro._id || "",
      livro.codEditora,
      livro.titulo,
      livro.resumo,
      livro.autores
    ));
  }

  async excluir(codigo: string): Promise<boolean> {
    const response = await fetch(`${baseURL}/${codigo}`, { method: "DELETE" });
    if (!response.ok) {
      throw new Error('Failed to delete');
    }
    return response.ok;
  }

  async incluir(livro: Livro): Promise<boolean> {
    const livroMongo: LivroMongo = {
      _id: null,
      codEditora: livro.codEditora,
      titulo: livro.titulo,
      resumo: livro.resumo,
      autores: livro.autores
    };
  
    const response = await fetch(baseURL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(livroMongo)
    });
  
    // Log para diagnosticar a resposta do servidor
    const responseBody = await response.text();
    console.log('Resposta do servidor:', responseBody);
  
    if (!response.ok) {
      throw new Error(`Failed to include: ${responseBody}`);
    }
    return response.ok;
  }
  
}

export default ControleLivros;
