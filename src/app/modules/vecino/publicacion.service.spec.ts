/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PublicacionService } from '../publicacion/publicacion.service';

describe('Service: Publicacion', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PublicacionService]
    });
  });

  it('should ...', inject([PublicacionService], (service: PublicacionService) => {
    expect(service).toBeTruthy();
  }));
});
