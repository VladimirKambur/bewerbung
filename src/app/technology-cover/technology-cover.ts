import { Component } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'technology-cover',
    imports: [
        MatCardModule,
        MatIconModule,
    ],
  templateUrl: './technology-cover.html',
  styleUrl: './technology-cover.scss'
})
export class TechnologyCover {

  public icons : Array<string> = ["angular", "react", "docker", "flutter", "nginx", "typescript", "webstorm", "MongoDB", "oracle"];

}
