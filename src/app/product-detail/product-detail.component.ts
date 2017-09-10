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
  newRating: number = 5;
  newComment: string = '';
  isCommentHidden = true;
  constructor(private routeInfo: ActivatedRoute,
              private productService: ProductService) { }

  ngOnInit() {

    this.productId = this.routeInfo.snapshot.params["productId"];
    // this.productTitle = this.routeInfo.snapshot.params["prodTitle"];
    this.product = this.productService.getProduct(this.productId);
    this.comments = this.productService.getCommentsForProductId(this.productId);
  }
  addComment() {
    let comment = new Comment(0, this.productId, new Date().toISOString(), 'someone', this.newRating, this.newComment);
    this.comments.unshift(comment);
    let sum = this.comments.reduce((sum, comment) => sum + comment.rating, 0);
    this.product.rating = sum/ this.comments.length;
    this.newComment = null;
    this.newRating = 5;
    this.isCommentHidden = true;
  }

}
