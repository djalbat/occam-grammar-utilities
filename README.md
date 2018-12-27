# Grammar Utilities

[Occam](https://github.com/jecs-imperial/occam)'s grammar utilities.

### Contents

- [Introduction](#introduction)
- [Installation](#installation)
- [Example](#example)
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
Here the first rule is immediately left recursive. When the parser encounters this rule it will immediately enter an infinite loop as it tries to evaluate the right hand side. In order to eliminate immediate left recursion, the first definition is discarded and a the name of a new, right recursive rule `expression~` is appended to the remaining two definitions. The new, right recursive rule itself consists of two definitions, the first of which `operator expression expression~` is right recursive, the second of which consists of a single terminating part `ε` which permits the parser to continue when the first definition no longer results in a match:

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
The implementations of algorithms that reliably removes left recursion are fiddlesome to say the least and there are caveats. A full treatment is given below after mention of the example.

## Installation

With [npm](https://www.npmjs.com/):

    npm install occam-grammar-utilities

You can also clone the repository with [Git](https://git-scm.com/)...

    git clone https://github.com/jecs-imperial/occam-grammar-utilities.git

...and then install the necessary modules with npm from within the project's root directory:

    npm install

You will need to do this if you want to look at the example.

## Example

There is one example although the BNF can be changed dynamically. To view it, open the `example.html` file in the root of the repository. The initial BNF is actually a representation of Occam's BNF parser's rules. If this seems too daunting, you can copy the BNF given in the introduction into the BNF textarea. You can also try the BNF examples given in the treatment below.

Note that if you choose to eliminate implicit left recursion, you cannot choose not to eliminate cycles or to eliminate immediate left recursion, because eliminating implicit left recursion requires the former and entails the latter. Also, the exported function to remove left recursion will also remove orphaned rules, so this choice is also enforced when eliminating implicit left recursion. The choice of eliminating immediate left recursion is only provided for the purposes of the example, in fact.

## Treatment of the algorithms

### Eliminating cycles

Consider the following BNF:
```
  S  ::=  X "a" | Y ;

  X  ::=  Y | "b" ;

  Y  ::=  Z | "c" ;

  Z  ::=  X "d" ;
```
This results in the cycle `Y -> Z -> X ("d") -> Y`, abbreviated `Y ->* Y`. Here the terminal part `"d"` of the `Z` rule's definition is put in parenthesis to emphasise that although it is part of the definition, it is not evaluated. Only the first part `X` is evaluated, which leads immediately to an evaluation of the first definition of the `X` rule, namely `Y`. Also note that the derivation `X -> Y -> Z -> X ("d")` is not considered a cycle because it does not terminate in a unit definition. In abbreviated form it is `X ->* X "d"`, which is an example of implicit left recursion, but not of a cycle.

The algorithm is pre-emptive. It removes all unit definitions, thereby forestalling any chance of cycles being created. The removal of the unit definition `Y` in the `X` rule will break the aforementioned cycle, for example.

The first stage is to split the rules into 'non-units' rules, that is rules without unit definitions, and 'unit' rules. The former are...
```
  S  ::=  X "a" ;
  X  ::=  "b" ;
  Y  ::=  "c" ;
  Z  ::=  "d" ;
```
...and the latter:
```
  S  ::=  Y ;
  X  ::=  Y ;
  Y  ::=  Z ;
```
The algorithm then works on the stack of 'unit' rules, popping rules off the top for consideration until none are left. The first one in this case is `S  ::=  Y`. If the 'unit' rule is cyclic, say `Y  ::=  Y`, or if it has been considered already, it is simply discarded and the next rule is considered.

Assuming neither of these conditions hold, the list of 'non-units' rules is searched and the rule the name of which matches the rule name in the rule under consideration's unit definition is found. The definitions of this rule are then coupled with the rule under consideration's name to form a new rule. An example will clarify. The first 'unit' rule under consideration is `S  ::=  Y`, the matching 'non-units' rule is `Y  ::=  "c"` and therefore the new 'non-units' rule is `S  ::=  "c"`. In effect the derivation `S -> Y -> "c"` is reduced to `S -> "c"`. The essence of the algorithm is in reducing all such derivations.

To continue, the stack of remaining 'unit' rules is also searched for matching rules and these are combined with the rule under consideration to make new 'unit' rules which are pushed onto the stack to be the next rules under consideration. Again an example should clarify. The `S  ::=  Y` 'unit' rule is coupled with the `Y  ::=  Z` 'unit' rule to form a new unit rule `S  ::=  Z`.

The result of the first iteration of the algorithm is an evolving stack of 'unit' rules, shown on the left, and a burgeoning list of new 'non-units' rules, shown on the right. The list of old 'unit' rules is kept above the dotted line:
```
  S  ::=  Y ;         S  ::=  "c" ;
  ---------
  S  ::=  Z ;
  X  ::=  Y ;
  Y  ::=  Z ;
```
The remaining iterations are now given with pertinent comments:
```
  S  ::=  Y ;         S  ::=  "c" ;
  S  ::=  Z ;         S  ::=  "d" ;
  ---------
  X  ::=  Y ;
  Y  ::=  Z ;
```
There are no matching 'unit' rules of the form `Z  ::=  .`, so no new 'unit' rules are formed. Only one matching 'non-unit' rule, namely `Z  ::=  "d"`, results in the new 'non-unit' rule `S  ::=  "d"`.
```
  S  ::=  Y ;         S  ::=  "c" ;
  S  ::=  Z ;         S  ::=  "d" ;
  X  ::=  Y ;         X  ::=  "c" ;
  ---------
  X  ::=  Z ;
  Y  ::=  Z ;
```
```
  S  ::=  Y ;         S  ::=  "c" ;
  S  ::=  Z ;         S  ::=  "d" ;
  X  ::=  Y ;         X  ::=  "c" ;
  X  ::=  Z ;         X  ::=  "d" ;
  ---------
  Y  ::=  Z ;
```
```
  S  ::=  Y ;         S  ::=  "c" ;
  S  ::=  Z ;         S  ::=  "d" ;
  X  ::=  Y ;         X  ::=  "c" ;
  X  ::=  Z ;         X  ::=  "d" ;
  Y  ::=  Z ;         Y  ::=  "d" ;
  ---------
```
Finally, the old 'unit' rules are discarded and the newly formed 'non-units' rules are combined with the original ones to create a new set:
```
  S  ::=  X "a" | "c" | "d" ;

  X  ::=  "b" | "c" | "d" ;

  Y  ::=  "c" | "d" ;

  Z  ::=  "d" ;
```
There are a couple of points worth noting. The first is that termination can be informally proved by noting there are a finite number of 'unit' rules and that each is evaluated at most once. The second is that the effective order of the definitions may change. For example, if the first rule is changed to `S  ::=  Y | X "a"` then the result `S  ::=  X "a" | "c" | "d"` stays the same, with the definition `X "a"` coming before the remaining two definitions `"c"` and `"d"`. Theoretically this should not matter, however in practice it can be difficult not to occasionally rely on it. A better algorithm would maintain the order of the definitions, and this is left for future work.

### Eliminating immediate left recursion

Consider the following BNF:
```
  Y  ::=  "a" | "b" | Y "c";
```
The problem is that this could result in the derivation `Y -> Y ("c")` or, losing the convention that those parts of a definition that are never evaluated are shown in parenthesis, simply `Y -> Y "c"`.

On the surface of it this algorithm is much simpler than those to deal with eliminating cycles or implicit left recursion and, unlike those two, the algorithm is pre-emptive in the sense that it directly removes immediate left recursion where it finds it but otherwise leaves the BNF as-is.

It works by identifying immediately left recursive definitions within in any rule, in this case the `Y "c"` rule, and rewriting the resultant rule as right recursive. A part referencing the new rule is then appended to any definition that is not immediately left recursive, thus:
```
  Y  ::=  "a" Y~ | "b" Y~;

  Y~ ::=  "c" Y~ | ε;
```
The `ε` definition here matches nothing and allows the right recursive rule to terminate.

Two special cases deserve mention. The first is the lack of definitions other than immediately left recursive ones. Consider:
```
  Y  ::=  Y "c";
```
The algorithm will handle this case, returning the following:
```
  Y  ::= Y~ ;

  Y~ ::= "c" Y~ | ε ;
```
In doing so it could be argued that it is changing the nature of the grammar. However, so does the algorithm to eliminate cycles, and we leave the argument at that. Secondly, there may be more than one immediately left recursive definition:
```
  Y  ::=  "a" | "b" | Y "c" | Y "d" ;
```
This is not really a special case as such and is dealt with in a standard way:
```
  Y  ::= "a" Y~ | "b" Y~ ;

  Y~ ::= "c" Y~ | "d" Y~ | ε ;
```

One further point worth noting is that it is usual to show the left recursive definitions first. In practice, however, rules of the above form are just as likely and left recursive definitions should be eliminated regardless of where they appear. Again it is worth pointing out that theoretically the order of definitions in any rule should not matter or, to be more exact this time, the fact that the order of definitions does matter implies that the grammar is ambiguous, and should be corrected if possible.

### Eliminating implicit left recursion

Like the algorithm to eliminate cycles, this algorithm is pre-emptive in that it does not explicitly remove implicit left recursion. Instead, it rearranges the BNF so that no left recursion can occur. Consider the following BNF:
```
  S  ::=  X "b" ;

  X  ::=  Y "a" ;

  Y  ::=  S "c" ;
```
Here there are no cycles, since none of the definitions are unit definitions and a cycle must end with a unit definition. However, there is implicit left recursion in the form of the derivation `S -> X ("b") -> Y ("a") -> S ("c")`, abbreviated `S ->* S "c""`. Recall that the parts of the definitions shown in parenthesis represent those parts that are never evaluated.

In order to eliminate left recursion we disallow rules that reference previous ones. The first two rules are okay, however the third `Y` references the `S` rule and so must be changed. The `S` part of the rule's definition is therefore replaced with the right hand side of the `S` rule leading to the intermediate rule `Y  ::=  X "b" "c"`. This similarly needs to be changed, replacing the reference to the `X` rule with its right hand side to yield `Y  ::=  Y "a" "b" "c"`. Now this rule no longer references previous rules, however it is immediately left recursive. Eliminating this gives the completed set of rules:
```
  S  ::=  X "b" ;

  X  ::=  Y "a" ;

  Y  ::=  Y~ ;

  Y~ ::=  "a" "b" "c" Y~ | ε ;
```

### Caveats

Consider the following BNF:

```
  S  ::=  X | "b" ;

  X  ::=  S "a" ;
```


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
