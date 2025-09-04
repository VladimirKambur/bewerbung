import {Component, EventEmitter, HostListener, inject, OnInit, Output, signal} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {Router} from '@angular/router';

@Component({
  selector: 'booklet-cover',
  imports: [
    MatCardModule,
  ],
  templateUrl: './booklet-cover.html',
  styleUrl: './booklet-cover.scss'
})
export class BookletCover implements OnInit {
  @Output() open: EventEmitter<void> = new EventEmitter<void>();

  private router = inject(Router);

  public classicView = signal(false);

  ngOnInit(): void {
    this.classicView.set(window.innerWidth < 1320);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.classicView.set(e.target.innerWidth < 1320);
  }

  go() {
    if (this.classicView()) {
      this.router.navigate(['/cl']);
    } else {
      this.open.emit();
    }
  }
}
