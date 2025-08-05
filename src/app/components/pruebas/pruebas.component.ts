import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-pruebas',
  imports: [],
  templateUrl: './pruebas.component.html',
  styleUrls: ['pruebas.component.css'],
})
export class PruebasComponent {
  copiado = false;

  copiarEmail() {
    navigator.clipboard.writeText('adrian.ferrad@gmail.com').then(() => {
      this.copiado = true;
      setTimeout(() => (this.copiado = false), 2000); // Oculta después de 2 seg
    });
  }
}
