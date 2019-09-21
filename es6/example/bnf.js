'use strict';

const exampleBNF = `
  

    L ::= L! "c"

        | "a"

        | "a" "b"

        ;



`;

module.exports = exampleBNF;

/*



  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;






  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression     ::= expression operator expression

                            | "xyz"

                            ;






    S  ::= A C ;

    A  ::= "." B ;

    B  ::= A | "." C ;

    C  ::= D E ;

    D  ::= C ;

    E  ::= "." ;






    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [unassigned] ;







  part             ::= zeroOrMoreParts

                     | optionalPart

                     | ruleName

                     ;

  zeroOrMoreParts  ::= part "*" ;

  optionalPart     ::= part "?" ;

  ruleName         ::= [unassigned] ;







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

  ruleName       ::= [unassigned] ;













  definition      ::= part+ ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  ruleName        ::= [unassigned] ;











  part           ::= part "?"

                   | part "!"

                   | ruleName

                   ;


  ruleName       ::= [unassigned] ;














  part            ::= optionalPart

                    | lookAheadPart

                    | ruleName

                    ;


  optionalPart    ::= part "?" ;

  lookAheadPart   ::= part "!" ;


  ruleName        ::= [unassigned] ;











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



 */
