import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  imports: [],
  templateUrl: './proyectos.component.html',
  styleUrls: ['proyectos.component.css'],
})
export class ProyectosComponent {
  tarjetas = [
    { id: 1, titulo: 'Tarjeta 1' },
    { id: 2, titulo: 'Tarjeta 2' },
    { id: 3, titulo: 'Tarjeta 3' },
  ];

  tarjetaSeleccionada: number | null = null;
  animando = false;
  animacionEntrada = false;

  seleccionarTarjeta(id: number) {
    if (this.animando) return;
    this.animando = true;

    const cambiando = this.tarjetaSeleccionada !== id;

    if (this.tarjetaSeleccionada === id) {
      this.tarjetaSeleccionada = null;
    } else {
      this.tarjetaSeleccionada = id;
      this.animacionEntrada = true;
    }

    setTimeout(() => {
      this.animando = false;
      this.animacionEntrada = false;
    }, 500); // coincide con la animación
  }
}
