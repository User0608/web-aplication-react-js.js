Este es un proyecto desarrollado en base a un curso de react.js. 

## Resumen general

Elaboración de una plataforma educativa. La cual deberá brindar a los alumnos o usuarios la posibilidad de registrarse e iniciar sesión. Cada curso está conformado por varias clases y cada clase esta confirmado pro diversos videos. ademas cada cuso puede pertenecer a ciertas especialidades. en donde cada especialidad esta conformada por un conjunto de cursos. 


### Lista de características mínimas de la aplicación

* Autenticación 
* Home
* Especialidades
* Cursos
* Clases
* Profesores

### Dependencias
* Node Sass
* EDgrid y la Guía de estilo
* redux, react-redux,redux-thunk y redux-devtools-extencion
* Axios
* react-router-dom
  * react-router

### Rutas de la aplicación
- Home (/)  (opcional, podría ser pública)
- Especialidades (/especialidades)
- Cada Especialidad (/especialidades/:id)
- Cursos (/cursos)
- Cada curso (/cursos/:id)
- Cada clase (/clase/:id)
- Profesores (/profesores)
- Terminos y condiciones (/terminos)


Para el funcionamiento de la api, es necesario clonar el repositorio json-db y usar el proyecto de json-server (https://github.com/typicode/json-server) en el puerto 3001, para los datos de login solo es necesario registrarse. el api de usuarios es de terceros.
