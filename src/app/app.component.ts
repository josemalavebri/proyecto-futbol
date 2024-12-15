import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./componentes/navbar/navbar.component";
import { PosicionesComponent } from "./componentes/posiciones/posiciones.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, PosicionesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'pagina-futbol';
}
