import {Component, HostListener, inject, OnInit, signal} from '@angular/core';
import {NavigationEnd, Router, RouterOutlet} from '@angular/router';
import {Booklet} from './booklet/booklet';
import {SVGIcon} from './service/svgicon';
import {Header} from './header/header';
import {filter} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Booklet, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {

  private router = inject(Router);
  private icons: SVGIcon = inject(SVGIcon);
  protected readonly title = signal('bewerbung');

  currentIndex = signal(0);
  isMobile = signal(false);

  public currentUrl = signal<string|null>(null);

  constructor() {
    this.icons.registerIcons();
    this.isMobile.set(window.innerWidth < 1320)
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    this.isMobile.set(e.target.innerWidth < 1320);
  }

  ngOnInit(): void {
    this.currentUrl.set( this.router.url);

    this.router.events.subscribe(() => {
      this.currentUrl.set( this.router.url);
    });
  }

  rotateY(carouselIndex: number) {
    this.currentIndex.update(value => carouselIndex);
  }


}
