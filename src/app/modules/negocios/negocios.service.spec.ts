/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NegociosService } from './negocios.service';

describe('Service: Negocios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegociosService]
    });
  });

  it('should ...', inject([NegociosService], (service: NegociosService) => {
    expect(service).toBeTruthy();
  }));
});
