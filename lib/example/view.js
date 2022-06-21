"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _easyLayout = require("easy-layout");
var _index = require("../index");
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = _interopRequireDefault(require("./textarea/adjustedBNF"));
var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _rules = require("../utilities/rules");
var _constants = require("../constants");
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
                        (0, _index).removeOrRenameIntermediateNodes(node);
                    }
                    parseTree = node.asParseTree(tokens);
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
                var rules = (0, _rules).rulesFromBNF(bnf);
                var ruleMap = ruleMapFromRules(rules);
                var startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);
                startRule = (0, _index).eliminateLeftRecursion(startRule, ruleMap);
                rules = (0, _rules).rulesFromStartRuleAndRuleMap(startRule, ruleMap);
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
_defineProperty(View, "initialBNF", '\n \n    A ::= B "h"\n    \n        | "d"\n    \n        ;\n    \n    B ::= A "g"\n    \n        | B "f"\n\n        | B "e"\n    \n        | "c"\n\n        ;\n\n\n');
_defineProperty(View, "initialContent", "dgeh");
_defineProperty(View, "initialStartRuleName", "S");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\n    A ::= A_ ( B~ "h" )* ;\n    \n    B ::= A B~\n    \n        | B_ ( "f" | "e" )*\n    \n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "g" ;\n\n   A_ ::= B_ ( "f" | "e" )* "h"\n    \n        | "d"\n    \n        ;\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n-----------------------------\n\nWe need to derive reduced parts from parts not rule names, see below.\n\n-----------------------------\n\nWe need further (bur relatively easy) checks to ensure that reduced and repeated rules are not empty. The latter means that we can do away with checks for unary definitions.\n\n-----------------------------\n\n\nThere is currently a bug in the fromIndirectlyLeftRecursiveRule() static factory method of the repeated rule whereby only one indirectly left recursive definition is treated.\n\nThis could work out, in some sense at least, because we will end up merging these indirectly left recursive definitions.\n\nIt is possible that even after merging there is still more than one indirectly left recursive definition, however.  \n\n-----------------------------\n\nIt should be possible to rewrite rules where it is the indirectly left recursive rule that is also directly left recursive.\n\n    A ::= B "g"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B "f"\n    \n        | "c"\n\n        ;\n\nFirst we rewrite the indirectly left recursive rule as before...\n\n    A ::= B "g"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A B~\n    \n        | B "f"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n...the trick being to leave the indirectly left recursive definition effectively in place, although note that it is still subsequently rewritten with a repeated rule being produced:\n\nNow we eliminate B\'s direct left recursion in the usual way:\n\n    A ::= B "g"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A B~\n    \n        | B_ "f"*\n    \n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\nAnd now we do the usual substitution to eliminate indirect left recursion:\n\n    A ::= A B~ "g"\n    \n        | B_ "f"* "g"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A B~\n    \n        | B_ "f"*\n    \n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\nFinally, there is a second pass to eliminate direct left recursion. First the reduction...\n\n    A ::= A B~ "g"\n    \n        | A_\n    \n        ;\n    \n    B ::= A B~\n    \n        | B_ "f"*\n    \n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "f"* "g"\n    \n        | "e"\n    \n        ;\n    \n...and then the rewrite:\n\n    A ::= A_ ( B~ "g" )* ;\n    \n    B ::= A B~\n    \n        | B_ "f"*\n    \n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "f"* "g"\n    \n        | "e"\n    \n        ;\n    \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n-------------------------------\n\nWe need to make sure when rules are rewritten that they are only done so once. There may be more than one indirectly recursive definition, for example.\n\nIn this case, can they be merged beforehand?\n\n-------------------------------\n\nThe reducedPartFromPart() usage in the part utilities looks suspect. It is only called with the Rulename part. So why the need for recursion?\n\n--------------------------------\n\nWe introduce a repeated as well as a reduced rule:\n\n     A ::= B "g"\n    \n         | A "f"\n    \n         | "e"\n    \n         ;\n    \n    B ::= A B~\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n \nNow when we do the substitution...\n \n     A ::= A B~ "g"\n    \n         | B_ "g"\n\n         | A "f"\n\n         | "e"\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n...we keep the A to B to A relation when we match "h".\n\nContinuing, we reduce the A rule...\n\n     A ::= A B~ "g"\n    \n         | A "f"\n\n         | A_\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \n...merge the directly left recursive definitions...\n\n     A ::= A ( ( B~ "g" ) | "f" )\n\n         | A_\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \n...and rewrite:\n\n    A ::= A_ ( ( B~ "g" ) | "f" )* ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \nIn fact note that we may have to merge the indirectly left recursive definitions firstly, too!\n\n\n\n\n\n\n\n\n\n\n\n\n--------------------------------------------\n\nThis is an interesting case. We need to merge the implicitly left recursive definitions:\n\n    A ::= B "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | "c"\n\n        ;\n        \nBecause the A rule is directly left recursive, we need to substitute into that. First, we rewrite the B rule:\n\n    A ::= B "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n        \nNext we substitute the rewritten B rule\'s definitions for any occurence of the B rule name part in the A rule\'s implicitly left recursive definitions:\n\n    A ::= A "h" "g"\n    \n        | B_ "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n   \nNow we reduce the A rule...\n\n    A ::= A "h" "g"\n    \n        | A "f"\n    \n        | A_\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n    \n   A_ ::= B_ "g"\n    \n        | "e"\n    \n        ;\n\n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n\n--------------------------------------------\n\nWe go from here...\n\n    A ::= B "c"\n    \n        | A "h"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "f" "g"\n    \n        | "c"\n\n        ;\n                \n...to here:\n\n    A ::= A_ ( "h" | ( "f" "g" ) )* ;\n    \n    B ::= A "f" "g"\n    \n        | B_\n\n        ;\n    \n   A_ ::= B_ "c"\n    \n        | "e"\n    \n        ;\n\n   B_ ::= "c"\n\n        | "d"\n\n        ;        \n    \n--------------------------------------------\n\nTHe following rules mix direct and indirect left-recursion.\n\nNote that the directly left recursive definition is a sibling of the *implicitly* left recursive definition.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n\nA little thought should convince that these rules will match the following:\n\ne(f|g)*\n\nNow note that the directly left recursive definition forced us to do the substitution in the following direction:\n\n    A ::= A "g"\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n        \nIn fact we *cannot* substitute the other way because we must leave the B indirectly left recursive definition in place.\n\nRearranging:\n\n    A ::= A ( "g" | "f" )\n\n        | "e"\n    \n        ;\n        \nAnd now we rewrite:\n\n    A ::= A_ ( "g" | "f" )* ;\n        \n   A_ ::= "e" ;\n\nNow consider tHe following rules that also mix direct and indirect left-recursion.\n\nHowever, note that in this case the directly left recursive definition is a sibling of the *indirectly* left recursive definition.\n    \n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\nThis time we have to substitute A\'s definitions into the indirectly left recursive definition:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | B "g"\n    \n        | "e" "g"\n\n        ;\n\nRearranging:    \n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B ( "f" | "g" )\n    \n        | "e" "g"\n\n        ;\n\nNow rewriting:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B_ ( "f" | "g" )* ;\n\n   B_ ::= "e" "g" ;\n\nSo the moral is that eliminating indirect left recursion amounts to a rearrangement to direct left recursion...\n\n...and then from there, combining any directly left recursive definitions into on, before the usual rewriting.\n\nBy this token the following rules cannot be rewritten, at least not easily...\n\n    A ::= B\n\n        | A "e"\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\n...because we cannot get all the directly left recursive rules in one rule or the other.\n\nOr, at least, we can be forgiven for not trying.\n\n--------------------------------------------\n\nThe following rules...\n \nS ::= A "f"\n\n    | "e"\n    \n    ; \n    \nA ::= S "h" \n\n    | "g"\n    \n    ;  \n      \n...are rewritten to:\n\nS  ::= A "f"\n\n     | S_\n\n     ;\n\nA  ::= A_ ( "f" "h" )+? ;\n\nA_ ::= S_ "h"\n\n     | "g"\n\n     ;\n\nS_ ::= "e" ;\n\nLooking at the original rules, the following content will match:\n\nS -> A f or e\n\nA f -> S hf or gf\n\nS hf -> A fhf or ehf\n\nA fhf -> S hfhf or gfhf\n\netc\n\nSo we get e(hf)* or gf(hf)*\n\nIt is worth pointing out that these rewrite rules, although they allow us to deal with left recursion by hand, so to speak, would still result in an algorithm that would not terminate.\n\nChecking the rewritten rules in the same manner, immediately writing S_ as e wherever we encounter it: \n\nS -> A f or e\n\nA f -> A_ (fh)+ f\n\nA_ (fh)+ f -> e h (fh)+ f or g (fh)+ f\n\nNow e h(fh)+ f is just e(fh)+ and combined with e gives e (fh)* whilst g(fh)+ f is actually gf(hf)* and we are done.\n \n--------------------------------------------\n\nWe need to get this one working:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n--------------------------------------------\n\nThis one has both direct and indirect left recursion.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n    \n--------------------------------------------\n\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recursion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions. \n  \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpO1xuXG4gICAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuIFxuICAgIEEgOjo9IEIgXCJoXCJcbiAgICBcbiAgICAgICAgfCBcImRcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImdcIlxuICAgIFxuICAgICAgICB8IEIgXCJmXCJcblxuICAgICAgICB8IEIgXCJlXCJcbiAgICBcbiAgICAgICAgfCBcImNcIlxuXG4gICAgICAgIDtcblxuXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiZGdlaFwiO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiU1wiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuYFxuXG4gICAgQSA6Oj0gQV8gKCBCfiBcImhcIiApKiA7XG4gICAgXG4gICAgQiA6Oj0gQSBCflxuICAgIFxuICAgICAgICB8IEJfICggXCJmXCIgfCBcImVcIiApKlxuICAgIFxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIiA7XG5cbiAgIEJ+IDo6PSBcImdcIiA7XG5cbiAgIEFfIDo6PSBCXyAoIFwiZlwiIHwgXCJlXCIgKSogXCJoXCJcbiAgICBcbiAgICAgICAgfCBcImRcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuV2UgbmVlZCB0byBkZXJpdmUgcmVkdWNlZCBwYXJ0cyBmcm9tIHBhcnRzIG5vdCBydWxlIG5hbWVzLCBzZWUgYmVsb3cuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldlIG5lZWQgZnVydGhlciAoYnVyIHJlbGF0aXZlbHkgZWFzeSkgY2hlY2tzIHRvIGVuc3VyZSB0aGF0IHJlZHVjZWQgYW5kIHJlcGVhdGVkIHJ1bGVzIGFyZSBub3QgZW1wdHkuIFRoZSBsYXR0ZXIgbWVhbnMgdGhhdCB3ZSBjYW4gZG8gYXdheSB3aXRoIGNoZWNrcyBmb3IgdW5hcnkgZGVmaW5pdGlvbnMuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuVGhlcmUgaXMgY3VycmVudGx5IGEgYnVnIGluIHRoZSBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlKCkgc3RhdGljIGZhY3RvcnkgbWV0aG9kIG9mIHRoZSByZXBlYXRlZCBydWxlIHdoZXJlYnkgb25seSBvbmUgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGlzIHRyZWF0ZWQuXG5cblRoaXMgY291bGQgd29yayBvdXQsIGluIHNvbWUgc2Vuc2UgYXQgbGVhc3QsIGJlY2F1c2Ugd2Ugd2lsbCBlbmQgdXAgbWVyZ2luZyB0aGVzZSBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zLlxuXG5JdCBpcyBwb3NzaWJsZSB0aGF0IGV2ZW4gYWZ0ZXIgbWVyZ2luZyB0aGVyZSBpcyBzdGlsbCBtb3JlIHRoYW4gb25lIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiwgaG93ZXZlci4gIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5JdCBzaG91bGQgYmUgcG9zc2libGUgdG8gcmV3cml0ZSBydWxlcyB3aGVyZSBpdCBpcyB0aGUgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBydWxlIHRoYXQgaXMgYWxzbyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZS5cblxuICAgIEEgOjo9IEIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEIgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImNcIlxuXG4gICAgICAgIDtcblxuRmlyc3Qgd2UgcmV3cml0ZSB0aGUgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBydWxlIGFzIGJlZm9yZS4uLlxuXG4gICAgQSA6Oj0gQiBcImdcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIEJ+XG4gICAgXG4gICAgICAgIHwgQiBcImZcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuXG4uLi50aGUgdHJpY2sgYmVpbmcgdG8gbGVhdmUgdGhlIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBlZmZlY3RpdmVseSBpbiBwbGFjZSwgYWx0aG91Z2ggbm90ZSB0aGF0IGl0IGlzIHN0aWxsIHN1YnNlcXVlbnRseSByZXdyaXR0ZW4gd2l0aCBhIHJlcGVhdGVkIHJ1bGUgYmVpbmcgcHJvZHVjZWQ6XG5cbk5vdyB3ZSBlbGltaW5hdGUgQidzIGRpcmVjdCBsZWZ0IHJlY3Vyc2lvbiBpbiB0aGUgdXN1YWwgd2F5OlxuXG4gICAgQSA6Oj0gQiBcImdcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIEJ+XG4gICAgXG4gICAgICAgIHwgQl8gXCJmXCIqXG4gICAgXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuICAgQn4gOjo9IFwiaFwiIDtcblxuQW5kIG5vdyB3ZSBkbyB0aGUgdXN1YWwgc3Vic3RpdHV0aW9uIHRvIGVsaW1pbmF0ZSBpbmRpcmVjdCBsZWZ0IHJlY3Vyc2lvbjpcblxuICAgIEEgOjo9IEEgQn4gXCJnXCJcbiAgICBcbiAgICAgICAgfCBCXyBcImZcIiogXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBCflxuICAgIFxuICAgICAgICB8IEJfIFwiZlwiKlxuICAgIFxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIiA7XG5cbiAgIEJ+IDo6PSBcImhcIiA7XG5cbkZpbmFsbHksIHRoZXJlIGlzIGEgc2Vjb25kIHBhc3MgdG8gZWxpbWluYXRlIGRpcmVjdCBsZWZ0IHJlY3Vyc2lvbi4gRmlyc3QgdGhlIHJlZHVjdGlvbi4uLlxuXG4gICAgQSA6Oj0gQSBCfiBcImdcIlxuICAgIFxuICAgICAgICB8IEFfXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIEJ+XG4gICAgXG4gICAgICAgIHwgQl8gXCJmXCIqXG4gICAgXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuICAgQn4gOjo9IFwiaFwiIDtcblxuICAgQV8gOjo9IEJfIFwiZlwiKiBcImdcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbi4uLmFuZCB0aGVuIHRoZSByZXdyaXRlOlxuXG4gICAgQSA6Oj0gQV8gKCBCfiBcImdcIiApKiA7XG4gICAgXG4gICAgQiA6Oj0gQSBCflxuICAgIFxuICAgICAgICB8IEJfIFwiZlwiKlxuICAgIFxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIiA7XG5cbiAgIEJ+IDo6PSBcImhcIiA7XG5cbiAgIEFfIDo6PSBCXyBcImZcIiogXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XZSBuZWVkIHRvIG1ha2Ugc3VyZSB3aGVuIHJ1bGVzIGFyZSByZXdyaXR0ZW4gdGhhdCB0aGV5IGFyZSBvbmx5IGRvbmUgc28gb25jZS4gVGhlcmUgbWF5IGJlIG1vcmUgdGhhbiBvbmUgaW5kaXJlY3RseSByZWN1cnNpdmUgZGVmaW5pdGlvbiwgZm9yIGV4YW1wbGUuXG5cbkluIHRoaXMgY2FzZSwgY2FuIHRoZXkgYmUgbWVyZ2VkIGJlZm9yZWhhbmQ/XG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIHJlZHVjZWRQYXJ0RnJvbVBhcnQoKSB1c2FnZSBpbiB0aGUgcGFydCB1dGlsaXRpZXMgbG9va3Mgc3VzcGVjdC4gSXQgaXMgb25seSBjYWxsZWQgd2l0aCB0aGUgUnVsZW5hbWUgcGFydC4gU28gd2h5IHRoZSBuZWVkIGZvciByZWN1cnNpb24/XG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldlIGludHJvZHVjZSBhIHJlcGVhdGVkIGFzIHdlbGwgYXMgYSByZWR1Y2VkIHJ1bGU6XG5cbiAgICAgQSA6Oj0gQiBcImdcIlxuICAgIFxuICAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBCflxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuIFxuTm93IHdoZW4gd2UgZG8gdGhlIHN1YnN0aXR1dGlvbi4uLlxuIFxuICAgICBBIDo6PSBBIEJ+IFwiZ1wiXG4gICAgXG4gICAgICAgICB8IEJfIFwiZ1wiXG5cbiAgICAgICAgIHwgQSBcImZcIlxuXG4gICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuXG4uLi53ZSBrZWVwIHRoZSBBIHRvIEIgdG8gQSByZWxhdGlvbiB3aGVuIHdlIG1hdGNoIFwiaFwiLlxuXG5Db250aW51aW5nLCB3ZSByZWR1Y2UgdGhlIEEgcnVsZS4uLlxuXG4gICAgIEEgOjo9IEEgQn4gXCJnXCJcbiAgICBcbiAgICAgICAgIHwgQSBcImZcIlxuXG4gICAgICAgICB8IEFfXG4gICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuXG4gICBBXyA6Oj0gQl8gXCJnXCJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbi4uLm1lcmdlIHRoZSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucy4uLlxuXG4gICAgIEEgOjo9IEEgKCAoIEJ+IFwiZ1wiICkgfCBcImZcIiApXG5cbiAgICAgICAgIHwgQV9cbiAgICBcbiAgICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIiA7XG5cbiAgIEJ+IDo6PSBcImhcIiA7XG5cbiAgIEFfIDo6PSBCXyBcImdcIlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuLi4uYW5kIHJld3JpdGU6XG5cbiAgICBBIDo6PSBBXyAoICggQn4gXCJnXCIgKSB8IFwiZlwiICkqIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIiA7XG5cbiAgIEJ+IDo6PSBcImhcIiA7XG5cbiAgIEFfIDo6PSBCXyBcImdcIlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuSW4gZmFjdCBub3RlIHRoYXQgd2UgbWF5IGhhdmUgdG8gbWVyZ2UgdGhlIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgZmlyc3RseSwgdG9vIVxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhpcyBpcyBhbiBpbnRlcmVzdGluZyBjYXNlLiBXZSBuZWVkIHRvIG1lcmdlIHRoZSBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zOlxuXG4gICAgQSA6Oj0gQiBcImdcIlxuICAgIFxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IFwiY1wiXG5cbiAgICAgICAgO1xuICAgICAgICBcbkJlY2F1c2UgdGhlIEEgcnVsZSBpcyBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSwgd2UgbmVlZCB0byBzdWJzdGl0dXRlIGludG8gdGhhdC4gRmlyc3QsIHdlIHJld3JpdGUgdGhlIEIgcnVsZTpcblxuICAgIEEgOjo9IEIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcbiAgICAgICAgXG4gICBCXyA6Oj0gXCJjXCIgO1xuICAgICAgICBcbk5leHQgd2Ugc3Vic3RpdHV0ZSB0aGUgcmV3cml0dGVuIEIgcnVsZSdzIGRlZmluaXRpb25zIGZvciBhbnkgb2NjdXJlbmNlIG9mIHRoZSBCIHJ1bGUgbmFtZSBwYXJ0IGluIHRoZSBBIHJ1bGUncyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zOlxuXG4gICAgQSA6Oj0gQSBcImhcIiBcImdcIlxuICAgIFxuICAgICAgICB8IEJfIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG4gICAgICAgIFxuICAgQl8gOjo9IFwiY1wiIDtcbiAgIFxuTm93IHdlIHJlZHVjZSB0aGUgQSBydWxlLi4uXG5cbiAgICBBIDo6PSBBIFwiaFwiIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IEFfXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG4gICAgICAgIFxuICAgQl8gOjo9IFwiY1wiIDtcbiAgICBcbiAgIEFfIDo6PSBCXyBcImdcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcblxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XZSBnbyBmcm9tIGhlcmUuLi5cblxuICAgIEEgOjo9IEIgXCJjXCJcbiAgICBcbiAgICAgICAgfCBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJmXCIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImNcIlxuXG4gICAgICAgIDtcbiAgICAgICAgICAgICAgICBcbi4uLnRvIGhlcmU6XG5cbiAgICBBIDo6PSBBXyAoIFwiaFwiIHwgKCBcImZcIiBcImdcIiApICkqIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiZlwiIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG4gICAgXG4gICBBXyA6Oj0gQl8gXCJjXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG5cbiAgIEJfIDo6PSBcImNcIlxuXG4gICAgICAgIHwgXCJkXCJcblxuICAgICAgICA7ICAgICAgICBcbiAgICBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRIZSBmb2xsb3dpbmcgcnVsZXMgbWl4IGRpcmVjdCBhbmQgaW5kaXJlY3QgbGVmdC1yZWN1cnNpb24uXG5cbk5vdGUgdGhhdCB0aGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBpcyBhIHNpYmxpbmcgb2YgdGhlICppbXBsaWNpdGx5KiBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uLlxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcblxuQSBsaXR0bGUgdGhvdWdodCBzaG91bGQgY29udmluY2UgdGhhdCB0aGVzZSBydWxlcyB3aWxsIG1hdGNoIHRoZSBmb2xsb3dpbmc6XG5cbmUoZnxnKSpcblxuTm93IG5vdGUgdGhhdCB0aGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBmb3JjZWQgdXMgdG8gZG8gdGhlIHN1YnN0aXR1dGlvbiBpbiB0aGUgZm9sbG93aW5nIGRpcmVjdGlvbjpcblxuICAgIEEgOjo9IEEgXCJnXCJcblxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgICAgIFxuSW4gZmFjdCB3ZSAqY2Fubm90KiBzdWJzdGl0dXRlIHRoZSBvdGhlciB3YXkgYmVjYXVzZSB3ZSBtdXN0IGxlYXZlIHRoZSBCIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBpbiBwbGFjZS5cblxuUmVhcnJhbmdpbmc6XG5cbiAgICBBIDo6PSBBICggXCJnXCIgfCBcImZcIiApXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgICAgIFxuQW5kIG5vdyB3ZSByZXdyaXRlOlxuXG4gICAgQSA6Oj0gQV8gKCBcImdcIiB8IFwiZlwiICkqIDtcbiAgICAgICAgXG4gICBBXyA6Oj0gXCJlXCIgO1xuXG5Ob3cgY29uc2lkZXIgdEhlIGZvbGxvd2luZyBydWxlcyB0aGF0IGFsc28gbWl4IGRpcmVjdCBhbmQgaW5kaXJlY3QgbGVmdC1yZWN1cnNpb24uXG5cbkhvd2V2ZXIsIG5vdGUgdGhhdCBpbiB0aGlzIGNhc2UgdGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gaXMgYSBzaWJsaW5nIG9mIHRoZSAqaW5kaXJlY3RseSogbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbi5cbiAgICBcbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQiBcImZcIlxuICAgIFxuICAgICAgICB8IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuXG5UaGlzIHRpbWUgd2UgaGF2ZSB0byBzdWJzdGl0dXRlIEEncyBkZWZpbml0aW9ucyBpbnRvIHRoZSBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb246XG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQiBcImZcIlxuICAgIFxuICAgICAgICB8IEIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImVcIiBcImdcIlxuXG4gICAgICAgIDtcblxuUmVhcnJhbmdpbmc6ICAgIFxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEIgKCBcImZcIiB8IFwiZ1wiIClcbiAgICBcbiAgICAgICAgfCBcImVcIiBcImdcIlxuXG4gICAgICAgIDtcblxuTm93IHJld3JpdGluZzpcblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBCXyAoIFwiZlwiIHwgXCJnXCIgKSogO1xuXG4gICBCXyA6Oj0gXCJlXCIgXCJnXCIgO1xuXG5TbyB0aGUgbW9yYWwgaXMgdGhhdCBlbGltaW5hdGluZyBpbmRpcmVjdCBsZWZ0IHJlY3Vyc2lvbiBhbW91bnRzIHRvIGEgcmVhcnJhbmdlbWVudCB0byBkaXJlY3QgbGVmdCByZWN1cnNpb24uLi5cblxuLi4uYW5kIHRoZW4gZnJvbSB0aGVyZSwgY29tYmluaW5nIGFueSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbnRvIG9uLCBiZWZvcmUgdGhlIHVzdWFsIHJld3JpdGluZy5cblxuQnkgdGhpcyB0b2tlbiB0aGUgZm9sbG93aW5nIHJ1bGVzIGNhbm5vdCBiZSByZXdyaXR0ZW4sIGF0IGxlYXN0IG5vdCBlYXNpbHkuLi5cblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IEEgXCJlXCJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBCIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQSBcImdcIlxuICAgIFxuICAgICAgICA7XG5cbi4uLmJlY2F1c2Ugd2UgY2Fubm90IGdldCBhbGwgdGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIHJ1bGVzIGluIG9uZSBydWxlIG9yIHRoZSBvdGhlci5cblxuT3IsIGF0IGxlYXN0LCB3ZSBjYW4gYmUgZm9yZ2l2ZW4gZm9yIG5vdCB0cnlpbmcuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoZSBmb2xsb3dpbmcgcnVsZXMuLi5cbiBcblMgOjo9IEEgXCJmXCJcblxuICAgIHwgXCJlXCJcbiAgICBcbiAgICA7IFxuICAgIFxuQSA6Oj0gUyBcImhcIiBcblxuICAgIHwgXCJnXCJcbiAgICBcbiAgICA7ICBcbiAgICAgIFxuLi4uYXJlIHJld3JpdHRlbiB0bzpcblxuUyAgOjo9IEEgXCJmXCJcblxuICAgICB8IFNfXG5cbiAgICAgO1xuXG5BICA6Oj0gQV8gKCBcImZcIiBcImhcIiApKz8gO1xuXG5BXyA6Oj0gU18gXCJoXCJcblxuICAgICB8IFwiZ1wiXG5cbiAgICAgO1xuXG5TXyA6Oj0gXCJlXCIgO1xuXG5Mb29raW5nIGF0IHRoZSBvcmlnaW5hbCBydWxlcywgdGhlIGZvbGxvd2luZyBjb250ZW50IHdpbGwgbWF0Y2g6XG5cblMgLT4gQSBmIG9yIGVcblxuQSBmIC0+IFMgaGYgb3IgZ2ZcblxuUyBoZiAtPiBBIGZoZiBvciBlaGZcblxuQSBmaGYgLT4gUyBoZmhmIG9yIGdmaGZcblxuZXRjXG5cblNvIHdlIGdldCBlKGhmKSogb3IgZ2YoaGYpKlxuXG5JdCBpcyB3b3J0aCBwb2ludGluZyBvdXQgdGhhdCB0aGVzZSByZXdyaXRlIHJ1bGVzLCBhbHRob3VnaCB0aGV5IGFsbG93IHVzIHRvIGRlYWwgd2l0aCBsZWZ0IHJlY3Vyc2lvbiBieSBoYW5kLCBzbyB0byBzcGVhaywgd291bGQgc3RpbGwgcmVzdWx0IGluIGFuIGFsZ29yaXRobSB0aGF0IHdvdWxkIG5vdCB0ZXJtaW5hdGUuXG5cbkNoZWNraW5nIHRoZSByZXdyaXR0ZW4gcnVsZXMgaW4gdGhlIHNhbWUgbWFubmVyLCBpbW1lZGlhdGVseSB3cml0aW5nIFNfIGFzIGUgd2hlcmV2ZXIgd2UgZW5jb3VudGVyIGl0OiBcblxuUyAtPiBBIGYgb3IgZVxuXG5BIGYgLT4gQV8gKGZoKSsgZlxuXG5BXyAoZmgpKyBmIC0+IGUgaCAoZmgpKyBmIG9yIGcgKGZoKSsgZlxuXG5Ob3cgZSBoKGZoKSsgZiBpcyBqdXN0IGUoZmgpKyBhbmQgY29tYmluZWQgd2l0aCBlIGdpdmVzIGUgKGZoKSogd2hpbHN0IGcoZmgpKyBmIGlzIGFjdHVhbGx5IGdmKGhmKSogYW5kIHdlIGFyZSBkb25lLlxuIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuV2UgbmVlZCB0byBnZXQgdGhpcyBvbmUgd29ya2luZzpcblxuQSA6Oj0gQyBcImZcIlxuXG4gICAgfCBCXG5cbiAgICA7XG5cbkIgOjo9IFwiaFwiIEMgO1xuXG5DIDo6PSBBIDtcbiBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgb25lIGhhcyBib3RoIGRpcmVjdCBhbmQgaW5kaXJlY3QgbGVmdCByZWN1cnNpb24uXG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuXG5UaGlzIG9uZSBuZWVkcyBmdXJ0aGVyIGludmVzdGlnYXRpb24uIFRyeSByZW1vdmluZyB0aGUgXCJlXCIgZGVmaW5pdGlvbiBhbmQgdGhlbiByZW1vdmUgZWFjaCBraW5kIG9mIGxlZnQgcmVjdXJzaW9uIGluIHR1cm4uXG5cbiAgICBBIDo6PSBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBDXG4gICAgXG4gICAgICAgIHwgQSBcImdcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQyA6Oj0gXCJoXCIgO1xuICAgIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhpcyBvbmUgaXMgYWxzbyBjYXVzaW5nIHByb2JsZW1zIGFsdGhvdWdoIHRoZSBhbGdvcml0aG0gaXMgaW4gdHJhbnNpdGlvbjpcblxuQSA6Oj0gQlxuXG4gICAgfCBDIFwiZlwiXG5cbiAgICA7XG5cbkIgOjo9IFwiaFwiIEMgO1xuXG5DIDo6PSBBIDtcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIHNpbXBsaWZ5aW5nIHRoZSByZXdyaXRlIHByb2Nlc3MuIFRoZSBmb2xsb3dpbmcuLi5cblxuQSA6Oj0gQS4uLiBcImhcIiBcImdcIiB8IFwiZlwiIDtcblxuLi4uY2FuIGluIGZhY3QgYmUgcmV3cml0dGVuOlxuXG5BIDo6PSBBXy4uLiBBfis/IDtcblxuQV8gOjo9IFwiZlwiIDtcblxuQX4gOjo9IFwiaFwiIFwiZ1wiIDtcblxuSW4gZmFjdCB3ZSBjb3VsZCBldmVuIGRvIGF3YXkgd2l0aCB0aGUgcmVwZWF0ZWQgcnVsZSBhbmQgXCJpbmxpbmVcIiBpdHMgZGVmaW5pdGlvbjpcblxuQSA6Oj0gQV8uLi4gKCBcImhcIiBcImdcIiApKz8gO1xuXG5BXyA6Oj0gXCJmXCIgO1xuXG5BZ2FpbiB3ZSBtYWtlIHVzZSBvZiB0aGUgc2VxdWVuY2Ugb2YgcGFydHMgcGFydCBleHRlbnRpb24gdG8gdGhlIEJORi5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIG5ldyBwcm9jZXNzIHdvdWxkIGJlOlxuXG4xLiBGaW5kIGFsbCBvZiB0aGUgZGlyZWN0bHkgYW5kIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYnkgYSBkZXB0aCBmaXJzdCBzZWFyY2ggb3ZlciBhbGwgcmVjdXJzaXZlIGRlZmluaXRpb25zXG5cbjIuIFJld3JpdGUgYm90aCB0aGUgdGhlIGRpcmVjdGx5IGFuZCBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFzIHdlbGwgYXMgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgcmVwZWF0ZWQgcnVsZXNcblxuMy4gUmV3cml0ZSB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHJlY3Vyc2l2ZSBydWxlcyBhcyB3ZWxsIGFzIGNyZSBcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuV2hhdCBpZiB0aGVyZSBhcmUgdHdvIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSBzYW1lIHJ1bGU/XG5cbkEgOjo9IEEgXCJoXCJcblxuICAgIHwgQS4uLiBcImdcIlxuICAgIFxuICAgIHwgXCJmXCJcbiAgICBcbiAgICA7XG4gICAgICAgIFxuQSAgOjo9IEFfLi4uICggXCJoXCIgfCBcImdcIiApKz8gO1xuICAgIFxuQV8gIDo6PSBcImZcIiA7ICAgIFxuXG5UaGUgb25seSBwcm9ibGVtIHdpdGggdGhpcyBzZWVtcyB0byBiZSBkZWFsaW5nIHdpdGggbG9vay1haGVhZC4gT3RoZXJ3aXNlIHdlIGNhbiBzaW1wbHkgY29tYmluZSB0aGUgdHdvIHJlcGVhdGVkIHN1Yi1kZWZpbml0aW9ucy4gXG4gIFxuYFxuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImdldFBhcnNlVHJlZSIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsIlVOQVNTSUdORURfRU5UUlkiLCJjdXN0b20iLCJlbnRyaWVzIiwiYmFzaWNMZXhlciIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsImJhc2ljUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMiLCJhc1BhcnNlVHJlZSIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJzZXRQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFZixJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFDSCxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFDYixJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDeUIsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ08sSUFBQSxNQUFVLFdBQVYsVUFBVSxDQUFBO0FBRTVFLElBQUEsVUFBYSxrQ0FBYixhQUFhLEVBQUE7QUFDWixJQUFBLFdBQWMsa0NBQWQsY0FBYyxFQUFBO0FBQ2IsSUFBQSxTQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDaEIsSUFBQSxJQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDWixJQUFBLFFBQW9CLGtDQUFwQixvQkFBb0IsRUFBQTtBQUNsQixJQUFBLFVBQXNCLGtD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