'use strict';

var exampleBNF = '\n  expression            ::= compoundExpression\n\n                          | "(" expression ")"\n\n                          | term\n\n                          ;\n\n  compoundExpression    ::= sumOfExpressions\n\n                          | "xyz"\n\n                          ;\n\n  sumOfExpressions      ::= expression "+" expression\n\n                          | "abc"\n\n                          ;\n\n  term                  ::= /\\d+/ ;\n';

module.exports = exampleBNF;

/*


  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= sumOfExpressions

                          | "xyz"

                          ;

  sumOfExpressions      ::= expression "+" expression

                          | "abc"

                          ;

  term                  ::= /\d+/ ;















  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= expression "+" expression

                          | "xyz"

                          ;

  term                  ::= /\d+/ ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsK2NBQU47O0FBd0JBQyxPQUFPQyxPQUFQLEdBQWlCRixVQUFqQjs7QUFFQSIsImZpbGUiOiJibmYuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGV4YW1wbGVCTkYgPSBgXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gc3VtT2ZFeHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBzdW1PZkV4cHJlc3Npb25zICAgICAgOjo9IGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJhYmNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9IC9cXFxcZCsvIDtcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gc3VtT2ZFeHByZXNzaW9uc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBzdW1PZkV4cHJlc3Npb25zICAgICAgOjo9IGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJhYmNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gIGV4cHJlc3Npb24gICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICA6Oj0gZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcInh5elwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuICBleHByZXNzaW9uICAgICAgICAgICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uX1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgOjo9ICBjb21wb3VuZEV4cHJlc3Npb25fIGNvbXBvdW5kRXhwcmVzc2lvbjF+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY29tcG91bmRFeHByZXNzaW9uX1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb25fICAgOjo9ICBleHByZXNzaW9uX1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uMX4gIDo6PSAgXCIrXCIgZXhwcmVzc2lvbiBjb21wb3VuZEV4cHJlc3Npb24xfj8gO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuICBleHByZXNzaW9uXyAgICAgICAgICAgOjo9ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cbiAgTCAgICA6Oj0gIEwhIFwiY1wiIHwgXCJhXCIgfCBcImFcIiBcImJcIiA7XG5cblxuXG5cbiAgZXhwcmVzc2lvbiAgICA6Oj0gIDxOT19XSElURVNQQUNFPmV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uISBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cblxuICB0ZXJtICAgICAgICAgIDo6PSBuYXR1cmFsTnVtYmVyIDtcblxuICBuYXR1cmFsTnVtYmVyIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuICBleHByZXNzaW9uMX4gOjo9XG5cbiAgICAgIGRvY3VtZW50ICAgICAgICAgICAgIDo6PSAgKCBydWxlIHwgZXJyb3IgKSsgO1xuXG4gICAgICBydWxlICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgICAgIGRlZmluaXRpb25zICAgICAgICAgIDo6PSAgZGVmaW5pdGlvbiAoIFwifFwiIGRlZmluaXRpb24gKSogO1xuXG4gICAgICBkZWZpbml0aW9uICAgICAgICAgICA6Oj0gIHBhcnQrIDtcblxuICAgICAgbm9XaGl0ZXNwYWNlUGFydCAgICAgOjo9ICBcIjxOT19XSElURVNQQUNFPlwiIHBhcnQgO1xuXG4gICAgICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgICAgIHplcm9Pck1vcmVQYXJ0cyAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiKlwiIDtcblxuICAgICAgb25lT3JNb3JlUGFydHMgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIrXCIgO1xuXG4gICAgICBsb29rQWhlYWRQYXJ0ICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgICAgIGdyb3VwT2ZQYXJ0cyAgICAgICAgIDo6PSAgXCIoXCIgcGFydCBwYXJ0KyBcIilcIiA7XG5cbiAgICAgIGNob2ljZU9mUGFydHMgICAgICAgIDo6PSAgXCIoXCIgcGFydCAoIFwifFwiIHBhcnQgKSsgXCIpXCIgO1xuXG4gICAgICBwYXJ0ICAgICAgICAgICAgICAgICA6Oj0gIG5vV2hpdGVzcGFjZVBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB6ZXJvT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvbmVPck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBncm91cE9mUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBjaG9pY2VPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICByZWd1bGFyRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHNpZ25pZmljYW50VG9rZW5UeXBlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlbmRPZkxpbmVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBlcHNpbG9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbiAgICAgIG5hbWUgICAgICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gICAgICByZWd1bGFyRXhwcmVzc2lvbiAgICA6Oj0gIFtyZWd1bGFyLWV4cHJlc3Npb25dIDtcblxuICAgICAgc2lnbmlmaWNhbnRUb2tlblR5cGUgOjo9ICBbdHlwZV0gO1xuXG4gICAgICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuXG4gICAgICBlbmRPZkxpbmUgICAgICAgICAgICA6Oj0gIFwiPEVORF9PRl9MSU5FPlwiIDtcblxuICAgICAgZXBzaWxvbiAgICAgICAgICAgICAgOjo9ICBcIs61XCIgO1xuXG4gICAgICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICAgICAgZXJyb3IgICAgICAgICAgICAgICAgOjo9ICAuIDtcblxuXG4gKi8iXX0=