import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-livro-lista',
  standalone: true, 
  imports: [CommonModule], 
  templateUrl: './livro-lista/livro-lista.component.html',
  styleUrls: ['./livro-lista/livro-lista.component.css']
})
export class AppComponent {
  title = 'livros-angular';
}
