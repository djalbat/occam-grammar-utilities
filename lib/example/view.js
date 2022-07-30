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
_defineProperty(View, "initialBNF", ' \ndocument                             ::=   ( topLevelInstruction | verticalSpace | error )+ ;\n\n\n\ntopLevelInstruction                  ::=   rule \n\n                                       |   axiom \n\n                                       |   lemma \n\n                                       |   theorem \n\n                                       |   conjecture \n\n                                       |   metalemma \n\n                                       |   metatheorem \n\n                                       |   metaconjecture\n\n                                       |   typeDeclaration \n                                           \n                                       |   variableDeclaration \n                                           \n                                       |   comparatorDeclaration \n                                           \n                                       |   combinatorDeclaration \n                                           \n                                       |   constructorDeclaration \n                                           \n                                       |   disjointTypeDeclaration \n                                           \n                                       |   metavariableDeclaration \n                                           \n                                       |   dependentTypeDeclaration \n                                           \n                                       |   typesDeclaration \n                                           \n                                       |   variablesDeclaration \n                                           \n                                       |   comparatorsDeclaration \n                                           \n                                       |   combinatorsDeclaration \n                                           \n                                       |   constructorsDeclaration \n                                           \n                                       |   disjointTypesDeclaration \n                                           \n                                       |   metavariablesDeclaration \n                                           \n                                       |   dependentTypesDeclaration \n                                           \n                                       ;\n\n\n\nverticalSpace                        ::=   <END_OF_LINE>+ ;\n\n\n\nerror                                ::=   . ;\n\n\n\nrule                                 ::=   "Rule" "(" label ( "," label )* ")" <END_OF_LINE> ( premise | premises )? conclusion metaproof? ;\n\naxiom                                ::=   "Axiom" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) ; \n\nlemma                                ::=   "Lemma" "(" label ( "," label )* ")"? <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;\n\ntheorem                              ::=   "Theorem" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof ;\n\nconjecture                           ::=   "Conjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( indicativeConditional | unqualifiedStatement ) proof? ;\n\nmetalemma                            ::=   "Metalemma" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;\n\nmetatheorem                          ::=   "Metatheorem" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) metaproof ;\n\nmetaconjecture                       ::=   "Metaconjecture" "(" label ( "," label )* ")" <END_OF_LINE> ( metaIndicativeConditional | unqualifiedMetastatement ) ;\n\ntypeDeclaration                      ::=   "Type" type ( ":" type )? <END_OF_LINE> ;\n \nvariableDeclaration                  ::=   "Variable" variable ":" type <END_OF_LINE> ;\n \ncomparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;\n \ncombinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;\n \nconstructorDeclaration               ::=   "Constructor" term ( ":" type )? <END_OF_LINE> ;\n \ndisjointTypeDeclaration              ::=   "DisjointType" disjointType ":" type ( "," type )+ <END_OF_LINE> ;\n                                       \nmetavariableDeclaration              ::=   "Metavariable" metavariable ":" ( "Statement" | "Context" ) <END_OF_LINE> ;\n \ndependentTypeDeclaration             ::=   "DependentType" dependentType ":" type <END_OF_LINE> ;\n                                       \ntypesDeclaration                     ::=   "Types" type ( ":"  type )? <END_OF_LINE> ;\n\nvariablesDeclaration                 ::=   "Variables" variable ( "," variable )+ ":" type <END_OF_LINE> ;\n \ncomparatorsDeclaration               ::=   "Comparators" statement ( "," statement )+ <END_OF_LINE> ;\n \ncombinatorsDeclaration               ::=   "Combinators" expression ( "," expression )+ ( ":" type )? <END_OF_LINE> ;\n \nconstructorsDeclaration              ::=   "Constructors" term ( "," term )+ ( ":" type )? <END_OF_LINE> ;\n \ndisjointTypesDeclaration             ::=   "DisjointTypes" disjointType ( "," disjointType )+ ":" type ( "," type )+ <END_OF_LINE> ;\n \nmetavariablesDeclaration             ::=   "Metavariables" metavariable ( "," metavariable )+ ":" ( "Statement" | "Context" ) <END_OF_LINE> ;\n \ndependentTypesDeclaration            ::=   "DependentTypes" dependentType ( "," dependentType )+ ":" type <END_OF_LINE> ;\n  \n\n  \npremise                              ::=   "Premise" <END_OF_LINE> unqualifiedMetastatement ;\n\npremises                             ::=   "Premises" <END_OF_LINE> unqualifiedMetastatement unqualifiedMetastatement+ ;\n\nconclusion                           ::=   "Conclusion" <END_OF_LINE> unqualifiedMetastatement ;\n\n\n\nmetaproof                            ::=   "Proof" <END_OF_LINE> \n\n                                           metastatementDefinition*\n\n                                           metaProofDerivation? \n                                          \n                                           qualifiedMetastatement ;\n                                          \n                                          \n\nmetaProofDerivation                  ::=   ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+  \n\n                                           "Therefore" <END_OF_LINE> ;                                           \n\nmetaIndicativeConditional            ::=   "Suppose" <END_OF_LINE> unqualifiedMetastatement+ \n\n                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;\n\nmetaSublemma                         ::=   "Suppose" <END_OF_LINE> \n\n                                           ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ \n\n                                           ( \n                                          \n                                             "Then" <END_OF_LINE> \n                                            \n                                             ( metaSublemma | qualifiedMetastatement | qualifiedStatement )+ \n                                          \n                                           )? \n                                          \n                                           "Hence" <END_OF_LINE> qualifiedMetastatement ;\n\n\n\nproof                                ::=   "Proof" <END_OF_LINE> \n\n                                           statementDefinition*\n\n                                           proofDerivation? \n                                          \n                                           qualifiedStatement ;\n                                                                                         \n                                                                                         \n                                                                                         \nproofDerivation                      ::=   ( sublemma | qualifiedStatement )+ \n\n                                           "Therefore" <END_OF_LINE> ;\n\nindicativeConditional                ::=   "Suppose" <END_OF_LINE> unqualifiedStatement+ \n\n                                           "Hence" <END_OF_LINE> qualifiedStatement ;\n\nsublemma                             ::=   "Suppose" <END_OF_LINE> \n\n                                           ( subLemma | qualifiedStatement )+ \n\n                                           ( \n                                          \n                                             "Then" <END_OF_LINE> \n                                            \n                                             ( subLemma | qualifiedStatement )+ \n                                          \n                                           )? \n                                          \n                                           "Hence" <END_OF_LINE> qualifiedStatement ;\n\n\n\nmetastatementDefinition              ::=   "Let" unqualifiedMetastatement ;                                           \n                                          \nstatementDefinition                  ::=   "Let" unqualifiedStatement ;                                           \n\n\n\nunqualifiedMetastatement!            ::=   metastatement <END_OF_LINE> \n\n                                       |   nonsense... <END_OF_LINE> \n                                       \n                                       ;\n\nqualifiedMetastatement!              ::=   metastatement qualification? <END_OF_LINE> \n\n                                       |   nonsense... qualification? <END_OF_LINE> \n                                        \n                                       ;\n\nunqualifiedStatement!                ::=   statement <END_OF_LINE>\n\n                                       |   nonsense... <END_OF_LINE> \n                                       \n                                       ;\n\nqualifiedStatement!                  ::=   statement qualification? <END_OF_LINE> \n\n                                       |   nonsense... qualification? <END_OF_LINE> \n                                       \n                                       ;\n\n\n\nnonsense                             ::=   ( "by" | "from" | [name] | [custom] | [special] | [reserved] | [unassigned] )+ ;\n\n\n\nargument                             ::=   type | expression ;\n\n\n\nqualification                        ::=   ( "by" | "from" ) reference ;\n\n\n\ndependentType                        ::=   [name]<NO_WHITESPACE>"(" term ")" ;\n\n\n\nmetavariable                         ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\nreference                            ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\ncontext                              ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\nlabel                                ::=   [name] ( <NO_WHITESPACE>"(" term ")" )? ;\n\n\n\ndisjointType                         ::=   [name] ;\n\nvariable                             ::=   . ; \n\ntype                 ::= "Number"\n\n                       | "RealNumber"\n\n                       | "RationalNumber"\n\n                       | "Integer"\n\n                       | "NaturalNumber"\n\n                       | "NonZeroInteger"\n\n                       | _\n\n                       ;\n\nterm!                ::= arithmeticTerm\n\n                       | _\n\n                       ;\n\nexpression!          ::= arithmeticExpression\n\n                       | _\n\n                       ;\n\nstatement!           ::= "(" statement ")"\n\n                       | "\xac" <NO_WHITESPACE> statement\n\n                       | statement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) statement\n\n                       | arithmeticAtatement\n\n                       | typeAssertion\n\n                       | equality\n\n                       ;\n\ntypeAssertion        ::= expression ":" type ;\n\nequality             ::= expression "=" expression ;\n\nmetastatement!       ::= [name] "=" naturalNumber\n\n                       | "(" metastatement ")"\n\n                       | "\xac" <NO_WHITESPACE> metastatement\n\n                       | metastatement ( "/\\\\" | "\\\\/" | "iff" | "=>" | "<=>" ) metastatement\n\n                       | contextDefinition\n\n                       | proofAssertion\n\n                       | metavariable\n\n                       | subproof\n\n                       ;\n\ncontextDefinition    ::= context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;\n\nproofAssertion       ::= context "|-" judgement ;\n\njudgement            ::= reference "::" metastatement ;\n\nsubproof             ::= "[" metastatement "]" "..." metastatement ;\n\narithmeticTerm       ::= rationalNumber\n\n                       | integer\n\n                       | naturalNumber\n\n                       | variable\n\n                       ;\n\narithmeticExpression ::= "(" argument ")"\n\n                       | argument ( "+" | "-" | "\xd7" | "\xf7" ) argument\n\n                       | arithmeticTerm\n\n                       ;\n\narithmeticAtatement  ::= argument ( "<" | "<=" | ">=" | ">" ) argument ;\n\nnaturalNumber        ::= "successor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "predecessor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "zero"\n\n                       | variable\n\n                       ;\n\ninteger              ::= "successor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "predecessor" <NO_WHITESPACE> "(" argument ")"\n\n                       | "-" <NO_WHITESPACE> argument\n\n                       | naturalNumber\n\n                       | variable\n\n                       ;\n\nrationalNumber       ::= argument <NO_WHITESPACE> "/" <NO_WHITESPACE> argument\n\n                       | variable\n\n                       ;\n');
_defineProperty(View, "initialContent", "n/n");
_defineProperty(View, "initialStartRuleName", "term");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IHJld3JpdGVOb2RlcyBmcm9tIFwiLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgcnVsZXNVdGlsaXRpZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJld3JpdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3Jld3JpdGVOb2Rlc1wiXG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNpY0xleGVyID0gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgICAgICAgICBiYXNpY1BhcnNlciA9ICBiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICAgIGlmIChyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYnJpZGdlZCA9IHRydWU7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJld3JpdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxTdGFydFJ1bGVOYW1lLCBpbml0aWFsTGV4aWNhbFBhdHRlcm4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGAgXG5kb2N1bWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgKCB0b3BMZXZlbEluc3RydWN0aW9uIHwgdmVydGljYWxTcGFjZSB8IGVycm9yICkrIDtcblxuXG5cbnRvcExldmVsSW5zdHJ1Y3Rpb24gICAgICAgICAgICAgICAgICA6Oj0gICBydWxlIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgYXhpb20gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBsZW1tYSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHRoZW9yZW0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb25qZWN0dXJlIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YWxlbW1hIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXRoZW9yZW0gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBtZXRhY29uamVjdHVyZVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdHlwZURlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZhcmlhYmxlRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29tcGFyYXRvckRlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbWJpbmF0b3JEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb25zdHJ1Y3RvckRlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGRpc2pvaW50VHlwZURlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZURlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGRlcGVuZGVudFR5cGVEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0eXBlc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHZhcmlhYmxlc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGNvbXBhcmF0b3JzRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29tYmluYXRvcnNEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb25zdHJ1Y3RvcnNEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBkaXNqb2ludFR5cGVzRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbWV0YXZhcmlhYmxlc0RlY2xhcmF0aW9uIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGRlcGVuZGVudFR5cGVzRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cblxuXG52ZXJ0aWNhbFNwYWNlICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgPEVORF9PRl9MSU5FPisgO1xuXG5cblxuZXJyb3IgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIC4gO1xuXG5cblxucnVsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUnVsZVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIHByZW1pc2UgfCBwcmVtaXNlcyApPyBjb25jbHVzaW9uIG1ldGFwcm9vZj8gO1xuXG5heGlvbSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJBeGlvbVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIGluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkU3RhdGVtZW50ICkgOyBcblxubGVtbWEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTGVtbWFcIiBcIihcIiBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIFwiKVwiPyA8RU5EX09GX0xJTkU+ICggaW5kaWNhdGl2ZUNvbmRpdGlvbmFsIHwgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgKSBwcm9vZiA7XG5cbnRoZW9yZW0gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlRoZW9yZW1cIiBcIihcIiBsYWJlbCAoIFwiLFwiIGxhYmVsICkqIFwiKVwiIDxFTkRfT0ZfTElORT4gKCBpbmRpY2F0aXZlQ29uZGl0aW9uYWwgfCB1bnF1YWxpZmllZFN0YXRlbWVudCApIHByb29mIDtcblxuY29uamVjdHVyZSAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiQ29uamVjdHVyZVwiIFwiKFwiIGxhYmVsICggXCIsXCIgbGFiZWwgKSogXCIpXCIgPEVORF9PRl9MSU5FPiAoIGluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkU3RhdGVtZW50ICkgcHJvb2Y/IDtcblxubWV0YWxlbW1hICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTWV0YWxlbW1hXCIgXCIoXCIgbGFiZWwgKCBcIixcIiBsYWJlbCApKiBcIilcIiA8RU5EX09GX0xJTkU+ICggbWV0YUluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCApIG1ldGFwcm9vZiA7XG5cbm1ldGF0aGVvcmVtICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIk1ldGF0aGVvcmVtXCIgXCIoXCIgbGFiZWwgKCBcIixcIiBsYWJlbCApKiBcIilcIiA8RU5EX09GX0xJTkU+ICggbWV0YUluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCApIG1ldGFwcm9vZiA7XG5cbm1ldGFjb25qZWN0dXJlICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIk1ldGFjb25qZWN0dXJlXCIgXCIoXCIgbGFiZWwgKCBcIixcIiBsYWJlbCApKiBcIilcIiA8RU5EX09GX0xJTkU+ICggbWV0YUluZGljYXRpdmVDb25kaXRpb25hbCB8IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCApIDtcblxudHlwZURlY2xhcmF0aW9uICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVHlwZVwiIHR5cGUgKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuIFxudmFyaWFibGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVmFyaWFibGVcIiB2YXJpYWJsZSBcIjpcIiB0eXBlIDxFTkRfT0ZfTElORT4gO1xuIFxuY29tcGFyYXRvckRlY2xhcmF0aW9uICAgICAgICAgICAgICAgIDo6PSAgIFwiQ29tcGFyYXRvclwiIHN0YXRlbWVudCA8RU5EX09GX0xJTkU+IDtcbiBcbmNvbWJpbmF0b3JEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbWJpbmF0b3JcIiBleHByZXNzaW9uICggXCI6XCIgdHlwZSApPyA8RU5EX09GX0xJTkU+IDtcbiBcbmNvbnN0cnVjdG9yRGVjbGFyYXRpb24gICAgICAgICAgICAgICA6Oj0gICBcIkNvbnN0cnVjdG9yXCIgdGVybSAoIFwiOlwiIHR5cGUgKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5kaXNqb2ludFR5cGVEZWNsYXJhdGlvbiAgICAgICAgICAgICAgOjo9ICAgXCJEaXNqb2ludFR5cGVcIiBkaXNqb2ludFR5cGUgXCI6XCIgdHlwZSAoIFwiLFwiIHR5cGUgKSsgPEVORF9PRl9MSU5FPiA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbm1ldGF2YXJpYWJsZURlY2xhcmF0aW9uICAgICAgICAgICAgICA6Oj0gICBcIk1ldGF2YXJpYWJsZVwiIG1ldGF2YXJpYWJsZSBcIjpcIiAoIFwiU3RhdGVtZW50XCIgfCBcIkNvbnRleHRcIiApIDxFTkRfT0ZfTElORT4gO1xuIFxuZGVwZW5kZW50VHlwZURlY2xhcmF0aW9uICAgICAgICAgICAgIDo6PSAgIFwiRGVwZW5kZW50VHlwZVwiIGRlcGVuZGVudFR5cGUgXCI6XCIgdHlwZSA8RU5EX09GX0xJTkU+IDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxudHlwZXNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiVHlwZXNcIiB0eXBlICggXCI6XCIgIHR5cGUgKT8gPEVORF9PRl9MSU5FPiA7XG5cbnZhcmlhYmxlc0RlY2xhcmF0aW9uICAgICAgICAgICAgICAgICA6Oj0gICBcIlZhcmlhYmxlc1wiIHZhcmlhYmxlICggXCIsXCIgdmFyaWFibGUgKSsgXCI6XCIgdHlwZSA8RU5EX09GX0xJTkU+IDtcbiBcbmNvbXBhcmF0b3JzRGVjbGFyYXRpb24gICAgICAgICAgICAgICA6Oj0gICBcIkNvbXBhcmF0b3JzXCIgc3RhdGVtZW50ICggXCIsXCIgc3RhdGVtZW50ICkrIDxFTkRfT0ZfTElORT4gO1xuIFxuY29tYmluYXRvcnNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgIDo6PSAgIFwiQ29tYmluYXRvcnNcIiBleHByZXNzaW9uICggXCIsXCIgZXhwcmVzc2lvbiApKyAoIFwiOlwiIHR5cGUgKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5jb25zdHJ1Y3RvcnNEZWNsYXJhdGlvbiAgICAgICAgICAgICAgOjo9ICAgXCJDb25zdHJ1Y3RvcnNcIiB0ZXJtICggXCIsXCIgdGVybSApKyAoIFwiOlwiIHR5cGUgKT8gPEVORF9PRl9MSU5FPiA7XG4gXG5kaXNqb2ludFR5cGVzRGVjbGFyYXRpb24gICAgICAgICAgICAgOjo9ICAgXCJEaXNqb2ludFR5cGVzXCIgZGlzam9pbnRUeXBlICggXCIsXCIgZGlzam9pbnRUeXBlICkrIFwiOlwiIHR5cGUgKCBcIixcIiB0eXBlICkrIDxFTkRfT0ZfTElORT4gO1xuIFxubWV0YXZhcmlhYmxlc0RlY2xhcmF0aW9uICAgICAgICAgICAgIDo6PSAgIFwiTWV0YXZhcmlhYmxlc1wiIG1ldGF2YXJpYWJsZSAoIFwiLFwiIG1ldGF2YXJpYWJsZSApKyBcIjpcIiAoIFwiU3RhdGVtZW50XCIgfCBcIkNvbnRleHRcIiApIDxFTkRfT0ZfTElORT4gO1xuIFxuZGVwZW5kZW50VHlwZXNEZWNsYXJhdGlvbiAgICAgICAgICAgIDo6PSAgIFwiRGVwZW5kZW50VHlwZXNcIiBkZXBlbmRlbnRUeXBlICggXCIsXCIgZGVwZW5kZW50VHlwZSApKyBcIjpcIiB0eXBlIDxFTkRfT0ZfTElORT4gO1xuICBcblxuICBcbnByZW1pc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByZW1pc2VcIiA8RU5EX09GX0xJTkU+IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCA7XG5cbnByZW1pc2VzICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlByZW1pc2VzXCIgPEVORF9PRl9MSU5FPiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgdW5xdWFsaWZpZWRNZXRhc3RhdGVtZW50KyA7XG5cbmNvbmNsdXNpb24gICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIkNvbmNsdXNpb25cIiA8RU5EX09GX0xJTkU+IHVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCA7XG5cblxuXG5tZXRhcHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJQcm9vZlwiIDxFTkRfT0ZfTElORT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRhc3RhdGVtZW50RGVmaW5pdGlvbipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGFQcm9vZkRlcml2YXRpb24/IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcXVhbGlmaWVkTWV0YXN0YXRlbWVudCA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5tZXRhUHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgOjo9ICAgKCBtZXRhU3VibGVtbWEgfCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50IHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrICBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiVGhlcmVmb3JlXCIgPEVORF9PRl9MSU5FPiA7ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuXG5tZXRhSW5kaWNhdGl2ZUNvbmRpdGlvbmFsICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJIZW5jZVwiIDxFTkRfT0ZfTElORT4gcXVhbGlmaWVkTWV0YXN0YXRlbWVudCA7XG5cbm1ldGFTdWJsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIlN1cHBvc2VcIiA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBtZXRhU3VibGVtbWEgfCBxdWFsaWZpZWRNZXRhc3RhdGVtZW50IHwgcXVhbGlmaWVkU3RhdGVtZW50ICkrIFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJUaGVuXCIgPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIG1ldGFTdWJsZW1tYSB8IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgfCBxdWFsaWZpZWRTdGF0ZW1lbnQgKSsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVuY2VcIiA8RU5EX09GX0xJTkU+IHF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgO1xuXG5cblxucHJvb2YgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiUHJvb2ZcIiA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGVtZW50RGVmaW5pdGlvbipcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb29mRGVyaXZhdGlvbj8gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBxdWFsaWZpZWRTdGF0ZW1lbnQgO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxucHJvb2ZEZXJpdmF0aW9uICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggc3VibGVtbWEgfCBxdWFsaWZpZWRTdGF0ZW1lbnQgKSsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZXJlZm9yZVwiIDxFTkRfT0ZfTElORT4gO1xuXG5pbmRpY2F0aXZlQ29uZGl0aW9uYWwgICAgICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiB1bnF1YWxpZmllZFN0YXRlbWVudCsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkhlbmNlXCIgPEVORF9PRl9MSU5FPiBxdWFsaWZpZWRTdGF0ZW1lbnQgO1xuXG5zdWJsZW1tYSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgXCJTdXBwb3NlXCIgPEVORF9PRl9MSU5FPiBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggc3ViTGVtbWEgfCBxdWFsaWZpZWRTdGF0ZW1lbnQgKSsgXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIlRoZW5cIiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICggc3ViTGVtbWEgfCBxdWFsaWZpZWRTdGF0ZW1lbnQgKSsgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApPyBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiSGVuY2VcIiA8RU5EX09GX0xJTkU+IHF1YWxpZmllZFN0YXRlbWVudCA7XG5cblxuXG5tZXRhc3RhdGVtZW50RGVmaW5pdGlvbiAgICAgICAgICAgICAgOjo9ICAgXCJMZXRcIiB1bnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuc3RhdGVtZW50RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTGV0XCIgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgOyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcblxuXG5cbnVucXVhbGlmaWVkTWV0YXN0YXRlbWVudCEgICAgICAgICAgICA6Oj0gICBtZXRhc3RhdGVtZW50IDxFTkRfT0ZfTElORT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBub25zZW5zZS4uLiA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnF1YWxpZmllZE1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgICA6Oj0gICBtZXRhc3RhdGVtZW50IHF1YWxpZmljYXRpb24/IDxFTkRfT0ZfTElORT4gXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBub25zZW5zZS4uLiBxdWFsaWZpY2F0aW9uPyA8RU5EX09GX0xJTkU+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG51bnF1YWxpZmllZFN0YXRlbWVudCEgICAgICAgICAgICAgICAgOjo9ICAgc3RhdGVtZW50IDxFTkRfT0ZfTElORT5cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG5vbnNlbnNlLi4uIDxFTkRfT0ZfTElORT4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxucXVhbGlmaWVkU3RhdGVtZW50ISAgICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCBxdWFsaWZpY2F0aW9uPyA8RU5EX09GX0xJTkU+IFxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgbm9uc2Vuc2UuLi4gcXVhbGlmaWNhdGlvbj8gPEVORF9PRl9MSU5FPiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxubm9uc2Vuc2UgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgICggXCJieVwiIHwgXCJmcm9tXCIgfCBbbmFtZV0gfCBbY3VzdG9tXSB8IFtzcGVjaWFsXSB8IFtyZXNlcnZlZF0gfCBbdW5hc3NpZ25lZF0gKSsgO1xuXG5cblxuYXJndW1lbnQgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHR5cGUgfCBleHByZXNzaW9uIDtcblxuXG5cbnF1YWxpZmljYXRpb24gICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICAoIFwiYnlcIiB8IFwiZnJvbVwiICkgcmVmZXJlbmNlIDtcblxuXG5cbmRlcGVuZGVudFR5cGUgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbbmFtZV08Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiIDtcblxuXG5cbm1ldGF2YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbbmFtZV0gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiICk/IDtcblxucmVmZXJlbmNlICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFtuYW1lXSAoIDxOT19XSElURVNQQUNFPlwiKFwiIHRlcm0gXCIpXCIgKT8gO1xuXG5jb250ZXh0ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgW25hbWVdICggPE5PX1dISVRFU1BBQ0U+XCIoXCIgdGVybSBcIilcIiApPyA7XG5cbmxhYmVsICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbbmFtZV0gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiB0ZXJtIFwiKVwiICk/IDtcblxuXG5cbmRpc2pvaW50VHlwZSAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBbbmFtZV0gO1xuXG52YXJpYWJsZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgLiA7IFxuXG50eXBlICAgICAgICAgICAgICAgICA6Oj0gXCJOdW1iZXJcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJSZWFsTnVtYmVyXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwiUmF0aW9uYWxOdW1iZXJcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJJbnRlZ2VyXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IFwiTmF0dXJhbE51bWJlclwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIk5vblplcm9JbnRlZ2VyXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IF9cblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnRlcm0hICAgICAgICAgICAgICAgIDo6PSBhcml0aG1ldGljVGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgX1xuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxuZXhwcmVzc2lvbiEgICAgICAgICAgOjo9IGFyaXRobWV0aWNFeHByZXNzaW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBfXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5zdGF0ZW1lbnQhICAgICAgICAgICA6Oj0gXCIoXCIgc3RhdGVtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIsKsXCIgPE5PX1dISVRFU1BBQ0U+IHN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgc3RhdGVtZW50ICggXCIvXFxcXFxcXFxcIiB8IFwiXFxcXFxcXFwvXCIgfCBcImlmZlwiIHwgXCI9PlwiIHwgXCI8PT5cIiApIHN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgYXJpdGhtZXRpY0F0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgdHlwZUFzc2VydGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgZXF1YWxpdHlcblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbnR5cGVBc3NlcnRpb24gICAgICAgIDo6PSBleHByZXNzaW9uIFwiOlwiIHR5cGUgO1xuXG5lcXVhbGl0eSAgICAgICAgICAgICA6Oj0gZXhwcmVzc2lvbiBcIj1cIiBleHByZXNzaW9uIDtcblxubWV0YXN0YXRlbWVudCEgICAgICAgOjo9IFtuYW1lXSBcIj1cIiBuYXR1cmFsTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIihcIiBtZXRhc3RhdGVtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcIsKsXCIgPE5PX1dISVRFU1BBQ0U+IG1ldGFzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IG1ldGFzdGF0ZW1lbnQgKCBcIi9cXFxcXFxcXFwiIHwgXCJcXFxcXFxcXC9cIiB8IFwiaWZmXCIgfCBcIj0+XCIgfCBcIjw9PlwiICkgbWV0YXN0YXRlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgY29udGV4dERlZmluaXRpb25cblxuICAgICAgICAgICAgICAgICAgICAgICB8IHByb29mQXNzZXJ0aW9uXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBtZXRhdmFyaWFibGVcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHN1YnByb29mXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5jb250ZXh0RGVmaW5pdGlvbiAgICA6Oj0gY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcblxucHJvb2ZBc3NlcnRpb24gICAgICAgOjo9IGNvbnRleHQgXCJ8LVwiIGp1ZGdlbWVudCA7XG5cbmp1ZGdlbWVudCAgICAgICAgICAgIDo6PSByZWZlcmVuY2UgXCI6OlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5zdWJwcm9vZiAgICAgICAgICAgICA6Oj0gXCJbXCIgbWV0YXN0YXRlbWVudCBcIl1cIiBcIi4uLlwiIG1ldGFzdGF0ZW1lbnQgO1xuXG5hcml0aG1ldGljVGVybSAgICAgICA6Oj0gcmF0aW9uYWxOdW1iZXJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IGludGVnZXJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IG5hdHVyYWxOdW1iZXJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5hcml0aG1ldGljRXhwcmVzc2lvbiA6Oj0gXCIoXCIgYXJndW1lbnQgXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICB8IGFyZ3VtZW50ICggXCIrXCIgfCBcIi1cIiB8IFwiw5dcIiB8IFwiw7dcIiApIGFyZ3VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBhcml0aG1ldGljVGVybVxuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxuYXJpdGhtZXRpY0F0YXRlbWVudCAgOjo9IGFyZ3VtZW50ICggXCI8XCIgfCBcIjw9XCIgfCBcIj49XCIgfCBcIj5cIiApIGFyZ3VtZW50IDtcblxubmF0dXJhbE51bWJlciAgICAgICAgOjo9IFwic3VjY2Vzc29yXCIgPE5PX1dISVRFU1BBQ0U+IFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcInByZWRlY2Vzc29yXCIgPE5PX1dISVRFU1BBQ0U+IFwiKFwiIGFyZ3VtZW50IFwiKVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBcInplcm9cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgdmFyaWFibGVcblxuICAgICAgICAgICAgICAgICAgICAgICA7XG5cbmludGVnZXIgICAgICAgICAgICAgIDo6PSBcInN1Y2Nlc3NvclwiIDxOT19XSElURVNQQUNFPiBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCJwcmVkZWNlc3NvclwiIDxOT19XSElURVNQQUNFPiBcIihcIiBhcmd1bWVudCBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgXCItXCIgPE5PX1dISVRFU1BBQ0U+IGFyZ3VtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCBuYXR1cmFsTnVtYmVyXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCB2YXJpYWJsZVxuXG4gICAgICAgICAgICAgICAgICAgICAgIDtcblxucmF0aW9uYWxOdW1iZXIgICAgICAgOjo9IGFyZ3VtZW50IDxOT19XSElURVNQQUNFPiBcIi9cIiA8Tk9fV0hJVEVTUEFDRT4gYXJndW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICB8IHZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcIm4vblwiO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwidGVybVwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICBjb25zdCB1bmFzc2lnbmVkID0gXCJeLiokXCIsICAvLy9cbiAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBiYXNpY0xleGVyO1xufVxuXG5mdW5jdGlvbiBiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gYmFzaWNQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiYmFzaWNMZXhlciIsImJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4iLCJiYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJCYXNpY1BhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OytCQW1oQmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQXJoQm9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNILGNBQWM7NEJBQ2IsZUFBZTswQkFDeUIsYUFBYTs4REFFM0QsYUFBYTsrREFDWixjQUFjOzZEQUNiLGdCQUFnQjt3REFDaEIsZ0JBQWdCO2lFQUNmLGlCQUFpQjswREFDZixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3QjtnRUFDeEIsd0JBQXdCO2tFQUN2Qix5QkFBeUI7MkVBQ3ZCLDJCQUEyQjtzQkFFakMscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbEQsSUFBUUEsYUFBYSxHQUEyREMsTUFBYyxRQUFBLENBQXRGRCxhQUFhLEVBQUVFLGdCQUFnQixHQUF5Q0QsTUFBYyxRQUFBLENBQXZFQyxnQkFBZ0IsRUFBRUMsa0NBQWtDLEdBQUtGLE1BQWMsUUFBQSxDQUFyREUsa0NBQWtDLEFBQW9CO0FBRS9GLElBQUEsQUFBTUMsSUFBSSxpQkF3ZlAsQUF4Zkg7OzthQUFNQSxJQUFJOzs7O1FBQ1JDLCtDQUFBQSxjQUFZLEVBQUcsU0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDakMsTUFBS0MsTUFBTSxFQUFFLENBQUM7U0FDZixDQUFBLENBQUE7UUFFREMsK0NBQUFBLGVBQWEsRUFBRyxTQUFDSCxLQUFLLEVBQUVDLE9BQU8sRUFBSztZQUNsQyxNQUFLQyxNQUFNLEVBQUUsQ0FBQztTQUNmLENBQUEsQ0FBQTs7Ozs7WUFFREEsR0FBTSxFQUFOQSxRQUFNO21CQUFOQSxTQUFBQSxNQUFNLEdBQUc7Z0JBQ1AsSUFBTUUsR0FBRyxHQUFHLElBQUksQ0FBQ0MsTUFBTSxFQUFFLEVBQ25CQyxPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUUsRUFDM0JDLGFBQWEsR0FBRyxJQUFJLENBQUNDLGdCQUFnQixFQUFFLEVBQ3ZDQyxjQUFjLEdBQUcsSUFBSSxDQUFDQyxpQkFBaUIsRUFBRSxBQUFDO2dCQUVoRCxJQUFJQyxLQUFLLEdBQUdDLElBQUFBLE9BQVksYUFBQSxFQUFDVCxHQUFHLENBQUMsQUFBQztnQkFFOUJRLEtBQUssR0FBR0UsSUFBQUEsdUJBQXNCLFFBQUEsRUFBQ0YsS0FBSyxDQUFDLENBQUM7Z0JBRXRDLElBQU1HLFNBQVMsR0FBRyxJQUFJLEVBQ2hCQyxXQUFXLEdBQUd0QixhQUFhLENBQUNrQixLQUFLLEVBQUVHLFNBQVMsQ0FBQyxFQUM3Q0UsV0FBVyxHQUFHRCxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUVyQyxJQUFJLENBQUNFLGNBQWMsQ0FBQ0QsV0FBVyxDQUFDLENBQUM7Z0JBRWpDLElBQUk7b0JBQ0YsSUFBTUUsVUFBVSxHQUFHQyw0QkFBNEIsQ0FBQ1YsY0FBYyxDQUFDLEVBQ3pEVyxXQUFXLEdBQUlDLG9DQUFvQyxDQUFDVixLQUFLLEVBQUVKLGFBQWEsQ0FBQyxFQUN6RWUsTUFBTSxHQUFHSixVQUFVLENBQUNLLFFBQVEsQ0FBQ2xCLE9BQU8sQ0FBQyxFQUNyQ21CLElBQUksR0FBR0osV0FBVyxDQUFDSyxLQUFLLENBQUNILE1BQU0sQ0FBQyxBQUFDO29CQUV2QyxJQUFJSSxTQUFTLEdBQUcsSUFBSSxBQUFDO29CQUVyQixJQUFJRixJQUFJLEtBQUssSUFBSSxFQUFFO3dCQUNqQixJQUFNRywyQkFBMkIsR0FBRyxJQUFJLENBQUNDLDZCQUE2QixFQUFFLEFBQUM7d0JBRXpFLElBQUlELDJCQUEyQixFQUFFOzRCQUMvQkUsSUFBQUEsYUFBWSxRQUFBLEVBQUNMLElBQUksQ0FBQyxDQUFDO3lCQUNwQjt3QkFFRCxJQUFNTSxRQUFRLEdBQUcsSUFBSSxBQUFDO3dCQUV0QkosU0FBUyxHQUFHRixJQUFJLENBQUNPLFdBQVcsQ0FBQ1QsTUFBTSxFQUFFUSxRQUFRLENBQUMsQ0FBQztxQkFDaEQ7b0JBRUQsSUFBSSxDQUFDRSxZQUFZLENBQUNOLFNBQVMsQ0FBQyxDQUFDO2lCQUM5QixDQUFDLE9BQU9PLEtBQUssRUFBRTtvQkFDZEMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLEtBQUssQ0FBQyxDQUFDO2lCQUNwQjthQUNGOzs7WUFFREcsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsT0FBUTtrQ0FFTixvQkFBQ0MsV0FBVSxXQUFBLHNCQUNULG9CQUFDQyxTQUFXLFFBQUEsc0JBQ1Ysb0JBQUNDLFdBQU8sUUFBQSxzQkFDTixvQkFBQ0MsV0FBVSxRQUFBLFFBQUMsaUJBRVosQ0FBYSxnQkFDYixvQkFBQ0MsZUFBbUIsUUFBQTt3QkFBQ0MsT0FBTyxFQUFFLElBQUksQ0FBQzVDLFlBQVk7c0JBQUksZ0JBQ25ELG9CQUFDMEMsV0FBVSxRQUFBLFFBQUMsS0FFWixDQUFhLGdCQUNiLG9CQUFDRyxJQUFXLFFBQUE7d0JBQUNELE9BQU8sRUFBRSxJQUFJLENBQUM1QyxZQUFZO3NCQUFJLGdCQUMzQyxvQkFBQzBDLFdBQVUsUUFBQSxRQUFDLGNBRVosQ0FBYSxnQkFDYixvQkFBQ0ksWUFBbUIsUUFBQTt3QkFBQ0MsUUFBUSxFQUFSQSxJQUFRO3NCQUFHLENBQ3hCLENBQ0UsZ0JBQ2Qsb0JBQUNDLFdBQW1CLG9CQUFBLE9BQUcsZ0JBQ3ZCLG9CQUFDQyxXQUFTLFVBQUEsc0JBQ1Isb0JBQUNSLFdBQU8sUUFBQSxzQkFDTixvQkFBQ0MsV0FBVSxRQUFBLFFBQUMsaUJBRVosQ0FBYSxnQkFDYixvQkFBQ1EsY0FBa0IsUUFBQTt3QkFBQ04sT0FBTyxFQUFFLElBQUksQ0FBQzVDLFlBQVk7c0JBQUksZ0JBQ2xELG9CQUFDMEMsV0FBVSxRQUFBLFFBQUMsU0FFWixDQUFhLGdCQUNiLG9CQUFDUyxRQUFlLFFBQUE7d0JBQUNQLE9BQU8sRUFBRSxJQUFJLENBQUM1QyxZQUFZO3NCQUFJLGdCQUMvQyxvQkFBQzBDLFdBQVUsUUFBQSxRQUFDLFlBRVosQ0FBYSxnQkFDYixvQkFBQ1UsVUFBaUIsUUFBQSxPQUFHLGdCQUNyQixvQkFBQ0MsVUFBUyxRQUFBLHNCQUNSLG9CQUFDQyxjQUFvQixRQUFBO3dCQUFDQyxRQUFRLEVBQUUsSUFBSSxDQUFDbkQsYUFBYTt3QkFBRW9ELE9BQU8sRUFBUEEsSUFBTztzQkFBRyxFQUFBLGVBRWhFLENBQVksQ0FDSixDQUNBLENBQ0Q7aUJBRWQsQ0FBRTthQUNKOzs7WUFFREMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsSUFBb0YsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDQyxXQUFXLEVBQTVGQyxVQUFVLEdBQWtFLFlBQWdCLENBQTVGQSxVQUFVLEVBQUVDLGNBQWMsR0FBa0QsWUFBZ0IsQ0FBaEZBLGNBQWMsRUFBRUMsb0JBQW9CLEdBQTRCLFlBQWdCLENBQWhFQSxvQkFBb0IsRUFBRUMscUJBQXFCLEdBQUssWUFBZ0IsQ0FBMUNBLHFCQUFxQixFQUN6RTFELEdBQUcsR0FBR3VELFVBQVUsRUFDaEJyRCxPQUFPLEdBQUdzRCxjQUFjLEVBQ3hCcEQsYUFBYSxHQUFHcUQsb0JBQW9CLEVBQ3BDbkQsY0FBYyxHQUFHb0QscUJBQXFCLEFBQUMsRUFBQyxHQUFHO2dCQUVqRCxJQUFJLENBQUNDLE1BQU0sQ0FBQzNELEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixJQUFJLENBQUM0RCxVQUFVLENBQUMxRCxPQUFPLENBQUMsQ0FBQztnQkFFekIsSUFBSSxDQUFDMkQsZ0JBQWdCLENBQUN6RCxhQUFhLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDMEQsaUJBQWlCLENBQUN4RCxjQUFjLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDWCxZQUFZLEVBQUUsQ0FBQzthQUNyQjs7OztDQW1ZRixrQkF0ZmtCb0UsS0FBTyxRQUFBLEVBc2Z6QjtBQWpZQyxnQkFySElyRSxJQUFJLEVBcUhENkQsWUFBVSxFQUFJLGd3YkFvWHZCLENBQUU7QUFFQSxnQkEzZUk3RCxJQUFJLEVBMmVEOEQsZ0JBQWMsRUFBRyxLQUFLLENBQUM7QUFFOUIsZ0JBN2VJOUQsSUFBSSxFQTZlRCtELHNCQUFvQixFQUFHLE1BQU0sQ0FBQztBQUVyQyxnQkEvZUkvRCxJQUFJLEVBK2VEZ0UsdUJBQXFCLEVBQUcsR0FBRyxDQUFDO0FBRW5DLGdCQWpmSWhFLElBQUksRUFpZkRzRSxTQUFPLEVBQUcsS0FBSyxDQUFDO0FBRXZCLGdCQW5mSXRFLElBQUksRUFtZkR1RSxtQkFBaUIsRUFBRztJQUN6QkMsU0FBUyxFQUFFLE1BQU07Q0FDbEIsQ0FBQztJQUdKLFFBSUUsR0FKYUMsSUFBQUEsY0FBUyxRQUFBLEVBQUN6RSxJQUFJLENBQUM7QUFNOUIsU0FBU3NCLDRCQUE0QixDQUFDVixjQUFjLEVBQUU7SUFDcEQsSUFBTThELFVBQVUsR0FBRyxNQUFNLEVBQ25CQyxNQUFNLEdBQUcvRCxjQUFjLEVBQ3ZCZ0UsT0FBTyxHQUFHO1FBQ1I7WUFDRUQsTUFBTSxFQUFOQSxNQUFNO1NBQ1A7UUFDRDtZQUNFRCxVQUFVLEVBQVZBLFVBQVU7U0FDWDtLQUNGLEVBQ0RyRCxVQUFVLEdBQUd3RCxZQUFVLFdBQUEsQ0FBQ0MsV0FBVyxDQUFDRixPQUFPLENBQUMsQUFBQztJQUVuRCxPQUFPdkQsVUFBVSxDQUFDO0NBQ25CO0FBRUQsU0FBU0csb0NBQW9DLENBQUNWLEtBQUssRUFBRUosYUFBYSxFQUFFO0lBQ2xFLElBQU1xRSxPQUFPLEdBQUdqRixnQkFBZ0IsQ0FBQ2dCLEtBQUssQ0FBQyxFQUNqQ2tFLFNBQVMsR0FBR2pGLGtDQUFrQyxDQUFDZSxLQUFLLEVBQUVKLGFBQWEsQ0FBQyxFQUNwRWEsV0FBVyxHQUFHLElBQUkwRCxhQUFXLFlBQUEsQ0FBQ0QsU0FBUyxFQUFFRCxPQUFPLENBQUMsQUFBQztJQUV4RCxPQUFPeEQsV0FBVyxDQUFDO0NBQ3BCIn0=