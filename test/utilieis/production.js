"use strict";

const { rulesUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers"),
      { productionUtilities } = require("../../lib/index"),  ///
      { partFromRules, definitionFromRules, ruleFromRules } = require("../helpers/rules");

const { rulesFromBNF } = parserUtilities,
      { ruleMapFromRules } = rulesUtilities,
      { isPartProducing, isDefinitionProducing, isRuleProducing } = productionUtilities;

describe("utiliies/production", () => {
  describe("isPartProducing", () => {
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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

      it("returns true", () => {
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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

      it("returns true", () => {
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a rule name part with a corresponding producing rule", () => {
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
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
      });
    });

    describe("a nullified rule name part with a corresponding producing rule", () => {
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a rule name part with a corresponding non-producing rule", () => {
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a nullified rule name part with a corresponding non-producing rule", () => {
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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

      it("returns true", () => {
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
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

      it("returns true", () => {
        const producing = isPartProducing(part, ruleMap);

        assert.isTrue(producing);
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
        const producing = isPartProducing(part, ruleMap);

        assert.isFalse(producing);
      });
    });
  });

  describe("isDefinitionProducing", () => {
    describe("a definition with a producing part", () => {
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
        const producing = isDefinitionProducing(definition, ruleMap);

        assert.isTrue(producing);
      });
    });

    describe("a definition with a non-producing part", () => {
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
        const producing = isDefinitionProducing(definition, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a definition with a non-producing part followed by a producing part", () => {
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
        const producing = isDefinitionProducing(definition, ruleMap);

        assert.isTrue(producing);
      });
    });
  });

  describe("isRuleProducing", () => {
    describe("a rule with a producing definition", () => {
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
        const producing = isRuleProducing(rule, ruleMap);

        assert.isTrue(producing);
      });
    });

    describe("a rule with a non-producing definition", () => {
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
        const producing = isRuleProducing(rule, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a rule with two producing definitions", () => {
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
        const producing = isRuleProducing(rule, ruleMap);

        assert.isTrue(producing);
      });
    });

    describe("a rule with two non-producing definitions", () => {
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
        const producing = isRuleProducing(rule, ruleMap);

        assert.isFalse(producing);
      });
    });

    describe("a rule with a producing definition and a non-producing definition", () => {
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
        const producing = isRuleProducing(rule, ruleMap);

        assert.isFalse(producing);
      });
    });
  });
});
