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
var rulesAsString = _occamParsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
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
                var bnf = this.getBNF();
                var rules = (0, _rules).rulesFromBNF(bnf);
                var ruleMap = ruleMapFromRules(rules);
                var startRule = startRuleFromRules(rules);
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
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
                var _constructor = this.constructor, initialBNF = _constructor.initialBNF, initialContent = _constructor.initialContent, initialLexicalPattern = _constructor.initialLexicalPattern, bnf = initialBNF, content = initialContent, lexicalPattern = initialLexicalPattern; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalPattern(lexicalPattern);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialBNF", '\n  \nA ::= B \n\n    | "f"\n\n    ;\n\nB ::= C ;\n\nC ::= A "g" ;\n\n');
_defineProperty(View, "initialContent", "fg");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\nHow come this works...\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n...but this doesn\'t:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n\n----------------------------------------\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions.\n   \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyLCBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzXCJcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IHsgVU5BU1NJR05FRF9FTlRSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIC8vIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgLy8gICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgLy8gfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSByZWR1Y2VkIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxQYXR0ZXJuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuICBcbkEgOjo9IEIgXG5cbiAgICB8IFwiZlwiXG5cbiAgICA7XG5cbkIgOjo9IEMgO1xuXG5DIDo6PSBBIFwiZ1wiIDtcblxuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcImZnXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiLlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5gXG5cbkhvdyBjb21lIHRoaXMgd29ya3MuLi5cblxuQSA6Oj0gQyBcImZcIlxuXG4gICAgfCBCXG5cbiAgICA7XG5cbkIgOjo9IFwiaFwiIEMgO1xuXG5DIDo6PSBBIDtcbiBcbi4uLmJ1dCB0aGlzIGRvZXNuJ3Q6XG5cbkEgOjo9IEMgXCJmXCJcblxuICAgIHwgQlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG4gXG5cbi0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhpcyBvbmUgbmVlZHMgZnVydGhlciBpbnZlc3RpZ2F0aW9uLiBUcnkgcmVtb3ZpbmcgdGhlIFwiZVwiIGRlZmluaXRpb24gYW5kIHRoZW4gcmVtb3ZlIGVhY2gga2luZCBvZiBsZWZ0IHJlY3Vyc3Rpb24gaW4gdHVybi5cblxuICAgIEEgOjo9IEEgXCJmXCJcbiAgICBcbiAgICAgICAgfCBCXG4gICAgXG4gICAgICAgIHwgXCJlXCJcbiAgICBcbiAgICAgICAgO1xuICAgIFxuICAgIEIgOjo9IENcbiAgICBcbiAgICAgICAgfCBBIFwiZ1wiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBDIDo6PSBcImhcIiA7XG4gICAgXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGlzIG9uZSBpcyBhbHNvIGNhdXNpbmcgcHJvYmxlbXMgYWx0aG91Z2ggdGhlIGFsZ29yaXRobSBpcyBpbiB0cmFuc2l0aW9uOlxuXG5BIDo6PSBCXG5cbiAgICB8IEMgXCJmXCJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGUgZm9sbG93aW5nIGlzIGFuIGV4YW1wbGUgb2Ygc2ltcGxpZnlpbmcgdGhlIHJld3JpdGUgcHJvY2Vzcy4gVGhlIGZvbGxvd2luZy4uLlxuXG5BIDo6PSBBLi4uIFwiaFwiIFwiZ1wiIHwgXCJmXCIgO1xuXG4uLi5jYW4gaW4gZmFjdCBiZSByZXdyaXR0ZW46XG5cbkEgOjo9IEFfLi4uIEF+Kz8gO1xuXG5BXyA6Oj0gXCJmXCIgO1xuXG5BfiA6Oj0gXCJoXCIgXCJnXCIgO1xuXG5JbiBmYWN0IHdlIGNvdWxkIGV2ZW4gZG8gYXdheSB3aXRoIHRoZSByZXBlYXRlZCBydWxlIGFuZCBcImlubGluZVwiIGl0cyBkZWZpbml0aW9uOlxuXG5BIDo6PSBBXy4uLiAoIFwiaFwiIFwiZ1wiICkrPyA7XG5cbkFfIDo6PSBcImZcIiA7XG5cbkFnYWluIHdlIG1ha2UgdXNlIG9mIHRoZSBzZXF1ZW5jZSBvZiBwYXJ0cyBwYXJ0IGV4dGVudGlvbiB0byB0aGUgQk5GLlxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5UaGUgbmV3IHByb2Nlc3Mgd291bGQgYmU6XG5cbjEuIEZpbmQgYWxsIG9mIHRoZSBkaXJlY3RseSBhbmQgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9ucyBieSBhIGRlcHRoIGZpcnN0IHNlYXJjaCBvdmVyIGFsbCByZWN1cnNpdmUgZGVmaW5pdGlvbnNcblxuMi4gUmV3cml0ZSBib3RoIHRoZSB0aGUgZGlyZWN0bHkgYW5kIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYXMgd2VsbCBhcyBjcmVhdGluZyB0aGUgY29ycmVzcG9uZGluZyByZXBlYXRlZCBydWxlc1xuXG4zLiBSZXdyaXRlIHRoZSBjb3JyZXNwb25kaW5nIGxlZnQgcmVjdXJzaXZlIHJ1bGVzIGFzIHdlbGwgYXMgY3JlIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5XaGF0IGlmIHRoZXJlIGFyZSB0d28gZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgaW4gdGhlIHNhbWUgcnVsZT9cblxuQSA6Oj0gQSBcImhcIlxuXG4gICAgfCBBLi4uIFwiZ1wiXG4gICAgXG4gICAgfCBcImZcIlxuICAgIFxuICAgIDtcbiAgICAgICAgXG5BICA6Oj0gQV8uLi4gKCBcImhcIiB8IFwiZ1wiICkrPyA7XG4gICAgXG5BXyAgOjo9IFwiZlwiIDsgICAgXG5cblRoZSBvbmx5IHByb2JsZW0gd2l0aCB0aGlzIHNlZW1zIHRvIGJlIGRlYWxpbmcgd2l0aCBsb29rLWFoZWFkLiBPdGhlcndpc2Ugd2UgY2FuIHNpbXBseSBjb21iaW5lIHRoZSB0d28gcmVwZWF0ZWQgc3ViLWRlZmluaXRpb25zLlxuICAgXG5gXG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlcyIsIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJVTkFTU0lHTkVEX0VOVFJZIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7O0FBRVMsSUFBQSxjQUFpQixrQ0FBakIsaUJBQWlCLEVBQUE7QUFFZixJQUFBLEtBQU0sV0FBTixNQUFNLENBQUE7QUFDSCxJQUFBLFlBQWMsV0FBZCxjQUFjLENBQUE7QUFDRyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDUyxJQUFBLFdBQWEsV0FBYixhQUFhLENBQUE7QUFDZCxJQUFBLE1BQVUsV0FBVixVQUFVLENBQUE7QUFFdkQsSUFBQSxVQUFhLGtDQUFiLGFBQWEsRUFBQTtBQUNaLElBQUEsV0FBYyxrQ0FBZCxjQUFjLEVBQUE7QUFDYixJQUFBLFNBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNoQixJQUFBLElBQWdCLGtDQUFoQixnQkFBZ0IsRUFBQTtBQUNaLElBQUEsUUFBb0Isa0NBQXBCLG9CQUFvQixFQUFBO0FBQ2xCLElBQUEsVUFBc0Isa0NBQXRCLHNCQUFzQixFQUFBO0FBQ3BCLElBQUEsZUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ3hCLElBQUEsWUFBd0Isa0NBQXhCLHdCQUF3QixFQUFBO0FBQ1QsSUFBQSwyQkFBdUMsa0NBQXZDLHVDQUF1QyxFQUFBO0FBRXpELElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7QUFDaEIsSUFBQSxVQUFjLFdBQWQsY0FBYyxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFHL0MsSUFB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