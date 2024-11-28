1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular
utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga
Angular CLI puedes contestar utilizando las opciones por defecto).
Con Angular Cli crea el proyecto angular ecommerce y explica brevemente la
estructura y ficheros que ha generado Angular CLI:
• Ficheros de configuración en la raíz del proyecto:
o tsconfing.app.json
o angular.json
o package.json
o .editorconfig,
o .gitignore
o ...
• Directorio node_modules
• Directorio src:
o index.html
o main.ts
o styles.css
o Directorio assets
o Directorio app
 Ficheros app.component.*
 Fichero app.module.ts
2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por
Angular CLI, detallando cada una de las propiedades que se definen en:
• app.module.ts - @NgModule (declarations, imports,
providers, bootstrap).
• app.component.ts - @Component (selector, templateUrl,
styleUrls).
3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un
componente sin necesidad de especificarlos en templateUrl, styleUrls?
¿Es recomendable hacer esto?
Durante el desarrollo del ejercicio ejecuta los comandos git necesarios para añadir esta
nueva carpeta, ficheros y los cambios que realices en ellos al repositorio local git de la
PEC