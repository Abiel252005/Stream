import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { MarketContentComponent } from './market-content/market-content.component';
import { SearchContentComponent } from './search-content/search-content.component';
import { CartContentComponent } from './cart-content/cart-content.component';
import { ProfileContentComponent } from './profile-content/profile-content.component';




@NgModule({
  declarations: [
    MarketContentComponent,
    SearchContentComponent,
    CartContentComponent,
    ProfileContentComponent

  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule
  ],
  
  exports: [
    MarketContentComponent,
    SearchContentComponent,
    CartContentComponent,
    ProfileContentComponent
  ]
})
export class ComponentsModule { }
