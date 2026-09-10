# Emiliano Villagra — sitio oficial

Sitio hecho con React + Vite. Agenda de shows conectada a un Google Sheet publicado como CSV (sin backend).

## Desarrollo local

```bash
npm install
npm run dev
```

## Agenda / Google Sheets

La sección "Próximas fechas" lee un Google Sheet publicado como CSV. Configurala así:

1. En el Sheet, poné estos encabezados en la fila 1: `Fecha`, `Lugar`, `Ciudad`, `Estado`, `Link`.
   - `Fecha` en formato `DD/MM/AAAA`.
   - `Estado`: `Confirmado` o `Pronto`.
   - `Link`: opcional, a dónde manda el botón (WhatsApp, Instagram, etc).
2. Archivo → Compartir → Publicar en la web → seleccioná la hoja → formato **CSV** → Publicar.
3. Copiá esa URL y pegala en un archivo `.env` en la raíz del proyecto (ver `.env.example`):
   ```
   VITE_SHEET_CSV_URL=https://docs.google.com/spreadsheets/d/e/TU_ID/pub?output=csv
   ```
   Si no creás el `.env`, el sitio usa la URL que ya quedó cargada por defecto en `src/lib/useAgenda.js`.
4. Las fechas pasadas se ocultan solas y las próximas se ordenan automáticamente.

## Antes de publicar (SEO)

El `index.html` y `public/robots.txt` / `public/sitemap.xml` usan el dominio de ejemplo `https://emilianovillagra.com.ar/`. Una vez que tengas el dominio final, reemplazalo en esos 3 archivos (buscá `emilianovillagra.com.ar`).

## Build para producción

```bash
npm run build
```

Genera la carpeta `dist/` lista para subir a cualquier hosting estático (Vercel, Netlify, GitHub Pages, etc).
