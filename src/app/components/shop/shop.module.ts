import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
 import { ProductsComponent } from './products/products.component';
import { ProductComponent } from './products/product/product.component';
import { ProductDetailsComponent } from './products/product-details/product-details.component';
 import { ProductLeftSidebarComponent } from './products/product-left-sidebar/product-left-sidebar.component';
 import { CommonModule } from '@angular/common';
import { ShopRoutingModule } from './shop-routing.module';
import { SharedModule } from '../shared/shared.module';
import { SwiperModule } from 'ngx-swiper-wrapper';
import { FlexLayoutModule } from '@angular/flex-layout';
import {NgxPaginationModule} from 'ngx-pagination';

// Import the library
import { NgxImageZoomModule } from 'ngx-image-zoom';

import { ProductCarouselComponent } from './../shop/home/product-carousel/product-carousel.component';
import { from } from 'rxjs';


 import { ProductZoomComponent } from './products/product-details/product-zoom/product-zoom.component';


@NgModule({
  declarations: [
    HomeComponent,
    MainCarouselComponent,
    ProductsComponent,
     ProductComponent,
    ProductDetailsComponent,
     ProductLeftSidebarComponent,

    ProductCarouselComponent,

       ProductZoomComponent
  ],
  imports: [
    CommonModule,
    ShopRoutingModule,
    SharedModule,
    SwiperModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    NgxPaginationModule,
    NgxImageZoomModule.forRoot()

  ],
  exports: [
     ProductZoomComponent

  ],

  entryComponents:[
     ProductZoomComponent
  ],
})

export class ShopModule { }
