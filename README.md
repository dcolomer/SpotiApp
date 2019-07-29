# SpotiApp
> ### Aplicación en Angular v8.

### Acceso a la aplicación
Se accede a la aplicación mediante la URL http://localhost:4200/ 

## Capturas de pantalla
A continuación se muestra visualmente las principales funcionalidades de la aplicación.

### Inicio
La pantalla de inicio muestra las últimas novedades de Spotify. La imagen siguiente es de Julio de 2019
 
![Inicio](https://github.com/dcolomer/SpotiApp/blob/master/screenshots/1.png)

### Ficha del artista
Al pulsar sobre una novedad accedemos a la ficha del artista, en la cual vemos las canciones más populares del mismo y de las que podemos escuchar un `preview`.
 
![Ficha](https://github.com/dcolomer/SpotiApp/blob/master/screenshots/2.png)

### Búsqueda
Podemos buscar la música de un artista o de varios. Introduciendo su nombre aparecerán todos los álbumes cuyo artista coincida con el texto introducido.
 
![Búsqueda](https://github.com/dcolomer/SpotiApp/blob/master/screenshots/3.png)

Características de Angular:
- Gestión de rutas y parámetros
- Uso de HttpClient para obtener información del backed
- Uso de la API de Spotify para obtener información de:
    - Artistas
    - Albumes
    - Audio
- Gestión de datos asíncronos. Observables y promesas
- Widgets de Spotify
- HTML5 audio
- Pipes personalizados
- Gestión de token de acceso
- LocalStorage
- Bootstrap 4: cards, badges, tables, navbar

## Instalación
Ejecutar `mpm install` para descargar las librerías de node.

Importante: El programa no proporciona las credenciales que permiten conseguir un token de acceso al API de Spotify. Por tanto, será necesario registrarse en Spotify, obtener el `client id` y el `client secret` y pegarlos en el método `getToken` de `TokenService`.
