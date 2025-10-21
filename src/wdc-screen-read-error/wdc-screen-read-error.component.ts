import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-wdc-main',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule
  ],
  templateUrl: './wdc-screen-read-error.component.html',
  styleUrl: './wdc-screen-read-error.component.css'
})

export class WdcScreenReadErrorComponent {

  @Output() onContinue = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  visible: boolean = true;

  constructor(private router: Router) {

  }

  isFingerprintRegistered = false;

  toggleIcon() {
    this.isFingerprintRegistered = !this.isFingerprintRegistered;
  }

  continue() {
    this.onContinue.emit();
    this.visible = false;
    this.router.navigate(['/wdc-screen-2']);
    }

  cancel() {
    this.router.navigate(['/wdc-screen-cancel']);
    this.onCancel.emit();
    this.visible = false;
  }

}
