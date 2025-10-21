import { Component, inject, OnDestroy } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnDestroy {
  title = 'withdrawchash';
  private inactivityTimer: any;
  private warningTimer: any;
  private readonly inactivityPeriod = 10000; // 10 segundos
  private readonly warningPeriod = 5000; // 5 segundos
  private router = inject(Router);

  constructor() {
    this.setupInactivityTimers();
    this.setupActivityListeners();
  }

  private setupInactivityTimers() {
    // Limpia timers existentes
    this.clearTimers();

    // Timer para inactividad (60 segundos)
    this.inactivityTimer = setTimeout(() => {
      this.router.navigate(['/wdc-main']);

      // Timer para redirección (5 segundos después de mostrar WdcMainComponent)
      this.warningTimer = setTimeout(() => {
        this.router.navigate(['/home']);
      }, this.warningPeriod);

    }, this.inactivityPeriod);
  }

  private setupActivityListeners() {
    const events = ['click', 'keypress', 'mousemove', 'scroll', 'touchstart'];

    events.forEach(event => {
      document.addEventListener(event, this.resetInactivity.bind(this));
    });
  }

  private resetInactivity() {
    this.setupInactivityTimers();
  }

  private clearTimers() {
    if (this.inactivityTimer) {
      clearTimeout(this.inactivityTimer);
    }
    if (this.warningTimer) {
      clearTimeout(this.warningTimer);
    }
  }

  ngOnDestroy() {
    this.clearTimers();
    const events = ['click', 'keypress', 'mousemove', 'scroll', 'touchstart'];
    events.forEach(event => {
      document.removeEventListener(event, this.resetInactivity.bind(this));
    });
  }
}
