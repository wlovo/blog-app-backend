# Blog app backend - Node.js w/ Express

A simple Node.js server for a blog app.

## Starting the server

From the main directory run the following command: `yarn start`

## Other available scripts

### `yarn debug`

Allows you to start the server with debugging messages.

### `yarn migrate`

Migrates the tables for the generated models into the database defined in `src/config/index.js` under the `db` field.

### `yarn undo-migrate`

Drops the tables for the  models in the database defined in `src/config/index.js` under the `db` field.

### `yarn seed`

Adds seed data into the database defined in `src/config/index.js` under the `db` field.

## Accompanying Frontend

The following [repo](https://github.com/wlovo/blog-app-frontend) contains a React-based Frontend that uses this backend for demonstration purposes.
