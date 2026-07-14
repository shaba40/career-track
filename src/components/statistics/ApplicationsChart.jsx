export function ApplicationsChart({ applications }) {
  const values = applications.map((item) => item.progress);
  const max = Math.max(...values, 1);

  return (
    <section className="panel chart-card">
      <h2>Progress Snapshot</h2>
      <div className="chart-row">
        {applications.map((item) => (
          <div key={item.id} className="chart-bar-wrap">
            <div className="chart-bar" style={{ height: `${(item.progress / max) * 100}%` }} />
            <span>{item.company}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
