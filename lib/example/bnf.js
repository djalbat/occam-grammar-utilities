'use strict';

var exampleBNF = '\n      document             ::=  ( rule | error )+ ;\n      \n      rule                 ::=  name "::=" definitions ";" ;\n      \n      definitions          ::=  definition ( "|" definition )* ;\n      \n      definition           ::=  part+ ;\n      \n      noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;\n    \n      optionalPart         ::=  part<NO_WHITESPACE>"?" ;\n                              \n      zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;\n\n      oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;\n      \n      lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;\n\n      groupOfParts         ::=  "(" part part+ ")" ;\n      \n      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;\n    \n      part                 ::=  noWhitespacePart\n                    \n                             |  optionalPart  \n                    \n                             |  zeroOrMoreParts\n                    \n                             |  oneOrMoreParts  \n                    \n                             |  lookAheadPart\n\n                             |  groupOfParts\n                               \n                             |  choiceOfParts  \n                               \n                             |  ruleName\n                    \n                             |  regularExpression \n                    \n                             |  significantTokenType \n    \n                             |  terminalSymbol\n                              \n                             |  endOfLine\n                    \n                             |  epsilon\n    \n                             |  wildcard\n                                  \n                             ;\n    \n      name                 ::=  [name] ;\n\n      ruleName             ::=  [name] ;\n    \n      regularExpression    ::=  [regular-expression] ;\n      \n      significantTokenType ::=  [type] ;\n    \n      terminalSymbol       ::=  [string-literal] ;\n      \n      endOfLine            ::=  "<END_OF_LINE>" ;\n      \n      epsilon              ::=  "\u03B5" ;\n    \n      wildcard             ::=  "." ;\n\n      error                ::=  . ;\n';

module.exports = exampleBNF;

/*



    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;





  expression                  ::= parenthesisedExpression

                                | compoundExpression

                                | negatedExpression

                                | term

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;

  compoundExpression          ::= expression operator expression ;

  negatedExpression           ::= "-"<NO_WHITESPACE>expression ;

  operator                    ::= "+" | "-" | "/" | "*" ;

  term                        ::= /\d+/ ;







    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;








  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [custom] ;







  S ::= A C ;

  A ::= "." B ;

  B ::= A | "." C ;

  C ::= D E ;

  D ::= C ;

  E ::= "." ;
























  expression    ::= "(" expression ")" expression~

                  | term expression~

                  ;

  expression~   ::= operator expression expression~

                  | ε

                  ;

  operator      ::= "+"

                  | "/"

                  ;

  term          ::= /\d+/ ;














  expression              ::= intermediateExpression

                            | "(" expression ")"

                            | term

                            ;

  intermediateExpression  ::= compoundExpression ;

  compoundExpression      ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;














  expression            ::=  compoundExpression

                          |  "(" expression ")"

                          |  term

                          ;

  compoundExpression    ::=  arithmeticExpression ;

  arithmeticExpression  ::=  expression "+" expression

                          |  expression "/" expression

                          ;

  term                  ::=  /\d+/ ;














  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;














 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsa3BFQUFOOztBQXdFQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakI7O0FBRUEiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBleGFtcGxlQk5GID0gYFxuICAgICAgZG9jdW1lbnQgICAgICAgICAgICAgOjo9ICAoIHJ1bGUgfCBlcnJvciApKyA7XG4gICAgICBcbiAgICAgIHJ1bGUgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBcIjo6PVwiIGRlZmluaXRpb25zIFwiO1wiIDtcbiAgICAgIFxuICAgICAgZGVmaW5pdGlvbnMgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG4gICAgICBcbiAgICAgIGRlZmluaXRpb24gICAgICAgICAgIDo6PSAgcGFydCsgO1xuICAgICAgXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgcGFydCA7XG4gICAgXG4gICAgICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICAgICAgb25lT3JNb3JlUGFydHMgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIrXCIgO1xuICAgICAgXG4gICAgICBsb29rQWhlYWRQYXJ0ICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGdyb3VwT2ZQYXJ0cyAgICAgICAgIDo6PSAgXCIoXCIgcGFydCBwYXJ0KyBcIilcIiA7XG4gICAgICBcbiAgICAgIGNob2ljZU9mUGFydHMgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuICAgIFxuICAgICAgcGFydCAgICAgICAgICAgICAgICAgOjo9ICBub1doaXRlc3BhY2VQYXJ0XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnQgIFxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVBhcnRzXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVQYXJ0cyAgXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZ3JvdXBPZlBhcnRzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNob2ljZU9mUGFydHMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb24gXG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzaWduaWZpY2FudFRva2VuVHlwZSBcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVwc2lsb25cbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuICAgIFxuICAgICAgbmFtZSAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG4gICAgXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyLWV4cHJlc3Npb25dIDtcbiAgICAgIFxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuICAgIFxuICAgICAgdGVybWluYWxTeW1ib2wgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcbiAgICAgIFxuICAgICAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG4gICAgICBcbiAgICAgIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcbiAgICBcbiAgICAgIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG4gICAgICBlcnJvciAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuICAgIHBhcnQgICAgICAgICAgICAgICAgIDo6PSBwYXJ0IFwiP1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG5lZ2F0ZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgbmVnYXRlZEV4cHJlc3Npb24gICAgICAgICAgIDo6PSBcIi1cIjxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuICAgIEwgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgfCBMIFwiZFwiXG5cbiAgICAgICAgfCBcImFcIlxuXG4gICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICA7XG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgIDo6PSB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgfCBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgemVyb09yTW9yZVBhcnRzICA6Oj0gcGFydCBcIipcIiA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcnVsZU5hbWUgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG4gIFMgOjo9IEEgQyA7XG5cbiAgQSA6Oj0gXCIuXCIgQiA7XG5cbiAgQiA6Oj0gQSB8IFwiLlwiIEMgO1xuXG4gIEMgOjo9IEQgRSA7XG5cbiAgRCA6Oj0gQyA7XG5cbiAgRSA6Oj0gXCIuXCIgO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgdGVybSBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gICA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiL1wiXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGludGVybWVkaWF0ZUV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgaW50ZXJtZWRpYXRlRXhwcmVzc2lvbiAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvbiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gIGFyaXRobWV0aWNFeHByZXNzaW9uIDtcblxuICBhcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgIDo6PSAgL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAqL1xuIl19