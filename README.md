# MERN Boilerplate

Here's my working MERN boilerplate. I'll continue to tweak things.

## Terminal Commands

### Primary Commands

These are the commands you'll use the most.

* `npm run start` - Start the development server and watch for file changes.
* `npm run build` - Build the entire, final `/dist` package for production.

### Additional Commands

Here are some additional commands that come in handy.

* `npm run client` - Compile the development client-side files once.
* `npm run server` - Start the development server (see note below).
* `npm run build:client` - Built the client-side files only within `/dist`.
* `npm run build:server` - Built the server file only within `/dist`.
* `npm run server:prod` - Start the production server, to test the final build (see note below).
* `npm run js-lint` - Check for JavaScript linting errors.
* `npm run js-lint:fix` - Allow JavaScript linter to fix what it can, automatically.

*Note: `npm run server` is helpful when working on just server files. It runs the development server without Webpack watching for changes on the client-side files. Because we transpile babel on the fly during development, this is all we need.*

*Note: `npm run server:prod` is helpful for testing the production build. On the actual production server, you'll want to run `/dist/server.js` with some sort of process manager, like [Forever](https://expressjs.com/en/advanced/pm.html#forever).*
