'use strict';

var exampleBNF = '\n  expression    ::=  <NO_WHITESPACE>expression "+" expression\n\n                  |  expression! "/" expression\n\n                  |  "(" expression ")"\n\n                  |  term\n\n                  ;\n\n\n  term          ::= naturalNumber ;\n\n  naturalNumber ::= /\\d+/ ;         \n';

module.exports = exampleBNF;

/*



  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;







  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;










  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= expression "+" expression

                          | "xyz"

                          ;

  term                  ::= /\d+/ ;



 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsb1RBQU47O0FBaUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG4gIGV4cHJlc3Npb24gICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5leHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbiEgXCIvXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgdGVybSAgICAgICAgICA6Oj0gbmF0dXJhbE51bWJlciA7XG5cbiAgbmF0dXJhbE51bWJlciA6Oj0gL1xcXFxkKy8gOyAgICAgICAgIFxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuICBMICAgIDo6PSBMISBcImNcIlxuXG4gICAgICAgICB8IFwiYVwiXG5cbiAgICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICAgO1xuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFyZW50aGVzaXNlZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gc3VtT2ZFeHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgc3VtT2ZFeHByZXNzaW9ucyAgICAgICAgOjo9IGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcImFiY1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuICovIl19