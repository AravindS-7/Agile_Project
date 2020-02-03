import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/Product';

@Component({
  selector: 'app-modify-product',
  templateUrl: './modify-product.component.html',
  styleUrls: ['./modify-product.component.css']
})
export class ModifyProductComponent implements OnInit {
  editForm: FormGroup;
  productEdited = false;
 
  dateAdded: Date;
  count: number;
  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.editForm = new FormGroup({
      'id': new FormControl(null),
      'code': new FormControl(null, [Validators.required]),
      'name': new FormControl(null, [Validators.required]),
      'type': new FormControl(null, [Validators.required]),
      'brand': new FormControl(null, [Validators.required]),
      'quantityType': new FormControl(null),
      'ratePerQuantity': new FormControl(null),
      'stockCount': new FormControl(null, [Validators.required]),
      'addDate': new FormControl(null, [Validators.required]),
      'aisle': new FormControl(null, [Validators.required]),
      'shelf': new FormControl(null, [Validators.required]),
      'dateOfManufacture': new FormControl(null),
      'dateOfExpiry': new FormControl(null),
      'image': new FormControl(null)

    });
    this.route.params.subscribe((params: Params) => {
      const id = params['id'];
      this.productService.getProductById(id).subscribe((product: Product) => {
        if (product) {
          this.editForm.patchValue({
            id: product.id,
            name: product.name,
            image: product.image,
            ratePerQuantity: product.ratePerQuantity,
            type: product.type,
            dateOfManufacture: product.dateOfManufacture,
            dateOfExpiry: product.dateOfExpiry,
            brand: product.brand,
            productCode: product.code,
            aisle: product.aisle,
            shelf: product.shelf,
            quantityType: product.quantityType,
            addDate: product.addDate,
            stockCount:product.stockCount
          
          });
          console.log(product);
        };
      })
    });
    //   this.dateAdded = new Date();
    //  console.log(this.datePipe.transform(this.dateAdded,"yyyy-MM-dd"));
  }

  // compareProducts(a: Product, b: Product) {
  //   return a && b ? a.id === b.id : a == b;
  // }

  onSubmitEditForm(product: any) {
    console.log(this.editForm.value);
   
    this.productService.modifyProduct(product.value).subscribe();
    this.productEdited = true;
  }
}


