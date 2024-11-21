const express = require('express');
const router = express.Router();

// Rota padrão
router.get('/', (req, res) => {
    res.send('Bem-vindo à API de Livros!');
});

module.exports = router;
