import { useMemo } from 'react';
import { ApplicationsChart } from '../components/statistics/ApplicationsChart';
import { StatusChart } from '../components/statistics/StatusChart';
import { StatisticsCard } from '../components/statistics/StatisticsCard';
import { useApplications } from '../hooks/useApplications';
import { calculateStatistics } from '../utils/calculateStatistics';

export function StatisticsPage() {
  const { applications } = useApplications();
  const stats = useMemo(() => calculateStatistics(applications), [applications]);

  return (
    <section className="page-shell">
      <h2>Statistics</h2>
      <div className="summary-grid">
        <StatisticsCard title="Total" value={stats.total} />
        <StatisticsCard title="Interviews" value={stats.interviews} />
        <StatisticsCard title="Offers" value={stats.offers} />
        <StatisticsCard title="Success Rate" value={`${stats.successRate}%`} />
      </div>
      <div className="panel-grid">
        <ApplicationsChart applications={applications} />
        <StatusChart stats={stats} />
      </div>
    </section>
  );
}
