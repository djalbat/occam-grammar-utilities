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
var _occamGrammars = require("occam-grammars");
var _necessary = require("necessary");
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
var _constants = require("../constants");
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
var unshift = _necessary.arrayUtilities.unshift, rulesAsString = _rules.default.rulesAsString, ruleMapFromRules = _rules.default.ruleMapFromRules, startRuleFromRulesAndStartRuleName = _rules.default.startRuleFromRulesAndStartRuleName;
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
                    var florence = true, lexer = florence ? florenceLexerFromLexicalPattern(lexicalPattern) : basicLexerFromLexicalPattern(lexicalPattern), parser = basicParserFromRulesAndStartRuleName(rules, startRuleName), tokens = lexer.tokenise(content), node = parser.parse(tokens);
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
                        onChange: this.changeHandler
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
_defineProperty(View, "initialBNF", '\n  T  ::= A "g"\n  \n       | "f"\n  \n       ;\n\n  A ::= E "h" ;\n  \n  E ::= A "c"\n  \n      | T "d"\n  \n      ;\n');
_defineProperty(View, "initialContent", "n+m\n");
_defineProperty(View, "initialStartRuleName", "S");
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
function florenceLexerFromLexicalPattern(lexicalPattern) {
    var entries = _occamGrammars.FlorenceLexer.entries, type = _constants.EMPTY_STRING, operator = lexicalPattern; //
    unshift(entries, [
        {
            type: type
        },
        {
            operator: operator
        }
    ]);
    var florenceLexer = _occamGrammars.FlorenceLexer.fromEntries(entries);
    return florenceLexer;
}
function basicParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), basicParser = new _occamParsers.BasicParser(startRule, ruleMap);
    return basicParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIgfSBmcm9tIFwib2NjYW0tZ3JhbW1hcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uRGl2LCBDb2x1bW5zRGl2LCBWZXJ0aWNhbFNwbGl0dGVyRGl2IH0gZnJvbSBcImVhc3ktbGF5b3V0XCI7XG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgcmV3cml0ZU5vZGVzIGZyb20gXCIuLi9yZXdyaXRlTm9kZXNcIjtcbmltcG9ydCBydWxlc1V0aWxpdGllcyBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmV3cml0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmV3cml0ZU5vZGVzXCJcbmltcG9ydCBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIGZyb20gXCIuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uXCI7XG5cbmltcG9ydCB7IEVNUFRZX1NUUklORyB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJ1bGVzRnJvbUJORiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5cbmNvbnN0IHsgdW5zaGlmdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmbG9yZW5jZSA9IHRydWUsICAvLy9cbiAgICAgICAgICAgIGxleGVyID0gZmxvcmVuY2UgPyAgLy8vXG4gICAgICAgICAgICAgICAgICAgICAgZmxvcmVuY2VMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgICAgICAgICBwYXJzZXIgPSAgYmFzaWNQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSwgLy8vXG4gICAgICAgICAgICB0b2tlbnMgPSBsZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBwYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgICBpZiAocmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgICAgcmV3cml0ZU5vZGVzKG5vZGUpO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlO1xuXG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zLCBhYnJpZGdlZCk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZXdyaXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICBSZXdyaXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuICBUICA6Oj0gQSBcImdcIlxuICBcbiAgICAgICB8IFwiZlwiXG4gIFxuICAgICAgIDtcblxuICBBIDo6PSBFIFwiaFwiIDtcbiAgXG4gIEUgOjo9IEEgXCJjXCJcbiAgXG4gICAgICB8IFQgXCJkXCJcbiAgXG4gICAgICA7XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBuK21cbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJTXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiLlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBiYXNpY0xleGVyRnJvbUxleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSB7XG4gIGNvbnN0IHVuYXNzaWduZWQgPSBcIl4uKiRcIiwgIC8vL1xuICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGJhc2ljTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGZsb3JlbmNlTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgeyBlbnRyaWVzIH0gPSBGbG9yZW5jZUxleGVyLFxuICAgICAgICB0eXBlID0gRU1QVFlfU1RSSU5HLFxuICAgICAgICBvcGVyYXRvciA9IGxleGljYWxQYXR0ZXJuOyAgLy9cblxuICB1bnNoaWZ0KGVudHJpZXMsIFtcbiAgICB7XG4gICAgICB0eXBlXG4gICAgfSxcbiAgICB7XG4gICAgICBvcGVyYXRvclxuICAgIH1cbiAgXSk7XG5cbiAgY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGJhc2ljUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBiYXNpY1BhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJ1bnNoaWZ0IiwiYXJyYXlVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwiY29udGVudCIsImdldENvbnRlbnQiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJydWxlcyIsInJ1bGVzRnJvbUJORiIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJmbG9yZW5jZSIsImxleGVyIiwiZmxvcmVuY2VMZXhlckZyb21MZXhpY2FsUGF0dGVybiIsImJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4iLCJwYXJzZXIiLCJiYXNpY1BhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsInJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwicmV3cml0ZU5vZGVzIiwiYWJyaWRnZWQiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxQYXR0ZXJuSW5wdXQiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJhZ3JhcGgiLCJSZXdyaXRlTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJGbG9yZW5jZUxleGVyIiwidHlwZSIsIkVNUFRZX1NUUklORyIsIm9wZXJhdG9yIiwiZmxvcmVuY2VMZXhlciIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBcUxiLFNBSUU7OztlQUpGLFFBSUU7OztrRUF2TG9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNILGNBQWM7NEJBQ2IsZUFBZTs2QkFDYixnQkFBZ0I7eUJBQ2YsV0FBVzswQkFDMEIsYUFBYTs4REFFM0QsYUFBYTsrREFDWixjQUFjOzZEQUNiLGdCQUFnQjt3REFDaEIsZ0JBQWdCO2lFQUNmLGlCQUFpQjswREFDZixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3QjtnRUFDeEIsd0JBQXdCO2tFQUN2Qix5QkFBeUI7MkVBQ3ZCLDJCQUEyQjt5QkFFakMsY0FBYztzQkFDZCxxQkFBcUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVsRCxJQUFNLEFBQUVBLE9BQU8sR0FBS0MsVUFBYyxlQUFBLENBQTFCRCxPQUFPLEFBQW1CLEVBQzFCRSxhQUFhLEdBQTJEQyxNQUFjLFFBQUEs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