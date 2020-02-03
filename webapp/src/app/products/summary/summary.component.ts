import { Component, OnInit } from '@angular/core';
import { BillService } from 'src/app/services/bill.service';
import { User } from 'src/app/User';
import { Bill } from 'src/app/Bill';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit {

  constructor(private billService: BillService) { }

  contactNumber = 0

  user : User

  id : number

  billDate : Date

  bills: Bill[]

  total : number

  ngOnInit() {
    this.billService.currentNumber.subscribe((data: number) => {
      this.contactNumber = data
      console.log(this.contactNumber)
    }),
      this.billService.getUserByContactNumber(this.contactNumber).subscribe((data) => {
        this.user = data;
        console.log(this.user);
        this.id = data.id;
        console.log(this.id);
        this.billService.getBillByUserId(this.id).subscribe((value : Bill[])=>{
          this.bills = [...value]
          console.log(this.bills)
          this.billDate = this.bills[0].billDate
          console.log(this.billDate)
        }),
        this.billService.getTotal(this.id).subscribe((data : number)=>{
        this.total = data
        console.log(this.total)})
        // this.billService.getBillByUserId(this.user.id).subscribe((data) => {
        //   console.log("Hello")
        //   this.bills = [...data]
        // })

      })

  }


}
