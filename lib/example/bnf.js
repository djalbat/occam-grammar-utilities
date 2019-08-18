'use strict';

var exampleBNF = '\n\n  expression            ::= compoundExpression\n\n                          | "(" expression ")"\n\n                          | term\n\n                          ;\n\n  compoundExpression    ::= compoundExpression "+" expression\n\n                          | "xyz"\n\n                          ;\n\n  term                  ::= /\\d+/ ;\n';

module.exports = exampleBNF;

/*


  expression            ::=  compoundExpression

                          |  expression_

                          ;

  compoundExpression    ::=  compoundExpression_ compoundExpression1~

                          |  compoundExpression_

                          ;

  compoundExpression_   ::=  expression_

                          |  "xyz"

                          ;

  compoundExpression1~  ::=  "+" expression compoundExpression1~? ;

  term                  ::= /\d+/ ;

  expression_           ::=  "(" expression ")"

                          |  term

                          ;















  L    ::=  L! "c" | "a" | "a" "b" ;




  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;






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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEscVdBQU47O0FBbUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgIDo6PSBjb21wb3VuZEV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9IC9cXFxcZCsvIDtcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvbl8gY29tcG91bmRFeHByZXNzaW9uMX5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjb21wb3VuZEV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbl8gICA6Oj0gIGV4cHJlc3Npb25fXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24xfiAgOjo9ICBcIitcIiBleHByZXNzaW9uIGNvbXBvdW5kRXhwcmVzc2lvbjF+PyA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG4gIGV4cHJlc3Npb25fICAgICAgICAgICA6Oj0gIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuICBMICAgIDo6PSAgTCEgXCJjXCIgfCBcImFcIiB8IFwiYVwiIFwiYlwiIDtcblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24hIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHRlcm0gICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgO1xuXG4gIG5hdHVyYWxOdW1iZXIgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24xfiA6Oj1cblxuICAgICAgZG9jdW1lbnQgICAgICAgICAgICAgOjo9ICAoIHJ1bGUgfCBlcnJvciApKyA7XG5cbiAgICAgIHJ1bGUgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSBcIjo6PVwiIGRlZmluaXRpb25zIFwiO1wiIDtcblxuICAgICAgZGVmaW5pdGlvbnMgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG5cbiAgICAgIGRlZmluaXRpb24gICAgICAgICAgIDo6PSAgcGFydCsgO1xuXG4gICAgICBub1doaXRlc3BhY2VQYXJ0ICAgICA6Oj0gIFwiPE5PX1dISVRFU1BBQ0U+XCIgcGFydCA7XG5cbiAgICAgIG9wdGlvbmFsUGFydCAgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiP1wiIDtcblxuICAgICAgemVyb09yTW9yZVBhcnRzICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gICAgICBvbmVPck1vcmVQYXJ0cyAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIitcIiA7XG5cbiAgICAgIGxvb2tBaGVhZFBhcnQgICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiIVwiIDtcblxuICAgICAgZ3JvdXBPZlBhcnRzICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICAgICAgY2hvaWNlT2ZQYXJ0cyAgICAgICAgOjo9ICBcIihcIiBwYXJ0ICggXCJ8XCIgcGFydCApKyBcIilcIiA7XG5cbiAgICAgIHBhcnQgICAgICAgICAgICAgICAgIDo6PSAgbm9XaGl0ZXNwYWNlUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9wdGlvbmFsUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIG9uZU9yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgbG9va0FoZWFkUGFydFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGdyb3VwT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGNob2ljZU9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBydWxlTmFtZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgc2lnbmlmaWNhbnRUb2tlblR5cGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZXJtaW5hbFN5bWJvbFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVwc2lsb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB3aWxkY2FyZFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICAgICAgbmFtZSAgICAgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICBydWxlTmFtZSAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gICAgICBzaWduaWZpY2FudFRva2VuVHlwZSA6Oj0gIFt0eXBlXSA7XG5cbiAgICAgIHRlcm1pbmFsU3ltYm9sICAgICAgIDo6PSAgW3N0cmluZy1saXRlcmFsXSA7XG5cbiAgICAgIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gICAgICBlcHNpbG9uICAgICAgICAgICAgICA6Oj0gIFwizrVcIiA7XG5cbiAgICAgIHdpbGRjYXJkICAgICAgICAgICAgIDo6PSAgXCIuXCIgO1xuXG4gICAgICBlcnJvciAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5cbiAqLyJdfQ==