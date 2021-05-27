# Webpack 5 boilerplate

Pasos para trabajar con este boilerplate.

- Requisitos

  - Node
  - Npm

- Caracteristicas soportadas

  - SASS
  - ES6+
  - TypeScript

## Clonar el repo

```sh
> git clone https://github.com/cags84/webpack-boilerplate nombre_de_su_proyecto
```

Ingresan a la carpeta del proyecto

```sh
> cd nombre_de_su_proyecto
```

Instalan las dependencias con el siguiente comando.

```sh
> npm install
```

## Modo debug

Puedes comenzar a trabajar con tu proyecto.

```sh
- src
  -- assets
    -- js
    -- css
    -- images
    -- fonts
  index.html
  favicon.ico
```

Este proyecto viene con un server para desarrollo y que puedas ver los cambipos en tiempo real, lo puedes tener ejecutando el siguiente comando, dentro de la carpeta raíz del proyecto.

```sh
> npm run dev
```

Esto abrira el navegador predeterminado en el puerto 8080.

## Modo producción

Para hacer un build de tu aplicación para subirla a producción solo hace falta ejecutar.

```sh
> npm run build
```

Lo cual creara una carpeta ./dist con todos los archivos optimizados listo para producción.

:) exitos.

### Creditos

Para realizar este proyecto me apoye en la siguiente documentarción.

(Curso de Webpack - jonmircha)[https://www.youtube.com/watch?v=-bp3q-YTr4Q&t=7759s]
(React.js | Configuración con Webpack 5 y Babel 7 - 2021 Tutorial)[https://www.youtube.com/watch?v=97Ajv8-NRVY&t=704s]
(WebPack docs)[https://webpack.js.org/concepts/]
