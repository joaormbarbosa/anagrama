// src/app/app.module.ts

// Importações principais do Angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Importa FormsModule para usar ngModel (formulários reativos)
import { FormsModule } from '@angular/forms';

// Importa HttpClientModule para fazer requisições HTTP ao backend
import { HttpClientModule } from '@angular/common/http';

// Componente principal da aplicação
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent // Declaração dos componentes utilizados no app
  ],
  imports: [
    BrowserModule,     // Necessário para qualquer app Angular no navegador
    FormsModule,       // Torna o ngModel funcional
    HttpClientModule   // Habilita chamadas HTTP (GET, POST, etc.)
  ],
  providers: [],        // Serviços globais (vazio por enquanto)
  bootstrap: [AppComponent] // Componente inicial (root)
})
export class AppModule { }
