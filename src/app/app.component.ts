import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { PruebasComponent } from './components/pruebas/pruebas.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ExperienciaComponent,
    ProyectosComponent,
    PruebasComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
