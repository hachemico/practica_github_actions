
sdadadadvasv




Example of nextjs project using Cypress.io

<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->


avsdvasdvadadvad
asdadada


# PRACTICA GITHUB ACTIONS 
## ¿Que son las Github Actions ?!  ///CAPTURA LOGO GITHUB ACTIONS!


GitHub Actions es una herramienta que permite reducir la cadena de acciones necesaria para la ejecución de código, mediante la creación de un de flujo de trabajo encargado del Pipeline. Siendo configurable para que GitHub reaccione a ciertos eventos de forma automática según nuestras preferencias.

Por lo tanto, GitHub Actions permite crear workflows que se puedan utilizar para compilar, testear y desplegar código. Además, da la posibilidad de crear flujos de integración y despliegue continuo dentro de nuestro repositorio.

Actions utiliza paquetes de códigos en los contenedores de Docker, los cuales se ejecutan en los servidores de GitHub y que, a su vez, son compatibles con cualquier lenguaje de programación. Esto hace que puedan funcionar con servidores locales y nubes públicas.

```
https://www.plainconcepts.com/es/que-es-github-actions/#:~:text=GitHub%20Actions%20es%20una%20herramienta,de%20trabajo%20encargado%20del%20Pipeline.&text=Por%20lo%20tanto%2C%20GitHub%20Actions,compilar%2C%20testear%20y%20desplegar%20c%C3%B3digo.
```


### Objetivo

Partiendo del proyecto aportado, creado con el framework [NEXT.JS](https://github.com/dawEstacio/nextjs-blog-practica), creamos un Repositorio GitHub y añadimos un archivo workflow con las especificaciones indicadas.


### Contenido

- [VARIABLES](#itemvar)

- [PIPELINE](#itemPipeline)

- [TRIGGER](#item1)
 
- [LINTER](#item2)
 
- [TESTS CYPRESS](#item3)
  - Introduccion Cypress
  - Contenido.

- [ACTUALIZAR README](#item4)
 
- [SUBIR CAMBIOS AL REPOSITORIO "PUSH"](#item5)
 
- [DEPLOY CON VERCEL](#item6)
  - Introducion Vercel.
  - Contenido.
- [NOTIFICACIONES](#item7)
  - Introduccion NodeMailer
  - Contenido.
 - [DASHBOARD VIEW](#item8)
<hr>
<a name="itemvar"></a>

## VARIABLES (environment / parameters)

#### ENVIRONTMENT

Las variables de environment son aquella que vamos a utilizar dentro de la pipeline, son aquellas sobre las que guardaremos valores.
En este caso son las que contendran el resultado de cada uno de los Stages.

![Captura de pantalla de 2022-02-10 12-03-30](https://user-images.githubusercontent.com/62303274/153394206-20757ba4-135e-4d5d-9da8-3801e7aa9559.png)

#### PARAMETERS

Son los parametros de entrada de nuestra Pipeline, cuando ejecutemos la pipeline, nos aparece una ventanda modal donde introduciremos los valors que
queremos aplicar, aunque hemos definido unos valores por defecto.

![Captura de pantalla de 2022-02-10 12-09-19](https://user-images.githubusercontent.com/62303274/153395111-7c2986cb-a028-4cb9-aced-7da36a55e1c7.png)

 Tanto los parametros como las variables de entorno se definen antes de los Stages que hacen uso de ellas.

<br>

<a name="itemPipeline"></a>
## PIPELINE
Para realizar la pipeline:
 - Nueva Tarea / 
 - Introduciomos el nombre de la Tarea
 - Seleccionamos Pipeline

![Captura de pantalla de 2022-02-10 12-21-45](https://user-images.githubusercontent.com/62303274/153397132-8350180f-f431-4158-84ef-bcda91fd295d.png)

<br>

Lo primero que nos encontramos es que la ejecución debe parametrizarse. Podemos realizarlo manualmente o como ya hemos definido los parametros en la Pipeline
cuando ejecutemos por primera vez la tarea, se llenaran automáticamente.

<br>

![Captura de pantalla de 2022-02-10 12-24-10](https://user-images.githubusercontent.com/62303274/153398942-2335dae2-5b5f-437b-ba0c-0b33ee06a624.png)

El siguiente apartado que nos encontramos es la de Build Triggers. En este caso definiremos un triguer como veremos en los primeros capitulos del proyecto.
Al igual que en el paso anterior en el Pipeline, definiremos el trigger. Podemos definirlo también en la tarea o se creara cuando ejecutemos la tarea por primera vez.

<br>

![Captura de pantalla de 2022-02-10 12-29-15](https://user-images.githubusercontent.com/62303274/153400105-afbb234f-f1ca-4897-aaea-acede3c93491.png)

<br>

PIPELINE

Selecionamos Pipeline script from SMC ya que vamos a trabajar desde GitHub
- SMC => Git
- Repository Url => La url del repositorio Github.
- Credentials => Para que la tarea realize el pipeline desde el repositorio de github. Necesita de credenciales, que tenemos que definir.
- Branch Specifier => la rama del repositorio sobre la que trabajaremos.
- Script Path => el path donde se encuentra el jenkinsfile. El nombre tiene que coincidir con el del repositorio.

- Aplly + Guardar

<br>

![Captura de pantalla de 2022-02-10 12-32-11](https://user-images.githubusercontent.com/62303274/153400636-2cf43850-318e-493c-bd03-b3fca43c2e5f.png)
![Captura de pantalla de 2022-02-10 12-32-36](https://user-images.githubusercontent.com/62303274/153400699-385fe8b4-a49d-4810-98bf-553e600c2853.png)

<br>

<a name="item1"></a>