import Express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import cors from 'cors';
import path from 'path';
import { serverConfig } from '../config';
import fooRouter from './routes/foos';

// Initialize the Express app.
const app = new Express();

// Set Development modes checks.
const isDevMode = process.env.NODE_ENV === 'development' || false;
const isProdMode = process.env.NODE_ENV === 'production' || false;

// Apply middleware.
isDevMode && app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(cors());

// Set up end points.
app.use('/foos', fooRouter);
app.use('/', Express.static(path.join(__dirname, '../dist/public')));

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
