import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piatto } from '../models/Piatto';

@Injectable({
  providedIn: 'root'
})

export class PiattoService {
  private apiUrl = "http://localhost:8080/piatti"

  constructor(private http: HttpClient) { }

  getPiatti(): Observable<Piatto[]> {
    return this.http.get<Piatto[]>(this.apiUrl);
  }

  addPiatto(piatto: Piatto): Observable<Piatto> {
    return this.http.post<Piatto>(this.apiUrl, piatto);
  }

  deletePiatto(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

}
