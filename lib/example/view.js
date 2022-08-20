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
var _easyLayout = require("easy-layout");
var _paragraph = /*#__PURE__*/ _interopRequireDefault(require("./paragraph"));
var _subHeading = /*#__PURE__*/ _interopRequireDefault(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interopRequireDefault(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interopRequireDefault(require("./textarea/bnf"));
var _rewriteNodes = /*#__PURE__*/ _interopRequireDefault(require("../rewriteNodes"));
var _example = /*#__PURE__*/ _interopRequireDefault(require("../lexer/example"));
var _example1 = /*#__PURE__*/ _interopRequireDefault(require("../parser/example"));
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
                    var exampleLexer = exampleLexerFromLexicalPattern(lexicalPattern), exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName), tokens = exampleLexer.tokenise(content), node = exampleParser.parse(tokens);
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
_defineProperty(View, "initialBNF", '\n  S  ::=  A ;\n  \n  A  ::=  E \n  \n       |  T \n                                         \n       ;\n  \n  E  ::=  F ;\n  \n  T  ::=  "n" ;\n  \n  F  ::=  "(" A ")"\n                         \n       |  A "+" A\n  \n       ;\n');
_defineProperty(View, "initialContent", "(n+n)");
_defineProperty(View, "initialStartRuleName", "F");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle.default)(View)(_templateObject());
function exampleLexerFromLexicalPattern(lexicalPattern) {
    var unassigned = lexicalPattern, entries = [
        {
            unassigned: unassigned
        }
    ], exampleLexer = _example.default.fromEntries(entries);
    return exampleLexer;
}
function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), exampleParser = new _example1.default(startRule, ruleMap);
    return exampleParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgcmV3cml0ZU5vZGVzIGZyb20gXCIuLi9yZXdyaXRlTm9kZXNcIjtcbmltcG9ydCBFeGFtcGxlTGV4ZXIgZnJvbSBcIi4uL2xleGVyL2V4YW1wbGVcIjtcbmltcG9ydCBFeGFtcGxlUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvZXhhbXBsZVwiO1xuaW1wb3J0IHJ1bGVzVXRpbGl0aWVzIGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZXdyaXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZXdyaXRlTm9kZXNcIlxuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpO1xuXG4gICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpO1xuXG4gICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhhbXBsZUxleGVyID0gZXhhbXBsZUxleGVyRnJvbUxleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSxcbiAgICAgICAgICAgIGV4YW1wbGVQYXJzZXIgPSAgZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gZXhhbXBsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGV4YW1wbGVQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgICBpZiAocmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZXdyaXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJld3JpdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSwgaW5pdGlhbExleGljYWxQYXR0ZXJuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG4gIFMgIDo6PSAgQSA7XG4gIFxuICBBICA6Oj0gIEUgXG4gIFxuICAgICAgIHwgIFQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgIDtcbiAgXG4gIEUgIDo6PSAgRiA7XG4gIFxuICBUICA6Oj0gIFwiblwiIDtcbiAgXG4gIEYgIDo6PSAgXCIoXCIgQSBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgIHwgIEEgXCIrXCIgQVxuICBcbiAgICAgICA7XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAobituKWA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJGXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiLlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgZXhhbXBsZUxleGVyID0gRXhhbXBsZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBleGFtcGxlTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIGV4YW1wbGVQYXJzZXIgPSBuZXcgRXhhbXBsZVBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBleGFtcGxlUGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImV4YW1wbGVMZXhlciIsImV4YW1wbGVMZXhlckZyb21MZXhpY2FsUGF0dGVybiIsImV4YW1wbGVQYXJzZXIiLCJleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiZW50cmllcyIsIkV4YW1wbGVMZXhlciIsImZyb21FbnRyaWVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsIkV4YW1wbGVQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFpTGIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQW5Mb0IsaUJBQWlCO29CQUVmLE1BQU07MEJBQ3NDLGFBQWE7OERBRTNELGFBQWE7K0RBQ1osY0FBYzs2REFDYixnQkFBZ0I7d0RBQ2hCLGdCQUFnQjtpRUFDZixpQkFBaUI7NERBQ2pCLGtCQUFrQjs2REFDakIsbUJBQW1COzBEQUNsQixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3QjtnRUFDeEIsd0JBQXdCO2tFQUN2Qix5QkFBeUI7MkVBQ3ZCLDJCQUEyQjtzQkFFakMscUJBQXFCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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