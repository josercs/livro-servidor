import React, { useState, useEffect } from 'react';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>
        {livro.titulo}
        <button 
          onClick={() => excluir(livro.codigo)} 
          className="btn btn-danger btn-sm ms-2">
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
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  // Atualização do useEffect para chamadas assíncronas
  useEffect(() => {
    if (!carregado) {
      controleLivro
        .obterLivros()
        .then((dados) => setLivros(dados)) // Atualiza os livros após a resposta
        .finally(() => setCarregado(true)); // Garante que o estado "carregado" seja atualizado
    }
  }, [carregado]);

  // Método excluir ajustado para ser assíncrono
  const excluir = (codigo) => {
    controleLivro
      .excluir(codigo)
      .then(() => setCarregado(false)); // Marca para recarregar a lista após exclusão
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
          {livros.map((livro, index) => (
            <LinhaLivro key={index} livro={livro} excluir={excluir} />
          ))}
        </tbody>
      </table>
    </main>
  );
};

export default LivroLista;
