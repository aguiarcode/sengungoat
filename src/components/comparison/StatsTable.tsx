import type { Player, ComparisonStat } from '../../types';
import { getMetricLabel } from '../../engine/metricSelector';

interface StatsTableProps {
  stats: ComparisonStat[];
  opponent: Player;
}

function formatValue(value: number, decimals: number): string {
  if (decimals === 3) {
    // Percentage — show as .XXX
    return value.toFixed(3);
  }
  if (decimals === 0) {
    return value.toFixed(0);
  }
  return value.toFixed(decimals);
}

export function StatsTable({ stats, opponent }: StatsTableProps) {
  if (stats.length === 0) {
    return <p className="text-muted">No statistical advantages found for this metric type.</p>;
  }

  return (
    <div className="stats-table-wrapper">
      <table className="stats-table">
        <thead>
          <tr>
            <th>Statistic</th>
            <th>Metric</th>
            <th>Sengun</th>
            <th>{opponent.name.split(' ').pop()}</th>
            <th>Diff</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((stat) => {
            const diff = stat.category.higherIsBetter
              ? stat.sengunValue - stat.opponentValue
              : stat.opponentValue - stat.sengunValue;
            const diffStr = diff > 0 ? `+${formatDiff(diff, stat.category.formatDecimals)}` : formatDiff(diff, stat.category.formatDecimals);

            return (
              <tr key={stat.category.key}>
                <td title={stat.category.description}>
                  {stat.category.shortLabel}
                  <span className="stat-full-name"> {stat.category.label}</span>
                </td>
                <td className="metric-label">{getMetricLabel(stat.metric)}</td>
                <td className="sengun-wins">
                  {formatValue(stat.sengunValue, stat.category.formatDecimals)}
                </td>
                <td>
                  {formatValue(stat.opponentValue, stat.category.formatDecimals)}
                </td>
                <td className="diff-cell sengun-wins">
                  {diffStr}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

function formatDiff(value: number, decimals: number): string {
  if (decimals === 3) {
    return (value * 100).toFixed(1);
  }
  if (decimals === 0) {
    return value.toFixed(0);
  }
  return value.toFixed(decimals);
}
