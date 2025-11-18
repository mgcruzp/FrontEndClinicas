import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarClinicas } from './listar-clinicas';

describe('ListarClinicas', () => {
  let component: ListarClinicas;
  let fixture: ComponentFixture<ListarClinicas>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarClinicas]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListarClinicas);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
