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
var _constants = require("./constants");
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
            // try {
            var bnf = _this.getBNF(), startRuleName = _this.getStartRuleName();
            var rules = (0, _parser.rulesFromBNF)(bnf);
            var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);
            (0, _eliminateLeftRecursion.default)(startRule, ruleMap);
            rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
            var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
            _this.setAdjustedBNF(adjustedBNF);
            var parseTree = _this.getParseTree(startRule, ruleMap);
            _this.setParseTree(parseTree);
        // } catch (error) {
        //   console.log(error);
        // }
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
                // const { entries } = FlorenceLexer,
                //       lexicalPattern = this.getLexicalPattern(),
                //       custom = lexicalPattern;  ///
                //
                // entries.push({
                //   custom
                // });
                //
                // const florenceLexer = FlorenceLexer.fromEntries(entries),
                //       florenceParser = new FlorenceParser(startRule, ruleMap),  ///
                //       content = this.getContent(),
                //       tokens = florenceLexer.tokenise(content),
                //       node = florenceParser.parse(tokens);
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
_defineProperty(View, "initialBNF", '    A  ::=  B "h" \n      \n         |  "g" \n \n         ;\n\n    B  ::=  B "e" "f"\n    \n         |  A "d" \n    \n         |  "c" \n\n         ;\n              \n');
_defineProperty(View, "initialContent", "cefhdefh");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIsIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlTm9kZXMgZnJvbSBcIi4uL3Jld3JpdGVOb2Rlc1wiO1xuaW1wb3J0IHJ1bGVzVXRpbGl0aWVzIGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZXdyaXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZXdyaXRlTm9kZXNcIlxuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBiYXNpY0xleGVyRnJvbUxleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9ICBiYXNpY1BhcnNlckZyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIC8vIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAvLyAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAvLyAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybjsgIC8vL1xuICAgIC8vXG4gICAgLy8gZW50cmllcy5wdXNoKHtcbiAgICAvLyAgIGN1c3RvbVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgLy8gICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgIC8vICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAvLyAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgIC8vICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZTtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmV3cml0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZXdyaXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYCAgICBBICA6Oj0gIEIgXCJoXCIgXG4gICAgICBcbiAgICAgICAgIHwgIFwiZ1wiIFxuIFxuICAgICAgICAgO1xuXG4gICAgQiAgOjo9ICBCIFwiZVwiIFwiZlwiXG4gICAgXG4gICAgICAgICB8ICBBIFwiZFwiIFxuICAgIFxuICAgICAgICAgfCAgXCJjXCIgXG5cbiAgICAgICAgIDtcbiAgICAgICAgICAgICAgXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiY2VmaGRlZmhcIjtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICBjb25zdCB1bmFzc2lnbmVkID0gXCJeLiokXCIsICAvLy9cbiAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBiYXNpY0xleGVyO1xufVxuXG5mdW5jdGlvbiBiYXNpY1BhcnNlckZyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBiYXNpY1BhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiYXNpY0xleGVyIiwiYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybiIsImJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJld3JpdGVOb2RlcyIsImFicmlkZ2VkIiwiYXNQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmV3cml0ZU5vZGVzQ2hlY2tib3giLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0U3RhcnRSdWxlTmFtZSIsInNldExleGljYWxQYXR0ZXJuIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsInVuYXNzaWduZWQiLCJjdXN0b20iLCJlbnRyaWVzIiwiQmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiQmFzaWNQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFxTWIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQXZNb0IsaUJBQWlCO29CQUVmLE1BQU07MkJBQ0gsY0FBYzs0QkFDYixlQUFlOzZCQUNHLGdCQUFnQjswQkFDTSxhQUFhOzhEQUUzRCxhQUFhOytEQUNaLGNBQWM7NkRBQ2IsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7aUVBQ2YsaUJBQWlCOzBEQUNmLG9CQUFvQjs0REFDbkIsb0JBQW9COzhEQUNsQixzQkFBc0I7a0VBQ3JCLHVCQUF1QjttRUFDdEIsd0JBQXdCO2dFQUN4Qix3QkFBd0I7a0VBQ3ZCLHlCQUF5QjsyRUFDdkIsMkJBQTJCO3NCQUVqQyxxQkFBcUI7eUJBQ2pCLGFBQWE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU5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