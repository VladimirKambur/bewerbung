import {
  Component, DestroyRef,
  ElementRef, inject, OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {ActivatedRoute, ParamMap} from '@angular/router';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';

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
export class CV implements OnInit{

  @ViewChild("tl_job") job!: ElementRef;
  @ViewChild("tl_school") SCHOOL!: ElementRef;

  private route = inject(ActivatedRoute);
  private destroyRef = inject(DestroyRef);

  type = TimelineType;
  public activeType = signal(TimelineType.JOB);
  public routeType: string | null = null;

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((params: ParamMap) => {
      this.routeType = params.get('type');
      if(this.routeType) {
        this.activeType.set(this.routeType === 'work' ? this.type.JOB : this.type.SCHOOL);
      }
    });
  }

  setActiveType(type: TimelineType) {
    this.activeType.set(type)
  }
}
