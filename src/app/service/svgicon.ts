import {inject, Injectable} from '@angular/core';
import {MatIconRegistry} from '@angular/material/icon';
import {DomSanitizer} from '@angular/platform-browser';
import {Icon, svgIcons} from './SVGIcons';



@Injectable({
  providedIn: 'root'
})
export class SVGIcon {
  private icons: Array<Icon> = svgIcons;

  private matIconRegistry: MatIconRegistry = inject(MatIconRegistry);
  private sanitizer: DomSanitizer = inject(DomSanitizer);

  registerIcons(): void {
    this.icons.forEach(icon => {
      this.matIconRegistry.addSvgIcon(
        icon.name,
        this.sanitizer.bypassSecurityTrustResourceUrl(icon.path)
      );
    });
  }
}
