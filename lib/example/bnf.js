'use strict';

var exampleBNF = '\n\n\n    part                 ::= ruleName\n\n                           ;\n\n    ruleName             ::= [unassigned] ;\n\n\n\n\n';

module.exports = exampleBNF;

/*

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsbUpBQU47O0FBY0FDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cblMgIDo6PSBBIEMgO1xuXG5BICA6Oj0gXCIuXCIgQiA7XG5cbkIgIDo6PSBBIHwgXCIuXCIgQyA7XG5cbkMgIDo6PSBEIEUgO1xuXG5EICA6Oj0gQyA7XG5cbkUgIDo6PSBcIi5cIiA7XG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgICA6Oj0gemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgOjo9IHBhcnQgXCIqXCIgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICBhcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBhZGRpdGlvbiA7XG5cblxuICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvbiA7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgZGVmaW5pdGlvbiAgICAgOjo9IHBhcnQrIDtcblxuICBvcHRpb25hbFBhcnQgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcGFydCAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG4gIHJ1bGVOYW1lICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGRlZmluaXRpb24gICAgICA6Oj0gcGFydCsgO1xuXG5cbiAgb3B0aW9uYWxQYXJ0ICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgOjo9IHBhcnQgXCIhXCIgO1xuXG5cbiAgcGFydCAgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBvcHRpb25hbFBhcnQgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIGxvb2tBaGVhZFBhcnQgICA6Oj0gcGFydCBcIiFcIiA7XG5cblxuICBydWxlTmFtZSAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgICAgOjo9IGludGVybWVkaWF0ZUV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgaW50ZXJtZWRpYXRlRXhwcmVzc2lvbiAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvbiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cbiAqL1xuIl19