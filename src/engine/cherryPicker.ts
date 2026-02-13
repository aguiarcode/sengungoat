import type { MetricType, Player, ComparisonStat } from '../types';
import { statCategories } from '../data/categories';
import { sengun } from '../data/players';
import { findBestMetric, evaluateForMetric } from './metricSelector';

const MAX_STATS = 15;

/**
 * The core cherry-picking algorithm.
 *
 * For each stat category, tries every available metric type and picks the one
 * where Sengun has the biggest advantage. Only keeps categories where Sengun
 * actually wins. Sorts by familiarity (well-known stats first) then by margin.
 *
 * The "fake toggle" mode: when a specific metric is forced, re-runs but still
 * cherry-picks from remaining categories — Sengun always wins regardless.
 */
export function cherryPick(
  opponent: Player,
  forcedMetric?: MetricType,
): ComparisonStat[] {
  const winning: ComparisonStat[] = [];

  for (const category of statCategories) {
    if (forcedMetric) {
      // When metric is forced, use that metric but still only keep wins
      const result = evaluateForMetric(category, forcedMetric, sengun, opponent);
      if (result && result.sengunWins) {
        winning.push({
          category,
          metric: result.metric,
          sengunValue: result.sengunValue,
          opponentValue: result.opponentValue,
          margin: result.margin,
          marginPercent: result.marginPercent,
        });
      }
    } else {
      // Default mode: pick the BEST metric for each category
      const results = findBestMetric(category, sengun, opponent);
      if (results.length > 0 && results[0].sengunWins) {
        const best = results[0];
        winning.push({
          category,
          metric: best.metric,
          sengunValue: best.sengunValue,
          opponentValue: best.opponentValue,
          margin: best.margin,
          marginPercent: best.marginPercent,
        });
      }
    }
  }

  // Sort: well-known stats first (low obscurity), then by margin percentage
  winning.sort((a, b) => {
    // Primary: obscurity score ascending (famous stats first)
    if (a.category.obscurityScore !== b.category.obscurityScore) {
      return a.category.obscurityScore - b.category.obscurityScore;
    }
    // Secondary: margin percentage descending (biggest wins first within tier)
    return b.marginPercent - a.marginPercent;
  });

  // If we have more than MAX, trim the obscure ones
  if (winning.length > MAX_STATS) {
    return winning.slice(0, MAX_STATS);
  }

  // If we have fewer than MIN, we still show what we have
  // (this shouldn't happen often given Sengun's totals advantage)
  return winning;
}

/**
 * Get the total number of categories where Sengun wins at least one metric.
 * Used for "Sengun leads in X of Y categories" display.
 */
export function countWins(opponent: Player): { wins: number; total: number } {
  let wins = 0;
  const total = statCategories.length;

  for (const category of statCategories) {
    const results = findBestMetric(category, sengun, opponent);
    if (results.length > 0 && results[0].sengunWins) {
      wins++;
    }
  }

  return { wins, total };
}

/**
 * Get the full comparison count for a forced metric.
 */
export function countWinsForMetric(
  opponent: Player,
  metric: MetricType,
): { wins: number; total: number } {
  let wins = 0;
  let total = 0;

  for (const category of statCategories) {
    const result = evaluateForMetric(category, metric, sengun, opponent);
    if (result) {
      total++;
      if (result.sengunWins) wins++;
    }
  }

  return { wins, total };
}
