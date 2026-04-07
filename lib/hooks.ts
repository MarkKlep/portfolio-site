/**
 * Custom React Hooks for the Portfolio Application
 * 
 * Demonstrates knowledge of:
 * - React Hooks
 * - Async data fetching
 * - Error handling
 * - Type safety
 */

import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';

interface UseAsyncState<T> {
  data: T | null;
  loading: boolean;
  error: Error | null;
}

/**
 * Custom hook for async data fetching
 * 
 * @param url - API endpoint to fetch
 * @param dependencies - Re-fetch when these change
 * @returns Loading state, data, and error
 */
export function useAsync<T>(url: string, dependencies: any[] = []): UseAsyncState<T> {
  const [state, setState] = useState<UseAsyncState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    const controller = new AbortController();

    const fetchData = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true }));
        const response = await axios.get<T>(url, {
          signal: controller.signal,
        });
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        if (!axios.isCancel(error)) {
          setState({
            data: null,
            loading: false,
            error: error instanceof Error ? error : new Error('Unknown error'),
          });
        }
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, dependencies);

  return state;
}

/**
 * Hook for tracking page analytics
 */
export function usePageTracker() {
  useEffect(() => {
    const path = window.location.pathname;
    
    axios.post('/api/track', {
      page: path,
    }).catch((err) => console.error('Failed to track page:', err));
  }, []);
}

/**
 * Hook for managing form state and submission
 */
export function useForm<T extends Record<string, any>>(
  initialState: T,
  onSubmit: (data: T) => Promise<void>
) {
  const [formData, setFormData] = useState(initialState);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }, []);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      setLoading(true);
      setError(null);
      setSuccess(false);

      try {
        await onSubmit(formData);
        setFormData(initialState);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    },
    [formData, onSubmit, initialState]
  );

  return {
    formData,
    handleChange,
    handleSubmit,
    loading,
    error,
    success,
    reset: () => setFormData(initialState),
  };
}
