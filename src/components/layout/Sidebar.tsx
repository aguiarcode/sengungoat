import { Link, useParams } from 'react-router-dom';
import { currentOpponents, alltimeOpponents } from '../../data/players';

export function Sidebar() {
  const { slug } = useParams();

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Current (2024-25)</h3>
        <ul className="sidebar-list">
          {currentOpponents.map(p => (
            <li key={p.id} className={slug === p.id ? 'active' : ''}>
              <Link to={`/compare/${p.id}`}>
                {p.name}
                <span className="sidebar-team">{p.team}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section">
        <h3 className="sidebar-title">All-Time Greats</h3>
        <ul className="sidebar-list">
          {alltimeOpponents.map(p => (
            <li key={p.id} className={slug === p.id ? 'active' : ''}>
              <Link to={`/compare/${p.id}`}>
                {p.name}
                <span className="sidebar-team">{p.team}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="sidebar-section sidebar-note">
        <p>Current players use 2024-25 stats. Legends use career averages.</p>
      </div>
    </aside>
  );
}
