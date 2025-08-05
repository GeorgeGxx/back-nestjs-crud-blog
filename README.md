# Backend for NestJS CRUD Blog 💻

Este proyecto es el backend de una aplicación de blog que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Borrar) desde la perspectiva de un administrador o superusuario.

<strong>Tecnologías Utilizadas: Node.js NestJS TypeORM PostgreSQL</strong>

## Requisitos Previos 

Antes de iniciar, asegúrate de tener instalado Node.js (que incluye npm) y PostgreSQL en tu sistema.

## Configuración del Proyecto

Clonar el Repositorio Para obtener el proyecto, clona el repositorio desde GitHub: `git clone -b master https://github.com/GeorgeGxx/back-nestjs-crud-blog.git` & cd 'back-nestjs-crud-blog'

## Instalación de Dependencias

Instala las dependencias necesarias ejecutando: `npm install`

## Configuración de la Base de Datos

Deberás crear una base de datos PostgreSQL antes de iniciar la aplicación y asegurarte de que las credenciales de conexión coincidan con las configuradas en tu archivo .env.

<strong> Ejemplo de configuración de la base de datos:</strong>

    POSTGRES_HOST: localhost
    POSTGRES_PORT: 5432
    POSTGRES_USER: example_user
    POSTGRES_PASSWORD: example_password
    POSTGRES_DB: example_db

Archivo <strong>.env</strong>

Copia el archivo dotenv.example a un nuevo archivo llamado .env y actualiza las variables según tu entorno local:

    plaintext
        Copy code
            POSTGRES_HOST=localhost
            POSTGRES_PORT=5432
            POSTGRES_USER=example_user
            POSTGRES_PASSWORD=example_password
            POSTGRES_DB=example_db
            PORT_APP=5500
            FRONTEND_URL='http://localhost:3000'

## Ejecutar la Aplicación

Para iniciar la aplicación en modo de desarrollo, usa:

`npm run start:dev`

Para ejecutar la aplicación en modo de producción, puedes usar:

`npm run start:prod`

Para ejecutar la aplicacion en Docker, puedes usar:

    docker compose up --build
    docker compose up -d --build
    docker compose up -d db
    docker compose up -d app
    docker compose up -d
    docker compose down -v
    docker logs -f app
    docker logs -f db
    docker build -t nest-app:latest . -f Dockerfile
    ...

## Características

### CRUD Completo:

- Crea 
- Lee 
- Actualiza 
- Elimina posts 
- Búsqueda Avanzada: Filtra posts por autor, título o contenido.

### Futuras mejoras con implementacion de:

- ValidationPipes.
- Mejorar la interfaz a un diseño más avanzado.
- Implementar autenticación con JWT.
- Establecer propietarios (usuarios) de posts para definir permisos de edición y borrado.

Por el momento suponemos que esta siendo usado por un Admin o superusuario con permiso absoluto.

### Contribuciones 

Las contribuciones son bienvenidas. Si tienes mejoras o correcciones, por favor considera enviar un pull request. Una estrella a este repositorio también es apreciada. Sigueme en GitHub para más proyectos y actualizaciones.