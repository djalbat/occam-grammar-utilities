'use strict';

var exampleBNF = '\n  \n\n    L ::= L! "c"\n\n        | "a"\n\n        | "a" "b"\n\n        ;\n\n\n\n';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsa0dBQU47O0FBZUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcbiAgXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG5cblxuXG4gICAgUyAgOjo9IEEgQyA7XG5cbiAgICBBICA6Oj0gXCIuXCIgQiA7XG5cbiAgICBCICA6Oj0gQSB8IFwiLlwiIEMgO1xuXG4gICAgQyAgOjo9IEQgRSA7XG5cbiAgICBEICA6Oj0gQyA7XG5cbiAgICBFICA6Oj0gXCIuXCIgO1xuXG5cblxuXG5cblxuICAgIHBhcnQgICAgICAgICAgICAgICAgIDo6PSBwYXJ0IFwiP1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgICAgOjo9IHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICB8IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgIDtcblxuICB6ZXJvT3JNb3JlUGFydHMgIDo6PSBwYXJ0IFwiKlwiIDtcblxuICBvcHRpb25hbFBhcnQgICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBydWxlTmFtZSAgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG4gICAgICAgICAgICAgICAgIGV4cHJlc3Npb24gIDo6PSAgYXJpdGhtZXRpY0V4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICAgYXJpdGhtZXRpY0V4cHJlc3Npb24gIDo6PSAgYWRkaXRpb24gO1xuXG5cbiAgICAgICAgICAgICAgICAgICBhZGRpdGlvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG5cblxuXG5cblxuXG5cblxuXG4gIGRlZmluaXRpb24gICAgIDo6PSBwYXJ0KyA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHBhcnQgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgIDtcblxuICBydWxlTmFtZSAgICAgICA6Oj0gW3VuYXNzaWduZWRdIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBkZWZpbml0aW9uICAgICAgOjo9IHBhcnQrIDtcblxuXG4gIG9wdGlvbmFsUGFydCAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgbG9va0FoZWFkUGFydCAgIDo6PSBwYXJ0IFwiIVwiIDtcblxuXG4gIHBhcnQgICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgICA6Oj0gW3VuYXNzaWduZWRdIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgIDo6PSBwYXJ0IFwiP1wiXG5cbiAgICAgICAgICAgICAgICAgICB8IHBhcnQgXCIhXCJcblxuICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgb3B0aW9uYWxQYXJ0ICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgOjo9IHBhcnQgXCIhXCIgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gaW50ZXJtZWRpYXRlRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBpbnRlcm1lZGlhdGVFeHByZXNzaW9uICA6Oj0gY29tcG91bmRFeHByZXNzaW9uIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuICovXG4iXX0=