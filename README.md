# Grammar Utilities

[Occam](https://github.com/jecs-imperial/occam)'s grammar utilities.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Examples](#examples)
- [Algorithms](#algorithms)
- [Building](#building)
- [Resources](#resources)
- [Contact](#contact)

## Introduction

_This project is undergoing a major rewrite and is effectively broken! Please come back another day._

This package provides the means to eliminate left recursion, the Achilles heel of top-down parsers, in both its direct and indirect forms.

There is an accompanying paper:

* [Eliminating Left Recursion without the Epsilon](https://arxiv.org/abs/1908.10888)

As well as providing the usual installation instructions, etc, this readme file contains many of the listings to be found in the paper, the reason being that it is much easier to copy them from here. Some short explanatory notes are also given in the remainder of this introduction, for those who do not want to tackle the paper but nonetheless want an idea of what this is all about.

Consider the following rules:
```
expression    ::= expression operator expression

                | "(" expression ")"

                | term

                ;

operator      ::= "+" | "-" | "/" | "*" ;

term          ::= /\d+/ ;
```
Here the first definition of the `expression` rule is directly left recursive. When the parser encounters this definition it happens across a reference to the `expression` rule and, trying to execute that rule again, will enter an infinite loop.

The standard algorithm for eliminating left recursion would rewrite the rules as follows:

```
expression  ::= "(" expression ")" expression~

              | term expression~

              ;

expression~ ::= operator expression expression~

              | ε

              ;

...
```
The left recursive definition has been removed and a reference to the right recursive `expression~` rule has been prepended to each of the definitions that remain. Note that the second definition of the right recursive rule contains a single `ε` part that will execute without consuming any tokens, thus giving the parser the opportunity to terminate.

Now consider the following rules, where the left recursion is still present but in indirect form:
```
expression         ::= compoundExpression

                     | "(" expression ")"

                     | term

                     ;

compoundExpression ::= expression operator expression ;

...
```
The standard algorithm for eliminating indirect left recursion reorganises the rules in such a way that indirect left recursion is always transformed into direct left recursion which, whenever it occurs, is then eliminated in the aforementioned way. The reorganisation itself essentially involves removing cycles by making substitutions. For example, the `compoundExpression` rule, coming as it does after the `expression` rule, is substituted for its reference in the first definition of the `expression` rule, resulting in fact in the same case of direct left recursion as before.

This approach is fine in theory, however there are two major drawbacks in practice:

1. The `compoundExpression` rule, or the fact that it is, or rather was, referenced by the expression rule, is lost for good. Unfortunately, it is these kinds of relationships between roles that give parse trees their utility in practice, and we cannot afford to simply throw them away. What if, for example, we wanted a way to detect compound expressions in larger expressions? With the presence of the `compoundExpression` rule, it would be a straightforward job to traverse parse trees looking for the nodes that correspond to that rule. If that rule has been lost, however, the problem becomes a less than straightforward one.


2. It is easy to see that if such substitutions are done on many occasions, we may get exponential blow up both in the number of definitions overall and in their length. Rules that create such blow ups are alarmingly commonplace in practice, in fact, and result in the parser simply being unable to function without running out of stack or heap space.

So we are forced to think of a more efficient and less destructive way of eliminating indirect left recursion.

Consider the following rewritten rules, which are close to the rules produced by our algorithm:

```
expression         ::= compoundExpression

                     | expression_

                     ;

compoundExpression ::= expression_ expression~+ ;

expression_        ::= "(" expression ")"

                     | term

                     ;

expression~        ::= operator expression ;

...
```
Here we have created a reduced `expression_` rule to hold all of the original `expression` rule's definitions bar the first. And we get to keep the `compoundExpression` rule, the rewritten definition of which consists of a reference to this reduced rule followed by a reference to the repeated `expression~` rule. This is analogous to the right recursive rule of the same name created earlier, however note that we have done away with the need for right recursion by making use of the `+` quantifier when referencing it. An additional bonus is that the definition with a single `ε` part can be left out of the repeated rule, as the presence of the `+` quantifier means that the parser can terminate without it.

A bonus of this approach is that, if we are careful in removing or renaming the nodes in the parse tree corresponding to our intermediate `expression_` and `expression~` rules, we get what is effectively the ideal parse tree to boot:

```
                                                         expression(0-6)
                                                                |
                                                     compoundExpression(0-6)
                                                                |
                                     ------------------------------------------------------
                                     |                                       |            |
                              expression(0-4)                           operator(5) expression(6)
                                     |                                       |            |
          -------------------------------------------------------      /[custom](5)    term(6)
          |                          |                          |                         |
    ([custom](0)              expression(1-3)             )[custom](4)              3[custom](6)
                                     |
                          compoundExpression(1-3)
                                     |
                       ----------------------------
                       |             |            |
                 expression(1)  operator(2) expression(3)
                       |             |            |
                    term(1)    +[custom](2)    term(3)
                       |                          |
                 1[custom](1)               2[custom](3)
```
Further details can be found in the aforementioned paper.

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
      { eliminateLeftRecursion, removeOrRenameIntermediateNodes } = grammarUtilities;

const rules = ... ,
      entries = ... ,
      content = ... ;

eliminateLeftRecursion(rules);

const basicLexer = BasicLexer.fromEntries(entries),
      basicParser = BasicParser.fromRules(rules),
      tokens = basicLexer.tokenise(content),
      node = basicParser.parse(tokens);

removeOrRenameIntermediateNodes(node);
```
Note that the functionality for the removal or renaming of intermediate nodes is separate.

## Examples

There is one example although the BNF can be changed dynamically. To view it, open the `example.html` file in the root of the repository. You may need to change the lexical pattern in order to pick out the necessary tokens to make the parser work. The default lexical pattern picks out decimal digits and then defaults to picking out any character. The remainder of this section gives listings that appear in the paper along with brief explanations.

THe following rule is an example of the algorithm's handling of look-ahead:
```
L ::= L! "c"

    | "a"

    | "a" "b"

    ;
```
Without the `!` look-ahead modifier, the content `abc` will not parse.

The following rule is an another example of look-ahead, however here there are two left recursive definitions, one with look-ahead and one without:
```
L ::= L! "c"

    | "a"

    | L "d"

    | "a" "b"

    ;
```
This results in a repeated rule with two definitions, each corresponding to one of the left-recursive definitions.

The following rules are similar to the first example of indirect left recursion given earlier. Here, however, the depth is 2, not 1:
```
expression             ::=  intermediateExpression

                         |  "(" expression ")"

                         |  term

                         ;

intermediateExpression ::=  compoundExpression ;

compoundExpression     ::=  expression operator expression ;

operator               ::= "+" | "-" | "/" | "*" ;

term                   ::= /\d+/ ;
```

Here the indirect left recursion occurs between the `C` and `D` rules:
```
S ::= A C ;

A ::= "a" B ;

B ::= A | "b" C ;

C ::= D E | "c" ;

D ::= C "d" ;

E ::= "." ;
```

This rule results in an error because there are no non-left recursive definitions alongside the directly left recursive definition:
```
C ::= C "a" ;
```

This rule results in an error because the directly left recursive definition is unary:
```
C ::= C | "e" ;
```

These rules result in an error because there are no non-left recursive definitions alongisde the implicitly left recursive definition:
```
C ::= D "a" ;

D ::= C "b" ;
```

These rules are not permissible because the indirectly left recursive definition is unary>
```
C ::= D "e" | "f" ;

D ::= C ;

```

These rules are permissible results in an error because the although the implicitly left recursive definition is unary, the indirectly left recursive definition is not:
```
C ::= D | "f" ;

D ::= C "e" ;
```



## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

## Contact

* james.smith@openmathematics.org
* http://djalbat.com
