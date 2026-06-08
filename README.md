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
3. Recomendación simulada de herramienta IA.
4. Exploración de herramientas.
5. Consulta de prompts.
6. Módulos breves de alfabetización IA.
7. Favoritos e historial simulados.
