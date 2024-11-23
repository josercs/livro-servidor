import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
<<<<<<< HEAD
  { codEditora: 1, nome: ' Editora Vestígio' },
  { codEditora: 2, nome: 'Objetiva' },
  { codEditora: 3, nome: 'Objetiva' },
=======
  { codEditora: 1, nome: 'Editora A' },
  { codEditora: 2, nome: 'Editora B' },
  { codEditora: 3, nome: 'Editora C' },
>>>>>>> e38382cf4e1597cd73a166e19e9db66782abae6d
];

export class ControleEditora {
  getEditoras() {
    return editoras;
  }

  getNomeEditora(codEditora: number) {
    const editora = editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }
}
