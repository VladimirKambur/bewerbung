import {Component, HostListener, inject, signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Booklet} from './booklet/booklet';
import {SVGIcon} from './service/svgicon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Booklet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{

  private icons: SVGIcon = inject(SVGIcon);

  protected readonly title = signal('bewerbung');
  currentIndex = signal(0);
  isMobile = signal(false);

  constructor() {
    this.icons.registerIcons();
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any){
    if(e.target.innerWidth < 1024) {
      this.isMobile.set(true);
    }
  }

  rotateY(carouselIndex: number) {
    this.currentIndex.update(value => carouselIndex);
  }


}
