import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductsService } from './products.service'
import { Product } from '../product-detail/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  allProduct: Product[] = [];
  displaysearch: boolean = false;
  searchedProduct!: Product;
  errorMessage: string = "This medecine is not manufactured by XYZPharma";
  showError: boolean = false;

  //Inject the Router and ProductsService object to the constructor
  constructor(private service: ProductsService, private route: Router) { }

  // implement getSpecificProducts() that will filter the details of the specific product registed for from the product list
  getSpecificProducts(val: any) {
    //implement call to getAllProducts() in productsService
    this.displaysearch = true;
    let check: boolean = false;
    this.allProduct.forEach(prod => {  
      if (prod.name === val) {
        this.searchedProduct = prod;
        check = true;
        this.showError = false;
      }
      if (!check) {
        this.showError = true;
      }
    })
  }

  ngOnInit() {
    //code to display all product on load of product page
    this.service.getAllProducts().subscribe((prods) => prods.forEach(prod => {
      this.allProduct.push(prod);
    }));
  }

  viewDetails(val: any) {
    // do programatically navigation to product-detail component, passing the product selected received as parameter of viewDetails()
    console.log(val);
    this.route.navigate(['productDetail/',val['name']]); 
  }
}


