import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TechnologyCover } from './technology-cover';

describe('TechnologyCover', () => {
  let component: TechnologyCover;
  let fixture: ComponentFixture<TechnologyCover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TechnologyCover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TechnologyCover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
