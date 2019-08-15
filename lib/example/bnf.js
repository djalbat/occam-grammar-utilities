'use strict';

var exampleBNF = '\n\n  expression          ::=  compoundExpression\n\n                        |  "(" expression ")"\n\n                        |  term\n\n                        ;\n\n  compoundExpression  ::=  expression "+" expression ;\n\n  term                ::= /\\d+/ ;\n\n\n';

module.exports = exampleBNF;

/*




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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsdVJBQU47O0FBaUJBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG5cbiAgZXhwcmVzc2lvbiAgICAgICAgICA6Oj0gIGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgOjo9ICBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb24gO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgOjo9IC9cXFxcZCsvIDtcblxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cblxuXG5cbiAgTCAgICA6Oj0gIEwhIFwiY1wiIHwgXCJhXCIgfCBcImFcIiBcImJcIiA7XG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gIDxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uISBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cblxuICB0ZXJtICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyIDtcblxuICBuYXR1cmFsTnVtYmVyIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuICBleHByZXNzaW9uMX4gOjo9XG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgIDo6PSAgKCBydWxlIHwgZXJyb3IgKSsgO1xuXG4gICAgICBydWxlICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgICAgIGRlZmluaXRpb25zICAgICAgICAgIDo6PSAgZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSogO1xuXG4gICAgICBkZWZpbml0aW9uICAgICAgICAgICA6Oj0gIHBhcnQrIDtcblxuICAgICAgbm9XaGl0ZXNwYWNlUGFydCAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIHBhcnQgO1xuXG4gICAgICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgICAgIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICAgICAgb25lT3JNb3JlUGFydHMgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIrXCIgO1xuXG4gICAgICBsb29rQWhlYWRQYXJ0ICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGdyb3VwT2ZQYXJ0cyAgICAgICAgIDo6PSAgXCIoXCIgcGFydCBwYXJ0KyBcIilcIiA7XG5cbiAgICAgIGNob2ljZU9mUGFydHMgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gICAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gIG5vV2hpdGVzcGFjZVBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBncm91cE9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWd1bGFyRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNpZ25pZmljYW50VG9rZW5UeXBlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIG5hbWUgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyLWV4cHJlc3Npb25dIDtcblxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuXG4gICAgICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICAgICAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gICAgICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICAgICAgZXJyb3IgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuXG4gKi8iXX0=