import {Component, DestroyRef, EventEmitter, inject, OnInit, Output, signal} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {NgxExtendedPdfViewerModule} from 'ngx-extended-pdf-viewer';
import {MatDialog} from '@angular/material/dialog';
import {PDFDialog} from '../pdfdialog/pdfdialog';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {ActivatedRoute, ParamMap} from '@angular/router';

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
export class Certificates implements OnInit {
  @Output() close: EventEmitter<void> = new EventEmitter<void>();

  readonly dialog = inject(MatDialog);
  readonly route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  public routeType: string | null = null;

  type = CertificatesType;
  public activeType = signal(CertificatesType.SKILLS);


  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params: ParamMap) => {
      this.routeType = params.get('type');
      if(this.routeType) {
        this.activeType.set(this.routeType === 'skills' ? this.type.SKILLS : this.type.CERTIFICATE);
      }
    });
  }

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
