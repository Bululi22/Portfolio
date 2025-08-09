import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { PruebonComponent } from './components/pruebon/pruebon.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderNubesComponent } from './components/header/header-nubes/header-nubes.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent,
    ExperienciaComponent,
    ProyectosComponent,
    FooterComponent,
    HeaderNubesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
