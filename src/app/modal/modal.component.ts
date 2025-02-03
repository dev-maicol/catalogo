import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { inject} from '@angular/core';
import {
  MatDialog,
  MAT_DIALOG_DATA,
  MatDialogTitle,
  MatDialogContent,
} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-modal',
  imports: [MatButtonModule, MatDialogContent, MatDialogTitle, CommonModule],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  // dialog = inject(MatDialog);

  data = inject(MAT_DIALOG_DATA);

  // openDialog() {
  //   this.dialog.open(DialogDataExampleDialog, {
  //     data: {
  //       animal: 'panda',
  //     },
  //   });
  // }
}
