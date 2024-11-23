import { Component, OnInit } from '@angular/core';
import { ControleLivrosService } from '../controle-livros.service';
import { ControleEditoraService } from '../controle-editora.service';

@Component({
  selector: 'app-livro-lista',
  templateUrl: './livro-lista.component.html',
  styleUrls: ['./livro-lista.component.css'],
})
export class LivroListaComponent implements OnInit {
  livros: any[] = []; // Armazena os livros retornados do backend
  editoras: { codEditora: number; nome: string }[] = [];

  constructor(
    private controleLivros: ControleLivrosService,
    private controleEditoras: ControleEditoraService
  ) {}

  ngOnInit(): void {
    this.carregarLivros();
    this.editoras = this.controleEditoras.getEditoras();
  }

  carregarLivros(): void {
    this.controleLivros.obterLivros().subscribe((dados) => {
      this.livros = dados.map((livroMongo) => ({
        codigo: livroMongo._id,
        ...livroMongo,
      }));
    });
  }

  excluirLivro(codigo: string): void {
    this.controleLivros.excluir(codigo).subscribe(() => {
      this.carregarLivros();
    });
  }

  getNomeEditora(codEditora: number): string {
    const editora = this.editoras.find((e) => e.codEditora === codEditora);
    return editora ? editora.nome : 'Desconhecida';
  }
}
