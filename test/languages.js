"use strict";

const { testUtilities } = require("occam-parsers"),
      { parserUtilities } = require("occam-parsers");

const { eliminateLeftRecursion } = require("../lib");  ///

const { adjustedBNFFromRules } = require("./helpers/bnf");

const { rulesFromBNF } = parserUtilities,
      { compareParseTreeStrings } = testUtilities;

describe("Languages", () => {
  describe("Nonimal", () => {
    describe("term", () => {
      let bnf = `

        term  ::=  argument ( "÷" (-99)
        
                            | "×" (-99)
                            
                            | "+" (-98)
                            
                            | "-" (-98) ) \` argument
                            
                |  argument<NO_WHITESPACE>argument (-101)
                
                |  "(" (argument) ")"
                
                |  variable
                
                ;
                                                   
    argument  ::=  term ( ) 
    
                |  type ( )
                                           
                ;

    variable  ::=  . ; 

        type  ::=  . ; 

      `;

      let rules;

      before(() => {
        rules = rulesFromBNF(bnf);

        rules = eliminateLeftRecursion(rules);  ///

        const adjustedBNF = adjustedBNFFromRules(rules);

        bnf = adjustedBNF;  ///
      });

      it("is rewritten", () => {
        assert.isTrue(compareParseTreeStrings(bnf, `
          
          term            ::= _term ;
          
          variable        ::= . ;
          
          type            ::= . ;
          
          _type           ::= . ;
          
          _variable       ::= . ;
          
          _term           ::= term_ term~*
              
                            | argument_term_ term~+
          
                            ;
          
          term_           ::= "(" (_argument) ")"
              
                            | _variable
          
                            ;
          
          term~           ::= argument~term
              
                            | argument~term_1 (-101)
          
                            ;
          
          argument_term_  ::= _type ( ) ;
          
          _argument       ::= _term ( )
              
                            | _type ( )
          
                            ;
          
          argument~term   ::= ( "÷" (-99) | "×" (-99) | "+" (-98) | "-" (-98) ) \` _argument ( ) ;
          
          argument~term_1 ::= <NO_WHITESPACE> _argument ( ) ;

       `));
      });
    });

    describe("statemet", () => {
      let bnf = `

        statement  ::=  "¬"<NO_WHITESPACE>metaArgument (10)
        
                     |  metaArgument ( "∧" (-9) 
                    
                                     | "∨" (-8) 
                                    
                                     | "⇒" (-7) 
                                    
                                     | "⇐" (-7) 
                                    
                                     | "𝗂𝖿𝖿" (-6) ) \` metaArgument
                    
                     |  "(" (metaArgument) ")" 
                                        
                     |  metavariable
        
                     ;
                                             
     metaArgument  ::=  statement ( ) 

                     |  metaType ( ) 
                                     
                     ;
                                       
     metavariable  ::=  . ;
                                       
         metaType  ::=  . ;
                                       
      `;

      let rules;

      before(() => {
        rules = rulesFromBNF(bnf);

        rules = eliminateLeftRecursion(rules);  ///

        const adjustedBNF = adjustedBNFFromRules(rules);

        bnf = adjustedBNF;  ///
      });

      it("is rewritten", () => {
        assert.isTrue(compareParseTreeStrings(bnf, `
                                      
          statement               ::= _statement ;
          
          metavariable            ::= . ;
          
          metaType                ::= . ;
          
          _metaType               ::= . ;
          
          _metavariable           ::= . ;
          
          _statement              ::= statement_ statement~*
              
                                    | metaArgument_statement_ statement~+
          
                                    ;
          
          statement_              ::= "¬" <NO_WHITESPACE> _metaArgument (10)
              
                                    | "(" (_metaArgument) ")"
              
                                    | _metavariable
          
                                    ;
          
          statement~              ::= metaArgument~statement ;
          
          metaArgument_statement_ ::= _metaType ( ) ;
          
          _metaArgument           ::= _statement ( )
              
                                    | _metaType ( )
          
                                    ;
          
          metaArgument~statement  ::= ( "∧" (-9) | "∨" (-8) | "⇒" (-7) | "⇐" (-7) | "𝗂𝖿𝖿" (-6) ) \` _metaArgument ( ) ;
          
        `));
      });
    });
  });

  describe("Furtle", () => {
    let bnf = `

      document                ::=  ( importStatement | procedure | error )+ ;
      
      
      
      procedure               ::=  "export"? type label<NO_WHITESPACE>"(" parameters? ")" returnBlock ;
      
      importStatement         ::=  "import" importBindings "from" [string-literal] ";" ;
      
      anonymousProcedure      ::=  type "(" parameters? ")" returnBlock ;
      
      statement               ::=  variableAssignments
                                
                                |  objectAssignment
       
                                |  listAssignment
                                
                                ;  
        
        
      
      variableAssignments     ::=  type variableAssignment ( "," variableAssignment )* ";" ;
      
      variableAssignment      ::=  variable "=" expression ;
      
      objectAssignment        ::=  "{" namedBindings "}" "=" variable ";" ;
      
      listAssignment          ::=  "[" bindings "]" "=" variable ";" ;
      
  
  
      procedureCall           ::=  reference<NO_WHITESPACE>"(" values? ")" ;
      
      returnBlock..           ::=  "{" ( statement | nonsense )* returnStatement "}" ;
                                       
      ternary                 ::=  "if" "(" term ")" expression "else" expression ;
      
      reduce                  ::=  "reduce"<NO_WHITESPACE>"(" variable "," anonymousProcedure "," value ")" ;
      
      every                   ::=  "every"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
      
      some                    ::=  "some"<NO_WHITESPACE>"(" variable "," anonymousProcedure ")" ;
  
      apply                   ::=  "apply"<NO_WHITESPACE>"(" variable "," referencesListLiteral ( "," values )? ")" ;
      
      
      
      nodesQuery              ::=  "nodesQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
      
      nodeQuery               ::=  "nodeQuery"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
      
      lengthOf                ::=  "lengthOf"<NO_WHITESPACE>"(" variable ")" ;
      
      toInteger               ::=  "toInteger"<NO_WHITESPACE>"(" variable ")" ;
      
      tryInteger              ::=  "tryInteger"<NO_WHITESPACE>"(" variable ")" ;
      
      startsWith              ::=  "startsWith"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
      
      endsWith                ::=  "endsWith"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
      
      contains                ::=  "contains"<NO_WHITESPACE>"(" variable "," [string-literal] ")" ;
      
      
      
      returnStatement         ::=  "return" value ";" ; 
      
      
      
      referencesListLiteral   ::=  "[" references? "]" ;
       
       
       
      importBindings          ::=  importBinding ( "," importBinding )* ;
      
      namedBindings           ::=  namedBinding ( "," namedBinding )* ;
      
      parameters              ::=  parameter ( "," parameter )* ;
      
      references              ::=  reference ( "," reference )* ;
      
      bindings                ::=  binding ( "," binding )* ;
      
      values                  ::=  value ( "," value )* ;
      
  
  
      importBinding           ::=  reference ( "as" label )? ;   
      
      namedBinding            ::=  type [name] ( "as" [name] )? ;   
      
      parameter               ::=  type [name] ;
  
      binding                 ::=  type [name]
      
                                |  ε 
                                    
                                ;
  
  
      
      expression              ::=  procedureCall
       
                                |  returnBlock
      
                                |  ternary
                                
                                |  reduce
      
                                |  every
      
                                |  some
                                
                                |  apply
                                
                                |  nodesQuery
                                
                                |  nodeQuery
                                
                                |  lengthOf
                               
                                |  toInteger
                               
                                |  tryInteger
                               
                                |  startsWith
                                
                                |  endsWith
                                
                                |  contains
                                
                                |  term
                                
                                ;
      
      
      
      bracketedTerm           ::=  "(" term ")" ; 
      
      comparisonTerm          ::=  term ( "==" | "!=" ) \` term (-2) ; 
      
      logicalTerm             ::=  term ( "||" | "&&" ) \` term (-1) ; 
  
      negatedTerm             ::=  "!"<NO_WHITESPACE>term (-3) ; 
      
  
      
      term                    ::=  bracketedTerm
      
                                |  comparisonTerm ( ) 
      
                                |  logicalTerm  ( )
      
                                |  negatedTerm ( ) 
      
                                |  primitive 
      
                                |  variable 
                                
                                ;
  
  
      
      type                    ::=  "List"<NO_WHITESPACE>"<" ( "Node" | "String" | "Boolean" | "Integer" ) ">"
       
                                |  "Node"  
       
                                |  "String" 
       
                                |  "Boolean"   
  
                                |  "Integer"   
  
                                ;
  
  
      
      value                   ::=  primitive 
      
                                |  variable 
  
                                ;
  
  
      
      primitive               ::=  [string-literal]
                                
                                |  [boolean]
                                
                                |  [integer]
                                
                                |  [null]
                               
                                ;
  
  
  
      reference.              ::=  [name] ;
      
      variable.               ::=  [name] ;
      
      label.                  ::=  [name] ;
      
      
      
      nonsense.               ::=  [string-literal] | [secondary-keyword] | [function-name] | [type] | [boolean] | [integer] | [null] | [name] | [special] | [unassigned] ;
  
  
      
      error.                  ::=  . ;
    
    `;

    let rules;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
              
        document              ::= ( importStatement | procedure | error )+ ;
        
        procedure             ::= "export"? type label <NO_WHITESPACE> "(" parameters? ")" returnBlock ;
        
        importStatement       ::= "import" importBindings "from" [string-literal] ";" ;
        
        anonymousProcedure    ::= type "(" parameters? ")" returnBlock ;
        
        statement             ::= variableAssignments
            
                                | objectAssignment
            
                                | listAssignment
        
                                ;
        
        variableAssignments   ::= type variableAssignment ( "," variableAssignment )* ";" ;
        
        variableAssignment    ::= variable "=" expression ;
        
        objectAssignment      ::= "{" namedBindings "}" "=" variable ";" ;
        
        listAssignment        ::= "[" bindings "]" "=" variable ";" ;
        
        procedureCall         ::= reference <NO_WHITESPACE> "(" values? ")" ;
        
        returnBlock..         ::= "{" ( statement | nonsense )* returnStatement "}" ;
        
        ternary               ::= "if" "(" term ")" expression "else" expression ;
        
        reduce                ::= "reduce" <NO_WHITESPACE> "(" variable "," anonymousProcedure "," value ")" ;
        
        every                 ::= "every" <NO_WHITESPACE> "(" variable "," anonymousProcedure ")" ;
        
        some                  ::= "some" <NO_WHITESPACE> "(" variable "," anonymousProcedure ")" ;
        
        apply                 ::= "apply" <NO_WHITESPACE> "(" variable "," referencesListLiteral ( "," values )? ")" ;
        
        nodesQuery            ::= "nodesQuery" <NO_WHITESPACE> "(" variable "," [string-literal] ")" ;
        
        nodeQuery             ::= "nodeQuery" <NO_WHITESPACE> "(" variable "," [string-literal] ")" ;
        
        lengthOf              ::= "lengthOf" <NO_WHITESPACE> "(" variable ")" ;
        
        toInteger             ::= "toInteger" <NO_WHITESPACE> "(" variable ")" ;
        
        tryInteger            ::= "tryInteger" <NO_WHITESPACE> "(" variable ")" ;
        
        startsWith            ::= "startsWith" <NO_WHITESPACE> "(" variable "," [string-literal] ")" ;
        
        endsWith              ::= "endsWith" <NO_WHITESPACE> "(" variable "," [string-literal] ")" ;
        
        contains              ::= "contains" <NO_WHITESPACE> "(" variable "," [string-literal] ")" ;
        
        returnStatement       ::= "return" value ";" ;
        
        referencesListLiteral ::= "[" references? "]" ;
        
        importBindings        ::= importBinding ( "," importBinding )* ;
        
        namedBindings         ::= namedBinding ( "," namedBinding )* ;
        
        parameters            ::= parameter ( "," parameter )* ;
        
        references            ::= reference ( "," reference )* ;
        
        bindings              ::= binding ( "," binding )* ;
        
        values                ::= value ( "," value )* ;
        
        importBinding         ::= reference ( "as" label )? ;
        
        namedBinding          ::= type [name] ( "as" [name] )? ;
        
        parameter             ::= type [name] ;
        
        binding               ::= type [name]
            
                                | ε
        
                                ;
        
        expression            ::= procedureCall
            
                                | returnBlock
            
                                | ternary
            
                                | reduce
            
                                | every
            
                                | some
            
                                | apply
            
                                | nodesQuery
            
                                | nodeQuery
            
                                | lengthOf
            
                                | toInteger
            
                                | tryInteger
            
                                | startsWith
            
                                | endsWith
            
                                | contains
            
                                | term
        
                                ;
        
        bracketedTerm         ::= "(" term ")" ;
        
        negatedTerm           ::= "!" <NO_WHITESPACE> term (-3) ;
        
        term                  ::= _term ;
        
        type                  ::= "List" <NO_WHITESPACE> "<" ( "Node" | "String" | "Boolean" | "Integer" ) ">"
            
                                | "Node"
            
                                | "String"
            
                                | "Boolean"
            
                                | "Integer"
        
                                ;
        
        value                 ::= primitive
            
                                | variable
        
                                ;
        
        primitive             ::= [string-literal]
            
                                | [boolean]
            
                                | [integer]
            
                                | [null]
        
                                ;
        
        reference.            ::= [name] ;
        
        variable.             ::= [name] ;
        
        label.                ::= [name] ;
        
        nonsense.             ::= [string-literal]
            
                                | [secondary-keyword]
            
                                | [function-name]
            
                                | [type]
            
                                | [boolean]
            
                                | [integer]
            
                                | [null]
            
                                | [name]
            
                                | [special]
            
                                | [unassigned]
        
                                ;
        
        error.                ::= . ;
        
        _bracketedTerm        ::= "(" _term ")" ;
        
        _logicalTerm          ::= _term ( "||" | "&&" ) \` _term (-1) ;
        
        _negatedTerm          ::= "!" <NO_WHITESPACE> _term (-3) ;
        
        _primitive            ::= [string-literal]
            
                                | [boolean]
            
                                | [integer]
            
                                | [null]
        
                                ;
        
        _variable.            ::= [name] ;
        
        _term                 ::= term_ ( ~comparisonTerm ( ) | ~logicalTerm ( ) )* ;
        
        term_                 ::= _bracketedTerm
            
                                | _negatedTerm ( )
            
                                | _primitive
            
                                | _variable
        
                                ;
        
        ~comparisonTerm       ::= ( "==" | "!=" ) \` _term (-2) ;
        
        _comparisonTerm       ::= _term ( "==" | "!=" ) \` _term (-2) ;
        
        ~logicalTerm          ::= ( "||" | "&&" ) \` _term (-1) ;

      `));
    });
  });

  describe("JavaScript", () => {
    let bnf = `
      
      javaScript        ::=  preamble? ( statement | function | class | error )* ;
    
    
      preamble          ::=  "use strict"<NO_WHITESPACE>";" ;
    
    
      statement         ::=  ( statementBody ... ";" )
    
                          |  "{" ( statement | function )* "}"
    
                          |  "if" "(" ( expression ... ")" ) statement ( "else" statement )?
    
                          |  "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement )
    
                                   | ( "(" variable "in" ( expression ... ")" ) statement )
    
                                   | ( "await"? "(" variable "of" ( expression ... ")" ) statement ) )
    
                          |  "do" statement "while" "(" ( expression ... ")" )     
    
                          |  "while" "(" ( expression ... ")" ) statement
    
                          |  "switch" "(" ( expression ... ")" ) "{" case* defaultCase? "}"
    
                          |  try ( ( catch* finally ) | catch+ )
    
                          ;
    
    
      class             ::=  ( "export" "default"? )? "class" name classBody
    
                          |  "export" "default" "class" classBody
    
                          ;
    
    
      function          ::=  ( "export" "default"? )? "async"? "function" name functionBody
    
                          |  "export" "default" "async"? "function" functionBody
    
                          ;
    
    
      statementBody     ::=  "import" ( [string-literal]
    
                                      | ( name "from" [string-literal] )
    
                                      | ( "{" names "}" "from" [string-literal] )
    
                                      | ( "*" "as" name "from" [string-literal] ) )
    
                          |  "export" ( ( "{" names "}" ( "from" [string-literal] )? )
    
                                      | ( "const" "{" fields "}" "=" expression )
    
                                      | ( "{" "default" "}" "from" [string-literal] )
    
                                      | ( "*" ( "as" name )? "from" [string-literal] ) )
    
                          |  "export"? ( ( "var" var ( "," var )* )
    
                                       | ( "let" let ( "," let )* )
    
                                       | ( "const" const ( "," const )* ) )
    
                          |  ( "export" "default" )? expression
    
                          |  "return" ( ( "(" expression ")" ) | expression? )
    
                          |  "throw" expression
    
                          |  "delete" expression
    
                          |  "break"
    
                          |  "continue"
    
                          |  "debugger"
    
                          ;
    
    
      functionBody      ::=  "(" arguments? ")" "{" ( statement | function )* "}" ;
    
    
      classBody         ::=  ( "extends" name )? "{" ( classConstructor | classMethod | classField )* "}" ;
    
    
      classConstructor  ::=  "constructor" functionBody ;
    
    
      classMethod       ::=  "static"? name functionBody ;
    
    
      classField        ::=  "static"? name "=" ( expression ... ";" ) ;
    
    
      var               ::=  variable ( "=" expression )? | destructure "=" expression ;
    
    
      let               ::=  variable ( "=" expression )? | destructure "=" expression ;
    
    
      const             ::=  ( variable | destructure ) "=" expression ;
    
    
      try               ::=  "try" "{" statement+ "}" ;
    
    
      catch             ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;
    
    
      finally           ::=  "finally" "{" statement+ "}" ;
    
    
      case              ::=  "case" expression ":" statement ( "break" ";" )? ;
    
    
      defaultCase       ::=  "default" ":" statement ( "break" ";" )? ;
    
    
      initialiser       ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;
    
    
      destructure       ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"
    
                          |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"
    
                          ;
    
    
      expression        ::=  jsx
    
                          |  json
    
                          |  arrowFunction
    
                          |  templateLiteral
    
                          |  "(" expression ")"
    
                          |  "{" ( property ( "," property )* )? "}"
    
                          |  "[" ( expression ( "," expression )* ","? )? "]"
    
                          |  "typeof" ( expression | ( "(" expression ")") )
    
                          |  "void" ( expression | ( "(" expression ")") )
    
                          |  "new" name<NO_WHITESPACE>"(" expressions? ")"
    
                          |  [operator]<NO_WHITESPACE>expression
    
                          |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )
    
                                                      | ( "[" expressions "]" )
    
                                                      | ( "(" expressions? ")" )
    
                                                      | templateLiteral
    
                                                      | [operator] )
    
                          |  expression ( ( [operator] expression )
    
                                        | ( "?" expression ":" expression )
    
                                        | ( "instanceof" expression )
    
                                        | ( "in" expression ) )
    
                          |  variable
    
                          |  importMeta
    
                          |  [number]
    
                          |  [string-literal]
    
                          |  "super" | "this" | "true" | "false" | "null" | "undefined"
    
                          ;
    
    
      jsx               ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;
    
    
      jsxCompleteTag    ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;
    
    
      jsxStartTag       ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;
    
    
      jsxEndTag         ::=  "</"<NO_WHITESPACE>name ">" ;
    
    
      jsxAttribute      ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;
    
    
      json              ::=  jsonArray | jsonObject ;
    
    
      jsonArray         ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;
    
    
      jsonObject        ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;
    
    
      jsonElement       ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;
    
    
      arrowFunction     ::=  "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;
    
    
      templateLiteral   ::=  "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;
    
    
      string            ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal] | [unassigned] )+ ;
    
    
      property          ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;
    
    
      importMeta        ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;
    
    
      expressions       ::=  expression ( "," expression )* ;
    
    
      arguments         ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;
    
    
      fields            ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;
    
    
      names             ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;
    
    
      spreadArgument    ::=  "..."<NO_WHITESPACE>variable ;
    
    
      argument          ::=  variable ( "=" expression )? ;
    
    
      variable          ::=  [identifier] ;
    
    
      label             ::=  [identifier] ;
    
    
      name              ::=  [identifier] ;
    
    
      error.            ::=  . ;
    
    `;

    let rules;

    before(() => {
      rules = rulesFromBNF(bnf);

      rules = eliminateLeftRecursion(rules);  ///

      const adjustedBNF = adjustedBNFFromRules(rules);

      bnf = adjustedBNF;  ///
    });

    it("is rewritten", () => {
      assert.isTrue(compareParseTreeStrings(bnf, `
        
        javaScript       ::= preamble? ( statement | function | class | error )* ;
        
        preamble         ::= "use strict" <NO_WHITESPACE> ";" ;
        
        statement        ::= ( statementBody ... ";" )
            
                           | "{" ( statement | function )* "}"
            
                           | "if" "(" ( expression ... ")" ) statement ( "else" statement )?
            
                           | "for" ( ( "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement ) | ( "(" variable "in" ( expression ... ")" ) statement ) | ( "await"? "(" variable "of" ( expression ... ")" ) statement ) )
            
                           | "do" statement "while" "(" ( expression ... ")" )
            
                           | "while" "(" ( expression ... ")" ) statement
            
                           | "switch" "(" ( expression ... ")" ) "{" case* defaultCase? "}"
            
                           | try ( ( catch* finally ) | catch+ )
        
                           ;
        
        class            ::= ( "export" "default"? )? "class" name classBody
            
                           | "export" "default" "class" classBody
        
                           ;
        
        function         ::= ( "export" "default"? )? "async"? "function" name functionBody
            
                           | "export" "default" "async"? "function" functionBody
        
                           ;
        
        statementBody    ::= "import" ( [string-literal] | ( name "from" [string-literal] ) | ( "{" names "}" "from" [string-literal] ) | ( "*" "as" name "from" [string-literal] ) )
            
                           | "export" ( ( "{" names "}" ( "from" [string-literal] )? ) | ( "const" "{" fields "}" "=" expression ) | ( "{" "default" "}" "from" [string-literal] ) | ( "*" ( "as" name )? "from" [string-literal] ) )
            
                           | "export"? ( ( "var" var ( "," var )* ) | ( "let" let ( "," let )* ) | ( "const" const ( "," const )* ) )
            
                           | ( "export" "default" )? expression
            
                           | "return" ( ( "(" expression ")" ) | expression? )
            
                           | "throw" expression
            
                           | "delete" expression
            
                           | "break"
            
                           | "continue"
            
                           | "debugger"
        
                           ;
        
        functionBody     ::= "(" arguments? ")" "{" ( statement | function )* "}" ;
        
        classBody        ::= ( "extends" name )? "{" ( classConstructor | classMethod | classField )* "}" ;
        
        classConstructor ::= "constructor" functionBody ;
        
        classMethod      ::= "static"? name functionBody ;
        
        classField       ::= "static"? name "=" ( expression ... ";" ) ;
        
        var              ::= variable ( "=" expression )?
            
                           | destructure "=" expression
        
                           ;
        
        let              ::= variable ( "=" expression )?
            
                           | destructure "=" expression
        
                           ;
        
        const            ::= ( variable | destructure ) "=" expression ;
        
        try              ::= "try" "{" statement+ "}" ;
        
        catch            ::= "catch" "(" [identifier] ")" "{" statement+ "}" ;
        
        finally          ::= "finally" "{" statement+ "}" ;
        
        case             ::= "case" expression ":" statement ( "break" ";" )? ;
        
        defaultCase      ::= "default" ":" statement ( "break" ";" )? ;
        
        initialiser      ::= expression
            
                           | "var" var ( "," var )*
            
                           | "let" let ( "," let )*
        
                           ;
        
        destructure      ::= "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"
            
                           | "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"
        
                           ;
        
        expression       ::= _expression ;
        
        jsx              ::= jsxCompleteTag
            
                           | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag
        
                           ;
        
        jsxCompleteTag   ::= "<" <NO_WHITESPACE> name jsxAttribute* "/>" ;
        
        jsxStartTag      ::= "<" <NO_WHITESPACE> name jsxAttribute* ">" ;
        
        jsxEndTag        ::= "</" <NO_WHITESPACE> name ">" ;
        
        jsxAttribute     ::= name ( <NO_WHITESPACE> "=" ( ( <NO_WHITESPACE> [string-literal] ) | ( <NO_WHITESPACE> "{" expression "}" ) ) )? ;
        
        json             ::= jsonArray
            
                           | jsonObject
        
                           ;
        
        jsonArray        ::= "[" ( jsonElement ( "," jsonElement )* )? "]" ;
        
        jsonObject       ::= "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;
        
        jsonElement      ::= json
            
                           | [string-literal]
            
                           | [number]
            
                           | "true"
            
                           | "false"
            
                           | "null"
        
                           ;
        
        arrowFunction    ::= "(" arguments? ")" "=>" ( expression | ( "{" statement* "}" ) ) ;
        
        templateLiteral  ::= "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;      
        
        string           ::= ( [number] | [special] | [operator] | [keyword] | [identifier] | [string-literal] | [unassigned] )+ ;
        
        property         ::= ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;
        
        importMeta       ::= "import" <NO_WHITESPACE> "." <NO_WHITESPACE> "meta" ;
        
        expressions      ::= expression ( "," expression )* ;
        
        arguments        ::= spreadArgument
            
                           | ( argument ( "," argument )* ( "," spreadArgument )? )
        
                           ;
        
        fields           ::= name ( ":" name )? ( "," name ( ":" name )? )* ;
        
        names            ::= name ( "as" name )? ( "," name ( "as" name )? )* ;
        
        spreadArgument   ::= "..." <NO_WHITESPACE> variable ;
        
        argument         ::= variable ( "=" expression )? ;
        
        variable         ::= [identifier] ;
        
        label            ::= [identifier] ;
        
        name             ::= [identifier] ;
        
        error.           ::= . ;
        
        _jsx             ::= _jsxCompleteTag
            
                           | _jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* _jsxEndTag
        
                           ;
        
        _jsxCompleteTag  ::= "<" <NO_WHITESPACE> _name _jsxAttribute* "/>" ;
        
        _name            ::= [identifier] ;
        
        _jsxAttribute    ::= _name ( <NO_WHITESPACE> "=" ( ( <NO_WHITESPACE> [string-literal] ) | ( <NO_WHITESPACE> "{" expression "}" ) ) )? ;
        
        _jsxStartTag     ::= "<" <NO_WHITESPACE> _name _jsxAttribute* ">" ;
        
        _string          ::= ( [number] | [special] | [operator] | [keyword] | [identifier] | [string-literal] | [unassigned] )+ ;
        
        _jsxEndTag       ::= "</" <NO_WHITESPACE> _name ">" ;
        
        _json            ::= _jsonArray
            
                           | _jsonObject
        
                           ;
        
        _jsonArray       ::= "[" ( jsonElement ( "," jsonElement )* )? "]" ;
        
        _jsonElement     ::= _json
            
                           | [string-literal]
            
                           | [number]
            
                           | "true"
            
                           | "false"
            
                           | "null"
        
                           ;
        
        _jsonObject      ::= "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;
        
        _arrowFunction   ::= "(" _arguments? ")" "=>" ( _expression | ( "{" _statement* "}" ) ) ;
        
        _arguments       ::= _spreadArgument
            
                           | ( _argument ( "," argument )* ( "," spreadArgument )? )
        
                           ;
        
        _spreadArgument  ::= "..." <NO_WHITESPACE> _variable ;
        
        _variable        ::= [identifier] ;
        
        _argument        ::= _variable ( "=" expression )? ;
        
        _statement       ::= ( _statementBody ... ";" )
            
                           | "{" ( statement | function )* "}"
            
                           | "if" "(" ( _expression ... ")" ) _statement ( "else" statement )?
            
                           | "for" ( ( "(" _initialiser ( ";" expression )? ( ";" expression )? ")" _statement ) | ( "(" _variable "in" ( _expression ... ")" ) _statement ) | ( "await"? "(" _variable "of" ( _expression ... ")" ) _statement ) )
            
                           | "do" _statement "while" "(" ( _expression ... ")" )
            
                           | "while" "(" ( _expression ... ")" ) _statement
            
                           | "switch" "(" ( _expression ... ")" ) "{" _case* _defaultCase? "}"
            
                           | _try ( ( _catch* _finally ) | _catch+ )
        
                           ;
        
        _statementBody   ::= "import" ( [string-literal] | ( _name "from" [string-literal] ) | ( "{" _names "}" "from" [string-literal] ) | ( "*" "as" _name "from" [string-literal] ) )
            
                           | "export" ( ( "{" _names "}" ( "from" [string-literal] )? ) | ( "const" "{" _fields "}" "=" _expression ) | ( "{" "default" "}" "from" [string-literal] ) | ( "*" ( "as" name )? "from" [string-literal] ) )
            
                           | "export"? ( ( "var" _var ( "," var )* ) | ( "let" _let ( "," let )* ) | ( "const" _const ( "," const )* ) )
            
                           | ( "export" "default" )? _expression
            
                           | "return" ( ( "(" _expression ")" ) | _expression? )
            
                           | "throw" _expression
            
                           | "delete" _expression
            
                           | "break"
            
                           | "continue"
            
                           | "debugger"
        
                           ;
        
        _names           ::= _name ( "as" name )? ( "," name ( "as" name )? )* ;
        
        _fields          ::= _name ( ":" name )? ( "," name ( ":" name )? )* ;
        
        _var             ::= _variable ( "=" expression )?
            
                           | _destructure "=" _expression
        
                           ;
        
        _destructure     ::= "[" _variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"
            
                           | "{" _variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"
        
                           ;
        
        _let             ::= _variable ( "=" expression )?
            
                           | _destructure "=" _expression
        
                           ;
        
        _const           ::= ( _variable | _destructure ) "=" _expression ;
        
        _function        ::= ( "export" "default"? )? "async"? "function" _name _functionBody
            
                           | "export" "default" "async"? "function" _functionBody
        
                           ;
        
        _functionBody    ::= "(" _arguments? ")" "{" ( statement | function )* "}" ;
        
        _initialiser     ::= _expression
            
                           | "var" _var ( "," var )*
            
                           | "let" _let ( "," let )*
        
                           ;
        
        _case            ::= "case" _expression ":" _statement ( "break" ";" )? ;
        
        _defaultCase     ::= "default" ":" _statement ( "break" ";" )? ;
        
        _try             ::= "try" "{" _statement+ "}" ;
        
        _catch           ::= "catch" "(" [identifier] ")" "{" _statement+ "}" ;
        
        _finally         ::= "finally" "{" _statement+ "}" ;
        
        _templateLiteral ::= "\`" ( ( "\${" expression? "}" ) | string )* "\`" ;
        
        _property        ::= ( ( ( _name | [string-literal] ) ":" _expression ) | _variable ) ;
        
        _expressions     ::= _expression ( "," expression )* ;
        
        _importMeta      ::= "import" <NO_WHITESPACE> "." <NO_WHITESPACE> "meta" ;
        
        _expression      ::= expression_ expression~* ;
        
        expression_      ::= _jsx
            
                           | _json
            
                           | _arrowFunction
            
                           | _templateLiteral
            
                           | "(" _expression ")"
            
                           | "{" ( property ( "," property )* )? "}"
            
                           | "[" ( expression ( "," expression )* ","? )? "]"
            
                           | "typeof" ( _expression | ( "(" _expression ")" ) )
            
                           | "void" ( _expression | ( "(" _expression ")" ) )
            
                           | "new" _name <NO_WHITESPACE> "(" _expressions? ")"
            
                           | [operator] <NO_WHITESPACE> _expression
            
                           | _variable
            
                           | _importMeta
            
                           | [number]
            
                           | [string-literal]
            
                           | "super"
            
                           | "this"
            
                           | "true"
            
                           | "false"
            
                           | "null"
            
                           | "undefined"
        
                           ;
        
        expression~      ::= <NO_WHITESPACE> ( ( "." <NO_WHITESPACE> _name ) | ( "[" _expressions "]" ) | ( "(" _expressions? ")" ) | _templateLiteral | [operator] )
            
                           | ( ( [operator] _expression ) | ( "?" _expression ":" _expression ) | ( "instanceof" _expression ) | ( "in" _expression ) )
        
                           ;
                                                      
     `));
    });
  });
});
