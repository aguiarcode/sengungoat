import { opponents } from '../../data/players';

export function Footer() {
  const record = opponents.length;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-streak">
          Sengun is {record}-0 in head-to-head statistical comparisons this season.
        </p>
        <p className="footer-disclaimer">
          All statistics sourced from the 2024-25 NBA season. Methodology: objective, peer-reviewed, and totally unbiased.
        </p>
        <p className="footer-links">
          <a href="https://www.basketball-reference.com" target="_blank" rel="noopener noreferrer">
            Data via Basketball Reference
          </a>
          {' | '}
          SegunGOAT &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
