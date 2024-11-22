import mongoose from './conexao.js';

// Definindo o esquema do livro
const LivroSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  titulo: { type: String, required: true },
  codEditora: { type: Number, required: true },
  resumo: { type: String },
  autores: { type: [String], required: true },
});

// Associando o esquema ao modelo de dados
const Livro = mongoose.model('Livro', LivroSchema, 'livros');

export default Livro;
