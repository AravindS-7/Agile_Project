import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { UserAuthService } from 'src/app/services/user-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router,private productService: ProductService, private userAuthService: UserAuthService) { }


  ngOnInit() {

  }


  onSearchText(event: any) {
    this.productService.search.next({ name: event.target.value })
  }

  isLoginValid() {
    return this.userAuthService.isLoginValid
  }

  getUser() {
    //console.log(this.userAuthService.getUserId())
    return this.userAuthService.getUserId()
  }

  isAuthenticated() {
   // console.log(this.userAuthService.isLoggedIn)
    return this.userAuthService.isLoggedIn
    }

  isAdminUser() {
   // console.log(this.userAuthService.isAdmin)
    return this.userAuthService.isAdminUser()
  }

  onSignOut() {
    this.userAuthService.logOut()
    this.router.navigate([this.userAuthService.redirectUrl])
  }

  superUser(){
    // console.log(this.userAuthService.superUser())
    return this.userAuthService.superUser()
  }

}
