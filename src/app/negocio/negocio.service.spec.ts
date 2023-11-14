/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { NegocioService } from './negocio.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Negocio', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [NegocioService]
    });
  });

  it('should ...', inject([NegocioService], (service: NegocioService) => {
    expect(service).toBeTruthy();
  }));
});
