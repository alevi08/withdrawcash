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
  templateUrl: './wdc-screen-cancel.component.html',
  styleUrl: './wdc-screen-cancel.component.css'
})

export class WdcScreenCancelComponent {

  @Output() onContinue = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  visible: boolean = true;

  constructor(private router: Router) {

  }

  continue() {
    this.onContinue.emit();
    this.visible = false;
    this.router.navigate(['/wdc-screen-1']);
    }

  cancel() {
    this.router.navigate(['/wdc-screen-1']);
    this.onCancel.emit();
    this.visible = false;
  }
}
