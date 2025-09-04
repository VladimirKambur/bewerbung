import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvMessageDialog } from './cv-message-dialog';

describe('CvMessageDialog', () => {
  let component: CvMessageDialog;
  let fixture: ComponentFixture<CvMessageDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvMessageDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvMessageDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
