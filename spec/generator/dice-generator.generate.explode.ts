import * as Ast from "../../src/ast";
import * as Generator from "../../src/generator";

describe("DiceGenerator", () => {
    describe("generate", () => {
        it("generates a simple explosion (2d6!).", () => {
            const explode = Ast.Factory.create(Ast.NodeType.Explode)
                .setAttribute("compound", "no")
                .setAttribute("penetrate", "no");

            const dice = Ast.Factory.create(Ast.NodeType.Dice);
            dice.addChild(Ast.Factory.create(Ast.NodeType.Integer).setAttribute("value", 2));
            dice.addChild(Ast.Factory.create(Ast.NodeType.DiceSides).setAttribute("value", 6));

            explode.addChild(dice);

            const generator = new Generator.DiceGenerator();
            expect(generator.generate(explode)).toBe("2d6!");
        });
        it("generates a simple explosion (2d6!!).", () => {
            const explode = Ast.Factory.create(Ast.NodeType.Explode)
                .setAttribute("compound", "yes")
                .setAttribute("penetrate", "no");

            const dice = Ast.Factory.create(Ast.NodeType.Dice);
            dice.addChild(Ast.Factory.create(Ast.NodeType.Integer).setAttribute("value", 2));
            dice.addChild(Ast.Factory.create(Ast.NodeType.DiceSides).setAttribute("value", 6));

            explode.addChild(dice);

            const generator = new Generator.DiceGenerator();
            expect(generator.generate(explode)).toBe("2d6!!");
        });
        it("generates a simple explosion (2d6!p).", () => {
            const explode = Ast.Factory.create(Ast.NodeType.Explode)
                .setAttribute("compound", "no")
                .setAttribute("penetrate", "yes");

            const dice = Ast.Factory.create(Ast.NodeType.Dice);
            dice.addChild(Ast.Factory.create(Ast.NodeType.Integer).setAttribute("value", 2));
            dice.addChild(Ast.Factory.create(Ast.NodeType.DiceSides).setAttribute("value", 6));

            explode.addChild(dice);

            const generator = new Generator.DiceGenerator();
            expect(generator.generate(explode)).toBe("2d6!p");
        });
        it("generates a simple explosion (2d6!!p).", () => {
            const explode = Ast.Factory.create(Ast.NodeType.Explode)
                .setAttribute("compound", "yes")
                .setAttribute("penetrate", "yes");

            const dice = Ast.Factory.create(Ast.NodeType.Dice);
            dice.addChild(Ast.Factory.create(Ast.NodeType.Integer).setAttribute("value", 2));
            dice.addChild(Ast.Factory.create(Ast.NodeType.DiceSides).setAttribute("value", 6));

            explode.addChild(dice);

            const generator = new Generator.DiceGenerator();
            expect(generator.generate(explode)).toBe("2d6!!p");
        });
    });
});