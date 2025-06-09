import { useState } from 'react';
import { apiFunctions } from '../lib/api';

export const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleApiCall = async <T>(
    apiFunction: () => Promise<T>,
    onSuccess?: (data: T) => void
  ) => {
    try {
      setLoading(true);
      setError(null);
      const data = await apiFunction();
      if (onSuccess) {
        onSuccess(data);
      }
      return data;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : 'An error occurred';
      setError(errorMessage);
      throw err;
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    error,
    // User functions
    createUser: (userData: any) => handleApiCall(() => apiFunctions.createUser(userData)),
    getUser: (username: string) => handleApiCall(() => apiFunctions.getUser(username)),
    listUsers: () => handleApiCall(() => apiFunctions.listUsers()),
    
    // Invoice functions
    uploadInvoice: (file: File) => handleApiCall(() => apiFunctions.uploadInvoice(file)),
    
    // GST functions
    uploadGSTInvoices: (file: File) => handleApiCall(() => apiFunctions.uploadGSTInvoices(file)),
  };
}; 