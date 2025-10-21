import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-wdc-main',
  standalone: true,
  imports: [
    ButtonModule,
    DialogModule,
    CommonModule,
  ],
  templateUrl: './wdc-screen-4.component.html',
  styleUrl: './wdc-screen-4.component.css'
})

export class WdcScreen4Component {

  @Output() onContinue = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  visible: boolean = true;

  constructor(private router: Router) {

  }

  presetAmounts = [10000, 20000, 50000, 100000, 200000];
  selectedAmount: number | null = null;
  customAmount: number | null = null;
  isCustomAmountSelected = false;

  selectAmount(amount: number) {
    this.selectedAmount = amount;
    this.customAmount = null;
    this.isCustomAmountSelected = false;
  }

  selectCustomAmount() {
    this.selectedAmount = null;
    this.isCustomAmountSelected = true;
  }

  showCustomAmountDialog() {
    this.visible = false;
    this.router.navigate(['/wdc-screen-5-custom-amount']);
  }

  continue() {
    const amount = this.isCustomAmountSelected ? this.customAmount : this.selectedAmount;
    console.log('Monto seleccionado:', amount);
    this.router.navigate(['/wdc-screen-6']);
  }

  cancel() {
    this.visible = false;
    this.router.navigate(['/wdc-screen-cancel']);
  }
}
