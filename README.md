# ZARA WEB CHALLENGE

## Netlify

[marvel-heroes](https://stellular-alpaca-1cc7a1.netlify.app/)

## Instalación

Para poder lanzar el proyecto es necesario tener las siguientes cosas:

- [Node.js](https://nodejs.org/en): Una version de node superior o igual a la 18.

Para ello podemos descargarla en el siguiente [link](https://nodejs.org/en) o utilizar `nvm` (node version manager) e instalar la versión correspondiente.

## Instalación

Para poder lanzar la aplicación primero deberemos ir a la raíz del proyecto y ejecutar el siguiente comando `npm install`, `yarn`, `pnpm`. (Todo depende del package manager que estemos utilizando).

## Scripts

Dentro del package.json se han creado los siguientes scripts que se pueden lanzar desde la consola:

- `npm run dev`: El cual lanzara la aplicación.
- `npm run build`: El cual creara la carpeta dist con el proyecto compilado y listo para subir a producción.
- `npm run lint`: El cual comprobará si se cumplen las reglas de eslint.
- `npm run test`: El cual ejecutará todos los ficheros _.test.ts y _.test.tsx y realizara las pruebas unitarias creadas dentro de cada fichero.
- `npm run coverage`: El cual ejecutará todos los ficheros _.test.ts y _.test.tsx y nos mostrará en una tabla el porcentage de líneas cubiertas en nuestro código.
- `npm run cy:open`: El cual ejecutará cypress y los ficheros con las pruebas que hemos creado.

## Uso de Context

Como el proyecto es pequeño he decidido usar `Context` de react y evitar instalar librerías que pueden hacer la aplicación más pesada como `redux`, `redux toolkit`, etc...

## Uso de principios SOLID

1. Single responsability principle

   - Los componentes creados se han creado en el que tienen una sola responsabilidad.
   - Creación de hooks para las llamadas y cumplir con SRP y que la la legibilidad de los componentes sean más fáciles.

2. Open-closed principle (OCP)

   - Creación de componentes extensibles.

3. Liskov substitution principle (LSP)

   - Este no lo he usado ya que no he usado interfaces ni componentes extensibles.

4. Interface Segregation Principle (ISP)

   - Los componentes solo reciben las props necesarias y no se le pasan el objeto completo.

5. Dependency inversion principle (DIP)

   - Al utilizar arquitectura hexagonal, creamos un custom hook que llama a un servicio que no sabe si está utilizando fetch, axios, etc. Es decir, tenemos una abstracción.

## Arquitectura Hexagonal

Dentro de la carpeta modules tenemos dos carpetas: Hero, Comic y un fichero http donde tenemos las posibles llamadas mediante fetch.

Cada carpeta contiene:

- su DTO (interfaz)
- su Repository
- su service
- su response (interfaz)

## Uso de Linters y Formatters.

Se ha utilizado oxlint, es una librería que contiene prettier y es compatible con la configuración de eslint.

## Uso de Mixins

Se han utilizado mixins para facilitar y mejorar la legibilidad de los ficheros sass y sus breakpoints.

## Vitest

Para realizar las pruebas unitarias se ha utilizado [vitest](https://vitest.dev/).

## Cypress

Para realizar las pruebas E2E se ha utilizado [cypress](https://www.cypress.io/).

## Mejoras

Guardar la información en localstorage para que cuando refresquemos la página no se pierda la información.

## Opcional:

● Uso de SSR (Es posible usar Next.js).
