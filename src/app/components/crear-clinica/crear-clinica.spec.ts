import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearClinica } from './crear-clinica';

describe('CrearClinica', () => {
  let component: CrearClinica;
  let fixture: ComponentFixture<CrearClinica>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearClinica]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearClinica);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
