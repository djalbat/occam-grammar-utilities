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
function _construct(Parent1, args1, Class1) {
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
function _wrapNativeSuper(Class2) {
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
    return _wrapNativeSuper(Class2);
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
var rulesAsString = _occamParsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
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
                    var rules = (0, _parser).rulesFromBNF(bnf);
                    var ruleMap = ruleMapFromRules(rules);
                    var startRule = startRuleFromRules(rules);
                    startRule = (0, _index).eliminateLeftRecursion(startRule, ruleMap);
                    rules = (0, _rules).rulesFromStartRuleAndRuleMap(startRule, ruleMap);
                    var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                    this.setAdjustedBNF(adjustedBNF);
                    var parseTree = this.getParseTree(startRule, ruleMap);
                    this.setParseTree(parseTree);
                } catch (error) {
                    console.log(error);
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
_defineProperty(View, "initialBNF", '\n  \nA ::= B\n\n    | C "f"\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n\n');
_defineProperty(View, "initialContent", "f");
_defineProperty(View, "initialLexicalPattern", ".");
_defineProperty(View, "tagName", "div");
_defineProperty(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easyWithStyle).default(View)(_templateObject());
exports.default = _default;
'\n\nHow come this works...\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n...but this doesn\'t:\n\nA ::= C "f"\n\n    | B\n\n    ;\n\nB ::= "h" C ;\n\nC ::= A ;\n \n\n----------------------------------------\n\nThis one needs further investigation. Try removing the "e" definition and then remove each kind of left recurstion in turn.\n\n    A ::= A "f"\n    \n        | B\n    \n        | "e"\n    \n        ;\n    \n    B ::= C\n    \n        | A "g"\n    \n        ;\n    \n    C ::= "h" ;\n\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQmFzaWNMZXhlciB9IGZyb20gXCJvY2NhbS1sZXhlcnNcIjtcbmltcG9ydCB7IEJhc2ljUGFyc2VyLCBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcbmltcG9ydCB7IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24sIHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXMgfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5cbmltcG9ydCBQYXJhZ3JhcGggZnJvbSBcIi4vcGFyYWdyYXBoXCI7XG5pbXBvcnQgU3ViSGVhZGluZyBmcm9tIFwiLi9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vZGl2L3NpemVhYmxlXCI7XG5pbXBvcnQgQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYm5mXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBMZXhpY2FsUGF0dGVybklucHV0IGZyb20gXCIuL2lucHV0L2xleGljYWxQYXR0ZXJuXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzXCJcblxuaW1wb3J0IHsgcnVsZXNGcm9tQk5GIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJzZXJcIjtcbmltcG9ydCB7IFVOQVNTSUdORURfRU5UUlkgfSBmcm9tIFwiLi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgeyBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAgZ2V0UGFyc2VUcmVlKHN0YXJ0UnVsZSwgcnVsZU1hcCkge1xuICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgY29uc3QgbGV4aWNhbFBhdHRlcm4gPSB0aGlzLmdldExleGljYWxQYXR0ZXJuKCksXG4gICAgICAgICAgdW5hc3NpZ25lZCA9IFVOQVNTSUdORURfRU5UUlksXG4gICAgICAgICAgY3VzdG9tID0gbGV4aWNhbFBhdHRlcm4sICAvLy9cbiAgICAgICAgICBlbnRyaWVzID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjdXN0b21cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHVuYXNzaWduZWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIGJhc2ljTGV4ZXIgPSBCYXNpY0xleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpLFxuICAgICAgICAgIGJhc2ljUGFyc2VyID0gbmV3IEJhc2ljUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCksICAvLy9cbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgdG9rZW5zID0gYmFzaWNMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICBub2RlID0gYmFzaWNQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICBjb25zdCByZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQoKTtcblxuICAgICAgaWYgKHJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgcmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlcyhub2RlKTtcbiAgICAgIH1cblxuICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgIH1cblxuICAgIHJldHVybiBwYXJzZVRyZWU7XG4gIH1cblxuICBrZXlVcEhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0aGlzLmNoYW5nZUhhbmRsZXIoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIoZXZlbnQsIGVsZW1lbnQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKTtcblxuICAgICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICAgICAgbGV0IHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlcyhydWxlcyk7XG5cbiAgICAgIHN0YXJ0UnVsZSA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24oc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICAgICAgcnVsZXMgPSBydWxlc0Zyb21TdGFydFJ1bGVBbmRSdWxlTWFwKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWUgPSB0aGlzLmdldFBhcnNlVHJlZShzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNoYW5nZUhhbmRsZXIgPSB0aGlzLmNoYW5nZUhhbmRsZXIuYmluZCh0aGlzKTtcblxuICAgIHJldHVybiAoW1xuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgcGF0dGVyblxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxQYXR0ZXJuSW5wdXQgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17a2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17Y2hhbmdlSGFuZGxlcn0gY2hlY2tlZCAvPlxuICAgICAgICAgICAgICBSZW1vdmUgb3IgcmVuYW1lIGludGVybWVkaWF0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgIF0pO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxMZXhpY2FsUGF0dGVybiB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxQYXR0ZXJuID0gaW5pdGlhbExleGljYWxQYXR0ZXJuOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxQYXR0ZXJuKGxleGljYWxQYXR0ZXJuKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGBcbiAgXG5BIDo6PSBCXG5cbiAgICB8IEMgXCJmXCJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IFwiZlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbFBhdHRlcm4gPSBcIi5cIjtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuYFxuXG5Ib3cgY29tZSB0aGlzIHdvcmtzLi4uXG5cbkEgOjo9IEMgXCJmXCJcblxuICAgIHwgQlxuXG4gICAgO1xuXG5CIDo6PSBcImhcIiBDIDtcblxuQyA6Oj0gQSA7XG4gXG4uLi5idXQgdGhpcyBkb2Vzbid0OlxuXG5BIDo6PSBDIFwiZlwiXG5cbiAgICB8IEJcblxuICAgIDtcblxuQiA6Oj0gXCJoXCIgQyA7XG5cbkMgOjo9IEEgO1xuIFxuXG4tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblRoaXMgb25lIG5lZWRzIGZ1cnRoZXIgaW52ZXN0aWdhdGlvbi4gVHJ5IHJlbW92aW5nIHRoZSBcImVcIiBkZWZpbml0aW9uIGFuZCB0aGVuIHJlbW92ZSBlYWNoIGtpbmQgb2YgbGVmdCByZWN1cnN0aW9uIGluIHR1cm4uXG5cbiAgICBBIDo6PSBBIFwiZlwiXG4gICAgXG4gICAgICAgIHwgQlxuICAgIFxuICAgICAgICB8IFwiZVwiXG4gICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBCIDo6PSBDXG4gICAgXG4gICAgICAgIHwgQSBcImdcIlxuICAgIFxuICAgICAgICA7XG4gICAgXG4gICAgQyA6Oj0gXCJoXCIgO1xuXG5gXG4iXSwibmFtZXMiOlsicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlcyIsIlZpZXciLCJnZXRQYXJzZVRyZWUiLCJzdGFydFJ1bGUiLCJydWxlTWFwIiwicGFyc2VUcmVlIiwibGV4aWNhbFBhdHRlcm4iLCJnZXRMZXhpY2FsUGF0dGVybiIsInVuYXNzaWduZWQiLCJVTkFTU0lHTkVEX0VOVFJZIiwiY3VzdG9tIiwiZW50cmllcyIsImJhc2ljTGV4ZXIiLCJCYXNpY0xleGVyIiwiZnJvbUVudHJpZXMiLCJiYXNpY1BhcnNlciIsIkJhc2ljUGFyc2VyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInJlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1JlbW92ZU9yUmVuYW1lSW50ZXJtZWRpYXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZW1vdmVPclJlbmFtZUludGVybWVkaWF0ZU5vZGVzIiwiYXNQYXJzZVRyZWUiLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwicnVsZXMiLCJydWxlc0Zyb21CTkYiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwicnVsZXNGcm9tU3RhcnRSdWxlQW5kUnVsZU1hcCIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJiaW5kIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsUGF0dGVybklucHV0Iiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmVtb3ZlT3JSZW5hbWVJbnRlcm1lZGlhdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJjaGVja2VkIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsUGF0dGVybiIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsUGF0dGVybiIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFUyxJQUFBLGNBQWlCLGtDQUFqQixpQkFBaUIsRUFBQTtBQUVmLElBQUEsS0FBTSxXQUFOLE1BQU0sQ0FBQTtBQUNILElBQUEsWUFBYyxXQUFkLGNBQWMsQ0FBQTtBQUNHLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUNTLElBQUEsV0FBYSxXQUFiLGFBQWEsQ0FBQTtBQUNULElBQUEsTUFBVSxXQUFWLFVBQVUsQ0FBQTtBQUU1RCxJQUFBLFVBQWEsa0NBQWIsYUFBYSxFQUFBO0FBQ1osSUFBQSxXQUFjLGtDQUFkLGNBQWMsRUFBQTtBQUNiLElBQUEsU0FBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ2hCLElBQUEsSUFBZ0Isa0NBQWhCLGdCQUFnQixFQUFBO0FBQ1osSUFBQSxRQUFvQixrQ0FBcEIsb0JBQW9CLEVBQUE7QUFDbEIsSUFBQSxVQUFzQixrQ0FBdEIsc0JBQXNC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