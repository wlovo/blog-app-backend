# Blog app backend - Node.js w/ Express

A simple Node.js server for a blog app.

## Starting the server

From the main directory run the following command: `yarn start`

## Other available scripts

- `yarn debug` allows you to start the server with debugging messages
- `yarn migrate` migrates the tables for the generated models into the database defined in `src/config/index.js` under the `db` field
- `yarn undo-migrate` drops the tables for the  models in the database defined in `src/config/index.js` under the `db` field
- `yarn seed` adds seed data into the database defined in `src/config/index.js` under the `db` field
