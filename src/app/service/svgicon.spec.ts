import { TestBed } from '@angular/core/testing';

import { SVGIcon } from './svgicon';

describe('SVGIcon', () => {
  let service: SVGIcon;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SVGIcon);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
