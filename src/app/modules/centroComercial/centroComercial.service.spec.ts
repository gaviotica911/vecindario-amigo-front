/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CentroComercialService } from './centroComercial.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: CentroComercial', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CentroComercialService]
    });
  });

  it('should be created', inject([CentroComercialService], (service: CentroComercialService) => {
    expect(service).toBeTruthy();
  }));
});
