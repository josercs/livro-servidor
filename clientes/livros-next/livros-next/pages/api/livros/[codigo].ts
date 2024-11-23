import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const codigo = Number(req.query.codigo);

    if (req.method === 'DELETE') {
        controleLivro.excluir(codigo);
        res.status(200).json({ message: 'Livro excluído com sucesso' });
    } else {
        res.status(405).end(`Método ${req.method} não permitido`);
    }
};
