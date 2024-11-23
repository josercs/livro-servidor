import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';
import { Livro } from './modelo/Livro';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = ({ livro, excluir }: { livro: Livro; excluir: (codigo: number) => void }) => {
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <button
          onClick={() => excluir(livro.codigo)}
          className="btn btn-danger btn-sm ms-2"
        >
          Excluir
        </button>
      </td>
      <td>{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista = () => {
  const [livros, setLivros] = useState<Livro[]>([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    if (!carregado) {
      controleLivro
        .obterLivros()
        .then((dados) => setLivros(dados))
        .finally(() => setCarregado(true));
    }
  }, [carregado]);

  const excluir = async (codigo: number) => {
    await controleLivro.excluir(codigo);
    setCarregado(false);
  };

  return (
    <main className="container mt-4">
      <h1>Catálogo de Livros</h1>
      <table className="table table-striped">
        <thead className="table-dark">
          <tr>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro) => (
            <LinhaLivro key={livro.codigo} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
