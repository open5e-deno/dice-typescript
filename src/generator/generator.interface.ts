import * as Ast from '../ast/index.ts';

export interface Generator<TResult> {
  generate(expression: Ast.ExpressionNode): TResult;
}
