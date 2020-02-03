import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Product } from 'src/app/Product';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {

  product : Product[]
  addForm : FormGroup
  productAdded : Boolean

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    this.addForm = new FormGroup({
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
  }

  onSubmit(product: any) {
    console.log(this.addForm.value);
   
    this.productService.addProduct(product.value).subscribe();
    this.productAdded = true;
  }

}
