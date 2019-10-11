# Blog app backend - Node.js w/ Express

A simple Node.js server for a blog app.

## Starting the server

From the main directory run the following command: `npm start`
If you're using `yarn`, you can run the command: `yarn start`

## Other available scripts

If you're using `yarn`, for the following scripts you can replace the `npm run` portion with `yarn`.

### `npm run debug`

Allows you to start the server with debugging messages.

### `npm run migrate`

Migrates the tables for the generated models into the database defined in `src/config/index.js` under the `db` field.

### `npm run undo-migrate`

Drops the tables for the models in the database defined in `src/config/index.js` under the `db` field.

### `npm run seed`

Adds seed data into the database defined in `src/config/index.js` under the `db` field.

## Accompanying Frontend

The following [repo](https://github.com/wlovo/blog-app-frontend) contains a React-based Frontend that uses this backend for demonstration purposes.

## Defaults

If an environment file (.env) is not found, the following default values are used.

### Server

- `env: development`
- `port: 8000`
- `secret: secret`

### Database

- `host: 127.0.0.1`
- `port: 8889`
- `username: root`
- `password: root`
- `database: blog_app`
- `dialect: mysql`
