# 🏡 Coliving Campus - Proyecto Inmobiliaria

> **Coliving Campus** es una aplicación web moderna desarrollada con **React** y **Vite**, diseñada para facilitar la búsqueda, gestión y exploración de pisos compartidos y espacios de coliving para estudiantes y jóvenes profesionales. Ofrece una experiencia de usuario interactiva, fluida y totalmente adaptable a cualquier dispositivo.

<p align="center">
  <img width="1898" height="875" alt="Coliving Campus Preview" src="https://github.com/user-attachments/assets/3f230f62-bce2-4334-b779-54ea9b05d7f9" />
</p>

---

## 📖 Descripción del Proyecto

El objetivo principal de **Coliving Campus** es conectar a estudiantes con alojamientos de calidad en ubicaciones estratégicas cerca de sus facultades. La plataforma resuelve la problemática de encontrar piso compartido sin complicaciones ni sorpresas, integrando:

- 🏠 **Catálogo de Pisos:** Visualización de ofertas inmobiliarias con datos clave (precio, número de habitaciones, baños y ubicación).
- 🌟 **Pisos Destacados en Portada:** Carrusel dinámico e interactivo con transiciones visuales en la página de inicio.
- 👥 **Equipo de Agentes:** Sección dedicada a presentar a los asesores inmobiliarios con sus biografías y roles.
- 📜 **Nuestra Historia & Métricas:** Resumen de trayectoria con indicadores de impacto (años de experiencia, estudiantes alojados, satisfacción).
- 🍲 **Menú Gastronómico (Integración API):** Sección de recetas y sugerencias gastronómicas españolas pensada para la convivencia en el piso compartido, consumiendo datos en tiempo real de una API externa.
- 📬 **Contacto:** Información directa de atención (correo, teléfono y ubicación).

---

## 🛠️ Stack Tecnológico y Librerías

El proyecto está construido sobre las herramientas más modernas del ecosistema JavaScript/React:

