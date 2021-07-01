import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(email: string, password: string){
    return this.http.post('http://590bbc3295d4.ngrok.io/api/auth/signin', {email, password})
  }

  logout(){
    localStorage.removeItem('token')
  }

}
