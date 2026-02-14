export type MetricType = 'perGame' | 'per36' | 'per100' | 'totals';

export interface PlayerStats {
  perGame: Record<string, number>;
  per36: Record<string, number>;
  per100: Record<string, number>;
  totals: Record<string, number>;
}

export interface Player {
  id: string;
  name: string;
  team: string;
  era: 'current' | 'alltime';
  age: number;
  gamesPlayed: number;
  minutesPerGame: number;
  stats: PlayerStats;
}

export interface StatCategory {
  key: string;
  label: string;
  shortLabel: string;
  description: string;
  higherIsBetter: boolean;
  /** 0 = well-known (PTS, REB), 1 = common, 2 = advanced, 3 = obscure */
  obscurityScore: number;
  availableMetrics: MetricType[];
  formatDecimals: number;
}

export interface ComparisonStat {
  category: StatCategory;
  metric: MetricType;
  sengunValue: number;
  opponentValue: number;
  margin: number;
  marginPercent: number;
}

export interface ComparisonResult {
  opponent: Player;
  stats: ComparisonStat[];
  totalCategories: number;
  sengunWins: number;
  analysisText: string;
}
