import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { server } from 'src/assets/server';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  serverLink = server.address

  constructor(private http: HttpClient) { }

  registr(bodyParams){
    return this.http.post(this.serverLink+'api/auth/signup', bodyParams)
  }

  login(email: string, password: string){
    return this.http.post(this.serverLink+'api/auth/signin', {email, password})
  }

  logout(){
    localStorage.removeItem('token')
  }

}
