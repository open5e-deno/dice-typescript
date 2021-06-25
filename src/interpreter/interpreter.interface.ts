import * as Ast from '../ast/index.ts';

export interface Interpreter<TResult> {
  interpret(expression: Ast.ExpressionNode): TResult;
}
