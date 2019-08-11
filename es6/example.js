'use strict';

require('juxtapose');

const easy = require('easy');

const View = require('./example/view');

const { Body } = easy;

const body = new Body();

body.append(

  <View />

);



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

