import { Component } from '@angular/core';
import { ProyectosInfoComponent } from './proyectos-info/proyectos-info.component';

type nombreProyecto = 'fj' | 'informula' | 'gesclub' | undefined;

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
  imports: [ProyectosInfoComponent],
})
export class ProyectosComponent {
  nombreSeleccionado: nombreProyecto = undefined;

  cerrar = () => {
    this.nombreSeleccionado = undefined;
  };

  seleccionado(nombre: nombreProyecto) {
    this.nombreSeleccionado = nombre;
  }
}
