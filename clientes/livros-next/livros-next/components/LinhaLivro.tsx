import React from 'react';
import {ControleEditora} from '../classes/controle/ControleEditora';
import { Livro } from '../classes/modelo/Livro';

const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = ({ livro, excluir }) => {
    return (
        <tr>
            <td>{livro.titulo}</td>
            <td>{controleEditora.getNomeEditora(livro.codEditora)}</td>
            <td>{livro.autores.join(', ')}</td>
            <td>
                <button className="btn btn-danger" onClick={excluir}>Excluir</button>
            </td>
        </tr>
    );
};
