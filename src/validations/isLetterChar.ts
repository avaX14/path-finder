export default function isLetterChar(char: string): boolean {
  return /^[A-Z]$/.test(char);
}
