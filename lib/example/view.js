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
var _paragraph = /*#__PURE__*/ _interop_require_default(require("./view/paragraph"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _rewriteNodes = /*#__PURE__*/ _interop_require_default(require("../rewriteNodes"));
var _example = /*#__PURE__*/ _interop_require_default(require("../lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("../parser/example"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./view/input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./view/textarea/adjustedBNF"));
var _rewriteNodes1 = /*#__PURE__*/ _interop_require_default(require("./view/checkbox/rewriteNodes"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
var _eliminateLeftRecursion = /*#__PURE__*/ _interop_require_default(require("../eliminateLeftRecursion"));
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
                var bnf = this.getBNF(), content = this.getContent(), startRuleName = this.getStartRuleName(), lexicalEntries = this.getLexicalEntries();
                var rules = rulesFromBNF(bnf);
                rules = (0, _eliminateLeftRecursion.default)(rules); ///
                var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                this.setAdjustedBNF(adjustedBNF);
                try {
                    var exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries), exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName), tokens = exampleLexer.tokenise(content), node = exampleParser.parse(tokens);
                    var parseTree = null;
                    if (node !== null) {
                        var rewriteNodesCheckboxChecked = this.isRewriteNodesCheckboxChecked();
                        if (rewriteNodesCheckboxChecked) {
                            (0, _rewriteNodes.default)(node);
                        }
                        var abridged = true;
                        parseTree = node.asParseTree(tokens, abridged);
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
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_rewriteNodes1.default, {
                    onChange: this.changeHandler
                }), "Rewrite nodes"))));
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
_define_property(View, "initialBNF", '\n      S ::= A... <END_OF_LINE> ;\n\n      A ::= B "g"\n      \n          | "e"\n      \n          ;\n      \n      B ::= A "h"\n      \n          | B "f"\n      \n          | "d"\n  \n          ;  \n  ');
_define_property(View, "initialContent", "ehfg  \n");
_define_property(View, "_initialBNF", '\n\n     expression  ::=  term... <END_OF_LINE> ;\n      \n           term  ::=  "(" term ")" \n      \n                   |  compoundTerm\n                   \n                   |  number \n                                                     \n                   ;\n      \n   compoundTerm  ::=  term ( "+" | "-" | "/" | "*" ) term ;\n      \n         number  ::=  /\\d+/ ;\n        \n  ');
_define_property(View, "_initialContent", "(1+2/3)\n");
_define_property(View, "initialStartRuleName", "S");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi92aWV3L3BhcmFncmFwaFwiO1xuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IHJld3JpdGVOb2RlcyBmcm9tIFwiLi4vcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgRXhhbXBsZUxleGVyIGZyb20gXCIuLi9sZXhlci9leGFtcGxlXCI7XG5pbXBvcnQgRXhhbXBsZVBhcnNlciBmcm9tIFwiLi4vcGFyc2VyL2V4YW1wbGVcIjtcbmltcG9ydCBDb250ZW50VGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vdmlldy9pbnB1dC9zdGFydFJ1bGVOYW1lXCI7XG5pbXBvcnQgQWRqdXN0ZWRCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmV3cml0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vdmlldy9jaGVja2JveC9yZXdyaXRlTm9kZXNcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcbmltcG9ydCBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIGZyb20gXCIuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4YW1wbGVMZXhlciA9IGV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyksXG4gICAgICAgICAgICBleGFtcGxlUGFyc2VyID0gIGV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHRva2VucyA9IGV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgICAgaWYgKHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIExleGljYWwgZW50cmllc1xuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPExleGljYWxFbnRyaWVzVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Qk5GVGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQWRqdXN0ZWQgQk5GXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8QWRqdXN0ZWRCTkZUZXh0YXJlYSByZWFkT25seSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9TaXplYWJsZURpdj5cbiAgICAgICAgPFZlcnRpY2FsU3BsaXR0ZXJEaXYgLz5cbiAgICAgICAgPENvbHVtbkRpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBTdGFydCBydWxlIG5hbWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxTdGFydFJ1bGVOYW1lSW5wdXQgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgQ29udGVudFxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPENvbnRlbnRUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBQYXJzZSB0cmVlXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8UGFyc2VUcmVlVGV4dGFyZWEgLz5cbiAgICAgICAgICAgIDxQYXJhZ3JhcGg+XG4gICAgICAgICAgICAgIDxSZXdyaXRlTm9kZXNDaGVja2JveCBvbkNoYW5nZT17dGhpcy5jaGFuZ2VIYW5kbGVyfSAvPlxuICAgICAgICAgICAgICBSZXdyaXRlIG5vZGVzXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsTGV4aWNhbEVudHJpZXMsIGluaXRpYWxTdGFydFJ1bGVOYW1lIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGJuZiA9IGluaXRpYWxCTkYsIC8vL1xuICAgICAgICAgIGNvbnRlbnQgPSBpbml0aWFsQ29udGVudCwgLy8vXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBpbml0aWFsTGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRMZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyk7XG5cbiAgICB0aGlzLnNldFN0YXJ0UnVsZU5hbWUoc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG4gICAgICBTIDo6PSBBLi4uIDxFTkRfT0ZfTElORT4gO1xuXG4gICAgICBBIDo6PSBCIFwiZ1wiXG4gICAgICBcbiAgICAgICAgICB8IFwiZVwiXG4gICAgICBcbiAgICAgICAgICA7XG4gICAgICBcbiAgICAgIEIgOjo9IEEgXCJoXCJcbiAgICAgIFxuICAgICAgICAgIHwgQiBcImZcIlxuICAgICAgXG4gICAgICAgICAgfCBcImRcIlxuICBcbiAgICAgICAgICA7ICBcbiAgYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgZWhmZyAgXG5gO1xuXG4gIHN0YXRpYyBfaW5pdGlhbEJORiA9IGBcblxuICAgICBleHByZXNzaW9uICA6Oj0gIHRlcm0uLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICBcbiAgICAgICAgICAgdGVybSAgOjo9ICBcIihcIiB0ZXJtIFwiKVwiIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICAgfCAgY29tcG91bmRUZXJtXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgfCAgbnVtYmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gICAgICBcbiAgIGNvbXBvdW5kVGVybSAgOjo9ICB0ZXJtICggXCIrXCIgfCBcIi1cIiB8IFwiL1wiIHwgXCIqXCIgKSB0ZXJtIDtcbiAgICAgIFxuICAgICAgICAgbnVtYmVyICA6Oj0gIC9cXFxcZCsvIDtcbiAgICAgICAgXG4gIGBcblxuICBzdGF0aWMgX2luaXRpYWxDb250ZW50ID0gYCgxKzIvMylcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJTXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFt7XG4gICAgdW5hc3NpZ25lZDogXCIuXCJcbiAgfV07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBleGFtcGxlTGV4ZXIgPSBFeGFtcGxlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGV4YW1wbGVMZXhlcjtcbn1cblxuZnVuY3Rpb24gZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgZXhhbXBsZVBhcnNlciA9IG5ldyBFeGFtcGxlUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGV4YW1wbGVQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZXhhbXBsZUxleGVyIiwiZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzIiwiZXhhbXBsZVBhcnNlciIsImV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJld3JpdGVOb2RlcyIsImFicmlkZ2VkIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiUGFyYWdyYXBoIiwiUmV3cml0ZU5vZGVzQ2hlY2tib3giLCJvbkNoYW5nZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbEVudHJpZXMiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInNldFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50IiwiX2luaXRpYWxCTkYiLCJfaW5pdGlhbENvbnRlbnQiLCJ1bmFzc2lnbmVkIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwid2l0aFN0eWxlIiwiZW50cmllcyIsIkV4YW1wbGVMZXhlciIsImZyb21FbnRy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