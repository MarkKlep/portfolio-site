/**
 * HTTP Request/Response Utilities
 * 
 * Common utilities for API routes showing best practices:
 * - Consistent error responses
 * - Request validation
 * - Type-safe responses
 */

export interface ApiError {
  error: string;
  code?: string;
  details?: Record<string, any>;
}

export interface ApiSuccess<T> {
  success: true;
  data: T;
  timestamp: string;
}

export function sendSuccess<T>(data: T) {
  return {
    success: true,
    data,
    timestamp: new Date().toISOString(),
  } as ApiSuccess<T>;
}

export function sendError(error: string, code?: string, details?: Record<string, any>): ApiError {
  return {
    error,
    code,
    details,
  };
}

export class ValidationError extends Error {
  constructor(public field: string, message: string) {
    super(message);
    this.name = 'ValidationError';
  }
}

export function validateEmail(email: string): boolean {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

export function validateUrl(url: string): boolean {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
}

export function sanitizeString(str: string): string {
  return str.trim().slice(0, 1000);
}
