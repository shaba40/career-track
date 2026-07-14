export function KanbanColumn({ title, children }) {
  return (
    <section className="kanban-column">
      <h3>{title}</h3>
      {children}
    </section>
  );
}
