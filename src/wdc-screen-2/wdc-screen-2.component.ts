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
  templateUrl: './wdc-screen-2.component.html',
  styleUrl: './wdc-screen-2.component.css'
})

export class WdcScreen2Component {

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
    this.router.navigate(['/wdc-screen-3']);
    }

  cancel() {
    this.router.navigate(['/wdc-screen-cancel']);
    this.onCancel.emit();
    this.visible = false;
  }

  readError() {
    this.router.navigate(['/wdc-screen-read-error']);
    this.onCancel.emit();
    this.visible = false;
  }
}
