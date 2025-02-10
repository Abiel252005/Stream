import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MarketContentComponent } from './market-content/market-content.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { CartContentComponent } from './cart-content/cart-content.component';




@NgModule({
  declarations: [
    MarketContentComponent,
    SearchContentComponent,
    CartContentComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  
  exports: [
    MarketContentComponent,
    SearchContentComponent,
    CartContentComponent
  ]
})
export class ComponentsModule { }
