'use strict';

var exampleBNF = '\n\n  expression            ::=  compoundExpression\n\n                          |  "(" expression ")"\n\n                          |  term\n\n                          ;\n\n  compoundExpression    ::=  arithmeticExpression ;\n\n  arithmeticExpression  ::=  expression "+" expression \n\n                          |  expression "/" expression \n\n                          ;\n\n  term                  ::=  /\\d+/ ;\n  \n ';

module.exports = exampleBNF;

/*



  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;

  operator            ::= "+" | "-" | "/" | "*" ;

  term                ::= /\d+/ ;





    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;










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
















                 expression  ::=  arithmeticExpression

                               |  "xyz"

                               ;


       arithmeticExpression  ::=  addition ;


                   addition  ::=  expression "+" expression ;










  definition     ::= part+ ;

  optionalPart   ::= part "?" ;

  part           ::= optionalPart

                   | ruleName

                   ;

  ruleName       ::= [custom] ;













  definition      ::= part+ ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  ruleName        ::= [custom] ;











  part           ::= part "?"

                   | part "!"

                   | ruleName

                   ;


  ruleName       ::= [custom] ;














  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  ruleName        ::= [custom] ;











  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








  expression              ::= intermediateExpression

                            | "(" expression ")"

                            | term

                            ;

  intermediateExpression  ::= compoundExpression ;

  compoundExpression      ::= expression operator expression ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;







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




























  expression                  ::= parenthesisedExpression compoundExpression~

                                | negatedExpression compoundExpression~

                                | term compoundExpression~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  negatedExpression           ::= "-" expression ;


  compoundExpression~         ::= "+" expression compoundExpression~

                                | "/" expression compoundExpression~

                                | ε

                                ;


  term                        ::= /\d+/ ;






















  expression                  ::= parenthesisedExpression quotient~ sum~

                                | compoundExpression quotient~ sum~

                                | term quotient~ sum~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  compoundExpression          ::= negation

                                ;


  negation                    ::= "-" expression ;


  term                        ::= /\d+/ ;


  quotient~                   ::= "/" expression quotient~

                                | ε

                                ;


  sum~                        ::= "+" expression sum~

                                | ε

                                ;




























  expression                  ::= parenthesisedExpression quotient~ sum~

                                | compoundExpression quotient~ sum~

                                | term quotient~ sum~

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  compoundExpression          ::= negation

                                ;


  negation                    ::= "-" expression ;


  term                        ::= /\d+/ ;


  quotient~                   ::= "/" expression quotient~

                                | ε

                                ;


  sum~                        ::= "+" expression sum~

                                | ε

                                ;










 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEscWJBQU47O0FBc0JBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb24gO1xuXG4gIGFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvbiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uIFwiL1wiIGV4cHJlc3Npb24gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gIC9cXFxcZCsvIDtcbiAgXG4gYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuICAgIEwgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgfCBMIFwiZFwiXG5cbiAgICAgICAgfCBcImFcIlxuXG4gICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICA7XG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgICA6Oj0gemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgOjo9IHBhcnQgXCIqXCIgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICBleHByZXNzaW9uICA6Oj0gIGFyaXRobWV0aWNFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgIGFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGFkZGl0aW9uIDtcblxuXG4gICAgICAgICAgICAgICAgICAgYWRkaXRpb24gIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uIDtcblxuXG5cblxuXG5cblxuXG5cblxuICBkZWZpbml0aW9uICAgICA6Oj0gcGFydCsgO1xuXG4gIG9wdGlvbmFsUGFydCAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBwYXJ0ICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICA7XG5cbiAgcnVsZU5hbWUgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBkZWZpbml0aW9uICAgICAgOjo9IHBhcnQrIDtcblxuXG4gIG9wdGlvbmFsUGFydCAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgbG9va0FoZWFkUGFydCAgIDo6PSBwYXJ0IFwiIVwiIDtcblxuXG4gIHBhcnQgICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG9wdGlvbmFsUGFydCAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgbG9va0FoZWFkUGFydCAgIDo6PSBwYXJ0IFwiIVwiIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gaW50ZXJtZWRpYXRlRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBpbnRlcm1lZGlhdGVFeHByZXNzaW9uICA6Oj0gY29tcG91bmRFeHByZXNzaW9uIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiAgIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiBjb21wb3VuZEV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBuZWdhdGVkRXhwcmVzc2lvbiBjb21wb3VuZEV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiAgICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgO1xuXG5cbiAgbmVnYXRlZEV4cHJlc3Npb24gICAgICAgICAgIDo6PSBcIi1cIiBleHByZXNzaW9uIDtcblxuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbn4gICAgICAgICA6Oj0gXCIrXCIgZXhwcmVzc2lvbiBjb21wb3VuZEV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIi9cIiBleHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICA6Oj0gcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvbXBvdW5kRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybSBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICAgICAgOjo9IG5lZ2F0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgbmVnYXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSBcIi1cIiBleHByZXNzaW9uIDtcblxuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG4gIHF1b3RpZW50fiAgICAgICAgICAgICAgICAgICA6Oj0gXCIvXCIgZXhwcmVzc2lvbiBxdW90aWVudH5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgc3VtfiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSBcIitcIiBleHByZXNzaW9uIHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICA6Oj0gcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IGNvbXBvdW5kRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybSBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICAgICAgOjo9IG5lZ2F0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgbmVnYXRpb24gICAgICAgICAgICAgICAgICAgIDo6PSBcIi1cIiBleHByZXNzaW9uIDtcblxuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG4gIHF1b3RpZW50fiAgICAgICAgICAgICAgICAgICA6Oj0gXCIvXCIgZXhwcmVzc2lvbiBxdW90aWVudH5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgc3VtfiAgICAgICAgICAgICAgICAgICAgICAgIDo6PSBcIitcIiBleHByZXNzaW9uIHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuXG5cblxuXG5cblxuXG4gKi9cbiJdfQ==