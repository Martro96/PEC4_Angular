1. (0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto).

Con Angular Cli crea el proyecto angular ecommerce y explica brevemente la estructura y ficheros que ha generado Angular CLI:
• Ficheros de configuración en la raíz del proyecto:
    - tsconfig.json: Configuración más general de Typescript.
    - tsconfing.app.json: Configuración específica del proyecto de Angular. Es útil cuando hay múltiples subproyectos de Angular y cada uno tiene su propia configuración. Siempre extenderá la configuración de tsconfig.json
    - tsconfig.spec.json: Configuración específica de TypeScript para las pruebas unitarias de Angular. Normalmente hereda las configuraciones generales del tsconfig.json.

    - angular.json: Archivo en el que se guarda la configuración del proyecto Angular como por ejemplo la configuración del sourceRoot o los prefijos de los componentes que se generen. También encontramos la configuración de los entornos de la app.

    - package.json: Contiene el nombre, la versión y las dependencias de un proyecto (librerías de terceros que se necesitan para producción o para desarrollo). La ubicación de este archivo siempre será la raíz del proyecto. También encontramos la propiedad scripts, que recoge los comandos disponibles. 

    - package-lock.json: Archivo que se genera automáticamente al instalar los paquetes o dependencias del proyecto (npm i). Su función es tener un historial de paquetes instalados. 

    - .editorconfig: Configuración del IDE, por ejemplo el Visual Studio Code. Personaliza las opciones del formato y ayuda a mantener una coherencia en el proyecto equipo.

    - .gitignore: Define qué archivos o carpetas Git no va a tener en cuenta.  
    

• Directorio node_modules: Carpeta que se crea automáticamente para gestionar las dependencias necesarias.

• Directorio src:
    - index.html: Archivo html base donde Angular inserta y renderiza toda la aplicación. En body encontraremos la etiqueta <app-root></app-root> que es el selector del componente raíz (AppComponent).
 
    - main.ts: 
    - styles.css

o Directorio assets
o Directorio app
 Ficheros app.component.*
 Fichero app.module.ts

2. (0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:
• app.module.ts - @NgModule (declarations, imports,
providers, bootstrap).
• app.component.ts - @Component (selector, templateUrl,
styleUrls).
3. (0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un
componente sin necesidad de especificarlos en templateUrl, styleUrls?
¿Es recomendable hacer esto?
Durante el desarrollo del ejercicio ejecuta los comandos git necesarios para añadir esta nueva carpeta, ficheros y los cambios que realices en ellos al repositorio local git de la
PEC