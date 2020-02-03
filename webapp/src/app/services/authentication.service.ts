import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private authUrl = environment.baseUrl+'authentication-service/authenticate'
  private token : string
  constructor(private httpClient : HttpClient) { }

  authenticate(userId : String, password : String) : Observable<any>{
    let credentials = btoa(userId+":"+password)
    let headers = new HttpHeaders()
    headers = headers.set('Authorization','Basic ' +credentials)
    console.log(JSON.stringify(headers))
    return this.httpClient.get(this.authUrl,{headers})
  }
  
  public setToken(token : string){
    this.token=token
  }

  public getToken(){
    return this.token
  }
}
