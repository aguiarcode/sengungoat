import type { MetricType, Player, StatCategory } from '../types';

export interface MetricResult {
  metric: MetricType;
  sengunValue: number;
  opponentValue: number;
  margin: number;
  marginPercent: number;
  sengunWins: boolean;
}

const metricLabels: Record<MetricType, string> = {
  perGame: 'Per Game',
  per36: 'Per 36 Min',
  per100: 'Per 100 Poss',
  totals: 'Totals',
};

export function getMetricLabel(metric: MetricType): string {
  return metricLabels[metric];
}

/**
 * Evaluate a single stat category for a single metric type.
 * Returns null if data is missing for either player.
 */
function evaluateMetric(
  category: StatCategory,
  metric: MetricType,
  sengun: Player,
  opponent: Player,
): MetricResult | null {
  const sVal = sengun.stats[metric][category.key];
  const oVal = opponent.stats[metric][category.key];

  if (sVal === undefined || oVal === undefined) return null;

  const rawMargin = category.higherIsBetter ? sVal - oVal : oVal - sVal;
  const denom = Math.max(Math.abs(oVal), 0.001);
  const marginPct = (rawMargin / denom) * 100;

  return {
    metric,
    sengunValue: sVal,
    opponentValue: oVal,
    margin: rawMargin,
    marginPercent: marginPct,
    sengunWins: rawMargin > 0,
  };
}

/**
 * For a given stat category, find the metric type where Sengun has the
 * biggest advantage (or smallest disadvantage). Returns all evaluated metrics
 * sorted by how favorable they are for Sengun.
 */
export function findBestMetric(
  category: StatCategory,
  sengun: Player,
  opponent: Player,
): MetricResult[] {
  const results: MetricResult[] = [];

  for (const metric of category.availableMetrics) {
    const result = evaluateMetric(category, metric, sengun, opponent);
    if (result) results.push(result);
  }

  // Sort by margin descending (most favorable for Sengun first)
  results.sort((a, b) => b.margin - a.margin);
  return results;
}

/**
 * For a given stat and a forced metric type, evaluate it.
 * Falls back to the best available metric if the forced one has no data.
 */
export function evaluateForMetric(
  category: StatCategory,
  forcedMetric: MetricType,
  sengun: Player,
  opponent: Player,
): MetricResult | null {
  // Try the forced metric first
  const result = evaluateMetric(category, forcedMetric, sengun, opponent);
  if (result) return result;

  // Fall back to first available
  for (const m of category.availableMetrics) {
    const fallback = evaluateMetric(category, m, sengun, opponent);
    if (fallback) return fallback;
  }

  return null;
}
