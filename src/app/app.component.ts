import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Vecindario Amigo';
  showSlogan = true;
  constructor(private router: Router) {
    // Escuchar los eventos de cambio de ruta
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        // Cambiar el título y mostrar/ocultar el eslogan basado en la ruta
        if (event.url === '/zonasVerdes') {
          this.title = 'Zonas Verdes';
          this.showSlogan = false;
        } 
        else if (event.url === '/vecinos') {
          this.title = 'Vecinos';
          this.showSlogan = false;
        }
        else if (event.url === '/gruposDeInteres') {
          this.title = 'Grupos de interes';
          this.showSlogan = false;
        }
        else {
          this.title = 'Vecindario Amigo';
          this.showSlogan = true;
        }
      }
    });
  }
}
