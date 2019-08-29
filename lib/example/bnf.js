'use strict';

var exampleBNF = '\n\n  expression              ::= expression operator expression\n\n                            | "(" expression ")"\n\n                            | term\n\n                            ;\n\n  operator                ::= "+" | "-" | "/" | "*" ;\n\n  term                    ::= /\\d+/ ;\n';

module.exports = exampleBNF;

/*







  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | expression "/" expression

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;










  expression    ::=  <NO_WHITESPACE>expression "+" expression

                  |  expression! "/" expression

                  |  "(" expression ")"

                  |  term

                  ;


  term          ::= naturalNumber ;

  naturalNumber ::= /\d+/ ;






  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;





  L    ::= L! "c"

         | "a"

         | "a" "b"

         ;









  expression              ::= compoundExpression

                            | "(" expression ")"

                            | term

                            ;

  compoundExpression      ::= expression operator expression

                            | "xyz"

                            ;

  operator                ::= "+" | "-" | "/" | "*" ;

  term                    ::= /\d+/ ;








  expression              ::= compoundExpression

                            | parenthesisedExpression

                            | term

                            ;

  parenthesisedExpression ::= "(" expression ")" ;

  compoundExpression      ::= sumOfExpressions

                            | "xyz"

                            ;

  sumOfExpressions        ::= expression "+" expression

                            | "abc"

                            ;

  term                    ::= /\d+/ ;









  expression            ::= compoundExpression

                          | "(" expression ")"

                          | term

                          ;

  compoundExpression    ::= expression "+" expression

                          | "xyz"

                          ;

  term                  ::= /\d+/ ;








  document             ::=  ( rule | error )+ ;

  rule                 ::=  name "::=" definitions ";" ;

  definitions          ::=  definition ( "|" definition )* ;

  definition           ::=  part+ ;

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


  noWhitespacePart     ::=  "<NO_WHITESPACE>" part ;

  optionalPart         ::=  part<NO_WHITESPACE>"?" ;

  zeroOrMoreParts      ::=  part<NO_WHITESPACE>"*" ;

  oneOrMoreParts       ::=  part<NO_WHITESPACE>"+" ;

  lookAheadPart        ::=  part<NO_WHITESPACE>"!" ;

  groupOfParts         ::=  "(" part part+ ")" ;

  choiceOfParts        ::=  "(" part ( "|" part )+ ")" ;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL2JuZi5qcyJdLCJuYW1lcyI6WyJleGFtcGxlQk5GIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsK1NBQU47O0FBZUFDLE9BQU9DLE9BQVAsR0FBaUJGLFVBQWpCOztBQUVBIiwiZmlsZSI6ImJuZi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgZXhhbXBsZUJORiA9IGBcblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gZXhwcmVzc2lvbiBvcGVyYXRvciBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXFxcZCsvIDtcbmA7XG5cbm1vZHVsZS5leHBvcnRzID0gZXhhbXBsZUJORjtcblxuLypcblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgZXhwcmVzc2lvbiBcIi9cIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwieHl6XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBzdW1PZkV4cHJlc3Npb25zICAgICAgICA6Oj0gZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiYWJjXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgICA6Oj0gL1xcZCsvIDtcblxuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgIDo6PSAgPE5PX1dISVRFU1BBQ0U+ZXhwcmVzc2lvbiBcIitcIiBleHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24hIFwiL1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICB8ICB0ZXJtXG5cbiAgICAgICAgICAgICAgICAgIDtcblxuXG4gIHRlcm0gICAgICAgICAgOjo9IG5hdHVyYWxOdW1iZXIgO1xuXG4gIG5hdHVyYWxOdW1iZXIgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG4gIEwgICAgOjo9IEwhIFwiY1wiXG5cbiAgICAgICAgIHwgXCJhXCJcblxuICAgICAgICAgfCBcImFcIiBcImJcIlxuXG4gICAgICAgICA7XG5cblxuXG5cblxuICBMICAgIDo6PSBMISBcImNcIlxuXG4gICAgICAgICB8IFwiYVwiXG5cbiAgICAgICAgIHwgXCJhXCIgXCJiXCJcblxuICAgICAgICAgO1xuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKFwiIGV4cHJlc3Npb24gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIGNvbXBvdW5kRXhwcmVzc2lvbiAgICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIG9wZXJhdG9yICAgICAgICAgICAgICAgIDo6PSBcIitcIiB8IFwiLVwiIHwgXCIvXCIgfCBcIipcIiA7XG5cbiAgdGVybSAgICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgICA6Oj0gY29tcG91bmRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHBhcmVudGhlc2lzZWRFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IHRlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBwYXJlbnRoZXNpc2VkRXhwcmVzc2lvbiA6Oj0gXCIoXCIgZXhwcmVzc2lvbiBcIilcIiA7XG5cbiAgY29tcG91bmRFeHByZXNzaW9uICAgICAgOjo9IHN1bU9mRXhwcmVzc2lvbnNcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHN1bU9mRXhwcmVzc2lvbnMgICAgICAgIDo6PSBleHByZXNzaW9uIFwiK1wiIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJhYmNcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG4gIHRlcm0gICAgICAgICAgICAgICAgICAgIDo6PSAvXFxkKy8gO1xuXG5cblxuXG5cblxuXG5cblxuICBleHByZXNzaW9uICAgICAgICAgICAgOjo9IGNvbXBvdW5kRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgdGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICBjb21wb3VuZEV4cHJlc3Npb24gICAgOjo9IGV4cHJlc3Npb24gXCIrXCIgZXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHwgXCJ4eXpcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuICB0ZXJtICAgICAgICAgICAgICAgICAgOjo9IC9cXGQrLyA7XG5cblxuXG5cblxuXG5cblxuICBkb2N1bWVudCAgICAgICAgICAgICA6Oj0gICggcnVsZSB8IGVycm9yICkrIDtcblxuICBydWxlICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgXCI6Oj1cIiBkZWZpbml0aW9ucyBcIjtcIiA7XG5cbiAgZGVmaW5pdGlvbnMgICAgICAgICAgOjo9ICBkZWZpbml0aW9uICggXCJ8XCIgZGVmaW5pdGlvbiApKiA7XG5cbiAgZGVmaW5pdGlvbiAgICAgICAgICAgOjo9ICBwYXJ0KyA7XG5cbiAgcGFydCAgICAgICAgICAgICAgICAgOjo9ICBub1doaXRlc3BhY2VQYXJ0XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBvcHRpb25hbFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHplcm9Pck1vcmVQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgb25lT3JNb3JlUGFydHNcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGxvb2tBaGVhZFBhcnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGdyb3VwT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgY2hvaWNlT2ZQYXJ0c1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgcnVsZU5hbWVcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIHJlZ3VsYXJFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICB8ICBzaWduaWZpY2FudFRva2VuVHlwZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgdGVybWluYWxTeW1ib2xcblxuICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGVuZE9mTGluZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXBzaWxvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgfCAgd2lsZGNhcmRcblxuICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG4gIG5vV2hpdGVzcGFjZVBhcnQgICAgIDo6PSAgXCI8Tk9fV0hJVEVTUEFDRT5cIiBwYXJ0IDtcblxuICBvcHRpb25hbFBhcnQgICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIj9cIiA7XG5cbiAgemVyb09yTW9yZVBhcnRzICAgICAgOjo9ICBwYXJ0PE5PX1dISVRFU1BBQ0U+XCIqXCIgO1xuXG4gIG9uZU9yTW9yZVBhcnRzICAgICAgIDo6PSAgcGFydDxOT19XSElURVNQQUNFPlwiK1wiIDtcblxuICBsb29rQWhlYWRQYXJ0ICAgICAgICA6Oj0gIHBhcnQ8Tk9fV0hJVEVTUEFDRT5cIiFcIiA7XG5cbiAgZ3JvdXBPZlBhcnRzICAgICAgICAgOjo9ICBcIihcIiBwYXJ0IHBhcnQrIFwiKVwiIDtcblxuICBjaG9pY2VPZlBhcnRzICAgICAgICA6Oj0gIFwiKFwiIHBhcnQgKCBcInxcIiBwYXJ0ICkrIFwiKVwiIDtcblxuICBuYW1lICAgICAgICAgICAgICAgICA6Oj0gIFtuYW1lXSA7XG5cbiAgcnVsZU5hbWUgICAgICAgICAgICAgOjo9ICBbbmFtZV0gO1xuXG4gIHJlZ3VsYXJFeHByZXNzaW9uICAgIDo6PSAgW3JlZ3VsYXItZXhwcmVzc2lvbl0gO1xuXG4gIHNpZ25pZmljYW50VG9rZW5UeXBlIDo6PSAgW3R5cGVdIDtcblxuICB0ZXJtaW5hbFN5bWJvbCAgICAgICA6Oj0gIFtzdHJpbmctbGl0ZXJhbF0gO1xuXG4gIGVuZE9mTGluZSAgICAgICAgICAgIDo6PSAgXCI8RU5EX09GX0xJTkU+XCIgO1xuXG4gIGVwc2lsb24gICAgICAgICAgICAgIDo6PSAgXCLOtVwiIDtcblxuICB3aWxkY2FyZCAgICAgICAgICAgICA6Oj0gIFwiLlwiIDtcblxuICBlcnJvciAgICAgICAgICAgICAgICA6Oj0gIC4gO1xuXG5cblxuXG4gKi8iXX0=