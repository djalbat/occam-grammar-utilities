"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { leftRecursionUtilities } = require("../../lib");  ///

const { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { leftRecursiveRuleNamesFromPart, leftRecursiveRuleNamesFromDefinition, leftRecursiveRuleNamesFromRule } = leftRecursionUtilities;

describe("utilities/leftRecursion", () => {
  describe("leftRecursiveRuleNamesFromPart", () => {
    describe("a missing rule name part", () => {
      const bnf = `
    
        T ::= A ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("throws an exception", () => {
        assert.throws(() => {
          leftRecursiveRuleNamesFromPart(part, ruleMap);
        });
      });
    });

    describe("a terminal part", () => {
      const bnf = `
  
        S ::= "e" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a rule name part with a consuming rule", () => {
      const bnf = `
  
        S ::= A ;
        
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a rule name part with a non-consuming rule", () => {
      const bnf = `
  
        S ::= A ;
        
        A ::= "a"? ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a nullified terminal part", () => {
      const bnf = `
  
        S ::= "e"* ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a nullified rule name part", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("an isolated terminal part part", () => {
      const bnf = `
  
        S ::= ("a") ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an isolated rule name part part ", () => {
      const bnf = `
  
        S ::= (A) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a one or more terminal parts part", () => {
      const bnf = `
  
        S ::= "a"+ ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a one or more rule name parts part", () => {
      const bnf = `
  
        S ::= A+ ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("an optional consuming terminal part part", () => {
      const bnf = `

        S ::= "e"? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an optional non-consuming terminal part part", () => {
      const bnf = `

        S ::= <NO_WHITESPACE>? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an optional non-consuming terminal part part", () => {
      const bnf = `

        S ::= "e"?? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an optional consuming rule name part part", () => {
      const bnf = `

        S ::= A? ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("an optional non-consuming rule name part part", () => {
      const bnf = `

        S ::= A? ;
    
        A ::= "a"? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a zero or more consuming terminal part part", () => {
      const bnf = `

        S ::= "e"* ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a zero or more non-consuming terminal part part", () => {
      const bnf = `

        S ::= <NO_WHITESPACE>* ;
    
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a zero or more consuming rule name part part", () => {
      const bnf = `

        S ::= A* ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a zero or more non-consuming rule name part part", () => {
      const bnf = `

        S ::= A* ;
    
        A ::= "a"? ;
    
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a one or more consuming terminal part part", () => {
      const bnf = `

        S ::= "e"+ ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a one or more non-consuming terminal part part", () => {
      const bnf = `

        S ::= <NO_WHITESPACE>+ ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a one or more consuming rule name part part", () => {
      const bnf = `

        S ::= A+ ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a one or more non-consuming rule name part part", () => {
      const bnf = `

        S ::= A+ ;
    
        A ::= "a"? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("an isolated consuming terminal part part", () => {
      const bnf = `

        S ::= ("e") ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an isolated non-consuming terminal part part", () => {
      const bnf = `

        S ::= (<NO_WHITESPACE>) ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("an isolated consuming rule name part part", () => {
      const bnf = `

        S ::= (A) ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("an isolated non-consuming rule name part part", () => {
      const bnf = `

        S ::= (A) ;
    
        A ::= "a"? ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a sequence of two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a sequence of two rule name parts", () => {
      const bnf = `
  
        S ::= ( A B ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a sequence of one terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( "e" A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a sequence of one rule name part followed by one terminal part", () => {
      const bnf = `
  
        S ::= ( A "e" ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a sequence of two nullified rule name parts", () => {
      const bnf = `
  
        S ::= ( A? B? ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a sequence of one nullified terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a sequence of one nullified rule name part followed by one rule name part", () => {
      const bnf = `
  
        S ::= ( A? B ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a sequence of one nullified terminal part followed by one nullified rule name part", () => {
      const bnf = `
  
      S ::= ( "e"? A? ) ;
        
        A ::= "a" ;
          
    `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a branching parts part with two terminal parts", () => {
      const bnf = `

        S ::= ( "a" ... "b" ) ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a branching parts part with two rule name parts", () => {
      const bnf = `

        S ::= ( A ... B ) ;
    
        A ::= "a" ;
    
        B ::= "b" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a branching parts part with one terminal part followed by one rule name part", () => {
      const bnf = `

        S ::= ( "e" ... A ) ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a branching parts part with one rule name part followed by one terminal part", () => {
      const bnf = `

        S ::= ( A ... "e" ) ;
    
        A ::= "a" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a branching parts part with two nullified rule name parts", () => {
      const bnf = `

        S ::= ( A? ... B? ) ;
    
        A ::= "a" ;
    
        B ::= "b" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a branching parts part with one nullified rule name part followed by one rule name part", () => {
      const bnf = `

        S ::= ( A? ... B ) ;
    
        A ::= "a" ;
    
        B ::= "b" ;
    
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A","B"]);
      });
    });

    describe("a choice of two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" | "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an empty array", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("a choice of two rule name parts", () => {
      const bnf = `
  
        S ::= ( A | B ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a choice of one terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= ( "e" | A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a choice of one rule name part and  one terminal part", () => {
      const bnf = `
  
        S ::= ( A | "e" ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns true with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a choice of two nullified rule name parts", () => {
      const bnf = `
  
        S ::= ( A? | B? ) ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a choice of one nullified terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? | A ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("a choice of one nullified rule name part and one rule name part", () => {
      const bnf = `
  
        S ::= ( A? | B ) ;
          
        A ::= "a" ;
                    
        B ::= "b" ;
        
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length two", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("a choice of one nullified terminal part and one nullified rule name part", () => {
      const bnf = `
  
        S ::= ( "e"? | A? ) ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [],
              terminate = leftRecursiveRuleNamesFromPart(part, ruleMap, leftRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });
  });

  describe("leftRecursiveRuleNamesFromDefinition", () => {
    describe("two terminal parts", () => {
      const bnf = `
  
        S ::= "a" "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("two rule name parts", () => {
      const bnf = `
  
        S ::= A B ;
          
        A ::= "a" ;
          
        B ::= "b" ;

      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("one terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= "e" A ;
                    
        A ::= "a" ;
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("one rule name part followed by one terminal part", () => {
      const bnf = `
  
        S ::= A "e" ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("two nullified rule name parts", () => {
      const bnf = `
  
        S ::= A? B? ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("one nullified terminal part followed by one rule name part", () => {
      const bnf = `
  
        S ::= "e"? A ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("one nullified rule name part followed by one rule name part", () => {
      const bnf = `
  
        S ::= A? B ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("one nullified terminal part followed by one nullified rule name part", () => {
      const bnf = `
  
        S ::= "e"? A? ;
          
        A ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromDefinition(definition, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });
  });

  describe("leftRecursiveRuleNamesFromRule", () => {
    describe("two definitions with two terminal parts", () => {
      const bnf = `
  
        S ::= "a" 
        
            | "b"
             
            ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an empty array", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.isEmpty(leftRecursiveRuleNames);
      });
    });

    describe("two definitions with two rule name parts", () => {
      const bnf = `
  
        S ::= A 
        
            | B 
            
            ;           
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("two definitions with one terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= "e" 
        
            | A 
            
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("two definitions with one rule name part and one terminal part", () => {
      const bnf = `
  
        S ::=  A 
        
            | "e"
             
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("two definitions with two nullified rule name parts", () => {
      const bnf = `
  
        S ::= A? 
        
            | B? 
            
            ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("two definitions with one nullified terminal part and one rule name part", () => {
      const bnf = `
  
        S ::= "e"? 
        
            | A 
            
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });

    describe("two definitions with one nullified rule name part and one rule name part", () => {
      const bnf = `
  
        S ::= A? 
        
            | B 
            
            ;
          
        A ::= "a" ;
          
        B ::= "b" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns an array of length two", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A", "B"]);
      });
    });

    describe("two definitions with one nullified terminal part and one nullified rule name part", () => {
      const bnf = `
  
        S ::= "e"? 
        
            | A? 
            
            ;
          
        A ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules);
      });

      it("returns false with an array of length one", () => {
        const leftRecursiveRuleNames = [];

        leftRecursiveRuleNamesFromRule(rule, ruleMap, leftRecursiveRuleNames);

        assert.deepEqual(leftRecursiveRuleNames, ["A"]);
      });
    });
  });
});
