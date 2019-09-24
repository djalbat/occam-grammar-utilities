'use strict';

var exampleBNF = '\n\n    L ::= L! "c"\n\n        | L "d"\n\n        | "a"\n\n        | "a" "b"\n\n        ;\n\n\n\n\n\n';

module.exports = exampleBNF;

/*




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
















  expression                  ::= parenthesisedExpression

                                | negatedExpression

                                | term

                                ;


  parenthesisedExpression     ::= "(" expression ")" ;


  negatedExpression           ::= "-" expression ;


  term                        ::= /\d+/ ;











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












    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;








 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEscUhBQU47O0FBa0JBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgTCBcImRcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cblxuXG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgIDo6PSB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgfCBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgemVyb09yTW9yZVBhcnRzICA6Oj0gcGFydCBcIipcIiA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcnVsZU5hbWUgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cbiAgUyA6Oj0gQSBDIDtcblxuICBBIDo6PSBcIi5cIiBCIDtcblxuICBCIDo6PSBBIHwgXCIuXCIgQyA7XG5cbiAgQyA6Oj0gRCBFIDtcblxuICBEIDo6PSBDIDtcblxuICBFIDo6PSBcIi5cIiA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbmVnYXRlZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiAgICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgO1xuXG5cbiAgbmVnYXRlZEV4cHJlc3Npb24gICAgICAgICAgIDo6PSBcIi1cIiBleHByZXNzaW9uIDtcblxuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCB0ZXJtIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBleHByZXNzaW9ufiAgIDo6PSBvcGVyYXRvciBleHByZXNzaW9uIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgOjo9IFwiK1wiXG5cbiAgICAgICAgICAgICAgICAgIHwgXCIvXCJcblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gaW50ZXJtZWRpYXRlRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBpbnRlcm1lZGlhdGVFeHByZXNzaW9uICA6Oj0gY29tcG91bmRFeHByZXNzaW9uIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb24gO1xuXG4gIGFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24gXCIvXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9ICAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG4gKi9cbiJdfQ==