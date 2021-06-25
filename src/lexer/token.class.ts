import { TokenType } from "./token-type.enum.ts";

export class Token {
  constructor(
    public type: TokenType,
    public position: number,
    public value: string = '',
  ) {}
}
