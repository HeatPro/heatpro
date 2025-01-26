import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';
import * as SecureStore from 'expo-secure-store';
import { IPContextType } from './types';

const IPContext = createContext<IPContextType | undefined>(undefined);
const IP_STORAGE_KEY = 'cached_ip_address';
const DEFAULT_IP = '127.0.0.1';

interface IPProviderProps {
  children: ReactNode;
}

export const IPProvider: React.FC<IPProviderProps> = ({ children }) => {
  const [ipAddress, setIPAddressState] = useState<string>(DEFAULT_IP);
  const [isLoading, setIsLoading] = useState(true);

  // Load the cached IP address when the component mounts
  useEffect(() => {
    loadCachedIP();
  }, []);

  const loadCachedIP = async () => {
    try {
      const cachedIP = await SecureStore.getItemAsync(IP_STORAGE_KEY);
      if (cachedIP) {
        setIPAddressState(cachedIP);
      }
    } catch (error) {
      console.error('Error loading cached IP:', error);
    } finally {
      setIsLoading(false);
    }
  };

  // Wrapper for setIPAddress that also caches the value
  const setIPAddress = async (newIP: string) => {
    try {
      await SecureStore.setItemAsync(IP_STORAGE_KEY, newIP);
      setIPAddressState(newIP);
    } catch (error) {
      console.error('Error caching IP:', error);
      // Still update state even if caching fails
      setIPAddressState(newIP);
    }
  };

  if (isLoading) {
    // You might want to return a loading indicator here
    return null;
  }

  return (
    <IPContext.Provider value={{ ipAddress, setIPAddress }}>
      {children}
    </IPContext.Provider>
  );
};

export const useIPAddress = (): IPContextType => {
  const context = useContext(IPContext);
  if (context === undefined) {
    throw new Error('useIPAddress must be used within an IPProvider');
  }
  return context;
};