import { Component } from '@angular/core';
import { Article } from '../article-item/article-item.interface';
import { ArticleItemComponent, ArticleQuantityChange } from '../article-item/article-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-article-list',
  standalone: true, // Es un componente independiente
  imports: [CommonModule, ArticleItemComponent],

  /*Usamos template y styles en línea por enunciado ejercicio 7 
  Es la información que no se me renderiza 
  template: `<h1>Listado de productos:</h1> 
   <app-article-item *ngFor="let article of products"
  [article]="article"
  (quantityChange)="onQuantityChange($event)">
</app-article-item>
`*/
template: `<h1>Listado de productos</h1>
<ul>
  @for (article of products; track article.id) {
    <li> {{article.id}}</li>
  }
</ul>

`,
  styles: [`
    h1 {
      text-align: center;
    }
  `]
})
export class ArticleListComponent {
  // Lista de productos
  products: Article[] = [
    {
      id: 1,
      name: 'Zanahoria',
      imageUrl: 'https://soycomocomo.es/media/2019/03/zanahorias.jpg',
      price: 1,
      isOnSale: true,
      quantityInCart: 5,
    },
    {
      id: 2,
      name: 'Tomate',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQj7Sc0I1cZ7uPRrqFqaH7PwZqTaHCp6p49w&s',
      price: 2,
      isOnSale: false,
      quantityInCart: 0,
    },
    {
      id: 3,
      name: 'Judías blancas',
      imageUrl: 'https://i.ytimg.com/vi/SOpiQ4ksFdY/maxresdefault.jpg',
      price: 2,
      isOnSale: true,
      quantityInCart: 0,
    }
  ];

  trackById(index: number, item: Article): number {
    return item.id; // Usamos 'id' para identificar de forma única cada producto
  }
  // Traspaso de la lógica de aumento y reducción de productos a este componente: 
  onQuantityChange(event: ArticleQuantityChange): void {
    const { article, change } = event;
    const index = this.products.findIndex((p) => p.id === article.id);  // Cambié por 'id'
    if (index !== -1) {
      this.products[index].quantityInCart += change;
      console.log(`Cantidad de ${this.products[index].name}: ${this.products[index].quantityInCart}`);
    }
  }

}