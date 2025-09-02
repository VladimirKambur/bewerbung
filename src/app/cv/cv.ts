import {
  Component,
  ElementRef,
  signal,
  ViewChild,
} from '@angular/core';
import {MatCardModule} from '@angular/material/card';

export enum TimelineType {
  JOB,
  SCHOOL
}

@Component({
  selector: 'cv',
  imports: [
    MatCardModule
  ],
  templateUrl: './cv.html',
  styleUrl: './cv.scss'
})
export class CV {

  @ViewChild("tl_job") job!: ElementRef;
  @ViewChild("tl_school") SCHOOL!: ElementRef;

  type = TimelineType;
  public activeType = signal(TimelineType.JOB);

  setActiveType(type: TimelineType) {
    this.activeType.set(type)
  }
}
