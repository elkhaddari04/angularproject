import { Component, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/app/modals/product.model';
import { CartItem } from 'src/app/modals/cart-item';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  public sidenavMenuItems:Array<any>;

  public currencies = ['MAD ',];
  public currency:any;

  public flag:any;




  public shoppingCartItems: CartItem[] = [];


  constructor(private cartService: CartService) {
    this.cartService.getItems().subscribe(shoppingCartItems =>
      {
      this.shoppingCartItems = shoppingCartItems
    }
    );
  }

  ngOnInit() {

  }



}
