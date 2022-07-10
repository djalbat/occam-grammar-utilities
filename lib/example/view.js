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
var _index = require("../index");
var _paragraph = /*#__PURE__*/ _interopRequireDefault(require("./paragraph"));
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = /*#__PURE__*/ _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = /*#__PURE__*/ _interopRequireDefault(require("./textarea/adjustedBNF"));
var _removeOrRenameIntermediateNodes = /*#__PURE__*/ _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _parser = require("../utilities/parser");
var _constants = require("../constants");
var _rules = require("../utilities/rules");
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
var rulesAsString = _index.rulesUtilities.rulesAsString, ruleMapFromRules = _index.rulesUtilities.ruleMapFromRules, startRuleFromRulesAndStartRuleName = _index.rulesUtilities.startRuleFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
    }
    _createClass(View, [
        {
            key: "getParseTree",
            value: function getParseTree(startRule, ruleMap) {
                var parseTree = null;
                var lexicalPattern = this.getLexicalPattern(), unassigned = _constants.UNASSIGNED_ENTRY, custom = lexicalPattern, entries = [
                    {
                        custom: custom
                    },
                    {
                        unassigned: unassigned
                    }
                ], basicLexer = _occamLexers.BasicLexer.fromEntries(entries), basicParser = new _occamParsers.BasicParser(startRule, ruleMap), content = this.getContent(), tokens = basicLexer.tokenise(content), node = basicParser.parse(tokens);
                if (node !== null) {
                    var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();
                    if (removeOrRenameIntermediateNodesCheckboxChecked) {
                        (0, _index.removeOrRenameIntermediateNodes)(node);
                    }
                    var abridged = true;
                    parseTree = node.asParseTree(tokens, abridged);
                }
                return parseTree;
            }
        },
        {
            key: "keyUpHandler",
            value: function keyUpHandler(event, element) {
                this.changeHandler();
            }
        },
        {
            key: "changeHandler",
            value: function changeHandler(event, element) {
                // try {
                var bnf = this.getBNF(), startRuleName = this.getStartRuleName();
                var rules = (0, _parser.rulesFromBNF)(bnf);
                var ruleMap = ruleMapFromRules(rules);
                var startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);
                startRule = (0, _index.eliminateLeftRecursion)(startRule, ruleMap);
                rules = (0, _rules.rulesFromStartRuleAndRuleMap)(startRule, ruleMap);
                var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                this.setAdjustedBNF(adjustedBNF);
                var parseTree = this.getParseTree(startRule, ruleMap);
                this.setParseTree(parseTree);
            // } catch (error) {
            //   console.log(error);
            // }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical pattern"), /*#__PURE__*/ React.createElement(_lexicalPattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
                        readOnly: true
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_removeOrRenameIntermediateNodes.default, {
                        onChange: changeHandler,
                        checked: true
                    }), "Remove or rename intermediate nodes"))))
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
_defineProperty(View, "initialBNF", '\n  \n    document                   ::=  ( preamble ( statement | error )* ) | ( statement | error )+ ;\n\n\n\n    preamble                   ::=  ( "\\"use strict\\"" | "\'use strict\'" ) ";" ;\n\n\n\n    statement                  ::=  class\n\n                                 |  function\n\n                                 |  generator\n\n                                 |  "export"? ( ( "var" var ( "," var )* )\n\n                                              | ( "let" let ( "," let )* )\n\n                                              | ( "const" const ( "," const )* )\n\n                                              ) ";"\n\n                                 |  "export" "default" expression ";"\n\n                                 |  "export" "default"? ( class | function | generator )\n\n                                 |  "export" "default" ( anonymousClass | anonymousFunction | anonymousGenerator )\n\n                                 |  "export" ( ( "export" "{" names "}" ( "from" [string-literal] )? )\n\n                                             | ( "export" "const" "{" fields "}" "=" expression )\n\n                                             | ( "export" "{" "default" "}" "from" [string-literal] )\n\n                                             | ( "export" "*" ( "as" name )? "from" [string-literal] )\n\n                                             ) ";"\n\n                                 |  "import" ( [string-literal]\n\n                                             | ( name "from" [string-literal] )\n\n                                             | ( "{" names "}" "from" [string-literal] )\n\n                                             | ( "*" "as" name "from" [string-literal] )\n\n                                             ) ";"\n\n                                 |  label ":" statement\n\n                                 |  "{" statement* "}"\n\n                                 |  "break" ";"\n\n                                 |  "continue" ";"\n\n                                 |  "if" "(" expression ")" statement ( "else" statement )?\n\n                                 |  "switch" "(" expression ")" "{" case* defaultCase? "}"\n\n                                 |  "return" expression? ";"\n\n                                 |  "throw" expression ";"\n\n                                 |  "delete" expression ";"\n\n                                 |  expression... ";"\n\n                                 |  try ( ( catch* finally ) | catch+ )\n\n                                 |  "do" statement "while" "(" expression ")" ";"\n\n                                 |  "for" "(" initialiser ( ";" expression )? ( ";" expression )? ")" statement\n\n                                 |  "for" "(" variable "in" expression ")" statement\n\n                                 |  "for" "await"? "(" variable "of" expression ")" statement\n\n                                 |  "while" "(" expression ")" statement\n\n                                 |  "debugger" ";"?\n\n                                 ;\n\n\n\n    class                      ::=  "class" name classBody ;\n\n    function                   ::=  "async"? "function" name functionBody ;\n\n    generator                  ::=  "async"? "function" <NO_WHITESPACE>"*" name functionBody ;\n\n    anonymousClass             ::=  "class" classBody ;\n\n    anonymousFunction          ::=  "async"? "function" functionBody ;\n\n    anonymousGenerator         ::=  "async"? "function" <NO_WHITESPACE>"*" functionBody ;\n\n    constructor                ::=  "constructor" functionBody ;\n\n    method                     ::=  "static"? name functionBody ;\n\n    field                      ::=  "static"? name "=" expression ";" ;\n\n\n\n    classBody                  ::=  ( "extends" name )? "{" ( constructor | method | field )* "}" ;\n\n    functionBody               ::=  "(" arguments? ")" "{" statement* "}" ;\n\n\n\n    case                       ::=  "case" expression ":" statement ( "break" ";" )? ;\n\n    defaultCase                ::=  "default" ":" statement ( "break" ";" )? ;\n\n    try                        ::=  "try" "{" statement+ "}" ;\n\n    catch                      ::=  "catch" "(" [identifier] ")" "{" statement+ "}" ;\n\n    finally                    ::=  "finally" "{" statement+ "}" ;\n\n    initialiser                ::=  expression | "var" var ( "," var )* | "let" let ( "," let )* ;\n\n\n\n    var                        ::=  variable ( "=" expression )? | destructure "=" expression ;\n\n    let                        ::=  variable ( "=" expression )? | destructure "=" expression;\n\n    const                      ::=  ( variable | destructure ) "=" expression ;\n\n    destructure                ::=  "[" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "]"\n\n                                 |  "{" variable ( "=" expression )? ( "," variable ( "=" expression )? )* "}"\n\n                                 ;\n\n\n\n    expression                 ::=  jsx\n\n                                 |  json\n\n                                 |  arrowFunction\n\n                                 |  templateLiteral\n\n                                 |  anonymousFunction\n\n                                 |  "(" expression ")"\n\n                                 |  "{" ( property ( "," property )* )? "}"\n\n                                 |  "[" ( expression ( "," expression )* ","? )? "]"\n\n                                 |  "typeof" ( expression | ( "(" expression ")") )\n\n                                 |  "void" ( expression | ( "(" expression ")") )\n\n                                 |  "new" name<NO_WHITESPACE>"(" arguments? ")"\n\n                                 |  [operator]<NO_WHITESPACE>expression\n\n                                 |  expression<NO_WHITESPACE>( ( "."<NO_WHITESPACE>name )\n\n                                                             | ( "[" expressions "]" )\n\n                                                             | ( "(" expressions? ")" )\n\n                                                             | templateLiteral\n\n                                                             | [operator]\n\n                                                             )\n\n                                 |  expression ( ( [operator] expression )\n\n                                               | ( "?" expression ":" expression )\n\n                                               | ( "instanceof" expression )\n\n                                               | ( "in" expression )\n\n                                               )\n\n                                 |  [number]\n\n                                 |  variable\n\n                                 |  primitive\n\n                                 |  importMeta\n\n                                 |  [string-literal]\n\n                                 |  "super" | "this" | "true" | "false" | "null" | "undefined"\n\n                                 ;\n\n\n\n    jsx                        ::=  jsxCompleteTag | jsxStartTag ( jsx | ( "{" expression? "}" ) | string )* jsxEndTag ;\n\n    jsxCompleteTag             ::=  "<"<NO_WHITESPACE>name jsxAttribute* "/>" ;\n\n    jsxStartTag                ::=  "<"<NO_WHITESPACE>name jsxAttribute* ">" ;\n\n    jsxEndTag                  ::=  "</"<NO_WHITESPACE>name ">" ;\n\n    jsxAttribute               ::=  name ( <NO_WHITESPACE>"=" ( ( <NO_WHITESPACE>[string-literal] ) | ( <NO_WHITESPACE>"{" expression "}" ) ) )? ;\n\n\n\n    json                       ::=  jsonArray | jsonObject ;\n\n    jsonArray                  ::=  "[" ( jsonElement ( "," jsonElement )* )? "]" ;\n\n    jsonObject                 ::=  "{" ( [string-literal] ":" jsonElement ( "," [string-literal] ":" jsonElement )* )? "}" ;\n\n    jsonElement                ::=  json | [string-literal] | [number] | "true" | "false" | "null" ;\n\n\n\n    arrowFunction              ::=  simpleArrowFunction | complexArrowFunction ;\n\n    arrowFunctionBody          ::=  expression | ( "{" statement* "}" ) ;\n\n    simpleArrowFunction        ::=  argument "=>" arrowFunctionBody ;\n\n    complexArrowFunction       ::=  "(" arguments? ")" "=>" arrowFunctionBody ;\n\n\n\n    templateLiteral            ::=  "`" ( ( "${" expression? "}" ) | string )* "`" ;\n\n\n\n    string                     ::=  ( [number] | [special] | [operator]| [keyword] | [identifier] | [string-literal]| [broken-string-literal] | [unassigned] )+ ;\n\n    property                   ::=  ( ( ( name | [string-literal] ) ":" expression ) | variable ) ;\n\n    importMeta                 ::=  "import"<NO_WHITESPACE>"."<NO_WHITESPACE>"meta" ;\n\n\n\n    expressions                ::=  expression ( "," expression )* ;\n\n    arguments                  ::=  spreadArgument | ( argument ( "," argument )* ( "," spreadArgument )? ) ;\n\n    fields                     ::=  name ( ":" name )? ( "," name ( ":" name )? )* ;\n\n    names                      ::=  name ( "as" name )? ( "," name ( "as" name )? )* ;\n\n\n\n    spreadArgument             ::=  "..."<NO_WHITESPACE>[identifier] ;\n\n    argument                   ::=  expression | [identifier] ( "=" expression )? ;\n\n    variable                   ::=  [identifier] ;\n\n    label                      ::=  [identifier] ;\n\n    name                       ::=  [identifier] ;\n\n\n\n    error                      ::=  . ;\n\n\n              \n');
_defineProperty(View, "initialContent", "chfegegh");
_defineProperty(View, "initialStartRuleName", "S");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuaW1wb3J0IHsgVU5BU1NJR05FRF9FTlRSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9IFVOQVNTSUdORURfRU5UUlksXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxTdGFydFJ1bGVOYW1lLCBpbml0aWFsTGV4aWNhbFBhdHRlcm4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGBcbiAgXG4gICAgZG9jdW1lbnQgICAgICAgICAgICAgICAgICAgOjo9ICAoIHByZWFtYmxlICggc3RhdGVtZW50IHwgZXJyb3IgKSogKSB8ICggc3RhdGVtZW50IHwgZXJyb3IgKSsgO1xuXG5cblxuICAgIHByZWFtYmxlICAgICAgICAgICAgICAgICAgIDo6PSAgKCBcIlxcXFxcInVzZSBzdHJpY3RcXFxcXCJcIiB8IFwiJ3VzZSBzdHJpY3QnXCIgKSBcIjtcIiA7XG5cblxuXG4gICAgc3RhdGVtZW50ICAgICAgICAgICAgICAgICAgOjo9ICBjbGFzc1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBmdW5jdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBnZW5lcmF0b3JcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIj8gKCAoIFwidmFyXCIgdmFyICggXCIsXCIgdmFyICkqIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImxldFwiIGxldCAoIFwiLFwiIGxldCApKiApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJjb25zdFwiIGNvbnN0ICggXCIsXCIgY29uc3QgKSogKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcIjtcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImV4cG9ydFwiIFwiZGVmYXVsdFwiIGV4cHJlc3Npb24gXCI7XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiBcImRlZmF1bHRcIj8gKCBjbGFzcyB8IGZ1bmN0aW9uIHwgZ2VuZXJhdG9yIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJleHBvcnRcIiBcImRlZmF1bHRcIiAoIGFub255bW91c0NsYXNzIHwgYW5vbnltb3VzRnVuY3Rpb24gfCBhbm9ueW1vdXNHZW5lcmF0b3IgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImV4cG9ydFwiICggKCBcImV4cG9ydFwiIFwie1wiIG5hbWVzIFwifVwiICggXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApPyApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImV4cG9ydFwiIFwiY29uc3RcIiBcIntcIiBmaWVsZHMgXCJ9XCIgXCI9XCIgZXhwcmVzc2lvbiApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImV4cG9ydFwiIFwie1wiIFwiZGVmYXVsdFwiIFwifVwiIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJleHBvcnRcIiBcIipcIiAoIFwiYXNcIiBuYW1lICk/IFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIFwiO1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiaW1wb3J0XCIgKCBbc3RyaW5nLWxpdGVyYWxdXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBuYW1lIFwiZnJvbVwiIFtzdHJpbmctbGl0ZXJhbF0gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJ7XCIgbmFtZXMgXCJ9XCIgXCJmcm9tXCIgW3N0cmluZy1saXRlcmFsXSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIipcIiBcImFzXCIgbmFtZSBcImZyb21cIiBbc3RyaW5nLWxpdGVyYWxdIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSBcIjtcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBsYWJlbCBcIjpcIiBzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ7XCIgc3RhdGVtZW50KiBcIn1cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImJyZWFrXCIgXCI7XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJjb250aW51ZVwiIFwiO1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiaWZcIiBcIihcIiBleHByZXNzaW9uIFwiKVwiIHN0YXRlbWVudCAoIFwiZWxzZVwiIHN0YXRlbWVudCApP1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcInN3aXRjaFwiIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgXCJ7XCIgY2FzZSogZGVmYXVsdENhc2U/IFwifVwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwicmV0dXJuXCIgZXhwcmVzc2lvbj8gXCI7XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ0aHJvd1wiIGV4cHJlc3Npb24gXCI7XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkZWxldGVcIiBleHByZXNzaW9uIFwiO1wiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGV4cHJlc3Npb24uLi4gXCI7XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdHJ5ICggKCBjYXRjaCogZmluYWxseSApIHwgY2F0Y2grIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJkb1wiIHN0YXRlbWVudCBcIndoaWxlXCIgXCIoXCIgZXhwcmVzc2lvbiBcIilcIiBcIjtcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcImZvclwiIFwiKFwiIGluaXRpYWxpc2VyICggXCI7XCIgZXhwcmVzc2lvbiApPyAoIFwiO1wiIGV4cHJlc3Npb24gKT8gXCIpXCIgc3RhdGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZm9yXCIgXCIoXCIgdmFyaWFibGUgXCJpblwiIGV4cHJlc3Npb24gXCIpXCIgc3RhdGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZm9yXCIgXCJhd2FpdFwiPyBcIihcIiB2YXJpYWJsZSBcIm9mXCIgZXhwcmVzc2lvbiBcIilcIiBzdGF0ZW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ3aGlsZVwiIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIgc3RhdGVtZW50XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwiZGVidWdnZXJcIiBcIjtcIj9cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICAgIGNsYXNzICAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJjbGFzc1wiIG5hbWUgY2xhc3NCb2R5IDtcblxuICAgIGZ1bmN0aW9uICAgICAgICAgICAgICAgICAgIDo6PSAgXCJhc3luY1wiPyBcImZ1bmN0aW9uXCIgbmFtZSBmdW5jdGlvbkJvZHkgO1xuXG4gICAgZ2VuZXJhdG9yICAgICAgICAgICAgICAgICAgOjo9ICBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiA8Tk9fV0hJVEVTUEFDRT5cIipcIiBuYW1lIGZ1bmN0aW9uQm9keSA7XG5cbiAgICBhbm9ueW1vdXNDbGFzcyAgICAgICAgICAgICA6Oj0gIFwiY2xhc3NcIiBjbGFzc0JvZHkgO1xuXG4gICAgYW5vbnltb3VzRnVuY3Rpb24gICAgICAgICAgOjo9ICBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiBmdW5jdGlvbkJvZHkgO1xuXG4gICAgYW5vbnltb3VzR2VuZXJhdG9yICAgICAgICAgOjo9ICBcImFzeW5jXCI/IFwiZnVuY3Rpb25cIiA8Tk9fV0hJVEVTUEFDRT5cIipcIiBmdW5jdGlvbkJvZHkgO1xuXG4gICAgY29uc3RydWN0b3IgICAgICAgICAgICAgICAgOjo9ICBcImNvbnN0cnVjdG9yXCIgZnVuY3Rpb25Cb2R5IDtcblxuICAgIG1ldGhvZCAgICAgICAgICAgICAgICAgICAgIDo6PSAgXCJzdGF0aWNcIj8gbmFtZSBmdW5jdGlvbkJvZHkgO1xuXG4gICAgZmllbGQgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcInN0YXRpY1wiPyBuYW1lIFwiPVwiIGV4cHJlc3Npb24gXCI7XCIgO1xuXG5cblxuICAgIGNsYXNzQm9keSAgICAgICAgICAgICAgICAgIDo6PSAgKCBcImV4dGVuZHNcIiBuYW1lICk/IFwie1wiICggY29uc3RydWN0b3IgfCBtZXRob2QgfCBmaWVsZCApKiBcIn1cIiA7XG5cbiAgICBmdW5jdGlvbkJvZHkgICAgICAgICAgICAgICA6Oj0gIFwiKFwiIGFyZ3VtZW50cz8gXCIpXCIgXCJ7XCIgc3RhdGVtZW50KiBcIn1cIiA7XG5cblxuXG4gICAgY2FzZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBcImNhc2VcIiBleHByZXNzaW9uIFwiOlwiIHN0YXRlbWVudCAoIFwiYnJlYWtcIiBcIjtcIiApPyA7XG5cbiAgICBkZWZhdWx0Q2FzZSAgICAgICAgICAgICAgICA6Oj0gIFwiZGVmYXVsdFwiIFwiOlwiIHN0YXRlbWVudCAoIFwiYnJlYWtcIiBcIjtcIiApPyA7XG5cbiAgICB0cnkgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwidHJ5XCIgXCJ7XCIgc3RhdGVtZW50KyBcIn1cIiA7XG5cbiAgICBjYXRjaCAgICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiY2F0Y2hcIiBcIihcIiBbaWRlbnRpZmllcl0gXCIpXCIgXCJ7XCIgc3RhdGVtZW50KyBcIn1cIiA7XG5cbiAgICBmaW5hbGx5ICAgICAgICAgICAgICAgICAgICA6Oj0gIFwiZmluYWxseVwiIFwie1wiIHN0YXRlbWVudCsgXCJ9XCIgO1xuXG4gICAgaW5pdGlhbGlzZXIgICAgICAgICAgICAgICAgOjo9ICBleHByZXNzaW9uIHwgXCJ2YXJcIiB2YXIgKCBcIixcIiB2YXIgKSogfCBcImxldFwiIGxldCAoIFwiLFwiIGxldCApKiA7XG5cblxuXG4gICAgdmFyICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gfCBkZXN0cnVjdHVyZSBcIj1cIiBleHByZXNzaW9uIDtcblxuICAgIGxldCAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgdmFyaWFibGUgKCBcIj1cIiBleHByZXNzaW9uICk/IHwgZGVzdHJ1Y3R1cmUgXCI9XCIgZXhwcmVzc2lvbjtcblxuICAgIGNvbnN0ICAgICAgICAgICAgICAgICAgICAgIDo6PSAgKCB2YXJpYWJsZSB8IGRlc3RydWN0dXJlICkgXCI9XCIgZXhwcmVzc2lvbiA7XG5cbiAgICBkZXN0cnVjdHVyZSAgICAgICAgICAgICAgICA6Oj0gIFwiW1wiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyAoIFwiLFwiIHZhcmlhYmxlICggXCI9XCIgZXhwcmVzc2lvbiApPyApKiBcIl1cIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIntcIiB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gKCBcIixcIiB2YXJpYWJsZSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gKSogXCJ9XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5cblxuICAgIGV4cHJlc3Npb24gICAgICAgICAgICAgICAgIDo6PSAganN4XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGpzb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgYXJyb3dGdW5jdGlvblxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICB0ZW1wbGF0ZUxpdGVyYWxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgYW5vbnltb3VzRnVuY3Rpb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcIntcIiAoIHByb3BlcnR5ICggXCIsXCIgcHJvcGVydHkgKSogKT8gXCJ9XCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJbXCIgKCBleHByZXNzaW9uICggXCIsXCIgZXhwcmVzc2lvbiApKiBcIixcIj8gKT8gXCJdXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ0eXBlb2ZcIiAoIGV4cHJlc3Npb24gfCAoIFwiKFwiIGV4cHJlc3Npb24gXCIpXCIpIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgXCJ2b2lkXCIgKCBleHByZXNzaW9uIHwgKCBcIihcIiBleHByZXNzaW9uIFwiKVwiKSApXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIFwibmV3XCIgbmFtZTxOT19XSElURVNQQUNFPlwiKFwiIGFyZ3VtZW50cz8gXCIpXCJcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW29wZXJhdG9yXTxOT19XSElURVNQQUNFPmV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgZXhwcmVzc2lvbjxOT19XSElURVNQQUNFPiggKCBcIi5cIjxOT19XSElURVNQQUNFPm5hbWUgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAoIFwiW1wiIGV4cHJlc3Npb25zIFwiXVwiIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIihcIiBleHByZXNzaW9ucz8gXCIpXCIgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCB0ZW1wbGF0ZUxpdGVyYWxcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgW29wZXJhdG9yXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBleHByZXNzaW9uICggKCBbb3BlcmF0b3JdIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcIj9cIiBleHByZXNzaW9uIFwiOlwiIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgKCBcImluc3RhbmNlb2ZcIiBleHByZXNzaW9uIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICggXCJpblwiIGV4cHJlc3Npb24gKVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW251bWJlcl1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgdmFyaWFibGVcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgcHJpbWl0aXZlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgIGltcG9ydE1ldGFcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgW3N0cmluZy1saXRlcmFsXVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICBcInN1cGVyXCIgfCBcInRoaXNcIiB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgfCBcInVuZGVmaW5lZFwiXG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxuXG5cbiAgICBqc3ggICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGpzeENvbXBsZXRlVGFnIHwganN4U3RhcnRUYWcgKCBqc3ggfCAoIFwie1wiIGV4cHJlc3Npb24/IFwifVwiICkgfCBzdHJpbmcgKSoganN4RW5kVGFnIDtcblxuICAgIGpzeENvbXBsZXRlVGFnICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGpzeEF0dHJpYnV0ZSogXCIvPlwiIDtcblxuICAgIGpzeFN0YXJ0VGFnICAgICAgICAgICAgICAgIDo6PSAgXCI8XCI8Tk9fV0hJVEVTUEFDRT5uYW1lIGpzeEF0dHJpYnV0ZSogXCI+XCIgO1xuXG4gICAganN4RW5kVGFnICAgICAgICAgICAgICAgICAgOjo9ICBcIjwvXCI8Tk9fV0hJVEVTUEFDRT5uYW1lIFwiPlwiIDtcblxuICAgIGpzeEF0dHJpYnV0ZSAgICAgICAgICAgICAgIDo6PSAgbmFtZSAoIDxOT19XSElURVNQQUNFPlwiPVwiICggKCA8Tk9fV0hJVEVTUEFDRT5bc3RyaW5nLWxpdGVyYWxdICkgfCAoIDxOT19XSElURVNQQUNFPlwie1wiIGV4cHJlc3Npb24gXCJ9XCIgKSApICk/IDtcblxuXG5cbiAgICBqc29uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gIGpzb25BcnJheSB8IGpzb25PYmplY3QgO1xuXG4gICAganNvbkFycmF5ICAgICAgICAgICAgICAgICAgOjo9ICBcIltcIiAoIGpzb25FbGVtZW50ICggXCIsXCIganNvbkVsZW1lbnQgKSogKT8gXCJdXCIgO1xuXG4gICAganNvbk9iamVjdCAgICAgICAgICAgICAgICAgOjo9ICBcIntcIiAoIFtzdHJpbmctbGl0ZXJhbF0gXCI6XCIganNvbkVsZW1lbnQgKCBcIixcIiBbc3RyaW5nLWxpdGVyYWxdIFwiOlwiIGpzb25FbGVtZW50ICkqICk/IFwifVwiIDtcblxuICAgIGpzb25FbGVtZW50ICAgICAgICAgICAgICAgIDo6PSAganNvbiB8IFtzdHJpbmctbGl0ZXJhbF0gfCBbbnVtYmVyXSB8IFwidHJ1ZVwiIHwgXCJmYWxzZVwiIHwgXCJudWxsXCIgO1xuXG5cblxuICAgIGFycm93RnVuY3Rpb24gICAgICAgICAgICAgIDo6PSAgc2ltcGxlQXJyb3dGdW5jdGlvbiB8IGNvbXBsZXhBcnJvd0Z1bmN0aW9uIDtcblxuICAgIGFycm93RnVuY3Rpb25Cb2R5ICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiB8ICggXCJ7XCIgc3RhdGVtZW50KiBcIn1cIiApIDtcblxuICAgIHNpbXBsZUFycm93RnVuY3Rpb24gICAgICAgIDo6PSAgYXJndW1lbnQgXCI9PlwiIGFycm93RnVuY3Rpb25Cb2R5IDtcblxuICAgIGNvbXBsZXhBcnJvd0Z1bmN0aW9uICAgICAgIDo6PSAgXCIoXCIgYXJndW1lbnRzPyBcIilcIiBcIj0+XCIgYXJyb3dGdW5jdGlvbkJvZHkgO1xuXG5cblxuICAgIHRlbXBsYXRlTGl0ZXJhbCAgICAgICAgICAgIDo6PSAgXCJcXGBcIiAoICggXCJcXCR7XCIgZXhwcmVzc2lvbj8gXCJ9XCIgKSB8IHN0cmluZyApKiBcIlxcYFwiIDtcblxuXG5cbiAgICBzdHJpbmcgICAgICAgICAgICAgICAgICAgICA6Oj0gICggW251bWJlcl0gfCBbc3BlY2lhbF0gfCBbb3BlcmF0b3JdfCBba2V5d29yZF0gfCBbaWRlbnRpZmllcl0gfCBbc3RyaW5nLWxpdGVyYWxdfCBbYnJva2VuLXN0cmluZy1saXRlcmFsXSB8IFt1bmFzc2lnbmVkXSApKyA7XG5cbiAgICBwcm9wZXJ0eSAgICAgICAgICAgICAgICAgICA6Oj0gICggKCAoIG5hbWUgfCBbc3RyaW5nLWxpdGVyYWxdICkgXCI6XCIgZXhwcmVzc2lvbiApIHwgdmFyaWFibGUgKSA7XG5cbiAgICBpbXBvcnRNZXRhICAgICAgICAgICAgICAgICA6Oj0gIFwiaW1wb3J0XCI8Tk9fV0hJVEVTUEFDRT5cIi5cIjxOT19XSElURVNQQUNFPlwibWV0YVwiIDtcblxuXG5cbiAgICBleHByZXNzaW9ucyAgICAgICAgICAgICAgICA6Oj0gIGV4cHJlc3Npb24gKCBcIixcIiBleHByZXNzaW9uICkqIDtcblxuICAgIGFyZ3VtZW50cyAgICAgICAgICAgICAgICAgIDo6PSAgc3ByZWFkQXJndW1lbnQgfCAoIGFyZ3VtZW50ICggXCIsXCIgYXJndW1lbnQgKSogKCBcIixcIiBzcHJlYWRBcmd1bWVudCApPyApIDtcblxuICAgIGZpZWxkcyAgICAgICAgICAgICAgICAgICAgIDo6PSAgbmFtZSAoIFwiOlwiIG5hbWUgKT8gKCBcIixcIiBuYW1lICggXCI6XCIgbmFtZSApPyApKiA7XG5cbiAgICBuYW1lcyAgICAgICAgICAgICAgICAgICAgICA6Oj0gIG5hbWUgKCBcImFzXCIgbmFtZSApPyAoIFwiLFwiIG5hbWUgKCBcImFzXCIgbmFtZSApPyApKiA7XG5cblxuXG4gICAgc3ByZWFkQXJndW1lbnQgICAgICAgICAgICAgOjo9ICBcIi4uLlwiPE5PX1dISVRFU1BBQ0U+W2lkZW50aWZpZXJdIDtcblxuICAgIGFyZ3VtZW50ICAgICAgICAgICAgICAgICAgIDo6PSAgZXhwcmVzc2lvbiB8IFtpZGVudGlmaWVyXSAoIFwiPVwiIGV4cHJlc3Npb24gKT8gO1xuXG4gICAgdmFyaWFibGUgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG4gICAgbGFiZWwgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG4gICAgbmFtZSAgICAgICAgICAgICAgICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO1xuXG5cblxuICAgIGVycm9yICAgICAgICAgICAgICAgICAgICAgIDo6PSAgLiA7XG5cblxuICAgICAgICAgICAgICBcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJjaGZlZ2VnaFwiO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiU1wiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJVTkFTU0lHTkVEX0VOVFJZIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiYWJyaWRnZWQiLCJhc1BhcnNlVHJlZSIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJzZXRQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7a0VBRVMsaUJBQWlCO29CQUVmLE1BQU07MkJBQ0gsY0FBYzs0QkFDYixlQUFlOzBCQUN5QixhQUFhO3FCQUNPLFVBQVU7OERBRTVFLGFBQWE7K0RBQ1osY0FBYzs2REFDYixnQkFBZ0I7d0RBQ2hCLGdCQUFnQjs0REFDWixvQkFBb0I7OERBQ2xCLHNCQUFzQjtrRUFDckIsdUJBQXVCO21FQUN0Qix3QkFBd0I7Z0VBQ3hCLHdCQUF3QjtvRkFDSiw0Q0FBNEM7c0JBRW5FLHFCQUFxQjt5QkFDakIsY0FBYztxQkFDRixvQkFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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