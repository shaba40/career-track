import { useMemo, useState } from 'react';
import { ApplicationsProvider } from './context/ApplicationsContext';
import { LandingPage } from './pages/LandingPage';
import { DashboardPage } from './pages/DashboardPage';
import { ApplicationsPage } from './pages/ApplicationsPage';
import { NewApplicationPage } from './pages/NewApplicationPage';
import { KanbanPage } from './pages/KanbanPage';
import { StatisticsPage } from './pages/StatisticsPage';
import { NotFoundPage } from './pages/NotFoundPage';
import { Navbar } from './components/layout/Navbar';
import { Sidebar } from './components/layout/Sidebar';
import { Footer } from './components/layout/Footer';
import { pageLabels } from './utils/constants';
import './styles/variables.css';
import './styles/index.css';
import './styles/components.css';

function App() {
  const [activePage, setActivePage] = useState('dashboard');

  const pageMap = useMemo(
    () => ({
      dashboard: <DashboardPage />,
      applications: <ApplicationsPage />,
      new: <NewApplicationPage />,
      kanban: <KanbanPage />,
      statistics: <StatisticsPage />,
    }),
    []
  );

  return (
    <ApplicationsProvider>
      <div className="app-shell">
        <Navbar />
        <div className="layout">
          <Sidebar />
          <main>
            <div className="page-switcher">
              {pageLabels.map((item) => (
                <button key={item.id} type="button" className={`button ${activePage === item.id ? 'button-primary' : 'button-secondary'}`} onClick={() => setActivePage(item.id)}>
                  {item.label}
                </button>
              ))}
            </div>
            {activePage === 'home' ? <LandingPage /> : pageMap[activePage] || <NotFoundPage />}
          </main>
        </div>
        <Footer />
      </div>
    </ApplicationsProvider>
  );
}

export default App;
