import { createContext, useMemo, useState } from 'react';
import { mockApplications } from '../data/mockApplications';

export const ApplicationsContext = createContext(null);

export function ApplicationsProvider({ children }) {
  const [applications, setApplications] = useState(mockApplications);

  const addApplication = (application) => {
    const newApplication = {
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
      ...application,
    };

    setApplications((prev) => [newApplication, ...prev]);
  };

  const updateApplication = (id, updates) => {
    setApplications((prev) => prev.map((item) => (item.id === id ? { ...item, ...updates } : item)));
  };

  const removeApplication = (id) => {
    setApplications((prev) => prev.filter((item) => item.id !== id));
  };

  const value = useMemo(
    () => ({ applications, addApplication, updateApplication, removeApplication }),
    [applications]
  );

  return <ApplicationsContext.Provider value={value}>{children}</ApplicationsContext.Provider>;
}
