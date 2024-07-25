# Proyecto React + TypeScript + Vite

Este repositorio contiene una plantilla básica para un proyecto de React utilizando TypeScript y Vite. Este README te guiará a través del proceso de configuración y puesta en marcha del proyecto.

## Requisitos Previos

Asegúrate de tener instaladas las siguientes herramientas en tu máquina:

- [Node.js](https://nodejs.org/) (versión 20.14.0)
- [npm](https://www.npmjs.com/) (versión 10.7.0)

## Clonar el Repositorio

Primero, clona el repositorio en tu máquina local:

```bash
git clone https://github.com/eliesser/react-marvel-characters.git
cd react-marvel-characters
```

## Configuración de Variables de Entorno

El proyecto utiliza un archivo de configuración '.env' para gestionar las variables de entorno. Para configurarlas duplica el archivo '.env.template' y renombra a '.env' edita y agrega tus variables con los valores de tu API de Marvel. El archivo '.env' debe contener algo como esto:

```bash
VITE_PUBLIC_KEY = tu_clave_publica_de_api_de_marvel
VITE_PRIVATE_KEY = tu_clave_privada_de_api_de_marvel
```

## Instalación de Dependencias

Instala las dependencias del proyecto utilizando Yarn:

```bash
yarn install
```

## Ejecución del Proyecto en Modo Desarrollo

Para iniciar el servidor de desarrollo, utiliza el siguiente comando:

```bash
npm run dev
```

## Ejecución del Proyecto en Modo Desarrollo con mocks

Para iniciar el servidor de desarrollo con mocks, utiliza el siguiente comando:

```bash
npm run dev:mock
```

## Construcción para Producción

Para construir la aplicación para producción, ejecuta:

```bash
npm run build
```

## Ejecución del Proyecto en Modo de Pruebas

Para iniciar el proyecto en modo de pruebas, utiliza el siguiente comando:

```bash
npm run test
```
