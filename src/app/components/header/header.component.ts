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
    navigator.clipboard.writeText('adrian.ferrad@gmail.com');
    this.copiado = true;

    // Se quita el mensaje tras 1.5 segundos
    setTimeout(() => {
      this.copiado = false;
    }, 1500);
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
        cooldowns.set(star, now + 1100); // 1s de descanso antes de volver a parpadear

        setTimeout(() => {
          star.classList.remove('blink');
        }, 1000); // duración del parpadeo
      }
    }, 100); // cada 0.1s intentamos hacer parpadear alguna estrella
  }
}
