import { Token } from '../lexer/index.ts';

export class ParserError {
  constructor(public message: string, public token: Token, public stackTrace: string) { }
}
