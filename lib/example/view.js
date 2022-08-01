"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return _default;
    }
});
var _easyWithStyle = /*#__PURE__*/ _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _easyLayout = require("easy-layout");
var _paragraph = /*#__PURE__*/ _interopRequireDefault(require("./paragraph"));
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _rewriteNodes = /*#__PURE__*/ _interopRequireDefault(require("../rewriteNodes"));
var _rules = /*#__PURE__*/ _interopRequireDefault(require("../utilities/rules"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = /*#__PURE__*/ _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = /*#__PURE__*/ _interopRequireDefault(require("./textarea/adjustedBNF"));
var _rewriteNodes1 = /*#__PURE__*/ _interopRequireDefault(require("./checkbox/rewriteNodes"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interopRequireDefault(require("../eliminateLeftRecursion"));
var _parser = require("../utilities/parser");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function _construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _setPrototypeOf(instance, Class.prototype);
            return instance;
        };
    }
    return _construct.apply(null, arguments);
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
        if (Class === null || !_isNativeFunction(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _getPrototypeOf(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _setPrototypeOf(Wrapper, Class);
    };
    return _wrapNativeSuper(Class);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesAsString = _rules.default.rulesAsString, ruleMapFromRules = _rules.default.ruleMapFromRules, startRuleFromRulesAndStartRuleName = _rules.default.startRuleFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        _defineProperty(_assertThisInitialized(_this), "changeHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "update",
            value: function update() {
                var bnf = this.getBNF(), content = this.getContent(), startRuleName = this.getStartRuleName(), lexicalPattern = this.getLexicalPattern();
                var rules = (0, _parser.rulesFromBNF)(bnf);
                rules = (0, _eliminateLeftRecursion.default)(rules);
                var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                this.setAdjustedBNF(adjustedBNF);
                try {
                    var basicLexer = basicLexerFromLexicalPattern(lexicalPattern), basicParser = basicParserFromRulesAndStartRuleName(rules, startRuleName), tokens = basicLexer.tokenise(content), node = basicParser.parse(tokens);
                    var parseTree = null;
                    if (node !== null) {
                        var rewriteNodesCheckboxChecked = this.isRewriteNodesCheckboxChecked();
                        if (rewriteNodesCheckboxChecked) {
                            (0, _rewriteNodes.default)(node);
                        }
                        var abridged = true;
                        parseTree = node.asParseTree(tokens, abridged);
                    }
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical pattern"), /*#__PURE__*/ React.createElement(_lexicalPattern.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
                        readOnly: true
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: this.keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_rewriteNodes1.default, {
                        onChange: this.changeHandler,
                        checked: true
                    }), "Rewrite nodes"))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _constructor = this.constructor, initialBNF = _constructor.initialBNF, initialContent = _constructor.initialContent, initialStartRuleName = _constructor.initialStartRuleName, initialLexicalPattern = _constructor.initialLexicalPattern, bnf = initialBNF, content = initialContent, startRuleName = initialStartRuleName, lexicalPattern = initialLexicalPattern; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setStartRuleName(startRuleName);
                this.setLexicalPattern(lexicalPattern);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialBNF", '\n      A ::= "d" \n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C C ;\n    \n    C ::= "b"\n    \n        | A\n    \n        | "c"\n\n        ;\n');
_defineProperty(View, "initialContent", "d");
_defineProperty(View, "initialStartRuleName", "");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());
function basicLexerFromLexicalPattern(lexicalPattern) {
    var unassigned = "^.*$", custom = lexicalPattern, entries = [
        {
            custom: custom
        },
        {
            unassigned: unassigned
        }
    ], basicLexer = _occamLexers.BasicLexer.fromEntries(entries);
    return basicLexer;
}
function basicParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), basicParser = new _occamParsers.BasicParser(startRule, ruleMap);
    return basicParser;
}
' \ndocument                             ::=   ( topLevelInstruction | verticalSpace | error )+ ;\n\n\n\ntopLevelInstruction                  ::=   rule \n\n                                       |   axiom \n\n                                       |   lemma \n\n                                       |   theorem \n\n                                       |   conjecture \n\n                                       |   metalemma \n\n                                       |   metatheorem \n\n                                       |   metaconjecture\n\n                                       |   typeDeclaration \n                                           \n                                       |   variableDeclaration \n                                           \n                                       |   comparatorDeclaration \n                                           \n                                       |   combinatorDeclaration \n                                           \n                                       |   constructorDeclaration \n                                           \n                                       |   disjointTypeDeclaration \n                                           \n                                       |   metavariableDeclaration \n                                           \n                                       |   dependentTypeDeclaration \n                                           \n                                       |   typesDeclaration \n                                           \n                                       |   variablesDeclaration \n                                           \n                                       |   comparatorsDeclaration \n                                           \n                                       |   combinatorsDeclaration \n                                           \n                                       |   constructorsDeclaration \n                                           \n                                       |   disjointTypesDeclaration \n                                           \n                                       |   metavariablesDeclaration \n                                           \n                                       |   dependentTypesDeclaration \n                                           \n                                       ;\n\n\n\nverticalSpace                        ::=   <END_OF_LINE>+ ;\n\n\n\nerror                                ::=   . ;\n\n\n\nrule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;\n\naxiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; \n\nlemma                                ::=   "Lemma" "(" label ( "," label )* ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;\n\ntheorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;\n\nconjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;\n\nmetalemma                            ::=   "Metalemma" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;\n\nmetatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;\n\nmetaconjecture                       ::=   "Metaconjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) ;\n\ntypeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;\n \nvariableDeclaration                  ::=   "Variable" variable ":" type <END_OF_LINE> ;\n \ncomparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;\n \ncombinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;\n \nconstructorDeclaration               ::=   "Constructor" term ( ":" type )? <END_OF_LINE> ;\n \ndisjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;\n                                       \nmetavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;\n \ndependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;\n                                       \ntypesDeclaration                     ::=   "Types" type ( ":"  type )? <END_OF_LINE> ;\n\nvariablesDeclaration                 ::=   "Variables" variable ( "," variable )+ ":" type <END_OF_LINE> ;\n \ncomparatorsDeclaration               ::=   "Comparators" statement ( "," statement )+ <END_OF_LINE> ;\n \ncombinatorsDeclaration               ::=   "Combinators" expression ( "," expression )+ ( ":" type )? <END_OF_LINE> ;\n \nconstructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" type )? <END_OF_LINE> ;\n \ndisjointTypesDeclaration             ::=   "DisjointTypes" disjointType ( "," disjointType )+ ":" type ( "," type )+ <END_OF_LINE> ;\n \nmetavariablesDeclaration             ::=   "Metavariables" metavariable ( "," metavariable )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;\n \ndependentTypesDeclaration            ::=   "DependentTypes" dependentType ( "," dependentType )+ ":" type <END_OF_LINE> ;\n  \n\n  \npremise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;\n\npremises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;\n\nconclusion                           ::=   "Conclusion" <END_OF_LINE> unqualifiedMetastatement ;\n\n\n\nmetaproof                            ::=   "Proof" <END_OF_LINE> \n\n                                           metastatementDefinition*\n\n                                           metaProofDerivation? \n                                          \n                                           qualifiedMetastatement ;\n                                          \n                                          \n\nmetaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+  \n\n                                           "Therefore" <END_OF_LINE> ;                                           \n\nmetaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ \n\n                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;\n\nmetaSublemma                         ::=   "Suppose" <END_OF_LINE> \n\n                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ \n\n                                           ( \n                                          \n                                             "Then" <END_OF_LINE> \n                                            \n                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ \n                                          \n                                           )? \n                                          \n                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;\n\n\n\nproof                                ::=   "Proof" <END_OF_LINE> \n\n                                           statementDefinition*\n\n                                           proofDerivation? \n                                          \n                                           qualifiedStatement ;\n                                                                                         \n                                                                                         \n                                                                                         \nproofDerivation                      ::=   ( sublemma | qualifiedStatement )+ \n\n                                           "Therefore" <END_OF_LINE> ;\n\nindicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ \n\n                                           "Hence" <END_OF_LINE> qualifiedStatement ;\n\nsublemma                             ::=   "Suppose" <END_OF_LINE> \n\n                                           ( subLemma | qualifiedStatement )+ \n\n                                           ( \n                                          \n                                             "Then" <END_OF_LINE> \n                                            \n                                             ( subLemma | qualifiedStatement )+ \n                                          \n                                           )? \n                                          \n                                           "Hence" <END_OF_LINE> qualifiedStatement ;\n\n\n\nmetastatementDefinition              ::=   "Let" unqualifiedMetastatement ;                                           \n                                          \nstatementDefinition                  ::=   "Let" unqualifiedStatement ;                                           \n\n\n\nunqualifiedMetastatement!            ::=   metastatement <END_OF_LINE> \n\n                                       |   nonsense... <END_OF_LINE> \n                                       \n                                       ;\n\nqualifiedMetastatement!              ::=   metastatement qualification? <END_OF_LINE> \n\n                                       |   nonsense... qualification? <END_OF_LINE> \n                                        \n                                       ;\n\nunqualifiedStatement!                ::=   statement <END_OF_LINE>\n\n                                       |   nonsense... <END_OF_LINE> \n                                       \n                                       ;\n\nqualifiedStatement!                  ::=   statement qualification? <END_OF_LINE> \n\n                                       |   nonsense... qualification? <END_OF_LINE> \n                                       \n                                       ;\n\n\n\nnonsense                             ::=   ( "by" | "from" | [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;\n\n\n\nargument                             ::=   type | expression ;\n\n\n\nqualification                        ::=   ( "by" | "from" ) reference ;\n\n\n\ndependentType                        ::=   [name]<NO_WHITESPACE>"(" term ")" ;\n\n\n\nmetavariable                         ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\nreference                            ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\ncontext                              ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\nlabel                                ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\n\n\ndisjointType                         ::=   [name] ;\n\nvariable                             ::=   . ; \n\ntype                 ::= "Number"\n\n                       | "RealNumber"\n\n                       | "RationalNumber"\n\n                       | "Integer"\n\n                       | "NaturalNumber"\n\n                       | "NonZeroInteger"\n\n                       | _\n\n                       ;\n\nterm!                ::= arithmeticTerm\n\n                       | _\n\n                       ;\n\nexpression!          ::= arithmeticExpression\n\n                       | _\n\n                       ;\n\nstatement!           ::= "(" statement ")"\n\n                       | "\xac" <NO_WHITESPACE> statement\n\n                       | statement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) statement\n\n                       | arithmeticAtatement\n\n                       | typeAssertion\n\n                       | equality\n\n                       ;\n\ntypeAssertion        ::= expression ":" type ;\n\nequality             ::= expression "=" expression ;\n\nmetastatement!       ::= [name] "=" naturalNumber\n\n                       | "(" metastatement ")"\n\n                       | "\xac" <NO_WHITESPACE> metastatement\n\n                       | metastatement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) metastatement\n\n                       | contextDefinition\n\n                       | proofAssertion\n\n                       | metavariable\n\n                       | subproof\n\n                       ;\n\ncontextDefinition    ::= context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion       ::= context "|-" judgement ;\n\njudgement            ::= reference "::" metastatement ;\n\nsubproof             ::= "[" metastatement "]" "..." metastatement ;\n\narithmeticTerm       ::= rationalNumber\n\n                       | integer\n\n                       | naturalNumber\n\n                       | variable\n\n                       ;\n\narithmeticExpression ::= "(" argument ")"\n\n                       | argument ( "+" | "-" | "\xd7" | "\xf7" ) argument\n\n                       | arithmeticTerm\n\n                       ;\n\narithmeticAtatement  ::= argument ( "<" | "<=" | ">=" | ">" ) argument ;\n\nnaturalNumber        ::= "successor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "predecessor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "zero"\n\n                       | variable\n\n                       ;\n\ninteger              ::= "successor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "predecessor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "-" <NO_WHITESPACE> argument\n\n                       | naturalNumber\n\n                       | variable\n\n                       ;\n\nrationalNumber       ::= argument <NO_WHITESPACE> "/" <NO_WHITESPACE> argument\n\n                       | variable\n\n                       ;\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IHJld3JpdGVOb2RlcyBmcm9tIFwiLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgcnVsZXNVdGlsaXRpZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJld3JpdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3Jld3JpdGVOb2Rlc1wiXG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNpY0xleGVyID0gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgICAgICAgICBiYXNpY1BhcnNlciA9ICBiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICAgIGlmIChyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYnJpZGdlZCA9IHRydWU7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJld3JpdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxTdGFydFJ1bGVOYW1lLCBpbml0aWFsTGV4aWNhbFBhdHRlcm4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGBcbiAgICAgIEEgOjo9IFwiZFwiIFxuICAgIFxuICAgICAgICB8IEJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQyBDIDtcbiAgICBcbiAgICBDIDo6PSBcImJcIlxuICAgIFxuICAgICAgICB8IEFcbiAgICBcbiAgICAgICAgfCBcImNcIlxuXG4gICAgICAgIDtcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJkXCI7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IFwiXi4qJFwiLCAgLy8vXG4gICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gYmFzaWNMZXhlcjtcbn1cblxuZnVuY3Rpb24gYmFzaWNQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGJhc2ljUGFyc2VyO1xufVxuXG5gIFxuZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggdG9wTGV2ZWxJbnN0cnVjdGlvbiB8IHZlcnRpY2FsU3BhY2UgfCBlcnJvciApKyA7XG5cblxuXG50b3BMZXZlbEluc3RydWN0aW9uICAgICAgICAgICAgICAgICAgOjo9ICAgcnVsZSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGF4aW9tIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbGVtbWEgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0aGVvcmVtIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29uamVjdHVyZSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGFsZW1tYSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF0aGVvcmVtIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YWNvbmplY3R1cmVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB2YXJpYWJsZURlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbXBhcmF0b3JEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29uc3RydWN0b3JEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkaXNqb2ludFR5cGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhdmFyaWFibGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkZXBlbmRlbnRUeXBlRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZXNEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB2YXJpYWJsZXNEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb21wYXJhdG9yc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbWJpbmF0b3JzRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29uc3RydWN0b3JzRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgZGlzam9pbnRUeXBlc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkZXBlbmRlbnRUeXBlc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxudmVydGljYWxTcGFjZSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIDxFTkRfT0ZfTElORT4rIDtcblxuXG5cbmVycm9yICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAuIDtcblxuXG5cbnJ1bGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlJ1bGVcIiBcIihcIiBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIFwiKVwiIDxFTkRfT0ZfTElORT4gKCBwcmVtaXNlIHwgcHJlbWlzZXMgKT8gY29uY2x1c2lvbiBtZXRhcHJvb2Y/IDtcblxuYXhpb20gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiQXhpb21cIiBcIihcIiBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIFwiKVwiIDxFTkRfT0ZfTElORT4gKCBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZFN0YXRlbWVudCApIDsgXG5cbmxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkxlbW1hXCIgXCIoXCIgbGFiZWwgKCBcIixcIiBsYWJlbCApKiBcIilcIj8gPEVORF9PRl9MSU5FPiAoIGluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkU3RhdGVtZW50ICkgcHJvb2YgO1xuXG50aGVvcmVtICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJUaGVvcmVtXCIgXCIoXCIgbGFiZWwgKCBcIixcIiBsYWJlbCApKiBcIilcIiA8RU5EX09GX0xJTkU+ICggaW5kaWNhdGl2ZUNvbmRpdGlvbmFsIHwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgKSBwcm9vZiA7XG5cbmNvbmplY3R1cmUgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbmplY3R1cmVcIiBcIihcIiBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIFwiKVwiIDxFTkRfT0ZfTElORT4gKCBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZFN0YXRlbWVudCApIHByb29mPyA7XG5cbm1ldGFsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIk1ldGFsZW1tYVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIG1ldGFJbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgKSBtZXRhcHJvb2YgO1xuXG5tZXRhdGhlb3JlbSAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhdGhlb3JlbVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIG1ldGFJbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgKSBtZXRhcHJvb2YgO1xuXG5tZXRhY29uamVjdHVyZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhY29uamVjdHVyZVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIG1ldGFJbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgKSA7XG5cbnR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlR5cGVcIiB0eXBlICggXCI6XCIgdHlwZSApPyA8RU5EX09GX0xJTkU+IDtcbiBcbnZhcmlhYmxlRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICA6Oj0gICBcIlZhcmlhYmxlXCIgdmFyaWFibGUgXCI6XCIgdHlwZSA8RU5EX09GX0xJTkU+IDtcbiBcbmNvbXBhcmF0b3JEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbXBhcmF0b3JcIiBzdGF0ZW1lbnQgPEVORF9PRl9MSU5FPiA7XG4gXG5jb21iaW5hdG9yRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJDb21iaW5hdG9yXCIgZXhwcmVzc2lvbiAoIFwiOlwiIHR5cGUgKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5jb25zdHJ1Y3RvckRlY2xhcmF0aW9uICAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvclwiIHRlcm0gKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuIFxuZGlzam9pbnRUeXBlRGVjbGFyYXRpb24gICAgICAgICAgICAgIDo6PSAgIFwiRGlzam9pbnRUeXBlXCIgZGlzam9pbnRUeXBlIFwiOlwiIHR5cGUgKCBcIixcIiB0eXBlICkrIDxFTkRfT0ZfTElORT4gO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5tZXRhdmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgOjo9ICAgXCJNZXRhdmFyaWFibGVcIiBtZXRhdmFyaWFibGUgXCI6XCIgKCBcIlN0YXRlbWVudFwiIHwgXCJDb250ZXh0XCIgKSA8RU5EX09GX0xJTkU+IDtcbiBcbmRlcGVuZGVudFR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICA6Oj0gICBcIkRlcGVuZGVudFR5cGVcIiBkZXBlbmRlbnRUeXBlIFwiOlwiIHR5cGUgPEVORF9PRl9MSU5FPiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnR5cGVzRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlR5cGVzXCIgdHlwZSAoIFwiOlwiICB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuXG52YXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgOjo9ICAgXCJWYXJpYWJsZXNcIiB2YXJpYWJsZSAoIFwiLFwiIHZhcmlhYmxlICkrIFwiOlwiIHR5cGUgPEVORF9PRl9MSU5FPiA7XG4gXG5jb21wYXJhdG9yc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgOjo9ICAgXCJDb21wYXJhdG9yc1wiIHN0YXRlbWVudCAoIFwiLFwiIHN0YXRlbWVudCApKyA8RU5EX09GX0xJTkU+IDtcbiBcbmNvbWJpbmF0b3JzRGVjbGFyYXRpb24gICAgICAgICAgICAgICA6Oj0gICBcIkNvbWJpbmF0b3JzXCIgZXhwcmVzc2lvbiAoIFwiLFwiIGV4cHJlc3Npb24gKSsgKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuIFxuY29uc3RydWN0b3JzRGVjbGFyYXRpb24gICAgICAgICAgICAgIDo6PSAgIFwiQ29uc3RydWN0b3JzXCIgdGVybSAoIFwiLFwiIHRlcm0gKSsgKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuIFxuZGlzam9pbnRUeXBlc0RlY2xhcmF0aW9uICAgICAgICAgICAgIDo6PSAgIFwiRGlzam9pbnRUeXBlc1wiIGRpc2pvaW50VHlwZSAoIFwiLFwiIGRpc2pvaW50VHlwZSApKyBcIjpcIiB0eXBlICggXCIsXCIgdHlwZSApKyA8RU5EX09GX0xJTkU+IDtcbiBcbm1ldGF2YXJpYWJsZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICA6Oj0gICBcIk1ldGF2YXJpYWJsZXNcIiBtZXRhdmFyaWFibGUgKCBcIixcIiBtZXRhdmFyaWFibGUgKSsgXCI6XCIgKCBcIlN0YXRlbWVudFwiIHwgXCJDb250ZXh0XCIgKSA8RU5EX09GX0xJTkU+IDtcbiBcbmRlcGVuZGVudFR5cGVzRGVjbGFyYXRpb24gICAgICAgICAgICA6Oj0gICBcIkRlcGVuZGVudFR5cGVzXCIgZGVwZW5kZW50VHlwZSAoIFwiLFwiIGRlcGVuZGVudFR5cGUgKSsgXCI6XCIgdHlwZSA8RU5EX09GX0xJTkU+IDtcbiAgXG5cbiAgXG5wcmVtaXNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlXCIgPEVORF9PRl9MSU5FPiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgO1xuXG5wcmVtaXNlcyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcmVtaXNlc1wiIDxFTkRfT0ZfTElORT4gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCsgO1xuXG5jb25jbHVzaW9uICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJDb25jbHVzaW9uXCIgPEVORF9PRl9MSU5FPiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgO1xuXG5cblxubWV0YXByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUHJvb2ZcIiA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0YXN0YXRlbWVudERlZmluaXRpb24qXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhUHJvb2ZEZXJpdmF0aW9uPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxubWV0YVByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgICggbWV0YVN1YmxlbW1hIHwgcXVhbGlmaWVkTWV0YXN0YXRlbWVudCB8IHF1YWxpZmllZFN0YXRlbWVudCApKyAgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXJlZm9yZVwiIDxFTkRfT0ZfTElORT4gOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxubWV0YUluZGljYXRpdmVDb25kaXRpb25hbCAgICAgICAgICAgIDo6PSAgIFwiU3VwcG9zZVwiIDxFTkRfT0ZfTElORT4gdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50KyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVuY2VcIiA8RU5EX09GX0xJTkU+IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgO1xuXG5tZXRhU3VibGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggbWV0YVN1YmxlbW1hIHwgcXVhbGlmaWVkTWV0YXN0YXRlbWVudCB8IHF1YWxpZmllZFN0YXRlbWVudCApKyBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlblwiIDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBtZXRhU3VibGVtbWEgfCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50IHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKT8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbmNlXCIgPEVORF9PRl9MSU5FPiBxdWFsaWZpZWRNZXRhc3RhdGVtZW50IDtcblxuXG5cbnByb29mICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByb29mXCIgPEVORF9PRl9MSU5FPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlbWVudERlZmluaXRpb24qXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9vZkRlcml2YXRpb24/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWVkU3RhdGVtZW50IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnByb29mRGVyaXZhdGlvbiAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIHN1YmxlbW1hIHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVyZWZvcmVcIiA8RU5EX09GX0xJTkU+IDtcblxuaW5kaWNhdGl2ZUNvbmRpdGlvbmFsICAgICAgICAgICAgICAgIDo6PSAgIFwiU3VwcG9zZVwiIDxFTkRfT0ZfTElORT4gdW5xdWFsaWZpZWRTdGF0ZW1lbnQrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZW5jZVwiIDxFTkRfT0ZfTElORT4gcXVhbGlmaWVkU3RhdGVtZW50IDtcblxuc3VibGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiU3VwcG9zZVwiIDxFTkRfT0ZfTElORT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHN1YkxlbW1hIHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVuXCIgPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIHN1YkxlbW1hIHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKT8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbmNlXCIgPEVORF9PRl9MSU5FPiBxdWFsaWZpZWRTdGF0ZW1lbnQgO1xuXG5cblxubWV0YXN0YXRlbWVudERlZmluaXRpb24gICAgICAgICAgICAgIDo6PSAgIFwiTGV0XCIgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50IDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbnN0YXRlbWVudERlZmluaXRpb24gICAgICAgICAgICAgICAgICA6Oj0gICBcIkxldFwiIHVucXVhbGlmaWVkU3RhdGVtZW50IDsgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG5cblxuXG51bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgOjo9ICAgbWV0YXN0YXRlbWVudCA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbm9uc2Vuc2UuLi4gPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5xdWFsaWZpZWRNZXRhc3RhdGVtZW50ISAgICAgICAgICAgICAgOjo9ICAgbWV0YXN0YXRlbWVudCBxdWFsaWZpY2F0aW9uPyA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbm9uc2Vuc2UuLi4gcXVhbGlmaWNhdGlvbj8gPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxudW5xdWFsaWZpZWRTdGF0ZW1lbnQhICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCA8RU5EX09GX0xJTkU+XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBub25zZW5zZS4uLiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnF1YWxpZmllZFN0YXRlbWVudCEgICAgICAgICAgICAgICAgICA6Oj0gICBzdGF0ZW1lbnQgcXVhbGlmaWNhdGlvbj8gPEVORF9PRl9MSU5FPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG5vbnNlbnNlLi4uIHF1YWxpZmljYXRpb24/IDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbm5vbnNlbnNlICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIFwiYnlcIiB8IFwiZnJvbVwiIHwgW25hbWVdIHwgW2N1c3RvbV0gfCBbc3BlY2lhbF0gfCBbcmVzZXJ2ZWRdIHwgW3VuYXNzaWduZWRdICkrIDtcblxuXG5cbmFyZ3VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICB0eXBlIHwgZXhwcmVzc2lvbiA7XG5cblxuXG5xdWFsaWZpY2F0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKCBcImJ5XCIgfCBcImZyb21cIiApIHJlZmVyZW5jZSA7XG5cblxuXG5kZXBlbmRlbnRUeXBlICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiA7XG5cblxuXG5tZXRhdmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiApPyA7XG5cbnJlZmVyZW5jZSAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbbmFtZV0gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiICk/IDtcblxuY29udGV4dCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFtuYW1lXSAoIDxOT19XSElURVNQQUNFPlwiKFwiIHRlcm0gXCIpXCIgKT8gO1xuXG5sYWJlbCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiApPyA7XG5cblxuXG5kaXNqb2ludFR5cGUgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdIDtcblxudmFyaWFibGUgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIC4gOyBcblxudHlwZSAgICAgICAgICAgICAgICAgOjo9IFwiTnVtYmVyXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwiUmVhbE51bWJlclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIlJhdGlvbmFsTnVtYmVyXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwiSW50ZWdlclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIk5hdHVyYWxOdW1iZXJcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJOb25aZXJvSW50ZWdlclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBfXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG50ZXJtISAgICAgICAgICAgICAgICA6Oj0gYXJpdGhtZXRpY1Rlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICB8IF9cblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmV4cHJlc3Npb24hICAgICAgICAgIDo6PSBhcml0aG1ldGljRXhwcmVzc2lvblxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgX1xuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxuc3RhdGVtZW50ISAgICAgICAgICAgOjo9IFwiKFwiIHN0YXRlbWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCLCrFwiIDxOT19XSElURVNQQUNFPiBzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHN0YXRlbWVudCAoIFwiL1xcXFxcXFxcXCIgfCBcIlxcXFxcXFxcL1wiIHwgXCJpZmZcIiB8IFwiPT5cIiB8IFwiPD0+XCIgKSBzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IGFyaXRobWV0aWNBdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHR5cGVBc3NlcnRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICB8IGVxdWFsaXR5XG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG50eXBlQXNzZXJ0aW9uICAgICAgICA6Oj0gZXhwcmVzc2lvbiBcIjpcIiB0eXBlIDtcblxuZXF1YWxpdHkgICAgICAgICAgICAgOjo9IGV4cHJlc3Npb24gXCI9XCIgZXhwcmVzc2lvbiA7XG5cbm1ldGFzdGF0ZW1lbnQhICAgICAgIDo6PSBbbmFtZV0gXCI9XCIgbmF0dXJhbE51bWJlclxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCIoXCIgbWV0YXN0YXRlbWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCLCrFwiIDxOT19XSElURVNQQUNFPiBtZXRhc3RhdGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBtZXRhc3RhdGVtZW50ICggXCIvXFxcXFxcXFxcIiB8IFwiXFxcXFxcXFwvXCIgfCBcImlmZlwiIHwgXCI9PlwiIHwgXCI8PT5cIiApIG1ldGFzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IGNvbnRleHREZWZpbml0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBwcm9vZkFzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBzdWJwcm9vZlxuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxuY29udGV4dERlZmluaXRpb24gICAgOjo9IGNvbnRleHQgXCI9XCIgKCBqdWRnZW1lbnQgfCBjb250ZXh0ICkgKCBcIixcIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSApKiA7XG5cbnByb29mQXNzZXJ0aW9uICAgICAgIDo6PSBjb250ZXh0IFwifC1cIiBqdWRnZW1lbnQgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICA6Oj0gcmVmZXJlbmNlIFwiOjpcIiBtZXRhc3RhdGVtZW50IDtcblxuc3VicHJvb2YgICAgICAgICAgICAgOjo9IFwiW1wiIG1ldGFzdGF0ZW1lbnQgXCJdXCIgXCIuLi5cIiBtZXRhc3RhdGVtZW50IDtcblxuYXJpdGhtZXRpY1Rlcm0gICAgICAgOjo9IHJhdGlvbmFsTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBpbnRlZ2VyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBuYXR1cmFsTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCB2YXJpYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxuYXJpdGhtZXRpY0V4cHJlc3Npb24gOjo9IFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBhcmd1bWVudCAoIFwiK1wiIHwgXCItXCIgfCBcIsOXXCIgfCBcIsO3XCIgKSBhcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgYXJpdGhtZXRpY1Rlcm1cblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmFyaXRobWV0aWNBdGF0ZW1lbnQgIDo6PSBhcmd1bWVudCAoIFwiPFwiIHwgXCI8PVwiIHwgXCI+PVwiIHwgXCI+XCIgKSBhcmd1bWVudCA7XG5cbm5hdHVyYWxOdW1iZXIgICAgICAgIDo6PSBcInN1Y2Nlc3NvclwiIDxOT19XSElURVNQQUNFPiBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJwcmVkZWNlc3NvclwiIDxOT19XSElURVNQQUNFPiBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJ6ZXJvXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5pbnRlZ2VyICAgICAgICAgICAgICA6Oj0gXCJzdWNjZXNzb3JcIiA8Tk9fV0hJVEVTUEFDRT4gXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwicHJlZGVjZXNzb3JcIiA8Tk9fV0hJVEVTUEFDRT4gXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwiLVwiIDxOT19XSElURVNQQUNFPiBhcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbmF0dXJhbE51bWJlclxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgdmFyaWFibGVcblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnJhdGlvbmFsTnVtYmVyICAgICAgIDo6PSBhcmd1bWVudCA8Tk9fV0hJVEVTUEFDRT4gXCIvXCIgPE5PX1dISVRFU1BBQ0U+IGFyZ3VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCB2YXJpYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcbmAiXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiYmFzaWNMZXhlciIsImJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4iLCJiYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJCYXNpY1BhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQWlMYixTQUlFOzs7ZUFKRixRQUlFOzs7a0VBbkxvQixpQkFBaUI7b0JBRWYsTUFBTTsyQkFDSCxjQUFjOzRCQUNiLGVBQWU7MEJBQ3lCLGFBQWE7OERBRTNELGFBQWE7K0RBQ1osY0FBYzs2REFDYixnQkFBZ0I7d0RBQ2hCLGdCQUFnQjtpRUFDZixpQkFBaUI7MERBQ2Ysb0JBQW9COzREQUNuQixvQkFBb0I7OERBQ2xCLHNCQUFzQjtrRUFDckIsdUJBQXVCO21FQUN0Qix3QkFBd0I7Z0VBQ3hCLHdCQUF3QjtrRUFDdkIseUJBQXlCOzJFQUN2QiwyQkFBMkI7c0JBRWpDLHFCQUFxQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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