import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from './livro';

interface LivroMongo {
  _id: string; // Representa o ID no MongoDB
  codEditora: number;
  titulo: string;
  resumo: string;
  autores: string[];
}

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  private baseURL: string = 'http://localhost:3030/livros'; // URL do backend

  constructor(private http: HttpClient) {}

  obterLivros(): Observable<LivroMongo[]> {
    return this.http.get<LivroMongo[]>(this.baseURL);
  }

  incluir(livro: Livro): Observable<any> {
    return this.http.post(this.baseURL, livro);
  }

  excluir(codigo: string): Observable<any> {
    return this.http.delete(`${this.baseURL}/${codigo}`);
  }
}
