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
var _rules = /*#__PURE__*/ _interopRequireDefault(require("../utilities/rules"));
var _content = /*#__PURE__*/ _interopRequireDefault(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interopRequireDefault(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interopRequireDefault(require("./input/startRuleName"));
var _lexicalPattern = /*#__PURE__*/ _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = /*#__PURE__*/ _interopRequireDefault(require("./textarea/adjustedBNF"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interopRequireDefault(require("../eliminateLeftRecursion"));
var _removeOrRenameIntermediateNodes = /*#__PURE__*/ _interopRequireDefault(require("../removeOrRenameIntermediateNodes"));
var _removeOrRenameIntermediateNodes1 = /*#__PURE__*/ _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _parser = require("../utilities/parser");
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
            try {
                var bnf = _this.getBNF(), startRuleName = _this.getStartRuleName();
                var rules = (0, _parser.rulesFromBNF)(bnf);
                var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName);
                (0, _eliminateLeftRecursion.default)(startRule, ruleMap);
                rules = rulesFromStartRuleAndRuleMap(startRule, ruleMap);
                var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                _this.setAdjustedBNF(adjustedBNF);
                var parseTree = _this.getParseTree(startRule, ruleMap);
                _this.setParseTree(parseTree);
            } catch (error) {
                console.log(error);
            }
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
                    var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();
                    if (removeOrRenameIntermediateNodesCheckboxChecked) {
                        (0, _removeOrRenameIntermediateNodes.default)(node);
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
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_removeOrRenameIntermediateNodes1.default, {
                        onChange: this.changeHandler,
                        checked: true
                    }), "Remove or rename intermediate nodes"))))
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
_defineProperty(View, "initialBNF", '    A ::= A "e"\n    \n        | A "f"\n    \n        | "g"\n\n        | "h"\n\n        ;\n  \n');
_defineProperty(View, "initialContent", "gef");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IEZsb3JlbmNlTGV4ZXIsIEZsb3JlbmNlUGFyc2VyIH0gZnJvbSBcIm9jY2FtLWdyYW1tYXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBydWxlc1V0aWxpdGllcyBmcm9tIFwiLi4vdXRpbGl0aWVzL3J1bGVzXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuaW1wb3J0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgZnJvbSBcIi4uL3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IHJ1bGVzRnJvbUJORiB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFyc2VyXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHJ1bGVzRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpO1xuXG4gICAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgYmFzaWNMZXhlciA9IGJhc2ljTGV4ZXJGcm9tTGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gIGJhc2ljUGFyc2VyRnJvbVN0YXJ0UnVsZUFuZFJ1bGVNYXAoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgLy8gY29uc3QgeyBlbnRyaWVzIH0gPSBGbG9yZW5jZUxleGVyLFxuICAgIC8vICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgIC8vICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuOyAgLy8vXG4gICAgLy9cbiAgICAvLyBlbnRyaWVzLnB1c2goe1xuICAgIC8vICAgY3VzdG9tXG4gICAgLy8gfSk7XG4gICAgLy9cbiAgICAvLyBjb25zdCBmbG9yZW5jZUxleGVyID0gRmxvcmVuY2VMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAvLyAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApLCAgLy8vXG4gICAgLy8gICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgIC8vICAgICAgIHRva2VucyA9IGZsb3JlbmNlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgLy8gICAgICAgbm9kZSA9IGZsb3JlbmNlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZTtcblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IG9uQ2hhbmdlPXt0aGlzLmNoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSBpbnRlcm1lZGlhdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSwgaW5pdGlhbExleGljYWxQYXR0ZXJuIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lLCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgICAgIEEgOjo9IEEgXCJlXCJcbiAgICBcbiAgICAgICAgfCBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgXCJnXCJcblxuICAgICAgICB8IFwiaFwiXG5cbiAgICAgICAgO1xuICBcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gXCJnZWZcIjtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybikge1xuICBjb25zdCB1bmFzc2lnbmVkID0gXCJeLiokXCIsICAvLy9cbiAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICB9XG4gICAgICAgIF0sXG4gICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBiYXNpY0xleGVyO1xufVxuXG5mdW5jdGlvbiBiYXNpY1BhcnNlckZyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICBjb25zdCBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBiYXNpY1BhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInBhcnNlVHJlZSIsImdldFBhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImxleGljYWxQYXR0ZXJuIiwiZ2V0TGV4aWNhbFBhdHRlcm4iLCJiYXNpY0xleGVyIiwiYmFzaWNMZXhlckZyb21MZXhpY2FsUGF0dGVybiIsImJhc2ljUGFyc2VyIiwiYmFzaWNQYXJzZXJGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsImFicmlkZ2VkIiwiYXNQYXJzZVRyZWUiLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldFN0YXJ0UnVsZU5hbWUiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJ1bmFzc2lnbmVkIiwiY3VzdG9tIiwiZW50cmllcyIsIkJhc2ljTGV4ZXIiLCJmcm9tRW50cmllcyIsIkJhc2ljUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7K0JBaU1iLFNBSUU7OztlQUpGLFFBSUU7OztrRUFuTW9CLGlCQUFpQjtvQkFFZixNQUFNOzJCQUNILGNBQWM7NEJBQ2IsZUFBZTs2QkFDRyxnQkFBZ0I7MEJBQ00sYUFBYTs4REFFM0QsYUFBYTsrREFDWixjQUFjOzZEQUNiLGdCQUFnQjt3REFDaEIsZ0JBQWdCOzBEQUNiLG9CQUFvQjs0REFDbkIsb0JBQW9COzhEQUNsQixzQkFBc0I7a0VBQ3JCLHVCQUF1QjttRUFDdEIsd0JBQXdCO2dFQUN4Qix3QkFBd0I7MkVBQ3JCLDJCQUEyQjtvRkFDbEIsb0NBQW9DO3FGQUM1Qiw0Q0FBNEM7c0JBRW5FLHFCQUFxQjt5QkFDakIsY0FBYzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRS9DLElBQVFBLGFBQWEsR0FBeUZDLE1BQWMsUUFBQSxDQUFwSEQsYUFBYSxFQUFFRSxnQkFBZ0IsR0FBdUVELE1BQWMsUUFBQSxDQUFyR0MsZ0JBQWdCLEVBQUVDLDRCQUE0QixHQUF5Q0YsTUFBYyxRQUFBLENBQW5GRSw0QkFBNEIsRUFBRUMsa0NBQWtDLEdBQUtILE1BQWMsUUFBQSxDQUFyREcsa0NBQWtDLEFBQW9CO0FBRTdILElBQUEsQUFBTUMsSUFBSSxpQkFvS1AsQUFwS0g7OzthQUFNQSxJQUFJOzs7O1FBQ1JDLCtDQUFBQSxjQUFZLEVBQUcsU0FBQ0MsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDakMsTUFBS0MsYUFBYSxFQUFFLENBQUM7U0FDdEIsQ0FBQSxDQUFBO1FBRURBLCtDQUFBQSxlQUFhLEVBQUcsU0FBQ0YsS0FBSyxFQUFFQyxPQUFPLEVBQUs7WUFDbEMsSUFBSTtnQkFDRixJQUFNRSxHQUFHLEdBQUcsTUFBS0MsTUFBTSxFQUFFLEVBQ25CQyxhQUFhLEdBQUcsTUFBS0MsZ0JBQWdCLEVBQUUsQUFBQztnQkFFOUMsSUFBSUMsS0FBSyxHQUFHQyxJQUFBQSxPQUFZLGFBQUEsRUFBQ0wsR0FBRyxDQUFDLEFBQUM7Z0JBRTlCLElBQU1NLE9BQU8sR0FBR2QsZ0JBQWdCLENBQUNZLEtBQUssQ0FBQyxFQUNqQ0csU0FBUyxHQUFHYixrQ0FBa0MsQ0FBQ1UsS0FBSyxFQUFFRixhQUFhLENBQUMsQUFBQztnQkFFM0VNLElBQUFBLHVCQUFzQixRQUFBLEVBQUNELFNBQVMsRUFBRUQsT0FBTyxDQUFDLENBQUM7Z0JBRTNDRixLQUFLLEdBQUdYLDRCQUE0QixDQUFDYyxTQUFTLEVBQUVELE9BQU8sQ0FBQyxDQUFDO2dCQUV6RCxJQUFNRyxTQUFTLEdBQUcsSUFBSSxFQUNoQkMsV0FBVyxHQUFHcEIsYUFBYSxDQUFDYyxLQUFLLEVBQUVLLFNBQVMsQ0FBQyxFQUM3Q0UsV0FBVyxHQUFHRCxXQUFXLEFBQUMsRUFBRSxHQUFHO2dCQUVyQyxNQUFLRSxjQUFjLENBQUNELFdBQVcsQ0FBQyxDQUFDO2dCQUVqQyxJQUFNRSxTQUFTLEdBQUcsTUFBS0MsWUFBWSxDQUFDUCxTQUFTLEVBQUVELE9BQU8sQ0FBQyxBQUFDO2dCQUV4RCxNQUFLUyxZQUFZLENBQUNGLFNBQVMsQ0FBQyxDQUFDO2FBQzlCLENBQUMsT0FBT0csS0FBSyxFQUFFO2dCQUNkQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsS0FBSyxDQUFDLENBQUM7YUFDcEI7U0FDRixDQUFBLENBQUE7Ozs7O1lBRURGLEdBQVksRUFBWkEsY0FBWTttQkFBWkEsU0FBQUEsWUFBWSxDQUFDUCxTQUFTLEVBQUVELE9BQU8sRUFBRTtnQkFDL0IsSUFBSU8sU0FBUyxHQUFHLElBQUksQUFBQztnQkFFckIsSUFBTU0sY0FBYyxHQUFHLElBQUksQ0FBQ0MsaUJBQWlCLEVBQUUsRUFDekNDLFVBQVUsR0FBR0MsNEJBQTRCLENBQUNILGNBQWMsQ0FBQyxFQUN6REksV0FBVyxHQUFJQyxrQ0FBa0MsQ0FBQ2pCLFNBQVMsRUFBRUQsT0FBTyxDQUFDLEFBQUM7Z0JBRTVFLElBQU1tQixPQUFPLEdBQUcsSUFBSSxDQUFDQyxVQUFVLEVBQUUsRUFDM0JDLE1BQU0sR0FBR04sVUFBVSxDQUFDTyxRQUFRLENBQUNILE9BQU8sQ0FBQyxFQUNyQ0ksSUFBSSxHQUFHTixXQUFXLENBQUNPLEtBQUssQ0FBQ0gsTUFBTSxDQUFDLEFBQUM7Z0JBRXZDLHFDQUFxQztnQkFDckMsbURBQW1EO2dCQUNuRCxzQ0FBc0M7Z0JBQ3RDLEVBQUU7Z0JBQ0YsaUJBQWlCO2dCQUNqQixXQUFXO2dCQUNYLE1BQU07Z0JBQ04sRUFBRTtnQkFDRiw0REFBNEQ7Z0JBQzVELHNFQUFzRTtnQkFDdEUscUNBQXFDO2dCQUNyQyxrREFBa0Q7Z0JBQ2xELDZDQUE2QztnQkFFN0MsSUFBSUUsSUFBSSxLQUFLLElBQUksRUFBRTtvQkFDakIsSUFBTUUsOENBQThDLEdBQUcsSUFBSSxDQUFDQyxnREFBZ0QsRUFBRSxBQUFDO29CQUUvRyxJQUFJRCw4Q0FBOEMsRUFBRTt3QkFDbERFLElBQUFBLGdDQUErQixRQUFBLEVBQUNKLElBQUksQ0FBQyxDQUFDO3FCQUN2QztvQkFFRCxJQUFNSyxRQUFRLEdBQUcsSUFBSSxBQUFDO29CQUV0QnJCLFNBQVMsR0FBR2dCLElBQUksQ0FBQ00sV0FBVyxDQUFDUixNQUFNLEVBQUVPLFFBQVEsQ0FBQyxDQUFDO2lCQUNoRDtnQkFFRCxPQUFPckIsU0FBUyxDQUFDO2FBQ2xCOzs7WUFFRHVCLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLE9BQVE7a0NBRU4sb0JBQUNDLFdBQVUsV0FBQSxzQkFDVCxvQkFBQ0MsU0FBVyxRQUFBLHNCQUNWLG9CQUFDQyxXQUFPLFFBQUEsc0JBQ04sb0JBQUNDLFdBQVUsUUFBQSxRQUFDLGlCQUVaLENBQWEsZ0JBQ2Isb0JBQUNDLGVBQW1CLFFBQUE7d0JBQUNDLE9BQU8sRUFBRSxJQUFJLENBQUM5QyxZQUFZO3NCQUFJLGdCQUNuRCxvQkFBQzRDLFdBQVUsUUFBQSxRQUFDLEtBRVosQ0FBYSxnQkFDYixvQkFBQ0csSUFBVyxRQUFBO3dCQUFDRCxPQUFPLEVBQUUsSUFBSSxDQUFDOUMsWUFBWTtzQkFBSSxnQkFDM0Msb0JBQUM0QyxXQUFVLFFBQUEsUUFBQyxjQUVaLENBQWEsZ0JBQ2Isb0JBQUNJLFlBQW1CLFFBQUE7d0JBQUNDLFFBQVEsRUFBUkEsSUFBUTtzQkFBRyxDQUN4QixDQUNFLGdCQUNkLG9CQUFDQyxXQUFtQixvQkFBQSxPQUFHLGdCQUN2QixvQkFBQ0MsV0FBUyxVQUFBLHNCQUNSLG9CQUFDUixXQUFPLFFBQUEsc0JBQ04sb0JBQUNDLFdBQVUsUUFBQSxRQUFDLGlCQUVaLENBQWEsZ0JBQ2Isb0JBQUNRLGNBQWtCLFFBQUE7d0JBQUNOLE9BQU8sRUFBRSxJQUFJLENBQUM5QyxZQUFZO3NCQUFJLGdCQUNsRCxvQkFBQzRDLFdBQVUsUUFBQSxRQUFDLFNBRVosQ0FBYSxnQkFDYixvQkFBQ1MsUUFBZSxRQUFBO3dCQUFDUCxPQUFPLEVBQUUsSUFBSSxDQUFDOUMsWUFBWTtzQkFBSSxnQkFDL0Msb0JBQUM0QyxXQUFVLFFBQUEsUUFBQyxZQUVaLENBQWEsZ0JBQ2Isb0JBQUNVLFVBQWlCLFFBQUEsT0FBRyxnQkFDckIsb0JBQUNDLFVBQVMsUUFBQSxzQkFDUixvQkFBQ0MsaUNBQXVDLFFBQUE7d0JBQUNDLFFBQVEsRUFBRSxJQUFJLENBQUN0RCxhQUFhO3dCQUFFdUQsT0FBTyxFQUFQQSxJQUFPO3NCQUFHLEVBQUEscUNBRW5GLENBQVksQ0FDSixDQUNBLENBQ0Q7aUJBRWQsQ0FBRTthQUNKOzs7WUFFREMsR0FBVSxFQUFWQSxZQUFVO21CQUFWQSxTQUFBQSxVQUFVLEdBQUc7Z0JBQ1gsSUFBSSxDQUFDQyxhQUFhLEVBQUUsQ0FBQztnQkFFckIsSUFBb0YsWUFBZ0IsR0FBaEIsSUFBSSxDQUFDQyxXQUFXLEVBQTVGQyxVQUFVLEdBQWtFLFlBQWdCLENBQTVGQSxVQUFVLEVBQUVDLGNBQWMsR0FBa0QsWUFBZ0IsQ0FBaEZBLGNBQWMsRUFBRUMsb0JBQW9CLEdBQTRCLFlBQWdCLENBQWhFQSxvQkFBb0IsRUFBRUMscUJBQXFCLEdBQUssWUFBZ0IsQ0FBMUNBLHFCQUFxQixFQUN6RTdELEdBQUcsR0FBRzBELFVBQVUsRUFDaEJqQyxPQUFPLEdBQUdrQyxjQUFjLEVBQ3hCekQsYUFBYSxHQUFHMEQsb0JBQW9CLEVBQ3BDekMsY0FBYyxHQUFHMEMscUJBQXFCLEFBQUMsRUFBQyxHQUFHO2dCQUVqRCxJQUFJLENBQUNDLE1BQU0sQ0FBQzlELEdBQUcsQ0FBQyxDQUFDO2dCQUVqQixJQUFJLENBQUMrRCxVQUFVLENBQUN0QyxPQUFPLENBQUMsQ0FBQztnQkFFekIsSUFBSSxDQUFDdUMsZ0JBQWdCLENBQUM5RCxhQUFhLENBQUMsQ0FBQztnQkFFckMsSUFBSSxDQUFDK0QsaUJBQWlCLENBQUM5QyxjQUFjLENBQUMsQ0FBQztnQkFFdkMsSUFBSSxDQUFDdkIsWUFBWSxFQUFFLENBQUM7YUFDckI7Ozs7Q0F5QkYsa0JBbEtrQnNFLEtBQU8sUUFBQSxFQWtLekI7QUF2QkMsZ0JBM0lJdkUsSUFBSSxFQTJJRCtELFlBQVUsRUFBSSxpR0FVdkIsQ0FBRTtBQUVBLGdCQXZKSS9ELElBQUksRUF1SkRnRSxnQkFBYyxFQUFHLEtBQUssQ0FBQztBQUU5QixnQkF6SkloRSxJQUFJLEVBeUpEaUUsc0JBQW9CLEVBQUcsRUFBRSxDQUFDO0FBRWpDLGdCQTNKSWpFLElBQUksRUEySkRrRSx1QkFBcUIsRUFBRyxHQUFHLENBQUM7QUFFbkMsZ0JBN0pJbEUsSUFBSSxFQTZKRHdFLFNBQU8sRUFBRyxLQUFLLENBQUM7QUFFdkIsZ0JBL0pJeEUsSUFBSSxFQStKRHlFLG1CQUFpQixFQUFHO0lBQ3pCQyxTQUFTLEVBQUUsTUFBTTtDQUNsQixDQUFDO0lBR0osUUFJRSxHQUphQyxJQUFBQSxjQUFTLFFBQUEsRUFBQzNFLElBQUksQ0FBQztBQU05QixTQUFTMkIsNEJBQTRCLENBQUNILGNBQWMsRUFBRTtJQUNwRCxJQUFNb0QsVUFBVSxHQUFHLE1BQU0sRUFDbkJDLE1BQU0sR0FBR3JELGNBQWMsRUFDdkJzRCxPQUFPLEdBQUc7UUFDUjtZQUNFRCxNQUFNLEVBQU5BLE1BQU07U0FDUDtRQUNEO1lBQ0VELFVBQVUsRUFBVkEsVUFBVTtTQUNYO0tBQ0YsRUFDRGxELFVBQVUsR0FBR3FELFlBQVUsV0FBQSxDQUFDQyxXQUFXLENBQUNGLE9BQU8sQ0FBQyxBQUFDO0lBRW5ELE9BQU9wRCxVQUFVLENBQUM7Q0FDbkI7QUFFRCxTQUFTRyxrQ0FBa0MsQ0FBQ2pCLFNBQVMsRUFBRUQsT0FBTyxFQUFFO0lBQzlELElBQU1pQixXQUFXLEdBQUcsSUFBSXFELGFBQVcsWUFBQSxDQUFDckUsU0FBUyxFQUFFRCxPQUFPLENBQUMsQUFBQztJQUV4RCxPQUFPaUIsV0FBVyxDQUFDO0NBQ3BCIn0=