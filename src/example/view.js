"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { rulesUtilities, eliminateLeftRecursion, removeOrRenameReducedNodes } from "../index"; ///

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RemoveOrRenameReducedNodesCheckbox from "./checkbox/removeOrRenameReducedNodes"

import { rulesFromBNF } from "../utilities/rules";
import { UNASSIGNED_ENTRY } from "../constants";
import { rulesFromStartRuleAndRuleMap } from "../utilities/rules";

const { rulesAsString, ruleMapFromRules, startRuleFromRulesAndStartRuleName } = rulesUtilities;

class View extends Element {
  getParseTree(startRule, ruleMap) {
    let parseTree = null;

    const lexicalPattern = this.getLexicalPattern(),
          unassigned = UNASSIGNED_ENTRY,
          custom = lexicalPattern,  ///
          entries = [
            {
              custom
            },
            {
              unassigned
            }
          ],
          basicLexer = BasicLexer.fromEntries(entries),
          basicParser = new BasicParser(startRule, ruleMap),  ///
          content = this.getContent(),
          tokens = basicLexer.tokenise(content),
          node = basicParser.parse(tokens);

    if (node !== null) {
      const removeOrRenameReducedNodesCheckboxChecked = this.isRemoveOrRenameReducedNodesCheckboxChecked();

      if (removeOrRenameReducedNodesCheckboxChecked) {
        removeOrRenameReducedNodes(node);
      }

      parseTree = node.asParseTree(tokens);
    }

    return parseTree;
  }

  keyUpHandler(event, element) {
    this.changeHandler();
  }

  changeHandler(event, element) {
    // try {
      const bnf = this.getBNF(),
            startRuleName = this.getStartRuleName();

      let rules = rulesFromBNF(bnf);

      const ruleMap = ruleMapFromRules(rules);

      let startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);

      startRule = eliminateLeftRecursion(startRule, ruleMap);

      rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);

      const multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString;  ///

      this.setAdjustedBNF(adjustedBNF);

      const parseTree = this.getParseTree(startRule, ruleMap);

      this.setParseTree(parseTree);
    // } catch (error) {
    //   console.log(error);
    // }
  }

  childElements() {
    const keyUpHandler = this.keyUpHandler.bind(this),
          changeHandler = this.changeHandler.bind(this);

    return ([

      <ColumnsDiv>
        <SizeableDiv>
          <RowsDiv>
            <SubHeading>
              Lexical pattern
            </SubHeading>
            <LexicalPatternInput onKeyUp={keyUpHandler} />
            <SubHeading>
              BNF
            </SubHeading>
            <BNFTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Adjusted BNF
            </SubHeading>
            <AdjustedBNFTextarea readOnly />
          </RowsDiv>
        </SizeableDiv>
        <VerticalSplitterDiv />
        <ColumnDiv>
          <RowsDiv>
            <SubHeading>
              Start rule name
            </SubHeading>
            <StartRuleNameInput onKeyUp={keyUpHandler} />
            <SubHeading>
              Content
            </SubHeading>
            <ContentTextarea onKeyUp={keyUpHandler} />
            <SubHeading>
              Parse tree
            </SubHeading>
            <ParseTreeTextarea />
            <Paragraph>
              <RemoveOrRenameReducedNodesCheckbox onChange={changeHandler} checked />
              Remove or rename reduced nodes
            </Paragraph>
          </RowsDiv>
        </ColumnDiv>
      </ColumnsDiv>

    ]);
  }

  initialise() {
    this.assignContext();

    const { initialBNF, initialContent, initialStartRuleName, initialLexicalPattern } = this.constructor,
          bnf = initialBNF, ///
          content = initialContent, ///
          startRuleName = initialStartRuleName, ///
          lexicalPattern = initialLexicalPattern; ///

    this.setBNF(bnf);

    this.setContent(content);

    this.setStartRuleName(startRuleName);

    this.setLexicalPattern(lexicalPattern);

    this.keyUpHandler();
  }

  static initialBNF = `
 
S  ::= A "g"

     | S_
    
     ;  
     
S_ ::= "e" ;     

A  ::= A_ ( "g" "f" )+? ;  

A_ ::= S_ "f" 

     | "g"
    
     ;  
  
`;

  static initialContent = "gf";

  static initialStartRuleName = "S";

  static initialLexicalPattern = ".";

  static tagName = "div";

  static defaultProperties = {
    className: "view"
  };
}

