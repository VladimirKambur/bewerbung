import {Component,  signal} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Header} from './header/header';
import {Resume} from './resume/resume';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Resume],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App{
  protected readonly title = signal('bewerbung');
  currentIndex = signal(0);

  rotateY(carouselIndex: number) {
    this.currentIndex.update(value => carouselIndex);
  }
}
