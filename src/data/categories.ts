import type { StatCategory } from '../types';

export const statCategories: StatCategory[] = [
  // ── Basic Box Score (obscurity 0) ──
  { key: 'pts', label: 'Points', shortLabel: 'PTS', description: 'Points scored', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'reb', label: 'Rebounds', shortLabel: 'REB', description: 'Total rebounds', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'ast', label: 'Assists', shortLabel: 'AST', description: 'Assists', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'stl', label: 'Steals', shortLabel: 'STL', description: 'Steals', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'blk', label: 'Blocks', shortLabel: 'BLK', description: 'Blocks', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fg', label: 'Field Goals Made', shortLabel: 'FG', description: 'Field goals made', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fga', label: 'Field Goals Attempted', shortLabel: 'FGA', description: 'Field goals attempted', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fgPct', label: 'Field Goal %', shortLabel: 'FG%', description: 'Field goal percentage', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'ft', label: 'Free Throws Made', shortLabel: 'FT', description: 'Free throws made', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fta', label: 'Free Throws Attempted', shortLabel: 'FTA', description: 'Free throws attempted', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'ftPct', label: 'Free Throw %', shortLabel: 'FT%', description: 'Free throw percentage', higherIsBetter: true, obscurityScore: 0, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'oreb', label: 'Offensive Rebounds', shortLabel: 'ORB', description: 'Offensive rebounds', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'dreb', label: 'Defensive Rebounds', shortLabel: 'DRB', description: 'Defensive rebounds', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'tov', label: 'Turnovers', shortLabel: 'TOV', description: 'Turnovers', higherIsBetter: false, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'pf', label: 'Personal Fouls', shortLabel: 'PF', description: 'Personal fouls', higherIsBetter: false, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'mp', label: 'Minutes Played', shortLabel: 'MP', description: 'Minutes played', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'totals'], formatDecimals: 1 },

  // ── Shooting Splits (obscurity 1) ──
  { key: 'tsPct', label: 'True Shooting %', shortLabel: 'TS%', description: 'True shooting percentage', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'efgPct', label: 'Effective FG%', shortLabel: 'eFG%', description: 'Effective field goal percentage', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'fg2', label: '2-Point FG Made', shortLabel: '2PM', description: '2-point field goals made', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fg2a', label: '2-Point FG Attempted', shortLabel: '2PA', description: '2-point field goals attempted', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fg2Pct', label: '2-Point FG%', shortLabel: '2P%', description: '2-point field goal percentage', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'fg3', label: '3-Point FG Made', shortLabel: '3PM', description: '3-point field goals made', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },
  { key: 'fg3a', label: '3-Point FG Attempted', shortLabel: '3PA', description: '3-point field goals attempted', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['perGame', 'per36', 'per100', 'totals'], formatDecimals: 1 },

  // ── Advanced (obscurity 2) ──
  { key: 'per', label: 'Player Efficiency Rating', shortLabel: 'PER', description: 'Player efficiency rating', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'ws', label: 'Win Shares', shortLabel: 'WS', description: 'Win shares', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame', 'totals'], formatDecimals: 1 },
  { key: 'ows', label: 'Offensive Win Shares', shortLabel: 'OWS', description: 'Offensive win shares', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame', 'totals'], formatDecimals: 1 },
  { key: 'dws', label: 'Defensive Win Shares', shortLabel: 'DWS', description: 'Defensive win shares', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame', 'totals'], formatDecimals: 1 },
  { key: 'ws48', label: 'Win Shares per 48', shortLabel: 'WS/48', description: 'Win shares per 48 minutes', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 3 },
  { key: 'bpm', label: 'Box Plus/Minus', shortLabel: 'BPM', description: 'Box plus/minus', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'obpm', label: 'Offensive BPM', shortLabel: 'OBPM', description: 'Offensive box plus/minus', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'dbpm', label: 'Defensive BPM', shortLabel: 'DBPM', description: 'Defensive box plus/minus', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'vorp', label: 'Value Over Replacement', shortLabel: 'VORP', description: 'Value over replacement player', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame', 'totals'], formatDecimals: 1 },

  // ── Percentage-based advanced (obscurity 2-3) ──
  { key: 'astPct', label: 'Assist %', shortLabel: 'AST%', description: 'Percentage of teammate FGs assisted while on floor', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'rebPct', label: 'Rebound %', shortLabel: 'TRB%', description: 'Percentage of available rebounds grabbed', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'orebPct', label: 'Offensive Rebound %', shortLabel: 'ORB%', description: 'Percentage of available offensive rebounds grabbed', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'drebPct', label: 'Defensive Rebound %', shortLabel: 'DRB%', description: 'Percentage of available defensive rebounds grabbed', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'stlPct', label: 'Steal %', shortLabel: 'STL%', description: 'Percentage of opponent possessions ending in steal', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'blkPct', label: 'Block %', shortLabel: 'BLK%', description: 'Percentage of opponent 2PA blocked', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'tovPct', label: 'Turnover %', shortLabel: 'TOV%', description: 'Turnovers per 100 plays', higherIsBetter: false, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },
  { key: 'usgPct', label: 'Usage Rate', shortLabel: 'USG%', description: 'Percentage of team plays used', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 1 },

  // ── Durability (obscurity 1) ──
  { key: 'gp', label: 'Games Played', shortLabel: 'GP', description: 'Games played', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['totals'], formatDecimals: 0 },
  { key: 'gs', label: 'Games Started', shortLabel: 'GS', description: 'Games started', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['totals'], formatDecimals: 0 },
  { key: 'totalMinutes', label: 'Total Minutes', shortLabel: 'TotalMP', description: 'Total minutes played in season', higherIsBetter: true, obscurityScore: 1, availableMetrics: ['totals'], formatDecimals: 0 },

  // ── Miscellaneous / Obscure (obscurity 3) ──
  { key: 'dblDbl', label: 'Double-Doubles', shortLabel: 'DD2', description: 'Double-doubles', higherIsBetter: true, obscurityScore: 3, availableMetrics: ['totals'], formatDecimals: 0 },
  { key: 'trpDbl', label: 'Triple-Doubles', shortLabel: 'TD3', description: 'Triple-doubles', higherIsBetter: true, obscurityScore: 3, availableMetrics: ['totals'], formatDecimals: 0 },
  { key: 'astToTov', label: 'Assist-to-Turnover Ratio', shortLabel: 'AST/TO', description: 'Assist-to-turnover ratio', higherIsBetter: true, obscurityScore: 2, availableMetrics: ['perGame'], formatDecimals: 2 },
  { key: 'ftr', label: 'Free Throw Rate', shortLabel: 'FTr', description: 'FTA per FGA', higherIsBetter: true, obscurityScore: 3, availableMetrics: ['perGame'], formatDecimals: 3 },
];
