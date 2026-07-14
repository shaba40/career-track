export function SummaryCard({ title, value, accent }) {
  return (
    <article className={`summary-card ${accent}`}>
      <h3>{title}</h3>
      <p>{value}</p>
    </article>
  );
}
