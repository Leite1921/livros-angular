import { Injectable } from '@angular/core';
import { Livro } from './livro';

@Injectable({
  providedIn: 'root',
})
export class ControleLivrosService {
  livros: Array<Livro> = [
    {
      codigo: 1,
      codEditora: 1,
      titulo: 'Código Limpo',
      resumo: 'Princípios, padrões e boas práticas para escrever código legível, fácil de manter e de evoluir.',
      autores: ['Robert C. Martin']
    },
    {
      codigo: 2,
      codEditora: 2,
      titulo: 'Engenharia de Software',
      resumo: 'Visão abrangente dos processos, métodos e técnicas para o desenvolvimento de sistemas de software.',
      autores: ['Ian Sommerville']
    },
    {
      codigo: 3,
      codEditora: 3,
      titulo: 'Padrões de Projeto',
      resumo: 'Catálogo de 23 soluções reutilizáveis para problemas recorrentes no projeto orientado a objetos.',
      autores: ['Erich Gamma', 'Richard Helm', 'Ralph Johnson', 'John Vlissides']
    }
  ];

  obterLivros(): Array<Livro> {
    return this.livros;
  }

  incluir(livro: Livro): void {
    const maiorCodigo = this.livros.length > 0
      ? Math.max(...this.livros.map(l => l.codigo))
      : 0;
    livro.codigo = maiorCodigo + 1;
    this.livros.push(livro);
  }

  excluir(codigo: number): void {
    const indice = this.livros.findIndex(l => l.codigo === codigo);
    if (indice >= 0) {
      this.livros.splice(indice, 1);
    }
  }
}
