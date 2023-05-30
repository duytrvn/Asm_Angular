import { Component } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.scss']
})
export class ProductUpdateComponent {
  product: IProduct = {
    name: "",
    price: 0
  }
  constructor(
    private productService: ProductService , 
    private router: Router , 
     private route: ActivatedRoute) {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id'));
      this.productService.getProductById(id).subscribe(product => {
        this.product = product;
      },error => console.log(error));
    })
  }
  onHandleSubmit(){
    this.productService.updateProduct(this.product).subscribe(product => {
      alert('Sửa Thành công')
      this.router.navigate(['/admin/product',this.product])
    })
  }

}
  