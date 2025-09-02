import {Component, inject, OnInit, signal} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {HttpClient} from '@angular/common/http';
import {DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';

export interface DialogData {
  url: string;
}

@Component({
  selector: 'pdfdialog',
  imports: [
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './pdfdialog.html',
  styleUrl: './pdfdialog.scss'
})
export class PDFDialog implements OnInit {
  readonly dialogRef = inject(MatDialogRef<PDFDialog>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  readonly http = inject(HttpClient);

  fileUrl = this.data.url;

  private sanitizer = inject(DomSanitizer);
  safePdfUrl: SafeResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.data.url);

  objHeight = signal(0);

  file: Blob | null = null;

  ngOnInit(): void {
    /*this.http.get(this.data.url, {
      responseType: 'blob'
    }).subscribe(blob => {
      this.fileUrl = URL.createObjectURL(blob);
    });*/
  }

}
