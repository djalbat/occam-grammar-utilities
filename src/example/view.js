"use strict";

import withStyle from "easy-with-style";  ///

import { Element } from "easy";
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { RowsDiv, ColumnDiv, ColumnsDiv, VerticalSplitterDiv } from "easy-layout";
import { rulesUtilities, eliminateLeftRecursion, removeOrRenameIntermediateNodes } from "../index"; ///

import Paragraph from "./paragraph";
import SubHeading from "./subHeading";
import SizeableDiv from "./div/sizeable";
import BNFTextarea from "./textarea/bnf";
import ContentTextarea from "./textarea/content";
import ParseTreeTextarea from "./textarea/parseTree";
import StartRuleNameInput from "./input/startRuleName";
import LexicalPatternInput from "./input/lexicalPattern";
import AdjustedBNFTextarea from "./textarea/adjustedBNF";
import RemoveOrRenameIntermediateNodesCheckbox from "./checkbox/removeOrRenameIntermediateNodes"

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
      const removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();

      if (removeOrRenameIntermediateNodesCheckboxChecked) {
        removeOrRenameIntermediateNodes(node);
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
              <RemoveOrRenameIntermediateNodesCheckbox onChange={changeHandler} checked />
              Remove or rename intermediate nodes
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
 
    A ::= B "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "c"

        ;

`;

  static initialContent = "cgfhg";

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

-------------------------------

THE REDUCEDPARTFROMPART() USAGE IN THE PART UTILITIES LOOKS WRONG. IT IS ALWAYS AND ONLY CALLED WITH A RULENAME PART, SO WHY THE NEED FOR RECURSION?

--------------------------------

We introduce a repeated as well as a reduced rule:

     A ::= B "g"
    
         | A "f"
    
         | "e"
    
         ;
    
    B ::= A B~
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;
 
Now when we do the substitution...
 
     A ::= A B~ "g"
    
         | B_ "g"

         | A "f"

         | "e"
    
         ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;

...we keep the A to B to A relation when we match "h".

Continuing, we reduce the A rule...

     A ::= A B~ "g"
    
         | A "f"

         | A_
    
         ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;

   A_ ::= B_ "g"

        | "e"
    
        ;
    
...merge the directly left recursive definitions...

     A ::= A ( ( B~ "g" ) | "f" )

         | A_
    
         ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;

   A_ ::= B_ "g"

        | "e"
    
        ;
    
...and rewrite:

    A ::= A_ ( ( B~ "g" ) | "f" )* ;
    
    B ::= A "h"
    
        | B_

        ;

   B_ ::= "c" ;

   B~ ::= "h" ;

   A_ ::= B_ "g"

        | "e"
    
        ;
    
In fact note that we may have to merge the indirectly left recursive definitions firstly, too!












--------------------------------------------

This is an interesting case. We need to merge the implicitly left recursive definitions:

    A ::= B "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | "c"

        ;
        
Because the A rule is directly left recursive, we need to substitute into that. First, we rewrite the B rule:

    A ::= B "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | B_

        ;
        
   B_ ::= "c" ;
        
Next we substitute the rewritten B rule's definitions for any occurence of the B rule name part in the A rule's implicitly left recursive definitions:

    A ::= A "h" "g"
    
        | B_ "g"
    
        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "h"
    
        | B_

        ;
        
   B_ ::= "c" ;
   
Now we reduce the A rule...

    A ::= A "h" "g"
    
        | A "f"
    
        | A_
    
        ;
    
    B ::= A "h"
    
        | B_

        ;
        
   B_ ::= "c" ;
    
   A_ ::= B_ "g"
    
        | "e"
    
        ;

        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        

--------------------------------------------

We go from here...

    A ::= B "c"
    
        | A "h"
    
        | "e"
    
        ;
    
    B ::= A "f" "g"
    
        | "c"

        ;
                
...to here:

    A ::= A_ ( "h" | ( "f" "g" ) )* ;
    
    B ::= A "f" "g"
    
        | B_

        ;
    
   A_ ::= B_ "c"
    
        | "e"
    
        ;

   B_ ::= "c"

        | "d"

        ;        
    
--------------------------------------------

THe following rules mix direct and indirect left-recursion.

Note that the directly left recursive definition is a sibling of the *implicitly* left recursive definition.

    A ::= B

        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "g"
    
        ;

A little thought should convince that these rules will match the following:

e(f|g)*

Now note that the directly left recursive definition forced us to do the substitution in the following direction:

    A ::= A "g"

        | A "f"
    
        | "e"
    
        ;
        
In fact we *cannot* substitute the other way because we must leave the B indirectly left recursive definition in place.

Rearranging:

    A ::= A ( "g" | "f" )

        | "e"
    
        ;
        
And now we rewrite:

    A ::= A_ ( "g" | "f" )* ;
        
   A_ ::= "e" ;

Now consider tHe following rules that also mix direct and indirect left-recursion.

However, note that in this case the directly left recursive definition is a sibling of the *indirectly* left recursive definition.
    
    A ::= B

        | "e"
    
        ;
    
    B ::= B "f"
    
        | A "g"
    
        ;

This time we have to substitute A's definitions into the indirectly left recursive definition:

    A ::= B

        | "e"
    
        ;
    
    B ::= B "f"
    
        | B "g"
    
        | "e" "g"

        ;

Rearranging:    

    A ::= B

        | "e"
    
        ;
    
    B ::= B ( "f" | "g" )
    
        | "e" "g"

        ;

Now rewriting:

    A ::= B

        | "e"
    
        ;
    
    B ::= B_ ( "f" | "g" )* ;

   B_ ::= "e" "g" ;

So the moral is that eliminating indirect left recursion amounts to a rearrangement to direct left recursion...

...and then from there, combining any directly left recursive definitions into on, before the usual rewriting.

By this token the following rules cannot be rewritten, at least not easily...

    A ::= B

        | A "e"

        | "e"
    
        ;
    
    B ::= B "f"
    
        | A "g"
    
        ;

...because we cannot get all the directly left recursive rules in one rule or the other.

Or, at least, we can be forgiven for not trying.

--------------------------------------------

The following rules...
 
S ::= A "f"

    | "e"
    
    ; 
    
A ::= S "h" 

    | "g"
    
    ;  
      
...are rewritten to:

S  ::= A "f"

     | S_

     ;

A  ::= A_ ( "f" "h" )+? ;

A_ ::= S_ "h"

     | "g"

     ;

S_ ::= "e" ;

Looking at the original rules, the following content will match:

S -> A f or e

A f -> S hf or gf

S hf -> A fhf or ehf

A fhf -> S hfhf or gfhf

etc

So we get e(hf)* or gf(hf)*

It is worth pointing out that these rewrite rules, although they allow us to deal with left recursion by hand, so to speak, would still result in an algorithm that would not terminate.

Checking the rewritten rules in the same manner, immediately writing S_ as e wherever we encounter it: 

S -> A f or e

A f -> A_ (fh)+ f

A_ (fh)+ f -> e h (fh)+ f or g (fh)+ f

Now e h(fh)+ f is just e(fh)+ and combined with e gives e (fh)* whilst g(fh)+ f is actually gf(hf)* and we are done.
 
--------------------------------------------

We need to get this one working:

A ::= C "f"

    | B

    ;

B ::= "h" C ;

C ::= A ;
 
--------------------------------------------

This one has both direct and indirect left recursion.

    A ::= B

        | A "f"
    
        | "e"
    
        ;
    
    B ::= A "g"
    
        ;
    
--------------------------------------------


This one needs further investigation. Try removing the "e" definition and then remove each kind of left recursion in turn.

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
