/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VecinoService } from './vecino.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('Service: Vecino', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule],
      providers: [VecinoService]
    });
  });

  it('should ...', inject([VecinoService], (service: VecinoService) => {
    expect(service).toBeTruthy();
  }));
});
