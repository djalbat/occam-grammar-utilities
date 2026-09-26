"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers"),
      { consumptionUtilities } = require("../../lib/index"),  ///
      { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { isPartConsuming, isDefinitionConsuming, isRuleConsuming } = consumptionUtilities;

describe.skip("utiliies/consumption", () => {
  describe("isPartConsuming", () => {
    describe("a terminal part", () => {
      const bnf = `
  
        S ::= "a" ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("an epsilon part", () => {
      const bnf = `
  
        S ::= ε ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a no-whitespace part", () => {
      const bnf = `
  
        S ::= <NO_WHITESPACE> ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified terminal part", () => {
      const bnf = `
  
        S ::= "a"? ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a isolated terminal part", () => {
      const bnf = `
  
        S ::= ( "a" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a committed terminal part", () => {
      const bnf = `
  
        S ::= \`"a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a choice part with two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" | "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a choice part with two nullifid terminal parts", () => {
      const bnf = `
  
        S ::= ( "a"* | "b"? ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a choice part with one terminal part and one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( "a" | "b"* ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a sequence part with two terminal parts", () => {
      const bnf = `
  
        S ::= ( "a" "b" ) ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a sequence part with two nullifid terminal parts", () => {
      const bnf = `
  
        S ::= ( "a"* "b"? ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a sequence part with one terminal part and one nullified terminal part", () => {
      const bnf = `
  
        S ::= ( "a" "b"* ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a sequence part with one nullified terminal part and one terminal part", () => {
      const bnf = `
  
        S ::= ( "a"* "b" ) ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule name part without a corresponding rule", () => {
      const bnf = `
  
        S ::= A ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part without a corresponding rule", () => {
      const bnf = `
  
        S ::= A? ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding consuming rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding consuming rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a" ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding non-consuming rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= "a"? ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding non-consuming rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= "a"* ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding directly cyclic rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding directly cyclic rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= S ;
          
      `;

      let part,
        ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule name part with a corresponding indirectly cyclic rule", () => {
      const bnf = `
  
        S ::= A ;
          
        A ::= B ;

        B ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a nullified rule name part with a corresponding indirectly cyclic rule", () => {
      const bnf = `
  
        S ::= A? ;
          
        A ::= B ;

        B ::= S ;
          
      `;

      let part,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        part = partFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isPartConsuming(part, ruleMap);

        assert.isFalse(consuming);
      });
    });
  });

  describe("isDefinitinoConsuming", () => {
    describe("a definition with a consuming part", () => {
      const bnf = `
  
        S ::= "a" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a definition with a non-consuming part", () => {
      const bnf = `
  
        S ::= "a"* ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a definition with a non-consuming part followed by a consuming part", () => {
      const bnf = `
  
        S ::= "a"* "b" ;
          
      `;

      let definition,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        definition = definitionFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isDefinitionConsuming(definition, ruleMap);

        assert.isTrue(consuming);
      });
    });
  });

  describe("isRuleConsuming", () => {
    describe("a rule with a consuming definition", () => {
      const bnf = `

        S ::= "a" ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule with a non-consuming definition", () => {
      const bnf = `

        S ::= "a"* ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule with two consuming definitions", () => {
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

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns true", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isTrue(consuming);
      });
    });

    describe("a rule with two non-consuming definitions", () => {
      const bnf = `

        S ::= "a"*
        
            | "b"?
            
            ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });

    describe("a rule with a consuming definition and a non-consuming definition", () => {
      const bnf = `

        S ::= "a" 
        
            | "b"* 
            
            ;
          
      `;

      let rule,
          ruleMap;

      before(() => {
        const rules = rulesFromBNF(bnf);

        rule = ruleFromRules(rules);

        ruleMap = ruleMapFromRules(rules)
      });

      it("returns false", () => {
        const consuming = isRuleConsuming(rule, ruleMap);

        assert.isFalse(consuming);
      });
    });
  });
});
