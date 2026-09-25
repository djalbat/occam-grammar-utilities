"use strict";

const { arrayUtilities } = require("necessary"),
      { parserUtilities } = require("occam-parsers"),
      { partsUtilities } = require("../lib/index");  ///

const { first } = arrayUtilities,
      { rulesFromBNF } = parserUtilities,
      { retrieveLeftRecursiveRuleNames } = partsUtilities;

describe.only("retrieveLeftRecursiveRuleNames", () => {
  describe("a terminal part", () => {
    const bnf = `
  
      S ::= "e" ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a rule name part", () => {
    const bnf = `
  
      S ::= A ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a nullified terminal part", () => {
    const bnf = `
  
      S ::= "e"* ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a nullified rule name part", () => {
    const bnf = `
  
      S ::= A? ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("an isolated terminal part part", () => {
    const bnf = `
  
      S ::= ("a") ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("an isolated rule name part part ", () => {
    const bnf = `
  
      S ::= (A) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("an committed terminal part part", () => {
    const bnf = `
  
      S ::= \`"a" ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("an committed rule name part part ", () => {
    const bnf = `
  
      S ::= \`A ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a one or more terminal parts part", () => {
    const bnf = `
  
      S ::= "a"+ ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a one or more rule name parts part", () => {
    const bnf = `
  
      S ::= A+ ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a squence of two terminal parts", () => {
    const bnf = `
  
      S ::= ( "a" "b" ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a squence of two rule name parts", () => {
    const bnf = `
  
      S ::= ( A B ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a squence of one terminal part followed by one rule name part", () => {
    const bnf = `
  
      S ::= ( "e" A ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a squence of one rule name part followed by one terminal part", () => {
    const bnf = `
  
      S ::= ( A "e" ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a squence of two nullified rule name parts", () => {
    const bnf = `
  
      S ::= ( A? B? ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length two", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A", "B"]);
    });
  });

  describe("a squence of one nullified terminal part followed by one rule name part", () => {
    const bnf = `
  
      S ::= ( "e"? A ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a squence of one nullified rule name part followed by one rule name part", () => {
    const bnf = `
  
      S ::= ( A? B ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length two", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A", "B"]);
    });
  });

  describe("a squence of one nullified terminal part followed by one nullified rule name part", () => {
    const bnf = `
  
      S ::= ( "e"? A? ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a choice of two terminal parts", () => {
    const bnf = `
  
      S ::= ( "a" | "b" ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an empty array", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.isEmpty(leftRecursiveNames);
    });
  });

  describe("a choice of two rule name parts", () => {
    const bnf = `
  
      S ::= ( A | B ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length two", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A", "B"]);
    });
  });

  describe("a choice of one terminal part and one rule name part", () => {
    const bnf = `
  
      S ::= ( "e" | A ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a choice of one rule name part and  one terminal part", () => {
    const bnf = `
  
      S ::= ( A | "e" ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns true with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isTrue(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a choice of two nullified rule name parts", () => {
    const bnf = `
  
      S ::= ( A? | B? ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length two", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A", "B"]);
    });
  });

  describe("a choice of one nullified terminal part and one rule name part", () => {
    const bnf = `
  
      S ::= ( "e"? | A ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });

  describe("a choice of one nullified rule name part and one rule name part", () => {
    const bnf = `
  
      S ::= ( A? | B ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length two", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A", "B"]);
    });
  });

  describe("a choice of one nullified terminal part and one nullified rule name part", () => {
    const bnf = `
  
      S ::= ( "e"? | A? ) ;
        
    `;

    let part;

    before(() => {
      part = partFromBNF(bnf);
    });

    it("returns false with an array of length one", () => {
      const leftRecursiveNames = [],
            terminate = retrieveLeftRecursiveRuleNames(part, leftRecursiveNames);

      assert.isFalse(terminate);

      assert.deepEqual(leftRecursiveNames, ["A"]);
    });
  });
});

function partFromBNF(bnf) {
  const definition = definitionFromBNF(bnf),
        parts = definition.getParts(),
        firstPart = first(parts),
        part = firstPart;

  return part;
}

function definitionFromBNF(bnf) {
  const rules = rulesFromBNF(bnf),
        firstRule = first(rules),
        rule = firstRule, ///
        definitions = rule.getDefinitions(),
        firstDefinition = first(definitions),
        definition = firstDefinition; ///

  return definition;
}
