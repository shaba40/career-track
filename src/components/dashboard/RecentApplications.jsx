import { formatDate } from '../../utils/formatDate';

export function RecentApplications({ applications }) {
  return (
    <section className="panel">
      <h2>Recent Applications</h2>
      <ul className="stack-list">
        {applications.slice(0, 4).map((item) => (
          <li key={item.id}>
            <strong>{item.company}</strong>
            <span>{item.role}</span>
            <small>{formatDate(item.appliedDate)}</small>
          </li>
        ))}
      </ul>
    </section>
  );
}
