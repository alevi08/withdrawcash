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
  templateUrl: './wdc-screen-3.component.html',
  styleUrl: './wdc-screen-3.component.css'
})

export class WdcScreen3Component {

  @Output() onContinue = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  visible: boolean = true;

  constructor(private router: Router) {

  }

selectedAccount: number | null = null;

selectAccount(accountNumber: number) {
  this.selectedAccount = accountNumber;
}

continue() {
  if (this.selectedAccount) {
    this.router.navigate(['/wdc-screen-4']);
  }
}

cancel() {
  this.selectedAccount = null;
  this.visible = false;
  this.router.navigate(['/wdc-screen-cancel']);
}

}
