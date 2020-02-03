import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user : User
  registerForm : FormGroup
  error : string

  constructor(private userService : UserService, private router : Router) { }

  ngOnInit(){
    this.error=null
    this.registerForm =  new FormGroup({
      'firstName': new FormControl(''),
      'lastName': new FormControl(''),
      'age': new FormControl(''),
      'gender': new FormControl(''),
      'contactNumber': new FormControl(''),
      'userId': new FormControl(''),
      'password': new FormControl(''),
      'userType': new FormControl(''),
      'secretQuestion1': new FormControl(''),
      'secretAnswer1': new FormControl(''),
      'secretQuestion2': new FormControl(''),   
      'secretAnswer2': new FormControl(''),
      'secretQuestion3': new FormControl(''),
      'secretAnswer3': new FormControl('')
    })
  }
  onSubmit() {
    console.log("In submit")
    console.log(this.registerForm.value)
    if(this.registerForm.value.userType=='A'){
      this.registerForm.value.status='P'
    }
    else{
      this.registerForm.value.status='A'
    }
    this.userService.addUser(this.registerForm.value).subscribe(
      (response) => {
        this.router.navigate(['/login']);
      },
      (responseError) => {
        this.error = responseError.error.errorMessage;
      });
  }
}
