export function StatusChart({ stats }) {
  return (
    <section className="panel chart-card">
      <h2>Status Overview</h2>
      <ul className="status-list">
        <li>Applied: {stats.applied}</li>
        <li>Interviews: {stats.interviews}</li>
        <li>Offers: {stats.offers}</li>
        <li>Rejected: {stats.rejected}</li>
      </ul>
    </section>
  );
}
