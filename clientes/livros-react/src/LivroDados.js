import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ControleLivro } from './controle/ControleLivros';
import { ControleEditora } from './controle/ControleEditora';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (evento) => {
    setCodEditora(Number(evento.target.value));
  };

  const incluir = (evento) => {
    evento.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo: titulo,
      resumo: resumo,
      autores: autores.split('\n'),
      codEditora: codEditora,
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={incluir}>
        <div className="form-group">
          <label>Título:</label>
          <input
            type="text"
            className="form-control"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Resumo:</label>
          <textarea
            className="form-control"
            value={resumo}
            onChange={(e) => setResumo(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Autores (um por linha):</label>
          <textarea
            className="form-control"
            value={autores}
            onChange={(e) => setAutores(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label>Editora:</label>
          <select
            className="form-control"
            value={codEditora}
            onChange={tratarCombo}
          >
            {opcoes.map((opcao) => (
              <option key={opcao.value} value={opcao.value}>
                {opcao.text}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary mt-3">
          Salvar
        </button>
      </form>
    </main>
  );
};

export default LivroDados;
