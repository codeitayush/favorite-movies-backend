import 'dotenv/config';
import express, { type Request, type Response, type NextFunction } from 'express';
import cors from 'cors';
import favoritesRouter from './routes/favorites';

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/favorites', favoritesRouter);

// Basic health check
app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', service: 'favorite-movies-backend' });
});

// Friendly root route
app.get('/', (_req: Request, res: Response) => {
  res.json({
    service: 'favorite-movies-backend',
    status: 'ok',
    message: 'Welcome to Favorite Movies & TV Shows API',
    endpoints: {
      health: '/health',
      favorites: {
        list: '/api/favorites?page=1&limit=10',
        get: '/api/favorites/:id',
        create: '/api/favorites',
        update: '/api/favorites/:id',
        delete: '/api/favorites/:id'
      }
    }
  });
});

// Error handler
// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
  const status = typeof err?.status === 'number' ? err.status : 500;
  const message = err?.message || 'Internal Server Error';
  const response: Record<string, unknown> = { error: message };
  if (process.env.NODE_ENV !== 'production' && err?.stack) {
    response.stack = err.stack;
  }
  res.status(status).json(response);
});

if (process.env.NODE_ENV !== 'test') {
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

export default app;
