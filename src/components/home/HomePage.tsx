import { Link } from 'react-router-dom';
import { opponents, sengun } from '../../data/players';
import { cherryPick } from '../../engine/cherryPicker';
import './HomePage.css';

export function HomePage() {
  return (
    <div className="home-page">
      <div className="home-hero">
        <h1>Alperen Sengun: The Statistical Case</h1>
        <p className="home-subtitle">
          A rigorous, data-driven comparison of Alperen Sengun against the NBA's top centers.
          All statistics from the 2024-25 regular season.
        </p>
      </div>

      <div className="home-sengun-summary">
        <div className="sengun-photo">
          <img
            src={import.meta.env.BASE_URL + 'images/sengun.jpg'}
            alt="Alperen Sengun"
          />
        </div>
        <div className="sengun-info">
          <h2>
            <span className="sengun-name">{sengun.name}</span>
            <span className="sengun-team">{sengun.team}</span>
          </h2>
          <div className="sengun-meta">
            <span>Age: {sengun.age}</span>
            <span>GP: {sengun.gamesPlayed}</span>
            <span>MPG: {sengun.minutesPerGame}</span>
            <span>{sengun.stats.perGame.pts}/{sengun.stats.perGame.reb}/{sengun.stats.perGame.ast}</span>
          </div>
        </div>
      </div>

      <h2 className="section-title">Head-to-Head Comparisons</h2>
      <p className="text-muted text-small mb-3">
        Select any center to see a detailed statistical comparison.
      </p>

      <div className="player-grid">
        {opponents.map(opponent => {
          const stats = cherryPick(opponent);
          const wins = stats.length;
          return (
            <Link
              key={opponent.id}
              to={`/compare/${opponent.id}`}
              className="player-card"
            >
              <div className="card-header">
                <span className="card-name">{opponent.name}</span>
                <span className="card-team">{opponent.team}</span>
              </div>
              <div className="card-stats">
                <span>{opponent.stats.perGame.pts}/{opponent.stats.perGame.reb}/{opponent.stats.perGame.ast}</span>
                <span className="card-meta">
                  {opponent.gamesPlayed} GP | Age {opponent.age}
                </span>
              </div>
              <div className="card-result">
                <span className="win-count">
                  Sengun leads in {wins} categories
                </span>
                <span className="card-arrow">&rsaquo;</span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
