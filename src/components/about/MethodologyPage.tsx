import { useEffect } from 'react';
import { Breadcrumb } from '../layout/Breadcrumb';
import './MethodologyPage.css';

export function MethodologyPage() {
  useEffect(() => {
    document.title = 'Methodology | SegunGOAT';
    return () => { document.title = 'SengunGOAT'; };
  }, []);

  return (
    <div className="methodology-page">
      <Breadcrumb items={[{ label: 'Methodology' }]} />

      <h1>Methodology</h1>
      <p className="methodology-subtitle">
        Our rigorous approach to statistical player comparison
      </p>

      <section className="methodology-section">
        <h2>Data Sources</h2>
        <p>
          All statistics are sourced directly from the 2024-25 NBA regular season,
          as recorded by Basketball Reference. No statistics have been fabricated,
          modified, or adjusted in any way. Every number on this site is real.
        </p>
      </section>

      <section className="methodology-section">
        <h2>Comparison Framework</h2>
        <p>
          Our proprietary comparison engine evaluates players across approximately
          45 statistical categories, encompassing traditional box score metrics,
          advanced analytics, shooting splits, and durability indicators.
        </p>
        <p>
          For each statistical category, we select the <strong>most appropriate
          metric type</strong> (per-game, per-36 minutes, per-100 possessions, or
          season totals) based on which best captures the player's true contribution.
          This ensures comparisons are contextually meaningful rather than arbitrarily
          standardized.
        </p>
      </section>

      <section className="methodology-section">
        <h2>Metric Selection</h2>
        <p>
          Different statistics tell different stories depending on the lens through
          which they are viewed. A player who plays 33 minutes per game should not
          be penalized in per-game statistics when compared to a player averaging 35
          minutes. Similarly, season totals appropriately reward availability and
          durability — qualities that are essential to team success but often
          overlooked in rate-based comparisons.
        </p>
        <p>
          Our engine dynamically selects the metric type that provides the most
          meaningful comparison for each individual statistic, ensuring a fair and
          comprehensive evaluation.
        </p>
      </section>

      <section className="methodology-section">
        <h2>Category Selection</h2>
        <p>
          Not all statistics are equally informative. Our algorithm prioritizes
          well-known, broadly accepted metrics (points, rebounds, assists) before
          incorporating more specialized advanced statistics. Categories are also
          weighted by the magnitude of the performance differential, ensuring that
          trivially small advantages do not overwhelm the presentation.
        </p>
        <p>
          The display is capped at 10-15 categories to maintain clarity and prevent
          information overload.
        </p>
      </section>

      <section className="methodology-section">
        <h2>Objectivity & Reproducibility</h2>
        <p>
          This analysis is fully automated and deterministic. Given the same input
          data, the engine will always produce the same results. No manual overrides,
          editorial judgments, or subjective adjustments are applied at any stage of
          the process.
        </p>
        <p>
          The metric toggle on each comparison page allows users to override the
          engine's metric selection and view comparisons under a single, uniform
          metric type. The results remain consistent regardless of the chosen
          perspective.
        </p>
      </section>

      <section className="methodology-section">
        <h2>Peer Review</h2>
        <p>
          This methodology has been reviewed by a panel of independent statistical
          analysts who confirmed that all data points are accurate and that the
          comparison framework, while perhaps <em>unusually favorable</em> to certain
          player profiles, contains no factual errors.
        </p>
      </section>

      <p className="methodology-disclaimer">
        SegunGOAT is a satirical project. All stats are real.
      </p>
    </div>
  );
}
