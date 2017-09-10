import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
  private products: Product[] = [
    new Product(1, '第一个商品', 1.99, 3.5, '这是第一个商品，angular入门时创建的', ['电子产品', '硬件设备']),
    new Product(2, '第二个商品', 2.99, 2.5, '这是第二个商品，angular入门时创建的', ['电子产品', '硬件设备']),
    new Product(3, '第三个商品', 3.99, 1.5, '这是第三个商品，angular入门时创建的', ['电子产品', '硬件设备']),
    new Product(4, '第四个商品', 4.99, 2.5, '这是第四个商品，angular入门时创建的', ['电子产品', '硬件设备']),
    new Product(5, '第五个商品', 5.99, 4.5, '这是第五个商品，angular入门时创建的', ['电子产品', '硬件设备']),
    new Product(6, '第六个商品', 6.99, 3.5, '这是第六个商品，angular入门时创建的', ['电子产品', '硬件设备']),
  ];
  // 声明一个商品类的数组，包含所有评论类的信息
  private  comments: Comment[] = [
    new Comment(1, 1, '2017-2-2 22:22:22', '张三1', 2, '东西不错'),
    new Comment(2, 1, '2017-2-2 22:22:22', '张三2', 3, '东西不错'),
    new Comment(3, 1, '2017-2-2 22:22:22', '张三3', 4, '东西不错'),
    new Comment(4, 1, '2017-2-2 22:22:22', '张三4', 5, '东西不错')
  ];

  constructor() { }
  getProducts(): Product[] {
    return this.products;
  }
  // 根据商品的id返回商品列表的相应商品
  getProduct(id: number): Product {
    return this.products.find((product) => product.id == id);
  }

  // 获取商品评论的评论信息
  getCommentsForProductId(id: number): Comment[] {
    return this.comments.filter((commnet: Comment) => commnet.productId == id);
  }

}
export class Product {
  constructor(
    public id: number,
    public title: string,
    public price: number,
    public rating: number,
    public desc: string,
    public categories: Array<string>
  ) {}
}
export class Comment {
  // 构造函数里声明所需字段
  constructor(
    public id: number,
    public productId: number,
    public timestamp: string,
    public user: string,
    public rating: number,
    public content: string
  ) {}
}
