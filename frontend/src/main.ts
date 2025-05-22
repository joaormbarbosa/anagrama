import { HttpClientModule } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';

// Inicializa o aplicativo Angular standalone, incluindo o módulo de HTTP
bootstrapApplication(AppComponent, {
  providers: [HttpClientModule]
}).catch(err => console.error(err));
