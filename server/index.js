import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import serverConfig from './config';
import fooRouter from './routes/foos';

// Initialize the Express app.
const app = new Express();

// Is this development mode?
const isDevMode = process.env.NODE_ENV === 'development' || false;

// Determine static, client-side file path.
const staticPath = isDevMode ? '../client/public' : '../dist/public';

// Apply middleware.
isDevMode && app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Set up end points.
app.use('/foos', fooRouter);
app.use('/', Express.static(path.join(__dirname, staticPath)));

// Connect database.
mongoose.connect(
  serverConfig.mongoURL,
  err => {
    if (err) {
      throw err;
    }
    console.log('Connected to the database.');
  }
);

// Run server.
app.listen(serverConfig.port, function() {
  console.log(`The server is now running on port ${serverConfig.port}.`);
});
