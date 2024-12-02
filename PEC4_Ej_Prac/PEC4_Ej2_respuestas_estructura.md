1. **(0.75 puntos) ¿Qué comando debes utilizar para crear un nuevo proyecto Angular utilizando Angular CLI denominado ecommerce? (A las preguntas que te haga Angular CLI puedes contestar utilizando las opciones por defecto).**

Con Angular Cli crea el proyecto angular ecommerce y explica brevemente la estructura y ficheros que ha generado Angular CLI:

- Ficheros de configuración en la raíz del proyecto:
    - tsconfig.json: Configuración más general de Typescript.
    - tsconfing.app.json: Configuración específica del proyecto de Angular. Es útil cuando hay múltiples subproyectos de Angular y cada uno tiene su propia configuración. Siempre extenderá la configuración de tsconfig.json
    - tsconfig.spec.json: Configuración específica de TypeScript para las pruebas unitarias de Angular. Normalmente hereda las configuraciones generales del tsconfig.json.

    - angular.json: Archivo en el que se guarda la configuración del proyecto Angular como por ejemplo la configuración del sourceRoot o los prefijos de los componentes que se generen. También encontramos la configuración de los entornos de la app.

    - package.json: Contiene el nombre, la versión y las dependencias de un proyecto (librerías de terceros que se necesitan para producción o para desarrollo). La ubicación de este archivo siempre será la raíz del proyecto. También encontramos la propiedad scripts, que recoge los comandos disponibles. 

    - package-lock.json: Archivo que se genera automáticamente al instalar los paquetes o dependencias del proyecto (npm i). Su función es tener un historial de paquetes instalados. 

    - .editorconfig: Configuración del IDE, por ejemplo el Visual Studio Code. Personaliza las opciones del formato y ayuda a mantener una coherencia en el proyecto equipo.

    - .gitignore: Define qué archivos o carpetas Git no va a tener en cuenta.  
    

- Directorio node_modules: Carpeta que se crea automáticamente para gestionar las dependencias necesarias. No se suben a Git porque pesan mucho.

- Directorio src:
    - index.html: Archivo html base donde Angular inserta y renderiza toda la aplicación. En body encontraremos la etiqueta <app-root></app-root> que es el selector del componente raíz (AppComponent). Angular utiliza este archivo para cargar y renderizar la aplicación.

    - main.ts: Es el archivo principal de arranque de la aplicación. Arranca el módulo raíz (AppModule) y lo enlaza con el navegador.
    - styles.css: Contiene estilos globales para toda la aplicación. Puedes definir aquí estilos comunes que se aplicarán a todos los componentes.

- Directorio assets: Directorio para recursos estáticos como imágenes, fuentes, u otros archivos que no cambian. Todo estará accesible directamente desde la URL pública del proyecto.
- Directorio app: Contiene la lógica principal de la aplicación Angular
    - Ficheros app.component.ts: Archivo TypeScript del componente raíz. Contiene la lógica y las propiedades principales.
    - Fichero app.module.ts: Módulo raíz de la aplicación. Declara los componentes, servicios y otros módulos que la aplicación necesita para funcionar.
    - app.component.spec.ts: Archivo de pruebas unitarias para el componente raíz (AppComponent).
    - app.component.html: Plantilla HTML del componente raíz. Define el diseño visual de la aplicación al inicio. 
    - app.component.css o .scss: Archivo de estilos específico para el componente raíz.

2. **(0.25 puntos) Explica cada uno de los siguientes decoradores generados por Angular CLI, detallando cada una de las propiedades que se definen en:**

En primer lugar, definimos un decorador como una función que añade información extra o metadatos a una clase, método o propiedad para que Angular sepa cómo debe tratarla.

- app.module.ts @NgModule: Marca una clase como un módulo y organiza los componentes, servicios y dependencias de la aplicación. Las propiedades clave son:
    - declarations: Lista los componentes, directivas y pipes que pertenecen al módulo.
    - imports: Importa otros módulos necesarios para este módulo.
    - providers: Define los servicios disponibles para la aplicación.
    - bootstrap: Especifica el componente raíz que Angular debe cargar al iniciar la aplicación.
- app.component.ts @Component: Indica que una clase es un componente y define las configuraciones clave:
    - selector: El nombre de la etiqueta HTML usada para insertar el componente.
    - templateUrl: Ruta al archivo HTML que define la plantilla del componente.
    - styleUrls: Ruta a los archivos CSS que definen los estilos específicos del componente.


3. **(0.25 puntos) ¿Es posible poder inyectar el template y los estilos en línea de un componente sin necesidad de especificarlos en templateUrl, styleUrls? ¿Es recomendable hacer esto?**

Sí, es posible inyectar tanto el template como los estilos de un componente directamente en línea, sin necesidad de especificarlos en templateUrl y styleUrls. Angular permite hacerlo usando las propiedades template y styles dentro del decorador @Component. 

Sin embargo, aunque esta práctica se pueda aplicar ocasionalmente, no es recomendable en proyectos grandes o componentes más complejos ya que reduce la legibilidad del código, especialmente cuando crece en tamaño o funcionalidad.

Además, dificulta el mantenimiento, ya que tener código HTML, CSS y TypeScript mezclados en un mismo archivo puede ser confuso. Por otro lado, también puede limitar el uso de herramientas como preprocesadores de CSS (por ejemplo, SASS o LESS), lo que reduce las opciones de personalización avanzada. 

En definitiva, se recomienda mantener los estilos separados en archivos individuales (templateUrl y styleUrls) para garantizar un código más limpio, organizado y escalable.

