import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'market-place',
        loadChildren: () => import('../market-place/market-place.module').then( m => m.MarketPlacePageModule)
      },

      {
        path: 'search',
        loadChildren: () => import('../search/search.module').then( m => m.SearchPageModule)
      },

      {
        path: 'cart',
        loadChildren: () => import('../cart/cart.module').then( m => m.CartPageModule)
      },
    
      
      {
        path: '',
        redirectTo: '/market-place',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/market-place',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
