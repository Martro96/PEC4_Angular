1. **Explica qué son y cuándo se deberían utilizar las siguientes variables locales de la directiva estructural NgFor:**

Las variables locales en la directiva NgFor permiten iterar sobre los elementos de un array en Angular y proporcionan información adicional sobre cada elemento en el ciclo de iteración. Esto facilita el acceso a propiedades como la posición del elemento o si es el primero, último, par o impar. Son útiles para mostrar datos específicos o aplicar estilos condicionalmente.

Por ejemplo, si tenemos una tienda ecológica que vende diferentes productos organizados por secciones, podemos tener un array para cada sección. A través de estas variables locales, podemos obtener más detalles sobre cada producto durante la iteración.

Las variables locales disponibles en NgFor son:

- **index**: Representa la posición del elemento en el array (empieza en 0).
- **even**: Es true si el índice del elemento es par (0, 2, 4, etc.).
- **odd**: Es true si el índice del elemento es impar (1, 3, 5, etc.).
- **first**: Es true si el elemento es el primero de la lista.
- **last**: Es true si el elemento es el último de la lista.

De nuevo, con el ejemplo de la tienda ecológica. En el archivo TypeScript del componente (store.component.ts), tenemos arrays para cada sección de la tienda:


``` typescript
export class StoreComponent {
  // Arrays para cada sección de la tienda
  fruits = ['Manzana', 'Pera', 'Plátano', 'Naranja'];
  vegetables = ['Zanahoria', 'Espinaca', 'Tomate', 'Lechuga'];
  cereals = ['Avena', 'Quinoa', 'Arroz Integral', 'Trigo Sarraceno'];
}
```
Y en la plantilla HTML (store.component.html), usamos la directiva NgFor para iterar sobre los productos de cada sección y mostrar información adicional:

``` html
<h2>Frutas</h2>
<ul>
  <li *ngFor="let fruit of fruits; let i = index; let isFirst = first; let isLast = last; let isEven = even; let isOdd = odd">
    {{ i + 1 }}. {{ fruit }}
    <span *ngIf="isFirst">(Primer ítem)</span>
    <span *ngIf="isLast">(Último ítem)</span>
    <span *ngIf="isEven">(Ítem par)</span>
    <span *ngIf="isOdd">(Ítem impar)</span>
  </li>
</ul>
```
Explicación:
- i = index: Muestra la posición del elemento en el array (0 para el primero, 1 para el segundo, etc.). 
    - {{ i + 1 }} muestra el número del elemento empezando en 1.

- isFirst = first: Es true si el elemento actual es el primero en la lista. 
    - *ngIf="isFirst" añade texto o elementos solo si es el primer ítem.
- isLast = last: Es true si el elemento actual es el último en la lista. 
    - *ngIf="isLast" añade texto o elementos solo si es el último ítem.
- isEven = even: Es true si el índice del elemento es par (0, 2, 4...). 
    - *ngIf="isEven" añade texto o estilos a los ítems pares.
- isOdd = odd: Es true si el índice del elemento es impar (1, 3, 5...). 
    - *ngIf="isOdd" añade texto o estilos a los ítems impares.


**Resultado en el navegador:**
Si el array fruits tiene los valores ['Manzana', 'Pera', 'Plátano', 'Naranja'], el resultado será algo como esto:

- Manzana (Primer ítem) (Ítem impar)
- Pera (Ítem par)
- Plátano (Ítem impar)
- Naranja (Último ítem) (Ítem par)


2. **¿Para qué sirve la opción trackBy de la directiva estructural NgFor? Pon ejemplos de uso.**

Cuando tenemos una lista de productos, como frutas o verduras, Angular necesita saber qué elementos debe cambiar si modificamos el array. Por defecto, Angular identifica los elementos por su posición en la lista, lo cual puede ser lento si hay muchos productos porque Angular vuelve a renderizar toda la lista aunque solo cambiemos un producto.

Con trackBy, podemos indicar cómo identificar cada producto de forma única usando, por ejemplo, su id. Así, Angular solo actualiza lo que realmente ha cambiado.

Por ejemplo, volviendo a la tienda ecológica y secciones de productos. Si tenemos este componente en TypeScript:

```typescript
export class StoreComponent {
  products = [
    { id: 1, name: 'Manzana' },
    { id: 2, name: 'Pera' },
    { id: 3, name: 'Plátano' }
  ];

  // Actualización del array (como ejemplo)
  updateProduct() {
    this.products[0].name = 'Fresa';
  }

  // Función trackBy
  trackByProductId(index: number, product: any): number {
    return product.id;
  }
}
```

En la plantilla HTML indicamos la función trackBy: trackByProductId

```html
<h2>Frutas</h2>
<ul>
  <li *ngFor="let fruit of fruits; trackBy: trackByFruitId">
    {{ fruit.name }}
  </li>
</ul>

<button (click)="updateFruit()">Actualizar primera fruta</button>
```

Explicación:

trackByProductId: La función trackByProductId toma dos parámetros (index y product) y devuelve el id único de cada producto. De este modo, Angular podrá identificar cada elemento por su id, no por su posición en el array.

Esto significa que cuando actualices un producto (por ejemplo, cambiar el nombre de "Manzana" a "Fresa"), Angular solo actualizará ese producto específico en el DOM, sin tener que renderizar todo el array de nuevo.

3. **¿Es posible ejecutar dos directivas estructurales simultáneamente? Explica la razón tanto si es si posible como si no lo es.**

No, no se pueden usar dos directivas estructurales en el mismo elemento, como *ngIf y *ngFor. Esto se debe a que ambas intentan modificar la estructura del DOM y Angular no sabe cuál aplicar primero.
Para solucionarlo, se pueden usar una dentro de otra separándolas en contenedores.
