import { ExpressionNode } from '../ast/index.ts';

export class InterpreterError {
  constructor(public message: string, public expression: ExpressionNode, public stack: string = (new Error().stack ?? '')) { }
}
