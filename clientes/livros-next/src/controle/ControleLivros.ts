import { Livro } from '../modelo/Livro';

const baseUrl = 'http://localhost:3030/livros';

export class ControleLivro {
  async obterLivros(): Promise<Livro[]> {
    const resposta = await fetch(baseUrl);
    return resposta.json();
  }

  async incluir(livro: Livro): Promise<void> {
    await fetch(baseUrl, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(livro),
    });
  }

  async excluir(codigo: number): Promise<void> {
    await fetch(`${baseUrl}/${codigo}`, {
      method: 'DELETE',
    });
  }
}
