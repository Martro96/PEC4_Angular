import { Component, ViewEncapsulation } from '@angular/core'; //Añadimos el ViewEncapsulation
import { Article } from './article-item.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-article-item',
  standalone: true, // Indica que es un componente independiente
  imports: [CommonModule], // Importa CommonModule para habilitar ngClass y otras directivas comunes
  templateUrl: './article-item.component.html',
  styleUrls: ['./article-item.component.css'],
  encapsulation: ViewEncapsulation.None // Cambiamos según se elija el método de encapsulación de estilos
})
export class ArticleItemComponent {
 products: Article[] = [
  {
  name: 'Zanahoria',
  imageUrl: 'https://soycomocomo.es/media/2019/03/zanahorias.jpg',
  price: 1,
  isOnSale: true,
  quantityInCart: 5  
  },
    {
      name: 'Tomate',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj7Sc0I1cZ7uPRrqFqaH7PwZqTaHCp6p49w&s', 
      price: 2,
      isOnSale: false,
      quantityInCart: 0,
    },
 ]

  // Métodos para los botones de producto
  increaseQuantity(product: Article): void { //Al haber creado el array de productos, modificamos el método pasándole por parámetro el producto Article
    if (product.isOnSale) {
      product.quantityInCart++; // Aumenta la cantidad en el carrito
      console.log(`Cantidad de ${product.name}: ${product.quantityInCart}`);
    }
  }

  decreaseQuantity(product: Article): void {
    if (product.isOnSale && product.quantityInCart > 0) {
      product.quantityInCart--; // Disminuye la cantidad en el carrito
      console.log(`Cantidad de ${product.name}: ${product.quantityInCart}`);
    }
  }
}