'use strict';

var exampleBNF = '\n  \n    L ::= L! "c"\n    \n        | "a"\n        \n        | "a" "b"\n        \n        ;\n  \n\n';

module.exports = exampleBNF;

/*




    part                 ::= part "?"

                           | part "!"

                           | ruleName

                           ;

    ruleName             ::= [unassigned] ;








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

  compoundExpression     ::= expression operator expression

                            | "xyz"

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;









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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsb0hBQU47O0FBYUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcbiAgXG4gICAgTCA6Oj0gTCEgXCJjXCJcbiAgICBcbiAgICAgICAgfCBcImFcIlxuICAgICAgICBcbiAgICAgICAgfCBcImFcIiBcImJcIlxuICAgICAgICBcbiAgICAgICAgO1xuICBcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuUyAgOjo9IEEgQyA7XG5cbkEgIDo6PSBcIi5cIiBCIDtcblxuQiAgOjo9IEEgfCBcIi5cIiBDIDtcblxuQyAgOjo9IEQgRSA7XG5cbkQgIDo6PSBDIDtcblxuRSAgOjo9IFwiLlwiIDtcblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgIDo6PSB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgfCBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICA7XG5cbiAgemVyb09yTW9yZVBhcnRzICA6Oj0gcGFydCBcIipcIiA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcnVsZU5hbWUgICAgICAgICA6Oj0gW3VuYXNzaWduZWRdIDtcblxuXG5cblxuXG5cblxuICAgICAgICAgICAgICAgICBleHByZXNzaW9uICA6Oj0gIGFyaXRobWV0aWNFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuICAgICAgIGFyaXRobWV0aWNFeHByZXNzaW9uICA6Oj0gIGFkZGl0aW9uIDtcblxuXG4gICAgICAgICAgICAgICAgICAgYWRkaXRpb24gIDo6PSAgZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uIDtcblxuXG5cblxuXG5cblxuXG5cblxuICBkZWZpbml0aW9uICAgICA6Oj0gcGFydCsgO1xuXG4gIG9wdGlvbmFsUGFydCAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBwYXJ0ICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICA7XG5cbiAgcnVsZU5hbWUgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgZGVmaW5pdGlvbiAgICAgIDo6PSBwYXJ0KyA7XG5cblxuICBvcHRpb25hbFBhcnQgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIGxvb2tBaGVhZFBhcnQgICA6Oj0gcGFydCBcIiFcIiA7XG5cblxuICBwYXJ0ICAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBydWxlTmFtZSAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICA6Oj0gcGFydCBcIj9cIlxuXG4gICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICA7XG5cblxuICBydWxlTmFtZSAgICAgICA6Oj0gW3VuYXNzaWduZWRdIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIHBhcnQgICAgICAgICAgICA6Oj0gb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG9wdGlvbmFsUGFydCAgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgbG9va0FoZWFkUGFydCAgIDo6PSBwYXJ0IFwiIVwiIDtcblxuXG4gIHJ1bGVOYW1lICAgICAgICA6Oj0gW3VuYXNzaWduZWRdIDtcblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gaW50ZXJtZWRpYXRlRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBpbnRlcm1lZGlhdGVFeHByZXNzaW9uICA6Oj0gY29tcG91bmRFeHByZXNzaW9uIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuICovXG4iXX0=