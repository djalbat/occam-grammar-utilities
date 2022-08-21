# Occam Grammar Utilities

[Occam](https://github.com/djalbat/occam)'s grammar utilities.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Usage](#usage)
- [Building](#building)
- [References](#references)
- [Contact](#contact)

## Introduction

This package provides the means to eliminate left recursion, the Achilles heel of top-down parsers, in both its direct and indirect forms.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-grammar-utilities

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/djalbat/occam-grammar-utilities.git

...and then install the dependencies with npm from within the project's root directory:

    npm install

You can also run a development server, see the section on building later on.

## Usage

The `eliminateLeftRecursion(...)` function should be used as follows:

```
import { BNFLexer } from "occam-lexers";
import { BNFParser } from "occam-parsers";
import { arrayUtilities } from "necessary";
import { eliminateLeftRecursion } from "occam-grammar-utilities";

const { first } = arrayUtilities;

const bnfLexer = BNFLexer.fromNothing(),
      bnfParser = BNFParser.fromNothing(),
      bnf = `

        ...

      `,
      tokens = bnfLexer.tokensFromBNF(bnf);
      
let rules = bnfParser.rulesFromTokens(tokens);

rules = eliminateLeftRecursion(rules);
```
The `rewriteNodes(...)` function works on a node generated, say, as follows:
```
import { BasicLexer } from "occam-lexers";
import { BasicParser } from "occam-parsers";
import { rewriteNodes } from "occam-grammar-utilities";

const basicLexer = BasicLexer.fromNothing(),
      basicParser = BasicParser.fromRules(rules),
      content = `

        ...

      `,
      tokens = basicLexer.tokenise(content),
      node = bnfParser.parse(tokens);

rewriteNodes(node);
```
Any combination of lexer and parser can be used, not just the basic ones. The point is that the rules employed by the parser were those generated by the BNF lexer and parser and then passed to the `eliminateLeftRecursion(...)` function.

## Building

Automation is done with [npm scripts](https://docs.npmjs.com/misc/scripts), have a look at the `package.json` file. The pertinent commands are:

    npm run build-debug
    npm run watch-debug

You can also start a small development server:

    npm start

The example will then be available at http://localhost:8888 and will reload automatically when changes are made.

## References

There is an accompanying paper:

* [Eliminating Left Recursion without the Epsilon](https://arxiv.org/abs/1908.10888)


## Contact

* james.smith@openmathematics.org
