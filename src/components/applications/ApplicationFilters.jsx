export function ApplicationFilters({ value, onChange }) {
  return (
    <div className="filters">
      <label>
        <span>Search</span>
        <input value={value} onChange={(event) => onChange(event.target.value)} placeholder="Search company or role" />
      </label>
    </div>
  );
}
