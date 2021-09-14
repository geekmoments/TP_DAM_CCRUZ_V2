![Screen Shot 2021-09-13 at 16 46 13](https://user-images.githubusercontent.com/70829024/133178236-07f5ccbe-ecfc-483a-9ebf-7c4c16701620.png)
![Screen Shot 2021-09-13 at 16 46 29](https://user-images.githubusercontent.com/70829024/133178249-85090af7-5f61-4dfc-ad78-db866305d097.png)
# TP_DAM_CCRUZ_V2
# Trabajo Práctico Final - César Cruz
## Desarrollo de aplicaciones multiplataforma
## 4ta Cohorte 2021


Docente 

* Brian Ducca


## Introducción general

el proyecto Angular sistema-riego-v2, es un sistema que administra dispositivos IoT, para acceder a la lista de dispositivos disponibles se implementó servicios
de consulta en /core/services son solicitudes get y post en caso se desee agregar nuevos dispositivos

La opción de agregar dispositivos es para el administrador con las ruta localhost:4200/admin , donde se tiene acceso a visualizar los dispositivos editar eliminar y/o agregar

En la vista principal del proyecto se pede acceder a una vista de detalle de cada dispositivo
 
## Descripción del proyecto

* La estructura del proyecto esta desarrollada de acuerdo a las partes de la estructura de un proyecto web, estas estan identificadas en directorios,
para los recursos compartidos se creó un modulo especial *shared* donde se contiene los componentes usados por los demas modulos y tambien los pipes y directivas
* En el Core encontramos los servicios usados por los modulos
* En el modulo device encontramos los componentes que manejan las diferentes vistas de los dispositivos que se administran, ya sea para vista individual, grupal y detallada
* El componentes Layout nos ayuda a administrar los templades del proyecto
* Se creó un modulo especial *admin* para poder tener un entorno de edición de los dispositivos, en el se pueden modificar propiedades, eliminar dispositivos y tener vista general

## Herramientas usadas
* Material : para poder generar templades 
* swiper: para vistas en carrete de imagenes
* ionic para generar proyecto mobile

##Instalación de dependencias

```
npm install -g @ionic/cli
```

Adicionalmente se requiere instalar la biblioteca highcharts para la visualización de los gráficos con el comando:

```
npm install highcharts --save
```
Swiper
```
npm install swiper --save
```
```
"styles": [
          "./node_modules/swiper/swiper-bundle.min.css"
            ],
```
Material

```
ng add @angular/material
```



### Desarrollo del backend

El backend conformado dentro de una imagen de docker consta de :

* Una base de datos MySQL
* Una imagen de Node.js con Express
* Un gestor de base de datos phpMyAdmin



## Ejecución
```
sistema-riego-app Run `ng serve` , `http://localhost:4200/`. .
```
### Inicialización del backend

Una vez instaladas todas las dependencias necesarias se podrá ejecutar el siguiente comando para levantar el docker :

```
docker-compose up
```
 
Luego acceder al url:
 
* Local: http://localhost:8100

## Consideraciones
***
> No se alcancó a completar todo el backend del proyecto.
> Las consultas fueron probadas con un servicio gratuito donde se almacenó paquetes json.
> el url_api esta ocnfigurado en enviroments.ts 
> https://612cc880ab461c00178b5eb6.mockapi.io/devices/devices.
