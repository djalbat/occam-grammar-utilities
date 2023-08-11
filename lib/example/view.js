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
                    // const bnf = this.getBNF(),
                    //       startRuleName = this.getStartRuleName(),
                    //       lexicalEntries = this.getLexicalEntries();
                    //
                    // let rules = rulesFromBNF(bnf);
                    //
                    // rules = eliminateLeftRecursion(rules);  ///
                    //
                    // const multiLine = true,
                    //       rulesString = rulesAsString(rules, multiLine),
                    //       adjustedBNF = rulesString;  ///
                    //
                    // this.setAdjustedBNF(adjustedBNF);
                    //
                    // const exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries),
                    //       exampleParser =  exampleParserFromRulesAndStartRuleName(rules, startRuleName);
                    var content = this.getContent(), tokens = this.exampleLexer.tokenise(content), node = this.exampleParser.parse(tokens);
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
                var rules = rulesFromBNF(bnf);
                rules = (0, _eliminateLeftRecursion.default)(rules); ///
                var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                this.setAdjustedBNF(adjustedBNF);
                this.exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries);
                this.exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName);
                this.update();
            }
        }
    ]);
    return View;
}(_wrap_native_super(_easy.Element));
_define_property(View, "initialBNF", '\n      \n     expression ::= term... "." ;\n\n          term  ::=  argument ( "/" (4)\n                            \n                              | "*" (3)\n                                        \n                              | "+" (2)\n            \n                              | "-" (1) ) argument\n\n                  |  /\\d+/   \n      \n                  ;\n                  \n       argument ::= term ( )\n       \n                  | type \n                  \n                  ;\n\n  ');
_define_property(View, "initialContent", "1+2/3.");
_define_property(View, "initialStartRuleName", "");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IEV4YW1wbGVMZXhlciBmcm9tIFwiLi4vbGV4ZXIvZXhhbXBsZVwiO1xuaW1wb3J0IEV4YW1wbGVQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9leGFtcGxlXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICAvLyBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgLy8gICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgLy8gICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG4gICAgICAvL1xuICAgICAgLy8gbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG4gICAgICAvL1xuICAgICAgLy8gcnVsZXMgPSBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHJ1bGVzKTsgIC8vL1xuICAgICAgLy9cbiAgICAgIC8vIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAvLyAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAvLyAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG4gICAgICAvL1xuICAgICAgLy8gdGhpcy5zZXRBZGp1c3RlZEJORihhZGp1c3RlZEJORik7XG4gICAgICAvL1xuICAgICAgLy8gY29uc3QgZXhhbXBsZUxleGVyID0gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSxcbiAgICAgIC8vICAgICAgIGV4YW1wbGVQYXJzZXIgPSAgZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmV4YW1wbGVQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxFbnRyaWVzLCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRoaXMuZXhhbXBsZUxleGVyID0gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuZXhhbXBsZVBhcnNlciA9ICBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG4gICAgICBcbiAgICAgZXhwcmVzc2lvbiA6Oj0gdGVybS4uLiBcIi5cIiA7XG5cbiAgICAgICAgICB0ZXJtICA6Oj0gIGFyZ3VtZW50ICggXCIvXCIgKDQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8IFwiKlwiICgzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIitcIiAoMilcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfCBcIi1cIiAoMSkgKSBhcmd1bWVudFxuXG4gICAgICAgICAgICAgICAgICB8ICAvXFxcXGQrLyAgIFxuICAgICAgXG4gICAgICAgICAgICAgICAgICA7XG4gICAgICAgICAgICAgICAgICBcbiAgICAgICBhcmd1bWVudCA6Oj0gdGVybSAoIClcbiAgICAgICBcbiAgICAgICAgICAgICAgICAgIHwgdHlwZSBcbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgO1xuXG4gIGBcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBcIjErMi8zLlwiO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFt7XG4gICAgdW5hc3NpZ25lZDogXCIuXCJcbiAgfV07XG5cbiAgc3RhdGljIHRhZ05hbWUgPSBcImRpdlwiO1xuXG4gIHN0YXRpYyBkZWZhdWx0UHJvcGVydGllcyA9IHtcbiAgICBjbGFzc05hbWU6IFwidmlld1wiXG4gIH07XG59XG5cbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZShWaWV3KWBcblxuICBwYWRkaW5nOiAxcmVtO1xuICBcbmA7XG5cbmZ1bmN0aW9uIGV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyhsZXhpY2FsRW50cmllcykge1xuICBjb25zdCBlbnRyaWVzID0gbGV4aWNhbEVudHJpZXMsIC8vL1xuICAgICAgICBleGFtcGxlTGV4ZXIgPSBFeGFtcGxlTGV4ZXIuZnJvbUVudHJpZXMoZW50cmllcyk7XG5cbiAgcmV0dXJuIGV4YW1wbGVMZXhlcjtcbn1cblxuZnVuY3Rpb24gZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU1hcCA9IHJ1bGVNYXBGcm9tUnVsZXMocnVsZXMpLFxuICAgICAgICBzdGFydFJ1bGUgPSBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSxcbiAgICAgICAgZXhhbXBsZVBhcnNlciA9IG5ldyBFeGFtcGxlUGFyc2VyKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIGV4YW1wbGVQYXJzZXI7XG59XG4iXSwibmFtZXMiOlsicnVsZXNGcm9tQk5GIiwicGFyc2VyVXRpbGl0aWVzIiwicnVsZXNBc1N0cmluZyIsInJ1bGVzVXRpbGl0aWVzIiwicnVsZU1hcEZyb21SdWxlcyIsInN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJWaWV3Iiwia2V5VXBIYW5kbGVyIiwiZXZlbnQiLCJlbGVtZW50IiwidXBkYXRlIiwiY2hhbmdlSGFuZGxlciIsImNvbnRlbnQiLCJnZXRDb250ZW50IiwidG9rZW5zIiwiZXhhbXBsZUxleGVyIiwidG9rZW5pc2UiLCJub2RlIiwiZXhhbXBsZVBhcnNlciIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwiYm5mIiwibGV4aWNhbEVudHJpZXMiLCJzdGFydFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwic2V0U3RhcnRSdWxlTmFtZSIsInJ1bGVzIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJzZXRBZGp1c3RlZEJORiIsImV4YW1wbGVMZXhlckZyb21MZXhpY2FsRW50cmllcyIsImV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiRWxlbWVudCIsInVuYXNzaWduZWQiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJlbnRyaWVzIiwiRXhhbXBsZUxleGVyIiwiZnJvbUVudHJpZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiRXhhbXBsZVBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBc0xBOzs7ZUFBQTs7O29FQXBMc0I7b0JBRUU7NEJBQ3dCOzBCQUNvQjtpRUFFN0M7K0RBQ0M7MERBQ0E7OERBQ0M7K0RBQ0M7OERBQ0U7Z0VBQ0U7b0VBQ0M7a0VBQ0M7NkVBQ0c7cUVBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkMsSUFBTSxBQUFFQSxlQUFpQkMsNkJBQWUsQ0FBaENELGNBQ0FF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