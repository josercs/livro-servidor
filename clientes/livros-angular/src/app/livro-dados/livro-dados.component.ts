import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ControleLivrosService } from '../controle-livros.service';

@Component({
  selector: 'app-livro-dados',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './livro-dados.component.html',
  styleUrls: ['./livro-dados.component.css']
})
export class LivroDadosComponent {
incluirLivro() {
throw new Error('Method not implemented.');
}
  livro = {
    codigo: '',
    titulo: '',
    resumo: '',
    codEditora: 0,
    autores: ['']
  };
titulo: any;
resumo: any;
codEditora: any;
editoras: any;
autores: any;

  constructor(private controleLivros: ControleLivrosService, private router: Router) {}

  incluir() {
    this.controleLivros.incluir(this.livro).subscribe({
      next: () => {
        this.router.navigateByUrl('/lista'); // Redireciona após o sucesso
      },
      error: (err) => {
        console.error('Erro ao incluir o livro:', err); // Trata erros, se necessário
      }
    });
  }
}
