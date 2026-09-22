import type { CSSProperties, KeyboardEvent } from 'react';
export function accentStyle(color: string): CSSProperties { return { '--accent': color } as CSSProperties; }
export function Tabs<T extends string>({ label, items, selected, onSelect, className, panelId }: {
  label: string; items: { id: T; label: string; detail?: string; color?: string }[];
  selected: T; onSelect: (id: T) => void; className: 'route' | 'category'; panelId: string;
}) {
  function onKey(event: KeyboardEvent<HTMLButtonElement>, index: number) {
    const offset = event.key === 'ArrowRight' ? 1 : event.key === 'ArrowLeft' ? -1 : 0;
    const next = event.key === 'Home' ? 0 : event.key === 'End' ? items.length - 1 : (index + offset + items.length) % items.length;
    if (!offset && event.key !== 'Home' && event.key !== 'End') return;
    event.preventDefault(); onSelect(items[next].id);
    const buttons = event.currentTarget.parentElement?.querySelectorAll('button'); buttons?.[next]?.focus();
  }
  return <div className={`${className}-tabs`} role="tablist" aria-label={label}>
    {items.map((item, index) => <button key={item.id} type="button" role="tab" id={`${panelId}-tab-${item.id}`} aria-controls={panelId} aria-selected={item.id === selected} tabIndex={item.id === selected ? 0 : -1} className={`${className}-tab ${item.id === selected ? 'active' : ''}`} style={item.color ? accentStyle(item.color) : undefined} onClick={() => onSelect(item.id)} onKeyDown={event => onKey(event, index)}>
      {item.label}{item.detail && <small>{item.detail}</small>}
    </button>)}
  </div>;
}
