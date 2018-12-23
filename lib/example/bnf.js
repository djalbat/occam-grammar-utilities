'use strict';

var exampleBNF = '\n\n  S ::= X "b" | Y ;\n\n  Y ::= X | "a" ;\n\n  X ::= Z | "d" ;\n\n  Z ::= Y | "c" ;\n\n\n'

/*
  S ::= X "a" | Y ;

  X ::= Y | "b" ;

  Y ::= Z | "c" ;

  Z ::= X "d" | "e" ;
*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUE7O0FBYU47Ozs7Ozs7Ozs7QUFVQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0VBdkJBOztBQTJGQUMsT0FBT0MsT0FBUCxHQUFpQkYsVUFBakIiLCJmaWxlIjoiYm5mLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBleGFtcGxlQk5GID0gYFxuXG4gIFMgOjo9IFggXCJiXCIgfCBZIDtcblxuICBZIDo6PSBYIHwgXCJhXCIgO1xuXG4gIFggOjo9IFogfCBcImRcIiA7XG5cbiAgWiA6Oj0gWSB8IFwiY1wiIDtcblxuXG5gXG5cbi8qXG4gIFMgOjo9IFggXCJhXCIgfCBZIDtcblxuICBYIDo6PSBZIHwgXCJiXCIgO1xuXG4gIFkgOjo9IFogfCBcImNcIiA7XG5cbiAgWiA6Oj0gWCBcImRcIiB8IFwiZVwiIDtcbiovXG5cbi8qXG5gXG5cbiAgcnVsZXMgICAgICAgICAgICAgICAgOjo9ICBydWxlKyA7XG4gIFxuICBydWxlICAgICAgICAgICAgICAgICA6Oj0gIHJ1bGVOYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuICBcbiAgZGVmaW5pdGlvbnMgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG4gIFxuICBkZWZpbml0aW9uICAgICAgICAgICA6Oj0gIHBhcnQrIDtcbiAgXG4gIG5vV2hpdGVzcGFjZVBhcnQgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiBwYXJ0IDtcblxuICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICB6ZXJvT3JNb3JlUGFydHMgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIipcIiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICBvbmVPck1vcmVQYXJ0cyAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG4gIFxuICBncm91cE9mUGFydHMgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQrIFwiKVwiIDtcbiAgXG4gIGNob2ljZU9mUGFydHMgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gIHBhcnQgICAgICAgICAgICAgICAgIDo6PSAgbm9XaGl0ZXNwYWNlUGFydFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wdGlvbmFsUGFydCAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVBhcnRzICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVQYXJ0cyAgXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZ3JvdXBPZlBhcnRzICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNob2ljZU9mUGFydHMgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWUgIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uIFxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNpZ25pZmljYW50VG9rZW5UeXBlIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXBzaWxvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgcmVndWxhckV4cHJlc3Npb24gICAgOjo9ICBbcmVndWxhckV4cHJlc3Npb25dIDtcbiAgXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcblxuICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmdMaXRlcmFsXSA7XG4gIFxuICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcbiAgXG4gIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcblxuICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuYFxuKi87XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcbiJdfQ==