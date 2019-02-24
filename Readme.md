# Vue TDD

Este proyecto es una prueba de proyecto Vue básico con testing de componentes usando
mocha, basado en el artículo de **Stefan Ledin** [Testing Vue Components with Mocha and Webpack](https://itnext.io/testing-vue-components-with-mocha-and-webpack-594a9f7e28b9).

Hay una corrección hecha en el *./test/setup.js* -es la linea 3- que resuelve un bug de la
versión de *prettier* que carga *vue-loader*, basado en el comentario de **Darin Webb** en
[este hilo de Github](https://github.com/vuejs/vue-cli/issues/2128#issuecomment-458258717) . Además
el *package.js* incluye la versión *@next* de *mocha-webpack*, que resuelve issues de compatibilidad
con la versión 4 de *webpack*.

## Tareas

> **dev** _ Inicia el servidor de desarrollo en el  puerto 8080 con recarga dinámica.

> **build** _ Compila la aplicación.

> **test** _ Ejecuta los tests unitarios de los componentes Vue.

> **watch** _ Arranca *webpack* en modo *watch* para que recompile cada vez que hay cambios en *app.js*.