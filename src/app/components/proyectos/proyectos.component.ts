import { Component } from '@angular/core';

@Component({
  selector: 'app-proyectos',
  standalone: true,
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent {
  tarjetas = [
    { id: 1, titulo: 'Tarjeta 1' },
    { id: 2, titulo: 'Tarjeta 2' },
    { id: 3, titulo: 'Tarjeta 3' },
  ];

  tarjetaSeleccionada: number | null = null;
  animando = false;
  cambiandoSeleccion = false;

  seleccionarTarjeta(id: number) {
    if (this.animando) return;

    // Cambio de selección
    if (this.tarjetaSeleccionada !== null && this.tarjetaSeleccionada !== id) {
      this.cambiandoSeleccion = true;
      this.animando = true;

      // Breve fade-out de la anterior
      setTimeout(() => {
        this.tarjetaSeleccionada = id;
        this.cambiandoSeleccion = false;

        // Espera a la nueva animación de entrada
        setTimeout(() => {
          this.animando = false;
        }, 500);
      }, 200);

      return;
    }

    // Primera selección o deselección
    this.animando = true;

    if (this.tarjetaSeleccionada === id) {
      this.tarjetaSeleccionada = null;
    } else {
      this.tarjetaSeleccionada = id;
    }

    setTimeout(() => {
      this.animando = false;
    }, 500);
  }

  getTituloSeleccionado(): string {
    const t = this.tarjetas.find((t) => t.id === this.tarjetaSeleccionada);
    return t?.titulo ?? '';
  }
}
