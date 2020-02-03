import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { FormGroup, FormControl } from '@angular/forms';
import { Bill } from 'src/app/Bill';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { getLocaleWeekEndRange, DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Offer';

@Component({
  selector: 'app-billing',
  templateUrl: './billing.component.html',
  styleUrls: ['./billing.component.css'], 
  providers:[DatePipe]
})
export class BillingComponent implements OnInit {

  firstName : String
  lastName : String
  userId : number
  productId : number
  ratePerQuantity : number
  billForm : FormGroup 
  bill : Bill
  productList : Product[] 
  type : String
  product : Product
  user : User
  offer : Offer

  //addList : Product[] = new Array()

  constructor(private router : Router, private billService: BillService, private userService: UserService, private productService : ProductService, private datePipe:DatePipe) {
    // this.userService.getAllUsers().subscribe((data: User[]) => {
    //   this.userList = data

    //   this.approved = this.userList.filter(
    //     user => (user.userType == this.userType)
    //   )
    //   this.customers = this.approved ? this.approved : []
    //   console.log(this.customers)
    // })
    // this.productService.getAllProducts().subscribe((data : Product[])=>{
    //   this.productList=data
    //   console.log(this.productList)
    // })
  }

  ngOnInit() {
   // console.log(this.addList)
    this.billForm = new FormGroup({
      'quantity': new FormControl(''),
      'ratePerQuantity' : new FormControl('')
    })
    this.productService.getOffers().subscribe((data)=>this.offer=data)
  }

  getUser(contactNumber : number){
    console.log(contactNumber)
    this.billService.getUserByContactNumber(contactNumber).subscribe((data : User)=>{
      this.user = data
      this.firstName = data.firstName
      this.lastName = data.lastName
      this.billService.generateEvent(contactNumber)
      console.log( this.billService.generateEvent(contactNumber))
      console.log(this.user)
    })
  }

    getCategory($event){
      this.type=$event.target.value
      this.getProductsByType(this.type)
    }

    getProductsByType(type : String){
      this.productService.getProductByType(this.type).subscribe((data : Product[])=>{
        this.productList = data as Product[]
      })
    }

    // getProduct($event){
    //   this.name=$event.target.value
    //   this.getProductByName(this.name)
    // }

    // getProductByName(name : String){
    //     this.productService.getProductByName(name).subscribe((data : Product)=>{
    //       this.product = data
    //       this.productId = data.id
    //       this.ratePerQuantity=data.ratePerQuantity
    //     })
    //   }

    onAddProduct(id : number){
      console.log(id)
      this.productService.getProductById(id).subscribe((data)=>{
      this.product = data
      // this.ratePerQuantity=data.ratePerQuantity
      if(this.offer.productType == this.product.type){
        this.ratePerQuantity = data.ratePerQuantity -((data.ratePerQuantity*this.offer.discount)/100)
      } 
      else{
        this.ratePerQuantity = data.ratePerQuantity
      }
      console.log(this.product)
      })
      this.onSubmit()
  }

      onSubmit(){
        // this.billForm.value.rate = this.rate
        // this.onAddProduct(this.product.id)
        this.billForm.value.user = this.user
        this.billForm.value.product = this.product
        this.billForm.value.ratePerQuantity= this.product.ratePerQuantity*this.billForm.value.quantity
        this.billForm.value.billDate = this.datePipe.transform(new Date(),'dd/MM/yyyy');
        console.log(this.billForm.value)
        this.billService.submitBill(this.billForm.value).subscribe((response) => {
          this.product.stockCount = this.product.stockCount - this.billForm.controls['quantity'].value
          this.productService.modifyProduct(this.product).subscribe()
          window.alert("success")
        })
      }
     
}
