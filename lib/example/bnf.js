'use strict';

var exampleBNF = '\n\n  A0         ::=  A1 "a" ;\n\n  A1         ::=  A0 | "b" ;\n\n';

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsaUZBQU47O0FBUUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICBBMCAgICAgICAgIDo6PSAgQTEgXCJhXCIgO1xuXG4gIEExICAgICAgICAgOjo9ICBBMCB8IFwiYlwiIDtcblxuYDtcblxubW9kdWxlLmV4cG9ydHMgPSBleGFtcGxlQk5GO1xuXG4vKlxuXG5cbiAgcnVsZXMgICAgICAgICAgICAgICAgOjo9ICBydWxlKyA7XG5cbiAgcnVsZSAgICAgICAgICAgICAgICAgOjo9ICBydWxlTmFtZSBcIjo6PVwiIGRlZmluaXRpb25zIFwiO1wiIDtcblxuICBkZWZpbml0aW9ucyAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICBkZWZpbml0aW9uICAgICAgICAgICA6Oj0gIHBhcnQrIDtcblxuICBub1doaXRlc3BhY2VQYXJ0ICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgcGFydCA7XG5cbiAgb3B0aW9uYWxQYXJ0ICAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICBvbmVPck1vcmVQYXJ0cyAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgZ3JvdXBPZlBhcnRzICAgICAgICAgOjo9ICBcIihcIiBwYXJ0KyBcIilcIiA7XG5cbiAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgOjo9ICBcIihcIiBwYXJ0ICggXCJ8XCIgcGFydCApKyBcIilcIiA7XG5cbiAgcGFydCAgICAgICAgICAgICAgICAgOjo9ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGdyb3VwT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgY2hvaWNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzaWduaWZpY2FudFRva2VuVHlwZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXBzaWxvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgcmVndWxhckV4cHJlc3Npb24gICAgOjo9ICBbcmVndWxhckV4cHJlc3Npb25dIDtcblxuICBzaWduaWZpY2FudFRva2VuVHlwZSA6Oj0gIFt0eXBlXSA7XG5cbiAgdGVybWluYWxTeW1ib2wgICAgICAgOjo9ICBbc3RyaW5nTGl0ZXJhbF0gO1xuXG4gIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcblxuICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuXG5cbiAqLyJdfQ==