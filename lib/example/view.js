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
                var rules = (0, _parser).rulesFromBNF(bnf);
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
_defineProperty(View, "initialBNF", '\n  \nA ::= A "g"\n\n    | "f"\n\n    ;\n\n');
_defineProperty(View, "initialContent", "fg");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\nHow come this works...\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n...but this doesn\'t:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n\n----------------------------------------\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n    \n--------------------------------------------------\n\nThis one is also causing problems although the algorithm is in transition:\n\nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n--------------------------------------------------\n\nThe following is an example of simplifying the rewrite process. The following...\n\nA ::= A... "h" "g" | "f" ;\n\n...can in fact be rewritten:\n\nA ::= A_... A~+? ;\n\nA_ ::= "f" ;\n\nA~ ::= "h" "g" ;\n\nIn fact we could even do away with the repeated rule and "inline" its definition:\n\nA ::= A_... ( "h" "g" )+? ;\n\nA_ ::= "f" ;\n\nAgain we make use of the sequence of parts part extention to the BNF.\n\n--------------------------------------------------\n\nThe new process would be:\n\n1. Find all of the directly and indirectly left recursive definitions by a depth first search over all recursive definitions\n\n2. Rewrite both the the directly and indirectly left recursive definitions as well as creating the corresponding repeated rules\n\n3. Rewrite the corresponding left recursive rules as well as cre \n\n--------------------------------------------------\n\nWhat if there are two directly left recursive definitions in the same rule?\n\nA ::= A "h"\n\n    | A... "g"\n    \n    | "f"\n    \n    ;\n        \nA  ::= A_... ( "h" | "g" )+? ;\n    \nA_  ::= "f" ;    \n\nThe only problem with this seems to be dealing with look-ahead. Otherwise we can simply combine the two repeated sub-definitions.\n   \n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyLCBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzIH0gZnJvbSBcIi4uL2luZGV4XCI7IC8vL1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzXCJcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9IFVOQVNTSUdORURfRU5UUlksXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIGxldCBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXtjaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJlbW92ZSBvciByZW5hbWUgcmVkdWNlZCBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGBcbiAgXG5BIDo6PSBBIFwiZ1wiXG5cbiAgICB8IFwiZlwiXG5cbiAgICA7XG5cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJmZ1wiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuYFxuXG5Ib3cgY29tZSB0aGlzIHdvcmtzLi4uXG5cbkEgOjo9IEMgXCJmXCJcblxuICAgIHwgQlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG4gXG4uLi5idXQgdGhpcyBkb2Vzbid0OlxuXG5BIDo6PSBDIFwiZlwiXG5cbiAgICB8IEJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgb25lIG5lZWRzIGZ1cnRoZXIgaW52ZXN0aWdhdGlvbi4gVHJ5IHJlbW92aW5nIHRoZSBcImVcIiBkZWZpbml0aW9uIGFuZCB0aGVuIHJlbW92ZSBlYWNoIGtpbmQgb2YgbGVmdCByZWN1cnN0aW9uIGluIHR1cm4uXG5cbiAgICBBIDo6PSBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBDXG4gICAgXG4gICAgICAgIHwgQSBcImdcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQyA6Oj0gXCJoXCIgO1xuICAgIFxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhpcyBvbmUgaXMgYWxzbyBjYXVzaW5nIHByb2JsZW1zIGFsdGhvdWdoIHRoZSBhbGdvcml0aG0gaXMgaW4gdHJhbnNpdGlvbjpcblxuQSA6Oj0gQlxuXG4gICAgfCBDIFwiZlwiXG5cbiAgICA7XG5cbkIgOjo9IFwiaFwiIEMgO1xuXG5DIDo6PSBBIDtcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIGZvbGxvd2luZyBpcyBhbiBleGFtcGxlIG9mIHNpbXBsaWZ5aW5nIHRoZSByZXdyaXRlIHByb2Nlc3MuIFRoZSBmb2xsb3dpbmcuLi5cblxuQSA6Oj0gQS4uLiBcImhcIiBcImdcIiB8IFwiZlwiIDtcblxuLi4uY2FuIGluIGZhY3QgYmUgcmV3cml0dGVuOlxuXG5BIDo6PSBBXy4uLiBBfis/IDtcblxuQV8gOjo9IFwiZlwiIDtcblxuQX4gOjo9IFwiaFwiIFwiZ1wiIDtcblxuSW4gZmFjdCB3ZSBjb3VsZCBldmVuIGRvIGF3YXkgd2l0aCB0aGUgcmVwZWF0ZWQgcnVsZSBhbmQgXCJpbmxpbmVcIiBpdHMgZGVmaW5pdGlvbjpcblxuQSA6Oj0gQV8uLi4gKCBcImhcIiBcImdcIiApKz8gO1xuXG5BXyA6Oj0gXCJmXCIgO1xuXG5BZ2FpbiB3ZSBtYWtlIHVzZSBvZiB0aGUgc2VxdWVuY2Ugb2YgcGFydHMgcGFydCBleHRlbnRpb24gdG8gdGhlIEJORi5cblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuVGhlIG5ldyBwcm9jZXNzIHdvdWxkIGJlOlxuXG4xLiBGaW5kIGFsbCBvZiB0aGUgZGlyZWN0bHkgYW5kIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYnkgYSBkZXB0aCBmaXJzdCBzZWFyY2ggb3ZlciBhbGwgcmVjdXJzaXZlIGRlZmluaXRpb25zXG5cbjIuIFJld3JpdGUgYm90aCB0aGUgdGhlIGRpcmVjdGx5IGFuZCBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFzIHdlbGwgYXMgY3JlYXRpbmcgdGhlIGNvcnJlc3BvbmRpbmcgcmVwZWF0ZWQgcnVsZXNcblxuMy4gUmV3cml0ZSB0aGUgY29ycmVzcG9uZGluZyBsZWZ0IHJlY3Vyc2l2ZSBydWxlcyBhcyB3ZWxsIGFzIGNyZSBcblxuLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuV2hhdCBpZiB0aGVyZSBhcmUgdHdvIGRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGluIHRoZSBzYW1lIHJ1bGU/XG5cbkEgOjo9IEEgXCJoXCJcblxuICAgIHwgQS4uLiBcImdcIlxuICAgIFxuICAgIHwgXCJmXCJcbiAgICBcbiAgICA7XG4gICAgICAgIFxuQSAgOjo9IEFfLi4uICggXCJoXCIgfCBcImdcIiApKz8gO1xuICAgIFxuQV8gIDo6PSBcImZcIiA7ICAgIFxuXG5UaGUgb25seSBwcm9ibGVtIHdpdGggdGhpcyBzZWVtcyB0byBiZSBkZWFsaW5nIHdpdGggbG9vay1haGVhZC4gT3RoZXJ3aXNlIHdlIGNhbiBzaW1wbHkgY29tYmluZSB0aGUgdHdvIHJlcGVhdGVkIHN1Yi1kZWZpbml0aW9ucy5cbiAgIFxuYFxuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJWaWV3IiwiZ2V0UGFyc2VUcmVlIiwic3RhcnRSdWxlIiwicnVsZU1hcCIsInBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJ1bmFzc2lnbmVkIiwiVU5BU1NJR05FRF9FTlRSWSIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJCYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZW1vdmVPclJlbmFtZVJlZHVjZWROb2RlcyIsImFzUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJzZXRQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiYmluZCIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3giLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWYsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBO0FBQ0gsSUFBQSxZQUFjLFdBQWQsY0FBYyxDQUFBO0FBQ0csSUFBQSxhQUFlLFdBQWYsZUFBZSxDQUFBO0FBQ1MsSUFBQSxXQUFhLFdBQWIsYUFBYSxDQUFBO0FBQ2QsSUFBQSxNQUFVLFdBQVYsVUFBVSxDQUFBO0FBRXZELElBQUEsVUFBYSxrQ0FBYixhQUFhLEVBQUE7QUFDWixJQUFBLFdBQWMsa0NBQWQsY0FBYyxFQUFBO0FBQ2IsSUFBQSxTQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDaEIsSUFBQSxJQUFnQixrQ0FBaEIsZ0JBQWdCLEVBQUE7QUFDWixJQUFBLFFBQW9CLGtDQUFwQixvQkFBb0IsRUFBQTtBQUNsQixJQUFBLFVBQXNCLGtDQUF0QixzQkFBc0IsRUFBQTtBQUNwQixJQUFBLGVBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUN4QixJQUFBLFlBQXdCLGtDQUF4Qix3QkFBd0IsRUFBQTtBQUNULElBQUEsMkJBQXVDLGtDQUF2Qyx1Q0FBdUMsRUFBQTtBQUV6RCxJQUFBLE9BQXFCLFdBQXJCLHFCQUFxQixDQUFBO0FBQ2pCLElBQUEsVUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNGLElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztB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