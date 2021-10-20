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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIsIEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNBc1N0cmluZywgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluaXRpYWxCTkYgPSBgXG5leHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICA7XG5cbm9wZXJhdG9yICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxudGVybSAgICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuYDtcblxuICBpbml0aWFsQ29udGVudCA9IFwiKDErMikvM1wiO1xuXG4gIGluaXRpYWxMZXhpY2FsUGF0dGVybiA9IFwiXFxcXGQrfC5cIjtcblxuICBjb25zdHJ1Y3RvcihzZWxlY3Rvck9yRE9NRWxlbWVudCwgYm5mTGV4ZXIsIGJuZlBhcnNlcikge1xuICAgIHN1cGVyKHNlbGVjdG9yT3JET01FbGVtZW50KTtcblxuICAgIHRoaXMuYm5mTGV4ZXIgPSBibmZMZXhlcjtcbiAgICB0aGlzLmJuZlBhcnNlciA9IGJuZlBhcnNlcjtcbiAgfVxuXG4gIGdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApIHtcbiAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgIGNvbnN0IGxleGljYWxQYXR0ZXJuID0gdGhpcy5nZXRMZXhpY2FsUGF0dGVybigpLFxuICAgICAgICAgIHVuYXNzaWduZWQgPSBVTkFTU0lHTkVEX0VOVFJZLFxuICAgICAgICAgIGN1c3RvbSA9IGxleGljYWxQYXR0ZXJuLCAgLy8vXG4gICAgICAgICAgZW50cmllcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY3VzdG9tXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICB1bmFzc2lnbmVkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBiYXNpY0xleGVyID0gQmFzaWNMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKSxcbiAgICAgICAgICBiYXNpY1BhcnNlciA9IG5ldyBCYXNpY1BhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApLCAgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHRva2VucyA9IGJhc2ljTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgbm9kZSA9IGJhc2ljUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgIGlmIChyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMobm9kZSk7XG4gICAgICB9XG5cbiAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcGFyc2VUcmVlO1xuICB9XG5cbiAga2V5VXBIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdGhpcy5jaGFuZ2VIYW5kbGVyKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyKGV2ZW50LCBlbGVtZW50KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmJuZkxleGVyLnRva2Vuc0Zyb21CTkYoYm5mKTtcblxuICAgICAgbGV0IHJ1bGVzID0gdGhpcy5ibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2VucyksXG4gICAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBzdGFydFJ1bGUgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIHJ1bGVzID0gcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcChzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgICAgcGFyc2VUcmVlID0gdGhpcy5nZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSxcbiAgICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcblxuICAgICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcblxuICAgICAgdGhpcy5jbGVhclBhcnNlVHJlZSgpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIGNvbnN0IGtleVVwSGFuZGxlciA9IHRoaXMua2V5VXBIYW5kbGVyLmJpbmQodGhpcyksXG4gICAgICAgICAgY2hhbmdlSGFuZGxlciA9IHRoaXMuY2hhbmdlSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChbXG5cbiAgICAgIDxIZWFkaW5nPlxuICAgICAgICBHcmFtbWFyIHV0aWxpdGllcyBleGFtcGxlXG4gICAgICA8L0hlYWRpbmc+LFxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSBpbnRlcm1lZGlhdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCBibmYgPSB0aGlzLmluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IHRoaXMuaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGZyb21DbGFzcyhDbGFzcywgcHJvcGVydGllcykge1xuICAgIGNvbnN0IGJuZkxleGVyID0gQk5GTGV4ZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKSxcbiAgICAgICAgICBleGFtcGxlVmlldyA9IEVsZW1lbnQuZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzLCBibmZMZXhlciwgYm5mUGFyc2VyKTtcblxuICAgIHJldHVybiBleGFtcGxlVmlld1xuICB9XG59XG4iXSwibmFtZXMiOlsiVmlldyIsInNlbGVjdG9yT3JET01FbGVtZW50IiwiYm5mTGV4ZXIiLCJibmZQYXJzZXIiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbFBhdHRlcm4iLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJjdXN0b20iLCJlbnRyaWVzIiwiYmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImFzUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRQYXJzZVRyZWUiLCJzZXRBZGp1c3RlZEJORiIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNsZWFyUGFyc2VUcmVlIiwiY2xlYXJBZGp1c3RlZEJORiIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwib25LZXlVcCIsInJlYWRPbmx5Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbFBhdHRlcm4iLCJmcm9tQ2xhc3MiLCJDbGFzcyIsInByb3BlcnRpZXMiLCJmcm9tTm90aGluZyIsImV4YW1wbGVWaWV3IiwidGFnTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsQ0FBWTs7Ozs7QUFFWSxHQUFNLENBQU4sS0FBTTtBQUNNLEdBQWEsQ0FBYixXQUFhO0FBQ1osR0FBYyxDQUFkLFlBQWM7QUFDWixHQUFlLENBQWYsYUFBZTtBQUNrQixHQUFVLENBQVYsTUFBVTtBQUU5RCxHQUFXLENBQVgsUUFBVztBQUNULEdBQWMsQ0FBZCxPQUFjO0FBQ2QsR0FBYSxDQUFiLFVBQWE7QUFDWixHQUFjLENBQWQsV0FBYztBQUNiLEdBQWdCLENBQWhCLFNBQWdCO0FBQ2hCLEdBQWdCLENBQWhCLElBQWdCO0FBQ1osR0FBb0IsQ0FBcEIsUUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDcEIsR0FBd0IsQ0FBeEIsZUFBd0I7QUFDeEIsR0FBd0IsQ0FBeEIsWUFBd0I7QUFDeEIsR0FBeUIsQ0FBekIsU0FBeUI7QUFDTCxHQUE0QyxDQUE1QyxnQ0FBNEM7QUFFakUsR0FBbUIsQ0FBbkIsS0FBbUI7QUFDakIsR0FBYyxDQUFkLFVBQWM7QUFDbUQsR0FBb0IsQ0FBcEIsTUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRWpHQSxJQUFJLGlCQUFWLFFBQVE7Y0FBRkEsSUFBSTthQUFKQSxJQUFJLENBbUJYQyxvQkFBb0IsRUFBRUMsUUFBUSxFQUFFQyxTQUFT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