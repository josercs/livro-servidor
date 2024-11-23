import React from 'react';
import ControleEditora from './controle/ControleEditora'; // Ajuste o caminho conforme necessário

const LinhaLivro = ({ livro, excluir }) => {
  const controleEditora = new ControleEditora();
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr>
      <td>{livro.titulo}</td>
      <td>{livro.resumo}</td>
      <td>{livro.autores.join(', ')}</td>
      <td>{nomeEditora}</td>
      <td>
        <button onClick={() => excluir(livro.codigo)}>Excluir</button>
      </td>
    </tr>
  );
};

export default LinhaLivro;