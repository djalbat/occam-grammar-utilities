"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { rightRecursionUtilities } = require("../../lib");  ///

const { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { rightRecursiveRuleNamesFromPart, rightRecursiveRuleNamesFromDefinition, rightRecursiveRuleNamesFromRule } = rightRecursionUtilities;

describe("utilities/rightRecursion", () => {
  describe("rightRecursiveRuleNamesFromPart", () => {
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
          rightRecursiveRuleNamesFromPart(part, ruleMap);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B"]);
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

      it("returns true with an array of length one", () => {
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B", "A"]);
      });
    });

    describe("a sequence of one rule name part followed by one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( A "e"? ) ;
          
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
      });
    });

    describe("a sequence of one rule name part followed by one nullified rule name part", () => {
      const bnf = `
  
        S ::= ( A B? ) ;
          
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B", "A"]);
      });
    });

    describe("a sequence of one nullified rule name part followed by one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( A? "e"? ) ;
          
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B"]);
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

      it("returns true with an array of length one", () => {
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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

      it("returns true with an empty array", () => {
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B", "A"]);
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

      it("returns true with an array of length one", () => {
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["B"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isTrue(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [],
              terminate = rightRecursiveRuleNamesFromPart(part, ruleMap, rightRecursiveRuleNames);

        assert.isFalse(terminate);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
      });
    });
  });

  describe("rightRecursiveRuleNamesFromDefinition", () => {
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["B"]);
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

      it("returns an array of length one", () => {
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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

      it("returns an empty array", () => {
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["B", "A"]);
      });
    });

    describe("one rule name part followed by one nullified terminal part", () => {
      const bnf = `
  
        S ::= A "e"? ;
          
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
      });
    });

    describe("one rule name part followed by one nullified rule name part", () => {
      const bnf = `
  
        S ::= A B? ;
          
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["B", "A"]);
      });
    });

    describe("one nullified part rule name followed by one nullified terminal part", () => {
      const bnf = `
  
        S ::= A? "e"? ;
          
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromDefinition(definition, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
      });
    });
  });

  describe("rightRecursiveRuleNamesFromRule", () => {
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.isEmpty(rightRecursiveRuleNames);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A", "B"]);
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
        const rightRecursiveRuleNames = [];

        rightRecursiveRuleNamesFromRule(rule, ruleMap, rightRecursiveRuleNames);

        assert.deepEqual(rightRecursiveRuleNames, ["A"]);
      });
    });
  });
});
