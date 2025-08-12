import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'b-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() menuToggle: EventEmitter<number> = new EventEmitter<number>();


}
