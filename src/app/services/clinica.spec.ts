import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ClinicaService } from './clinica';

describe('ClinicaService', () => {
  let service: ClinicaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ClinicaService]
    });
    service = TestBed.inject(ClinicaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
