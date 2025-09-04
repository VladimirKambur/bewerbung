import {Component, inject} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {CvMessageDialog} from './cv-message-dialog/cv-message-dialog';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'cover-letter',
  imports: [
    MatCardModule,
    MatIconModule,
    MatButtonModule
  ],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss'
})
export class CoverLetter {

  readonly dialog = inject(MatDialog);

  cvMessage() {
    const dialogRef = this.dialog.open(CvMessageDialog, );
  }
}
