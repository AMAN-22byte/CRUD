import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class PersonService {
  private apiUrl = 'http://localhost:3000/person';

  constructor(private http: HttpClient) {}

  getPeople(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  getPerson(id: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  updatePerson(id: string, data: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, data);
  }

  deletePerson(id: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}