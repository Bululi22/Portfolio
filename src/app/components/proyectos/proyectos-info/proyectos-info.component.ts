import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-proyectos-info',
  imports: [],
  templateUrl: './proyectos-info.component.html',
})
export class ProyectosInfoComponent {
  @Input() seleccionado: 'fj' | 'informula' | 'gesclub' | undefined;

  @Input() cerrar!: () => void;
}
