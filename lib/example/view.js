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
_defineProperty(View, "initialContent", "chdefh");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIsIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlTm9kZXMgZnJvbSBcIi4uL3Jld3JpdGVOb2Rlc1wiO1xuaW1wb3J0IHJ1bGVzVXRpbGl0aWVzIGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgTGV4aWNhbFBhdHRlcm5JbnB1dCBmcm9tIFwiLi9pbnB1dC9sZXhpY2FsUGF0dGVyblwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZXdyaXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZXdyaXRlTm9kZXNcIlxuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi9jb25zdGFudHNcIjtcblxuY29uc3QgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICAvLyB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgICAgY29uc3QgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICAvLyB9IGNhdGNoIChlcnJvcikge1xuICAgIC8vICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBiYXNpY0xleGVyRnJvbUxleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9ICBiYXNpY1BhcnNlckZyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIC8vIGNvbnN0IHsgZW50cmllcyB9ID0gRmxvcmVuY2VMZXhlcixcbiAgICAvLyAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAvLyAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybjsgIC8vL1xuICAgIC8vXG4gICAgLy8gZW50cmllcy5wdXNoKHtcbiAgICAvLyAgIGN1c3RvbVxuICAgIC8vIH0pO1xuICAgIC8vXG4gICAgLy8gY29uc3QgZmxvcmVuY2VMZXhlciA9IEZsb3JlbmNlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgLy8gICAgICAgZmxvcmVuY2VQYXJzZXIgPSBuZXcgRmxvcmVuY2VQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgIC8vICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAvLyAgICAgICB0b2tlbnMgPSBmbG9yZW5jZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgIC8vICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZTtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmV3cml0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZXdyaXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgXSk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSBpbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYCAgICBBICA6Oj0gIEIgXCJoXCIgXG4gICAgICBcbiAgICAgICAgIHwgIFwiZ1wiIFxuIFxuICAgICAgICAgO1xuXG4gICAgQiAgOjo9ICBCIFwiZVwiIFwiZlwiXG4gICAgXG4gICAgICAgICB8ICBBIFwiZFwiIFxuICAgIFxuICAgICAgICAgfCAgXCJjXCIgXG5cbiAgICAgICAgIDtcbiAgICAgICAgICAgICAgXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiY2hkZWZoXCI7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCIuXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IFwiXi4qJFwiLCAgLy8vXG4gICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gYmFzaWNMZXhlcjtcbn1cblxuZnVuY3Rpb24gYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gYmFzaWNQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwiYmFzaWNMZXhlciIsImJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4iLCJiYXNpY1BhcnNlciIsImJhc2ljUGFyc2VyRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBcU1iLFNBSUU7OztlQUpGLFFBSUU7OztrRUF2TW9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNILGNBQWM7NEJBQ2IsZUFBZTs2QkFDRyxnQkFBZ0I7MEJBQ00sYUFBYTs4REFFM0QsYUFBYTsrREFDWixjQUFjOzZEQUNiLGdCQUFnQjt3REFDaEIsZ0JBQWdCO2lFQUNmLGlCQUFpQjswREFDZixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3QjtnRUFDeEIsd0JBQXdCO2tFQUN2Qix5QkFBeUI7MkVBQ3ZCLDJCQUEyQjtzQkFFakMscUJBQXFCO3lCQUNqQixhQUFhOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFOUMs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