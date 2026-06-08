# IA Orienta - Fuente del prototipo

Esta carpeta contiene la aplicación estática del prototipo IA Orienta.

## Estructura interna

- `index.html`: contenedor principal de la SPA.
- `changelog.md`: registro de cambios del prototipo.
- `css/`: estilos globales, layout y componentes.
- `js/app.js`: estado simulado y registro de rutas.
- `js/router.js`: navegación hash sin recargar la página.
- `js/data.js`: datos mock del prototipo.
- `js/views/`: una pantalla por archivo.
- `assets/`: recursos visuales locales.

## Ejecución

Abre `index.html` directamente en el navegador. No requiere servidor, dependencias, módulos ES ni proceso de build.

## GitHub Pages

El repositorio usa `.github/workflows/pages.yml` para publicar esta carpeta (`./src`) en GitHub Pages mediante GitHub Actions. Por eso la fuente del prototipo y su changelog permanecen en `src/`, aunque GitHub Pages normalmente limite la publicación manual a raíz o `docs/`.
