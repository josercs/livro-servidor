// routes/livros.js
import express from 'express';
import { obterLivros, incluir, excluir } from '../modelo/livro-dao.js';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const livros = await obterLivros();
    res.json(livros);
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao obter livros' });
  }
});

router.post('/', async (req, res) => {
  try {
    const livro = req.body;
    await incluir(livro);
    res.json({ mensagem: 'Livro incluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao incluir livro' });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const codigo = req.params.id;
    await excluir(codigo);
    res.json({ mensagem: 'Livro excluído com sucesso' });
  } catch (error) {
    res.status(500).json({ mensagem: 'Erro ao excluir livro' });
  }
});

export default router;
