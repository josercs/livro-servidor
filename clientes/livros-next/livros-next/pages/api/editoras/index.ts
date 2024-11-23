import { NextApiRequest, NextApiResponse } from 'next';
import {ControleEditora} from '../../../classes/controle/ControleEditora';

const controleEditora = new ControleEditora();

export default (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'GET') {
        res.status(200).json(controleEditora.getEditoras());
    } else {
        res.status(405).end(`Método ${req.method} não permitido`);
    }
};
