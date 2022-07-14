## APP Colegio

        - Crear un servicio para la gestion de los datos. Se le llaman alumnos
        
        ```````
              ng g s services/alumnos --skip-tests

        ```````

        - Crear interface de datos para el alumno. Se le llamen en singular alumno

        ```````
              ng g i interfaces/alumno --type=interface

        ```````
      - ¿Cuantos componentes necesito?
          - form
          - listaAlumnos
          - alumno
          - filtros

      - SPA, tenemos que distribuirlos dentro de nuestro interfaz
      - Instalar bootstrap 
        ```````
            npm install bootstrap
 
        ```````
        
        y tenemos que modificar el fichero angular.json, recordar que su   modificación implica parar y arrancar.

           "node_modules/bootstrap/dist/css/bootstrap.min.css"
           "node_modules/bootstrap/dist/js/bootstrap.min.js"
