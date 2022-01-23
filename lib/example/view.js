"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
var _occamLexers = require("occam-lexers");
var _occamParsers = require("occam-parsers");
var _easyLayout = require("easy-layout");
var _index = require("../index");
var _paragraph = _interopRequireDefault(require("./paragraph"));
var _subHeading = _interopRequireDefault(require("./subHeading"));
var _sizeable = _interopRequireDefault(require("./div/sizeable"));
var _bnf = _interopRequireDefault(require("./textarea/bnf"));
var _content = _interopRequireDefault(require("./textarea/content"));
var _parseTree = _interopRequireDefault(require("./textarea/parseTree"));
var _lexicalPattern = _interopRequireDefault(require("./input/lexicalPattern"));
var _adjustedBNF = _interopRequireDefault(require("./textarea/adjustedBNF"));
var _removeOrRenameIntermediateNodes = _interopRequireDefault(require("./checkbox/removeOrRenameIntermediateNodes"));
var _parser = require("../utilities/parser");
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
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _createSuper(View);
    function View() {
        _classCallCheck(this, View);
        return _super.apply(this, arguments);
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
                    var bnf = this.getBNF();
                    var rules = (0, _parser).rulesFromBNF(bnf), startRule = (0, _rules).startRuleFromRules(rules);
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
                    /*#__PURE__*/ React.createElement(_easyLayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical pattern"), /*#__PURE__*/ React.createElement(_lexicalPattern.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                        onKeyUp: keyUpHandler
                    }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
                        readOnly: true
                    }))), /*#__PURE__*/ React.createElement(_easyLayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easyLayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easyLayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
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
                var _constructor = this.constructor, initialBNF = _constructor.initialBNF, initialContent = _constructor.initialContent, initialLexicalPattern = _constructor.initialLexicalPattern, bnf = initialBNF, content = initialContent, lexicalPattern = initialLexicalPattern; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalPattern(lexicalPattern);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrapNativeSuper(_easy.Element));
