import React, { useState, useEffect, useMemo } from 'react';
import ControleLivros from './controle/ControleLivros';
import LinhaLivro from './LinhaLivro';

const LivroLista = () => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  const controleLivros = useMemo(() => new ControleLivros(), []);

  useEffect(() => {
    const fetchLivros = async () => {
      try {
        const resultado = await controleLivros.obterLivros();
        setLivros(resultado);
        setCarregado(true);
      } catch (error) {
        console.error('Erro ao obter livros:', error);
      }
    };

    fetchLivros();
  }, [carregado, controleLivros]);

  const excluir = (codigo) => {
    controleLivros
      .excluir(codigo)
      .then(() => setCarregado(false));
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
            <th>Ações</th>
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
