export function isValidCell(char?: string): boolean {
  if (!char) return false;
  return /^[A-Z]$/.test(char) || '-|+@x'.includes(char);
}
