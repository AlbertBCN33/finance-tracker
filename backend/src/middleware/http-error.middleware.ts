import { ApiError } from '@finance-tracker/models';
import { Request, Response, NextFunction } from 'express';

export function errorHandler(
  err: ApiError,
  req: Request,
  res: Response,
  next: NextFunction
) {
  const status = err.status ?? 500;
  const name = err.name ?? 'API';
  const message = err.message || 'Internal server error';

  console.error(`[Error] ${err.name}: ${message}`);

  res.status(status).json({
    success: false,
    status,
    name,
    message,
    error: err.stack,
  });
}
