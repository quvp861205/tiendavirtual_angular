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
	ng g pipe exponential: genera un pipe
	ng g d highlight: generar una directiva

Analizar codigo de errores:
	ng lint