export default withStyle(View)`

  padding: 1rem;
  
`;

`

The following rules...

Isn't it the case that we always loose information from the parse tree when we eliminate indirect left recursion in this way?

Or does the fact that we now have reduced rules, the corresponding notes of which will get renamed, will preserve the meaning?    

Although there are two left recursive definitions and either could be rewritten, the fact is that we only need to rewrite one in order to eliminate the left recursion overall.
    
S ::= A "g"

    | "e"
    
    ; 
    
A ::= S "f" 

    | "g"
    
    ;  
    
=======================
    
S  ::= A "g"

     | S_
    
     ;  
     
S_ ::= "e" ;     
  
A  ::= S "f" 

     | "g"
    
     ;
     
Note that we do not rewrite A immediately. First we incorporate S's definitions...      

A  ::= A "g" "f" 

     | S_ "f" 

     | "g"
    
     ;  

...and now we reduce:

A  ::= A "g" "f" 

     | A_
    
     ;  

A_ ::= S_ "f" 

     | "g"
    
     ;  


A  ::= A_ ( "g" "f" )+? ;  

To conclude:

S  ::= A "g"

     | S_
    
     ;  
     
S_ ::= "e" ;     

A  ::= A_ ( "g" "f" )+? ;  

A_ ::= S_ "f" 

     | "g"
    
     ;  













So if we match ef, for example:

          S(0-1)         
             |           
          A(0-1)         
             |           
      --------------     
      |            |     
    S_(0)    f[custom](1)
      |                  
e[custom](0)             

Yes!

















     
...which does not change anything aside from adding nodes to the parse tree which can be subsequently removed.

We now substitute S into A...
  
A  ::= A "f" 

     | S_ "f" 

     | A_
    
     ;  
     
...create a new reduced rule:

A  ::= A "f" 

     | A__
    
     ;  
     
...where

A__ ::= S_ "f"

      | A_
      
      ;
      
Thus...

A ::= A__ "f"+? ;      

...and: 

A__ ::= S_ "f"

      | "g"
     
      ;

To conclude:

S   ::= A

      | S_
    
      ;  
  
S_  ::= "e" ;  

A   ::= A__ "f"+? ;      

A__ ::= S_ "f"

      | "g"
     
      ;



A   ::= ( S_ "f" | A_ ) "f"+? ;      

A_ ::=  "g" ;


This is slightly different to the previous effort:

S  ::= A

     | S_
    
     ;  
  
S_ ::= "e" ;  
  
A  ::= A_ "f"+? 

     | S_ "f"+? 

     | A_
    
     ;  

A_ ::= "g" ;  
  



















--------------------------------------------

How come this works...

A ::= C "f"

    | B

    ;

B ::= "h" C ;

C ::= A ;
 
...but this doesn't:

A ::= C "f"

    | B

    ;

B ::= "h" C ;

C ::= A ;
 

----------------------------------------

This one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.

    A ::= A "f"
    
        | B
    
        | "e"
    
        ;
    
    B ::= C
    
        | A "g"
    
        ;
    
    C ::= "h" ;
    
--------------------------------------------------

This one is also causing problems although the algorithm is in transition:

A ::= B

    | C "f"

    ;

B ::= "h" C ;

C ::= A ;

--------------------------------------------------

The following is an example of simplifying the rewrite process. The following...

A ::= A... "h" "g" | "f" ;

...can in fact be rewritten:

A ::= A_... A~+? ;

A_ ::= "f" ;

A~ ::= "h" "g" ;

In fact we could even do away with the repeated rule and "inline" its definition:

A ::= A_... ( "h" "g" )+? ;

A_ ::= "f" ;

Again we make use of the sequence of parts part extention to the BNF.

--------------------------------------------------

The new process would be:

1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions

2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules

3. Rewrite the corresponding left recursive rules as well as cre 

--------------------------------------------------

What if there are two directly left recursive definitions in the same rule?

A ::= A "h"

    | A... "g"
    
    | "f"
    
    ;
        
A  ::= A_... ( "h" | "g" )+? ;
    
A_  ::= "f" ;    

The only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions.
   
`
