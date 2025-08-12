import {AfterViewInit, Component, ElementRef, HostListener, signal, ViewChild} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Foto} from './foto/foto';
import {Header} from './header/header';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Foto, Header],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit{

  @ViewChild('carouselItem') carouselItem!: ElementRef;
  @ViewChild('carousel') carousel!: ElementRef;

  protected readonly title = signal('bewerbung');
  private totalItems: number = 3;
  theta: number = 360 / this.totalItems;

  radius = signal(0);
  currentIndex = signal(0);

  @HostListener('window:resize')
  onResize() {
    this.calcRadius();
    this.calcPerspective();
  }

  ngAfterViewInit() {
    this.calcRadius();
    this.calcPerspective();
  }

  rotateY(carouselIndex: number) {
    this.currentIndex.update(value => carouselIndex);
  }

  private calcRadius() {
    const itemWidth = this.carouselItem.nativeElement.offsetWidth;
    this.radius.update(value => Math.round(itemWidth / (Math.tan(Math.PI / this.totalItems))));
  }

  private calcPerspective() {
    const carouselWidth = this.carousel.nativeElement.offsetWidth;
    const carouselHeight = this.carousel.nativeElement.offsetHeight;

    // Берём максимум из ширины и высоты, чтобы 3D оставался сбалансированным
    const base = Math.max(carouselWidth, carouselHeight);

    // Увеличиваем множитель, чтобы глубина была реалистичной для 700px высоты
    this.carousel.nativeElement.style.perspective = `${base * 2}px`;

    /*const carouselWidth = this.carousel.nativeElement.offsetWidth;
    this.carousel.nativeElement.style.perspective = `${carouselWidth * 1.5}px`;*/
  }
}
