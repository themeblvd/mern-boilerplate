# MERN Boilerplate

Here's my working MERN boilerplate. I'll continue to tweak things.

## Important Terminal Commands

### Automated Build

Use these commands to watch for changes and recompile files automatically.

* `npm run watch:client` &mdash; Automatically compiles client (for development).
* `npm run watch:server` &mdash; Automatically compiles server (for development).

*Notes: If you're making both client and server changes, it's helpful to run both of the following commands simultaneously in different terminal windows.*

### Manual Build

Use these commands when working through issues or making big changes.

* `npm run build` &mdash; Build both server and client (for development).
* `npm run build:client` &mdash; Compiles client (for development).
* `npm run build:server` &mdash; Compiles server (for development).

### Production Build

* `npm run build:production` &mdash; Compiles both server and client (for production).

### Development Server

Use this command to start the development server. This will use `nodemon` so that the server automatically refreshes when it sees changes made.

* `npm run server` &mdash; Start the development server at `http://localhost:8080`.

*Note: The development server runs from `/dist` directory; so the server and client must be compiled for this to work.*

### JavaScript Linting

* `npm js-lint` &mdash; Check for linting errors.
* `npm js-lint:fix` &mdash; Allow linter to fix what it can automatically.
