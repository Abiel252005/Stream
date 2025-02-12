import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

interface CartItem {
  title: string;
  price: number;
  quantity: number;
  image: string;
}

@Component({
  selector: 'app-cart-content',
  templateUrl: './cart-content.component.html',
  styleUrls: ['./cart-content.component.scss'],
  standalone: false
})
export class CartContentComponent  implements OnInit {
  cartItems: CartItem[] = [
    {
      title: 'Minecraft',
      price: 29.99,
      quantity: 1,
      image: 'https://products.eneba.games/resized-products/Dbdx7ihzJk48bASi_G0jHEgx2obfGYE_tNyWsjtJ4a4_350x200_1x-0.png', 
    },
    {
      title: 'Elden Ring',
      price: 59.99,
      quantity: 2,
      image: 'https://products.eneba.games/resized-products/qx8Tbt_P4s0CUWhUi0zXERfNW1s7_qGS5WbBO_uVudI_350x200_1x-0.jpeg', 
    }
  ];

  constructor(private alertController: AlertController) { }

  ngOnInit() { }

  removeItem(item: CartItem) {
    this.cartItems = this.cartItems.filter(cartItem => cartItem !== item);
  }

  getTotalPrice(): number {
    return this.cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  }

  async checkout() {
    const alert = await this.alertController.create({
      header: 'Confirmación de Compra',
      message: `El total es $${this.getTotalPrice().toFixed(2)}. ¿Deseas continuar?`,
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel'
        },
        {
          text: 'Aceptar',
          handler: () => {
            this.cartItems = [];
          }
        }
      ]
    });

    await alert.present();
  }
}
