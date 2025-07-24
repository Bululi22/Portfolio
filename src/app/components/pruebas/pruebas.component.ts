import { Component, signal } from '@angular/core';

type nombreProyecto = 'fj' | 'informula' | 'gesclub';

@Component({
  selector: 'app-pruebas',
  imports: [],
  templateUrl: './pruebas.component.html',
  styleUrls: ['pruebas.component.css'],
})
export class PruebasComponent {
  estadofj = signal<'activar' | 'desplazar' | 'salir' | ''>('');
  estadoinformula = signal<'activar' | 'desplazar' | 'salir' | ''>('');
  estadogesclub = signal<'activar' | 'desplazar' | 'salir' | ''>('');

  nombreActivo = signal<nombreProyecto | null>(null); // guarda cuál está activo

  activado(nombre: nombreProyecto) {
    if (this.nombreActivo() === nombre) return;

    // Si hay uno activo, primero márcalo como "salir"
    const actual = this.nombreActivo();
    if (actual) {
      this.marcarEstado(actual, 'salir');

      setTimeout(() => {
        // Después de 3s lo ocultamos
        this.resetearAnimales();
        this.activarNuevo(nombre);
      }, 250);
    } else {
      this.activarNuevo(nombre);
    }
  }

  activarNuevo(nombre: nombreProyecto) {
    this.estadofj.set(nombre === 'fj' ? 'activar' : '');
    this.estadoinformula.set(nombre === 'informula' ? 'activar' : '');
    this.estadogesclub.set(nombre === 'gesclub' ? 'activar' : '');
    this.nombreActivo.set(nombre);
  }

  marcarEstado(
    nombre: nombreProyecto,
    estado: '' | 'activar' | 'desplazar' | 'salir'
  ) {
    switch (nombre) {
      case 'fj':
        this.estadofj.set(estado);
        break;
      case 'informula':
        this.estadoinformula.set(estado);
        break;
      case 'gesclub':
        this.estadogesclub.set(estado);
        break;
    }
  }

  resetearAnimales() {
    this.estadofj.set('');
    this.estadoinformula.set('');
    this.estadogesclub.set('');
  }

  esActivo(nombre: nombreProyecto): boolean {
    const estados = {
      fj: this.estadofj(),
      informula: this.estadoinformula(),
      gesclub: this.estadogesclub(),
    };
    return estados[nombre] === 'activar';
  }
}
