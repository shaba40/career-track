export function KanbanCard({ application }) {
  return (
    <article className="kanban-card">
      <strong>{application.company}</strong>
      <p>{application.role}</p>
    </article>
  );
}
