import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { PruebasComponent } from './components/experiencia/pruebas/pruebas.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, ExperienciaComponent, PruebasComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
