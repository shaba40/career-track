import { ApplicationForm } from '../components/applications/ApplicationForm';
import { useApplications } from '../hooks/useApplications';

export function NewApplicationPage() {
  const { addApplication } = useApplications();

  return (
    <section className="page-shell">
      <h2>New Application</h2>
      <ApplicationForm onSubmit={(payload) => addApplication(payload)} />
    </section>
  );
}
