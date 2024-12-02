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

 //Métodos para los botones de producto

 quantity: number = 0;  

 increaseQuantity(): void {
   this.quantity++;
   console.log(`Cantidad de ${this.product.name}: ${this.quantity}`);
 }

 decreaseQuantity(): void {
   if (this.quantity > 0) {
     this.quantity--;
     console.log(`Cantidad de ${this.product.name}: ${this.quantity}`);
   }
}
}
