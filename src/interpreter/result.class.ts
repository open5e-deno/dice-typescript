import {ExpressionNode} from "../ast/expression-node.class.ts";
export class Result {
  readonly reducedExpression: ExpressionNode;
  readonly renderedExpression: string;
  readonly total: number;

  constructor(reducedExpression: ExpressionNode, renderedExpression: string, total: number) {
    this.reducedExpression = reducedExpression;
    this.renderedExpression = renderedExpression;
    this.total = total;
  }
}
