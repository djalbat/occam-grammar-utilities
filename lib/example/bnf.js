'use strict';

var exampleBNF = '\n\n  part             ::= zeroOrMoreParts\n\n                     | optionalPart\n\n                     | ruleName\n\n                     ;\n\n  zeroOrMoreParts  ::= part "*" ;\n\n  optionalPart     ::= part "?" ;\n\n  ruleName         ::= [custom] ;\n\n\n\n\n\n\n\n\n';

module.exports = exampleBNF;

/*



    L ::= L! "c"

        | L "d"

        | "a"

        | "a" "b"

        ;







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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsOFJBQU47O0FBeUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgcGFydCAgICAgICAgICAgICA6Oj0gemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgOjo9IHBhcnQgXCIqXCIgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cblxuXG4gICAgTCA6Oj0gTCEgXCJjXCJcblxuICAgICAgICB8IEwgXCJkXCJcblxuICAgICAgICB8IFwiYVwiXG5cbiAgICAgICAgfCBcImFcIiBcImJcIlxuXG4gICAgICAgIDtcblxuXG5cblxuXG5cblxuICBTIDo6PSBBIEMgO1xuXG4gIEEgOjo9IFwiLlwiIEIgO1xuXG4gIEIgOjo9IEEgfCBcIi5cIiBDIDtcblxuICBDIDo6PSBEIEUgO1xuXG4gIEQgOjo9IEMgO1xuXG4gIEUgOjo9IFwiLlwiIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBuZWdhdGVkRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cblxuICBuZWdhdGVkRXhwcmVzc2lvbiAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IHRlcm0gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBpbnRlcm1lZGlhdGVFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGludGVybWVkaWF0ZUV4cHJlc3Npb24gIDo6PSBjb21wb3VuZEV4cHJlc3Npb24gO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvbiA7XG5cbiAgYXJpdGhtZXRpY0V4cHJlc3Npb24gIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbiBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gIC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cbiAqL1xuIl19