import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { User } from '../User';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.baseUrl

  filter = new Subject()

  constructor(private http: HttpClient) { }

  addUser(user : User){
    return this.http.post(this.baseUrl+"authentication-service/users",user)
  }

  getAllUsers()  :Observable<User[]>{
    return this.http.get<User[]>(this.baseUrl+"authentication-service/users")
  }

  updateUser(user : User) : Observable<User>{
    return this.http.put<User>(this.baseUrl+"authentication-service/users",user)
  }

  getUserByUserId(userId : String) : Observable<User>{
    return this.http.get<User>(this.baseUrl+"/authentication-service/users/"+userId)
  }
}
