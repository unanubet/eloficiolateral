# El Oficio Lateral — sitio web

Sitio de la plataforma educativa y cultural que dirige Natalia Unanue (ver contexto completo en el CLAUDE.md global). Landing + secciones (blog, agenda, talleres realizados, calculadora NEM) para difundir talleres y servicios.

**Etapa**: prototipo/borrador en iteración activa. Primer sitio web de Nati, hecho con vibecoding — no asumir conocimiento técnico previo.

**Sitio publicado**: <https://unanubet.github.io/eloficiolateral/>
**Repo**: <https://github.com/unanubet/eloficiolateral> (rama `main`)

## Stack

- HTML / CSS / JS vainilla. Sin frameworks, sin build step.
- Deploy: push a `main` → GitHub Pages lo publica solo.
- Previsualizar local: abrir `index.html` directo en el navegador (o usar la extensión Live Server de VSCode si está instalada).

## Estructura

```text
index.html              página principal
blog.html               sección blog
banner.html             banner/pieza promocional
calculadora-nem.html    herramienta de cálculo NEM (PAES)
clasificador-paes.html / .js   clasificador de ítems de Competencia Lectora PAES
fuentes.html / fuentes-cuerpo.html   páginas de tipografías
texturas.html           página de texturas/recursos visuales
style.css               estilos globales (paleta, tipografías)
scrapbook.js            interactividad estilo "scrapbook"
lanzamiento/            copys del lanzamiento del sitio y de redes sociales
referencia/             maquetas y plantillas de comparación, no forman parte del sitio publicado
realizados/             fotos/videos YA procesados y seguros de talleres pasados (sí se publican)
Afiches Talleres/       afiches de talleres (en curso, sin subir a git aún)
Scraps Banner/          recortes gráficos para el banner
Fuentes/                fuentes descargadas para uso en el sitio (SensaWild)
Recortes gURL/          capturas de referencia visual de gurl.com (Internet Archive)
```

## Paleta de marca

Definida en `:root` de `style.css` — gama de 6 confirmada por Nati (2026-07-08):

- `#f2aed5` rosa claro (principal) — `--rosa`
- `#c075a8` rosa medio — `--rosa-medio`
- `#8f4a7a` rosa oscuro / magenta — `--rosa-oscuro`
- `#b6a2d6` lila — `--lila`
- `#f2d675` amarillo mantequilla — `--amarillo`
- `#b3c4d6` celeste grisáceo (reemplazó al gris neutro puro `#d3d5da`) — `--gris`
- `#2a2a35` navy, neutro de texto — `--navy`
- `#fdf8f4` crema, neutro de fondo — `--crema`

`--lila` y `--amarillo` son variables nuevas, definidas pero todavía sin uso extendido en el sitio — aplicar en detalles/tags/badges cuando corresponda.

## Referencias visuales

- Estética 90s/2000s (Geocities, Gurl.com, fansites, tipografías bitmap) — ver también CLAUDE.md global.
- Capturas de gurl.com (vía Internet Archive) en `Recortes gURL/`. Elementos a imitar:
  - Bloques de navegación de color sólido y saturado, uno por categoría (look "botonera").
  - Tipografía de titulares gruesa, con mayúsculas/minúsculas mezcladas dentro de una misma palabra (ej. "aMUSE me!").
  - Garabatos a mano alzada (círculos, flechas) en rojo/tinta superpuestos sobre ilustraciones, tipo corrección de cuaderno.
  - Insignias/stickers tipo "ribbon" (ej. "TAKE THE QUIZ") como llamados a la acción.
  - Fondos de color plano bloqueado por sección, sin gradientes.
  - Patrón de íconos pixelados repetidos como textura de fondo, disperso e irregular (no grilla pareja), en un solo color sobre fondo oscuro (ref. "gURLgames" en `Recortes gURL/`) — usado como base para el fondo de corazones del header (ver Notas técnicas).

## Notas técnicas

- **Fondo de corazones del header** (`#heartCanvas` en `index.html`, script al final del body): dibuja corazones pixelados en grilla con jitter (celda fija de 54px + variación aleatoria adentro de cada celda). Nota: con esta grilla queda un hueco consistente hacia el centro-izquierda del banner (no es aleatorio) — probado también con celda 40px, pero Nati prefirió volver a 54px igual., forma redondeada/simétrica (punta de 2px), relleno rosa `#f2aed5` a opacidad total con un destello de 3px en crema `#fdf8f4` en la esquina superior izquierda (valor `2` en la matriz `heart`, look pixel-art tipo las referencias de `Corazón Pixeles/`). Sin blur ni contorno. Esquiva zona del `.logo` (chico, 8px/4px) y, por cada link de `.nav-principal` individualmente (no un solo rectángulo para todo el menú), zona con margen horizontal 4px / vertical 8px. Se redibuja (no solo una vez al cargar) cuando cambia el tamaño real del header: en `resize`, `orientationchange` y cuando `document.fonts.ready` resuelve — necesario porque en celular vertical el menú pasa a varias líneas y el alto del header cambia. Iterado varias veces (2026-07-08 y 2026-07-19 tras reportes de Nati desde el celular); maquetas de comparación quedaron en `corazones-opciones.html` (se puede borrar).

## Tipografías

