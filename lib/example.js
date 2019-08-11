'use strict';

require('juxtapose');

var easy = require('easy');

var View = require('./example/view');

var Body = easy.Body;


var body = new Body();

body.append(React.createElement(View, null));

/*




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9leGFtcGxlLmpzIl0sIm5hbWVzIjpbInJlcXVpcmUiLCJlYXN5IiwiVmlldyIsIkJvZHkiLCJib2R5IiwiYXBwZW5kIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQUEsUUFBUSxXQUFSOztBQUVBLElBQU1DLE9BQU9ELFFBQVEsTUFBUixDQUFiOztBQUVBLElBQU1FLE9BQU9GLFFBQVEsZ0JBQVIsQ0FBYjs7SUFFUUcsSSxHQUFTRixJLENBQVRFLEk7OztBQUVSLElBQU1DLE9BQU8sSUFBSUQsSUFBSixFQUFiOztBQUVBQyxLQUFLQyxNQUFMLENBRUUsb0JBQUMsSUFBRCxPQUZGOztBQVFBIiwiZmlsZSI6ImV4YW1wbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbnJlcXVpcmUoJ2p1eHRhcG9zZScpO1xuXG5jb25zdCBlYXN5ID0gcmVxdWlyZSgnZWFzeScpO1xuXG5jb25zdCBWaWV3ID0gcmVxdWlyZSgnLi9leGFtcGxlL3ZpZXcnKTtcblxuY29uc3QgeyBCb2R5IH0gPSBlYXN5O1xuXG5jb25zdCBib2R5ID0gbmV3IEJvZHkoKTtcblxuYm9keS5hcHBlbmQoXG5cbiAgPFZpZXcgLz5cblxuKTtcblxuXG5cbi8qXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IHRlcm0gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG5lZ2F0ZWRFeHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm0gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cblxuICBuZWdhdGVkRXhwcmVzc2lvbiAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgY29tcG91bmRFeHByZXNzaW9ufiAgICAgICAgIDo6PSBcIitcIiBleHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiL1wiIGV4cHJlc3Npb24gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcG91bmRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgICAgICA6Oj0gbmVnYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBuZWdhdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cbiAgcXVvdGllbnR+ICAgICAgICAgICAgICAgICAgIDo6PSBcIi9cIiBleHByZXNzaW9uIHF1b3RpZW50flxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBzdW1+ICAgICAgICAgICAgICAgICAgICAgICAgOjo9IFwiK1wiIGV4cHJlc3Npb24gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcG91bmRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgICAgICA6Oj0gbmVnYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBuZWdhdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cbiAgcXVvdGllbnR+ICAgICAgICAgICAgICAgICAgIDo6PSBcIi9cIiBleHByZXNzaW9uIHF1b3RpZW50flxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBzdW1+ICAgICAgICAgICAgICAgICAgICAgICAgOjo9IFwiK1wiIGV4cHJlc3Npb24gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5cblxuXG5cbiAqL1xuXG4iXX0=