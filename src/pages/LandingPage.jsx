import { Header } from '../components/layout/Header';
import { Navbar } from '../components/layout/Navbar';

export function LandingPage() {
  return (
    <div className="page-shell">
      <Navbar />
      <Header />
      <main className="hero-section">
        <div>
          <h2>Keep everything moving</h2>
          <p>Follow every application, interview, and next step from a single polished dashboard.</p>
        </div>
      </main>
    </div>
  );
}
