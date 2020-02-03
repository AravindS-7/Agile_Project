import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Product } from '../Product';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Offer } from '../Offer';
import { UserAuthService } from './user-auth.service';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = environment.baseUrl

  productList : Product[]
  
  search = new Subject()

  category:string;
  receivedType = new BehaviorSubject("Default")
  currentType = this.receivedType.asObservable();

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.userAuthService.getToken()
    })
  }

  constructor(private http: HttpClient, private userAuthService : UserAuthService) { }

  getAllProducts() : Observable<any>{
    const httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Authorization': 'Bearer ' + this.userAuthService.getToken()
    })
  }
    return this.http.get(this.baseUrl+"product-service/products", httpOptions)
  }

  getProductById(id : number) : Observable<Product>{
    console.log(id)
   const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Product>(this.baseUrl+"/product-service/products/"+id, httpOptions)
  }

  addProduct(product : Product) : Observable<Product>{
    const  httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.post<Product>(this.baseUrl+"/product-service/products/add",product, httpOptions)
  }

  modifyProduct(product : Product) : Observable<Product>{
    console.log(product)
    const  httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.put<Product>(this.baseUrl+"product-service/products/modify",product, httpOptions)
  }

  deleteProduct(id : number) : Observable<Product>{
    const  httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.delete<Product>(this.baseUrl+"product-service/products/delete/"+id, httpOptions)
  }

  getProductByType(type : String) : Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Product[]>(this.baseUrl+"product-service/products/cat/"+type, httpOptions)
  }

  getProductByName(name : String) : Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Product>(this.baseUrl+"/product-service/products/name/"+name, httpOptions)
  }

  getOffers() : Observable<Offer>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Offer>(this.baseUrl+"product-service/products/day", httpOptions)
  }

  getRatedProducts() : Observable<Product[]>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.get<Product[]>(this.baseUrl+"product-service/products/getRating",httpOptions)
  }

  addRating(product : Product) : Observable<Product>{
    const httpOptions = {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'Authorization': 'Bearer ' + this.userAuthService.getToken()
      })
    }
    return this.http.post<Product>(this.baseUrl+"product-service/products/addRating",product,httpOptions)
  }

  raisetype(type : string) : void{
    this.category = type;
    this.receivedType.next(this.category)
  }
}
