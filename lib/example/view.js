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
var View = function(Element1) {
    _inherits(View, _easy.Element);
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
                        _index.removeOrRenameIntermediateNodes(node);
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
                    var rules = this.bnfParser.rulesFromTokens(tokens), startRule = _rules.startRuleFromRules(rules);
                    var ruleMap = _rules.ruleMapFromRules(rules);
                    startRule = _index.eliminateLeftRecursion(startRule, ruleMap);
                    rules = _rules.rulesFromStartRuleAndRuleMap(startRule, ruleMap);
                    var multiLine = true, parseTree = this.getParseTree(startRule, ruleMap), rulesString = _rules.rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
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
                    React.createElement(_heading.default, null, "Grammar utilities example"),
                    React.createElement(_easyLayout.ColumnsDiv, null, React.createElement(_sizeable.default, null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading.default, null, "Lexical pattern"), React.createElement(_lexicalPattern.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "BNF"), React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "Adjusted BNF"), React.createElement(_adjustedBNF.default, {
                        readOnly: true
                    }))), React.createElement(_vertical.default, null), React.createElement(_column.default, null, React.createElement(_easyLayout.RowsDiv, null, React.createElement(_subHeading.default, null, "Content"), React.createElement(_content.default, {
                        onKeyUp: keyUpHandler
                    }), React.createElement(_subHeading.default, null, "Parse tree"), React.createElement(_parseTree.default, null), React.createElement(_paragraph.default, null, React.createElement(_removeOrRenameIntermediateNodes.default, {
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
                exampleView.initialise();
                return exampleView;
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "tagName", "div");
exports.default = View;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgUm93c0RpdiwgQ29sdW1uc0RpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgQk5GTGV4ZXIsIEJhc2ljTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBCTkZQYXJzZXIsIEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBIZWFkaW5nIGZyb20gXCIuL2hlYWRpbmdcIjtcbmltcG9ydCBDb2x1bW5EaXYgZnJvbSBcIi4vZGl2L2NvbHVtblwiO1xuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgVmVydGljYWxTcGxpdHRlckRpdiBmcm9tIFwiLi9kaXYvc3BsaXR0ZXIvdmVydGljYWxcIjtcbmltcG9ydCBSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc1wiXG5cbmltcG9ydCB7IGZpbmRSdWxlQnlOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBVTkFTU0lHTkVEX0VOVFJZIH0gZnJvbSBcIi4uL2NvbnN0YW50c1wiO1xuaW1wb3J0IHsgcnVsZXNBc1N0cmluZywgc3RhcnRSdWxlRnJvbVJ1bGVzLCBydWxlTWFwRnJvbVJ1bGVzLCBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGluaXRpYWxCTkYgPSBgXG5leHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICA7XG5cbm9wZXJhdG9yICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxudGVybSAgICAgICAgICA6Oj0gL1xcZCsvIDtcbmA7XG5cbiAgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIlxcXFxkK3wuXCI7XG5cbiAgY29uc3RydWN0b3Ioc2VsZWN0b3JPckRPTUVsZW1lbnQsIGJuZkxleGVyLCBibmZQYXJzZXIpIHtcbiAgICBzdXBlcihzZWxlY3Rvck9yRE9NRWxlbWVudCk7XG5cbiAgICB0aGlzLmJuZkxleGVyID0gYm5mTGV4ZXI7XG4gICAgdGhpcy5ibmZQYXJzZXIgPSBibmZQYXJzZXI7XG4gIH1cblxuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7IGN1c3RvbSB9LFxuICAgICAgICAgICAgeyB1bmFzc2lnbmVkIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICAgIHRva2VucyA9IHRoaXMuYm5mTGV4ZXIudG9rZW5zRnJvbUJORihibmYpO1xuXG4gICAgICBsZXQgcnVsZXMgPSB0aGlzLmJuZlBhcnNlci5ydWxlc0Zyb21Ub2tlbnModG9rZW5zKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPEhlYWRpbmc+XG4gICAgICAgIEdyYW1tYXIgdXRpbGl0aWVzIGV4YW1wbGVcbiAgICAgIDwvSGVhZGluZz4sXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IHRoaXMuaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gdGhpcy5pbml0aWFsTGV4aWNhbFBhdHRlcm47IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbFBhdHRlcm4obGV4aWNhbFBhdHRlcm4pO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZnJvbUNsYXNzKENsYXNzLCBwcm9wZXJ0aWVzKSB7XG4gICAgY29uc3QgYm5mTGV4ZXIgPSBCTkZMZXhlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGJuZlBhcnNlciA9IEJORlBhcnNlci5mcm9tTm90aGluZygpLFxuICAgICAgICAgIGV4YW1wbGVWaWV3ID0gRWxlbWVudC5mcm9tQ2xhc3MoQ2xhc3MsIHByb3BlcnRpZXMsIGJuZkxleGVyLCBibmZQYXJzZXIpO1xuXG4gICAgZXhhbXBsZVZpZXcuaW5pdGlhbGlzZSgpO1xuXG4gICAgcmV0dXJuIGV4YW1wbGVWaWV3XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLEtBQUE7SUFDQSxXQUFBO0lBQ0EsWUFBQTtJQUNBLGFBQUE7SUFDQSxNQUFBO0lBRUEsUUFBQTtJQUNBLE9BQUE7SUFDQSxVQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxJQUFBO0lBQ0EsUUFBQTtJQUNBLFVBQUE7SUFDQSxlQUFBO0lBQ0EsWUFBQTtJQUNBLFNBQUE7SUFDQSxnQ0FBQTtJQUVBLEtBQUE7SUFDQSxVQUFBO0lBQ0EsTUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxJQUFBLFlBQUEsUUFBQTtjQUFBLElBQUEsRUF2QkEsS0FBQTthQXVCQSxJQUFBLENBbUJBLG9CQUFBLEVBQUEsUUFBQSxFQUFBLFNBQUE7OEJBbkJBLElBQUE7O2lFQUFBLElBQUEsYUFvQkEsb0JBQUE7d0RBbkJBLFVBQUEsSUFBQSxrT0FZQTt3REFFQSxjQUFBLElBQUEsT0FBQTt3REFFQSxxQkFBQSxJQUFBLE1BQUE7Y0FLQSxRQUFBLEdBQUEsUUFBQTtjQUNBLFNBQUEsR0FBQSxTQUFBOzs7aUJBdkJBLElBQUE7O0FBMEJBLGVBQUEsR0FBQSxZQUFBOzRCQUFBLFlBQUEsQ0FBQSxTQUFBLEVBQUEsT0FBQTtvQkFDQSxTQUFBLEdBQUEsSUFBQTtvQkFFQSxjQUFBLFFB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