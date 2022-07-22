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
                // const lexicalPattern = this.getLexicalPattern(),
                //       basicLexer = basicLexerFromLexicalPattern(lexicalPattern),
                //       basicParser =  basicParserFromStartRuleAndRuleMap(startRule, ruleMap);
                //
                // const content = this.getContent(),
                //       tokens = basicLexer.tokenise(content),
                //       node = basicParser.parse(tokens);
                var entries = _occamGrammars.FlorenceLexer.entries, lexicalPattern = this.getLexicalPattern(), custom = lexicalPattern; ///
                entries.push({
                    custom: custom
                });
                var florenceLexer = _occamGrammars.FlorenceLexer.fromEntries(entries), florenceParser = new _occamGrammars.FlorenceParser(startRule, ruleMap), content = this.getContent(), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens);
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
_defineProperty(View, "initialBNF", 'topLevelInstruction                  ::=   comparatorDeclaration \n                                           \n                                       |   combinatorDeclaration \n                                                                                      \n                                       ;\n\ncomparatorDeclaration                ::=   "Comparator" statement <END_OF_LINE> ;\n \ncombinatorDeclaration                ::=   "Combinator" expression ( ":" type )? <END_OF_LINE> ;\n\nargument                             ::=   type \n\n                                       |   expression \n                                       \n                                       ;\n\ntype                                 ::=   "NaturalNumber" ;\n\nexpression!                          ::=   arithmeticExpression ;\n\nstatement!                           ::=   arithmeticStatement ;\n\narithmeticExpression                 ::=   "(" argument ")"\n                       \n                                       |   argument "+" argument\n\n                                       ;\n\narithmeticStatement                  ::=  argument ;\n');
_defineProperty(View, "initialContent", "Combinator (NaturalNumber + NaturalNumber):NaturalNumber\n");
_defineProperty(View, "initialStartRuleName", "");
_defineProperty(View, "initialLexicalPattern", "\\+");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIsIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlUGFyc2VUcmVlIGZyb20gXCIuLi9yZXdyaXRlTm9kZXNcIjtcbmltcG9ydCBydWxlc1V0aWxpdGllcyBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmV3cml0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmV3cml0ZU5vZGVzXCJcbmltcG9ydCBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIGZyb20gXCIuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uXCI7XG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbmNvbnN0IHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCwgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgLy8gdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKTtcblxuICAgICAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBydWxlcyA9IHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICAgIGNvbnN0IHBhcnNlVHJlZSA9IHRoaXMuZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgLy8gfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAvLyAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAvLyBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAvLyAgICAgICBiYXNpY0xleGVyID0gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybiksXG4gICAgLy8gICAgICAgYmFzaWNQYXJzZXIgPSAgYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuICAgIC8vXG4gICAgLy8gY29uc3QgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgIC8vICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgLy8gICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBjb25zdCB7IGVudHJpZXMgfSA9IEZsb3JlbmNlTGV4ZXIsXG4gICAgICAgICAgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm47ICAvLy9cblxuICAgIGVudHJpZXMucHVzaCh7XG4gICAgICBjdXN0b21cbiAgICB9KTtcblxuICAgIGNvbnN0IGZsb3JlbmNlTGV4ZXIgPSBGbG9yZW5jZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGZsb3JlbmNlUGFyc2VyID0gbmV3IEZsb3JlbmNlUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gZmxvcmVuY2VQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmV3cml0ZVBhcnNlVHJlZShub2RlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgYWJyaWRnZWQgPSB0cnVlO1xuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZXdyaXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSBjaGVja2VkIC8+XG4gICAgICAgICAgICAgIFJld3JpdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSwgaW5pdGlhbExleGljYWxQYXR0ZXJuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgdG9wTGV2ZWxJbnN0cnVjdGlvbiAgICAgICAgICAgICAgICAgIDo6PSAgIGNvbXBhcmF0b3JEZWNsYXJhdGlvbiBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBjb21iaW5hdG9yRGVjbGFyYXRpb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5jb21wYXJhdG9yRGVjbGFyYXRpb24gICAgICAgICAgICAgICAgOjo9ICAgXCJDb21wYXJhdG9yXCIgc3RhdGVtZW50IDxFTkRfT0ZfTElORT4gO1xuIFxuY29tYmluYXRvckRlY2xhcmF0aW9uICAgICAgICAgICAgICAgIDo6PSAgIFwiQ29tYmluYXRvclwiIGV4cHJlc3Npb24gKCBcIjpcIiB0eXBlICk/IDxFTkRfT0ZfTElORT4gO1xuXG5hcmd1bWVudCAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdHlwZSBcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIGV4cHJlc3Npb24gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDtcblxudHlwZSAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIFwiTmF0dXJhbE51bWJlclwiIDtcblxuZXhwcmVzc2lvbiEgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGFyaXRobWV0aWNFeHByZXNzaW9uIDtcblxuc3RhdGVtZW50ISAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIGFyaXRobWV0aWNTdGF0ZW1lbnQgO1xuXG5hcml0aG1ldGljRXhwcmVzc2lvbiAgICAgICAgICAgICAgICAgOjo9ICAgXCIoXCIgYXJndW1lbnQgXCIpXCJcbiAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgYXJndW1lbnQgXCIrXCIgYXJndW1lbnRcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5hcml0aG1ldGljU3RhdGVtZW50ICAgICAgICAgICAgICAgICAgOjo9ICBhcmd1bWVudCA7XG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBDb21iaW5hdG9yIChOYXR1cmFsTnVtYmVyICsgTmF0dXJhbE51bWJlcik6TmF0dXJhbE51bWJlclxuYDtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIlxcXFwrXCI7XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pIHtcbiAgY29uc3QgdW5hc3NpZ25lZCA9IFwiXi4qJFwiLCAgLy8vXG4gICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgfVxuICAgICAgICBdLFxuICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gYmFzaWNMZXhlcjtcbn1cblxuZnVuY3Rpb24gYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgY29uc3QgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gYmFzaWNQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwicnVsZXNGcm9tQk5GIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJwYXJzZVRyZWUiLCJnZXRQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlbnRyaWVzIiwiRmxvcmVuY2VMZXhlciIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJjdXN0b20iLCJwdXNoIiwiZmxvcmVuY2VMZXhlciIsImZyb21FbnRyaWVzIiwiZmxvcmVuY2VQYXJzZXIiLCJGbG9yZW5jZVBhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJld3JpdGVQYXJzZVRyZWUiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJiYXNpY0xleGVyRnJvbUxleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsImJhc2ljUGFyc2VyIiwiQmFzaWNQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7OzsrQkFxTmIsU0FJRTs7O2VBSkYsUUFJRTs7O2tFQXZOb0IsaUJBQWlCO29CQUVmLE1BQU07MkJBQ0gsY0FBYzs0QkFDYixlQUFlOzZCQUNHLGdCQUFnQjswQkFDTSxhQUFhOzhEQUUzRCxhQUFhOytEQUNaLGNBQWM7NkRBQ2IsZ0JBQWdCO3dEQUNoQixnQkFBZ0I7aUVBQ1gsaUJBQWlCOzBEQUNuQixvQkFBb0I7NERBQ25CLG9CQUFvQjs4REFDbEIsc0JBQXNCO2tFQUNyQix1QkFBdUI7bUVBQ3RCLHdCQUF3QjtnRUFDeEIsd0JBQXdCO2tFQUN2Qix5QkFBeUI7MkVBQ3ZCLDJCQUEyQjtzQkFFakMscUJBQXFC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