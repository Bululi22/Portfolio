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
    navigator.clipboard.writeText('adrian.ferrad@gmail.com');
    this.copiado = true;

    // Se quita el mensaje tras 1.5 segundos
    setTimeout(() => {
      this.copiado = false;
    }, 1500);
  }
}
