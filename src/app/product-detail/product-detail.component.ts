import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductDetailService } from './product-detail.service';
import { Product } from './product'
import { __values } from 'tslib';


@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  //Inject the ActivatedRoute and ProductDetailService object to the constructor
  constructor(private route: ActivatedRoute, private productDetailService: ProductDetailService) { }

  tabletName!: any;
  productDetail!: Product;

  ngOnInit() {
    //resolve the route parameter and make a call to the getTabDetail() of productDetailService
    this.tabletName = this.route.snapshot.paramMap.get('tabletName');
    this.productDetailService.getTabDetail(this.tabletName).subscribe(prods => prods.forEach(prod => {
      if (prod['name'] === this.tabletName) this.productDetail = prod;
    }))
  }
}
