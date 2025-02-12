import { Component } from '@angular/core';

@Component({
  selector: 'app-market-content',
  templateUrl: './market-content.component.html',
  styleUrls: ['./market-content.component.scss'],
  standalone: false
})
export class MarketContentComponent {
  categories = [
    { 
      title: 'Games', 
      items: '45.500+', 
      image: 'https://cdn2.steamgriddb.com/grid/767b8ea0c80e550518aa8b922adae05c.jpg',
      isFavorite: false 
    },
    { 
      title: 'Gaming eCards', 
      items: '5.400+', 
      image: 'https://cdn2.steamgriddb.com/grid/f37b6a115c31dbcb3b3d534a82da92eb.png',
      isFavorite: false 
    },
    { 
      title: 'Game Points', 
      items: '1.500+', 
      image: 'https://cdn2.steamgriddb.com/grid/f67986b2d55421e00dbacad465fe59f0.jpg',
      isFavorite: false 
    }
  ];

  giftCards = [
    { name: 'Google play', price: "$200", logo: 'https://products.eneba.games/resized-products/vfpGZJbb7WHBhX3SkUHojL5AQ7xmz2u7Hu4Sjc0fjnE_350x200_1x-0.jpeg' },
    { name: 'Netflix', price: "$200", logo: 'https://products.eneba.games/resized-products/2GEiQ4u_8-LEs5hJi6BaSsoJ5NnCp4rnhk7PcpBSZQo_350x200_1x-0.jpeg' },
    { name: 'Apple', price: "$200", logo: 'https://products.eneba.games/resized-products/r_iy35__nNhOKpSwQ1N_bVPqz_LuOu1fbMvyJGHJix0_350x200_1x-0.jpg' },
    { name: 'Amazon', price: "$200", logo: 'https://products.eneba.games/resized-products/9dhoI6y2zV_An3ljwprD5vtb_qTTqTJKFzadvQRF5M8_350x200_1x-0.jpeg' }
  ];

  featuredGames = [
    { 
      title: 'Minecraft', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_1x-0.png', 
      price: 29.99,
      isFavorite: false,
      region: 'Global'
    },
    { 
      title: 'Call of Duty black ops 6', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/ojpezNHQ_DD458R8M1fzbCjF7Z8-tNRdc08dZ8KrZ6Q_350x200_1x-0.jpg', 
      price: 59.99,
      isFavorite: false,
      region: 'USA'
    },
    { 
      title: 'Fortnite DLS pack', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/hMtrnXlDBX0EHgzO6ZvudX05m2YSMuZ3kdNfh0mfVh8_350x200_1x-0.jpg', 
      price: 19.99,
      isFavorite: false,
      region: 'Europa'
    },
    { 
      title: 'Elden Ring', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg', 
      price: 59.99,
      isFavorite: false,
      region: 'Asia'
    },
    { 
      title: 'Zelda: Breath of the Wild', 
      category: 'adventure', 
      image: 'https://products.eneba.games/resized-products/4vtIZdR9czeN0DWPrUTQnlaZRUumT-mJX7eh2RFGqpw_350x200_1x-0.jpeg', 
      price: 49.99,
      isFavorite: false,
      region: 'Global'
    },
  ];
  

  toggleFavorite(category: any) {
    category.isFavorite = !category.isFavorite;
  }

  toggleGameFavorite(game: any) {
    game.isFavorite = !game.isFavorite;
  }

  addToCart(game: any) {
    console.log(`${game.title} añadido al carrito.`);
  }
  
  buyNow(game: any) {
    console.log(`Compra inmediata de ${game.title}.`);
  }
}