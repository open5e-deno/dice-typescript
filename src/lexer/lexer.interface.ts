import { Token } from "./token.class.ts";

export interface Lexer {
  peekNextToken(): Token;
  getNextToken(): Token;
}
