import { Component } from '@angular/core';
import { ExperienciaComponent } from '../experiencia/experiencia.component';
import { ProyectosComponent } from '../proyectos/proyectos.component';

@Component({
  selector: 'app-nubes',
  imports: [ExperienciaComponent, ProyectosComponent],
  templateUrl: './nubes.component.html',
  styleUrls: ['nubes.component.css'],
})
export class NubesComponent {}
