# IA Orienta Prototype

Prototipo académico de alta resolución para demostrar alfabetización en inteligencia artificial, orientación de herramientas, recomendación según necesidades, biblioteca de prompts y recursos de aprendizaje.

Este repositorio no contiene una aplicación productiva. Todas las interacciones son simuladas y no existe backend, base de datos, autenticación ni integración con APIs externas.

## Tecnologías

- HTML5
- CSS3
- JavaScript Vanilla

No se usan React, Angular, Vue, Svelte, Node.js, Firebase, Supabase ni frameworks CSS.

## Estructura

```text
.
├── .github/workflows/pages.yml
└── src/
    ├── index.html
    ├── changelog.md
    ├── css/
    ├── js/
    │   ├── app.js
    │   ├── router.js
    │   ├── data.js
    │   └── views/
    └── assets/
```

## Ejecución local

Abre `src/index.html` directamente en el navegador.

También puedes usar un servidor estático simple si lo prefieres, pero no es obligatorio para el prototipo.

## Despliegue en GitHub Pages

El despliegue se realiza con GitHub Actions desde `.github/workflows/pages.yml`.

El workflow publica el contenido de `./src` como artefacto de GitHub Pages, por lo que no es necesario mover el prototipo a la raíz ni usar una carpeta `docs/`. La aplicación principal sigue siendo `src/index.html`.

Para usar esta configuración en GitHub:

1. En Settings -> Pages, selecciona GitHub Actions como fuente de despliegue.
2. Haz push a la rama `main`.
3. GitHub Actions subirá `./src` y publicará el sitio estático.

El prototipo es compatible con GitHub Pages porque usa rutas relativas, scripts clásicos, no requiere variables de entorno y no tiene proceso de build.

## Flujo demostrado

1. Selección de perfil.
2. Diagnóstico de necesidad.
3. Recomendación simulada de herramienta IA con explicación de uso, momento adecuado y limitaciones.
4. Exploración de herramientas.
5. Consulta de prompts con explicación educativa sobre objetivo, contexto y resultado esperado.
6. Centro de Aprendizaje como módulo principal de alfabetización IA.
7. Favoritos e historial simulados.

## Enfoque de alfabetización IA

El prototipo refuerza que IA Orienta no es solo un recomendador de herramientas. La experiencia guía al usuario para comprender:

- Qué es la inteligencia artificial y qué límites tiene.
- Cómo elegir una herramienta según tarea, contexto y privacidad.
- Cómo crear prompts más claros y útiles.
- Cómo validar respuestas antes de usarlas.
- Qué riesgos considerar: sesgos, información incorrecta, privacidad y uso responsable.

## Responsive design

La interfaz fue ajustada con enfoque mobile first para pantallas de 360px, 390px, 414px, 768px, 1024px y desktop. Los layouts se apilan en una columna en móvil, la navegación usa un sidebar lateral que se puede abrir y cerrar, la barra superior queda fija durante el scroll y los contenedores usan anchos fluidos para evitar scroll horizontal.

En escritorio, el sidebar permanece fijo durante el scroll para mantener una navegación consistente sin recortarse. En móvil, la barra superior incluye un botón de volver que usa el historial interno del prototipo.
