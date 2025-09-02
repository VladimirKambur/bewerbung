import {Component} from '@angular/core';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'cover-letter',
  imports: [
    MatCardModule,
    MatIconModule
  ],
  templateUrl: './cover-letter.html',
  styleUrl: './cover-letter.scss'
})
export class CoverLetter {

}
