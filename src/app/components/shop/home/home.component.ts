import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../shared/services/product.service';
import { Product } from 'src/app/modals/product.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {
  products: Product[];
  public banners = [];
  public slides = [
    { title: ' Prix encore plus bas', subtitle: 'Une qualité toujours aussi élevée ', image: 'assets/images/carousel/banner1.jpg' },
    { title: 'Ensemble, c’est mieux ', subtitle: 'Top catégories de meubles '  , image: 'assets/images/carousel/banner2.jpg' },

  ];

  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getBanners()
    .subscribe(
      data => this.banners = data
    );

 this.productService.getProducts()
 .subscribe(
   (product: Product[]) => {
     this.products = product
   }
 )

  }






}
