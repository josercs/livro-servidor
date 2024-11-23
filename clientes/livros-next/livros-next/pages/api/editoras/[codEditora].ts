import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from '.';

export default (req: NextApiRequest, res: NextApiResponse) => {
    const codEditora = Number(req.query.codEditora);

    if (req.method === 'GET') {
        res.status(200).json({ nome: controleEditora.getNomeEditora(codEditora) });
    } else {
        res.status(405).end(`Método ${req.method} não permitido`);
    }
};
