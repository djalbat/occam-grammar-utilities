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
_defineProperty(View, "initialBNF", ' \n  T  ::= A "g"\n  \n       | "f"\n  \n       ;\n\n  A ::= E "h" ;\n  \n  E ::= A "c"\n  \n      | T "d"\n  \n      ;\n');
_defineProperty(View, "initialContent", "fdhchg");
_defineProperty(View, "initialStartRuleName", "T");
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
'\n  F ::= T\n  \n      | S \n                                             \n      | T \n  \n      ;\n  \n  A ::= E ;\n  \n  V ::= . ; \n   \n  T ::= R ;\n  \n  E ::= A "+" A\n  \n      | T\n  \n      ;\n  \n  S  ::= A "<" A ;\n  \n  R  ::= A "/" A\n  \n       | V\n  \n       ;\n';
"n/n";

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuXG5pbXBvcnQgUGFyYWdyYXBoIGZyb20gXCIuL3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vc3ViSGVhZGluZ1wiO1xuaW1wb3J0IFNpemVhYmxlRGl2IGZyb20gXCIuL2Rpdi9zaXplYWJsZVwiO1xuaW1wb3J0IEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IHJld3JpdGVOb2RlcyBmcm9tIFwiLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgcnVsZXNVdGlsaXRpZXMgZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJld3JpdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3Jld3JpdGVOb2Rlc1wiXG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBiYXNpY0xleGVyID0gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgICAgICAgICBiYXNpY1BhcnNlciA9ICBiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICAgIGlmIChyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYnJpZGdlZCA9IHRydWU7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBwYXR0ZXJuXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbFBhdHRlcm5JbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJld3JpdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxTdGFydFJ1bGVOYW1lLCBpbml0aWFsTGV4aWNhbFBhdHRlcm4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGAgXG4gIFQgIDo6PSBBIFwiZ1wiXG4gIFxuICAgICAgIHwgXCJmXCJcbiAgXG4gICAgICAgO1xuXG4gIEEgOjo9IEUgXCJoXCIgO1xuICBcbiAgRSA6Oj0gQSBcImNcIlxuICBcbiAgICAgIHwgVCBcImRcIlxuICBcbiAgICAgIDtcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJmZGhjaGdcIjtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlRcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IFwiXi4qJFwiLCAgLy8vXG4gICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gYmFzaWNMZXhlcjtcbn1cblxuZnVuY3Rpb24gYmFzaWNQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGJhc2ljUGFyc2VyO1xufVxuXG5gXG4gIEYgOjo9IFRcbiAgXG4gICAgICB8IFMgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIHwgVCBcbiAgXG4gICAgICA7XG4gIFxuICBBIDo6PSBFIDtcbiAgXG4gIFYgOjo9IC4gOyBcbiAgIFxuICBUIDo6PSBSIDtcbiAgXG4gIEUgOjo9IEEgXCIrXCIgQVxuICBcbiAgICAgIHwgVFxuICBcbiAgICAgIDtcbiAgXG4gIFMgIDo6PSBBIFwiPFwiIEEgO1xuICBcbiAgUiAgOjo9IEEgXCIvXCIgQVxuICBcbiAgICAgICB8IFZcbiAgXG4gICAgICAgO1xuYFxuXG5cIm4vblwiIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImJhc2ljTGV4ZXIiLCJiYXNpY0xleGVyRnJvbUxleGljYWxQYXR0ZXJuIiwiYmFzaWNQYXJzZXIiLCJiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsInJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwicmV3cml0ZU5vZGVzIiwiYWJyaWRnZWQiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJhZ3JhcGgiLCJSZXdyaXRlTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiY2hlY2tlZCIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwic2V0TGV4aWNhbFBhdHRlcm4iLCJFbGVtZW50IiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiQmFzaWNQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkE2S2IsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQS9Lb0IsaUJBQWlCO29CQUVmLE1BQU07MkJBQ0gsY0FBYzs0QkFDYixlQUFlOzBCQUN5QixhQUFhOzhEQUUzRCxhQUFhOytEQUNaLGNBQWM7NkRBQ2IsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7aUVBQ2YsaUJBQWlCOzBEQUNmLG9CQUFvQjs0REFDbkIsb0JB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