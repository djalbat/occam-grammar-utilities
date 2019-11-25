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

_This project is undergoing a major rewrite and is effectively broken! Please come back another day._

This package provides the means to eliminate left recursion, the Achilles heel of top-down parsers, in both its direct and indirect forms. Consider the following rules:
```
expression    ::= expression operator expression

                | "(" expression ")"

                | term

                ;

operator      ::= "+" | "-" | "/" | "*" ;

term          ::= naturalNumber ;

naturalNumber ::= /\d+/ ;
```
Here the first definition of the `expression` rule is directly left recursive. When the parser encounters this definition it will encounter a reference to the `expression` rule and, trying to execute it again, will enter an infinite loop.

In order to eliminate left recursion, the rules have traditionally been rewritten as follows:

```
expression  ::= "(" expression ")" expression~

              | term expression~

              ;

expression~ ::= operator expression expression~?

              | ε

              ;

...
```
Here is the parse tree of the expression `(1+2)/3` that results:
```
                                                   expression(0-6)
                                                          |
                                  -------------------------------------------------
                                  |                                               |
                          expression_(0-4)                                expression~(5-6)
                                  |                                               |
      ---------------------------------------------------------            ---------------
      |                        |                              |            |             |
([custom](0)            expression(1-3)                 )[custom](4)  operator(5)  expression(6)
                               |                                           |             |
                    ----------------------                           /[custom](5) expression_(6)
                    |                    |                                               |
             expression_(1)      expression~(2-3)                                     term(6)
                    |                    |                                               |
                 term(1)          ---------------                                  3[custom](6)
                    |             |             |
              1[custom](1)   operator(2)  expression(3)
                                  |             |
                            +[custom](2) expression_(3)
                                                |
                                             term(3)
                                                |
                                          2[custom](3)
```
This package also provides the means to eliminate nodes that correspond to the intermediate rules, resulting in the following abridged parse tree:
```
                                                           expression(0-6)
                                                                  |
                                       ------------------------------------------------------
                                       |                                       |            |
                                expression(0-4)                           operator(5) expression(6)
                                       |                                       |            |
            -------------------------------------------------------      /[custom](5)    term(6)
            |                          |                          |                         |
      ([custom](0)              expression(1-3)             )[custom](4)              3[custom](6)
                                       |
                         ----------------------------
                         |             |            |
                   expression(1)  operator(2) expression(3)
                         |             |            |
                      term(1)    +[custom](2)    term(3)
                         |                          |
                   1[custom](1)               2[custom](3)
```
This is very close to ideal.

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
const lexers = require('occam-lexers'),
      parsers = require('occam-parsers'),
      grammarUtilities = require('occam-grammar-utilities');

const { BasicLexer } = lexers,
      { BasicParser } = parsers,
      { eliminateLeftRecursion, removeIntermediateNodes } = grammarUtilities;

const rules = ... ,
      entries = ... ,
      content = ... ;

eliminateLeftRecursion(rules);

const basicLexer = BasicLexer.fromEntries(entries),
      basicParser = BasicParser.fromRules(rules),
      tokens = basicLexer.tokenise(content),
      node = basicParser.parse(tokens);

removeIntermediateNodes(node);
```

## Example

There is one example although the BNF can be changed dynamically. To view it, open the `example.html` file in the root of the repository. The following are some rules that you can try:
```
  expression          ::= compoundExpression

                        | "(" expression ")"

                        | term

                        ;

  compoundExpression  ::= expression operator expression

                        | "xyz"

                        ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;
```
```
  L  ::=  L! "c"

       |  "a"

       |  "a" "b"

       ;
```
```
  expression~ ::= operator expression expression~

                | ε

                ;
```
This last has been included to make it easy to copy and paste the troublesome `ε`, although the algorithms themselves no longer require it.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
