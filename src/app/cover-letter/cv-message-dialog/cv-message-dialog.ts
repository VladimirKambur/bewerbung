import {Component, inject} from '@angular/core';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-cv-message-dialog',
  imports: [MatDialogModule, MatIconModule],
  templateUrl: './cv-message-dialog.html',
  styleUrl: './cv-message-dialog.scss'
})
export class CvMessageDialog {
  readonly dialogRef = inject(MatDialogRef<CvMessageDialog>);

}
