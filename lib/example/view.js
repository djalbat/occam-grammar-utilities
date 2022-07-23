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
var rulesAsString = _rules.default.rulesAsString, ruleMapFromRules = _rules.default.ruleMapFromRules, rulesFromStartRuleAndRuleMap = _rules.default.rulesFromStartRuleAndRuleMap, startRuleFromRulesAndStartRuleName = _rules.default.startRuleFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _defineProperty(_assertThisInitialized(_this), "keyUpHandler", function(event, element) {
            _this.changeHandler();
        });
        _defineProperty(_assertThisInitialized(_this), "changeHandler", function(event, element) {
            var bnf = _this.getBNF(), startRuleName = _this.getStartRuleName();
            var rules = (0, _parser.rulesFromBNF)(bnf);
            var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);
            (0, _eliminateLeftRecursion.default)(startRule, ruleMap);
            rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
            var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
            _this.setAdjustedBNF(adjustedBNF);
            var parseTree = _this.getParseTree(startRule, ruleMap);
            _this.setParseTree(parseTree);
        });
        return _this;
    }
    _createClass(View, [
        {
            key: "getParseTree",
            value: function getParseTree(startRule, ruleMap) {
                var parseTree = null;
                var lexicalPattern = this.getLexicalPattern(), basicLexer = basicLexerFromLexicalPattern(lexicalPattern), basicParser = basicParserFromStartRuleAndRuleMap(startRule, ruleMap);
                var content = this.getContent(), tokens = basicLexer.tokenise(content), node = basicParser.parse(tokens);
                if (node !== null) {
                    var rewriteNodesCheckboxChecked = this.isRewriteNodesCheckboxChecked();
                    if (rewriteNodesCheckboxChecked) {
                        (0, _rewriteNodes.default)(node);
                    }
                    var abridged = true;
                    parseTree = node.asParseTree(tokens, abridged);
                }
                return parseTree;
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
_defineProperty(View, "initialBNF", '    S  ::=  A ;\n    \n    A  ::=  E \n    \n         |  T \n                                           \n         ;\n    \n    E  ::=  F ;\n    \n    T  ::=  "n" ;\n    \n    F  ::=  "(" A ")"\n                           \n         |  A "+" A\n    \n         ;\n\n');
_defineProperty(View, "initialContent", "(n+n)\n");
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
function basicParserFromStartRuleAndRuleMap(startRule, ruleMap) {
    var basicParser = new _occamParsers.BasicParser(startRule, ruleMap);
    return basicParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IHJld3JpdGVOb2RlcyBmcm9tIFwiLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgcnVsZXNVdGlsaXRpZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJld3JpdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3Jld3JpdGVOb2Rlc1wiXG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpO1xuXG4gICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBydWxlcyA9IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSAgYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZXdyaXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJld3JpdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSwgaW5pdGlhbExleGljYWxQYXR0ZXJuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgICAgIFMgIDo6PSAgQSA7XG4gICAgXG4gICAgQSAgOjo9ICBFIFxuICAgIFxuICAgICAgICAgfCAgVCBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIDtcbiAgICBcbiAgICBFICA6Oj0gIEYgO1xuICAgIFxuICAgIFQgIDo6PSAgXCJuXCIgO1xuICAgIFxuICAgIEYgIDo6PSAgXCIoXCIgQSBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICB8ICBBIFwiK1wiIEFcbiAgICBcbiAgICAgICAgIDtcblxuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgKG4rbilcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IFwiXi4qJFwiLCAgLy8vXG4gICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gYmFzaWNMZXhlcjtcbn1cblxuZnVuY3Rpb24gYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gYmFzaWNQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwiYmFzaWNMZXhlciIsImJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4iLCJiYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBc0xiLFNBSUU7OztlQUpGLFFBSUU7OztrRUF4TG9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNILGNBQWM7NEJBQ2IsZUFBZTswQkFDeUIsYUFBYTs4REFFM0QsYUFBYTsrREFDWixjQUFjOzZEQUNiLGdCQUFnQjt3REFDaEIsZ0JBQWdCO2lFQUNmLGlCQUFpQjswREFDZixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3Qjtn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