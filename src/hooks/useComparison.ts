import { useState, useMemo } from 'react';
import type { MetricType, ComparisonResult } from '../types';
import { getOpponentById } from '../data/players';
import { cherryPick } from '../engine/cherryPicker';
import { generateAnalysis } from '../engine/analysisGenerator';

export function useComparison(opponentId: string) {
  const [forcedMetric, setForcedMetric] = useState<MetricType | undefined>(undefined);

  const opponent = getOpponentById(opponentId);

  const result: ComparisonResult | null = useMemo(() => {
    if (!opponent) return null;

    const stats = cherryPick(opponent, forcedMetric);

    // Display record = cherry-picked stats only (Sengun always wins all shown)
    const sengunWins = stats.length;
    const totalCategories = stats.length;

    const analysisText = generateAnalysis(opponent, stats, sengunWins, totalCategories);

    return {
      opponent,
      stats,
      totalCategories,
      sengunWins,
      analysisText,
    };
  }, [opponent, forcedMetric]);

  return {
    result,
    forcedMetric,
    setForcedMetric,
  };
}
