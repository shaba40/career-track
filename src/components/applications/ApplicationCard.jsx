import { formatDate } from '../../utils/formatDate';
import { statusStyles } from '../../utils/constants';

export function ApplicationCard({ application, onSelect }) {
  return (
    <article className="application-card" onClick={() => onSelect(application)}>
      <div className="card-top">
        <h3>{application.company}</h3>
        <span className={`status-pill ${statusStyles[application.status] || 'status-applied'}`}>{application.status}</span>
      </div>
      <p>{application.role}</p>
      <div className="meta-row">
        <span>{application.location}</span>
        <span>{formatDate(application.appliedDate)}</span>
      </div>
    </article>
  );
}
