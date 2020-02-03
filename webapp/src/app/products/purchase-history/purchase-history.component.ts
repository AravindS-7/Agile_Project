import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { BillService } from 'src/app/services/bill.service';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';
import { User } from 'src/app/User';
import { Bill } from 'src/app/Bill';

@Component({
  selector: 'app-purchase-history',
  templateUrl: './purchase-history.component.html',
  styleUrls: ['./purchase-history.component.css']
})
export class PurchaseHistoryComponent implements OnInit {

  constructor(private userService :UserService, private userAuthService : UserAuthService, private billService  :BillService) { }

  userId : String
  id : number
  products : Product[]
  user : User
  bills : Bill[]

  ngOnInit() {
    this.userId = this.userAuthService.getUserId()
    this.userService.getUserByUserId(this.userId).subscribe((data)=>{
    this.user = data,
    this.id = data.id
    this.billService.getPurchaseHistoryById(this.id).subscribe((data : Bill[])=>
    this.bills = data)
  })
  }

}
