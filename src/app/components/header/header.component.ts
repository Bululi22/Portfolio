import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  copiado = false;

  copiarEmail() {
    navigator.clipboard.writeText('adrian.ferrad@gmail.com').then(() => {
      this.copiado = true;
      setTimeout(() => (this.copiado = false), 2000); // Oculta después de 2 seg
    });
  }
}
