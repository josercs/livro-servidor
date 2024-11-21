import Livro from './livro-schema.js';

// Função para obter livros
export async function obterLivros() {
  return await Livro.find();
}

// Função para incluir um livro
export async function incluir(livro) {
  return await Livro.create(livro);
}

// Função para excluir um livro
export async function excluir(codigo) {
  return await Livro.deleteOne({ _id: codigo });
}