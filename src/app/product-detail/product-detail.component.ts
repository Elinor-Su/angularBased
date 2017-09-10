import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Comment, Product, ProductService} from '../shared/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  // productTitle: string;
  productId: number;
  product: Product;
  comments: Comment[];
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {

    this.productId = this.routeInfo.snapshot.params["productId"];
    // this.productTitle = this.routeInfo.snapshot.params["prodTitle"];
    this.product = this.productService.getProduct(this.productId);
    this.comments = this.productService.getCommentsForProductId(this.productId);
  }

}
