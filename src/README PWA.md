Instalar PWA en angular:
- Esto va permitir ser una pagina instalable tanto en web como en movil y que pueda abrirse aunque no haya internet
- https://angular.io/cli/add
- ng add @angular/pwa
  
Crear proyecto hosting https en firebase: 
- https://console.firebase.google.com/u/0/?hl=es
- alias: angular-pwa-platzi
- ir a Hosting

Instalar librerias firebase en angular:
- npm install -g firebase-tools
- ejecutar login: firebase login
- ejecutar inicializar: firebase init
- - Hosting: Configure and deploy firebase hosting sites
- - Use an existing project
- - angular-pwa-platzi 
- - (public) dist/platzi-store
- - rewrite all urls: no
- - File dist/platzi-store/index.html already exists. Overwrite? No
- Generar compilacion: ng build --prod
- Desplegar distribuible: firebase deploy
- Configurar para rutas no encontradas en fire hosting: firebase.json
- - "rewrites": [
      {
        "source": "**",
        "destination": "/index.html"
      }
    ]
- volver a desplegar: firebase deploy

Configurar para grabar en cache los resultados de la Api productos:
- https://angular.io/guide/service-worker-config
- agregar configuracion al atributo dataGroups en ngsw-config.json
- compilar a produccion: ng build --prod
- publicar: firebase deploy

Modificar el instalable web para android:
- modificar manifest.web.manifest
- instalar: ng build --prod
- desplegar en internet: firebase deploy