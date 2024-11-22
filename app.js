import express from 'express';
import cors from 'cors';
import Livro from './modelo/livro-schema.js';
import livrosRouter from './routes/livros.js';
import indexRouter from './routes/index.js';
import usersRouter from './routes/users.js';

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Rotas padrão
app.use('/', indexRouter);
app.use('/users', usersRouter);

// Configurar a rota /livros
app.use('/livros', livrosRouter);

// Rota para obter todos os livros
app.get('/livros', async (req, res) => {
  try {
    const livros = await Livro.find();
    res.json(livros);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Rota para adicionar um novo livro
app.post('/livros', async (req, res) => {
  try {
    const livro = new Livro({
      _id: new mongoose.Types.ObjectId(),
      ...req.body,
    });
    await livro.save();
    res.status(201).json(livro);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Iniciar o servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
export default app;