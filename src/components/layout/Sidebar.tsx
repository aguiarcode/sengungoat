import { Link, useParams } from 'react-router-dom';
import { opponents } from '../../data/players';

export function Sidebar() {
  const { slug } = useParams();

  return (
    <aside className="sidebar">
      <div className="sidebar-section">
        <h3 className="sidebar-title">Compare vs.</h3>
        <ul className="sidebar-list">
          {opponents.map(p => (
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
        <p>All comparisons use 2024-25 regular season statistics.</p>
      </div>
    </aside>
  );
}
