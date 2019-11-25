'use strict';

var exampleBNF = '\n\n  expression          ::=  compoundExpression\n\n                        |  "(" expression ")"\n\n                        |  term\n\n                        ;\n\n  compoundExpression  ::=  expression operator expression ;\n\n  operator            ::= "+" | "-" | "/" | "*" ;\n\n  term                ::= /\\d+/ ;\n\n';

module.exports = exampleBNF;

/*

  expression          ::=  expression operator expression

                        |  "(" expression ")"

                        |  term

                        ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;







    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;





  compoundExpression  ::=  expression operator expression ;


  C ::= D "a" ;

  D ::= C "b" ;



  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;



  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;





  expression          ::=  expression operator expression

                        |  "(" expression ")"

                        |  term

                        ;

  operator            ::=  operator "."

                        |  "+"

                        |  "-"

                        |  "*"

                        |  "/"

                        ;

  term                ::= /\d+/ ;



  S ::= A C ;

  A ::= "." B C ;

  B ::= A | "." C ;

  C ::= D E ;

  D ::= C "." ;

  E ::= "." ;




  C ::= D "e"

      | "f"

      ;

  D ::= C ;










  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;


  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;





  expression              ::=  sumOfExpressions

                            |  differenceOfExpressions

                            |  "(" expression ")"

                            |  term

                            ;

  sumOfExpressions        ::=  expression "+" expression ;

  differenceOfExpressions ::=  expression "-" expression ;

  term                    ::= /\d+/ ;














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






  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [custom] ;



























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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsK1VBQU47O0FBa0JBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgTCBcImRcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cblxuXG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cblxuICBDIDo6PSBEIFwiYVwiIDtcblxuICBEIDo6PSBDIFwiYlwiIDtcblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSAgb3BlcmF0b3IgXCIuXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIrXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCItXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIqXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG4gIFMgOjo9IEEgQyA7XG5cbiAgQSA6Oj0gXCIuXCIgQiBDIDtcblxuICBCIDo6PSBBIHwgXCIuXCIgQyA7XG5cbiAgQyA6Oj0gRCBFIDtcblxuICBEIDo6PSBDIFwiLlwiIDtcblxuICBFIDo6PSBcIi5cIiA7XG5cblxuXG5cbiAgQyA6Oj0gRCBcImVcIlxuXG4gICAgICB8IFwiZlwiXG5cbiAgICAgIDtcblxuICBEIDo6PSBDIDtcblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9ICBzdW1PZkV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBkaWZmZXJlbmNlT2ZFeHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHN1bU9mRXhwcmVzc2lvbnMgICAgICAgIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uIDtcblxuICBkaWZmZXJlbmNlT2ZFeHByZXNzaW9ucyA6Oj0gIGV4cHJlc3Npb24gXCItXCIgZXhwcmVzc2lvbiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgIHBhcnQgICAgICAgICAgICAgICAgIDo6PSBwYXJ0IFwiP1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG5lZ2F0ZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgbmVnYXRlZEV4cHJlc3Npb24gICAgICAgICAgIDo6PSBcIi1cIjxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgICA6Oj0gemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgOjo9IHBhcnQgXCIqXCIgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IHRlcm0gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBpbnRlcm1lZGlhdGVFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGludGVybWVkaWF0ZUV4cHJlc3Npb24gIDo6PSBjb21wb3VuZEV4cHJlc3Npb24gO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvbiA7XG5cbiAgYXJpdGhtZXRpY0V4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbiBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gIC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gKi9cbiJdfQ==