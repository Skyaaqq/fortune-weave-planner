export function delimited(rows: readonly (readonly (string | number)[])[], separator: ',' | '\t'): string {
  return rows.map(row => row.map(value => {
    const text = String(value);
    return text.includes(separator) || /["\r\n]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
  }).join(separator)).join('\r\n');
}
