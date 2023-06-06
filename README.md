# MI API EXPRESS - PRISMA

### Built with

- Node.js
- Express.js
- Primsa ORM
- Postgres SQL

### Descripción

Esta API permite soporta las principales funciones CRUD, la cual se encuentra conectada a una base de datos SQL Postgres.
La API soporta las siguinetes direcciones:

- Obtener todos los registros de la base de datos.

http://localhost:3001/api/persons - (GET)

- Obtener la cantidad de registros en la DB y la fecha de la solicitud.

http://localhost:3001/api/info - (GET)

- Obtener un resgistro especifico de la DB.

http://localhost:3001/api/persons/id - (GET)

- Eliminar un resgistro especifico de la DB.

http://localhost:3001/api/persons/id - (DELETE)

- Agregar un resgistro a la DB.

http://localhost:3001/api/persons - (POST)
