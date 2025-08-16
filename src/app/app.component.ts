import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NubesComponent } from './components/nubes/nubes.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, NubesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'portfolio';
}
