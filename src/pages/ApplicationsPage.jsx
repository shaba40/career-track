import { useMemo, useState } from 'react';
import { ApplicationCard } from '../components/applications/ApplicationCard';
import { ApplicationDetails } from '../components/applications/ApplicationDetails';
import { ApplicationFilters } from '../components/applications/ApplicationFilters';
import { ApplicationModal } from '../components/applications/ApplicationModal';
import { Button } from '../components/common/Button';
import { useApplications } from '../hooks/useApplications';

export function ApplicationsPage() {
  const { applications, addApplication, updateApplication, removeApplication } = useApplications();
  const [query, setQuery] = useState('');
  const [selectedId, setSelectedId] = useState(applications[0]?.id || null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredApplications = useMemo(() => {
    const term = query.toLowerCase();
    return applications.filter((item) => `${item.company} ${item.role}`.toLowerCase().includes(term));
  }, [applications, query]);

  const selectedApplication = filteredApplications.find((item) => item.id === selectedId) || filteredApplications[0] || null;

  const handleSubmit = (payload) => {
    if (selectedApplication) {
      updateApplication(selectedApplication.id, payload);
    } else {
      addApplication(payload);
    }
    setIsModalOpen(false);
  };

  return (
    <section className="page-shell">
      <div className="page-header">
        <h2>Applications</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add Application</Button>
      </div>
      <ApplicationFilters value={query} onChange={setQuery} />
      <div className="application-layout">
        <div className="application-list">
          {filteredApplications.map((application) => (
            <ApplicationCard key={application.id} application={application} onSelect={setSelectedId} />
          ))}
        </div>
        <div className="details-stack">
          <ApplicationDetails application={selectedApplication} />
          {selectedApplication ? (
            <Button variant="secondary" onClick={() => removeApplication(selectedApplication.id)}>
              Remove
            </Button>
          ) : null}
        </div>
      </div>
      {isModalOpen ? (
        <ApplicationModal application={selectedApplication} onClose={() => setIsModalOpen(false)} onSubmit={handleSubmit} />
      ) : null}
    </section>
  );
}
