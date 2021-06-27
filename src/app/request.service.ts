import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getOlymps(){
    return this.http.get<Object[]>('/assets/olymps.json')
  }
}
