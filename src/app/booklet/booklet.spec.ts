import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Booklet } from './booklet';

describe('Booklet', () => {
  let component: Booklet;
  let fixture: ComponentFixture<Booklet>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Booklet]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Booklet);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
