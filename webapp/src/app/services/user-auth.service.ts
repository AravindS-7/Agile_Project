import { Injectable } from '@angular/core';
import { AuthenticationService } from './authentication.service';
import { LoginComponent } from '../site/login/login.component';
import { User } from '../User';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  isLoggedIn = false
  isAdmin = false
  isSuperUser = false
  accessToken : string
  token : string
  authenticatedUser : User
  redirectUrl='/'
  private apiUrl = "/"
  userId : string
  role : string
  isLoginValid : boolean

  constructor(private authService : AuthenticationService) { }

  logIn(userId : string, password : string){
    this.authService.authenticate(userId, password).subscribe((data)=>{
      if(data){
        this.setUserId(userId)
       // this.isLoggedIn=true
        this.authenticatedUser = data
        this.isAdmin = data['role']==='ADMIN'
        this.isSuperUser = data['role']==='SUPER_USER'
        if(this.isAdmin){
          this.redirectUrl = '/product'
        }
        else if(this.isSuperUser){
          this.redirectUrl="/pendingList"
        }
      }
    })
  }
  logOut() {
    this.redirectUrl = '/'; //reset to root url
    this.isLoggedIn = false;
    this.isAdmin = false;
    this.token=null;
    //this.role=null;
  }
  isAdminUser() {
    return this.isAdmin;
  }
  setUserId(userId:string){
    this.userId=userId;
  }
  getUserId(){
    return this.userId;
  }
  getRole(){
    return this.role;
  }
  setRole(role:any){
    this.role=role;
  }
  getToken(){
    return this.token;
  }
  setToken(token:string){
    this.token=token;
  }

  superUser(){
    return this.isSuperUser
  }
}

