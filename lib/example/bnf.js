'use strict';

var exampleBNF = '\n\n  expression    ::=  expression! operator \n\n                  |  "(" expression ")"\n\n                  |  term\n\n                  ;\n\n\n\n';

module.exports = exampleBNF;

/*

  L    ::=  L! "c"

         |  "a"

         |  "a" "b"

         ;


  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;



  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsb0tBQU47O0FBY0FDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICBleHByZXNzaW9uICAgIDo6PSAgZXhwcmVzc2lvbiEgb3BlcmF0b3IgXG5cbiAgICAgICAgICAgICAgICAgIHwgIFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgfCAgdGVybVxuXG4gICAgICAgICAgICAgICAgICA7XG5cblxuXG5gO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGV4YW1wbGVCTkY7XG5cbi8qXG5cbiAgTCAgICA6Oj0gIEwhIFwiY1wiXG5cbiAgICAgICAgIHwgIFwiYVwiXG5cbiAgICAgICAgIHwgIFwiYVwiIFwiYlwiXG5cbiAgICAgICAgIDtcblxuXG4gIGV4cHJlc3Npb24gICAgOjo9ICA8Tk9fV0hJVEVTUEFDRT5leHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbiEgXCIvXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICB8ICBcIihcIiBleHByZXNzaW9uIFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgIHwgIHRlcm1cblxuICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24hIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuXG4gICAgICBkb2N1bWVudCAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICAgICAgcnVsZSAgICAgICAgICAgICAgICAgOjo9ICBuYW1lIFwiOjo9XCIgZGVmaW5pdGlvbnMgXCI7XCIgO1xuXG4gICAgICBkZWZpbml0aW9ucyAgICAgICAgICA6Oj0gIGRlZmluaXRpb24gKCBcInxcIiBkZWZpbml0aW9uICkqIDtcblxuICAgICAgZGVmaW5pdGlvbiAgICAgICAgICAgOjo9ICBwYXJ0KyA7XG5cbiAgICAgIG5vV2hpdGVzcGFjZVBhcnQgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiBwYXJ0IDtcblxuICAgICAgb3B0aW9uYWxQYXJ0ICAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCI/XCIgO1xuXG4gICAgICB6ZXJvT3JNb3JlUGFydHMgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIipcIiA7XG5cbiAgICAgIG9uZU9yTW9yZVBhcnRzICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICAgICAgbG9va0FoZWFkUGFydCAgICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIhXCIgO1xuXG4gICAgICBncm91cE9mUGFydHMgICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgcGFydCsgXCIpXCIgO1xuXG4gICAgICBjaG9pY2VPZlBhcnRzICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcInxcIiBwYXJ0ICkrIFwiKVwiIDtcblxuICAgICAgcGFydCAgICAgICAgICAgICAgICAgOjo9ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb3B0aW9uYWxQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgemVyb09yTW9yZVBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBsb29rQWhlYWRQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZ3JvdXBPZlBhcnRzXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgY2hvaWNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJ1bGVOYW1lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcmVndWxhckV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzaWduaWZpY2FudFRva2VuVHlwZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHRlcm1pbmFsU3ltYm9sXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZW5kT2ZMaW5lXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXBzaWxvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHdpbGRjYXJkXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gICAgICBuYW1lICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgICAgIHJ1bGVOYW1lICAgICAgICAgICAgIDo6PSAgW25hbWVdIDtcblxuICAgICAgcmVndWxhckV4cHJlc3Npb24gICAgOjo9ICBbcmVndWxhci1leHByZXNzaW9uXSA7XG5cbiAgICAgIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcblxuICAgICAgdGVybWluYWxTeW1ib2wgICAgICAgOjo9ICBbc3RyaW5nLWxpdGVyYWxdIDtcblxuICAgICAgZW5kT2ZMaW5lICAgICAgICAgICAgOjo9ICBcIjxFTkRfT0ZfTElORT5cIiA7XG5cbiAgICAgIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcblxuICAgICAgd2lsZGNhcmQgICAgICAgICAgICAgOjo9ICBcIi5cIiA7XG5cbiAgICAgIGVycm9yICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cblxuICovIl19