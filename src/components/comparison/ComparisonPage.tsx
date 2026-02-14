import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useComparison } from '../../hooks/useComparison';
import { Breadcrumb } from '../layout/Breadcrumb';
import { StatsTable } from './StatsTable';
import { MetricToggle } from './MetricToggle';
import { AnalysisBox } from './AnalysisBox';
import { PlayerSelector } from './PlayerSelector';
import { sengun } from '../../data/players';
import './ComparisonPage.css';
import './PlayerSelector.css';

export function ComparisonPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { result, forcedMetric, setForcedMetric } = useComparison(slug || '');

  if (!result) {
    return (
      <div>
        <Breadcrumb items={[{ label: 'Comparison' }]} />
        <p>Player not found. Select a player from the sidebar.</p>
      </div>
    );
  }

  const { opponent, stats, sengunWins, totalCategories, analysisText } = result;

  useEffect(() => {
    document.title = `Sengun vs ${opponent.name} | SegunGOAT`;
    return () => { document.title = 'SegunGOAT | The Greatest Of All Time (Statistically Speaking)'; };
  }, [opponent.name]);

  return (
    <div className="comparison-page">
      <Breadcrumb items={[
        { label: 'Comparisons', to: '/' },
        { label: `vs. ${opponent.name}` },
      ]} />

      <div className="comparison-header">
        <div className="comparison-player sengun-side">
          <h2>{sengun.name}</h2>
          <div className="player-meta">
            <span className="player-team">{sengun.team}</span>
            <span>Age {sengun.age}</span>
            <span>{sengun.gamesPlayed} GP</span>
            <span>{sengun.minutesPerGame} MPG</span>
          </div>
          <div className="player-line">
            {sengun.stats.perGame.pts} PTS | {sengun.stats.perGame.reb} REB | {sengun.stats.perGame.ast} AST
          </div>
        </div>

        <div className="comparison-vs">
          <span className="vs-text">vs</span>
          <div className="vs-record">
            <span className="vs-wins">{sengunWins}</span>
            <span className="vs-sep">-</span>
            <span className="vs-losses">{totalCategories - sengunWins}</span>
          </div>
        </div>

        <div className="comparison-player opponent-side">
          <h2>{opponent.name}</h2>
          <div className="player-meta">
            <span className="player-team">{opponent.team}</span>
            <span>Age {opponent.age}</span>
            <span>{opponent.gamesPlayed} GP</span>
            <span>{opponent.minutesPerGame} MPG</span>
          </div>
          <div className="player-line">
            {opponent.stats.perGame.pts} PTS | {opponent.stats.perGame.reb} REB | {opponent.stats.perGame.ast} AST
          </div>
        </div>
      </div>

      <PlayerSelector
        currentId={opponent.id}
        onChange={(id) => navigate(`/compare/${id}`)}
      />

      <MetricToggle
        activeMetric={forcedMetric}
        onSelect={setForcedMetric}
      />

      <div className="comparison-note text-xs text-muted mb-2">
        Comparing {stats.length} key statistical categories.
        {!forcedMetric && ' Optimal metric type selected per category for most meaningful comparison.'}
      </div>

      <StatsTable stats={stats} opponent={opponent} />

      <AnalysisBox text={analysisText} />
    </div>
  );
}
