import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Piatto } from '../models/Piatto';

@Injectable({
  providedIn: 'root'
})

export class PiattoService {
  private apiUrl = "http://localhost:8080/piatto"

  constructor(private http: HttpClient){}

  getUsers(): Observable<Piatto[]>{
    return this.http.get<Piatto[]>(this.apiUrl);
  }

  addUser(piatto: Piatto): Observable<Piatto> {
    return this.http.post<Piatto>(this.apiUrl, piatto);
  }
}
