import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PDFDialog } from './pdfdialog';

describe('PDFDialog', () => {
  let component: PDFDialog;
  let fixture: ComponentFixture<PDFDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PDFDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PDFDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
