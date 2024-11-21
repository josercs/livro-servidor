import mongoose from './conexao.js';

const LivroSchema = new mongoose.Schema({
  titulo: String,
  autor: String,
  editora: String,
  ano: Number
});

const Livro = mongoose.model('Livro', LivroSchema, 'livros');

export default Livro;
