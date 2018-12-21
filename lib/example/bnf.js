'use strict';

var exampleBNF = '\n\n  S ::= X "b" | Y ;\n  \n  Y ::= X | "a" ;\n\n  X ::= Z | "d";\n  \n  Z ::= Y | "c" ;\n  \n\n'

/*
`

  rules                ::=  rule+ ;
  
  rule                 ::=  ruleName "::=" definitions ";" ;
  
  definitions          ::=  definition ( "|" definition )* ;
  
  definition           ::=  part+ ;
  
  noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;

  optionalPart         ::=  part<NO_WHITESPACE>"?" ;
                          
  zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;
                          
  oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;
  
  groupOfParts         ::=  "(" part+ ")" ;
  
  choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

  part                 ::=  noWhitespacePart
                
                         |  optionalPart  
                
                         |  zeroOrMoreParts  
                
                         |  oneOrMoreParts  
                
                         |  groupOfParts  
                           
                         |  choiceOfParts  
                           
                         |  ruleName  
                
                         |  regularExpression 
                
                         |  significantTokenType 

                         |  terminalSymbol
                          
                         |  endOfLine
                
                         |  epsilon

                         |  wildcard
                              
                         ;

  ruleName             ::=  [name] ;

  regularExpression    ::=  [regularExpression] ;
  
  significantTokenType ::=  [type] ;

  terminalSymbol       ::=  [stringLiteral] ;
  
  endOfLine            ::=  "<END_OF_LINE>" ;
  
  epsilon              ::=  "ε" ;

  wildcard             ::=  "." ;

`
*/;

module.exports = exampleBNF;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUE7O0FBYU47Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQWJBOztBQWlGQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBleGFtcGxlQk5GID0gYFxuXG4gIFMgOjo9IFggXCJiXCIgfCBZIDtcbiAgXG4gIFkgOjo9IFggfCBcImFcIiA7XG5cbiAgWCA6Oj0gWiB8IFwiZFwiO1xuICBcbiAgWiA6Oj0gWSB8IFwiY1wiIDtcbiAgXG5cbmBcblxuLypcbmBcblxuICBydWxlcyAgICAgICAgICAgICAgICA6Oj0gIHJ1bGUrIDtcbiAgXG4gIHJ1bGUgICAgICAgICAgICAgICAgIDo6PSAgcnVsZU5hbWUgXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG4gIFxuICBkZWZpbml0aW9ucyAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcbiAgXG4gIGRlZmluaXRpb24gICAgICAgICAgIDo6PSAgcGFydCsgO1xuICBcbiAgbm9XaGl0ZXNwYWNlUGFydCAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIHBhcnQgO1xuXG4gIG9wdGlvbmFsUGFydCAgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiP1wiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiKlwiIDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gIG9uZU9yTW9yZVBhcnRzICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiK1wiIDtcbiAgXG4gIGdyb3VwT2ZQYXJ0cyAgICAgICAgIDo6PSAgXCIoXCIgcGFydCsgXCIpXCIgO1xuICBcbiAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgOjo9ICBcIihcIiBwYXJ0ICggXCJ8XCIgcGFydCApKyBcIilcIiA7XG5cbiAgcGFydCAgICAgICAgICAgICAgICAgOjo9ICBub1doaXRlc3BhY2VQYXJ0XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgb3B0aW9uYWxQYXJ0ICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUGFydHMgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVBhcnRzICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBncm91cE9mUGFydHMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgY2hvaWNlT2ZQYXJ0cyAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZSAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb24gXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2lnbmlmaWNhbnRUb2tlblR5cGUgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyRXhwcmVzc2lvbl0gO1xuICBcbiAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuXG4gIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZ0xpdGVyYWxdIDtcbiAgXG4gIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuICBcbiAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG5gXG4qLztcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuIl19