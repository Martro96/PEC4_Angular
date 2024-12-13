import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { ArticleItemComponent } from './article-item/article-item.component'; Quito el imput de article-item porque sólo debe apuntar al article-list
import { ArticleListComponent } from './article-list/article-list.component';

@Component({
  selector: 'app-root',
  standalone: true, // Es un componente independiente
  imports: [ArticleListComponent],//Dejo sólo el import de articleListComponent
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ecommerce';
}
