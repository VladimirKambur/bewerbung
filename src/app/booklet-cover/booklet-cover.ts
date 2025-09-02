import {Component, EventEmitter, Output} from '@angular/core';
import {MatCardModule} from "@angular/material/card";

@Component({
  selector: 'booklet-cover',
  imports: [
    MatCardModule,
  ],
  templateUrl: './booklet-cover.html',
  styleUrl: './booklet-cover.scss'
})
export class BookletCover {
  @Output() open: EventEmitter<void> = new EventEmitter<void>();
}
