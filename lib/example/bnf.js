'use strict';

var exampleBNF = '\n\n  expression    ::=  <NO_WHITESPACE>expression "+" expression\n\n                  |  expression! "/" expression\n\n                  |  "(" expression ")"\n\n                  |  term\n\n                  ;\n\n\n  term          ::= naturalNumber ;\n\n  naturalNumber ::= /\\d+/ ;\n\n';

module.exports = exampleBNF;

/*



  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;



  expression1~ ::=

      document             ::=  ( rule | error )+ ;

      rule                 ::=  name "::=" definitions ";" ;

      definitions          ::=  definition ( "|" definition )* ;

      definition           ::=  part+ ;

      noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;

      optionalPart         ::=  part<NO_WHITESPACE>"?" ;

      zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;

      oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;

      lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;

      groupOfParts         ::=  "(" part part+ ")" ;

      choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

      part                 ::=  noWhitespacePart

                             |  optionalPart

                             |  zeroOrMoreParts

                             |  oneOrMoreParts

                             |  lookAheadPart

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

      name                 ::=  [name] ;

      ruleName             ::=  [name] ;

      regularExpression    ::=  [regular-expression] ;

      significantTokenType ::=  [type] ;

      terminalSymbol       ::=  [string-literal] ;

      endOfLine            ::=  "<END_OF_LINE>" ;

      epsilon              ::=  "ε" ;

      wildcard             ::=  "." ;

      error                ::=  . ;


 */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsK1NBQU47O0FBbUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gIDxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uISBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cblxuICB0ZXJtICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyIDtcblxuICBuYXR1cmFsTnVtYmVyIDo6PSAvXFxcXGQrLyA7XG5cbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gIDxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uISBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cblxuXG4gIGV4cHJlc3Npb24xfiA6Oj1cblxuICAgICAgZG9jdW1lbnQgICAgICAgICAgICAgOjo9ICAoIHJ1bGUgfCBlcnJvciApKyA7XG5cbiAgICAgIHJ1bGUgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBcIjo6PVwiIGRlZmluaXRpb25zIFwiO1wiIDtcblxuICAgICAgZGVmaW5pdGlvbnMgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG5cbiAgICAgIGRlZmluaXRpb24gICAgICAgICAgIDo6PSAgcGFydCsgO1xuXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgcGFydCA7XG5cbiAgICAgIG9wdGlvbmFsUGFydCAgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiP1wiIDtcblxuICAgICAgemVyb09yTW9yZVBhcnRzICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gICAgICBvbmVPck1vcmVQYXJ0cyAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgICAgIGxvb2tBaGVhZFBhcnQgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiIVwiIDtcblxuICAgICAgZ3JvdXBPZlBhcnRzICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICAgICAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgOjo9ICBcIihcIiBwYXJ0ICggXCJ8XCIgcGFydCApKyBcIilcIiA7XG5cbiAgICAgIHBhcnQgICAgICAgICAgICAgICAgIDo6PSAgbm9XaGl0ZXNwYWNlUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGdyb3VwT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNob2ljZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVwc2lsb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgbmFtZSAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA6Oj0gIFt0eXBlXSA7XG5cbiAgICAgIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSA7XG5cbiAgICAgIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gICAgICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG5cbiAgICAgIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG4gICAgICBlcnJvciAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5cbiAqLyJdfQ==