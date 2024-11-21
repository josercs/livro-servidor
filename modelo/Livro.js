const mongoose = require('mongoose');

const LivroSchema = new mongoose.Schema({
    titulo: { type: String, required: true },
    resumo: { type: String, required: true },
    autores: { type: [String], required: true },
    codEditora: { type: Number, required: true },
});

module.exports = mongoose.model('Livro', LivroSchema);
