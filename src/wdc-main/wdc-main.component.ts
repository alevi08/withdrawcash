import { Component, EventEmitter, Output } from '@angular/core';
import { ImageModule } from 'primeng/image';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';

@Component({
  selector: 'app-wdc-main',
  standalone: true,
  imports: [
    ProgressSpinnerModule,
    ImageModule,
    ButtonModule,
    DialogModule
  ],
  templateUrl: './wdc-main.component.html',
  styleUrl: './wdc-main.component.css'
})

export class WdcMainComponent {

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
