import mongoose from 'mongoose';

// Configurações da conexão
const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
};

// Conectando ao banco de dados MongoDB
const banco = mongoose.connect('mongodb://localhost:27017/livro-servidor', options)
  .then(() => console.log('Conexão com o MongoDB realizada com sucesso!'))
  .catch(err => console.error('Erro ao conectar ao MongoDB:', err));

export default mongoose;
