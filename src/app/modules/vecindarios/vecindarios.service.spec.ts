/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { VecindariosService } from './vecindarios.service';

describe('Service: Vecindarios', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [VecindariosService]
    });
  });

  it('should ...', inject([VecindariosService], (service: VecindariosService) => {
    expect(service).toBeTruthy();
  }));
});
