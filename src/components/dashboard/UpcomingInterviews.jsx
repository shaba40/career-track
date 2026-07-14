import { formatDate } from '../../utils/formatDate';

export function UpcomingInterviews({ applications }) {
  return (
    <section className="panel">
      <h2>Upcoming Interviews</h2>
      <ul className="stack-list">
        {applications
          .filter((item) => item.interviewDate)
          .slice(0, 3)
          .map((item) => (
            <li key={item.id}>
              <strong>{item.company}</strong>
              <span>{item.role}</span>
              <small>{formatDate(item.interviewDate)}</small>
            </li>
          ))}
      </ul>
    </section>
  );
}
