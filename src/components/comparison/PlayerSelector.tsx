import { Link } from 'react-router-dom';
import { currentOpponents, alltimeOpponents } from '../../data/players';

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
        <optgroup label="Current (2024-25)">
          {currentOpponents.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.team})
            </option>
          ))}
        </optgroup>
        <optgroup label="All-Time Greats">
          {alltimeOpponents.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} ({p.team})
            </option>
          ))}
        </optgroup>
      </select>
      <Link to="/" className="back-link">&larr; All comparisons</Link>
    </div>
  );
}
