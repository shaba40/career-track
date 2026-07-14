import { formatDate } from '../../utils/formatDate';

export function ApplicationDetails({ application }) {
  if (!application) {
    return <p>Select an application to view details.</p>;
  }

  return (
    <section className="details-card">
      <h3>{application.company}</h3>
      <p>{application.role}</p>
      <ul>
        <li>Status: {application.status}</li>
        <li>Location: {application.location}</li>
        <li>Salary: {application.salary}</li>
        <li>Applied: {formatDate(application.appliedDate)}</li>
        <li>Interview: {formatDate(application.interviewDate)}</li>
      </ul>
      <p>{application.notes}</p>
    </section>
  );
}
