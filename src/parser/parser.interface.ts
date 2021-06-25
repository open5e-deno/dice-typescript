import { ParseResult } from './parse-result.class.ts';

export interface Parser {
  parse(): ParseResult;
}