- Cuerpo: Lora. Títulos de sección: Kranky. Cursiva en encabezados de piezas de marca.
- **`.cita-titulo`** (el `<h1>` "El Oficio Lateral" del hero en `index.html`): Lora, 700, 2rem — es el estado original, no tocar sin pedido explícito. Spectral fue solo una prueba en `fuentes-cuerpo.html` (página de exploración de fuentes), nunca se aplicó al sitio real.
- **SensaWild** (`Fuentes/`, agregada 2026-07-08): fuente display con dos variantes, `Fill` (rellena) y `LineOutlineShade` (contorno con sombreado, look stencil/90s).
  - `SensaWild-LineOutlineShade` (variable `--fuente-outline`) aplicada a: **logo del header** (`.logo-texto` en `style.css`, 3rem — reemplazó a Fredericka the Great, decisión tomada 2026-07-08 tras comparar maquetas en `logo-opciones.html`), el logo del topbar de la calculadora NEM (`.eol-topbar-logo` en `calculadora-nem.html`, 1.7rem) y el titular del banner de lanzamiento (`.titular` en `referencia/pieza-lanzamiento.html`).
  - `SensaWild-Fill` (variable `--fuente-fill`) aplicada a: los botones del sitio (`.btn-principal`, `.btn-secundario` en `style.css`) y al botón decorativo del banner de lanzamiento (`.boton` en `referencia/pieza-lanzamiento.html`).
  - `blog.html` usa `style.css` directo, así que hereda `.logo-texto` sin cambios aparte. `referencia/pieza-lanzamiento.html` y `calculadora-nem.html` tienen su propio bloque `<style>` (no usan `style.css`), así que el `@font-face` está duplicado en cada uno con su ruta relativa a `Fuentes/`.
  - `logo-opciones.html` (raíz del proyecto) es un archivo de comparación de maquetas, no forma parte del sitio publicado — se puede borrar cuando ya no se necesite.
- Nada de diseños genéricos ni tipografías de internet por defecto.

## Convenciones y reglas firmes

- **Privacidad de estudiantes**: nunca publicar rostros, nombres ni escudos de colegios. Las fotos originales sin recortar quedan en `.gitignore` (`4962309C...JPG`, `CD4E3398...JPG`, `*.HEIC`, `*.MOV`); solo lo ya procesado y seguro vive en `realizados/` y se sube.
- Tarjetas de talleres/secciones ordenadas por año.

## Ideas pendientes (sin decidir aún)

- **Material para estudiantes**: Nati quiere que el sitio permita subir material de descarga o links a su Drive para sus estudiantes. Todavía no está definido si esto se resuelve dentro de la sección "Biblioteca digital" que ya existe (mencionada en CLAUDE.md global) o si es algo aparte. Falta decidir: ¿archivos alojados en el repo, o solo links externos a Drive? ¿acceso con contraseña como la biblioteca actual?

## Estado actual

Esta sección se actualiza a medida que avanza el proyecto, para no repetir contexto en cada sesión.

- Blog, Agenda y Talleres realizados: publicados. Textos pendientes de edición por Nati.
- Afiches de talleres: carpeta `Afiches Talleres/` sigue en curso, sin commitear a propósito (agregada a `.gitignore`) hasta que estén listos.
- Paleta ampliada a 6 colores, fuente SensaWild (logo, botones, calculadora NEM, banner de lanzamiento), foto de presentación reencuadrada y fondo de corazones del header: todo aplicado y confirmado. Subido a GitHub el 2026-07-08.
- Tarjeta del taller de Distopías ("Habrá Nuevos Soles"): agregada etiqueta "Próximamente".
- Pendiente para más adelante: investigar el hueco consistente hacia el centro-izquierda del fondo de corazones (ver nota en Notas técnicas).
- `Recortes gURL/` y `Corazón Pixeles/` quedaron fuera del repo (`.gitignore`) por ser capturas de bancos de imágenes de terceros — solo viven localmente como referencia.
- **2026-07-19, ronda de revisión desde el celular**: og:image de index/blog apuntaba a la foto de Nati en vez del logo (corregido); foto de presentación se cortaba mal en mobile (corregido, ver `.presentacion-foto`); botones "Inscribirme" abrían el formulario de Google en pestaña nueva y el botón atrás no volvía en navegadores internos (corregido, ya no usan `target="_blank"`); footers actualizados a © 2026.
- **Clasificador de ítems PAES publicado** (`clasificador-paes.html`/`.js`, enlazado desde "Herramientas para estudiantes" en `index.html`): reglas por palabras clave probadas y reforzadas contra un examen PAES real completo (65 preguntas) más el propio análisis de Nati; agregada 7ª categoría "Aplicar a una situación externa".
- **Fondo de corazones**: no se veía bien en celular vertical porque el canvas se dibujaba una sola vez y la zona a evitar del menú era un solo rectángulo que, al envolver el menú en varias líneas, tapaba casi todo el header — corregido (ver Notas técnicas).
- **Pendiente de Nati**: activar en su cuenta de GoatCounter (Settings → "Allow adding visitor counts on your website", viene desactivada por defecto) para que el contador de visitas del footer muestre el número real; el fetch a `/counter/TOTAL.json` da 403 mientras esté apagada.
