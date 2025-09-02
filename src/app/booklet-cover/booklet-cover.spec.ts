import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookletCover } from './booklet-cover';

describe('BookletCover', () => {
  let component: BookletCover;
  let fixture: ComponentFixture<BookletCover>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookletCover]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookletCover);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
