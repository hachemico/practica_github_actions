# PRACTICA GITHUB ACTIONS 

![Captura de pantalla de 2022-02-18 20-13-34](https://user-images.githubusercontent.com/62303274/154800581-03c5dee2-4122-4649-a768-e6df7f3b3ef3.png)

## ¿Que son las Github Actions ?! 



GitHub Actions es una herramienta que permite reducir la cadena de acciones necesaria para la ejecución de código, mediante la creación de un de flujo de trabajo encargado del Pipeline. Siendo configurable para que GitHub reaccione a ciertos eventos de forma automática según nuestras preferencias.

Por lo tanto, GitHub Actions permite crear workflows que se puedan utilizar para compilar, testear y desplegar código. Además, da la posibilidad de crear flujos de integración y despliegue continuo dentro de nuestro repositorio.

Actions utiliza paquetes de códigos en los contenedores de Docker, los cuales se ejecutan en los servidores de GitHub y que, a su vez, son compatibles con cualquier lenguaje de programación. Esto hace que puedan funcionar con servidores locales y nubes públicas.

```
https://www.plainconcepts.com/es/que-es-github-actions/#:~:text=GitHub%20Actions%20es%20una%20herramienta,de%20trabajo%20encargado%20del%20Pipeline.&text=Por%20lo%20tanto%2C%20GitHub%20Actions,compilar%2C%20testear%20y%20desplegar%20c%C3%B3digo.
```


### Objetivo

Partiendo del proyecto aportado, creado con el framework [NEXT.JS](https://github.com/dawEstacio/nextjs-blog-practica), creamos un Repositorio GitHub y añadimos un archivo workflow con las especificaciones indicadas.


### Contenido

- [ESTRUCTURA DIRECTORIOS / ARCHIVOS](#item1)

- [LINTER JOB](#item2)

- [CYPRESS JOB](#item3)

- [BADGE JOB](#item4)
 
- [DEPLOY VERCEL JOB](#item5)
 
- [NOTIFICATIONS JOB](#item6)
 
<hr>
<a name="item1"></a>

## ESTRUCTURA

El desarrollo de la practica y de los archivos tiene una architectura que podemos seguir, para que los archivos sean fácilmente accesibles. <br>
Lo primero sobre la raiz del proyecto creamos un directorio llamado =>
.github/worflows, en el que se ubicara el "workflow.yml o workflow.yaml".<br>
Junto con workflows, hay otro directorio donde se ubican las actions.<br>
A su vez, cada "Action" tendra un directorio "dist" donde ubicaremos aquello que realizara la "Action", y el archivo action.yml.<br>



#### CONCEPTO ESTRUCTURA

![Captura de pantalla de 2022-02-18 20-48-11](https://user-images.githubusercontent.com/62303274/154800615-5bf33ac3-7d96-43ab-937a-4d74f40c1730.png)

<br>

#### WORKFLOW

El workflow es un archivo tipo .yml, en el que se definen una serie de jobs, que realizaran las especificaciones.

<hr>

<a name="item2"></a>

## LINTER JOB

#### CÓDIGO

// CAPTURA CODIG LINTER

<br>

#### DESCRIPCIÓN
- runs-on => indica la version sobre la que trabajará.
- steps =>
    - name => indica el nombre del step.
    - uses => indica la action predefinida sobre la que trabajamos.
    - run => ejecuta lineas de codigo. 

            => npm install instala node_modules.
            => npm run lint ejecuta el linter definido en el proyecto.

#### EJECUCION

 - Añadimos al repositorio 

            => git add . 
            => git commit -m " comentario_commit"
            => sudo git push origin main
<br>

Desde el repositorio de GitHub, vamos a la pestaña "Actions" donde aparece la ejecución del workflow.

// CAPTURA  PANTALLA 

<br>
Como vemos al aplicar el linter, nos detecta que hay errores. Repasamos el codigo hasta que la ejecución cumple con el Linter.


<br>

//CAPTURA RESULTADOS

<br>

<hr>

<a name="item3"></a>

## CYPRESS JOB

#### CÓDIGO

// CAPTURA CODIG CYPRESS JOB

<br>

#### DESCRIPCIÓN

- runs-on => indica la version sobre la que trabajará.
- steps =>

        - name => indica el nombre del step.
        - uses => indica la action predefinida sobre la que trabajamos.
            => actions/upload-artifact@v2 => guarda el valor indicado con name y path en un artefato que emplearemos después.
        - id   => indica la id del step.
        - continue-on-error => con valor true, le permite al job continuar aunque uno de los steps falle.
        - env => Nos permite utilizar variables de entorno "secrets"
        - run => ejecuta lineas de codigo. 
            => npm run build ejecuta el build del proyecto.
            => npm start instala nodemodules y las dependencias del proyecto.
            => echo ${{ steps.cypress.outcome }} > result.txt guarda el valor de la salida del step en un archivo.txt

<br>

#### EJECUCION

 - Creamos un token en Github. Config/DeveloperSettings/Personals Token.
 - Añadimos el token como variable de entorno. Setting/Secrets/Actions
 - Añadimos al repositorio  
                
        => git add . 
        => git commit -m " comentario_commit"
        => sudo git push origin main 

<br>

Desde el repositorio de GitHub, vamos a la pestaña "Actions" donde aparece la ejecución del workflow.

<br>

//CAPTURA RESULTADOS

<br>
Como vemos al realizar los tests de cypres, nos detecta que hay errores. Repasamos el codigo, hasta encontrar el fallo.

<br>

// CAPTURA  PANTALLA 

<br>

<hr>

<a name="item4"></a>

## BADGE JOB

#### CÓDIGO

![Captura de pantalla de 2022-02-18 18-10-40](https://user-images.githubusercontent.com/62303274/154801051-0bf4b887-6a29-43e3-9eea-7ca89b9df283.png)


<br>

#### DESCRIPCIÓN
- runs-on => indica la version sobre la que trabajará.
- steps => 
    - name => indica el nombre del step.
    - uses => indica la action predefinida sobre la que trabajamos.

            - => actions/checkout@v2 descarga el codigo
            - => actions/download-artifact@v2 descarga el artifac creado anteriormente.
            - => ./.github/actions/update_readme/ indica la ruta a los archivos.
            - => actions/download-artifact@v2 => guarda el valor indicado con name y path en un artefato que emplearemos después.
    - id   => indica la id del step.
    - needs => define que no se ejecutará este este job, hasta que no termine el indicado.
    - run => ejecuta lineas de codigo. 
    

            => (echo ::set-output name = cypressOut:: $(cat result.txt)) --> asigna a la el valor de leer el contenido de result.tx 
            
            => npm install @actions/core, como no carga la dependencia y la necesitamos en la ejecución del action, la instalamos. 
            
            => echo ${{ steps.cypress.outcome }} > result.txt guarda el valor de la salida del step en un archivo.txt<br>
<br>

#### EJECUCION

 - Añadimos el codigo al workflow como hemos visto.
 - Añadimos el archivo de la action.yml
 
 <br>

![Captura de pantalla de 2022-02-18 18-31-43](https://user-images.githubusercontent.com/62303274/154801027-145fac44-7fb4-4701-988c-31c13c585e0e.png)

 
 <br>

 - Añadimos la ejecución del action, /dist/"index.js"

 <br>
 
![Captura de pantalla de 2022-02-18 18-33-44](https://user-images.githubusercontent.com/62303274/154800992-f7e4464d-c250-4017-b918-46178eb81a6c.png)

<br>

 - Añadimos al repositorio  
 
        => git add . 
        => git commit -m " comentario_commit"
        => sudo git push origin main 

Desde el repositorio de GitHub, vamos a la pestaña "Actions" donde aparece la ejecución del workflow.

<br>

![Captura de pantalla de 2022-02-18 18-29-34](https://user-images.githubusercontent.com/62303274/154800970-33d9d6a2-8a2f-45fa-9bff-c219d655c09a.png)

<br>

Podemos ver el resultado de la Actualización del badge...

<br>


<!---Start place for the badge -->
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)

<!---End place for the badge -->

<br>

<br>


<a name="item5"></a>

## DEPLOY VERCEL JOB

#### CÓDIGO

![Captura de pantalla de 2022-02-19 13-33-32](https://user-images.githubusercontent.com/62303274/154800932-a0fc7081-75a7-4736-85a3-ae0dbe892620.png)

<br>

#### DESCRIPCIÓN
- runs-on => indica la version sobre la que trabajará.
- steps =>
    - name => indica el nombre del step.
    - uses => indica la action predefinida sobre la que trabajamos.

            - => actions/checkout@v2 descarga el codigo
            - => amondnet/vercel-action@v20 descarga el codigo para deploy en vercel.
    - with => complementos de ejecución en este caso, son secrets:
            
<br>

#### EJECUCION

 - Importamos el proyecto de Github a Vercel.
 - Creamos un token en Vercel. Settings/Tokens/Create
 - Consultamos ID usuario = org-id => UserProfile/Settings/General -> Bajo del todo.
 - Consultamos ID proyecto = project-id => Project/Settings/General -> Bajo del todo.
 - Añadimos el token y las ids como variable de entorno. Setting/Secrets/Actions

 <br>

![Captura de pantalla de 2022-02-19 12-33-03](https://user-images.githubusercontent.com/62303274/154800897-01492a44-d3da-4284-93a6-5bd59de17dc5.png)


 <br>
 - Añadimos al repositorio 
 
    => git add . 
    => git commit -m " comentario_commit"
    => sudo git push origin main 

Desde el repositorio de GitHub, vamos a la pestaña "Actions" donde aparece la ejecución del workflow.

<br>

![Captura de pantalla de 2022-02-19 13-31-47](https://user-images.githubusercontent.com/62303274/154800881-921b40e9-9d72-4295-831f-9abfdcea4bfb.png)

<br>

#### LINK VERCEL

https://practica-github-actions-ten.vercel.app/

<hr>

<a name="item6"></a>

## NOTIFICATION JOB

#### CÓDIGO

![Captura de pantalla de 2022-02-19 13-27-38](https://user-images.githubusercontent.com/62303274/154800741-9a5d7f6d-35b6-4091-b898-9dcbf2494d33.png)

<br>

#### DESCRIPCIÓN

- runs-on => indica la version sobre la que trabajará.
- needs => la ejecución se realizara despueś de que se hayan completado los jobs indicados.
- steps =>
    - name => indica el nombre del step.
    - run => ejecuta líneas de código

            => npm install nodemailer instala nodemailer.

    - uses => indica la action predefinida sobre la que trabajamos.

            => actions/checkout@v2 descarga el codigo

            => ./.github/actions/send_email => descarga el codigo de la action.

    - with => complementos de ejecución en este caso, son secrets:

            => GMAIL_PASS => nodemailer + gmail necesita token de gmail para aplicaciones externas.

            => RES_??? => Resultados de las ejecuciones de cada JOB.

            => EMAIL_NOTIF => el email que recibira el correo.
            
<br>

#### EJECUCION
 
 - Creamos un token en Gmail.
 - Guardamos email_to_notificate en Secrets. Setting/Secrets/Actions
 - Guardamos el Token en Secrets. Setting/Secrets/Actions

 <br>

![Captura de pantalla de 2022-02-19 12-33-03](https://user-images.githubusercontent.com/62303274/154800710-cc8c89f3-bff5-445a-8a39-c2e118799014.png)

 <br>
 - Añadimos al repositorio  
 
        => git add . 
        => git commit -m " comentario_commit"
        => sudo git push origin main 

Desde el repositorio de GitHub, vamos a la pestaña "Actions" donde aparece la ejecución del workflow.<br>

![Captura de pantalla de 2022-02-19 13-26-22](https://user-images.githubusercontent.com/62303274/154800704-ff53d0d4-06a7-4cc5-b9e8-3697b2f3237e.png)

<br>
Recibimos el correo con el resultado de la ejecución.
<br>

![Captura de pantalla de 2022-02-19 13-25-23](https://user-images.githubusercontent.com/62303274/154800662-57d30d64-0bb4-4fe6-b3b9-0736f383aa53.png)


<br>
