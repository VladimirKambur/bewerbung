import {Component, inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatIconModule} from '@angular/material/icon';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'pdfdialog',
  imports: [
    NgxExtendedPdfViewerModule,
    MatDialogModule,
    MatIconModule,
  ],
  templateUrl: './pdfdialog.html',
  styleUrl: './pdfdialog.scss'
})
export class PDFDialog  {
  readonly dialogRef = inject(MatDialogRef<PDFDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly http = inject(HttpClient);

  fileUrl = this.data.url;

}
