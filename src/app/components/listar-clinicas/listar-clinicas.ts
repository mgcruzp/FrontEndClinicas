// src/app/components/listar-clinicas/listar-clinicas.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClinicaService } from '../../services/clinica';
import { Clinica } from '../../models/clinica.model';

@Component({
  selector: 'app-listar-clinicas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './listar-clinicas.html',
  styleUrls: ['./listar-clinicas.css']
})
export class ListarClinicasComponent implements OnInit {

  clinicas: Clinica[] = [];

  constructor(private clinicaService: ClinicaService) {}

  ngOnInit(): void {
    this.clinicaService.listar().subscribe(clinicas => {
      this.clinicas = clinicas;
    });
  }
}
