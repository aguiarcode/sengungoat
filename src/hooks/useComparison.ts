import { useState, useMemo } from 'react';
import type { MetricType, ComparisonResult } from '../types';
import { getOpponentById } from '../data/players';
import { cherryPick, countWins, countWinsForMetric } from '../engine/cherryPicker';
import { generateAnalysis } from '../engine/analysisGenerator';

export function useComparison(opponentId: string) {
  const [forcedMetric, setForcedMetric] = useState<MetricType | undefined>(undefined);

  const opponent = getOpponentById(opponentId);

  const result: ComparisonResult | null = useMemo(() => {
    if (!opponent) return null;

    const stats = cherryPick(opponent, forcedMetric);
    const { wins, total } = forcedMetric
      ? countWinsForMetric(opponent, forcedMetric)
      : countWins(opponent);

    const analysisText = generateAnalysis(opponent, stats, wins, total);

    return {
      opponent,
      stats,
      totalCategories: total,
      sengunWins: wins,
      analysisText,
    };
  }, [opponent, forcedMetric]);

  return {
    result,
    forcedMetric,
    setForcedMetric,
  };
}
