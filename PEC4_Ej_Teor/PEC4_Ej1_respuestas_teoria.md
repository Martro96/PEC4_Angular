## Ejercicio 1:
Explica qué realiza cada una de las siguientes opciones de Angular CLI.

- **ng new**:
Es el comando para empezar un proyecto Angular desde cero. Te genera toda la estructura básica del proyecto, instala las dependencias y te pregunta cosas como si quieres usar rutas o qué tipo de CSS prefieres. Básicamente, es el punto de partida.

- **ng generate**:
Este comando te ayuda a crear partes específicas de tu proyecto sin hacerlo a mano.
    - **component**:
    Crea un componente nuevo. Te genera los archivos necesarios (HTML, CSS, TypeScript y de pruebas) para que tengas una sección funcional en tu aplicación, como una página o un widget.
    - **directive**:
    Sirve para generar directivas. Estas son pequeñas funciones que le agregan o cambian comportamiento a elementos del HTML, como ocultar algo o repetir cosas.
    - **enum**:
    Te crea un enumerado, una lista de valores constantes, como "lunes, martes, miércoles", que puedes usar para mantener tu código más organizado
    - **guard**:
    Decide si alguien puede entrar o no a una página dependiendo de reglas que tú pongas (como si están logueados).
    - **interface**:
    Te genera una interfaz de TypeScript. Es como un contrato para asegurarte de que ciertos objetos tienen las propiedades que deberían tener.
    - **pipe**:
    Crea un "filtro" que transforma datos antes de mostrarlos en pantalla. Por ejemplo, si quieres cambiar un texto a mayúsculas o formatear una fecha.    
    - **service**:
    Te hace un servicio, que es donde normalmente pones la lógica que quieres usar en varios lugares, como conectarte a una API o gestionar datos.
- **ng serve**:
Este comando lanza tu aplicación en un servidor local para que la veas en el navegador. Además, si haces cambios en el código, la página se actualiza sola. Súper práctico para trabajar en tiempo real.
- **ng test**:
Ejecuta las pruebas unitarias que hayas configurado en tu proyecto. Es útil para asegurarte de que todo funcione bien y no se rompa nada con los cambios.
- **ng version**:
Muestra la versión de Angular CLI que tienes instalada, junto con las versiones de las herramientas principales que usas en tu proyecto, como Angular Core, TypeScript y RxJS. Ideal para saber si tienes todo actualizado.