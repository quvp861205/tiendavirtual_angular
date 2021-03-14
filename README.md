Instalar nodejs: https://nodejs.org/es/
obtener version: node --version

Instalar visual code: https://code.visualstudio.com/
plugins para instalar:
	Angular Language Service
	tslint (Microsoft)
	
Instalar Angular: npm i -g @angular/cli
Recursos:
	Angular CLI: https://cli.angular.io/
	Angular Materia: https://material.angular.io/

Crear proyecto: 
	ng new platzi-store
	Angular routing? yes
	stylesheet? scss
	
Probar proyecto:
	ng --version
	ng serve (desarrollo, default 4200)
	ng server --port 4600 (desarrollo)
	ng build --prod (compilar para produccion)
		genera carpeta dist/ donde viene el compilado
	http://localhost:4200/
	
Ruta del frontend: src/app

Pagina para tener un proyecto angular online:
	https://stackblitz.com/	

Generador automatico de componentes
	ng g c card: generar componente card
	ng g c home: generar componente home
	ng g c products: generar componente products
	ng g c contact: generar componente contact
	ng g pipe exponential: genera un pipe
	ng g d highlight: generar una directiva
	ng g s products: generar un servicio para productos

Analizar codigo de errores:
	ng lint

Rutas de la pagina: 
	http://localhost:4200/home
	http://localhost:4200/products
	http://localhost:4200/contact
	http://localhost:4200/ejercicios

Instalar https://swiperjs.com/: permite hacer carruseles
	npm install swiper --save
	Agregar los estilos de la libreria:
		angular.json => styles