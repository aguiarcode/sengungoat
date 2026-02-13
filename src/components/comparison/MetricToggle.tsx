import type { MetricType } from '../../types';

interface MetricToggleProps {
  activeMetric: MetricType | undefined;
  onSelect: (metric: MetricType | undefined) => void;
}

const options: { value: MetricType | undefined; label: string }[] = [
  { value: undefined, label: 'Best Available' },
  { value: 'perGame', label: 'Per Game' },
  { value: 'per36', label: 'Per 36' },
  { value: 'per100', label: 'Per 100 Poss' },
  { value: 'totals', label: 'Totals' },
];

export function MetricToggle({ activeMetric, onSelect }: MetricToggleProps) {
  return (
    <div className="metric-toggle">
      {options.map((opt) => (
        <button
          key={opt.label}
          className={activeMetric === opt.value ? 'active' : ''}
          onClick={() => onSelect(opt.value)}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
