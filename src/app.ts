import express from 'express';
import { setValidatorRoutes } from './routes/validatorRoutes';
import { errorHandler } from './middleware/errorHandler';

const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Set up routes
setValidatorRoutes(app);

// Error handling middleware
app.use(errorHandler);

export default app;