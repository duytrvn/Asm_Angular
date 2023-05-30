import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Router } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss'],
})
export class ProductListComponent {
  products: IProduct[] = [];
  constructor(private productService: ProductService, private router: Router) {
    this.productService.getProducts().subscribe(
      (data) => {
        this.products = data;
      },
      (error) => console.log(error)
    );
  }
  removeItem(id:any) {
    const ok = confirm("Bạn muốn xóa chứ");
    if(ok){
      this.productService.deleteProduct(id).subscribe(()=>{
        alert('Xóa thành công')
        this.products = this.products.filter(item => item.id != id)
      })
    }
  }
}
