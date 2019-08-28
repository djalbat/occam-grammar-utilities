'use strict';

var exampleBNF = '\n\n\n\n\n  expression              ::= compoundExpression\n\n                            | "(" expression ")"\n\n                            | term\n\n                            ;\n\n  compoundExpression      ::= expression operator expression\n\n                            | "xyz"\n\n                            ;\n\n  operator                ::= "+" | "-" | "/" | "*" ;\n\n  term                    ::= /\\d+/ ;\n\n\n\n\n';

module.exports = exampleBNF;

/*







  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | expression "/" expression

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;










  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;






  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;





  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;









  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression      ::= expression operator expression

                            | "xyz"

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEseWJBQU47O0FBNEJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG5cblxuXG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwcmVzc2lvbiBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBzdW1PZkV4cHJlc3Npb25zICAgICAgICA6Oj0gZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiYWJjXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24hIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHRlcm0gICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgO1xuXG4gIG5hdHVyYWxOdW1iZXIgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG4gIEwgICAgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgIHwgXCJhXCJcblxuICAgICAgICAgfCBcImFcIiBcImJcIlxuXG4gICAgICAgICA7XG5cblxuXG5cblxuICBMICAgIDo6PSBMISBcImNcIlxuXG4gICAgICAgICB8IFwiYVwiXG5cbiAgICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICAgO1xuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHN1bU9mRXhwcmVzc2lvbnMgICAgICAgIDo6PSBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJhYmNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgOjo9IGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG4gKi8iXX0=