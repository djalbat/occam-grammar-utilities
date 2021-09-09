"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easy = require("easy");
var _easyLayout = require("easy-layout");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _index = require("../index");
var _heading = _interopRequireDefault(require("./heading"));
var _column = _interopRequireDefault(require("./div/column"));
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = _interopRequireDefault(require("./textarea/adjustedBNF"));
var _vertical = _interopRequireDefault(require("./div/splitter/vertical"));
var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _rule = require("../utilities/rule");
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
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
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
var _typeof = function(obj) {
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    function View(selectorOrDOMElement, bnfLexer, bnfParser) {
        _classCallCheck(this, View);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(View).call(this, selectorOrDOMElement));
        _defineProperty(_assertThisInitialized(_this), "initialBNF", "\nexpression    ::= expression operator expression\n\n                | \"(\" expression \")\"\n\n                | term\n\n                ;\n\noperator      ::= \"+\" | \"-\" | \"/\" | \"*\" ;\n\nterm          ::= /\\d+/ ;\n");
        _defineProperty(_assertThisInitialized(_this), "initialContent", "(1+2)/3");
        _defineProperty(_assertThisInitialized(_this), "initialLexicalPattern", "\\d+|.");
        _this.bnfLexer = bnfLexer;
        _this.bnfParser = bnfParser;
        return _this;
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
                    var removeOrRenameIntermediateNodesCheckboxChecked = this.isRemoveOrRenameIntermediateNodesCheckboxChecked();
                    if (removeOrRenameIntermediateNodesCheckboxChecked) {
                        (0, _index).removeOrRenameIntermediateNodes(node);
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
                try {
                    var bnf = this.getBNF(), tokens = this.bnfLexer.tokensFromBNF(bnf);
                    var rules = this.bnfParser.rulesFromTokens(tokens), startRule = (0, _rules).startRuleFromRules(rules);
                    var ruleMap = (0, _rules).ruleMapFromRules(rules);
                    startRule = (0, _index).eliminateLeftRecursion(startRule, ruleMap);
                    rules = (0, _rules).rulesFromStartRuleAndRuleMap(startRule, ruleMap);
                    var multiLine = true, parseTree = this.getParseTree(startRule, ruleMap), rulesString = (0, _rules).rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                    this.setParseTree(parseTree);
                    this.setAdjustedBNF(adjustedBNF);
                } catch (error) {
                    console.log(error);
                    this.clearParseTree();
                    this.clearAdjustedBNF();
                }
            }
        },
        {
            key: "childElements",
            value: function childElements() {
                var keyUpHandler = this.keyUpHandler.bind(this), changeHandler = this.changeHandler.bind(this);
                return [
                    /*#__PURE__*/ React.createElement(_heading.default, null, "Grammar utilities example"),
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical pattern"), /*#__PURE__*/ React.createElement(_lexicalPattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
                        readOnly: true
                    }))), /*#__PURE__*/ React.createElement(_vertical.default, null), /*#__PURE__*/ React.createElement(_column.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_removeOrRenameIntermediateNodes.default, {
                        onChange: changeHandler,
                        checked: true
                    }), "Remove or rename intermediate nodes"))))
                ];
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var bnf = this.initialBNF, content = this.initialContent, lexicalPattern = this.initialLexicalPattern; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalPattern(lexicalPattern);
                this.keyUpHandler();
            }
        }
    ], [
        {
            key: "fromClass",
            value: function fromClass(Class, properties) {
                var bnfLexer = _occamLexers.BNFLexer.fromNothing(), bnfParser = _occamParsers.BNFParser.fromNothing(), exampleView = _easy.Element.fromClass(Class, properties, bnfLexer, bnfParser);
                return exampleView;
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiRWxlbWVudCIsIlJvd3NEaXYiLCJDb2x1bW5zRGl2IiwiQk5GTGV4ZXIiLCJCYXNpY0xleGVyIiwiQk5GUGFyc2VyIiwiQmFzaWNQYXJzZXIiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyIsIkhlYWRpbmciLCJDb2x1bW5EaXYiLCJQYXJhZ3JhcGgiLCJTdWJIZWFkaW5nIiwiU2l6ZWFibGVEaXYiLCJCTkZUZXh0YXJlYSIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiTGV4aWNhbFBhdHRlcm5JbnB1dCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IiwiZmluZFJ1bGVCeU5hbWUiLCJVTkFTU0lHTkVEX0VOVFJZIiwicnVsZXNBc1N0cmluZyIsInN0YXJ0UnVsZUZyb21SdWxlcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIiwiVmlldyIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsImNvbnN0cnVjdG9yIiwic2VsZWN0b3JPckRPTUVsZW1lbnQiLCJibmZMZXhlciIsImJuZlBhcnNlciIsImdldFBhcnNlVHJlZSIsInN0YXJ0UnVsZSIsInJ1bGVNYXAiLCJwYXJzZVRyZWUiLCJsZXhpY2FsUGF0dGVybiIsImdldExleGljYWxQYXR0ZXJuIiwidW5hc3NpZ25lZCIsImN1c3RvbSIsImVudHJpZXMiLCJiYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwidG9rZW5zRnJvbUJORiIsInJ1bGVzIiwicnVsZXNGcm9tVG9rZW5zIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckFkanVzdGVkQk5GIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJvbktleVVwIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsInRhZ05hbWUiLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJmcm9tTm90aGluZyIsImV4YW1wbGVWaWV3Il0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7OztBQUVZLEdBQU0sQ0FBTixLQUFNO0FBQ00sR0FBYSxDQUFiLFdBQWE7QUFDWixHQUFjLENBQWQsWUFBYztBQUNaLEdBQWUsQ0FBZixhQUFlO0FBQ2tCLEdBQVUsQ0FBVixNQUFVO0FBRTlELEdBQVcsQ0FBWCxRQUFXO0FBQ1QsR0FBYyxDQUFkLE9BQWM7QUFDZCxHQUFhLENBQWIsVUFBYTtBQUNaLEdBQWMsQ0FBZCxXQUFjO0FBQ2IsR0FBZ0IsQ0FBaEIsU0FBZ0I7QUFDaEIsR0FBZ0IsQ0FBaEIsSUFBZ0I7QUFDWixHQUFvQixDQUFwQixRQUFvQjtBQUNsQixHQUFzQixDQUF0QixVQUFzQjtBQUNwQixHQUF3QixDQUF4QixlQUF3QjtBQUN4QixHQUF3QixDQUF4QixZQUF3QjtBQUN4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