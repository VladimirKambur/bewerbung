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

  @ViewChildren('carouselItem', { read: ElementRef }) carouselItems!: QueryList<ElementRef>;
  @Input() activeCard: number = 0;

  currentAngle = 0;

  private itemFullSize = false;
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
      this.carouselItems.forEach((item: ElementRef, i) => {
        if (i === index) {
          item.nativeElement.classList.add('active');
          this.itemFullSize = true;
        } else {
          item.nativeElement.classList.remove('active');
        }
      });
    }
  }

  private deactiveAll() {
    if(this.itemFullSize) {
      this.carouselItems.forEach((item) => {
        item.nativeElement.classList.remove('active');
      });
      this.itemFullSize = false;
    }
  }
}
