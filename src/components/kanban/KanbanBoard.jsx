import { useApplications } from '../../hooks/useApplications';

const lanes = ['Applied', 'Interview', 'Offer', 'Rejected'];

export function KanbanBoard() {
  const { applications } = useApplications();

  return (
    <div className="kanban-board">
      {lanes.map((lane) => (
        <section key={lane} className="kanban-column">
          <h3>{lane}</h3>
          {applications
            .filter((item) => item.status === lane)
            .map((item) => (
              <article key={item.id} className="kanban-card">
                <strong>{item.company}</strong>
                <p>{item.role}</p>
              </article>
            ))}
        </section>
      ))}
    </div>
  );
}
