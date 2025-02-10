import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-content',
  templateUrl: './search-content.component.html',
  styleUrls: ['./search-content.component.scss'],
  standalone: false
})
export class SearchContentComponent implements OnInit {
  searchQuery: string = ''; 
  selectedCategory: string = 'all'; 
  games = [
    { 
      title: 'Minecraft', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_1x-0.png', 
      price: 29.99 
    },
    { 
      title: 'Call of Duty black ops 6', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/ojpezNHQ_DD458R8M1fzbCjF7Z8-tNRdc08dZ8KrZ6Q_350x200_1x-0.jpg', 
      price: 59.99 
    },
    { 
      title: 'Fortnite DLS pack', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/hMtrnXlDBX0EHgzO6ZvudX05m2YSMuZ3kdNfh0mfVh8_350x200_1x-0.jpg', 
      price: 19.99 
    },
    { 
      title: 'Elden Ring', 
      category: 'action', 
      image: 'https://products.eneba.games/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg', 
      price: 59.99 
    },
    { 
      title: 'Zelda: Breath of the Wild', 
      category: 'adventure', 
      image: 'https://products.eneba.games/resized-products/4vtIZdR9czeN0DWPrUTQnlaZRUumT-mJX7eh2RFGqpw_350x200_1x-0.jpeg', 
      price: 49.99 
    },
    { 
      title: 'Hogwarts Legacy', 
      category: 'adventure', 
      image: 'https://products.eneba.games/resized-products/pWjtGdm5_gHCDbrLlHo_OtPbUsin7dyCzylQ0snaSoM_350x200_1x-0.jpg', 
      price: 59.99 
    },
    { 
      title: 'Super Mario Odyssey', 
      category: 'adventure', 
      image: 'https://products.eneba.games/resized-products/eAq39bYJpWk9exwMnmNKcDOiW7LLXgN7DKIBWYxlEps_350x200_1x-0.jpeg', 
      price: 49.99 
    },
    { 
      title: 'Red Dead Redemption 2', 
      category: 'adventure', 
      image: 'https://products.eneba.games/resized-products/6M1qP76B-j6vdX0T4bFCHgJeX99MaKBpXFxbpif1MqY_350x200_1x-0.jpeg', 
      price: 59.99 
    },
    { 
      title: 'Age of Empires IV', 
      category: 'strategy', 
      image: 'https://products.eneba.games/resized-products/xVe16G0Fj1pwlAqvTOO9lHk3pVIN70jnnQU7qlpn8gQ_350x200_1x-0.jpeg', 
      price: 39.99 
    },
    { 
      title: 'StarCraft II', 
      category: 'strategy', 
      image: 'https://products.eneba.games/resized-products/bgn7cqukcnskka73rwse_350x200_1x-0.jpg', 
      price: 29.99 
    },
    { 
      title: 'Civilization III', 
      category: 'strategy', 
      image: 'https://products.eneba.games/resized-products/dmvz8KnAatC6RvAeeqvSojQWHzt4StVdO8skaV0ss8Q_350x200_1x-0.jpeg', 
      price: 49.99 
    },
    { 
      title: 'Total War: Three Kingdoms', 
      category: 'strategy', 
      image: 'https://products.eneba.games/resized-products/5QEyDfq6cqL3kNuYgHnEjLHHIWMQ9k3S0R1bLsLm-As_350x200_1x-0.jpeg', 
      price: 59.99 
    },
    { 
      title: 'Grand Theft Auto V', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/s29Db6ZBVLneuD0t66qnYRamvGDP3p8chLz-3IomxcU_350x200_1x-0.jpeg', 
      price: 29.99 
    },
    { 
      title: 'Among Us', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/InlPQPt7WRDHBRnySANJHVQrS2whLdUdTX9JB7djmGw_350x200_1x-0.jpeg', 
      price: 4.99 
    },
    { 
      title: 'Apex Legends', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/-EFLo13hXlh4kKIv7DKTzpMkJ6Rn3-uwgkX62XXK_B4_350x200_1x-0.png', 
      price: 0.00 
    },
    { 
      title: 'League of Legends', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/li7cof0JQE8HtxNeER6pVBvEsRERvXBNDeeml7sQHCA_350x200_1x-0.jpeg', 
      price: 0.00 
    },
    { 
      title: 'Valorant', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/iRQE3Mjv2VWaRzylUof4aWebsbOoEBWe5c6p4iG84po_350x200_1x-0.jpeg', 
      price: 0.00 
    },
    { 
      title: 'Counter-Strike: Global Offensive', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/tjavlrx5y8lkol7uql40_350x200_1x-0.jpg', 
      price: 0.00 
    },
    { 
      title: 'Dota 2', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/fafUSycScmxJKLY0uKvPis-oT7WxAuj8lwAN_bsE_SY_350x200_1x-0.jpeg', 
      price: 0.00 
    },
    
    { 
      title: 'Overwatch 2', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/AopIOdhoJXPeSka7uVhfU6rrR_qGwkakZRIGpQOWw8A_350x200_1x-0.png', 
      price: 39.99 
    },
    { 
      title: 'The Witcher 3: Wild Hunt', 
      category: 'top', 
      image: 'https://products.eneba.games/resized-products/0c87248bbfac2866d434aad19334b24b_350x200_1x-0.jpg', 
      price: 39.99 
    }
  ];
  
  filteredGames = [...this.games];

  constructor() {}

  ngOnInit() {}

  filterGames() {
    const query = this.searchQuery.toLowerCase();
    const category = this.selectedCategory;

    this.filteredGames = this.games.filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(query);
      const matchesCategory = category === 'all' || game.category === category;
      return matchesSearch && matchesCategory;
    });
  }
}
