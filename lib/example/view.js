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
var _occamlexers = require("occam-lexers");
var _occamgrammars = require("occam-grammars");
var _occamparsers = require("occam-parsers");
var _easylayout = require("easy-layout");
var _paragraph = /*#__PURE__*/ _interop_require_default(require("./paragraph"));
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./textarea/bnf"));
var _rewriteNodes = /*#__PURE__*/ _interop_require_default(require("../rewriteNodes"));
var _content = /*#__PURE__*/ _interop_require_default(require("./textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./textarea/adjustedBNF"));
var _rewriteNodes1 = /*#__PURE__*/ _interop_require_default(require("./checkbox/rewriteNodes"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./textarea/lexicalEntries"));
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
                    var florenceLexer = florenceLexerFromLexicalEntries(lexicalEntries), florenceParser = florenceParserFromRulesAndStartRuleName(rules, startRuleName), tokens = florenceLexer.tokenise(content), node = florenceParser.parse(tokens);
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
_define_property(View, "initialBNF", '\n\n      S  ::=  F... <END_OF_LINE> ;\n      \n      A  ::=  E \n      \n           |  T \n                                             \n           ;\n      \n      E  ::=  F ;\n      \n      T  ::=  "n" ;\n      \n      F  ::=  "(" A ")"\n                             \n           |  A "+" A\n      \n           ;\n  \n  ');
_define_property(View, "initialContent", "(n+n)\n");
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
function florenceLexerFromLexicalEntries(lexicalEntries) {
    var entries = lexicalEntries, florenceLexer = _occamlexers.CommonLexer.fromEntries(_occamgrammars.FlorenceLexer, entries);
    return florenceLexer;
}
function florenceParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), florenceParser = new _occamgrammars.FlorenceParser(startRule, ruleMap);
    return florenceParser;
} // static initialBNF = `
 //
 //   ${florenceBNF}
 //
 //   term!                                ::=   variable ;
 //
 //   statement!                           ::=   "(" metaArgument ")"
 //
 //                                          |   argument "=" argument
 //
 //                                          |   typeInference
 //
 //                                          |   typeAssertion
 //
 //                                          |   variable "undefined"
 //
 //                                          ;
 //
 //   typeInference                        ::=   statement "|-" typeAssertion ;
 //
 //   typeAssertion                        ::=   term ":" type ;
 //
 //   metastatement!                       ::=   "(" metastatement ")"
 //
 //                                          |   ruleSubproofAssertion
 //
 //                                          |   contextDefinition
 //
 //                                          |   proofAssertion
 //
 //                                          |   metavariable ( inclusion | substitution )?
 //
 //                                          |   metavariable substitution?
 //
 //                                          |   variable "undefined"
 //
 //                                          ;
 //
 //   ruleSubproofAssertion                ::=   "[" metastatement ( "," metastatement )* "]" "..." metastatement ;
 //
 //   contextDefinition                    ::=   context "=" ( judgement | context ) ( "," ( judgement | context ) )* ;
 //
 //   proofAssertion                       ::=   context "|=" judgement ;
 //
 //   judgement                            ::=   reference "::" metastatement ;
 //
 // `;  ///
 // static initialLexicalEntries = florenceEntries; ///
 // static initialContent = `Axiom (DeleteOperation)
 //   Suppose
 //     A
 //   Then
 // `;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgQ29tbW9uTGV4ZXIgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5pbXBvcnQgeyBGbG9yZW5jZUxleGVyLCBGbG9yZW5jZVBhcnNlciB9IGZyb20gXCJvY2NhbS1ncmFtbWFyc1wiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFBhcmFncmFwaCBmcm9tIFwiLi9wYXJhZ3JhcGhcIjtcbmltcG9ydCBTdWJIZWFkaW5nIGZyb20gXCIuL3N1YkhlYWRpbmdcIjtcbmltcG9ydCBTaXplYWJsZURpdiBmcm9tIFwiLi9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9ibmZcIjtcbmltcG9ydCByZXdyaXRlTm9kZXMgZnJvbSBcIi4uL3Jld3JpdGVOb2Rlc1wiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9jb250ZW50XCI7XG5pbXBvcnQgUGFyc2VUcmVlVGV4dGFyZWEgZnJvbSBcIi4vdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3RleHRhcmVhL2FkanVzdGVkQk5GXCI7XG5pbXBvcnQgUmV3cml0ZU5vZGVzQ2hlY2tib3ggZnJvbSBcIi4vY2hlY2tib3gvcmV3cml0ZU5vZGVzXCI7XG5pbXBvcnQgTGV4aWNhbEVudHJpZXNUZXh0YXJlYSBmcm9tIFwiLi90ZXh0YXJlYS9sZXhpY2FsRW50cmllc1wiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIC8vIHsgYm5mOiBmbG9yZW5jZUJORiB9ID0gRmxvcmVuY2VQYXJzZXIsIC8vL1xuICAgICAgLy8geyBlbnRyaWVzOiBmbG9yZW5jZUVudHJpZXMgfSA9IEZsb3JlbmNlTGV4ZXIsIC8vL1xuICAgICAgeyBydWxlc0FzU3RyaW5nLCBydWxlTWFwRnJvbVJ1bGVzLCBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gPSBydWxlc1V0aWxpdGllcztcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgY2hhbmdlSGFuZGxlciA9IChldmVudCwgZWxlbWVudCkgPT4ge1xuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICB1cGRhdGUoKSB7XG4gICAgY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAgICAgICBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpO1xuXG4gICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBmbG9yZW5jZUxleGVyID0gZmxvcmVuY2VMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcyksXG4gICAgICAgICAgICBmbG9yZW5jZVBhcnNlciA9ICBmbG9yZW5jZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICAgICAgdG9rZW5zID0gZmxvcmVuY2VMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBmbG9yZW5jZVBhcnNlci5wYXJzZSh0b2tlbnMpO1xuXG4gICAgICBsZXQgcGFyc2VUcmVlID0gbnVsbDtcblxuICAgICAgaWYgKG5vZGUgIT09IG51bGwpIHtcbiAgICAgICAgY29uc3QgcmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkID0gdGhpcy5pc1Jld3JpdGVOb2Rlc0NoZWNrYm94Q2hlY2tlZCgpO1xuXG4gICAgICAgIGlmIChyZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQpIHtcbiAgICAgICAgICByZXdyaXRlTm9kZXMobm9kZSk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBhYnJpZGdlZCA9IHRydWU7XG5cbiAgICAgICAgcGFyc2VUcmVlID0gbm9kZS5hc1BhcnNlVHJlZSh0b2tlbnMsIGFicmlkZ2VkKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgICA8UGFyYWdyYXBoPlxuICAgICAgICAgICAgICA8UmV3cml0ZU5vZGVzQ2hlY2tib3ggb25DaGFuZ2U9e3RoaXMuY2hhbmdlSGFuZGxlcn0gLz5cbiAgICAgICAgICAgICAgUmV3cml0ZSBub2Rlc1xuICAgICAgICAgICAgPC9QYXJhZ3JhcGg+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxFbnRyaWVzLCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIHN0YXRpYyBpbml0aWFsQk5GID0gYFxuXG4gICAgICBTICA6Oj0gIEYuLi4gPEVORF9PRl9MSU5FPiA7XG4gICAgICBcbiAgICAgIEEgIDo6PSAgRSBcbiAgICAgIFxuICAgICAgICAgICB8ICBUIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgIDtcbiAgICAgIFxuICAgICAgRSAgOjo9ICBGIDtcbiAgICAgIFxuICAgICAgVCAgOjo9ICBcIm5cIiA7XG4gICAgICBcbiAgICAgIEYgIDo6PSAgXCIoXCIgQSBcIilcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgfCAgQSBcIitcIiBBXG4gICAgICBcbiAgICAgICAgICAgO1xuICBcbiAgYFxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGAobituKVxuYDtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxFbnRyaWVzID0gW3tcbiAgICB1bmFzc2lnbmVkOiBcIi5cIlxuICB9XTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gZmxvcmVuY2VMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBmbG9yZW5jZUxleGVyID0gQ29tbW9uTGV4ZXIuZnJvbUVudHJpZXMoRmxvcmVuY2VMZXhlciwgZW50cmllcyk7XG5cbiAgcmV0dXJuIGZsb3JlbmNlTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGZsb3JlbmNlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICBmbG9yZW5jZVBhcnNlciA9IG5ldyBGbG9yZW5jZVBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBmbG9yZW5jZVBhcnNlcjtcbn1cblxuLy8gc3RhdGljIGluaXRpYWxCTkYgPSBgXG4vL1xuLy8gICAke2Zsb3JlbmNlQk5GfVxuLy9cbi8vICAgdGVybSEgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHZhcmlhYmxlIDtcbi8vXG4vLyAgIHN0YXRlbWVudCEgICAgICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhQXJndW1lbnQgXCIpXCJcbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBhcmd1bWVudCBcIj1cIiBhcmd1bWVudFxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIHR5cGVJbmZlcmVuY2Vcbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICB0eXBlQXNzZXJ0aW9uXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdmFyaWFibGUgXCJ1bmRlZmluZWRcIlxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuLy9cbi8vICAgdHlwZUluZmVyZW5jZSAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHN0YXRlbWVudCBcInwtXCIgdHlwZUFzc2VydGlvbiA7XG4vL1xuLy8gICB0eXBlQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICAgOjo9ICAgdGVybSBcIjpcIiB0eXBlIDtcbi8vXG4vLyAgIG1ldGFzdGF0ZW1lbnQhICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBcIihcIiBtZXRhc3RhdGVtZW50IFwiKVwiXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uXG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgY29udGV4dERlZmluaXRpb25cbi8vXG4vLyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgICBwcm9vZkFzc2VydGlvblxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSAoIGluY2x1c2lvbiB8IHN1YnN0aXR1dGlvbiApP1xuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCAgIG1ldGF2YXJpYWJsZSBzdWJzdGl0dXRpb24/XG4vL1xuLy8gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8ICAgdmFyaWFibGUgXCJ1bmRlZmluZWRcIlxuLy9cbi8vICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgO1xuLy9cbi8vICAgcnVsZVN1YnByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgIDo6PSAgIFwiW1wiIG1ldGFzdGF0ZW1lbnQgKCBcIixcIiBtZXRhc3RhdGVtZW50ICkqIFwiXVwiIFwiLi4uXCIgbWV0YXN0YXRlbWVudCA7XG4vL1xuLy8gICBjb250ZXh0RGVmaW5pdGlvbiAgICAgICAgICAgICAgICAgICAgOjo9ICAgY29udGV4dCBcIj1cIiAoIGp1ZGdlbWVudCB8IGNvbnRleHQgKSAoIFwiLFwiICgganVkZ2VtZW50IHwgY29udGV4dCApICkqIDtcbi8vXG4vLyAgIHByb29mQXNzZXJ0aW9uICAgICAgICAgICAgICAgICAgICAgICA6Oj0gICBjb250ZXh0IFwifD1cIiBqdWRnZW1lbnQgO1xuLy9cbi8vICAganVkZ2VtZW50ICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo6PSAgIHJlZmVyZW5jZSBcIjo6XCIgbWV0YXN0YXRlbWVudCA7XG4vL1xuLy8gYDsgIC8vL1xuXG4vLyBzdGF0aWMgaW5pdGlhbExleGljYWxFbnRyaWVzID0gZmxvcmVuY2VFbnRyaWVzOyAvLy9cblxuLy8gc3RhdGljIGluaXRpYWxDb250ZW50ID0gYEF4aW9tIChEZWxldGVPcGVyYXRpb24pXG4vLyAgIFN1cHBvc2Vcbi8vICAgICBBXG4vLyAgIFRoZW5cbi8vIGA7XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImJuZiIsImdldEJORiIsImNvbnRlbnQiLCJnZXRDb250ZW50Iiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZmxvcmVuY2VMZXhlciIsImZsb3JlbmNlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMiLCJmbG9yZW5jZVBhcnNlciIsImZsb3JlbmNlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwicmV3cml0ZU5vZGVzQ2hlY2tib3hDaGVja2VkIiwiaXNSZXdyaXRlTm9kZXNDaGVja2JveENoZWNrZWQiLCJyZXdyaXRlTm9kZXMiLCJhYnJpZGdlZCIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsIlBhcmFncmFwaCIsIlJld3JpdGVOb2Rlc0NoZWNrYm94Iiwib25DaGFuZ2UiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxFbnRyaWVzIiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJzZXRTdGFydFJ1bGVOYW1lIiwiRWxlbWVudCIsInVuYXNzaWduZWQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJlbnRyaWVzIiwiQ29tbW9uTGV4ZXIiLCJmcm9tRW50cmllcyIsIkZsb3JlbmNlTGV4ZXIiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiRmxvcmVuY2VQYXJzZXIiXSwibWFwcGluZ3MiOiJBQUFBOzs7OytCQXVMQTs7O2VBQUE7OztvRUFyTHNCO29CQUVFOzJCQUNJOzZCQUNrQjs0QkFDRTswQkFDb0I7Z0VBRTlDO2lFQUNDOytEQUNDOzBEQUNBO21FQUNDOzhEQUNHO2dFQUNFO29FQUNDO2tFQUNDO29FQUNDO3FFQUNFOzZFQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRW5DLElBQU0sQUFBRUEsZUFBaUJDLDhCQUFqQkQsY0FHQUUsZ0JBQXdFQyw2QkFBeEVELGVBQWVFLG1CQUF5REQsNkJBQXpEQyxrQkFBa0JDLHFDQUF1Q0YsNkJBQXZDRTtBQUV6QyxJQUFBLEFBQU1DLHFCQTJKSCxBQTNKSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFBOzs7UUFDSkMsa0RBQUFBLGdCQUFlLFNBQUNDLE9BQU9DO1lBQ3JCLE1BQUtDO1FBQ1A7UUFFQUMsa0RBQUFBLGlCQUFnQixTQUFDSCxPQUFPQztZQUN0QixNQUFLQztRQUNQOzs7a0JBUElKOztZQVNKSSxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBTUUsTUFBTSxJQUFJLENBQUNDLFVBQ1hDLFVBQVUsSUFBSSxDQUFDQyxjQUNmQyxnQkFBZ0IsSUFBSSxDQUFDQyxvQkFDckJDLGlCQUFpQixJQUFJLENBQUNDO2dCQUU1QixJQUFJQyxRQUFRcEIsYUFBYVk7Z0JBRXpCUSxRQUFRQyxJQUFBQSxpQ0FBdUJELFFBQVMsR0FBRztnQkFFM0MsSUFBTUUsWUFBWSxNQUNaQyxjQUFjckIsY0FBY2tCLE9BQU9FLFlBQ25DRSxjQUFjRCxhQUFjLEdBQUc7Z0JBRXJDLElBQUksQ0FBQ0UsZUFBZUQ7Z0JBRXBCLElBQUk7b0JBQ0YsSUFBTUUsZ0JBQWdCQyxnQ0FBZ0NULGlCQUNoRFUsaUJBQWtCQyx3Q0FBd0NULE9BQU9KLGdCQUNqRWMsU0FBU0osY0FBY0ssU0FBU2pCLFVBQ2hDa0IsT0FBT0osZUFBZUssTUFBTUg7b0JBRWxDLElBQUlJLFlBQVk7b0JBRWhCLElBQUlGLFNBQVMsTUFBTTt3QkFDakIsSUFBTUcsOEJBQThCLElBQUksQ0FBQ0M7d0JBRXpDLElBQUlELDZCQUE2Qjs0QkFDL0JFLElBQUFBLHVCQUFhTDt3QkFDZjt3QkFFQSxJQUFNTSxXQUFXO3dCQUVqQkosWUFBWUYsS0FBS08sWUFBWVQsUUFBUVE7b0JBQ3ZDO29CQUVBLElBQUksQ0FBQ0UsYUFBYU47Z0JBQ3BCLEVBQUUsT0FBT08sT0FBTztvQkFDZEMsUUFBUUMsSUFBSUY7Z0JBQ2Q7WUFDRjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxxQkFFRSxvQkFBQ0MsNENBQ0Msb0JBQUNDLHVDQUNDLG9CQUFDQyx5Q0FDQyxvQkFBQ0MsMkJBQVcsa0NBR1osb0JBQUNDO29CQUF1QkMsU0FBUyxJQUFJLENBQUMzQztrQ0FDdEMsb0JBQUN5QywyQkFBVyxzQkFHWixvQkFBQ0c7b0JBQVlELFNBQVMsSUFBSSxDQUFDM0M7a0NBQzNCLG9CQUFDeUMsMkJBQVcsK0JBR1osb0JBQUNJO29CQUFvQkMsVUFBQUE7b0NBR3pCLG9CQUFDQyxzREFDRCxvQkFBQ0MsMkNBQ0Msb0JBQUNSLHlDQUNDLG9CQUFDQywyQkFBVyxrQ0FHWixvQkFBQ1E7b0JBQW1CTixTQUFTLElBQUksQ0FBQzNDO2tDQUNsQyxvQkFBQ3lDLDJCQUFXLDBCQUdaLG9CQUFDUztvQkFBZ0JQLFNBQVMsSUFBSSxDQUFDM0M7a0NBQy9CLG9CQUFDeUMsMkJBQVcsNkJBR1osb0JBQUNVLHlDQUNELG9CQUFDQyx3Q0FDQyxvQkFBQ0M7b0JBQXFCQyxVQUFVLElBQUksQ0FBQ2xEO29CQUFpQjtZQVFsRTs7O1lBRUFtRCxLQUFBQTttQkFBQUEsU0FBQUE7Z0JBQ0UsSUFBSSxDQUFDQztnQkFFTCxJQUFvRixvQkFBQSxJQUFJLENBQUNDLGFBQWpGQyxhQUE0RSxrQkFBNUVBLFlBQVlDLGlCQUFnRSxrQkFBaEVBLGdCQUFnQkMsd0JBQWdELGtCQUFoREEsdUJBQXVCQyx1QkFBeUIsa0JBQXpCQSxzQkFDckR4RCxNQUFNcUQsWUFDTm5ELFVBQVVvRCxnQkFDVmhELGlCQUFpQmlELHVCQUNqQm5ELGdCQUFnQm9ELHNCQUFzQixHQUFHO2dCQUUvQyxJQUFJLENBQUNDLE9BQU96RDtnQkFFWixJQUFJLENBQUMwRCxXQUFXeEQ7Z0JBRWhCLElBQUksQ0FBQ3lELGtCQUFrQnJEO2dCQUV2QixJQUFJLENBQUNzRCxpQkFBaUJ4RDtnQkFFdEIsSUFBSSxDQUFDTjtZQUNQOzs7V0FuSElKO3FCQUFhbUU7QUFxSGpCLGlCQXJISW5FLE1BcUhHMkQsY0FBYztBQXNCckIsaUJBM0lJM0QsTUEySUc0RCxrQkFBa0I7QUFHekIsaUJBOUlJNUQsTUE4SUc4RCx3QkFBdUI7QUFFOUIsaUJBaEpJOUQsTUFnSkc2RCx5QkFBd0I7SUFBQztRQUM5Qk8sWUFBWTtJQUNkO0NBQUU7QUFFRixpQkFwSklwRSxNQW9KR3FFLFdBQVU7QUFFakIsaUJBdEpJckUsTUFzSkdzRSxxQkFBb0I7SUFDekJDLFdBQVc7QUFDYjtJQUdGLFdBQWVDLElBQUFBLHdCQUFVeEU7QUFNekIsU0FBU3FCLGdDQUFnQ1QsY0FBYztJQUNyRCxJQUFNNkQsVUFBVTdELGdCQUNWUSxnQkFBZ0JzRCx5QkFBWUMsWUFBWUMsOEJBQWVIO0lBRTdELE9BQU9yRDtBQUNUO0FBRUEsU0FBU0csd0NBQXdDVCxLQUFLLEVBQUVKLGFBQWE7SUFDbkUsSUFBTW1FLFVBQVUvRSxpQkFBaUJnQixRQUMzQmdFLFlBQVkvRSxtQ0FBbUNlLE9BQU9KLGdCQUN0RFksaUJBQWlCLElBQUl5RCw4QkFBZUQsV0FBV0Q7SUFFckQsT0FBT3ZEO0FBQ1QsRUFFQSx3QkFBd0I7Q0FDeEIsRUFBRTtDQUNGLG1CQUFtQjtDQUNuQixFQUFFO0NBQ0YsMERBQTBEO0NBQzFELEVBQUU7Q0FDRixvRUFBb0U7Q0FDcEUsRUFBRTtDQUNGLHFFQUFxRTtDQUNyRSxFQUFFO0NBQ0YsNkRBQTZEO0NBQzdELEVBQUU7Q0FDRiw2REFBNkQ7Q0FDN0QsRUFBRTtDQUNGLG9FQUFvRTtDQUNwRSxFQUFFO0NBQ0YsNkNBQTZDO0NBQzdDLEVBQUU7Q0FDRiw4RUFBOEU7Q0FDOUUsRUFBRTtDQUNGLCtEQUErRDtDQUMvRCxFQUFFO0NBQ0YscUVBQXFFO0NBQ3JFLEVBQUU7Q0FDRixxRUFBcUU7Q0FDckUsRUFBRTtDQUNGLGlFQUFpRTtDQUNqRSxFQUFFO0NBQ0YsOERBQThEO0NBQzlELEVBQUU7Q0FDRiwwRkFBMEY7Q0FDMUYsRUFBRTtDQUNGLDBFQUEwRTtDQUMxRSxFQUFFO0NBQ0Ysb0VBQW9FO0NBQ3BFLEVBQUU7Q0FDRiw2Q0FBNkM7Q0FDN0MsRUFBRTtDQUNGLGtIQUFrSDtDQUNsSCxFQUFFO0NBQ0Ysc0hBQXNIO0NBQ3RILEVBQUU7Q0FDRix3RUFBd0U7Q0FDeEUsRUFBRTtDQUNGLDhFQUE4RTtDQUM5RSxFQUFFO0NBQ0YsVUFBVTtDQUVWLHNEQUFzRDtDQUV0RCxtREFBbUQ7Q0FDbkQsWUFBWTtDQUNaLFFBQVE7Q0FDUixTQUFTO0NBQ1QsS0FBSyJ9