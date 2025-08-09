import { Component } from '@angular/core';
import { ProyectosInfoComponent } from './proyectos-info/proyectos-info.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  imports: [ProyectosInfoComponent, CommonModule],
})
export class ProyectosComponent {
  proyectos = ['fj', 'informula', 'gesclub'];

  esPar(i: number): boolean {
    return i % 2 === 0;
  }
}
