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
var _paragraph = /*#__PURE__*/ _interop_require_default(require("./paragraph"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
var _rewriteNodes = /*#__PURE__*/ _interop_require_default(require("../rewriteNodes"));
var _example = /*#__PURE__*/ _interop_require_default(require("../lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("../parser/example"));
var _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/adjustedBNF"));
var _rewriteNodes1 = /*#__PURE__*/ _interop_require_default(require("./checkbox/rewriteNodes"));
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
            key: "getLexicalEntries",
            value: function getLexicalEntries() {
                var initialLexicalEntries = this.constructor.initialLexicalEntries, lexicalEntries = initialLexicalEntries; ///
                return lexicalEntries;
            }
        },
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
                return /*#__PURE__*/ React.createElement(_easylayout.ColumnsDiv, null, /*#__PURE__*/ React.createElement(_sizeable.default, null, /*#__PURE__*/ React.createElement(_easylayout.RowsDiv, null, /*#__PURE__*/ React.createElement(_subHeading.default, null, "BNF"), /*#__PURE__*/ React.createElement(_bnf.default, {
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
                var _this_constructor = this.constructor, initialBNF = _this_constructor.initialBNF, initialContent = _this_constructor.initialContent, initialStartRuleName = _this_constructor.initialStartRuleName, bnf = initialBNF, content = initialContent, startRuleName = initialStartRuleName; ///
                this.setBNF(bnf);
                this.setContent(content);
                this.setStartRuleName(startRuleName);
                this.keyUpHandler();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialBNF", '\n\n    S ::=  F... <END_OF_LINE> ;\n\n    A ::=  E \n    \n        |  T \n                                           \n        ;\n    \n    E ::=  F ;\n    \n    T ::=  "n" ;\n    \n    F ::=  "(" A ")"\n                           \n        |  A "+" A\n    \n        ;\n\n  ');
_define_property(View, "initialContent", "(n+n)\n");
_define_property(View, "initialStartRuleName", "S");
_define_property(View, "initialLexicalEntries", [
    {
        "unassigned": "."
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
'\n\n    A  ::=  C "h" \n      \n         |  "d" \n    \n         ;\n    \n    B  ::=  C "k" \n    \n         |  "f"\n         \n         ;\n    \n    C  ::=  A "g" \n    \n         |  B "c" \n    \n         |  "e"\n         \n         ;\n\n\n';

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlTm9kZXMgZnJvbSBcIi4uL3Jld3JpdGVOb2Rlc1wiO1xuaW1wb3J0IEV4YW1wbGVMZXhlciBmcm9tIFwiLi4vbGV4ZXIvZXhhbXBsZVwiO1xuaW1wb3J0IEV4YW1wbGVQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9leGFtcGxlXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9wYXJzZVRyZWVcIjtcbmltcG9ydCBTdGFydFJ1bGVOYW1lSW5wdXQgZnJvbSBcIi4vaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBSZXdyaXRlTm9kZXNDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZXdyaXRlTm9kZXNcIjtcbmltcG9ydCBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIGZyb20gXCIuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uXCI7XG5cbmNvbnN0IHsgcnVsZXNGcm9tQk5GIH0gPSBwYXJzZXJVdGlsaXRpZXMsXG4gICAgICB7IHJ1bGVzQXNTdHJpbmcsIHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUgfSA9IHJ1bGVzVXRpbGl0aWVzO1xuXG5jbGFzcyBWaWV3IGV4dGVuZHMgRWxlbWVudCB7XG4gIGtleVVwSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBjaGFuZ2VIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGdldExleGljYWxFbnRyaWVzKCkge1xuICAgIGNvbnN0IHsgaW5pdGlhbExleGljYWxFbnRyaWVzIH0gPSB0aGlzLmNvbnN0cnVjdG9yLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzOyAvLy9cblxuICAgIHJldHVybiBsZXhpY2FsRW50cmllcztcbiAgfVxuXG4gIHVwZGF0ZSgpIHtcbiAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gdGhpcy5nZXRTdGFydFJ1bGVOYW1lKCksXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICBsZXQgcnVsZXMgPSBydWxlc0Zyb21CTkYoYm5mKTtcblxuICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7ICAvLy9cblxuICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgcnVsZXNTdHJpbmcgPSBydWxlc0FzU3RyaW5nKHJ1bGVzLCBtdWx0aUxpbmUpLFxuICAgICAgICAgIGFkanVzdGVkQk5GID0gcnVsZXNTdHJpbmc7ICAvLy9cblxuICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGV4YW1wbGVMZXhlciA9IGV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyksXG4gICAgICAgICAgICBleGFtcGxlUGFyc2VyID0gIGV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgICAgIHRva2VucyA9IGV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBjb25zdCByZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQgPSB0aGlzLmlzUmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgICAgaWYgKHJld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCkge1xuICAgICAgICAgIHJld3JpdGVOb2Rlcyhub2RlKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGFicmlkZ2VkID0gdHJ1ZTtcblxuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2VucywgYWJyaWRnZWQpO1xuICAgICAgfVxuXG4gICAgICB0aGlzLnNldFBhcnNlVHJlZShwYXJzZVRyZWUpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgY2hpbGRFbGVtZW50cygpIHtcbiAgICByZXR1cm4gKFxuXG4gICAgICA8Q29sdW1uc0Rpdj5cbiAgICAgICAgPFNpemVhYmxlRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmV3cml0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgaW5pdGlhbEJORiA9IGBcblxuICAgIFMgOjo9ICBGLi4uIDxFTkRfT0ZfTElORT4gO1xuXG4gICAgQSA6Oj0gIEUgXG4gICAgXG4gICAgICAgIHwgIFQgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIDtcbiAgICBcbiAgICBFIDo6PSAgRiA7XG4gICAgXG4gICAgVCA6Oj0gIFwiblwiIDtcbiAgICBcbiAgICBGIDo6PSAgXCIoXCIgQSBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHwgIEEgXCIrXCIgQVxuICAgIFxuICAgICAgICA7XG5cbiAgYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgKG4rbilcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJTXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFtcbiAgICB7XG4gICAgICBcInVuYXNzaWduZWRcIjogXCIuXCJcbiAgICB9XG4gIF07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBleGFtcGxlTGV4ZXIgPSBFeGFtcGxlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGV4YW1wbGVMZXhlcjtcbn1cblxuZnVuY3Rpb24gZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgZXhhbXBsZVBhcnNlciA9IG5ldyBFeGFtcGxlUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGV4YW1wbGVQYXJzZXI7XG59XG5cbmBcblxuICAgIEEgIDo6PSAgQyBcImhcIiBcbiAgICAgIFxuICAgICAgICAgfCAgXCJkXCIgXG4gICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQiAgOjo9ICBDIFwia1wiIFxuICAgIFxuICAgICAgICAgfCAgXCJmXCJcbiAgICAgICAgIFxuICAgICAgICAgO1xuICAgIFxuICAgIEMgIDo6PSAgQSBcImdcIiBcbiAgICBcbiAgICAgICAgIHwgIEIgXCJjXCIgXG4gICAgXG4gICAgICAgICB8ICBcImVcIlxuICAgICAgICAgXG4gICAgICAgICA7XG5cblxuYFxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJnZXRMZXhpY2FsRW50cmllcyIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImNvbnN0cnVjdG9yIiwibGV4aWNhbEVudHJpZXMiLCJibmYiLCJnZXRCTkYiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInN0YXJ0UnVsZU5hbWUiLCJnZXRTdGFydFJ1bGVOYW1lIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZXhhbXBsZUxleGVyIiwiZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzIiwiZXhhbXBsZVBhcnNlciIsImV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwidG9rZW5zIiwidG9rZW5pc2UiLCJub2RlIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJpc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCIsInJld3JpdGVOb2RlcyIsImFicmlkZ2VkIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJCTkZUZXh0YXJlYSIsIm9uS2V5VXAiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJQYXJhZ3JhcGgiLCJSZXdyaXRlTm9kZXNDaGVja2JveCIsIm9uQ2hhbmdlIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRTdGFydFJ1bGVOYW1lIiwiRWxlbWVudCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJpZXMiLCJFeGFtcGxlTGV4ZXIiLCJmcm9tRW50cmllcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFzTEE7OztlQUFBOzs7b0VBcExzQjtvQkFFRTs0QkFDd0I7MEJBQ29CO2dFQUU5QztpRUFDQzsrREFDQzswREFDQTttRUFDQzs4REFDQTsrREFDQzs4REFDRTtnRUFDRTtvRUFDQztrRUFDQztvRUFDQzs2RUFDRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFNLEFBQUVBLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDQUUsZ0JBQXdFQyw0QkFBYyxDQUF0RkQsZUFBZUUsbUJBQXlE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