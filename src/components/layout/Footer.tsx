export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
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
