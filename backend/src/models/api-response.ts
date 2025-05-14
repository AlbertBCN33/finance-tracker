export interface ApiSuccess<T> {
  success: true;
  name: string;
  message: string | null;
  data: T;
}

export interface ApiError extends Error {
  success: false;
  status: number;
  name: string;
  message: string;
  error: string;
}

export class ApiErrorResponse implements ApiError {
  success: false;
  status: number;
  name: string;
  message: string;
  error: string;

  constructor(status: number, name: string, message: string, error: string) {
    this.success = false;
    this.status = status;
    this.name = name;
    this.message = message;
    this.error = error;
  }
}

export type ApiResponse<T> = ApiSuccess<T> | ApiError;
