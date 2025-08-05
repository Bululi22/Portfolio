import { Component } from '@angular/core';
import { ProyectosInfoComponent } from './proyectos-info/proyectos-info.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  imports: [ProyectosInfoComponent],
})
export class ProyectosComponent {
  proyectos = ['fj', 'informula', 'gesclub'];
}
