import {Component, ElementRef, Input, OnChanges, QueryList, SimpleChanges, ViewChildren} from '@angular/core';
import {CoverLetter} from '../cover-letter/cover-letter';
import {CV} from '../cv/cv';

@Component({
  selector: 'resume',
  imports: [
    CoverLetter,
    CV
  ],
  templateUrl: './resume.html',
  styleUrl: './resume.scss'
})
export class Resume implements OnChanges {
  anglePerItem = 360 / 6;

  @ViewChildren('carouselItem') carouselItems!: QueryList<ElementRef>;
  @Input() activeCard: number = 0;

  currentAngle = 0;

  private translateZValue = 400;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['activeCard'] && !changes['activeCard'].firstChange) {
      this.deactiveAll();
      this.currentAngle = -this.anglePerItem * changes['activeCard'].currentValue;
    }
  }

  getTransform(index: number): string {
    return `rotateY(${index * this.anglePerItem}deg) translateZ(${this.translateZValue}px)`;
  }

  itemClicked(index: number) {
    if (this.activeCard === index) {
      this.carouselItems.forEach((item, i) => {
        if (i === index) {
          item.nativeElement.classList.add('active');
        } else {
          item.nativeElement.classList.remove('active');
        }
      });
    }
  }

  private deactiveAll() {
    this.carouselItems.forEach((item) => {
      item.nativeElement.classList.remove('active');
    });
  }
}
