import * as Parser from "../../src/parser";

describe("Parser", () => {
    describe("constructor", () => {
        it("does not throw.", () => {
            expect(() => {
                const parser = new Parser.Parser();
            }).not.toThrow();
        });
    });
    describe("parse", () => {
        // TODO: Write tests.
        it("Face", () => {
            const parser = new Parser.Parser();
            console.log(JSON.stringify(parser.parse("")));
        });
    });
});