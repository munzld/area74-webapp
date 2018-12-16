import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http: HttpClient) { }

  getService() {
    const token = localStorage.getItem('access_token');
    return this.http.get('/service',
      {headers: new HttpHeaders().set('Authorization', 'Bearer ' + token)}
    );
  }
}
