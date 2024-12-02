import { Component } from '@angular/core';
import { Article } from './article-item.interface';

@Component({
  selector: 'app-article-item',
  imports: [],
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent {
 product: Article = {
  name: 'Zanahoria',
  imageUrl: 'https://soycomocomo.es/media/2019/03/zanahorias.jpg',
  price: 1,
  isOnSale: true,
  quantityInCart: 5
 }

// Métodos para los botones de producto
increaseQuantity(): void {
  if (this.product.isOnSale) {
    this.product.quantityInCart++;  // Aumenta la cantidad en el carrito
    console.log(`Cantidad de ${this.product.name}: ${this.product.quantityInCart}`);
  }
}

decreaseQuantity(): void {
  if (this.product.isOnSale && this.product.quantityInCart > 0) {
    this.product.quantityInCart--;  // Disminuye la cantidad en el carrito
    console.log(`Cantidad de ${this.product.name}: ${this.product.quantityInCart}`);
  }
}
}
