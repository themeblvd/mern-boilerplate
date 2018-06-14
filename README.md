# MERN Boilerplate

Managing a project structure that handles the whole stack involves a lot of different descisions to be made, with a lot of potential variations... especially in the full-stack JavaScript world. So here's my working MERN boilerplate.

If you're looking for simpler starter for just setting up a client-side, static React app, check out my [React boilerplate](https://github.com/themeblvd/react-boilerplate).

## Quick Start

1. Clone this repository.
2. Install the dependencies by running `npm install`.
3. Run `npm run start` to start the development server and watch for changes.
4. View development server at `http://localhost:8080`.

## Project Structure

* `dist/` - **Final build, for production.**
    * `server.js` - Runs the server in production.
    * `public/` - Contains client-side React app, served statically by `server.js`.
* `client/` - **Client-side React app.**
    * `assets/` - Images, SCSS files, etc.
    * `components/` - React components.
    * `store/` - Redux store files.
    * `public/` - Compiled React app, for development.
* `server/` - **Server files, utilizing Express and Mongoose.**
    * `models/` -  Mongoose schemas.
    * `routes/` -  API routes, organized by the endpoint.
* `index.js` - Entry point for running development server, or testing production build. Uses port `8080`.

## Terminal Commands

### Primary Commands

These are the commands you'll use the most.

* `npm run start` - Start the development server and watch for file changes.
* `npm run build` - Build the entire, final `/dist` package for production.

### Additional Commands

Here are some additional commands that come in handy.

* `npm run client` - Compile the development client-side files once.
* `npm run server` - Start the development server (see note below).
* `npm run build:client` - Build the client-side files within `/dist` once.
* `npm run build:server` - Build the server file within `/dist` once.
* `npm run server:prod` - Start the production server, to test the final build (see note below).
* `npm run format` - Apply stylistic code formatting to project's JavaScript files.
* `npm run js-lint` - Check for JavaScript linting errors.
* `npm run js-lint:fix` - Allow JavaScript linter to fix what it can, automatically.
* `npm run report` - Generates `./report-client.txt` and `./report-server.txt` with stats about modules used.

*Note: `npm run server` is helpful when working on just server files. It runs the development server without Webpack watching for changes on the client-side files. Because we transpile with babel on the fly during development, our ES6 server code will run without needing Webpack.*

*Note: `npm run server:prod` is helpful for testing the production build. On the actual production server, you'll want to run `/dist/server.js` with some sort of process manager, like [Forever](https://expressjs.com/en/advanced/pm.html#forever).*
