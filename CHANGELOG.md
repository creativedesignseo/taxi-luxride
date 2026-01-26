# Changelog

## [Unreleased]

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
