import { ExpressionNode } from '../ast/index.ts';
import { InterpreterError } from '../interpreter/error-message.class.ts';
import { Result } from './result.class.ts';

export class DiceResult extends Result {
  readonly successes: number;
  readonly failures: number;
  readonly errors: InterpreterError[];

  constructor(
    expression: ExpressionNode,
    renderedExpression: string,
    total: number,
    successes: number,
    failures: number,
    errors: InterpreterError[]
  ) {
    super(expression, renderedExpression, total);
    this.successes = successes;
    this.failures = failures;
    this.errors = errors;
  }
}
