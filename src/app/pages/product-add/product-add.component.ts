import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.scss']
})
export class ProductAddComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(private productService: ProductService ,private router:Router ){}
  onHandleSubmit(){
    this.productService.addProduct(this.product).subscribe(product => {
      alert('Thêm Thành Công')
    })
  }
}
