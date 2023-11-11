/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { GrupoDeInteresService } from './grupoDeInteres.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('Service: Book', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [GrupoDeInteresService]
    });
  });

  it('should ...', inject([GrupoDeInteresService], (service: GrupoDeInteresService) => {
    expect(service).toBeTruthy();
  }));
});