# Fisioterapeuta Ezequiel

Sitio web estático para el consultorio de fisioterapia de Ezequiel en Cancún, Quintana Roo.

**Repositorio:** [github.com/Estebmaister/eze](https://github.com/Estebmaister/eze)

## Páginas

| Página | Archivo | Descripción |
|--------|---------|-------------|
| Inicio | `index.html` | Landing page con servicios, contacto y sobre mí |
| Vida Plena | `vida_plena/` | Retiros de salud y bienestar — clínica premium |
| Aviso de privacidad | `aviso-de-privacidad.html` | Política de tratamiento de datos (LFPDPPP) |

## Estructura del proyecto

```
eze_therapy/
├── index.html
├── aviso-de-privacidad.html
├── css/
│   ├── main.css              # Entry point
│   ├── base.css              # Variables, reset, utilidades
│   ├── components.css        # Botones, cards, formularios
│   └── sections/             # Un archivo CSS por sección
├── js/
│   ├── index.js              # Entry point
│   ├── config.js             # WhatsApp, secciones
│   ├── data/services.js      # Datos de servicios
│   └── modules/              # navigation, services, contact-form, whatsapp
└── assets/images/            # Imágenes del sitio
```

## Configuración rápida

### WhatsApp

Edita `js/config.js`:

```js
whatsapp: {
  number: '529981234567', // sin + ni espacios
  defaultMessage: 'Hola Ezequiel, me interesa agendar una valoración.',
}
```

### Agregar un servicio

Edita `js/data/services.js` y agrega un objeto al array `SERVICES`.

### Reemplazar imágenes

Sustituye los archivos en `assets/images/`:

- `hero.jpg` — Foto principal
- `about.jpg` — Retrato de Ezequiel
- `services/*.jpg` — Una imagen por servicio

## Desarrollo local

Los módulos ES requieren un servidor HTTP:

```bash
python3 -m http.server 8080
# o
npx serve .
```

Abre [http://localhost:8080](http://localhost:8080).

## Despliegue en GitHub Pages

Este sitio es HTML/CSS/JS estático y funciona directamente en GitHub Pages sin build.

1. Sube el código a la rama `main` del repositorio.
2. En GitHub: **Settings → Pages**.
3. En **Build and deployment → Source**, selecciona **Deploy from a branch**.
4. Branch: `main`, carpeta: `/ (root)`.
5. Guarda. En 1–2 minutos el sitio estará en:
   `https://estebmaister.github.io/eze/`

> Si el repo se llama distinto, la URL será `https://<usuario>.github.io/<repo>/`.

## Tecnologías

- HTML5 semántico
- CSS modular con variables custom properties
- JavaScript ES modules (sin frameworks ni bundlers)

## Licencia

Proyecto privado. Todos los derechos reservados.
