"use strict";

const { parserUtilities } = require("occam-parsers");

const { definitionUtilities } = require("../../lib");  ///

const Context = require("../helpers/Context");

const { definitionFromBNF } = require("../helpers/bnf");

const { rulesFromBNF } = parserUtilities,
      { isDefinitionConsuming, isDefinitionSingular, isDefinitionRepeatable } = definitionUtilities;

describe("utilities/definition", () => {
  describe("isDefinitionConsuming", () => {
    describe("a rule is missing", () => {
      const bnf = `
    
        T ::= A ;
          
      `;

      let context,
          definition;

      before(() => {
        definition = definitionFromBNF(bnf);

        const rules = rulesFromBNF(bnf);

        context = Context.fromRules(rules);
      });

      it("throws an exception", () => {
        assert.throws(() => {
          isDefinitionConsuming(definition, context);
        });
      });
    });

    describe("there are no concumsing parts before a cut", () => {
      const bnf = `
  
        T ::= T T? \` "g"
        
            | "e"
            
            ;
            
        
      `;

      let context,
          definition;

      before(() => {
        definition = definitionFromBNF(bnf);

        const rules = rulesFromBNF(bnf);

        context = Context.fromRules(rules);
      });

      it("throws an exception", () => {
        assert.throws(() => {
          isDefinitionConsuming(definition, context);
        });
      });
    });
  });

  describe("isDefinitionSingular", () => {
    describe("the first part is not a rule name part", () => {
      const bnf = `
    
        T ::= A? ;
          
      `;

      let context,
          definition;

      before(() => {
        definition = definitionFromBNF(bnf);

        const rules = rulesFromBNF(bnf);

        context = Context.fromRules(rules);
      });

      it("throws an exception", () => {
        assert.throws(() => {
          isDefinitionSingular(definition, context);
        });
      });
    });
  });

  describe("isDefinitionRepeatable", () => {
    describe("the first part is not a rule name part", () => {
      const bnf = `
    
        T ::= A? ;
          
      `;

      let context,
          definition;

      before(() => {
        definition = definitionFromBNF(bnf);

        const rules = rulesFromBNF(bnf);

        context = Context.fromRules(rules);
      });

      it("throws an exception", () => {
        assert.throws(() => {
          isDefinitionRepeatable(definition, context);
        });
      });
    });
  });
});
