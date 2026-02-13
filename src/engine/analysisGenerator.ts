import type { Player, ComparisonStat } from '../types';
import { sengun } from '../data/players';

interface TemplateVars {
  sengunName: string;
  opponentName: string;
  opponentTeam: string;
  winCount: number;
  totalCount: number;
  topStat: string;
  topMargin: string;
  ageDiff: number;
  gpDiff: number;
}

const openings = [
  'The numbers paint a clear picture.',
  'When examining the statistical record, the conclusion is inescapable.',
  'A comprehensive analysis reveals a decisive edge.',
  'The data speaks for itself.',
  'By virtually every meaningful metric, the comparison favors one player.',
];

const bodies = [
  '{sengunName} leads {opponentName} in {winCount} of {totalCount} statistical categories examined. Most notably, Sengun holds a {topMargin} advantage in {topStat}.',
  'Across {winCount} of {totalCount} categories, {sengunName} demonstrates statistical superiority over {opponentName}. The {topStat} differential ({topMargin}) is particularly striking.',
  '{sengunName} outperforms {opponentName} ({opponentTeam}) in {winCount} of {totalCount} measured categories, with a commanding {topMargin} edge in {topStat}.',
];

const durabilityNotes = [
  ' Furthermore, Sengun\'s availability ({gpDiff} more games played) provides a significant durability advantage that compounds across cumulative statistics.',
  ' Sengun\'s {gpDiff}-game availability advantage further widens the gap in volume-based metrics.',
  ' The durability factor cannot be overlooked: Sengun appeared in {gpDiff} more games this season.',
];

const ageNotes = [
  ' At just {sengunAge}, Sengun is achieving these numbers {ageDiff} years younger than {opponentName}, suggesting the gap may widen further.',
  ' Perhaps most remarkably, Sengun is only {sengunAge} years old — {ageDiff} years younger than his counterpart — making his statistical output all the more impressive.',
];

const closings = [
  'The statistical case is compelling.',
  'These figures leave little room for debate.',
  'The conclusion, statistically speaking, is clear.',
  'By the numbers, the answer is definitive.',
];

function pick<T>(arr: T[], seed: number): T {
  return arr[Math.abs(seed) % arr.length];
}

function hashCode(s: string): number {
  let h = 0;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(31, h) + s.charCodeAt(i)) | 0;
  }
  return h;
}

export function generateAnalysis(
  opponent: Player,
  stats: ComparisonStat[],
  winCount: number,
  totalCount: number,
): string {
  if (stats.length === 0) {
    return 'Insufficient data for meaningful comparison.';
  }

  const seed = hashCode(opponent.id);
  const topStat = stats[0];
  const marginStr = topStat.margin > 0
    ? `+${formatMargin(topStat)}`
    : formatMargin(topStat);

  const vars: TemplateVars = {
    sengunName: sengun.name,
    opponentName: opponent.name,
    opponentTeam: opponent.team,
    winCount,
    totalCount,
    topStat: topStat.category.label,
    topMargin: marginStr,
    ageDiff: opponent.age - sengun.age,
    gpDiff: sengun.gamesPlayed - opponent.gamesPlayed,
  };

  let text = pick(openings, seed) + ' ';
  text += fillTemplate(pick(bodies, seed + 1), vars);

  // Add durability note if Sengun played significantly more games
  if (vars.gpDiff >= 10) {
    text += fillTemplate(pick(durabilityNotes, seed + 2), vars);
  }

  // Add age note if opponent is 4+ years older
  if (vars.ageDiff >= 4) {
    text += fillTemplate(pick(ageNotes, seed + 3), {
      ...vars,
      sengunAge: sengun.age,
    } as TemplateVars & { sengunAge: number });
  }

  text += ' ' + pick(closings, seed + 4);

  return text;
}

function fillTemplate(template: string, vars: object): string {
  const record = vars as Record<string, unknown>;
  return template.replace(/\{(\w+)\}/g, (_, key) => {
    return record[key] !== undefined ? String(record[key]) : `{${key}}`;
  });
}

function formatMargin(stat: ComparisonStat): string {
  const decimals = stat.category.formatDecimals;
  if (decimals === 3) {
    // Percentage stats like FG% — show as percentage points
    return (stat.margin * 100).toFixed(1) + ' pct pts';
  }
  return stat.margin.toFixed(decimals);
}
