import {Component, EventEmitter, inject, Output, signal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatDialog} from '@angular/material/dialog';
import {PDFDialog} from '../pdfdialog/pdfdialog';

export enum CertificatesType {
  SKILLS,
  CERTIFICATE
}

@Component({
  selector: 'certificates',
  imports: [
    MatCardModule,
    MatIconModule,
    NgxExtendedPdfViewerModule
  ],
  templateUrl: './certificates.html',
  styleUrl: './certificates.scss'
})
export class Certificates {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  type = CertificatesType;
  public activeType = signal(CertificatesType.SKILLS);
  readonly dialog = inject(MatDialog);

  pdfDialog(pdfUrl: string) {
    const dialogRef = this.dialog.open(PDFDialog, {
      data: {url: pdfUrl},
      minWidth: '50vw',
      height: '90vh'
    });
  }

  setActiveType(type: CertificatesType) {
    this.activeType.set(type)
  }
}
