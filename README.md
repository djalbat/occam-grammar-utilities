# Grammar Utilities

[Occam](https://github.com/jecs-imperial/occam)'s grammar utilities.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Example](#example)
- [Algorithms](#algorithms)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

This package provides the means to eliminate left recursion, the achilles heel of top-down parsers. Consider the following:
```
  expression    ::=  expression operator expression

                  |  "(" expression ")"

                  |  term

                  ;

  operator      ::=  "+" | "-" | "/" | "*" ;

  term          ::=  [number] ;
```
Here the first rule is immediately left recursive. When the parser encounters this rule it will enter an infinite loop as it tries to evaluate the right hand side. In order to eliminate immediate left recursion, the first definition is discarded and the name of a new, right recursive rule `expression~` is appended to the remaining two definitions. The new, right recursive rule itself consists of two definitions, the first of which `operator expression expression~` is right recursive, the second of which consists of a single terminating part `ε` which permits the parser to continue when the first definition no longer results in a match:

```
  expression    ::=  "(" expression ")" expression~

                  |  term expression~

                  ;

  operator      ::=  "+" | "-" | "/" | "*" ;

  term          ::=  [number] ;

  expression~   ::=  operator expression expression~

                  |  ε

                  ;
```
It is well worth a few minutes to convince yourself that this makes sense. Here is the parse tree of the expression `(1+2)/3` that results from the use of this amended BNF:
```
                                      expression
                                           |
     ------------------------------------------------------------------------------
     |                       |                          |                         |
([terminal              expression                 )[terminal]               expression~
                             |                                                    |
               ----------------------------                          ------------------------------
               |                          |                          |              |             |
             term                    expression~                 operator      expression    expression~
               |                          |                          |              |             |
            number        --------------------------------      /[terminal]    -----------        ε
               |          |               |              |                     |         |
          1[terminal]  operator      expression     expression~              term   expression~
                          |               |              |                     |         |
                     +[terminal]    -------------        ε                  number       ε
                                    |           |                              |
                                  term     expression~                    3[terminal]
                                    |           |
                                 number         ε
                                    |
                               2[terminal]
```
The implementations of algorithms that reliably remove left recursion are fiddlesome to say the least and there are caveats. A full treatment is given below after mention of the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-grammar-utilities

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-grammar-utilities.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Usage

```js
const grammarUtilities = require('occam-grammar-utilities');

const { eliminateLeftRecursion } = grammarUtilities;

let rules = ...

rules = eliminateLeftRecursion(rules);  ///
```
Functions to eliminate immediate left recursion, implicit left recursion and orphaned rules are also exported.

## Example

There is one example although the BNF can be changed dynamically. To view it, open the `example.html` file in the root of the repository. The initial BNF is actually a representation of Occam's BNF parser's rules. If this seems too daunting, you can copy the BNF given in the introduction into the BNF textarea. You can also try the BNF examples given in the treatment below.

Note that if you choose to eliminate implicit left recursion you cannot choose not to eliminate immediate left recursion because eliminating the former implies eliminating the latter.

## Algorithms

### Eliminating immediate left recursion

Consider the following BNF:
```
  Y  ::=  "a" | "b" | Y "c";
```
The problem is that this could result in the derivation `Y -> Y ("c")` or, losing the convention that those parts of a definition that are never evaluated are shown in parenthesis, simply `Y -> Y "c"`.

The algorithm directly removes immediate left recursion where it finds it but otherwise leaves the BNF as-is. It works by identifying immediately left recursive definitions within in any rule, in this case the `Y "c"` rule, and rewriting the resultant rule as right recursive. A part referencing the new rule is then appended to any definition that is not immediately left recursive, thus:
```
  Y  ::=  "a" Y~ | "b" Y~;

  Y~ ::=  "c" Y~ | ε;
```
The `ε` definition here matches nothing and allows the right recursive rule to terminate.

A few special cases deserve mention.

1. Lack of definitions other than immediately left recursive ones:
```
  Y  ::=  Y "c";
```
The algorithm will handle this case, returning the following:
```
  Y  ::= Y~ ;

  Y~ ::= "c" Y~ | ε ;
```

2. More than one immediately left recursive definition:
```
  Y  ::=  "a" | "b" | Y "c" | Y "d" ;
```
This is not really a special case as such and is dealt with in a standard way:
```
  Y  ::= "a" Y~ | "b" Y~ ;

  Y~ ::= "c" Y~ | "d" Y~ | ε ;
```

3. The left recursive definition is in fact cyclic:
```
  Y  ::=  "a" | "b" | Y ;
```
The algorithm fails to handle this case, generating a right recursive rule that is still cyclic:
```
  Y  ::= "a" Y~ | "b" Y~ ;

  Y~ ::= Y~ | ε ;
```

One further point worth noting is that it is usual to show the left recursive definitions first. In practice, however, rules of the above form are just as likely and left recursive definitions should be eliminated regardless of where they appear.

### Eliminating implicit left recursion

This algorithm is pre-emptive in the sense that it does not explicitly remove implicit left recursion. Instead, it rearranges the BNF so that no left recursion can occur. Consider the following BNF:
```
  S  ::=  X "b" ;

  X  ::=  Y "a" ;

  Y  ::=  S "c" ;
```
Here there is implicit left recursion in the derivation `S -> X ("b") -> Y ("a") -> S ("c")`, abbreviated `S ->* S "c"`. Recall that the parts of the definitions shown in parenthesis represent those parts that are never evaluated.

In order to eliminate left recursion we disallow rules that reference previous ones. The first two rules are okay, however the third `Y` references the `S` rule and so must be changed. The `S` part of the rule's definition is therefore replaced with the right hand side of the `S` rule leading to the intermediate rule `Y  ::=  X "b" "c"`. This similarly needs to be changed, replacing the reference to the `X` rule with its right hand side to yield `Y  ::=  Y "a" "b" "c"`. Now this rule no longer references previous rules, however it is immediately left recursive. Eliminating this gives the completed set of rules:
```
  S  ::=  X "b" ;

  X  ::=  Y "a" ;

  Y  ::=  Y~ ;

  Y~ ::=  "a" "b" "c" Y~ | ε ;
```

### Eliminating orphaned rules

Orphaned rules are rules which are never referenced from the right hand sides of any rules. They may crop up as a result of eliminating left recursion or they may be present in the grammar already. Consider the following BNF:
```
  S  ::=  X ;

  Z  ::=  W ;

  W  ::=  "w" ;
```
Here the `Z` rule is orphaned since there is no mention of it in any definition. Eliminating it leaves:
```
  S  ::=  X ;

  W  ::=  "w" ;
```
Now the `W` rule is orphaned and since the algorithm works iteratively, this too will be removed, leaving:
```
  S  ::=  X ;
```
Now there are no more orphaned rules and the algorithm terminates. A simple boundedness argument proves that it always will do so. Note that there is a reference to an `X` rule that does not exist. This is a fault in the grammar, undoubtedly, but not within the scope of this algorithm to fix. Note that the first rule is technically an orphaned rule, however the algorithm leaves it as-is by default.

### Caveats

None of the algorithms bar the algorithm to eliminate orphans is able to handle references to rules on the right hand side when modified or inside brackets. It is not always clear, at least not to the author, whether they always must. Certainly re-writing the algorithms to deal with such cases will add considerably to their complexity. Such an investigation is, again, left for future work.

It is worth pointing out that algorithm to eliminate orphaned rules is at least more savvy. The following spurious adjustments to the rule names in the first definition result in the `rule` and `error` rules being orphaned in spite of the presence of numerous brackets and modifiers:
```
  document  ::=  ( _rule+ | _error* )? ;

      rule  ::=  [rule] ;

     error  ::=  . ;
```
This is straightforward to check.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Resources

* [Gate Lectures on Compiler Design by Ravindrababu Ravula](https://www.youtube.com/watch?v=Qkwj65l_96I&list=PLEbnTDJUr_IcPtUXFy2b1sGRPsLFMghhS)
* [Notes on Formal Language Theory and Parsing by James Power](http://www.cs.nuim.ie/~jpower/Courses/Previous/parsing)

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
