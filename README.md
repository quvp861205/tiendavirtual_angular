Instalar nodejs: https://nodejs.org/es/
obtener version: node --version

Instalar visual code: https://code.visualstudio.com/
plugins para instalar:
- Angular Language Service
- tslint (Microsoft)
	
Instalar Angular: npm i -g @angular/cli
Recursos:
- Angular CLI: https://cli.angular.io/
- Angular Materia: https://material.angular.io/

Crear proyecto: 
- ng new platzi-store
- Angular routing? yes
- stylesheet? scss
	
Probar proyecto:
- ng --version
- ng serve (desarrollo, default 4200)
- ng server --port 4600 (desarrollo)
- ng build --prod (compilar para produccion)
- genera carpeta dist/ donde viene el compilado
- http://localhost:4200/
	
Ruta del frontend: src/app

Pagina para tener un proyecto angular online:
	https://stackblitz.com/	

Generador automatico de componentes
- ng g c card: generar componente card
- ng g c home: generar componente home
- ng g c products: generar componente products
- ng g c contact: generar componente contact
- ng g pipe exponential: genera un pipe
- ng g d highlight: generar una directiva
- ng g s products: generar un servicio para productos
- ng g m shared: generar un modulo completo
- ng g m products --routing: generamos modulo con rutas
- ng g g admin: genera un guardian llamado admin, funciona como middleware para rutas

Analizar codigo de errores:
- ng lint

Rutas de la pagina: 
- http://localhost:4200/home
- http://localhost:4200/products
- http://localhost:4200/contact
- http://localhost:4200/ejercicios

Instalar https://swiperjs.com/: permite hacer carruseles
- npm install swiper --save
- Agregar los estilos de la libreria:
- angular.json => styles

Modulos Shared y Core:
- Shared: se utiliza principalmente para compartir componentes, directivas, pipes entre otros modulos.
- Core: Se utiliza para compartir servicios a otros modulos.

Ventajas de modularizar entidades:
Al cargar la pagina en la web, cada entidad se carga en un fichero js diferente por lo cual es mas rapido mostrar lo que ya se cargó y lo demás queda en segundo plano preparandose para cuando se requiera mostr


Instalando Material Design para las interfaces graficas:
- https://material.io/design
- https://material.angular.io/guide/getting-started: guia de instalacion de la libreria
- https://material.angular.io/components/categories: recursos para la interfaz grafica
- Instalar en angular: ng add @angular/material
- ng g m material: modulo para la interfaz grafica

Instalando libreria para grillas:
- http://flexboxgrid.com/
- Instalar en angular: npm i flexboxgrid --save
- Agregar estilos css: angular.json => styles {"./node_modules/flexboxgrid/dist/flexboxgrid.min.css"}

Creando vistas con Angular schematic: Generar interfaces rapido
- https://material.angular.io/guide/schematics
- ng g m admin --routing
- Instalar libreria: ng add @angular/cdk
- o bien: npm install --save @angular/material @angular/cdk
- Crear formulario: ng g @angular/material:address-form admin/components/product-form
- Ruta para probar: http://localhost:4200/admin/create
- ng g @angular/material:nav admin/components/nav
- Resultado: http://localhost:4200/admin
- Nota. Cada vez que se agregue una libreria a material/material.module.ts hay que correr: npm install --save @angular/material @angular/cdk

Integrar API REST:
- al app.module.ts agregar la libreria e importar
- Api Get: http://platzi-store.herokuapp.com/products
- Api Get{id}: http://platzi-store.herokuapp.com/products/1	

Ambiente intermedio entre desarrollo y produccion:
- Modificar el angular.json agregando los objetos stag
- Crear el environment.stag.ts
- probar localmente: ng serve -c=stag
- compilar: ng build -c=stag

Creando un inventario en el administrador: https://material.angular.io/components/table/overview
- componente lista: ng g c admin/components/products-list
- componente dashboard: ng g c admin/components/dashboard
- componente inventario: ng g c admin/components/table

Instalar Angular Firebase y configurar Firebase Auth:
- url: https://console.firebase.google.com/u/0/
- crear cuenta y crear proyecto: platzi-store
- Desabilitar analitics
- ir a pestaña de autentificacion: habilitar por correo/contraseña
- ir a pestaña de storage: crear storage por default
- ir a configuracion del proyecto: hacer click en el icono </>
- - sobrenombre de app: platzi-store
- - activar firebase hosting
- - dar continuar a todo por default
- Llaves para la conexion: settings / general / configuracion
- Instalar firebase para angular: https://github.com/angular/angularfire
- ng add @angular/fire
- o bien: npm install firebase @angular/fire --save
- agregar variable firebase a los archivos de environments con los datos que estan en settings / general / configuracion.
- Agregar AngularFireModule al app.module.ts

Autentificacion con firebase: https://github.com/angular/angularfire/blob/master/docs/auth/getting-started.md
- crear servicio de autentificacion: ng g s core/services/auth
- crear modulo de autentificacion: ng g m auth --routing
- crear componente login: ng g c auth/components/login/login
- crear componente registro: ng g c auth/components/register/register
- rutas: http://localhost:4200/auth/register y http://localhost:4200/auth/login
 
Desplegar nuestro proyecto en firebase host:
- instalar: npm install -g firebase-tools
- loguearse: firebase login
- configurar: firebase init
- - Hosting: Configure and deploy firebase hosting sites
- - Use an existing project
- - platzi-store-**** (platzi-store)
- - (public) dist/platzi-store
- - rewrite all urls: no
- - File dist/platzi-store/index.html already exists. Overwrite? No
- Generar compilacion: ng build --prod
- Desplegar distribuible: firebase deploy
- Configurar para rutas no encontradas en fire hosting: firebase.json
- 