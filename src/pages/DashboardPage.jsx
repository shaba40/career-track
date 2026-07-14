import { useMemo, useState } from 'react';
import { SummaryCard } from '../components/dashboard/SummaryCard';
import { RecentApplications } from '../components/dashboard/RecentApplications';
import { UpcomingInterviews } from '../components/dashboard/UpcomingInterviews';
import { useApplications } from '../hooks/useApplications';
import { calculateStatistics } from '../utils/calculateStatistics';
import { ApplicationModal } from '../components/applications/ApplicationModal';
import { Button } from '../components/common/Button';

export function DashboardPage() {
  const { applications, addApplication } = useApplications();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const stats = useMemo(() => calculateStatistics(applications), [applications]);

  return (
    <section className="page-shell">
      <div className="page-header">
        <h2>Dashboard</h2>
        <Button onClick={() => setIsModalOpen(true)}>Add Application</Button>
      </div>
      <div className="summary-grid">
        <SummaryCard title="Applications" value={stats.total} accent="accent-blue" />
        <SummaryCard title="Interviews" value={stats.interviews} accent="accent-green" />
        <SummaryCard title="Offers" value={stats.offers} accent="accent-gold" />
        <SummaryCard title="Success Rate" value={`${stats.successRate}%`} accent="accent-purple" />
      </div>
      <div className="panel-grid">
        <RecentApplications applications={applications} />
        <UpcomingInterviews applications={applications} />
      </div>
      {isModalOpen ? (
        <ApplicationModal onClose={() => setIsModalOpen(false)} onSubmit={(payload) => { addApplication(payload); setIsModalOpen(false); }} />
      ) : null}
    </section>
  );
}
