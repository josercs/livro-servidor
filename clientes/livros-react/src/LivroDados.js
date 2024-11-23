import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ControleLivros from "./controle/ControleLivros";

const LivroDados = () => {
  const [codEditora, setCodEditora] = useState("");
  const [titulo, setTitulo] = useState("");
  const [resumo, setResumo] = useState("");
  const [autores, setAutores] = useState("");
  const navigate = useNavigate();

  const opcoes = [
    { value: 1, text: "Editora 1" },
    { value: 2, text: "Editora 2" },
    { value: 3, text: "Editora 3" },
  ];

  const tratarCombo = (e) => {
    setCodEditora(e.target.value);
  };

  const controleLivros = new ControleLivros();

  const incluir = () => {
    const novoLivro = {
      codigo: "", // Código inicial vazio
      codEditora: parseInt(codEditora),
      titulo,
      resumo,
      autores: autores.split("\n"),
    };

    controleLivros
      .incluir(novoLivro)
      .then(() => navigate("/")); // Redireciona após sucesso
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
