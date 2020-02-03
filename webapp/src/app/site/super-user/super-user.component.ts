import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { AddProductComponent } from 'src/app/products/add-product/add-product.component';

@Component({
  selector: 'app-super-user',
  templateUrl: './super-user.component.html',
  styleUrls: ['./super-user.component.css']
})
export class SuperUserComponent implements OnInit {

  constructor(private userService : UserService) { }

  pendingUsers : User[]

  userList : User[]

  userStatus : String = 'P'

  user : User

  updatedStatus : String 

  ngOnInit() {
    this.statusUpdate()
      // if(this.pendingUsers){
      //   this.isEmpty = false
      //   console.log(this.isEmpty)
      // }
  }
  
  statusUpdate(){
    this.userService.getAllUsers().subscribe((value:User[])=> {
      this.userList = value
      console.log(this.userList)
      
      //Getting Pending Manager List
      const pending = this.userList.filter(
        user => (user.status == this.userStatus)
      )
  
      this.pendingUsers = pending ? pending : [] 
    })
  }


  accept(user : User){
    user.status = 'A'
    this.userService.updateUser(user).subscribe(value=>{
      this.statusUpdate()
      if(this.pendingUsers.length == 0){
        this.updatedStatus = 'I'
      }
      else{
        this.updatedStatus = 'A'
      }
    })
  }

  decline(user : User){
    user.status = 'D'
    this.userService.updateUser(user).subscribe((value)=>{
      this.statusUpdate()
      if(this.pendingUsers.length == 0){
        this.updatedStatus = 'I'
      }
      else{
        this.updatedStatus = 'D'
      }
    })
  }


}


