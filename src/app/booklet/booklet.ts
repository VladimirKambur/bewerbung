import {Component, signal} from '@angular/core';
import {BookletCover} from '../booklet-cover/booklet-cover';
import {CoverLetter} from '../cover-letter/cover-letter';
import {CV} from '../cv/cv';
import {Certificates} from '../certificates/certificates';
import {TechnologyCover} from '../technology-cover/technology-cover';

@Component({
  selector: 'booklet',
  imports: [
    BookletCover,
    CoverLetter,
    CV,
    Certificates,
    TechnologyCover
  ],
  templateUrl: './booklet.html',
  styleUrl: './booklet.scss'
})
export class Booklet {
  isOpenFirst = signal(false);
  isOpenThird= signal(false);

  toggle(open: boolean) {
    if(open) {
      this.isOpenFirst.update(state => !state);

      setTimeout(() => {
        this.isOpenThird.update(state => !state);
      }, 150)

    }else{
      this.isOpenThird.update(state => !state);

      setTimeout(() => {
        this.isOpenFirst.update(state => !state);
      }, 150)
    }
  }
}
