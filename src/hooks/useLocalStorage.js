import { useState, useEffect } from 'react';

/**
 * Custom hook for syncing state with localStorage
 * Persists state across page refreshes
 *
 * @param {string} key - localStorage key
 * @param {*} initialValue - Initial value if no stored value exists
 * @returns {Array} [storedValue, setValue] - Similar to useState
 */
export function useLocalStorage(key, initialValue) {
  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // Get from local storage by key
      const item = window.localStorage.getItem(key);
      // Parse stored json or if none return initialValue
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      // If error also return initialValue
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that
  // persists the new value to localStorage.
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      // Save state
      setStoredValue(valueToStore);
      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      // A more advanced implementation would handle the error case
      console.error(`Error saving ${key} to localStorage:`, error);
    }
  };

  // Sync state changes to localStorage
  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (error) {
      console.error(`Error syncing ${key} to localStorage:`, error);
    }
  }, [key, storedValue]);

  return [storedValue, setValue];
}

/**
 * Hook to remove an item from localStorage
 * @param {string} key - localStorage key to remove
 */
export function useLocalStorageRemove() {
  return (key) => {
    try {
      window.localStorage.removeItem(key);
    } catch (error) {
      console.error(`Error removing ${key} from localStorage:`, error);
    }
  };
}

/**
 * Hook to clear all localStorage
 */
export function useLocalStorageClear() {
  return () => {
    try {
      window.localStorage.clear();
    } catch (error) {
      console.error('Error clearing localStorage:', error);
    }
  };
}