| Tecnología / Librería | Versión | Propósito en el Proyecto |
| :--- | :--- | :--- |
| **[React](https://react.dev/)** | `^19.2.7` | Biblioteca principal para la creación de interfaces de usuario basadas en componentes declarativos y reutilizables. |
| **[Vite](https://vitejs.dev/)** | `^8.1.1` | Entorno de desarrollo y empaquetador ultrarrápido con Hot Module Replacement (HMR). |
| **[React Router DOM](https://reactrouter.com/)** | `^7.18.2` | Enrutamiento del lado del cliente (SPA) para navegación fluida e instantánea sin recargas de página. |
| **[Axios](https://axios-http.com/)** | `^1.19.0` | Cliente HTTP basado en promesas utilizado para el consumo asíncrono de APIs REST externas. |
| **CSS3 & Vanilla Styling** | - | Estilos personalizados, modulares y responsivos organizados por componentes y tipografía global. |
| **[ESLint](https://eslint.org/)** | `^10.6.0` | Linter para asegurar la calidad, consistencia y buenas prácticas en el código JavaScript/React. |

---

## 🧩 Arquitectura y Conceptos de React Implementados

### 1. ⚛️ Componentes Modulares y Reutilizables
La aplicación sigue una arquitectura modular separando la lógica de presentación y de negocio:
- **Componentes Globales:** `Header` (con barra de navegación fija y detección de scroll) y `Footer` institucional.
- **Tarjetas Reutilizables:** `ApartmentCard`, `AgentCard` y `MenuCard`, que reciben propiedades (`props`) estructuradas para renderizar dinámicamente cada elemento.
- **Páginas (Vistas):** `Welcome`, `Apartments`, `History`, `Agents`, `Menu` y `Contact`.

### 2. 🚦 Enrutamiento con React Router DOM
Se utiliza `BrowserRouter`, `Routes`, `Route`, `Link` y `NavLink` para ofrecer una experiencia **Single Page Application (SPA)**:
- `/` ➔ Inicio / Bienvenida con carrusel destacado.
- `/pisos` ➔ Catálogo general de apartamentos disponibles.
- `/historia` ➔ Sobre nosotros y estadísticas clave.
- `/agentes` ➔ Equipo de agentes inmobiliarios.
- `/menu` ➔ Recetas gastronómicas obtenidas vía API.
- `/contacto` ➔ Formas de contacto e información de la empresa.
- **Enlaces Activos:** Uso del render prop de `NavLink` para aplicar estilos visuales a la ruta activa en el menú de navegación.

### 3. 🎣 React Hooks & Estado
- `useState`: Control del estado local en componentes (por ejemplo, el índice del apartamento destacado en portada, los datos recibidos de la API, estados de carga y control de errores, o el estado de scroll en el encabezado).
- `useEffect`:
  - **Temporizadores y Animaciones:** Intervalo automático de cambio de piso destacado con transiciones *fade-in/fade-out* en la página de inicio.
  - **Consumo de APIs:** Petición HTTP asíncrona al montar el componente `Menu` para obtener recetas de [TheMealDB](https://www.themealdb.com/).
  - **Listeners de Eventos:** Detección del evento `scroll` del navegador en el `Header`.

### 4. 🌐 Consumo de API Externa con Axios
En la vista de `Menu` (`/menu`), se utiliza **Axios** dentro de una función asíncrona (`async/await`) en `useEffect` para consultar el endpoint:
```javascript
const response = await axios.get(
  "https://www.themealdb.com/api/json/v1/1/filter.php?a=Spanish"
);
```
Incluye manejo de excepciones mediante bloques `try/catch` y visualización de mensajes de error amigables en caso de fallos de red.

---

## 📂 Estructura del Proyecto

```text
inmobiliaria/
├── public/                     # Archivos estáticos públicos (favicon, etc.)
├── src/
│   ├── assets/                 # Recursos gráficos (imágenes de pisos, agentes)
│   │   └── img/
│   ├── components/             # Componentes reutilizables
│   │   ├── footer/             # Componente Footer y estilos
│   │   ├── header/             # Componente Header (Navbar) y estilos
│   │   ├── AgentCard.jsx       # Tarjeta de agente inmobiliario
│   │   ├── ApartmentCard.jsx   # Tarjeta de piso/apartamento
│   │   └── MenuCard.jsx        # Tarjeta de receta gastronómica
│   ├── data/                   # Datos locales / Mock data
│   │   ├── agentsData.js       # Lista de agentes inmobiliarios
│   │   └── apartmentsData.js   # Lista de propiedades disponibles
│   ├── pages/                  # Vistas principales de la aplicación
│   │   ├── agents/             # Vista de Agentes
│   │   ├── apartments/         # Vista del catálogo de Pisos
│   │   ├── contact/            # Vista de Contacto
│   │   ├── history/            # Vista de Historia / Acerca de
│   │   ├── menu/               # Vista de Menú/Recetas (Consumo API)
│   │   └── welcome/            # Vista de Inicio / Portada
│   ├── style/                  # Estilos globales
│   │   ├── App.css             # Layout principal
│   │   └── Typography.css      # Variables tipográficas y estilos base
│   ├── App.jsx                 # Componente raíz con definición de rutas
│   └── main.jsx                # Punto de entrada de la aplicación con BrowserRouter
├── index.html                  # Plantilla HTML principal
├── package.json                # Dependencias y scripts del proyecto
└── vite.config.js              # Configuración de Vite
```

---

## ⚙️ Instalación y Configuración Local

Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

### 1. Requisitos Previos
Asegúrate de tener instalado en tu sistema:
- [Node.js](https://nodejs.org/) (versión 18.0 o superior recomendada)
- [Git](https://git-scm.com/)
- Gestor de paquetes `npm` (incluido con Node.js), `yarn` o `pnpm`

### 2. Clonar el Repositorio
```bash
git clone https://github.com/mxu-init/Inmobiliaria.git
```

### 3. Acceder a la Carpeta del Proyecto
```bash
cd Inmobiliaria
```

### 4. Instalar las Dependencias
```bash
npm install
```

### 5. Iniciar el Servidor de Desarrollo
```bash
npm run dev
```
Una vez iniciado el servidor, abre tu navegador y accede a:
```text
http://localhost:5173/
```

---

## 🚀 Despliegue y Construcción para Producción

### Generar la Versión de Producción
Para compilar y optimizar la aplicación para su posterior despliegue:
```bash
npm run build
```
Esto generará una carpeta `dist/` con todos los archivos estáticos listos para producción.

### Probar el Build Localmente
```bash
npm run preview
```

### Opciones de Despliegue
La aplicación puede ser desplegada de forma directa y gratuita en plataformas modernas como:
- **[Vercel](https://vercel.com/):** Importa el repositorio de GitHub y realiza el deploy automático configurando el framework preset como *Vite*.
- **[Netlify](https://www.netlify.com/):** Conecta el repositorio, establece el comando de compilación en `npm run build` y el directorio de publicación en `dist`.
- **[GitHub Pages](https://pages.github.com/):** Configurable mediante GitHub Actions para proyectos basados en Vite.

---

## 👥 Equipo de Desarrollo

El proyecto ha sido desarrollado por los siguientes integrantes:

| Nombre / Usuario | Perfil de GitHub |
| :--- | :--- |
| **Cristina Rodríguez** | [cristinarodriguezl-dev](https://github.com/cristinarodriguezl-dev) |
| **Mauricio Rodríguez** | [mxu-init](https://github.com/mxu-init) |
| **Jhojann Sossa** | [jhojannsossa](https://github.com/jhojannsossa) |
| **Simón López** | [simonlopez25](https://github.com/simonlopez25) |

---

## 📄 Licencia

Este proyecto fue desarrollado con fines educativos y de aprendizaje dentro del marco formativo. Todos los derechos reservados a sus respectivos autores.
