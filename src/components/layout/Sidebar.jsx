import { pageLabels } from '../../utils/constants';

export function Sidebar() {
  return (
    <aside className="sidebar">
      <h2>Overview</h2>
      <ul>
        {pageLabels.map((item) => (
          <li key={item.id}>{item.label}</li>
        ))}
      </ul>
    </aside>
  );
}
