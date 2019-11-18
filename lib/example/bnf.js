'use strict';

var exampleBNF = '\n\n  expression          ::=  expression operator expression\n\n                        |  "(" expression ")"\n\n                        |  term\n\n                        ;\n\n\n\n';

module.exports = exampleBNF;

/*

    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;


  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;



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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEscU1BQU47O0FBY0FDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgTCBcImRcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuICBjb21wb3VuZEV4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuXG4gIEMgOjo9IEQgXCJhXCIgO1xuXG4gIEQgOjo9IEMgXCJiXCIgO1xuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9ICBvcGVyYXRvciBcIi5cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIitcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIi1cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIipcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cbiAgUyA6Oj0gQSBDIDtcblxuICBBIDo6PSBcIi5cIiBCIEMgO1xuXG4gIEIgOjo9IEEgfCBcIi5cIiBDIDtcblxuICBDIDo6PSBEIEUgO1xuXG4gIEQgOjo9IEMgXCIuXCIgO1xuXG4gIEUgOjo9IFwiLlwiIDtcblxuXG5cblxuICBDIDo6PSBEIFwiZVwiXG5cbiAgICAgIHwgXCJmXCJcblxuICAgICAgO1xuXG4gIEQgOjo9IEMgO1xuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgb3BlcmF0b3IgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gIHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRpZmZlcmVuY2VPZkV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgc3VtT2ZFeHByZXNzaW9ucyAgICAgICAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG4gIGRpZmZlcmVuY2VPZkV4cHJlc3Npb25zIDo6PSAgZXhwcmVzc2lvbiBcIi1cIiBleHByZXNzaW9uIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICA6Oj0gcGFyZW50aGVzaXNlZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbmVnYXRlZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiAgICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBuZWdhdGVkRXhwcmVzc2lvbiAgICAgICAgICAgOjo9IFwiLVwiPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgIDo6PSB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgfCBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgemVyb09yTW9yZVBhcnRzICA6Oj0gcGFydCBcIipcIiA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcnVsZU5hbWUgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgdGVybSBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gICA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiL1wiXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGludGVybWVkaWF0ZUV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgaW50ZXJtZWRpYXRlRXhwcmVzc2lvbiAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvbiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gIGFyaXRobWV0aWNFeHByZXNzaW9uIDtcblxuICBhcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgIDo6PSAgL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAqL1xuIl19