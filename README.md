# SpotiApp

Esta es una aplicación en Angular v8.

Toca en mayor o menor medida los siguientes aspectos:
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
