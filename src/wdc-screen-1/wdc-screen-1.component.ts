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
  templateUrl: './wdc-screen-1.component.html',
  styleUrl: './wdc-screen-1.component.css'
})

export class WdcScreen1Component {

  @Output() onContinue = new EventEmitter<void>();
  @Output() onCancel = new EventEmitter<void>();

  visible: boolean = true;

  constructor(private router: Router) {

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
