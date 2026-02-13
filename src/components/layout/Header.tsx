import { Link } from 'react-router-dom';
import { useTheme } from '../../hooks/useTheme';

export function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="header-logo">
          <span className="logo-icon">🐐</span>
          <span className="logo-text">SegunGOAT</span>
          <span className="logo-subtitle">Statistical Analysis</span>
        </Link>
        <nav className="header-nav">
          <Link to="/">Player Comparisons</Link>
          <Link to="/methodology">Methodology</Link>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '☾' : '☀'}
          </button>
        </nav>
      </div>
    </header>
  );
}
