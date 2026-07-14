import { useContext } from 'react';
import { ApplicationsContext } from '../context/ApplicationsContext';

export function useApplications() {
  const context = useContext(ApplicationsContext);

  if (!context) {
    throw new Error('useApplications must be used within an ApplicationsProvider');
  }

  return context;
}
