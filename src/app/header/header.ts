import {Component, EventEmitter, HostListener, Input, Output} from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'b-header',
  imports: [
    RouterLink,
    RouterLinkActive,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.scss'
})
export class Header {
  @Output() menuToggle: EventEmitter<number> = new EventEmitter<number>();

  @Input() isOpen: boolean = false;

  isMobile = window.innerWidth < 500;

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.isMobile = e.target.innerWidth < 500;
  }
}
