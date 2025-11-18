import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Clinica } from '../../models/clinica.model';
import { ClinicaService } from '../../services/clinica';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-clinica',
  standalone: true,
  imports: [CommonModule, FormsModule, DatePipe],
  templateUrl: './crear-clinica.html',
  styleUrls: ['./crear-clinica.css']
})
export class CrearClinicaComponent {

  clinica: Clinica = new Clinica();

  constructor(
    private clinicaService: ClinicaService,
    private router: Router
  ) {}

  guardar() {
    this.clinicaService.crear(this.clinica).subscribe(() => {
      this.router.navigate(['/clinicas']);
    });
  }
}