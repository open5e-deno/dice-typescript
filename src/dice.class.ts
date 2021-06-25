import { DiceInterpreter } from "./interpreter/dice-interpreter.class.ts";
import { FunctionDefinitionList } from "./interpreter/function-definition-list.class.ts";

import { DiceLexer } from "./lexer/dice-lexer.class.ts";
import { Parser } from "./parser/index.ts";
import { DiceParser } from "./parser/dice-parser.class.ts";
import { RandomProvider } from "./random/index.ts";
import { InterpreterOptions } from "./interpreter/interpreter-options.interface.ts";
import { CharacterStream } from "./lexer/character-stream.interface.ts";
import { Lexer } from "./lexer/lexer.interface.ts";
import { DiceResult } from "./interpreter/dice-result.class.ts";
import { DiceGenerator } from "./generator/dice-generator.class.ts";

export class Dice {
  constructor(
    protected functions?: FunctionDefinitionList,
    protected randomProvider?: RandomProvider,
    protected options?: InterpreterOptions,
  ) {}

  roll(input: string | CharacterStream): DiceResult {
    const lexer = this.createLexer(input);
    const parser = this.createParser(lexer);
    const interpreter = this.createInterpreter();
    const parseResult = parser.parse();
    return interpreter.interpret(parseResult.root!);
  }

  protected createLexer(input: string | CharacterStream): Lexer {
    return new DiceLexer(input);
  }

  protected createParser(lexer: Lexer): Parser {
    return new DiceParser(lexer);
  }

  protected createInterpreter(): DiceInterpreter {
    return new DiceInterpreter(
      this.functions,
      this.randomProvider,
      this.createGenerator(),
      this.options,
    );
  }

  protected createGenerator(): DiceGenerator {
    return new DiceGenerator();
  }
}
