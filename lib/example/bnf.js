'use strict';

var exampleBNF = '\n\n  expression          ::=  compoundExpression\n\n                        |  "(" expression ")"\n\n                        |  term\n\n                        ;\n\n  compoundExpression  ::=  expression operator expression\n\n                        |  "xyz"\n\n                        ;\n\n\n  operator            ::= "+" | "-" | "/" | "*" ;\n\n  term                ::= /\\d+/ ;\n\n';

module.exports = exampleBNF;

/*





  expression              ::=  sumOfExpressions

                            |  differenceOfExpressions

                            |  "(" expression ")"

                            |  term

                            ;

  sumOfExpressions        ::=  expression "+" expression ;

  differenceOfExpressions ::=  expression "-" expression ;

  term                    ::= /\d+/ ;








  S ::= A C ;

  A ::= "." B ;

  B ::= A | "." C ;

  C ::= D E ;

  D ::= C ;

  E ::= "." ;





    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsZ1pBQU47O0FBdUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gIHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGRpZmZlcmVuY2VPZkV4cHJlc3Npb25zXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgc3VtT2ZFeHByZXNzaW9ucyAgICAgICAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG4gIGRpZmZlcmVuY2VPZkV4cHJlc3Npb25zIDo6PSAgZXhwcmVzc2lvbiBcIi1cIiBleHByZXNzaW9uIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG4gIFMgOjo9IEEgQyA7XG5cbiAgQSA6Oj0gXCIuXCIgQiA7XG5cbiAgQiA6Oj0gQSB8IFwiLlwiIEMgO1xuXG4gIEMgOjo9IEQgRSA7XG5cbiAgRCA6Oj0gQyA7XG5cbiAgRSA6Oj0gXCIuXCIgO1xuXG5cblxuXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgTCBcImRcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cbiAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBuZWdhdGVkRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG5lZ2F0ZWRFeHByZXNzaW9uICAgICAgICAgICA6Oj0gXCItXCI8Tk9fV0hJVEVTUEFDRT5leHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgICAgOjo9IHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICB8IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgIDtcblxuICB6ZXJvT3JNb3JlUGFydHMgIDo6PSBwYXJ0IFwiKlwiIDtcblxuICBvcHRpb25hbFBhcnQgICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBydWxlTmFtZSAgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiAgIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gaW50ZXJtZWRpYXRlRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBpbnRlcm1lZGlhdGVFeHByZXNzaW9uICA6Oj0gY29tcG91bmRFeHByZXNzaW9uIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb24gO1xuXG4gIGFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24gXCIvXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9ICAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICovXG4iXX0=