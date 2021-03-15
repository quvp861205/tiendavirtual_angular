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