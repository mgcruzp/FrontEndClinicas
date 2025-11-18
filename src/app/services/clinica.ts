import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Clinica } from '../models/clinica.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClinicaService {

  private apiUrl = 'http://localhost:8080/api/clinicas';

  constructor(private http: HttpClient) {}

  listar(): Observable<Clinica[]> {
    return this.http.get<Clinica[]>(this.apiUrl);
  }

  crear(clinica: Clinica): Observable<Clinica> {
    return this.http.post<Clinica>(this.apiUrl, clinica);
  }

  obtenerPorId(id: number): Observable<Clinica> {
    return this.http.get<Clinica>(`${this.apiUrl}/${id}`);
  }

  actualizar(id: number, clinica: Clinica): Observable<Clinica> {
    return this.http.put<Clinica>(`${this.apiUrl}/${id}`, clinica);
  }

  eliminar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
