import { Component, OnInit } from '@angular/core';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLoginValid: boolean = true
  authSource: string
  error: string
  user: User
  loginStatus: String

  constructor(private router: Router, private route: ActivatedRoute, private userAuthService: UserAuthService,
    private authService: AuthenticationService, private userService: UserService) { }

  ngOnInit() {
    console.log("Inside")
    this.route.queryParams.subscribe((params: Params) => {
      this.authSource = params['from'];
    });
  }

  onSubmit(form: NgForm) {
    let userId = form.value.userId
    let password = form.value.password
    console.log(userId);
   
    this.authService.authenticate(userId, password).subscribe((data) => {
      
      this.userAuthService.isLoggedIn = true
      this.userAuthService.logIn(userId, password)
      this.userAuthService.setRole(data.role)
      this.userAuthService.setUserId(data.userId);
      console.log(this.userAuthService.getUserId())
      const user = this.userAuthService.getUserId();
      this.userAuthService.setToken(data.token);
      // this.router.navigate(['/homeapp']);

      if (this.userAuthService.getRole() == "SUPER_USER") {
        this.router.navigate(['/userList']);
        this.userAuthService.isLoginValid = true
        this.userAuthService.isSuperUser = true
      }
      else if (this.userAuthService.getRole() == "ADMIN") {
        this.userService.getUserByUserId(userId).subscribe((data: User) => {
          this.user = data
          if (this.user.status == 'P') {
            this.loginStatus = "Pending"
            this.userAuthService.isLoginValid = false
            this.userAuthService.isLoggedIn = false
          }
          else if (this.user.status == 'D') { 
            this.loginStatus = "Denied"
            this.userAuthService.isLoginValid = false
            this.userAuthService.isLoggedIn = false
          }
          else{
            this.router.navigate(['/products'])
          }
        })
      }
      else {
        this.userAuthService.isLoginValid = true
        this.router.navigate(['/products'])
      }
    },
      (error) => {
        this.isLoginValid = false
        this.userAuthService.isLoginValid = false
      })
  }

}
