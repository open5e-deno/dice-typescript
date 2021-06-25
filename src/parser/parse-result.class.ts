import * as Ast from '../ast/index.ts';
import { ParserError } from './error-message.class.ts';

export class ParseResult {
  root?: Ast.ExpressionNode;
  errors: ParserError[] = [];
}
