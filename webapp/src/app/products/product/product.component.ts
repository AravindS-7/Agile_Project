import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/Product';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  //styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  type : string

  productList : Product[] 

  constructor(private productService : ProductService, private router : Router) { }

  ngOnInit() {
      this.productService.getRatedProducts().subscribe((data : Product[])=>{
      this.productList = data
      console.log(this.productList)
      })     
}

  goToBeauty(){
    this.type="Beauty"
    this.productService.raisetype(this.type)
    this.router.navigate(['/homeapp'])
  }
  
  goToSnacks(){
    this.type="Snacks"
    this.productService.raisetype(this.type)
    this.router.navigate(['/homeapp'])
  }

  goToCleaning(){
    this.type="Cleaning"
    this.productService.raisetype(this.type)
    this.router.navigate(['/homeapp'])
  }

  
}
