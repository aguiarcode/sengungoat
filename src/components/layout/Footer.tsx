import { opponents } from '../../data/players';

export function Footer() {
  const record = opponents.length;

  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p className="footer-streak">
          Sengun is {record}-0 in head-to-head statistical comparisons across current and all-time centers.
        </p>
        <p className="footer-disclaimer">
          Current players use 2024-25 stats. Legends use career averages. Methodology: objective, peer-reviewed, and totally unbiased.
        </p>
        <p className="footer-links">
          <a href="https://www.basketball-reference.com" target="_blank" rel="noopener noreferrer">
            Data via Basketball Reference
          </a>
          {' | '}
          <a href="https://github.com/aguiarcode" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {' | '}
          SengunGOAT &copy; {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
