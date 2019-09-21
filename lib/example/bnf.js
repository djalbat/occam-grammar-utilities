'use strict';

var exampleBNF = '\n\n    L ::= L! "c"\n\n        | "a"\n\n        | "a" "b"\n\n        ;\n\n';

module.exports = exampleBNF;

/*



    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [custom] ;





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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsMEZBQU47O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICAgIEwgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgfCBcImFcIlxuXG4gICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICA7XG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG5cbiAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuXG5cblxuICAgIFMgIDo6PSBBIEMgO1xuXG4gICAgQSAgOjo9IFwiLlwiIEIgO1xuXG4gICAgQiAgOjo9IEEgfCBcIi5cIiBDIDtcblxuICAgIEMgIDo6PSBEIEUgO1xuXG4gICAgRCAgOjo9IEMgO1xuXG4gICAgRSAgOjo9IFwiLlwiIDtcblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgIDo6PSB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgfCBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgemVyb09yTW9yZVBhcnRzICA6Oj0gcGFydCBcIipcIiA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcnVsZU5hbWUgICAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgIGV4cHJlc3Npb24gIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgYXJpdGhtZXRpY0V4cHJlc3Npb24gIDo6PSAgYWRkaXRpb24gO1xuXG5cbiAgICAgICAgICAgICAgICAgICBhZGRpdGlvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG5cblxuXG5cblxuXG5cblxuXG4gIGRlZmluaXRpb24gICAgIDo6PSBwYXJ0KyA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHBhcnQgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgIDtcblxuICBydWxlTmFtZSAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGRlZmluaXRpb24gICAgICA6Oj0gcGFydCsgO1xuXG5cbiAgb3B0aW9uYWxQYXJ0ICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgOjo9IHBhcnQgXCIhXCIgO1xuXG5cbiAgcGFydCAgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICA7XG5cblxuICBydWxlTmFtZSAgICAgICA6Oj0gW2N1c3RvbV0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgb3B0aW9uYWxQYXJ0ICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgOjo9IHBhcnQgXCIhXCIgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgIDo6PSBbY3VzdG9tXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBpbnRlcm1lZGlhdGVFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGludGVybWVkaWF0ZUV4cHJlc3Npb24gIDo6PSBjb21wb3VuZEV4cHJlc3Npb24gO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBleHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICB8IHRlcm0gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGV4cHJlc3Npb25+ICAgOjo9IG9wZXJhdG9yIGV4cHJlc3Npb24gZXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgfCDOtVxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICA6Oj0gXCIrXCJcblxuICAgICAgICAgICAgICAgICAgfCBcIi9cIlxuXG4gICAgICAgICAgICAgICAgICA7XG5cbiAgdGVybSAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICAgICAgOjo9IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IG5lZ2F0ZWRFeHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm0gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHBhcmVudGhlc2lzZWRFeHByZXNzaW9uICAgICA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cblxuICBuZWdhdGVkRXhwcmVzc2lvbiAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgY29tcG91bmRFeHByZXNzaW9ufiAgICAgICAgIDo6PSBcIitcIiBleHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbn5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiL1wiIGV4cHJlc3Npb24gY29tcG91bmRFeHByZXNzaW9uflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcG91bmRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgICAgICA6Oj0gbmVnYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBuZWdhdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cbiAgcXVvdGllbnR+ICAgICAgICAgICAgICAgICAgIDo6PSBcIi9cIiBleHByZXNzaW9uIHF1b3RpZW50flxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBzdW1+ICAgICAgICAgICAgICAgICAgICAgICAgOjo9IFwiK1wiIGV4cHJlc3Npb24gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgIDo6PSBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiBxdW90aWVudH4gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgY29tcG91bmRFeHByZXNzaW9uIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtIHF1b3RpZW50fiBzdW1+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcGFyZW50aGVzaXNlZEV4cHJlc3Npb24gICAgIDo6PSBcIihcIiBleHByZXNzaW9uIFwiKVwiIDtcblxuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgICAgICA6Oj0gbmVnYXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBuZWdhdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9IFwiLVwiIGV4cHJlc3Npb24gO1xuXG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cbiAgcXVvdGllbnR+ICAgICAgICAgICAgICAgICAgIDo6PSBcIi9cIiBleHByZXNzaW9uIHF1b3RpZW50flxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBzdW1+ICAgICAgICAgICAgICAgICAgICAgICAgOjo9IFwiK1wiIGV4cHJlc3Npb24gc3VtflxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgzrVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5cblxuXG5cblxuXG5cbiAqL1xuIl19