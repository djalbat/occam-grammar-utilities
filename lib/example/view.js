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
_defineProperty(View, "initialBNF", '\n \nS  ::= A "g"\n\n     | S_\n    \n     ;  \n     \nS_ ::= "e" ;     \n\nA  ::= A_ ( "g" "f" )+? ;  \n\nA_ ::= S_ "f" \n\n     | "g"\n    \n     ;  \n  \n');
_defineProperty(View, "initialContent", "gf");
_defineProperty(View, "initialStartRuleName", "S");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\nThe following rules...\n\nIsn\'t it the case that we always loose information from the parse tree when we eliminate indirect left recursion in this way?\n\nOr does the fact that we now have reduced rules, the corresponding notes of which will get renamed, will preserve the meaning?    \n\nAlthough there are two left recursive definitions and either could be rewritten, the fact is that we only need to rewrite one in order to eliminate the left recursion overall.\n    \nS ::= A "g"\n\n    | "e"\n    \n    ; \n    \nA ::= S "f" \n\n    | "g"\n    \n    ;  \n    \n=======================\n    \nS  ::= A "g"\n\n     | S_\n    \n     ;  \n     \nS_ ::= "e" ;     \n  \nA  ::= S "f" \n\n     | "g"\n    \n     ;\n     \nNote that we do not rewrite A immediately. First we incorporate S\'s definitions...      \n\nA  ::= A "g" "f" \n\n     | S_ "f" \n\n     | "g"\n    \n     ;  \n\n...and now we reduce:\n\nA  ::= A "g" "f" \n\n     | A_\n    \n     ;  \n\nA_ ::= S_ "f" \n\n     | "g"\n    \n     ;  \n\n\nA  ::= A_ ( "g" "f" )+? ;  \n\nTo conclude:\n\nS  ::= A "g"\n\n     | S_\n    \n     ;  \n     \nS_ ::= "e" ;     \n\nA  ::= A_ ( "g" "f" )+? ;  \n\nA_ ::= S_ "f" \n\n     | "g"\n    \n     ;  \n\n\n\n\n\n\n\n\n\n\n\n\n\nSo if we match ef, for example:\n\n          S(0-1)         \n             |           \n          A(0-1)         \n             |           \n      --------------     \n      |            |     \n    S_(0)    f[custom](1)\n      |                  \ne[custom](0)             \n\nYes!\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n     \n...which does not change anything aside from adding nodes to the parse tree which can be subsequently removed.\n\nWe now substitute S into A...\n  \nA  ::= A "f" \n\n     | S_ "f" \n\n     | A_\n    \n     ;  \n     \n...create a new reduced rule:\n\nA  ::= A "f" \n\n     | A__\n    \n     ;  \n     \n...where\n\nA__ ::= S_ "f"\n\n      | A_\n      \n      ;\n      \nThus...\n\nA ::= A__ "f"+? ;      \n\n...and: \n\nA__ ::= S_ "f"\n\n      | "g"\n     \n      ;\n\nTo conclude:\n\nS   ::= A\n\n      | S_\n    \n      ;  \n  \nS_  ::= "e" ;  \n\nA   ::= A__ "f"+? ;      \n\nA__ ::= S_ "f"\n\n      | "g"\n     \n      ;\n\n\n\nA   ::= ( S_ "f" | A_ ) "f"+? ;      \n\nA_ ::=  "g" ;\n\n\nThis is slightly different to the previous effort:\n\nS  ::= A\n\n     | S_\n    \n     ;  \n  \nS_ ::= "e" ;  \n  \nA  ::= A_ "f"+? \n\n     | S_ "f"+? \n\n     | A_\n    \n     ;  \n\nA_ ::= "g" ;  \n  \n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n--------------------------------------------\n\nHow come this works...\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n...but this doesn\'t:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n\n----------------------------------------\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions.\n   \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSByZWR1Y2VkIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuIFxuUyAgOjo9IEEgXCJnXCJcblxuICAgICB8IFNfXG4gICAgXG4gICAgIDsgIFxuICAgICBcblNfIDo6PSBcImVcIiA7ICAgICBcblxuQSAgOjo9IEFfICggXCJnXCIgXCJmXCIgKSs/IDsgIFxuXG5BXyA6Oj0gU18gXCJmXCIgXG5cbiAgICAgfCBcImdcIlxuICAgIFxuICAgICA7ICBcbiAgXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiZ2ZcIjtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmBcblxuVGhlIGZvbGxvd2luZyBydWxlcy4uLlxuXG5Jc24ndCBpdCB0aGUgY2FzZSB0aGF0IHdlIGFsd2F5cyBsb29zZSBpbmZvcm1hdGlvbiBmcm9tIHRoZSBwYXJzZSB0cmVlIHdoZW4gd2UgZWxpbWluYXRlIGluZGlyZWN0IGxlZnQgcmVjdXJzaW9uIGluIHRoaXMgd2F5P1xuXG5PciBkb2VzIHRoZSBmYWN0IHRoYXQgd2Ugbm93IGhhdmUgcmVkdWNlZCBydWxlcywgdGhlIGNvcnJlc3BvbmRpbmcgbm90ZXMgb2Ygd2hpY2ggd2lsbCBnZXQgcmVuYW1lZCwgd2lsbCBwcmVzZXJ2ZSB0aGUgbWVhbmluZz8gICAgXG5cbkFsdGhvdWdoIHRoZXJlIGFyZSB0d28gbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIGVpdGhlciBjb3VsZCBiZSByZXdyaXR0ZW4sIHRoZSBmYWN0IGlzIHRoYXQgd2Ugb25seSBuZWVkIHRvIHJld3JpdGUgb25lIGluIG9yZGVyIHRvIGVsaW1pbmF0ZSB0aGUgbGVmdCByZWN1cnNpb24gb3ZlcmFsbC5cbiAgICBcblMgOjo9IEEgXCJnXCJcblxuICAgIHwgXCJlXCJcbiAgICBcbiAgICA7IFxuICAgIFxuQSA6Oj0gUyBcImZcIiBcblxuICAgIHwgXCJnXCJcbiAgICBcbiAgICA7ICBcbiAgICBcbj09PT09PT09PT09PT09PT09PT09PT09XG4gICAgXG5TICA6Oj0gQSBcImdcIlxuXG4gICAgIHwgU19cbiAgICBcbiAgICAgOyAgXG4gICAgIFxuU18gOjo9IFwiZVwiIDsgICAgIFxuICBcbkEgIDo6PSBTIFwiZlwiIFxuXG4gICAgIHwgXCJnXCJcbiAgICBcbiAgICAgO1xuICAgICBcbk5vdGUgdGhhdCB3ZSBkbyBub3QgcmV3cml0ZSBBIGltbWVkaWF0ZWx5LiBGaXJzdCB3ZSBpbmNvcnBvcmF0ZSBTJ3MgZGVmaW5pdGlvbnMuLi4gICAgICBcblxuQSAgOjo9IEEgXCJnXCIgXCJmXCIgXG5cbiAgICAgfCBTXyBcImZcIiBcblxuICAgICB8IFwiZ1wiXG4gICAgXG4gICAgIDsgIFxuXG4uLi5hbmQgbm93IHdlIHJlZHVjZTpcblxuQSAgOjo9IEEgXCJnXCIgXCJmXCIgXG5cbiAgICAgfCBBX1xuICAgIFxuICAgICA7ICBcblxuQV8gOjo9IFNfIFwiZlwiIFxuXG4gICAgIHwgXCJnXCJcbiAgICBcbiAgICAgOyAgXG5cblxuQSAgOjo9IEFfICggXCJnXCIgXCJmXCIgKSs/IDsgIFxuXG5UbyBjb25jbHVkZTpcblxuUyAgOjo9IEEgXCJnXCJcblxuICAgICB8IFNfXG4gICAgXG4gICAgIDsgIFxuICAgICBcblNfIDo6PSBcImVcIiA7ICAgICBcblxuQSAgOjo9IEFfICggXCJnXCIgXCJmXCIgKSs/IDsgIFxuXG5BXyA6Oj0gU18gXCJmXCIgXG5cbiAgICAgfCBcImdcIlxuICAgIFxuICAgICA7ICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuU28gaWYgd2UgbWF0Y2ggZWYsIGZvciBleGFtcGxlOlxuXG4gICAgICAgICAgUygwLTEpICAgICAgICAgXG4gICAgICAgICAgICAgfCAgICAgICAgICAgXG4gICAgICAgICAgQSgwLTEpICAgICAgICAgXG4gICAgICAgICAgICAgfCAgICAgICAgICAgXG4gICAgICAtLS0tLS0tLS0tLS0tLSAgICAgXG4gICAgICB8ICAgICAgICAgICAgfCAgICAgXG4gICAgU18oMCkgICAgZltjdXN0b21dKDEpXG4gICAgICB8ICAgICAgICAgICAgICAgICAgXG5lW2N1c3RvbV0oMCkgICAgICAgICAgICAgXG5cblllcyFcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG4gICAgIFxuLi4ud2hpY2ggZG9lcyBub3QgY2hhbmdlIGFueXRoaW5nIGFzaWRlIGZyb20gYWRkaW5nIG5vZGVzIHRvIHRoZSBwYXJzZSB0cmVlIHdoaWNoIGNhbiBiZSBzdWJzZXF1ZW50bHkgcmVtb3ZlZC5cblxuV2Ugbm93IHN1YnN0aXR1dGUgUyBpbnRvIEEuLi5cbiAgXG5BICA6Oj0gQSBcImZcIiBcblxuICAgICB8IFNfIFwiZlwiIFxuXG4gICAgIHwgQV9cbiAgICBcbiAgICAgOyAgXG4gICAgIFxuLi4uY3JlYXRlIGEgbmV3IHJlZHVjZWQgcnVsZTpcblxuQSAgOjo9IEEgXCJmXCIgXG5cbiAgICAgfCBBX19cbiAgICBcbiAgICAgOyAgXG4gICAgIFxuLi4ud2hlcmVcblxuQV9fIDo6PSBTXyBcImZcIlxuXG4gICAgICB8IEFfXG4gICAgICBcbiAgICAgIDtcbiAgICAgIFxuVGh1cy4uLlxuXG5BIDo6PSBBX18gXCJmXCIrPyA7ICAgICAgXG5cbi4uLmFuZDogXG5cbkFfXyA6Oj0gU18gXCJmXCJcblxuICAgICAgfCBcImdcIlxuICAgICBcbiAgICAgIDtcblxuVG8gY29uY2x1ZGU6XG5cblMgICA6Oj0gQVxuXG4gICAgICB8IFNfXG4gICAgXG4gICAgICA7ICBcbiAgXG5TXyAgOjo9IFwiZVwiIDsgIFxuXG5BICAgOjo9IEFfXyBcImZcIis/IDsgICAgICBcblxuQV9fIDo6PSBTXyBcImZcIlxuXG4gICAgICB8IFwiZ1wiXG4gICAgIFxuICAgICAgO1xuXG5cblxuQSAgIDo6PSAoIFNfIFwiZlwiIHwgQV8gKSBcImZcIis/IDsgICAgICBcblxuQV8gOjo9ICBcImdcIiA7XG5cblxuVGhpcyBpcyBzbGlnaHRseSBkaWZmZXJlbnQgdG8gdGhlIHByZXZpb3VzIGVmZm9ydDpcblxuUyAgOjo9IEFcblxuICAgICB8IFNfXG4gICAgXG4gICAgIDsgIFxuICBcblNfIDo6PSBcImVcIiA7ICBcbiAgXG5BICA6Oj0gQV8gXCJmXCIrPyBcblxuICAgICB8IFNfIFwiZlwiKz8gXG5cbiAgICAgfCBBX1xuICAgIFxuICAgICA7ICBcblxuQV8gOjo9IFwiZ1wiIDsgIFxuICBcblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuXG5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuSG93IGNvbWUgdGhpcyB3b3Jrcy4uLlxuXG5BIDo6PSBDIFwiZlwiXG5cbiAgICB8IEJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuIFxuLi4uYnV0IHRoaXMgZG9lc24ndDpcblxuQSA6Oj0gQyBcImZcIlxuXG4gICAgfCBCXG5cbiAgICA7XG5cbkIgOjo9IFwiaFwiIEMgO1xuXG5DIDo6PSBBIDtcbiBcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGlzIG9uZSBuZWVkcyBmdXJ0aGVyIGludmVzdGlnYXRpb24uIFRyeSByZW1vdmluZyB0aGUgXCJlXCIgZGVmaW5pdGlvbiBhbmQgdGhlbiByZW1vdmUgZWFjaCBraW5kIG9mIGxlZnQgcmVjdXJzdGlvbiBpbiB0dXJuLlxuXG4gICAgQSA6Oj0gQSBcImZcIlxuICAgIFxuICAgICAgICB8IEJcbiAgICBcbiAgICAgICAgfCBcImVcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQiA6Oj0gQ1xuICAgIFxuICAgICAgICB8IEEgXCJnXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEMgOjo9IFwiaFwiIDtcbiAgICBcbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgb25lIGlzIGFsc28gY2F1c2luZyBwcm9ibGVtcyBhbHRob3VnaCB0aGUgYWxnb3JpdGhtIGlzIGluIHRyYW5zaXRpb246XG5cbkEgOjo9IEJcblxuICAgIHwgQyBcImZcIlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoZSBmb2xsb3dpbmcgaXMgYW4gZXhhbXBsZSBvZiBzaW1wbGlmeWluZyB0aGUgcmV3cml0ZSBwcm9jZXNzLiBUaGUgZm9sbG93aW5nLi4uXG5cbkEgOjo9IEEuLi4gXCJoXCIgXCJnXCIgfCBcImZcIiA7XG5cbi4uLmNhbiBpbiBmYWN0IGJlIHJld3JpdHRlbjpcblxuQSA6Oj0gQV8uLi4gQX4rPyA7XG5cbkFfIDo6PSBcImZcIiA7XG5cbkF+IDo6PSBcImhcIiBcImdcIiA7XG5cbkluIGZhY3Qgd2UgY291bGQgZXZlbiBkbyBhd2F5IHdpdGggdGhlIHJlcGVhdGVkIHJ1bGUgYW5kIFwiaW5saW5lXCIgaXRzIGRlZmluaXRpb246XG5cbkEgOjo9IEFfLi4uICggXCJoXCIgXCJnXCIgKSs/IDtcblxuQV8gOjo9IFwiZlwiIDtcblxuQWdhaW4gd2UgbWFrZSB1c2Ugb2YgdGhlIHNlcXVlbmNlIG9mIHBhcnRzIHBhcnQgZXh0ZW50aW9uIHRvIHRoZSBCTkYuXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoZSBuZXcgcHJvY2VzcyB3b3VsZCBiZTpcblxuMS4gRmluZCBhbGwgb2YgdGhlIGRpcmVjdGx5IGFuZCBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGJ5IGEgZGVwdGggZmlyc3Qgc2VhcmNoIG92ZXIgYWxsIHJlY3Vyc2l2ZSBkZWZpbml0aW9uc1xuXG4yLiBSZXdyaXRlIGJvdGggdGhlIHRoZSBkaXJlY3RseSBhbmQgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBhcyB3ZWxsIGFzIGNyZWF0aW5nIHRoZSBjb3JyZXNwb25kaW5nIHJlcGVhdGVkIHJ1bGVzXG5cbjMuIFJld3JpdGUgdGhlIGNvcnJlc3BvbmRpbmcgbGVmdCByZWN1cnNpdmUgcnVsZXMgYXMgd2VsbCBhcyBjcmUgXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbldoYXQgaWYgdGhlcmUgYXJlIHR3byBkaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBpbiB0aGUgc2FtZSBydWxlP1xuXG5BIDo6PSBBIFwiaFwiXG5cbiAgICB8IEEuLi4gXCJnXCJcbiAgICBcbiAgICB8IFwiZlwiXG4gICAgXG4gICAgO1xuICAgICAgICBcbkEgIDo6PSBBXy4uLiAoIFwiaFwiIHwgXCJnXCIgKSs/IDtcbiAgICBcbkFfICA6Oj0gXCJmXCIgOyAgICBcblxuVGhlIG9ubHkgcHJvYmxlbSB3aXRoIHRoaXMgc2VlbXMgdG8gYmUgZGVhbGluZyB3aXRoIGxvb2stYWhlYWQuIE90aGVyd2lzZSB3ZSBjYW4gc2ltcGx5IGNvbWJpbmUgdGhlIHR3byByZXBlYXRlZCBzdWItZGVmaW5pdGlvbnMuXG4gICBcbmBcbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJVTkFTU0lHTkVEX0VOVFJZIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwic2V0UGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJhZ3JhcGgiLCJSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVmLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUNILElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNiLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUN5QixJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7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