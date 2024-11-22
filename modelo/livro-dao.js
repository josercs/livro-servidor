import Livro from './livro-schema.js';

// Função para obter todos os livros
const obterLivros = async () => {
  return await Livro.find(); // Retorna todos os livros do banco
};

// Função para incluir um novo livro
const incluir = async (livro) => {
  return await Livro.create(livro); // Cria e salva um novo livro no banco
};

// Função para excluir um livro pelo _id
const excluir = async (codigo) => {
  return await Livro.deleteOne({ _id: codigo }); // Remove o livro com o _id correspondente
};

// Exporta as funções
export { obterLivros, incluir, excluir };
