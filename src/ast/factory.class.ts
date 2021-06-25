import { ExpressionNode } from './expression-node.class.ts';
import { NodeType } from './node-type.enum.ts';

export class Factory {
  static create(type: NodeType) {
    return new ExpressionNode(type);
  }
}
