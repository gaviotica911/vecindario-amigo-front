/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ZonaVerdeService } from './zonaVerde.service';

describe('Service: ZonaVerde', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ZonaVerdeService]
    });
  });

  it('should ...', inject([ZonaVerdeService], (service: ZonaVerdeService) => {
    expect(service).toBeTruthy();
  }));
});
