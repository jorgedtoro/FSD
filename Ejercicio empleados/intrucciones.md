### CRM EMPLEADOS

1 - Crear un interface para empleado y para departamento ✅🆗 - Empleado ✅🆗
id:number
name: string
surname: string
dni: string
email: string
photo: string;
department: string
status: boolean

              - Deparmento: ✅🆗
                    id: number
                    title: string;
                    numEmployees:number

    2 - Crear dos servicios, uno para empleados y otro para departamentos ✅🆗 y vamos a crear un array datos para departamentos y para empleado
            Departamentos: Marketing, Direccion, Cuentas y Desarrollo
            Empleado: dos empleados uno Marketing y otro den Desarrollo los dos activos.


    3 - ¿ Que rutas necesito ?

          1 - /home🆗
          2 - /employees🆗
          3 - /new-employee
          4 - /employee/:idemployee

    4 - ¿ Cuantos componentes necesito ?

         1 - Home🆗
         2 - EmployeesList🆗
         3 - Form🆗
         4 - EmployeeView🆗
         5 - Header🆗
         6 - Footer🆗
         7 - EmployeeCard🆗

    5 - Crear una maquetación responsive con bootstrap, colocar los componentes trasversales. Y hacer funcionar la navegacion del menu.

    6 - En el componente EmployeeList hacer una peticion al servicio y traerse los empleados.

    7 - pintar los empleados , colocando un borde de color verde y un boton de color verde con el texto activo a cada empleado que este activo y border rojo, boton rojo texto inactivo a los que no esten activos.

    8 - Pintar el empleado en la vista de Empleado, recoger el parametro activo de la ruta es decir el id y hacer un consulta al servicios con ese id para obtener el empleado.
