'use strict';

var exampleBNF = '\n\n  S ::= X "a" | Y ;\n\n  X ::= Y | "b" ;\n\n  Y ::= Z | "c" ;\n\n  Z ::= "d" ;\n  \n';

module.exports = exampleBNF;

/*


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



 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsdUdBQU47O0FBWUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICBTIDo6PSBYIFwiYVwiIHwgWSA7XG5cbiAgWCA6Oj0gWSB8IFwiYlwiIDtcblxuICBZIDo6PSBaIHwgXCJjXCIgO1xuXG4gIFogOjo9IFwiZFwiIDtcbiAgXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cblxuICBydWxlcyAgICAgICAgICAgICAgICA6Oj0gIHJ1bGUrIDtcblxuICBydWxlICAgICAgICAgICAgICAgICA6Oj0gIHJ1bGVOYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuXG4gIGRlZmluaXRpb25zICAgICAgICAgIDo6PSAgZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSogO1xuXG4gIGRlZmluaXRpb24gICAgICAgICAgIDo6PSAgcGFydCsgO1xuXG4gIG5vV2hpdGVzcGFjZVBhcnQgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiBwYXJ0IDtcblxuICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgemVyb09yTW9yZVBhcnRzICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gIG9uZU9yTW9yZVBhcnRzICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICBncm91cE9mUGFydHMgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQrIFwiKVwiIDtcblxuICBjaG9pY2VPZlBhcnRzICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcInxcIiBwYXJ0ICkrIFwiKVwiIDtcblxuICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gIG5vV2hpdGVzcGFjZVBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZ3JvdXBPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNpZ25pZmljYW50VG9rZW5UeXBlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyRXhwcmVzc2lvbl0gO1xuXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcblxuICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmdMaXRlcmFsXSA7XG5cbiAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG5cbiAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG5cblxuICovIl19