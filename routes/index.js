// routes/index.js
import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
  res.send('Bem-vindo à API de Livros');
});

export default router;