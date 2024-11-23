// pages/api/livros/index.ts
import { NextApiRequest, NextApiResponse } from 'next';
import ControleLivro from '../classes/controle/ControleLivro'; 

const controleLivro = new ControleLivro(); // Instanciando a classe ControleLivro

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        // Retorna todos os livros
        res.status(200).json(controleLivro.obterLivros());
    } else if (req.method === 'POST') {
        // Inclui um novo livro
        const livro = req.body;
        controleLivro.incluir(livro);
        res.status(200).json({ message: 'Livro incluído com sucesso' });
    } else {
        res.status(405).end(`Método ${req.method} não permitido`);
    }
};
