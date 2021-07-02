import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { server } from 'src/assets/server';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  serverLink = server.address

  constructor(private http: HttpClient) { }

  getCalendar(){
    return this.http.get(this.serverLink+'api/ofc/', {
      headers: {"Authorization": localStorage.getItem('token')}
    })
  }
  getUserOlymps(){
    return this.http.get(this.serverLink+'api/olympiad/my', {
      headers: {"Authorization": localStorage.getItem('token')}
    })
  }
  addOlympToUser(userId){
    return this.http.post(this.serverLink+'api/ofc/add',
    {olympiadId: userId},
    {headers: {"Authorization": localStorage.getItem('token')}}
    )
  }

  getOlymps(){
    return this.http.get(this.serverLink+'api/olympiad/', {
      headers: {"Authorization": localStorage.getItem('token')}
    })
  }

  getUser(){
    return this.http.get(this.serverLink+'api/user/', {
      headers: {"Authorization": localStorage.getItem('token')}
    })
  }

  updateUser(bodyParams){
    return this.http.post(this.serverLink+'api/user/update',
                          bodyParams,
                          {headers: {"Authorization": localStorage.getItem('token')}}
                          )
  }

  addOlymp(bodyParams){
    return this.http.post(this.serverLink+"api/olympiad/create",
                          bodyParams,
                          {headers: {"Authorization": localStorage.getItem('token')}}
                          )
  }
}
