import { pageLabels } from '../../utils/constants';

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">CareerTrack</div>
      <div className="nav-links">
        {pageLabels.map((item) => (
          <a key={item.id} href="#">
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
