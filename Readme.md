#Vue TDD

This is a quick and dirty Vue components test project using mocha, based on the article by **Stefan Ledin** [Testing Vue Components with Mocha and Webpack](https://itnext.io/testing-vue-components-with-mocha-and-webpack-594a9f7e28b9).

There's just one fix in the file *./test/setup.js* -line 3- to fix a bug in the *prettier* version loaded by *vue-loader*, based
on **Darin Webb** comment in [this thread](https://github.com/vuejs/vue-cli/issues/2128#issuecomment-458258717). Also
the *package.js* includes the *@next* version of the *mocha-webpack* package that fixes a compatibility issue with *webpack*
version 4.

## Tasks

> **dev** _ Init the dev server at port 8080 with dynamic reload

> **build** _ Compiles the app

> **test** _ Executes the Vue component unit tests

> **watch** _ Starts *webpack* in *watch* mode so it recompiles everytime it detects changes in *app.js*

___________________________________________________________________________________________________________________________________________________________________________________

# Vue TDD

Este proyecto es una prueba de proyecto Vue básico con testing de componentes usando
mocha, basado en el artículo de **Stefan Ledin** [Testing Vue Components with Mocha and Webpack](https://itnext.io/testing-vue-components-with-mocha-and-webpack-594a9f7e28b9).

Hay una corrección hecha en el *./test/setup.js* -es la linea 3- que resuelve un bug de la
versión de *prettier* que carga *vue-loader*, basado en el comentario de **Darin Webb** en
[este hilo de Github](https://github.com/vuejs/vue-cli/issues/2128#issuecomment-458258717). Además
el *package.js* incluye la versión *@next* de *mocha-webpack*, que resuelve issues de compatibilidad
con la versión 4 de *webpack*.

## Tareas

> **dev** _ Inicia el servidor de desarrollo en el  puerto 8080 con recarga dinámica.

> **build** _ Compila la aplicación.

> **test** _ Ejecuta los tests unitarios de los componentes Vue.

> **watch** _ Arranca *webpack* en modo *watch* para que recompile cada vez que hay cambios en *app.js*.
