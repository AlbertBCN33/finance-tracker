import express from 'express';
import * as dotenv from 'dotenv';
dotenv.config();
import * as path from 'path';
import cors from 'cors';

import routes from '../src/routes/index';
import { errorHandler } from './middleware/http-error.middleware';
import { setupSwagger } from './config/swagger';

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.port) : 3333;

const app = express();
app.use(cors());
app.use(express.json());

// Load assets
app.use('/assets', express.static(path.join(__dirname, 'assets')));

// Routes registration
app.use('/api', routes);
app.get('/api', (req, res) => {
  res.send({ message: 'The backend is running!' });
});

// Setup Swagger
setupSwagger(app);

// Server
const server = app.listen(port, host, () => {
  console.log(`Listening at http://${host}:${port}/api`);
  console.log(`Swagger docs at http://${host}:${port}/api/docs`);
});
server.on('error', console.error);

// Error handler (⚠️ Should go LAST)
app.use(errorHandler);
