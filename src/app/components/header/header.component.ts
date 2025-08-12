import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements AfterViewInit {
  copiado = false;

  copiarEmail() {
    navigator.clipboard.writeText('adrian.ferrad@gmail.com').then(() => {
      this.copiado = true;
      setTimeout(() => (this.copiado = false), 2000); // Oculta después de 2 seg
    });
  }
  ngAfterViewInit() {
    const stars = document.querySelectorAll<SVGUseElement>('.star');

    // Guardar cuándo puede volver a parpadear cada estrella
    const cooldowns = new Map<SVGUseElement, number>();

    setInterval(() => {
      const now = Date.now();
      const availableStars = Array.from(stars).filter(
        (star) => !cooldowns.has(star) || cooldowns.get(star)! <= now
      );

      if (availableStars.length > 0) {
        const star =
          availableStars[Math.floor(Math.random() * availableStars.length)];

        star.classList.add('blink');
        cooldowns.set(star, now + 1000); // 1s de descanso antes de volver a parpadear

        setTimeout(() => {
          star.classList.remove('blink');
        }, 500); // duración del parpadeo
      }
    }, 100); // cada 0.8s intentamos hacer parpadear alguna estrella
  }
}
