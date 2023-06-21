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
                // const bnf = this.getBNF(),
                //   content = this.getContent(),
                //   startRuleName = this.getStartRuleName(),
                //   lexicalEntries = this.getLexicalEntries();
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
_define_property(View, "initialBNF", '\n\n     expression  ::=  term... <END_OF_LINE> ;\n      \n           term  ::=  "(" term ")" \n      \n                   |  term ( \n                      \n                             "/"  (1)\n                              \n                             | \n                              \n                             "*"  (2)\n                              \n                             | \n                              \n                             "+"  (3)\n                              \n                             | \n                              \n                             "-"  (4)\n                            \n                           ) term\n                   \n                   |  number \n                                                     \n                   ;\n      \n         number  ::=  /\\d+/ ;\n        \n  ');
_define_property(View, "initialContent", "1+2\n");
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IEV4YW1wbGVMZXhlciBmcm9tIFwiLi4vbGV4ZXIvZXhhbXBsZVwiO1xuaW1wb3J0IEV4YW1wbGVQYXJzZXIgZnJvbSBcIi4uL3BhcnNlci9leGFtcGxlXCI7XG5pbXBvcnQgQ29udGVudFRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvY29udGVudFwiO1xuaW1wb3J0IFBhcnNlVHJlZVRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvcGFyc2VUcmVlXCI7XG5pbXBvcnQgU3RhcnRSdWxlTmFtZUlucHV0IGZyb20gXCIuL3ZpZXcvaW5wdXQvc3RhcnRSdWxlTmFtZVwiO1xuaW1wb3J0IEFkanVzdGVkQk5GVGV4dGFyZWEgZnJvbSBcIi4vdmlldy90ZXh0YXJlYS9hZGp1c3RlZEJORlwiO1xuaW1wb3J0IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gZnJvbSBcIi4uL2VsaW1pbmF0ZUxlZnRSZWN1cnNpb25cIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjb250ZW50ID0gdGhpcy5nZXRDb250ZW50KCksXG4gICAgICAgICAgICB0b2tlbnMgPSB0aGlzLmV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSB0aGlzLmV4YW1wbGVQYXJzZXIucGFyc2UodG9rZW5zKTtcblxuICAgICAgbGV0IHBhcnNlVHJlZSA9IG51bGw7XG5cbiAgICAgIGlmIChub2RlICE9PSBudWxsKSB7XG4gICAgICAgIHBhcnNlVHJlZSA9IG5vZGUuYXNQYXJzZVRyZWUodG9rZW5zKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zZXRQYXJzZVRyZWUocGFyc2VUcmVlKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGNoaWxkRWxlbWVudHMoKSB7XG4gICAgcmV0dXJuIChcblxuICAgICAgPENvbHVtbnNEaXY+XG4gICAgICAgIDxTaXplYWJsZURpdj5cbiAgICAgICAgICA8Um93c0Rpdj5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBMZXhpY2FsIGVudHJpZXNcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxMZXhpY2FsRW50cmllc1RleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIEFkanVzdGVkIEJORlxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPEFkanVzdGVkQk5GVGV4dGFyZWEgcmVhZE9ubHkgLz5cbiAgICAgICAgICA8L1Jvd3NEaXY+XG4gICAgICAgIDwvU2l6ZWFibGVEaXY+XG4gICAgICAgIDxWZXJ0aWNhbFNwbGl0dGVyRGl2IC8+XG4gICAgICAgIDxDb2x1bW5EaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgU3RhcnQgcnVsZSBuYW1lXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8U3RhcnRSdWxlTmFtZUlucHV0IG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIENvbnRlbnRcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxDb250ZW50VGV4dGFyZWEgb25LZXlVcD17dGhpcy5rZXlVcEhhbmRsZXJ9IC8+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgUGFyc2UgdHJlZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFBhcnNlVHJlZVRleHRhcmVhIC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L0NvbHVtbkRpdj5cbiAgICAgIDwvQ29sdW1uc0Rpdj5cblxuICAgICk7XG4gIH1cblxuICBpbml0aWFsaXNlKCkge1xuICAgIHRoaXMuYXNzaWduQ29udGV4dCgpO1xuXG4gICAgY29uc3QgeyBpbml0aWFsQk5GLCBpbml0aWFsQ29udGVudCwgaW5pdGlhbExleGljYWxFbnRyaWVzLCBpbml0aWFsU3RhcnRSdWxlTmFtZSB9ID0gdGhpcy5jb25zdHJ1Y3RvcixcbiAgICAgICAgICBibmYgPSBpbml0aWFsQk5GLCAvLy9cbiAgICAgICAgICBjb250ZW50ID0gaW5pdGlhbENvbnRlbnQsIC8vL1xuICAgICAgICAgIGxleGljYWxFbnRyaWVzID0gaW5pdGlhbExleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgICBzdGFydFJ1bGVOYW1lID0gaW5pdGlhbFN0YXJ0UnVsZU5hbWU7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMuc2V0Q29udGVudChjb250ZW50KTtcblxuICAgIHRoaXMuc2V0TGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpO1xuXG4gICAgdGhpcy5zZXRTdGFydFJ1bGVOYW1lKHN0YXJ0UnVsZU5hbWUpO1xuXG4gICAgLy8gY29uc3QgYm5mID0gdGhpcy5nZXRCTkYoKSxcbiAgICAvLyAgIGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAvLyAgIHN0YXJ0UnVsZU5hbWUgPSB0aGlzLmdldFN0YXJ0UnVsZU5hbWUoKSxcbiAgICAvLyAgIGxleGljYWxFbnRyaWVzID0gdGhpcy5nZXRMZXhpY2FsRW50cmllcygpO1xuXG4gICAgbGV0IHJ1bGVzID0gcnVsZXNGcm9tQk5GKGJuZik7XG5cbiAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICBjb25zdCBtdWx0aUxpbmUgPSB0cnVlLFxuICAgICAgICAgIHJ1bGVzU3RyaW5nID0gcnVsZXNBc1N0cmluZyhydWxlcywgbXVsdGlMaW5lKSxcbiAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICB0aGlzLnNldEFkanVzdGVkQk5GKGFkanVzdGVkQk5GKTtcblxuICAgIHRoaXMuZXhhbXBsZUxleGVyID0gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuZXhhbXBsZVBhcnNlciA9ICBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgXG5cbiAgICAgZXhwcmVzc2lvbiAgOjo9ICB0ZXJtLi4uIDxFTkRfT0ZfTElORT4gO1xuICAgICAgXG4gICAgICAgICAgIHRlcm0gIDo6PSAgXCIoXCIgdGVybSBcIilcIiBcbiAgICAgIFxuICAgICAgICAgICAgICAgICAgIHwgIHRlcm0gKCBcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIvXCIgICgxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIqXCIgICgyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCIrXCIgICgzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIHwgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCItXCIgICg0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgKSB0ZXJtXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgfCAgbnVtYmVyIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICA7XG4gICAgICBcbiAgICAgICAgIG51bWJlciAgOjo9ICAvXFxcXGQrLyA7XG4gICAgICAgIFxuICBgXG5cbiAgc3RhdGljIGluaXRpYWxDb250ZW50ID0gYDErMlxuYDtcblxuICBzdGF0aWMgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgPSBcIlNcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxFbnRyaWVzID0gW3tcbiAgICB1bmFzc2lnbmVkOiBcIi5cIlxuICB9XTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGV4YW1wbGVMZXhlciA9IEV4YW1wbGVMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gZXhhbXBsZUxleGVyO1xufVxuXG5mdW5jdGlvbiBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICBleGFtcGxlUGFyc2VyID0gbmV3IEV4YW1wbGVQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gZXhhbXBsZVBhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJleGFtcGxlTGV4ZXIiLCJ0b2tlbmlzZSIsIm5vZGUiLCJleGFtcGxlUGFyc2VyIiwicGFyc2UiLCJwYXJzZVRyZWUiLCJhc1BhcnNlVHJlZSIsInNldFBhcnNlVHJlZSIsImVycm9yIiwiY29uc29sZSIsImxvZyIsImNoaWxkRWxlbWVudHMiLCJDb2x1bW5zRGl2IiwiU2l6ZWFibGVEaXYiLCJSb3dzRGl2IiwiU3ViSGVhZGluZyIsIkxleGljYWxFbnRyaWVzVGV4dGFyZWEiLCJvbktleVVwIiwiQk5GVGV4dGFyZWEiLCJBZGp1c3RlZEJORlRleHRhcmVhIiwicmVhZE9ubHkiLCJWZXJ0aWNhbFNwbGl0dGVyRGl2IiwiQ29sdW1uRGl2IiwiU3RhcnRSdWxlTmFtZUlucHV0IiwiQ29udGVudFRleHRhcmVhIiwiUGFyc2VUcmVlVGV4dGFyZWEiLCJpbml0aWFsaXNlIiwiYXNzaWduQ29udGV4dCIsImNvbnN0cnVjdG9yIiwiaW5pdGlhbEJORiIsImluaXRpYWxDb250ZW50IiwiaW5pdGlhbExleGljYWxFbnRyaWVzIiwiaW5pdGlhbFN0YXJ0UnVsZU5hbWUiLCJibmYiLCJsZXhpY2FsRW50cmllcyIsInN0YXJ0UnVsZU5hbWUiLCJzZXRCTkYiLCJzZXRDb250ZW50Iiwic2V0TGV4aWNhbEVudHJpZXMiLCJzZXRTdGFydFJ1bGVOYW1lIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzIiwiZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50IiwidW5hc3NpZ25lZCIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJpZXMiLCJFeGFtcGxlTGV4ZXIiLCJmcm9tRW50cmllcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkFtTEE7OztlQUFBOzs7b0VBakxzQjtvQkFFRTs0QkFDd0I7MEJBQ29CO2lFQUU3QzsrREFDQzswREFDQTs4REFDQzsrREFDQzs4REFDRTtnRUFDRTtvRUFDQztrRUFDQzs2RUFDRztxRUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuQyxJQUFNLEFBQUVBLGVBQWlCQyw2QkFBZSxDQUFoQ0QsY0FDQUUsZ0JBQXdFQyw0QkFBYyxDQUF0RkQsZUFBZUUsbUJBQXlERCw0QkFBYyxDQUF2RUMsa0JBQWtCQyxxQ0FBdUNGLDRCQUFjLENBQXJERTtBQUV6QyxJQUFBLEFBQU1DLHFCQTRKSCxBQTVKSDtjQUFNQTsrQkFBQUE7YUFBQUE7Z0NBQUFB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