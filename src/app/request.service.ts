import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getOlymps(){
    return this.http.get<Object[]>('assets/olymps.json')
  }

  getUser(){
    return this.http.get<Object[]>('assets/user.json')
  }

  /*getUser(){
    return this.http.get('http://590bbc3295d4.ngrok.io/api/user/', {
      headers: {"Authorization": localStorage.getItem('token')}
    })
  }*/
}
