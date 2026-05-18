# Rick and Morty API REST - Entregable React

Aplicación web desarrollada en **React** que consume la API pública de **Rick and Morty** para consultar y visualizar personajes de la serie.

## Funcionalidades incluidas

- Consulta de personajes desde la API REST usando `fetch`.
- Tarjetas visuales con:
  - Imagen
  - Nombre
  - Especie
  - Estado
  - Género
- Navegación con `react-router-dom`.
- Menú principal con:
  - Inicio / Todos los personajes
  - Filtrar por especie
- Filtro por las especies solicitadas:
  - Human
  - Alien
  - Robot
  - Mythological Creature
- Diseño responsivo para computador, tablet y móvil.
- Estado de carga.
- Manejo básico de errores.
- Página 404 para rutas no existentes.
- Paginación como funcionalidad adicional.

## Tecnologías utilizadas

- React 19
- Vite 8
- React Router DOM 7
- Material UI
- CSS
- Fetch API

## Requisitos previos

- Node.js compatible con Vite 8.
- npm instalado.

## Instalación y ejecución

1. Abrir la carpeta del proyecto en Visual Studio Code.
2. Abrir la terminal integrada.
3. Ejecutar:

```bash
npm install
```

4. Iniciar el servidor de desarrollo:

```bash
npm run dev
```

5. Abrir la URL que aparezca en la terminal, normalmente:

```text
http://localhost:5173/
```

## Estructura principal

```text
src/
├── components/
│   ├── CardCharacter/
│   ├── ErrorState/
│   ├── Loading/
│   ├── Navbar/
│   └── Pagination/
├── pages/
│   ├── Home/
│   ├── NotFound/
│   └── SpeciesFilter/
├── services/
│   └── rickMortyApi.js
├── App.css
├── App.jsx
├── index.css
└── main.jsx
```
