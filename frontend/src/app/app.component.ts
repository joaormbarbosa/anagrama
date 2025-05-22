import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  letras = '';
  anagramas: string[] = [];
  historico: string[] = [];

  constructor(private http: HttpClient) {}

  gerarAnagramas(): void {
    const entrada = this.letras.trim();

    if (!entrada || entrada.length < 2) {
      this.anagramas = [];
      return;
    }

    this.http.get<string[]>(`http://localhost:8080/api/anagramas?letras=${entrada}`)
      .subscribe({
        next: (resultado) => {
          this.anagramas = resultado;
          this.atualizarHistorico(entrada);
          this.letras = ''; // limpa o campo após a busca
        },
        error: (erro) => {
          console.error('Erro ao buscar anagramas:', erro);
          this.anagramas = ['Erro ao buscar anagramas'];
        }
      });
  }

  atualizarHistorico(entrada: string): void {
    this.historico.unshift(entrada);
    if (this.historico.length > 10) {
      this.historico.pop();
    }
  }
}
