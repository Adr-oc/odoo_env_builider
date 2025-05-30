# Odoo Environment Builder

Una aplicación para facilitar la configuración y gestión de entornos Odoo, construida con Next.js, React, TypeScript y Tauri.

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) (v18 o superior)
- [npm](https://www.npmjs.com/) (v8 o superior)
- [Git](https://git-scm.com/)
- Para la parte de Tauri (opcional si solo quieres desarrollar la interfaz web):
  - [Rust](https://www.rust-lang.org/tools/install)
  - [Dependencias de Tauri](https://tauri.app/v1/guides/getting-started/prerequisites)

## 🚀 Instalación

### Clonar el repositorio

```bash
git clone https://github.com/Adr-oc/odoo_env_builider.git
cd odoo_env_builder
```

### Instalar dependencias

```bash
npm install
```

## 💻 Desarrollo

### Iniciar el servidor de desarrollo web

```bash
npm run dev
```

Esto iniciará el servidor de desarrollo de Next.js en [http://localhost:3000](http://localhost:3000).

### Iniciar la aplicación Tauri (opcional)

```bash
npm run tauri dev
```

Esto compilará y ejecutará la aplicación Tauri con la interfaz web integrada.

## 🏗️ Construcción

### Construir la aplicación web

```bash
npm run build
```

### Construir la aplicación Tauri

```bash
npm run tauri build
```

Esto generará los ejecutables para tu plataforma en el directorio `src-tauri/target/release`.

## 🤝 Guía de colaboración

### Estructura del proyecto

```
/
├── src/                # Código fuente de la aplicación web
│   ├── app/            # Componentes y páginas de Next.js
│   ├── components/     # Componentes reutilizables
│   ├── hooks/          # Hooks personalizados
│   ├── lib/            # Utilidades y funciones auxiliares
│   └── styles/         # Estilos globales
├── src-tauri/          # Código fuente de la aplicación Tauri (Rust)
├── public/             # Archivos estáticos
└── [archivos de configuración]
```

### Flujo de trabajo para contribuir

1. Crea una rama para tu característica o corrección:
   ```bash
   git checkout -b feature/nombre-de-caracteristica
   ```

2. Realiza tus cambios y haz commits con mensajes descriptivos:
   ```bash
   git commit -m "Añadir: descripción de los cambios"
   ```

3. Sube tus cambios a GitHub:
   ```bash
   git push origin feature/nombre-de-caracteristica
   ```

4. Abre un Pull Request en GitHub para revisión.

### Convenciones de código

- Utiliza TypeScript para todo el código JavaScript
- Sigue las convenciones de nombres de componentes de React (PascalCase)
- Utiliza nombres descriptivos para variables y funciones
- Escribe comentarios para código complejo

## 📄 Licencia

[MIT](LICENSE)
