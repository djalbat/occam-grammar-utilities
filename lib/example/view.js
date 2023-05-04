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
var _rewriteNode = /*#__PURE__*/ _interop_require_default(require("../rewriteNode"));
var _example = /*#__PURE__*/ _interop_require_default(require("../lexer/example"));
var _example1 = /*#__PURE__*/ _interop_require_default(require("../parser/example"));
var _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/adjustedBNF"));
var _rewriteNode1 = /*#__PURE__*/ _interop_require_default(require("./checkbox/rewriteNode"));
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
                        var rewriteNodeCheckboxChecked = this.isRewriteNodeCheckboxChecked();
                        if (rewriteNodeCheckboxChecked) {
                            (0, _rewriteNode.default)(node);
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
                }), /*#__PURE__*/ React.createElement(_subHeading.default, null, "Parse tree"), /*#__PURE__*/ React.createElement(_parseTree.default, null), /*#__PURE__*/ React.createElement(_paragraph.default, null, /*#__PURE__*/ React.createElement(_rewriteNode1.default, {
                    onChange: this.changeHandler
                }), "Rewrite node"))));
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
_define_property(View, "initialBNF", '\n\n    S ::=  E... <END_OF_LINE> ;\n  \n    E  ::=  B "g" ;\n  \n    B  ::=  A "f" ;\n  \n    A  ::=  E \n    \n         | "h" \n                                 \n         ;\n  \n    ');
_define_property(View, "initialContent", "g\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlTm9kZSBmcm9tIFwiLi4vcmV3cml0ZU5vZGVcIjtcbmltcG9ydCBFeGFtcGxlTGV4ZXIgZnJvbSBcIi4uL2xleGVyL2V4YW1wbGVcIjtcbmltcG9ydCBFeGFtcGxlUGFyc2VyIGZyb20gXCIuLi9wYXJzZXIvZXhhbXBsZVwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmV3cml0ZU5vZGVDaGVja2JveCBmcm9tIFwiLi9jaGVja2JveC9yZXdyaXRlTm9kZVwiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgZ2V0TGV4aWNhbEVudHJpZXMoKSB7XG4gICAgY29uc3QgeyBpbml0aWFsTGV4aWNhbEVudHJpZXMgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSBpbml0aWFsTGV4aWNhbEVudHJpZXM7IC8vL1xuXG4gICAgcmV0dXJuIGxleGljYWxFbnRyaWVzO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgY29udGVudCA9IHRoaXMuZ2V0Q29udGVudCgpLFxuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IHRoaXMuZ2V0TGV4aWNhbEVudHJpZXMoKTtcblxuICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuXG4gICAgY29uc3QgbXVsdGlMaW5lID0gdHJ1ZSxcbiAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgYWRqdXN0ZWRCTkYgPSBydWxlc1N0cmluZzsgIC8vL1xuXG4gICAgdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZXhhbXBsZUxleGVyID0gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSxcbiAgICAgICAgICAgIGV4YW1wbGVQYXJzZXIgPSAgZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gZXhhbXBsZUxleGVyLnRva2VuaXNlKGNvbnRlbnQpLFxuICAgICAgICAgICAgbm9kZSA9IGV4YW1wbGVQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIGNvbnN0IHJld3JpdGVOb2RlQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2RlQ2hlY2tib3hDaGVja2VkKCk7XG5cbiAgICAgICAgaWYgKHJld3JpdGVOb2RlQ2hlY2tib3hDaGVja2VkKSB7XG4gICAgICAgICAgcmV3cml0ZU5vZGUobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYnJpZGdlZCA9IHRydWU7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgICAgPFBhcmFncmFwaD5cbiAgICAgICAgICAgICAgPFJld3JpdGVOb2RlQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2RlXG4gICAgICAgICAgICA8L1BhcmFncmFwaD5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvQ29sdW1uRGl2PlxuICAgICAgPC9Db2x1bW5zRGl2PlxuXG4gICAgKTtcbiAgfVxuXG4gIGluaXRpYWxpc2UoKSB7XG4gICAgdGhpcy5hc3NpZ25Db250ZXh0KCk7XG5cbiAgICBjb25zdCB7IGluaXRpYWxCTkYsIGluaXRpYWxDb250ZW50LCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIHN0YXJ0UnVsZU5hbWUgPSBpbml0aWFsU3RhcnRSdWxlTmFtZTsgLy8vXG5cbiAgICB0aGlzLnNldEJORihibmYpO1xuXG4gICAgdGhpcy5zZXRDb250ZW50KGNvbnRlbnQpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy5rZXlVcEhhbmRsZXIoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuXG4gICAgUyA6Oj0gIEUuLi4gPEVORF9PRl9MSU5FPiA7XG4gIFxuICAgIEUgIDo6PSAgQiBcImdcIiA7XG4gIFxuICAgIEIgIDo6PSAgQSBcImZcIiA7XG4gIFxuICAgIEEgIDo6PSAgRSBcbiAgICBcbiAgICAgICAgIHwgXCJoXCIgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgIDtcbiAgXG4gICAgYDtcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgZ1xuYDtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxFbnRyaWVzID0gW1xuICAgIHtcbiAgICAgIFwidW5hc3NpZ25lZFwiOiBcIi5cIlxuICAgIH1cbiAgXTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGV4YW1wbGVMZXhlciA9IEV4YW1wbGVMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gZXhhbXBsZUxleGVyO1xufVxuXG5mdW5jdGlvbiBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICBleGFtcGxlUGFyc2VyID0gbmV3IEV4YW1wbGVQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gZXhhbXBsZVBhcnNlcjtcbn1cblxuYFxuXG4gICAgQSAgOjo9ICBDIFwiaFwiIFxuICAgICAgXG4gICAgICAgICB8ICBcImRcIiBcbiAgICBcbiAgICAgICAgIDtcbiAgICBcbiAgICBCICA6Oj0gIEMgXCJrXCIgXG4gICAgXG4gICAgICAgICB8ICBcImZcIlxuICAgICAgICAgXG4gICAgICAgICA7XG4gICAgXG4gICAgQyAgOjo9ICBBIFwiZ1wiIFxuICAgIFxuICAgICAgICAgfCAgQiBcImNcIiBcbiAgICBcbiAgICAgICAgIHwgIFwiZVwiXG4gICAgICAgICBcbiAgICAgICAgIDtcblxuXG5gXG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImdldExleGljYWxFbnRyaWVzIiwiaW5pdGlhbExleGljYWxFbnRyaWVzIiwiY29uc3RydWN0b3IiLCJsZXhpY2FsRW50cmllcyIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJleGFtcGxlTGV4ZXIiLCJleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMiLCJleGFtcGxlUGFyc2VyIiwiZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsInJld3JpdGVOb2RlQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZUNoZWNrYm94Q2hlY2tlZCIsInJld3JpdGVOb2RlIiwiYWJyaWRnZWQiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkJORlRleHRhcmVhIiwib25LZXlVcCIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2RlQ2hlY2tib3giLCJvbkNoYW5nZSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0U3RhcnRSdWxlTmFtZSIsIkVsZW1lbnQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJlbnRyaWVzIiwiRXhhbXBsZUxleGVyIiwiZnJvbUVudHJpZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiRXhhbXBsZVBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBZ0xBOzs7ZUFBQTs7O29FQTlLc0I7b0JBRUU7NEJBQ3dCOzBCQUNvQjtnRUFFOUM7aUVBQ0M7K0RBQ0M7MERBQ0E7a0VBQ0E7OERBQ0M7K0RBQ0M7OERBQ0U7Z0VBQ0U7b0VBQ0M7a0VBQ0M7bUVBQ0E7NkVBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQSxlQUFpQkMsNkJBQWUsQ0FBaENELGNBQ0FFLGdCQUF3RUMsNEJBQWMsQ0FBdEZELGVBQWVFLG1CQUF5REQsNEJBQWMsQ0FBdkVDLGtCQUFrQkMscUNBQXVDRiw0QkFBYyxDQUFyREU7QUFFekMsSUFBQSxBQUFNQyxxQkF1SkgsQUF2Skg7Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O1FBQ0pDLGtE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