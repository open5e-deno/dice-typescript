import { ExpressionNode } from '../ast/index.ts';
import { DiceInterpreter } from './dice-interpreter.class.ts';
import { InterpreterError } from './error-message.class.ts';

export type FunctionDefinition = (interpreter: DiceInterpreter, functionNode: ExpressionNode, errors: InterpreterError[]) => number;
