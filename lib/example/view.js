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
var _easywithstyle = /*#__PURE__*/ _interop_require_default(require("easy-with-style"));
var _easy = require("easy");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _example = /*#__PURE__*/ _interop_require_default(require("../lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("../parser/example"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./view/input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./view/textarea/adjustedBNF"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interop_require_default(require("../eliminateLeftRecursion"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _construct(Parent, args, Class) {
    if (_is_native_reflect_construct()) {
        _construct = Reflect.construct;
    } else {
        _construct = function construct(Parent, args, Class) {
            var a = [
                null
            ];
            a.push.apply(a, args);
            var Constructor = Function.bind.apply(Parent, a);
            var instance = new Constructor();
            if (Class) _set_prototype_of(instance, Class.prototype);
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
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _define_property(obj, key, value) {
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
function _get_prototype_of(o) {
    _get_prototype_of = Object.setPrototypeOf ? Object.getPrototypeOf : function getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _get_prototype_of(o);
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
    if (superClass) _set_prototype_of(subClass, superClass);
}
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _is_native_function(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
}
function _possible_constructor_return(self, call) {
    if (call && (_type_of(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assert_this_initialized(self);
}
function _set_prototype_of(o, p) {
    _set_prototype_of = Object.setPrototypeOf || function setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _set_prototype_of(o, p);
}
function _tagged_template_literal(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
}
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
}
function _wrap_native_super(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    _wrap_native_super = function wrapNativeSuper(Class) {
        if (Class === null || !_is_native_function(Class)) return Class;
        if (typeof Class !== "function") {
            throw new TypeError("Super expression must either be null or a function");
        }
        if (typeof _cache !== "undefined") {
            if (_cache.has(Class)) return _cache.get(Class);
            _cache.set(Class, Wrapper);
        }
        function Wrapper() {
            return _construct(Class, arguments, _get_prototype_of(this).constructor);
        }
        Wrapper.prototype = Object.create(Class.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
        return _set_prototype_of(Wrapper, Class);
    };
    return _wrap_native_super(Class);
}
function _is_native_reflect_construct() {
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
function _create_super(Derived) {
    var hasNativeReflectConstruct = _is_native_reflect_construct();
    return function _createSuperInternal() {
        var Super = _get_prototype_of(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _get_prototype_of(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possible_constructor_return(this, result);
    };
}
function _templateObject() {
    var data = _tagged_template_literal([
        "\n\n  padding: 1rem;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var rulesFromBNF = _occamparsers.parserUtilities.rulesFromBNF, rulesAsString = _occamparsers.rulesUtilities.rulesAsString, ruleMapFromRules = _occamparsers.rulesUtilities.ruleMapFromRules, startRuleFromRulesAndStartRuleName = _occamparsers.rulesUtilities.startRuleFromRulesAndStartRuleName;
var View = /*#__PURE__*/ function(Element) {
    _inherits(View, Element);
    var _super = _create_super(View);
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _super.apply(this, arguments);
        _define_property(_assert_this_initialized(_this), "keyUpHandler", function(event, element) {
            _this.update();
        });
        _define_property(_assert_this_initialized(_this), "changeHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                try {
                    var bnf = this.getBNF(), content = this.getContent(), startRuleName = this.getStartRuleName(), lexicalEntries = this.getLexicalEntries();
                    var rules = rulesFromBNF(bnf);
                    rules = (0, _eliminateLeftRecursion.default)(rules); ///
                    var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                    this.setAdjustedBNF(adjustedBNF);
                    var exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries), exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName), tokens = exampleLexer.tokenise(content), node = exampleParser.parse(tokens);
                    var parseTree = null;
                    if (node !== null) {
                        parseTree = node.asParseTree(tokens);
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
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Lexical entries"), /*#__PURE__*/ React.createElement(_lexicalEntries.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Adjusted BNF"), /*#__PURE__*/ React.createElement(_adjustedBNF.default, {
                    readOnly: true
                }))), /*#__PURE__*/ React.createElement(_easylayout.VerticalSplitterDiv, null), /*#__PURE__*/ React.createElement(_easylayout.ColumnDiv, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "Start rule name"), /*#__PURE__*/ React.createElement(_startRuleName.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Content"), /*#__PURE__*/ React.createElement(_content.default, {
                    onKeyUp: this.keyUpHandler
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null))));
            }
        },
        {
            key: "initialise",
            value: function initialise() {
                this.assignContext();
                var _this_constructor = this.constructor, initialBNF = _this_constructor.initialBNF, initialContent = _this_constructor.initialContent, initialLexicalEntries = _this_constructor.initialLexicalEntries, initialStartRuleName = _this_constructor.initialStartRuleName, bnf = initialBNF, content = initialContent, lexicalEntries = initialLexicalEntries, startRuleName = initialStartRuleName; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setLexicalEntries(lexicalEntries);
                this.setStartRuleName(startRuleName);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialBNF", '\n      expression ::= term... <END_OF_LINE> ;\n\n            term ::= term (\n            \n                          "/" (1)\n                          \n                          |\n            \n                          "*" (2)\n                          \n                          |\n                          \n                          "+" (3)\n                          \n                          |\n                          \n                          "-" (4)\n                          \n                          ) term \n                          \n                   | number ;\n                    \n        number ::= /\\d+/ ;\n  ');
_define_property(View, "initialContent", "1+2/3\n");
_define_property(View, "initialStartRuleName", "expression");
_define_property(View, "initialLexicalEntries", [
    {
        unassigned: "."
    }
]);
_define_property(View, "tagName", "div");
_define_property(View, "defaultProperties", {
    className: "view"
});
var _default = (0, _easywithstyle.default)(View)(_templateObject());
function exampleLexerFromLexicalEntries(lexicalEntries) {
    var entries = lexicalEntries, exampleLexer = _example.default.fromEntries(entries);
    return exampleLexer;
}
function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), exampleParser = new _example1.default(startRule, ruleMap);
    return exampleParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IEV4YW1wbGVMZXhlciBmcm9tIFwiLi4vbGV4ZXIvZXhhbXBsZVwiO1xuaW1wb3J0IEV4YW1wbGVQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9leGFtcGxlXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBleGFtcGxlTGV4ZXIgPSBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpLFxuICAgICAgICAgICAgZXhhbXBsZVBhcnNlciA9ICBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgICAgICB0b2tlbnMgPSBleGFtcGxlTGV4ZXIudG9rZW5pc2UoY29udGVudCksXG4gICAgICAgICAgICBub2RlID0gZXhhbXBsZVBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsTGV4aWNhbEVudHJpZXMsIGluaXRpYWxTdGFydFJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBpbml0aWFsTGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG4gICAgICBleHByZXNzaW9uIDo6PSB0ZXJtLi4uIDxFTkRfT0ZfTElORT4gO1xuXG4gICAgICAgICAgICB0ZXJtIDo6PSB0ZXJtIChcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIi9cIiAoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIipcIiAoMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiK1wiICgzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfFxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIgKDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICApIHRlcm0gXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgIHwgbnVtYmVyIDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIG51bWJlciA6Oj0gL1xcXFxkKy8gO1xuICBgXG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYDErMi8zXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiZXhwcmVzc2lvblwiO1xuXG4gIHN0YXRpYyBpbml0aWFsTGV4aWNhbEVudHJpZXMgPSBbe1xuICAgIHVuYXNzaWduZWQ6IFwiLlwiXG4gIH1dO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgY29uc3QgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgZXhhbXBsZUxleGVyID0gRXhhbXBsZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBleGFtcGxlTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIGV4YW1wbGVQYXJzZXIgPSBuZXcgRXhhbXBsZVBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBleGFtcGxlUGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwibGV4aWNhbEVudHJpZXMiLCJnZXRMZXhpY2FsRW50cmllcyIsInJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImV4YW1wbGVMZXhlciIsImV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyIsImV4YW1wbGVQYXJzZXIiLCJleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwic2V0U3RhcnRSdWxlTmFtZSIsIkVsZW1lbnQiLCJ1bmFzc2lnbmVkIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllcyIsIkV4YW1wbGVMZXhlciIsImZyb21FbnRyaWVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsIkV4YW1wbGVQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQTBLQTs7O2VBQUE7OztvRUF4S3NCO29CQUVFOzRCQUN3QjswQkFDb0I7aUVBRTdDOytEQUNDOzBEQUNBOzhEQUNDOytEQUNDOzhEQUNFO2dFQUNFO29FQUNDO2tFQUNDOzZFQUNHO3FFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU0sQUFBRUEsZUFBaUJDLDZCQUFlLENBQWhDRCxjQUNBRSxnQkFBd0VDLDRCQUFjLENBQXRGRCxlQUFlRSxtQkFBeURELDRCQUFjLENBQXZFQyxrQkFBa0JDLHFDQUF1Q0YsNEJBQWMsQ0FBckRFO0FBRXpDLElBQUEsQUFBTUMscUJBbUpILEFBbkpIO2NBQU1BOytCQUFBQTthQUFBQTtnQ0FBQUE7OztRQUNKQyxrREFBQUEsZ0JBQWUsU0FBQ0MsT0FBT0M7WUFDckIsTUFBS0MsTUFBTTtRQUNiO1FBRUFDLGtEQUFBQSxpQkFBZ0IsU0FBQ0gsT0FBT0M7WUFDdEIsTUFBS0MsTUFBTTtRQUNiOzs7a0JBUElKOztZQVNKSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSTtvQkFDRixJQUFNRSxNQUFNLElBQUks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