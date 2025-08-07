import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-footer',
  imports: [],
  templateUrl: './footer.component.html',
  styleUrls: ['footer.component.css'],
})
export class FooterComponent {
  copiado = false;

  copiarEmail() {
    navigator.clipboard.writeText('adrian.ferrad@gmail.com').then(() => {
      this.copiado = true;
      setTimeout(() => (this.copiado = false), 2000); // Oculta después de 2 seg
    });
  }
}
