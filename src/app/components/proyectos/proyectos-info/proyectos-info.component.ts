import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos-info',
  imports: [],
  styleUrls: ['./proyectos-info.component.css'],
  templateUrl: './proyectos-info.component.html',
})
export class ProyectosInfoComponent {
  @Input() proyecto: string = '';
  overlayActivo = false;
}
