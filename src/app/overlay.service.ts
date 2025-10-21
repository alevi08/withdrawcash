
import { Injectable, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, timer, takeUntil } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class OverlayService implements OnDestroy {
  private destroy$ = new Subject<void>();
  private inactivityTimer$ = timer(60 * 1000); // 60 segundos
  private warningTimer$ = timer(5 * 1000); // 5 segundos para mostrar WdcMainComponent

  private resetInactivity$ = new Subject<void>();
  public showMainScreen$ = new Subject<boolean>();

  constructor(private router: Router) {
    this.setupInactivityMonitoring();
  }

  private setupInactivityMonitoring() {
    this.resetInactivity$.pipe(
      takeUntil(this.destroy$)
    ).subscribe(() => {
      this.resetTimers();
    });

    this.inactivityTimer$.pipe(
      takeUntil(this.destroy$),
      takeUntil(this.resetInactivity$)
    ).subscribe(() => {
      this.router.navigate(['/wdc-main']);
      this.startWarningCountdown();
    });
  }

  private startWarningCountdown() {
    this.warningTimer$.pipe(
      takeUntil(this.destroy$),
      takeUntil(this.resetInactivity$)
    ).subscribe(() => {
      this.router.navigate(['/wdc-screen-1']); // Redirige a la pantalla principal
      this.showMainScreen$.next(false);
    });
  }

  public resetTimers() {
    this.resetInactivity$.next();
    this.showMainScreen$.next(false);
    this.setupInactivityMonitoring();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
