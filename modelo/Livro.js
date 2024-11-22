import express from 'express';
import { obterLivros, incluir, excluir } from '../modelo/livro-dao.js';

const router = express.Router();

// Rota GET: Obter todos os livros
router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros); // Envia os livros como resposta no formato JSON
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao obter os livros', erro: err.message });
  }
});

// Rota POST: Incluir um novo livro
router.post('/', async (req, res) => {
  try {
    const novoLivro = await incluir(req.body); // Recebe os dados do livro pelo corpo da requisição
    res.status(201).json({ mensagem: 'Livro incluído com sucesso', livro: novoLivro });
  } catch (err) {
    res.status(400).json({ mensagem: 'Erro ao incluir o livro', erro: err.message });
  }
});

// Rota DELETE: Excluir um livro pelo _id
router.delete('/:codigo', async (req, res) => {
  const { codigo } = req.params; // Extrai o código (_id) da URL
  try {
    const resultado = await excluir(codigo);
    if (resultado.deletedCount > 0) {
      res.json({ mensagem: 'Livro excluído com sucesso' });
    } else {
      res.status(404).json({ mensagem: 'Livro não encontrado' });
    }
  } catch (err) {
    res.status(500).json({ mensagem: 'Erro ao excluir o livro', erro: err.message });
  }
});

export default router;
