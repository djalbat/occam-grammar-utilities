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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
_defineProperty(View, "initialBNF", '\n \n    A ::= B "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n');
_defineProperty(View, "initialContent", "cgfhg");
_defineProperty(View, "initialStartRuleName", "S");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\n-------------------------------\n\nTHE REDUCEDPARTFROMPART() USAGE IN THE PART UTILITIES LOOKS WRONG. IT IS ALWAYS AND ONLY CALLED WITH A RULENAME PART, SO WHY THE NEED FOR RECURSION?\n\n--------------------------------\n\nWe introduce a repeated as well as a reduced rule:\n\n     A ::= B "g"\n    \n         | A "f"\n    \n         | "e"\n    \n         ;\n    \n    B ::= A B~\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n \nNow when we do the substitution...\n \n     A ::= A B~ "g"\n    \n         | B_ "g"\n\n         | A "f"\n\n         | "e"\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n...we keep the A to B to A relation when we match "h".\n\nContinuing, we reduce the A rule...\n\n     A ::= A B~ "g"\n    \n         | A "f"\n\n         | A_\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \n...merge the directly left recursive definitions...\n\n     A ::= A ( ( B~ "g" ) | "f" )\n\n         | A_\n    \n         ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \n...and rewrite:\n\n    A ::= A_ ( ( B~ "g" ) | "f" )* ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n\n   B_ ::= "c" ;\n\n   B~ ::= "h" ;\n\n   A_ ::= B_ "g"\n\n        | "e"\n    \n        ;\n    \nIn fact note that we may have to merge the indirectly left recursive definitions firstly, too!\n\n\n\n\n\n\n\n\n\n\n\n\n--------------------------------------------\n\nThis is an interesting case. We need to merge the implicitly left recursive definitions:\n\n    A ::= B "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | "c"\n\n        ;\n        \nBecause the A rule is directly left recursive, we need to substitute into that. First, we rewrite the B rule:\n\n    A ::= B "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n        \nNext we substitute the rewritten B rule\'s definitions for any occurence of the B rule name part in the A rule\'s implicitly left recursive definitions:\n\n    A ::= A "h" "g"\n    \n        | B_ "g"\n    \n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n   \nNow we reduce the A rule...\n\n    A ::= A "h" "g"\n    \n        | A "f"\n    \n        | A_\n    \n        ;\n    \n    B ::= A "h"\n    \n        | B_\n\n        ;\n        \n   B_ ::= "c" ;\n    \n   A_ ::= B_ "g"\n    \n        | "e"\n    \n        ;\n\n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n        \n\n--------------------------------------------\n\nWe go from here...\n\n    A ::= B "c"\n    \n        | A "h"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "f" "g"\n    \n        | "c"\n\n        ;\n                \n...to here:\n\n    A ::= A_ ( "h" | ( "f" "g" ) )* ;\n    \n    B ::= A "f" "g"\n    \n        | B_\n\n        ;\n    \n   A_ ::= B_ "c"\n    \n        | "e"\n    \n        ;\n\n   B_ ::= "c"\n\n        | "d"\n\n        ;        \n    \n--------------------------------------------\n\nTHe following rules mix direct and indirect left-recursion.\n\nNote that the directly left recursive definition is a sibling of the *implicitly* left recursive definition.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n\nA little thought should convince that these rules will match the following:\n\ne(f|g)*\n\nNow note that the directly left recursive definition forced us to do the substitution in the following direction:\n\n    A ::= A "g"\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n        \nIn fact we *cannot* substitute the other way because we must leave the B indirectly left recursive definition in place.\n\nRearranging:\n\n    A ::= A ( "g" | "f" )\n\n        | "e"\n    \n        ;\n        \nAnd now we rewrite:\n\n    A ::= A_ ( "g" | "f" )* ;\n        \n   A_ ::= "e" ;\n\nNow consider tHe following rules that also mix direct and indirect left-recursion.\n\nHowever, note that in this case the directly left recursive definition is a sibling of the *indirectly* left recursive definition.\n    \n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\nThis time we have to substitute A\'s definitions into the indirectly left recursive definition:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | B "g"\n    \n        | "e" "g"\n\n        ;\n\nRearranging:    \n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B ( "f" | "g" )\n    \n        | "e" "g"\n\n        ;\n\nNow rewriting:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B_ ( "f" | "g" )* ;\n\n   B_ ::= "e" "g" ;\n\nSo the moral is that eliminating indirect left recursion amounts to a rearrangement to direct left recursion...\n\n...and then from there, combining any directly left recursive definitions into on, before the usual rewriting.\n\nBy this token the following rules cannot be rewritten, at least not easily...\n\n    A ::= B\n\n        | A "e"\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\n...because we cannot get all the directly left recursive rules in one rule or the other.\n\nOr, at least, we can be forgiven for not trying.\n\n--------------------------------------------\n\nThe following rules...\n \nS ::= A "f"\n\n    | "e"\n    \n    ; \n    \nA ::= S "h" \n\n    | "g"\n    \n    ;  \n      \n...are rewritten to:\n\nS  ::= A "f"\n\n     | S_\n\n     ;\n\nA  ::= A_ ( "f" "h" )+? ;\n\nA_ ::= S_ "h"\n\n     | "g"\n\n     ;\n\nS_ ::= "e" ;\n\nLooking at the original rules, the following content will match:\n\nS -> A f or e\n\nA f -> S hf or gf\n\nS hf -> A fhf or ehf\n\nA fhf -> S hfhf or gfhf\n\netc\n\nSo we get e(hf)* or gf(hf)*\n\nIt is worth pointing out that these rewrite rules, although they allow us to deal with left recursion by hand, so to speak, would still result in an algorithm that would not terminate.\n\nChecking the rewritten rules in the same manner, immediately writing S_ as e wherever we encounter it: \n\nS -> A f or e\n\nA f -> A_ (fh)+ f\n\nA_ (fh)+ f -> e h (fh)+ f or g (fh)+ f\n\nNow e h(fh)+ f is just e(fh)+ and combined with e gives e (fh)* whilst g(fh)+ f is actually gf(hf)* and we are done.\n \n--------------------------------------------\n\nWe need to get this one working:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n--------------------------------------------\n\nThis one has both direct and indirect left recursion.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n    \n--------------------------------------------\n\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recursion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions. \n  \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIC8vIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpO1xuXG4gICAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBsZXQgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgaW50ZXJtZWRpYXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuIFxuICAgIEEgOjo9IEIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcImNnZmhnXCI7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJTXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiLlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5gXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVEhFIFJFRFVDRURQQVJURlJPTVBBUlQoKSBVU0FHRSBJTiBUSEUgUEFSVCBVVElMSVRJRVMgTE9PS1MgV1JPTkcuIElUIElTIEFMV0FZUyBBTkQgT05MWSBDQUxMRUQgV0lUSCBBIFJVTEVOQU1FIFBBUlQsIFNPIFdIWSBUSEUgTkVFRCBGT1IgUkVDVVJTSU9OP1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XZSBpbnRyb2R1Y2UgYSByZXBlYXRlZCBhcyB3ZWxsIGFzIGEgcmVkdWNlZCBydWxlOlxuXG4gICAgIEEgOjo9IEIgXCJnXCJcbiAgICBcbiAgICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgQn5cbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuICAgQn4gOjo9IFwiaFwiIDtcbiBcbk5vdyB3aGVuIHdlIGRvIHRoZSBzdWJzdGl0dXRpb24uLi5cbiBcbiAgICAgQSA6Oj0gQSBCfiBcImdcIlxuICAgIFxuICAgICAgICAgfCBCXyBcImdcIlxuXG4gICAgICAgICB8IEEgXCJmXCJcblxuICAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuICAgQn4gOjo9IFwiaFwiIDtcblxuLi4ud2Uga2VlcCB0aGUgQSB0byBCIHRvIEEgcmVsYXRpb24gd2hlbiB3ZSBtYXRjaCBcImhcIi5cblxuQ29udGludWluZywgd2UgcmVkdWNlIHRoZSBBIHJ1bGUuLi5cblxuICAgICBBIDo6PSBBIEJ+IFwiZ1wiXG4gICAgXG4gICAgICAgICB8IEEgXCJmXCJcblxuICAgICAgICAgfCBBX1xuICAgIFxuICAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiIDtcblxuICAgQn4gOjo9IFwiaFwiIDtcblxuICAgQV8gOjo9IEJfIFwiZ1wiXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4uLi5tZXJnZSB0aGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMuLi5cblxuICAgICBBIDo6PSBBICggKCBCfiBcImdcIiApIHwgXCJmXCIgKVxuXG4gICAgICAgICB8IEFfXG4gICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuXG4gICBBXyA6Oj0gQl8gXCJnXCJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbi4uLmFuZCByZXdyaXRlOlxuXG4gICAgQSA6Oj0gQV8gKCAoIEJ+IFwiZ1wiICkgfCBcImZcIiApKiA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCIgO1xuXG4gICBCfiA6Oj0gXCJoXCIgO1xuXG4gICBBXyA6Oj0gQl8gXCJnXCJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbkluIGZhY3Qgbm90ZSB0aGF0IHdlIG1heSBoYXZlIHRvIG1lcmdlIHRoZSBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGZpcnN0bHksIHRvbyFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgaXMgYW4gaW50ZXJlc3RpbmcgY2FzZS4gV2UgbmVlZCB0byBtZXJnZSB0aGUgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uczpcblxuICAgIEEgOjo9IEIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBcImNcIlxuXG4gICAgICAgIDtcbiAgICAgICAgXG5CZWNhdXNlIHRoZSBBIHJ1bGUgaXMgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUsIHdlIG5lZWQgdG8gc3Vic3RpdHV0ZSBpbnRvIHRoYXQuIEZpcnN0LCB3ZSByZXdyaXRlIHRoZSBCIHJ1bGU6XG5cbiAgICBBIDo6PSBCIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgQl9cblxuICAgICAgICA7XG4gICAgICAgIFxuICAgQl8gOjo9IFwiY1wiIDtcbiAgICAgICAgXG5OZXh0IHdlIHN1YnN0aXR1dGUgdGhlIHJld3JpdHRlbiBCIHJ1bGUncyBkZWZpbml0aW9ucyBmb3IgYW55IG9jY3VyZW5jZSBvZiB0aGUgQiBydWxlIG5hbWUgcGFydCBpbiB0aGUgQSBydWxlJ3MgaW1wbGljaXRseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uczpcblxuICAgIEEgOjo9IEEgXCJoXCIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBCXyBcImdcIlxuICAgIFxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuICAgICAgICBcbiAgIEJfIDo6PSBcImNcIiA7XG4gICBcbk5vdyB3ZSByZWR1Y2UgdGhlIEEgcnVsZS4uLlxuXG4gICAgQSA6Oj0gQSBcImhcIiBcImdcIlxuICAgIFxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBBX1xuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImhcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuICAgICAgICBcbiAgIEJfIDo6PSBcImNcIiA7XG4gICAgXG4gICBBXyA6Oj0gQl8gXCJnXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG5cbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIFxuICAgICAgICBcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuV2UgZ28gZnJvbSBoZXJlLi4uXG5cbiAgICBBIDo6PSBCIFwiY1wiXG4gICAgXG4gICAgICAgIHwgQSBcImhcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiZlwiIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgXCJjXCJcblxuICAgICAgICA7XG4gICAgICAgICAgICAgICAgXG4uLi50byBoZXJlOlxuXG4gICAgQSA6Oj0gQV8gKCBcImhcIiB8ICggXCJmXCIgXCJnXCIgKSApKiA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImZcIiBcImdcIlxuICAgIFxuICAgICAgICB8IEJfXG5cbiAgICAgICAgO1xuICAgIFxuICAgQV8gOjo9IEJfIFwiY1wiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuXG4gICBCXyA6Oj0gXCJjXCJcblxuICAgICAgICB8IFwiZFwiXG5cbiAgICAgICAgOyAgICAgICAgXG4gICAgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5USGUgZm9sbG93aW5nIHJ1bGVzIG1peCBkaXJlY3QgYW5kIGluZGlyZWN0IGxlZnQtcmVjdXJzaW9uLlxuXG5Ob3RlIHRoYXQgdGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gaXMgYSBzaWJsaW5nIG9mIHRoZSAqaW1wbGljaXRseSogbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbi5cblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImdcIlxuICAgIFxuICAgICAgICA7XG5cbkEgbGl0dGxlIHRob3VnaHQgc2hvdWxkIGNvbnZpbmNlIHRoYXQgdGhlc2UgcnVsZXMgd2lsbCBtYXRjaCB0aGUgZm9sbG93aW5nOlxuXG5lKGZ8ZykqXG5cbk5vdyBub3RlIHRoYXQgdGhlIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gZm9yY2VkIHVzIHRvIGRvIHRoZSBzdWJzdGl0dXRpb24gaW4gdGhlIGZvbGxvd2luZyBkaXJlY3Rpb246XG5cbiAgICBBIDo6PSBBIFwiZ1wiXG5cbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgICAgICBcbkluIGZhY3Qgd2UgKmNhbm5vdCogc3Vic3RpdHV0ZSB0aGUgb3RoZXIgd2F5IGJlY2F1c2Ugd2UgbXVzdCBsZWF2ZSB0aGUgQiBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gaW4gcGxhY2UuXG5cblJlYXJyYW5naW5nOlxuXG4gICAgQSA6Oj0gQSAoIFwiZ1wiIHwgXCJmXCIgKVxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgICAgICBcbkFuZCBub3cgd2UgcmV3cml0ZTpcblxuICAgIEEgOjo9IEFfICggXCJnXCIgfCBcImZcIiApKiA7XG4gICAgICAgIFxuICAgQV8gOjo9IFwiZVwiIDtcblxuTm93IGNvbnNpZGVyIHRIZSBmb2xsb3dpbmcgcnVsZXMgdGhhdCBhbHNvIG1peCBkaXJlY3QgYW5kIGluZGlyZWN0IGxlZnQtcmVjdXJzaW9uLlxuXG5Ib3dldmVyLCBub3RlIHRoYXQgaW4gdGhpcyBjYXNlIHRoZSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGlzIGEgc2libGluZyBvZiB0aGUgKmluZGlyZWN0bHkqIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24uXG4gICAgXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEIgXCJmXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcblxuVGhpcyB0aW1lIHdlIGhhdmUgdG8gc3Vic3RpdHV0ZSBBJ3MgZGVmaW5pdGlvbnMgaW50byB0aGUgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uOlxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEIgXCJmXCJcbiAgICBcbiAgICAgICAgfCBCIFwiZ1wiXG4gICAgXG4gICAgICAgIHwgXCJlXCIgXCJnXCJcblxuICAgICAgICA7XG5cblJlYXJyYW5naW5nOiAgICBcblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBCICggXCJmXCIgfCBcImdcIiApXG4gICAgXG4gICAgICAgIHwgXCJlXCIgXCJnXCJcblxuICAgICAgICA7XG5cbk5vdyByZXdyaXRpbmc6XG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQl8gKCBcImZcIiB8IFwiZ1wiICkqIDtcblxuICAgQl8gOjo9IFwiZVwiIFwiZ1wiIDtcblxuU28gdGhlIG1vcmFsIGlzIHRoYXQgZWxpbWluYXRpbmcgaW5kaXJlY3QgbGVmdCByZWN1cnNpb24gYW1vdW50cyB0byBhIHJlYXJyYW5nZW1lbnQgdG8gZGlyZWN0IGxlZnQgcmVjdXJzaW9uLi4uXG5cbi4uLmFuZCB0aGVuIGZyb20gdGhlcmUsIGNvbWJpbmluZyBhbnkgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW50byBvbiwgYmVmb3JlIHRoZSB1c3VhbCByZXdyaXRpbmcuXG5cbkJ5IHRoaXMgdG9rZW4gdGhlIGZvbGxvd2luZyBydWxlcyBjYW5ub3QgYmUgcmV3cml0dGVuLCBhdCBsZWFzdCBub3QgZWFzaWx5Li4uXG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBBIFwiZVwiXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQiBcImZcIlxuICAgIFxuICAgICAgICB8IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuXG4uLi5iZWNhdXNlIHdlIGNhbm5vdCBnZXQgYWxsIHRoZSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBydWxlcyBpbiBvbmUgcnVsZSBvciB0aGUgb3RoZXIuXG5cbk9yLCBhdCBsZWFzdCwgd2UgY2FuIGJlIGZvcmdpdmVuIGZvciBub3QgdHJ5aW5nLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGUgZm9sbG93aW5nIHJ1bGVzLi4uXG4gXG5TIDo6PSBBIFwiZlwiXG5cbiAgICB8IFwiZVwiXG4gICAgXG4gICAgOyBcbiAgICBcbkEgOjo9IFMgXCJoXCIgXG5cbiAgICB8IFwiZ1wiXG4gICAgXG4gICAgOyAgXG4gICAgICBcbi4uLmFyZSByZXdyaXR0ZW4gdG86XG5cblMgIDo6PSBBIFwiZlwiXG5cbiAgICAgfCBTX1xuXG4gICAgIDtcblxuQSAgOjo9IEFfICggXCJmXCIgXCJoXCIgKSs/IDtcblxuQV8gOjo9IFNfIFwiaFwiXG5cbiAgICAgfCBcImdcIlxuXG4gICAgIDtcblxuU18gOjo9IFwiZVwiIDtcblxuTG9va2luZyBhdCB0aGUgb3JpZ2luYWwgcnVsZXMsIHRoZSBmb2xsb3dpbmcgY29udGVudCB3aWxsIG1hdGNoOlxuXG5TIC0+IEEgZiBvciBlXG5cbkEgZiAtPiBTIGhmIG9yIGdmXG5cblMgaGYgLT4gQSBmaGYgb3IgZWhmXG5cbkEgZmhmIC0+IFMgaGZoZiBvciBnZmhmXG5cbmV0Y1xuXG5TbyB3ZSBnZXQgZShoZikqIG9yIGdmKGhmKSpcblxuSXQgaXMgd29ydGggcG9pbnRpbmcgb3V0IHRoYXQgdGhlc2UgcmV3cml0ZSBydWxlcywgYWx0aG91Z2ggdGhleSBhbGxvdyB1cyB0byBkZWFsIHdpdGggbGVmdCByZWN1cnNpb24gYnkgaGFuZCwgc28gdG8gc3BlYWssIHdvdWxkIHN0aWxsIHJlc3VsdCBpbiBhbiBhbGdvcml0aG0gdGhhdCB3b3VsZCBub3QgdGVybWluYXRlLlxuXG5DaGVja2luZyB0aGUgcmV3cml0dGVuIHJ1bGVzIGluIHRoZSBzYW1lIG1hbm5lciwgaW1tZWRpYXRlbHkgd3JpdGluZyBTXyBhcyBlIHdoZXJldmVyIHdlIGVuY291bnRlciBpdDogXG5cblMgLT4gQSBmIG9yIGVcblxuQSBmIC0+IEFfIChmaCkrIGZcblxuQV8gKGZoKSsgZiAtPiBlIGggKGZoKSsgZiBvciBnIChmaCkrIGZcblxuTm93IGUgaChmaCkrIGYgaXMganVzdCBlKGZoKSsgYW5kIGNvbWJpbmVkIHdpdGggZSBnaXZlcyBlIChmaCkqIHdoaWxzdCBnKGZoKSsgZiBpcyBhY3R1YWxseSBnZihoZikqIGFuZCB3ZSBhcmUgZG9uZS5cbiBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldlIG5lZWQgdG8gZ2V0IHRoaXMgb25lIHdvcmtpbmc6XG5cbkEgOjo9IEMgXCJmXCJcblxuICAgIHwgQlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG4gXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGlzIG9uZSBoYXMgYm90aCBkaXJlY3QgYW5kIGluZGlyZWN0IGxlZnQgcmVjdXJzaW9uLlxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblxuVGhpcyBvbmUgbmVlZHMgZnVydGhlciBpbnZlc3RpZ2F0aW9uLiBUcnkgcmVtb3ZpbmcgdGhlIFwiZVwiIGRlZmluaXRpb24gYW5kIHRoZW4gcmVtb3ZlIGVhY2gga2luZCBvZiBsZWZ0IHJlY3Vyc2lvbiBpbiB0dXJuLlxuXG4gICAgQSA6Oj0gQSBcImZcIlxuICAgIFxuICAgICAgICB8IEJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQ1xuICAgIFxuICAgICAgICB8IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEMgOjo9IFwiaFwiIDtcbiAgICBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgb25lIGlzIGFsc28gY2F1c2luZyBwcm9ibGVtcyBhbHRob3VnaCB0aGUgYWxnb3JpdGhtIGlzIGluIHRyYW5zaXRpb246XG5cbkEgOjo9IEJcblxuICAgIHwgQyBcImZcIlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiBzaW1wbGlmeWluZyB0aGUgcmV3cml0ZSBwcm9jZXNzLiBUaGUgZm9sbG93aW5nLi4uXG5cbkEgOjo9IEEuLi4gXCJoXCIgXCJnXCIgfCBcImZcIiA7XG5cbi4uLmNhbiBpbiBmYWN0IGJlIHJld3JpdHRlbjpcblxuQSA6Oj0gQV8uLi4gQX4rPyA7XG5cbkFfIDo6PSBcImZcIiA7XG5cbkF+IDo6PSBcImhcIiBcImdcIiA7XG5cbkluIGZhY3Qgd2UgY291bGQgZXZlbiBkbyBhd2F5IHdpdGggdGhlIHJlcGVhdGVkIHJ1bGUgYW5kIFwiaW5saW5lXCIgaXRzIGRlZmluaXRpb246XG5cbkEgOjo9IEFfLi4uICggXCJoXCIgXCJnXCIgKSs/IDtcblxuQV8gOjo9IFwiZlwiIDtcblxuQWdhaW4gd2UgbWFrZSB1c2Ugb2YgdGhlIHNlcXVlbmNlIG9mIHBhcnRzIHBhcnQgZXh0ZW50aW9uIHRvIHRoZSBCTkYuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoZSBuZXcgcHJvY2VzcyB3b3VsZCBiZTpcblxuMS4gRmluZCBhbGwgb2YgdGhlIGRpcmVjdGx5IGFuZCBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGJ5IGEgZGVwdGggZmlyc3Qgc2VhcmNoIG92ZXIgYWxsIHJlY3Vyc2l2ZSBkZWZpbml0aW9uc1xuXG4yLiBSZXdyaXRlIGJvdGggdGhlIHRoZSBkaXJlY3RseSBhbmQgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhcyB3ZWxsIGFzIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIHJlcGVhdGVkIHJ1bGVzXG5cbjMuIFJld3JpdGUgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCByZWN1cnNpdmUgcnVsZXMgYXMgd2VsbCBhcyBjcmUgXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldoYXQgaWYgdGhlcmUgYXJlIHR3byBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgc2FtZSBydWxlP1xuXG5BIDo6PSBBIFwiaFwiXG5cbiAgICB8IEEuLi4gXCJnXCJcbiAgICBcbiAgICB8IFwiZlwiXG4gICAgXG4gICAgO1xuICAgICAgICBcbkEgIDo6PSBBXy4uLiAoIFwiaFwiIHwgXCJnXCIgKSs/IDtcbiAgICBcbkFfICA6Oj0gXCJmXCIgOyAgICBcblxuVGhlIG9ubHkgcHJvYmxlbSB3aXRoIHRoaXMgc2VlbXMgdG8gYmUgZGVhbGluZyB3aXRoIGxvb2stYWhlYWQuIE90aGVyd2lzZSB3ZSBjYW4gc2ltcGx5IGNvbWJpbmUgdGhlIHR3byByZXBlYXRlZCBzdWItZGVmaW5pdGlvbnMuIFxuICBcbmBcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJVTkFTU0lHTkVEX0VOVFJZIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJhZ3JhcGgiLCJSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3giLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0U3RhcnRSdWxlTmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNs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