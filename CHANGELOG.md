# Changelog

## [2026-01-27]
### Corregido
- **Rutas**: Solucionada la importación faltante de `TaxiXLPage` en `App.jsx` que causaba un error en la navegación.
- **Consistencia de Datos**: Unificación del número de teléfono oficial (+34 631 80 66 45) en todos los componentes y páginas.
- **Header & Footer**: Actualización de props por defecto y etiquetas de visualización de contacto.
- **HomePage**: Corregido número de teléfono hardcodeado en las acciones de reserva.

### Añadido
- **Optimizador de Imágenes**: Nuevo script en `scripts/generate-assets.js` con soporte para formatos JPG, PNG, WebP, AVIF y ahora **HEIC**.
- **Perfiles de Imagen**: Automatización de generación de versiones `hero`, `card`, `mobile` y `thumb`.
- **Nuevos Assets**: Actualización de imágenes del servicio PMR con versiones optimizadas.

## [2026-01-26]
### Añadido
- **Nuevas Páginas de Servicios**: Implementadas páginas dedicadas para `TaxiAirportPage`, `TaxiXLPage`, `BusinessPage`, `CruisePortPage` y `PMRPage` con diseño estandarizado.
- **Tour Gaudí**: Añadido nuevo itinerario turístico en `toursData.js`.
- **Navegación**: Rutas actualizadas en `App.jsx` para soportar las nuevas páginas.

### Modificado
- **Rediseño de Tours**: `TourDetailPage.jsx` ha sido refactorizado completamente para replicar exactamente la estructura y diseño de la página del Aeropuerto (Hero unificado, tarjetas sticky, sección de características).
- **Optimización de Imágenes**: Conversión de assets principales a formato WebP para mejorar el rendimiento (e.g., `tours-por-la-ciudad.webp`).
- **Eliminación de Precios**: Retirada la tabla de precios explícita en la página del Aeropuerto a favor de un enfoque de "Consultar Tarifa" y "Destinos Frecuentes".
- **Mejoras UX**: Ajustes de padding (`py-12`) y consistencia visual en headers y footers.

### Corregido
- **Crash Fixes**: Solucionados errores de referencia (`t is not defined`, `ArrowRight is not defined`) en las páginas de detalle.