_defineProperty(View, "initialBNF", "\nexpression    ::= expression operator expression\n\n                | \"(\" expression \")\"\n\n                | term\n\n                ;\n\noperator      ::= \"+\" | \"-\" | \"/\" | \"*\" ;\n\nterm          ::= /\\d+/ ;\n");
_defineProperty(View, "initialContent", "(1+2)/3");
_defineProperty(View, "initialLexicalPattern", "\\d+|.");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IFJvd3NEaXYsIENvbHVtbkRpdiwgQ29sdW1uc0RpdiwgVmVydGljYWxTcGxpdHRlckRpdiB9IGZyb20gXCJlYXN5LWxheW91dFwiO1xuaW1wb3J0IHsgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiwgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2RlcyB9IGZyb20gXCIuLi9pbmRleFwiOyAvLy9cblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IExleGljYWxQYXR0ZXJuSW5wdXQgZnJvbSBcIi4vaW5wdXQvbGV4aWNhbFBhdHRlcm5cIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94IGZyb20gXCIuL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNcIlxuXG5pbXBvcnQgeyBydWxlc0Zyb21CTkYgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnNlclwiO1xuaW1wb3J0IHsgVU5BU1NJR05FRF9FTlRSWSB9IGZyb20gXCIuLi9jb25zdGFudHNcIjtcbmltcG9ydCB7IHJ1bGVzQXNTdHJpbmcsIHN0YXJ0UnVsZUZyb21SdWxlcywgcnVsZU1hcEZyb21SdWxlcywgcnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZXNcIjtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBnZXRQYXJzZVRyZWUoc3RhcnRSdWxlLCBydWxlTWFwKSB7XG4gICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICBjb25zdCBsZXhpY2FsUGF0dGVybiA9IHRoaXMuZ2V0TGV4aWNhbFBhdHRlcm4oKSxcbiAgICAgICAgICB1bmFzc2lnbmVkID0gVU5BU1NJR05FRF9FTlRSWSxcbiAgICAgICAgICBjdXN0b20gPSBsZXhpY2FsUGF0dGVybiwgIC8vL1xuICAgICAgICAgIGVudHJpZXMgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGN1c3RvbVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgdW5hc3NpZ25lZFxuICAgICAgICAgICAgfVxuICAgICAgICAgIF0sXG4gICAgICAgICAgYmFzaWNMZXhlciA9IEJhc2ljTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyksXG4gICAgICAgICAgYmFzaWNQYXJzZXIgPSBuZXcgQmFzaWNQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKSwgIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICB0b2tlbnMgPSBiYXNpY0xleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgIG5vZGUgPSBiYXNpY1BhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICBpZiAocmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzKG5vZGUpO1xuICAgICAgfVxuXG4gICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBhcnNlVHJlZTtcbiAgfVxuXG4gIGtleVVwSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRoaXMuY2hhbmdlSGFuZGxlcigpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlcihldmVudCwgZWxlbWVudCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpO1xuXG4gICAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKSxcbiAgICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXMocnVsZXMpO1xuXG4gICAgICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApLFxuICAgICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuXG4gICAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuXG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG5cbiAgICAgIHRoaXMuY2xlYXJBZGp1c3RlZEJORigpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgY29uc3Qga2V5VXBIYW5kbGVyID0gdGhpcy5rZXlVcEhhbmRsZXIuYmluZCh0aGlzKSxcbiAgICAgICAgICBjaGFuZ2VIYW5kbGVyID0gdGhpcy5jaGFuZ2VIYW5kbGVyLmJpbmQodGhpcyk7XG5cbiAgICByZXR1cm4gKFtcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIHBhdHRlcm5cbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsUGF0dGVybklucHV0IG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXtrZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e2NoYW5nZUhhbmRsZXJ9IGNoZWNrZWQgLz5cbiAgICAgICAgICAgICAgUmVtb3ZlIG9yIHJlbmFtZSBpbnRlcm1lZGlhdGUgbm9kZXNcbiAgICAgICAgICAgIDwvUGFyYWdyYXBoPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICBdKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsTGV4aWNhbFBhdHRlcm4gfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsUGF0dGVybiA9IGluaXRpYWxMZXhpY2FsUGF0dGVybjsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsUGF0dGVybihsZXhpY2FsUGF0dGVybik7XG5cbiAgICB0aGlzLmtleVVwSGFuZGxlcigpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG5leHByZXNzaW9uICAgIDo6PSBleHByZXNzaW9uIG9wZXJhdG9yIGV4cHJlc3Npb25cblxuICAgICAgICAgICAgICAgIHwgXCIoXCIgZXhwcmVzc2lvbiBcIilcIlxuXG4gICAgICAgICAgICAgICAgfCB0ZXJtXG5cbiAgICAgICAgICAgICAgICA7XG5cbm9wZXJhdG9yICAgICAgOjo9IFwiK1wiIHwgXCItXCIgfCBcIi9cIiB8IFwiKlwiIDtcblxudGVybSAgICAgICAgICA6Oj0gL1xcXFxkKy8gO1xuYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcIigxKzIpLzNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxQYXR0ZXJuID0gXCJcXFxcZCt8LlwiO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJjdXN0b20iLCJlbnRyaWVzIiwiYmFzaWNMZXhlciIsImZyb21FbnRyaWVzIiwiYmFzaWNQYXJzZXIiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImFzUGFyc2VUcmVlIiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsInJ1bGVzIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsInNldEFkanVzdGVkQk5GIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2xlYXJQYXJzZVRyZWUiLCJjbGVhckFkanVzdGVkQk5GIiwiY2hpbGRFbGVtZW50cyIsImJpbmQiLCJvbktleVVwIiwicmVhZE9ubHkiLCJvbkNoYW5nZSIsImNoZWNrZWQiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxQYXR0ZXJuIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxQYXR0ZXJuIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxDQUFZOzs7OztBQUVVLEdBQWlCLENBQWpCLGNBQWlCO0FBRWYsR0FBTSxDQUFOLEtBQU07QUFDSCxHQUFjLENBQWQsWUFBYztBQUNiLEdBQWUsQ0FBZixhQUFlO0FBQ3lCLEdBQWEsQ0FBYixXQUFhO0FBQ1QsR0FBVSxDQUFWLE1BQVU7QUFFNUQsR0FBYSxDQUFiLFVBQWE7QUFDWixHQUFjLENBQWQsV0FBYztBQUNiLEdBQWdCLENBQWhCLFNBQWdCO0FBQ2hCLEdBQWdCLENBQWhCLElBQWdCO0FBQ1osR0FBb0IsQ0FBcEIsUUFBb0I7QUFDbEIsR0FBc0IsQ0FBdEIsVUFBc0I7QUFDcEIsR0FBd0IsQ0FBeEIsZUFBd0I7QUFDeEIsR0FB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