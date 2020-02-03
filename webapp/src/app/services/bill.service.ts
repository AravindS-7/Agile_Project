import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../User';
import { Product } from '../Product';
import { Observable, BehaviorSubject } from 'rxjs';
import { Bill } from '../Bill';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class BillService {

  constructor(private http: HttpClient, private userAuthService : UserAuthService) { }

  baseUrl = environment.baseUrl

  user: User[]

  product: Product[]

  contactNumber: number

  filter = new BehaviorSubject(0)

  currentNumber = this.filter.asObservable()

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.userAuthService.getToken()
    })
  }

  getUserByContactNumber(contactNumber: number): Observable<User> {
   const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<User>(this.baseUrl + "/billing-service/billing/contact/" + contactNumber, httpOptions)
  }

  submitBill(bill: Bill): Observable<Bill> {
    console.log(bill)
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.post<Bill>(this.baseUrl + "/billing-service/billing/addBill", bill, httpOptions)
  }

  getBillByUserId(id: number): Observable<Bill[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Bill[]>(this.baseUrl +"/billing-service/billing/"+ id, httpOptions)
  }

  getPurchaseHistoryById(id : number): Observable<Bill[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Bill[]>(this.baseUrl+"/billing-service/billing/history/"+id,httpOptions)
  }

  getTotal(id: number) : Observable<number>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<number>(this.baseUrl+"/billing-service/billing/total/"+id,httpOptions)
  }

  generateEvent(contact: number): void {
    this.contactNumber = contact
    console.log(this.contactNumber)
    this.filter.next(this.contactNumber)
  }

  changeEmit() {
    console.log(this.filter)
    return this.filter
  }

}
