import { opponents } from '../../data/players';

interface PlayerSelectorProps {
  currentId: string;
  onChange: (id: string) => void;
}

export function PlayerSelector({ currentId, onChange }: PlayerSelectorProps) {
  return (
    <div className="player-selector">
      <label htmlFor="opponent-select">Compare against: </label>
      <select
        id="opponent-select"
        value={currentId}
        onChange={(e) => onChange(e.target.value)}
      >
        {opponents.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name} ({p.team})
          </option>
        ))}
      </select>
    </div>
  );
}
