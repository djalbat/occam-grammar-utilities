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
var _removeOrRenameReducedNodes = _interopRequireDefault(require("./checkbox/removeOrRenameReducedNodes"));
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
                    var removeOrRenameReducedNodesCheckboxChecked = this.isRemoveOrRenameReducedNodesCheckboxChecked();
                    if (removeOrRenameReducedNodesCheckboxChecked) {
                        (0, _index).removeOrRenameReducedNodes(node);
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_removeOrRenameReducedNodes.default, {
                        onChange: changeHandler,
                        checked: true
                    }), "Remove or rename reduced nodes"))))
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
_defineProperty(View, "initialBNF", '\n \n    A ::= A "f" "g"\n    \n        | A "h"\n    \n        | "e"\n    \n        ;\n    \n');
_defineProperty(View, "initialContent", "efgh");
_defineProperty(View, "initialStartRuleName", "S");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n--------------------------------------------\n\nWe go from here...\n\n    A ::= B "c"\n    \n        | A "h"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "f" "g"\n    \n        | "c"\n\n        ;\n                \n...to here:\n\n    A ::= A_ ( "h" | ( "f" "g" ) )* ;\n    \n    B ::= A "f" "g"\n    \n        | B_\n\n        ;\n    \n   A_ ::= B_ "c"\n    \n        | "e"\n    \n        ;\n\n   B_ ::= "c"\n\n        | "d"\n\n        ;        \n    \n--------------------------------------------\n\nTHe following rules mix direct and indirect left-recursion.\n\nNote that the directly left recursive definition is a sibling of the *implicitly* left recursive definition.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n\nA little thought should convince that these rules will match the following:\n\ne(f|g)*\n\nNow note that the directly left recursive definition forced us to do the substitution in the following direction:\n\n    A ::= A "g"\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n        \nIn fact we *cannot* substitute the other way because we must leave the B indirectly left recursive definition in place.\n\nRearranging:\n\n    A ::= A ( "g" | "f" )\n\n        | "e"\n    \n        ;\n        \nAnd now we rewrite:\n\n    A ::= A_ ( "g" | "f" )* ;\n        \n   A_ ::= "e" ;\n\nNow consider tHe following rules that also mix direct and indirect left-recursion.\n\nHowever, note that in this case the directly left recursive definition is a sibling of the *indirectly* left recursive definition.\n    \n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\nThis time we have to substitute A\'s definitions into the indirectly left recursive definition:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | B "g"\n    \n        | "e" "g"\n\n        ;\n\nRearranging:    \n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B ( "f" | "g" )\n    \n        | "e" "g"\n\n        ;\n\nNow rewriting:\n\n    A ::= B\n\n        | "e"\n    \n        ;\n    \n    B ::= B_ ( "f" | "g" )* ;\n\n   B_ ::= "e" "g" ;\n\nSo the moral is that eliminating indirect left recursion amounts to a rearrangement to direct left recursion...\n\n...and then from there, combining any directly left recursive definitions into on, before the usual rewriting.\n\nBy this token the following rules cannot be rewritten, at least not easily...\n\n    A ::= B\n\n        | A "e"\n\n        | "e"\n    \n        ;\n    \n    B ::= B "f"\n    \n        | A "g"\n    \n        ;\n\n...because we cannot get all the directly left recursive rules in one rule or the other.\n\nOr, at least, we can be forgiven for not trying.\n\n--------------------------------------------\n\nThe following rules...\n \nS ::= A "f"\n\n    | "e"\n    \n    ; \n    \nA ::= S "h" \n\n    | "g"\n    \n    ;  \n      \n...are rewritten to:\n\nS  ::= A "f"\n\n     | S_\n\n     ;\n\nA  ::= A_ ( "f" "h" )+? ;\n\nA_ ::= S_ "h"\n\n     | "g"\n\n     ;\n\nS_ ::= "e" ;\n\nLooking at the original rules, the following content will match:\n\nS -> A f or e\n\nA f -> S hf or gf\n\nS hf -> A fhf or ehf\n\nA fhf -> S hfhf or gfhf\n\netc\n\nSo we get e(hf)* or gf(hf)*\n\nIt is worth pointing out that these rewrite rules, although they allow us to deal with left recursion by hand, so to speak, would still result in an algorithm that would not terminate.\n\nChecking the rewritten rules in the same manner, immediately writing S_ as e wherever we encounter it: \n\nS -> A f or e\n\nA f -> A_ (fh)+ f\n\nA_ (fh)+ f -> e h (fh)+ f or g (fh)+ f\n\nNow e h(fh)+ f is just e(fh)+ and combined with e gives e (fh)* whilst g(fh)+ f is actually gf(hf)* and we are done.\n \n--------------------------------------------\n\nWe need to get this one working:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n--------------------------------------------\n\nThis one has both direct and indirect left recursion.\n\n    A ::= B\n\n        | A "f"\n    \n        | "e"\n    \n        ;\n    \n    B ::= A "g"\n    \n        ;\n    \n--------------------------------------------\n\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recursion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions. \n  \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSByZWR1Y2VkIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuIFxuICAgIEEgOjo9IEEgXCJmXCIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBBIFwiaFwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcImVmZ2hcIjtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldlIGdvIGZyb20gaGVyZS4uLlxuXG4gICAgQSA6Oj0gQiBcImNcIlxuICAgIFxuICAgICAgICB8IEEgXCJoXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImZcIiBcImdcIlxuICAgIFxuICAgICAgICB8IFwiY1wiXG5cbiAgICAgICAgO1xuICAgICAgICAgICAgICAgIFxuLi4udG8gaGVyZTpcblxuICAgIEEgOjo9IEFfICggXCJoXCIgfCAoIFwiZlwiIFwiZ1wiICkgKSogO1xuICAgIFxuICAgIEIgOjo9IEEgXCJmXCIgXCJnXCJcbiAgICBcbiAgICAgICAgfCBCX1xuXG4gICAgICAgIDtcbiAgICBcbiAgIEFfIDo6PSBCXyBcImNcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcblxuICAgQl8gOjo9IFwiY1wiXG5cbiAgICAgICAgfCBcImRcIlxuXG4gICAgICAgIDsgICAgICAgIFxuICAgIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVEhlIGZvbGxvd2luZyBydWxlcyBtaXggZGlyZWN0IGFuZCBpbmRpcmVjdCBsZWZ0LXJlY3Vyc2lvbi5cblxuTm90ZSB0aGF0IHRoZSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGlzIGEgc2libGluZyBvZiB0aGUgKmltcGxpY2l0bHkqIGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24uXG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuXG5BIGxpdHRsZSB0aG91Z2h0IHNob3VsZCBjb252aW5jZSB0aGF0IHRoZXNlIHJ1bGVzIHdpbGwgbWF0Y2ggdGhlIGZvbGxvd2luZzpcblxuZShmfGcpKlxuXG5Ob3cgbm90ZSB0aGF0IHRoZSBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGZvcmNlZCB1cyB0byBkbyB0aGUgc3Vic3RpdHV0aW9uIGluIHRoZSBmb2xsb3dpbmcgZGlyZWN0aW9uOlxuXG4gICAgQSA6Oj0gQSBcImdcIlxuXG4gICAgICAgIHwgQSBcImZcIlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICAgICAgXG5JbiBmYWN0IHdlICpjYW5ub3QqIHN1YnN0aXR1dGUgdGhlIG90aGVyIHdheSBiZWNhdXNlIHdlIG11c3QgbGVhdmUgdGhlIEIgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIGluIHBsYWNlLlxuXG5SZWFycmFuZ2luZzpcblxuICAgIEEgOjo9IEEgKCBcImdcIiB8IFwiZlwiIClcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICAgICAgXG5BbmQgbm93IHdlIHJld3JpdGU6XG5cbiAgICBBIDo6PSBBXyAoIFwiZ1wiIHwgXCJmXCIgKSogO1xuICAgICAgICBcbiAgIEFfIDo6PSBcImVcIiA7XG5cbk5vdyBjb25zaWRlciB0SGUgZm9sbG93aW5nIHJ1bGVzIHRoYXQgYWxzbyBtaXggZGlyZWN0IGFuZCBpbmRpcmVjdCBsZWZ0LXJlY3Vyc2lvbi5cblxuSG93ZXZlciwgbm90ZSB0aGF0IGluIHRoaXMgY2FzZSB0aGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBpcyBhIHNpYmxpbmcgb2YgdGhlICppbmRpcmVjdGx5KiBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uLlxuICAgIFxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBCIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQSBcImdcIlxuICAgIFxuICAgICAgICA7XG5cblRoaXMgdGltZSB3ZSBoYXZlIHRvIHN1YnN0aXR1dGUgQSdzIGRlZmluaXRpb25zIGludG8gdGhlIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbjpcblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBCIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQiBcImdcIlxuICAgIFxuICAgICAgICB8IFwiZVwiIFwiZ1wiXG5cbiAgICAgICAgO1xuXG5SZWFycmFuZ2luZzogICAgXG5cbiAgICBBIDo6PSBCXG5cbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQiAoIFwiZlwiIHwgXCJnXCIgKVxuICAgIFxuICAgICAgICB8IFwiZVwiIFwiZ1wiXG5cbiAgICAgICAgO1xuXG5Ob3cgcmV3cml0aW5nOlxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEJfICggXCJmXCIgfCBcImdcIiApKiA7XG5cbiAgIEJfIDo6PSBcImVcIiBcImdcIiA7XG5cblNvIHRoZSBtb3JhbCBpcyB0aGF0IGVsaW1pbmF0aW5nIGluZGlyZWN0IGxlZnQgcmVjdXJzaW9uIGFtb3VudHMgdG8gYSByZWFycmFuZ2VtZW50IHRvIGRpcmVjdCBsZWZ0IHJlY3Vyc2lvbi4uLlxuXG4uLi5hbmQgdGhlbiBmcm9tIHRoZXJlLCBjb21iaW5pbmcgYW55IGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGludG8gb24sIGJlZm9yZSB0aGUgdXN1YWwgcmV3cml0aW5nLlxuXG5CeSB0aGlzIHRva2VuIHRoZSBmb2xsb3dpbmcgcnVsZXMgY2Fubm90IGJlIHJld3JpdHRlbiwgYXQgbGVhc3Qgbm90IGVhc2lseS4uLlxuXG4gICAgQSA6Oj0gQlxuXG4gICAgICAgIHwgQSBcImVcIlxuXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IEIgXCJmXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcblxuLi4uYmVjYXVzZSB3ZSBjYW5ub3QgZ2V0IGFsbCB0aGUgZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgcnVsZXMgaW4gb25lIHJ1bGUgb3IgdGhlIG90aGVyLlxuXG5PciwgYXQgbGVhc3QsIHdlIGNhbiBiZSBmb3JnaXZlbiBmb3Igbm90IHRyeWluZy5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIGZvbGxvd2luZyBydWxlcy4uLlxuIFxuUyA6Oj0gQSBcImZcIlxuXG4gICAgfCBcImVcIlxuICAgIFxuICAgIDsgXG4gICAgXG5BIDo6PSBTIFwiaFwiIFxuXG4gICAgfCBcImdcIlxuICAgIFxuICAgIDsgIFxuICAgICAgXG4uLi5hcmUgcmV3cml0dGVuIHRvOlxuXG5TICA6Oj0gQSBcImZcIlxuXG4gICAgIHwgU19cblxuICAgICA7XG5cbkEgIDo6PSBBXyAoIFwiZlwiIFwiaFwiICkrPyA7XG5cbkFfIDo6PSBTXyBcImhcIlxuXG4gICAgIHwgXCJnXCJcblxuICAgICA7XG5cblNfIDo6PSBcImVcIiA7XG5cbkxvb2tpbmcgYXQgdGhlIG9yaWdpbmFsIHJ1bGVzLCB0aGUgZm9sbG93aW5nIGNvbnRlbnQgd2lsbCBtYXRjaDpcblxuUyAtPiBBIGYgb3IgZVxuXG5BIGYgLT4gUyBoZiBvciBnZlxuXG5TIGhmIC0+IEEgZmhmIG9yIGVoZlxuXG5BIGZoZiAtPiBTIGhmaGYgb3IgZ2ZoZlxuXG5ldGNcblxuU28gd2UgZ2V0IGUoaGYpKiBvciBnZihoZikqXG5cbkl0IGlzIHdvcnRoIHBvaW50aW5nIG91dCB0aGF0IHRoZXNlIHJld3JpdGUgcnVsZXMsIGFsdGhvdWdoIHRoZXkgYWxsb3cgdXMgdG8gZGVhbCB3aXRoIGxlZnQgcmVjdXJzaW9uIGJ5IGhhbmQsIHNvIHRvIHNwZWFrLCB3b3VsZCBzdGlsbCByZXN1bHQgaW4gYW4gYWxnb3JpdGhtIHRoYXQgd291bGQgbm90IHRlcm1pbmF0ZS5cblxuQ2hlY2tpbmcgdGhlIHJld3JpdHRlbiBydWxlcyBpbiB0aGUgc2FtZSBtYW5uZXIsIGltbWVkaWF0ZWx5IHdyaXRpbmcgU18gYXMgZSB3aGVyZXZlciB3ZSBlbmNvdW50ZXIgaXQ6IFxuXG5TIC0+IEEgZiBvciBlXG5cbkEgZiAtPiBBXyAoZmgpKyBmXG5cbkFfIChmaCkrIGYgLT4gZSBoIChmaCkrIGYgb3IgZyAoZmgpKyBmXG5cbk5vdyBlIGgoZmgpKyBmIGlzIGp1c3QgZShmaCkrIGFuZCBjb21iaW5lZCB3aXRoIGUgZ2l2ZXMgZSAoZmgpKiB3aGlsc3QgZyhmaCkrIGYgaXMgYWN0dWFsbHkgZ2YoaGYpKiBhbmQgd2UgYXJlIGRvbmUuXG4gXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XZSBuZWVkIHRvIGdldCB0aGlzIG9uZSB3b3JraW5nOlxuXG5BIDo6PSBDIFwiZlwiXG5cbiAgICB8IEJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhpcyBvbmUgaGFzIGJvdGggZGlyZWN0IGFuZCBpbmRpcmVjdCBsZWZ0IHJlY3Vyc2lvbi5cblxuICAgIEEgOjo9IEJcblxuICAgICAgICB8IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQSBcImdcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5cblRoaXMgb25lIG5lZWRzIGZ1cnRoZXIgaW52ZXN0aWdhdGlvbi4gVHJ5IHJlbW92aW5nIHRoZSBcImVcIiBkZWZpbml0aW9uIGFuZCB0aGVuIHJlbW92ZSBlYWNoIGtpbmQgb2YgbGVmdCByZWN1cnNpb24gaW4gdHVybi5cblxuICAgIEEgOjo9IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBCXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IENcbiAgICBcbiAgICAgICAgfCBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBDIDo6PSBcImhcIiA7XG4gICAgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGlzIG9uZSBpcyBhbHNvIGNhdXNpbmcgcHJvYmxlbXMgYWx0aG91Z2ggdGhlIGFsZ29yaXRobSBpcyBpbiB0cmFuc2l0aW9uOlxuXG5BIDo6PSBCXG5cbiAgICB8IEMgXCJmXCJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2Ygc2ltcGxpZnlpbmcgdGhlIHJld3JpdGUgcHJvY2Vzcy4gVGhlIGZvbGxvd2luZy4uLlxuXG5BIDo6PSBBLi4uIFwiaFwiIFwiZ1wiIHwgXCJmXCIgO1xuXG4uLi5jYW4gaW4gZmFjdCBiZSByZXdyaXR0ZW46XG5cbkEgOjo9IEFfLi4uIEF+Kz8gO1xuXG5BXyA6Oj0gXCJmXCIgO1xuXG5BfiA6Oj0gXCJoXCIgXCJnXCIgO1xuXG5JbiBmYWN0IHdlIGNvdWxkIGV2ZW4gZG8gYXdheSB3aXRoIHRoZSByZXBlYXRlZCBydWxlIGFuZCBcImlubGluZVwiIGl0cyBkZWZpbml0aW9uOlxuXG5BIDo6PSBBXy4uLiAoIFwiaFwiIFwiZ1wiICkrPyA7XG5cbkFfIDo6PSBcImZcIiA7XG5cbkFnYWluIHdlIG1ha2UgdXNlIG9mIHRoZSBzZXF1ZW5jZSBvZiBwYXJ0cyBwYXJ0IGV4dGVudGlvbiB0byB0aGUgQk5GLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGUgbmV3IHByb2Nlc3Mgd291bGQgYmU6XG5cbjEuIEZpbmQgYWxsIG9mIHRoZSBkaXJlY3RseSBhbmQgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBieSBhIGRlcHRoIGZpcnN0IHNlYXJjaCBvdmVyIGFsbCByZWN1cnNpdmUgZGVmaW5pdGlvbnNcblxuMi4gUmV3cml0ZSBib3RoIHRoZSB0aGUgZGlyZWN0bHkgYW5kIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYXMgd2VsbCBhcyBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyByZXBlYXRlZCBydWxlc1xuXG4zLiBSZXdyaXRlIHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgcmVjdXJzaXZlIHJ1bGVzIGFzIHdlbGwgYXMgY3JlIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XaGF0IGlmIHRoZXJlIGFyZSB0d28gZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW4gdGhlIHNhbWUgcnVsZT9cblxuQSA6Oj0gQSBcImhcIlxuXG4gICAgfCBBLi4uIFwiZ1wiXG4gICAgXG4gICAgfCBcImZcIlxuICAgIFxuICAgIDtcbiAgICAgICAgXG5BICA6Oj0gQV8uLi4gKCBcImhcIiB8IFwiZ1wiICkrPyA7XG4gICAgXG5BXyAgOjo9IFwiZlwiIDsgICAgXG5cblRoZSBvbmx5IHByb2JsZW0gd2l0aCB0aGlzIHNlZW1zIHRvIGJlIGRlYWxpbmcgd2l0aCBsb29rLWFoZWFkLiBPdGhlcndpc2Ugd2UgY2FuIHNpbXBseSBjb21iaW5lIHRoZSB0d28gcmVwZWF0ZWQgc3ViLWRlZmluaXRpb25zLiBcbiAgXG5gXG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3IiwiZ2V0UGFyc2VUcmVlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyIsImFzUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFZixJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFDSCxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFDYixJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDeUIsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ0UsSUFBQSxNQUFVLFdBQVYsVUFBVSxDQUFBO0FBRXZFLElBQUEsVUFBYSxrQ0FBYixhQUFhLEVBQUE7QUFDWixJQUFBLFdBQWMsa0NBQWQsY0FBYyxFQUFBO0FBQ2IsSUFBQSxTQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDaEIsSUFBQSxJQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDWixJQUFBLFFBQW9CLGtDQUFwQixvQkFBb0IsRUFBQTtBQUNsQixJQUFBLFVBQXNCLGtDQUF0QixzQkFBc0IsRUFBQTtBQUNyQixJQUFBLGNBQXVCLGtDQUF2Qix1QkFBdUIsRUFBQTtBQUN0QixJQUFBLGVBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUN4QixJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUNULElBQUEsMkJBQXVDLGtDQUF2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