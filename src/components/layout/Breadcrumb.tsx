import { Link } from 'react-router-dom';

interface BreadcrumbProps {
  items: { label: string; to?: string }[];
}

export function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <div className="breadcrumb">
      <Link to="/">SegunGOAT</Link>
      {items.map((item, i) => (
        <span key={i}>
          <span>&rsaquo;</span>
          {item.to ? <Link to={item.to}>{item.label}</Link> : item.label}
        </span>
      ))}
    </div>
  );
}
