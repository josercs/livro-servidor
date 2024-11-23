import { Editora } from '../modelo/Editora';

const editoras: Array<Editora> = [
  { codEditora: 1, nome: ' Editora Vestígio' },
  { codEditora: 2, nome: 'Objetiva' },
  { codEditora: 3, nome: 'Objetiva' },
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
