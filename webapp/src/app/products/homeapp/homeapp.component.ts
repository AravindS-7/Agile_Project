import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/Product';
import { ProductService } from 'src/app/services/product.service';
import { Offer } from 'src/app/Offer';
import { UserAuthService } from 'src/app/services/user-auth.service';

@Component({
  selector: 'app-homeapp',
  templateUrl: './homeapp.component.html',
  //styleUrls: ['./homeapp.component.css']
})
export class HomeappComponent implements OnInit {
  productList: Product[]

  searchedProducts: Product[]

  sortedProducts: Product[]
  
  type : String = 'Snacks'

  selectedType : String

  offer : Offer

  offerStatus : boolean = false

  product : Product

  rating : number =1

  constructor(private productService: ProductService, private userAuthService : UserAuthService) { }

  // geCategory($event){
  //   console.log($event.target.value)
  //   this.type=$event.target.value
  // }


  ngOnInit() {

    // this.productService.currentType.subscribe((data)=>
    // {this.type=data
    // console.log(this.type)
    // })

    this.productService.getProductByType(this.type).subscribe((data) => {
      this.productList = data,
        this.searchedProducts = data
      console.log(this.productList)
    });


    this.productService.search.subscribe((obj: { name: String }) => {
      if (obj.name !== '') {
        const filter = this.searchedProducts.filter(
          product => product.name.toLocaleLowerCase().includes(obj.name.toLocaleLowerCase())
        );
        this.productList = filter ? filter : [];
      }
      else {
        this.productList = [...this.searchedProducts]
      }
    });

    this.productService.getOffers().subscribe((data)=>{
      this.offer = data as Offer
      if(this.offer.productType == this.type){
        this.offerStatus = true
      }
    })

  }

  getCategory($event){
    this.selectedType=$event.target.value
    this.getProductsByType(this.selectedType)
  }
  
  getProductsByType(type : String){
    this.productService.getProductByType(this.selectedType).subscribe((data : Product[])=>{
      this.productList = data as Product[]
    })
  }

  selected(e) {
    if (e.target.checked) {
      this.productService.getProductByType(this.selectedType).subscribe((value) => {
        if (value !== null) {
          const priceFilter = this.searchedProducts.sort((a, b) => (a.ratePerQuantity < b.ratePerQuantity) ? -1 : ((b.ratePerQuantity < a.ratePerQuantity) ? 1 : 0));
          this.productList = priceFilter ? priceFilter : []
        }

      })
    }
    else {
      this.productService.getProductByType(this.selectedType).subscribe((value) =>{
        this.productList=value;
      })
    }
  }
  
selectedName(e) {
  console.log("Inside name check box function")
  const sortedProducts2:Product[] = this.searchedProducts;
  if (e.target.checked) {
    console.log("name check on")
    this.productService.getProductByType(this.selectedType).subscribe((value) => {
     
      if (value !== null) {
       
        const nameFilter = this.searchedProducts.sort((a, b) => (a.name < b.name) ? -1 : ((b.name < a.name) ? 1 : 0));

        // console.log(nameFilter);
        // console.log(this.sortedProducts);
        // console.log(this.sortedProducts1);
        this.productList = nameFilter ? nameFilter : [];
      }
    })
  }
  else {
    console.log("name check off")
    this.productService.getProductByType(this.selectedType).subscribe((value) =>{
      this.productList=value;
    })
}
}

deleteItem(id:number){
  console.log(id)
  this.productService.deleteProduct(id).subscribe((response) =>{
    console.log("Product is deleted!");
    console.log(this.productList);
    // window.location.reload();
    this.productService.getProductByType(this.type).subscribe((value)=>{
      this.productList = value
    })
  })
}

isAdmin(){
 return this.userAuthService.isAdmin
  console.log(this.userAuthService.isAdmin)
}


addFavorite(id : number){
  this.productService.getProductById(id).subscribe((data)=>{
    this.product = data;
    this.product.rating = this.product.rating+this.rating
    this.productService.addRating(this.product).subscribe()
  })
}


}

