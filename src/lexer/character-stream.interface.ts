export interface CharacterStream {
  getCurrentCharacter(): string | null;
  getCurrentPosition(): number;
  getNextCharacter(): string | null;
  peekNextCharacter(): string | null;
}
