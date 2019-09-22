'use strict';

var exampleBNF = '\n\n    L ::= L! "c"\n\n        | L "d"\n\n        | "a"\n\n        | "a" "b"\n\n        ;\n\n\n';

module.exports = exampleBNF;

/*



  L  ::= L_! "c" L~*

       | L_ "d" L~*

       | L_

       ;

  L_ ::= "a"

       | "a" "b"

       ;

  L~ ::= "c"

       | "d"

       ;

  expression          ::=  compoundExpression

                        |  "(" expression ")"

                        |  term

                        ;

  compoundExpression  ::=  expression operator expression

                        |  "xyz"

                        ;



    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;





  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








    S  ::= A C ;

    A  ::= "." B ;

    B  ::= A | "." C ;

    C  ::= D E ;

    D  ::= C ;

    E  ::= "." ;




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsK0dBQU47O0FBZUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICAgIEwgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgfCBMIFwiZFwiXG5cbiAgICAgICAgfCBcImFcIlxuXG4gICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICA7XG5cblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuICBMICA6Oj0gTF8hIFwiY1wiIEx+KlxuXG4gICAgICAgfCBMXyBcImRcIiBMfipcblxuICAgICAgIHwgTF9cblxuICAgICAgIDtcblxuICBMXyA6Oj0gXCJhXCJcblxuICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgIDtcblxuICBMfiA6Oj0gXCJjXCJcblxuICAgICAgIHwgXCJkXCJcblxuICAgICAgIDtcblxuICBleHByZXNzaW9uICAgICAgICAgIDo6PSAgY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICA6Oj0gIGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbiAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG4gICAgUyAgOjo9IEEgQyA7XG5cbiAgICBBICA6Oj0gXCIuXCIgQiA7XG5cbiAgICBCICA6Oj0gQSB8IFwiLlwiIEMgO1xuXG4gICAgQyAgOjo9IEQgRSA7XG5cbiAgICBEICA6Oj0gQyA7XG5cbiAgICBFICA6Oj0gXCIuXCIgO1xuXG5cblxuXG4gIHBhcnQgICAgICAgICAgICAgOjo9IHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICB8IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgIDtcblxuICB6ZXJvT3JNb3JlUGFydHMgIDo6PSBwYXJ0IFwiKlwiIDtcblxuICBvcHRpb25hbFBhcnQgICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBydWxlTmFtZSAgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICBhcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBhZGRpdGlvbiA7XG5cblxuICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvbiA7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgZGVmaW5pdGlvbiAgICAgOjo9IHBhcnQrIDtcblxuICBvcHRpb25hbFBhcnQgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcGFydCAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG4gIHJ1bGVOYW1lICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZGVmaW5pdGlvbiAgICAgIDo6PSBwYXJ0KyA7XG5cblxuICBvcHRpb25hbFBhcnQgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIGxvb2tBaGVhZFBhcnQgICA6Oj0gcGFydCBcIiFcIiA7XG5cblxuICBwYXJ0ICAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBydWxlTmFtZSAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgIDo6PSBwYXJ0IFwiP1wiXG5cbiAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBvcHRpb25hbFBhcnQgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIGxvb2tBaGVhZFBhcnQgICA6Oj0gcGFydCBcIiFcIiA7XG5cblxuICBydWxlTmFtZSAgICAgICAgOjo9IFtjdXN0b21dIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGludGVybWVkaWF0ZUV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgaW50ZXJtZWRpYXRlRXhwcmVzc2lvbiAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvbiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIGV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgIHwgdGVybSBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgZXhwcmVzc2lvbn4gICA6Oj0gb3BlcmF0b3IgZXhwcmVzc2lvbiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IM61XG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgIDo6PSBcIitcIlxuXG4gICAgICAgICAgICAgICAgICB8IFwiL1wiXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgICA6Oj0gcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgbmVnYXRlZEV4cHJlc3Npb24gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybSBjb21wb3VuZEV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuXG4gIG5lZ2F0ZWRFeHByZXNzaW9uICAgICAgICAgICA6Oj0gXCItXCIgZXhwcmVzc2lvbiA7XG5cblxuICBjb21wb3VuZEV4cHJlc3Npb25+ICAgICAgICAgOjo9IFwiK1wiIGV4cHJlc3Npb24gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIvXCIgZXhwcmVzc2lvbiBjb21wb3VuZEV4cHJlc3Npb25+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb21wb3VuZEV4cHJlc3Npb24gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm0gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiAgICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgO1xuXG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgICAgIDo6PSBuZWdhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG5lZ2F0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gXCItXCIgZXhwcmVzc2lvbiA7XG5cblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuICBxdW90aWVudH4gICAgICAgICAgICAgICAgICAgOjo9IFwiL1wiIGV4cHJlc3Npb24gcXVvdGllbnR+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHN1bX4gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgZXhwcmVzc2lvbiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBjb21wb3VuZEV4cHJlc3Npb24gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm0gcXVvdGllbnR+IHN1bX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiAgICAgOjo9IFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgO1xuXG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgICAgIDo6PSBuZWdhdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG5lZ2F0aW9uICAgICAgICAgICAgICAgICAgICA6Oj0gXCItXCIgZXhwcmVzc2lvbiA7XG5cblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuICBxdW90aWVudH4gICAgICAgICAgICAgICAgICAgOjo9IFwiL1wiIGV4cHJlc3Npb24gcXVvdGllbnR+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHN1bX4gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgZXhwcmVzc2lvbiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cblxuXG5cblxuXG5cblxuICovXG4iXX0=