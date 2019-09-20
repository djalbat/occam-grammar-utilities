'use strict';

var exampleBNF = '\n  \n\n  expression              ::= compoundExpression\n\n                            | "(" expression ")"\n\n                            | term\n\n                            ;\n\n  compoundExpression     ::= expression operator expression\n\n                            | "xyz"\n\n                            ;\n\n  operator                ::= "+" | "-" | "/" | "*" ;\n\n  term                    ::= /\\d+/ ;\n\n\n';

module.exports = exampleBNF;

/*








    L ::= L! "c"

        | "a"

        | "a" "b"

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsa2JBQU47O0FBd0JBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG4gIFxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBvcGVyYXRvciAgICAgICAgICAgICAgICA6Oj0gXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxcXGQrLyA7XG5cblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cblxuXG5cblxuXG5cbiAgICBMIDo6PSBMISBcImNcIlxuXG4gICAgICAgIHwgXCJhXCJcblxuICAgICAgICB8IFwiYVwiIFwiYlwiXG5cbiAgICAgICAgO1xuXG5cblxuXG5cbiAgICBTICA6Oj0gQSBDIDtcblxuICAgIEEgIDo6PSBcIi5cIiBCIDtcblxuICAgIEIgIDo6PSBBIHwgXCIuXCIgQyA7XG5cbiAgICBDICA6Oj0gRCBFIDtcblxuICAgIEQgIDo6PSBDIDtcblxuICAgIEUgIDo6PSBcIi5cIiA7XG5cblxuXG5cblxuXG4gICAgcGFydCAgICAgICAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBwYXJ0IFwiIVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgICA6Oj0gemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgIHwgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgOjo9IHBhcnQgXCIqXCIgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cbiAgICAgICAgICAgICAgICAgZXhwcmVzc2lvbiAgOjo9ICBhcml0aG1ldGljRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgICAgICBhcml0aG1ldGljRXhwcmVzc2lvbiAgOjo9ICBhZGRpdGlvbiA7XG5cblxuICAgICAgICAgICAgICAgICAgIGFkZGl0aW9uICA6Oj0gIGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvbiA7XG5cblxuXG5cblxuXG5cblxuXG5cbiAgZGVmaW5pdGlvbiAgICAgOjo9IHBhcnQrIDtcblxuICBvcHRpb25hbFBhcnQgICA6Oj0gcGFydCBcIj9cIiA7XG5cbiAgcGFydCAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG4gIHJ1bGVOYW1lICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGRlZmluaXRpb24gICAgICA6Oj0gcGFydCsgO1xuXG5cbiAgb3B0aW9uYWxQYXJ0ICAgIDo6PSBwYXJ0IFwiP1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgOjo9IHBhcnQgXCIhXCIgO1xuXG5cbiAgcGFydCAgICAgICAgICAgIDo6PSBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICB8IHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgIDo6PSBbdW5hc3NpZ25lZF0gO1xuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgcGFydCAgICAgICAgICAgOjo9IHBhcnQgXCI/XCJcblxuICAgICAgICAgICAgICAgICAgIHwgcGFydCBcIiFcIlxuXG4gICAgICAgICAgICAgICAgICAgfCBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgO1xuXG5cbiAgcnVsZU5hbWUgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBwYXJ0ICAgICAgICAgICAgOjo9IG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgIHwgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICA7XG5cblxuICBvcHRpb25hbFBhcnQgICAgOjo9IHBhcnQgXCI/XCIgO1xuXG4gIGxvb2tBaGVhZFBhcnQgICA6Oj0gcGFydCBcIiFcIiA7XG5cblxuICBydWxlTmFtZSAgICAgICAgOjo9IFt1bmFzc2lnbmVkXSA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgOjo9IGV4cHJlc3Npb24gb3BlcmF0b3IgZXhwcmVzc2lvbiA7XG5cbiAgb3BlcmF0b3IgICAgICAgICAgICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICAgIDo6PSBpbnRlcm1lZGlhdGVFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGludGVybWVkaWF0ZUV4cHJlc3Npb24gIDo6PSBjb21wb3VuZEV4cHJlc3Npb24gO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb24gO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG4gKi9cbiJdfQ==