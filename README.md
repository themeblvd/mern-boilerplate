# MERN Boilerplate

Here's my working MERN boilerplate. I'll continue to tweak things.

## Important Terminal Commands

### Automated Build

Use these commands to watch for changes and re-compile files automatically.

If you're making both client and server changes, it's helpful to run both of the following commands simultaneously in different terminal windows.

* `npm run watch:client` &mdash; Automatically compiles client (for development).
* `npm run watch:server` &mdash; Automatically compiles server (for development).

### Manual Build

Use these commands when working through issues or making big changes.

* `npm run build` &mdash; Build both server and client (for development).
* `npm run build:client` &mdash; Compiles client (for development).
* `npm run build:server` &mdash; Compiles server (for development).

### Development Server

* `npm run server` &mdash; Start the development server at `http://localhost:8080`.

### Production Build

* `npm run build:production` &mdash; Compiles both server and client (for production).

### JavaScript Linting

* `npm js-lint` &mdash; Check for linting errors.
* `npm js-lint:fix` &mdash; Allow linter to fix what it can automatically.
