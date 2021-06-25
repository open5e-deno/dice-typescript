import { CharacterStream } from "./character-stream.interface.ts";

export class StringCharacterStream implements CharacterStream {
  private index = -1;

  constructor(private readonly input: string) {}

  getCurrentPosition(): number {
    return this.index;
  }

  getNextCharacter() {
    this.index = Math.min(this.index + 1, this.input.length);
    if (this.index >= this.input.length)return null;
    return this.input[this.index];
  }

  getCurrentCharacter() {
    if (this.index < 0 || this.index >= this.input.length)return null;
    return this.input[this.index];
  }

  peekNextCharacter() {
    if (this.index >= this.input.length)return null;
    return this.input[this.index + 1];
  }
}
