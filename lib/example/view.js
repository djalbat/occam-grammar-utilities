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
var _index = require("../index");
var _easylayout = require("easy-layout");
var _subHeading = /*#__PURE__*/ _interop_require_default(require("./view/subHeading"));
var _sizeable = /*#__PURE__*/ _interop_require_default(require("./view/div/sizeable"));
var _bnf = /*#__PURE__*/ _interop_require_default(require("./view/textarea/bnf"));
var _content = /*#__PURE__*/ _interop_require_default(require("./view/textarea/content"));
var _parseTree = /*#__PURE__*/ _interop_require_default(require("./view/textarea/parseTree"));
var _startRuleName = /*#__PURE__*/ _interop_require_default(require("./view/input/startRuleName"));
var _adjustedBNF = /*#__PURE__*/ _interop_require_default(require("./view/textarea/adjustedBNF"));
var _lexicalEntries = /*#__PURE__*/ _interop_require_default(require("./view/textarea/lexicalEntries"));
function _assert_this_initialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _call_super(_this, derived, args) {
    derived = _get_prototype_of(derived);
    return _possible_constructor_return(_this, _is_native_reflect_construct() ? Reflect.construct(derived, args || [], _get_prototype_of(_this).constructor) : derived.apply(_this, args));
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
    try {
        var result = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (_) {}
    return (_is_native_reflect_construct = function() {
        return !!result;
    })();
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
    function View() {
        _class_call_check(this, View);
        var _this;
        _this = _call_super(this, View, arguments), _define_property(_this, "keyUpHandler", function(event, element) {
            _this.update();
        }), _define_property(_this, "changeHandler", function(event, element) {
            _this.update();
        });
        return _this;
    }
    _create_class(View, [
        {
            key: "update",
            value: function update() {
                try {
                    var bnf = this.getBNF(), startRuleName = this.getStartRuleName(), lexicalEntries = this.getLexicalEntries();
                    var rules = rulesFromBNF(bnf);
                    rules = (0, _index.eliminateLeftRecursion)(rules); ///
                    var multiLine = true, rulesString = rulesAsString(rules, multiLine), adjustedBNF = rulesString; ///
                    this.setAdjustedBNF(adjustedBNF);
                    var exampleLexer = exampleLexerFromLexicalEntries(lexicalEntries), exampleParser = exampleParserFromRulesAndStartRuleName(rules, startRuleName);
                    var content = this.getContent(), tokens = exampleLexer.tokenise(content), node = exampleParser.parse(tokens);
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
_define_property(View, "occludedBNF", 'unqualifiedStatement ::= statement... <END_OF_LINE> ; \n  \nstatement            ::= judgement\n\n                       | metavariable\n\n                       ;\n\njudgement            ::=  frame "|=" declaration ;\n\nframe                ::=  entry ( "," entry ) ;\n \nentry                ::=  ( reference "::" )?  statement ;\n\ndeclaration          ::=  reference "::" statement ;\n\nmetavariable         ::= "a" ;');
_define_property(View, "initialBNF", 'unqualifiedStatement ::= statement... <END_OF_LINE> ; \n  \nstatement            ::= judgement\n\n                       | metavariable\n\n                       ;\n\njudgement            ::=  frame "|=" declaration ;\n\nframe                ::=  declaration ( "," ( statement | declaration ) )* \n\n                       |  statement ( "," ( statement | declaration ) )*\n                                       \n                       ;\n \ndeclaration          ::=  reference "::" statement ;\n\nreference            ::=  metavariable ;\n\nmetavariable         ::=  [name] ( <NO_WHITESPACE>"(" argument... ")" )? ;');
_define_property(View, "initialContent", "a, a :: a |= a :: a\n");
_define_property(View, "initialStartRuleName", "");
_define_property(View, "initialLexicalEntries", [
    {
        "special": "\\|=|::"
    },
    {
        "name": "[a-zA-Z]+"
    },
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
    var entries = lexicalEntries, exampleLexer = _index.ExampleLexer.fromEntries(entries);
    return exampleLexer;
}
function exampleParserFromRulesAndStartRuleName(rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRulesAndStartRuleName(rules, startRuleName), exampleParser = new _index.ExampleParser(startRule, ruleMap);
    return exampleParser;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBFeGFtcGxlTGV4ZXIsIEV4YW1wbGVQYXJzZXIsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi92aWV3L2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBleGFtcGxlTGV4ZXIgPSBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpLFxuICAgICAgICAgICAgZXhhbXBsZVBhcnNlciA9ICBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxMZXhpY2FsRW50cmllcywgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGluaXRpYWxMZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgb2NjbHVkZWRCTkYgPSBgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgOjo9IHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDsgXG4gIFxuc3RhdGVtZW50ICAgICAgICAgICAgOjo9IGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifD1cIiBkZWNsYXJhdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgIDo6PSAgZW50cnkgKCBcIixcIiBlbnRyeSApIDtcbiBcbmVudHJ5ICAgICAgICAgICAgICAgIDo6PSAgKCByZWZlcmVuY2UgXCI6OlwiICk/ICBzdGF0ZW1lbnQgO1xuXG5kZWNsYXJhdGlvbiAgICAgICAgICA6Oj0gIHJlZmVyZW5jZSBcIjo6XCIgc3RhdGVtZW50IDtcblxubWV0YXZhcmlhYmxlICAgICAgICAgOjo9IFwiYVwiIDtgXG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgOjo9IHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDsgXG4gIFxuc3RhdGVtZW50ICAgICAgICAgICAgOjo9IGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifD1cIiBkZWNsYXJhdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24gKCBcIixcIiAoIHN0YXRlbWVudCB8IGRlY2xhcmF0aW9uICkgKSogXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCAgc3RhdGVtZW50ICggXCIsXCIgKCBzdGF0ZW1lbnQgfCBkZWNsYXJhdGlvbiApICkqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgOjo9ICByZWZlcmVuY2UgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnJlZmVyZW5jZSAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIDtcblxubWV0YXZhcmlhYmxlICAgICAgICAgOjo9ICBbbmFtZV0gKCA8Tk9fV0hJVEVTUEFDRT5cIihcIiBhcmd1bWVudC4uLiBcIilcIiApPyA7YFxuXG4gIHN0YXRpYyBpbml0aWFsQ29udGVudCA9IGBhLCBhIDo6IGEgfD0gYSA6OiBhXG5gO1xuXG4gIHN0YXRpYyBpbml0aWFsU3RhcnRSdWxlTmFtZSA9IFwiXCI7XG5cbiAgc3RhdGljIGluaXRpYWxMZXhpY2FsRW50cmllcyA9IFtcbiAgICB7XG4gICAgICBcInNwZWNpYWxcIjogXCJcXFxcfD18OjpcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJuYW1lXCI6IFwiW2EtekEtWl0rXCJcbiAgICB9LFxuICAgIHtcbiAgICAgIFwidW5hc3NpZ25lZFwiOiBcIi5cIlxuICAgIH1cbiAgXTtcblxuICBzdGF0aWMgdGFnTmFtZSA9IFwiZGl2XCI7XG5cbiAgc3RhdGljIGRlZmF1bHRQcm9wZXJ0aWVzID0ge1xuICAgIGNsYXNzTmFtZTogXCJ2aWV3XCJcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlKFZpZXcpYFxuXG4gIHBhZGRpbmc6IDFyZW07XG4gIFxuYDtcblxuZnVuY3Rpb24gZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKSB7XG4gIGNvbnN0IGVudHJpZXMgPSBsZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgIGV4YW1wbGVMZXhlciA9IEV4YW1wbGVMZXhlci5mcm9tRW50cmllcyhlbnRyaWVzKTtcblxuICByZXR1cm4gZXhhbXBsZUxleGVyO1xufVxuXG5mdW5jdGlvbiBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSkge1xuICBjb25zdCBydWxlTWFwID0gcnVsZU1hcEZyb21SdWxlcyhydWxlcyksXG4gICAgICAgIHN0YXJ0UnVsZSA9IHN0YXJ0UnVsZUZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUocnVsZXMsIHN0YXJ0UnVsZU5hbWUpLFxuICAgICAgICBleGFtcGxlUGFyc2VyID0gbmV3IEV4YW1wbGVQYXJzZXIoc3RhcnRSdWxlLCBydWxlTWFwKTtcblxuICByZXR1cm4gZXhhbXBsZVBhcnNlcjtcbn1cbiJdLCJuYW1lcyI6WyJydWxlc0Zyb21CTkYiLCJwYXJzZXJVdGlsaXRpZXMiLCJydWxlc0FzU3RyaW5nIiwicnVsZXNVdGlsaXRpZXMiLCJydWxlTWFwRnJvbVJ1bGVzIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSIsIlZpZXciLCJrZXlVcEhhbmRsZXIiLCJldmVudCIsImVsZW1lbnQiLCJ1cGRhdGUiLCJjaGFuZ2VIYW5kbGVyIiwiYm5mIiwiZ2V0Qk5GIiwic3RhcnRSdWxlTmFtZSIsImdldFN0YXJ0UnVsZU5hbWUiLCJsZXhpY2FsRW50cmllcyIsImdldExleGljYWxFbnRyaWVzIiwicnVsZXMiLCJlbGltaW5hdGVMZWZ0UmVjdXJzaW9uIiwibXVsdGlMaW5lIiwicnVsZXNTdHJpbmciLCJhZGp1c3RlZEJORiIsInNldEFkanVzdGVkQk5GIiwiZXhhbXBsZUxleGVyIiwiZXhhbXBsZUxleGVyRnJvbUxleGljYWxFbnRyaWVzIiwiZXhhbXBsZVBhcnNlciIsImV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiY29udGVudCIsImdldENvbnRlbnQiLCJ0b2tlbnMiLCJ0b2tlbmlzZSIsIm5vZGUiLCJwYXJzZSIsInBhcnNlVHJlZSIsImFzUGFyc2VUcmVlIiwic2V0UGFyc2VUcmVlIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY2hpbGRFbGVtZW50cyIsIkNvbHVtbnNEaXYiLCJTaXplYWJsZURpdiIsIlJvd3NEaXYiLCJTdWJIZWFkaW5nIiwiTGV4aWNhbEVudHJpZXNUZXh0YXJlYSIsIm9uS2V5VXAiLCJCTkZUZXh0YXJlYSIsIkFkanVzdGVkQk5GVGV4dGFyZWEiLCJyZWFkT25seSIsIlZlcnRpY2FsU3BsaXR0ZXJEaXYiLCJDb2x1bW5EaXYiLCJTdGFydFJ1bGVOYW1lSW5wdXQiLCJDb250ZW50VGV4dGFyZWEiLCJQYXJzZVRyZWVUZXh0YXJlYSIsImluaXRpYWxpc2UiLCJhc3NpZ25Db250ZXh0IiwiY29uc3RydWN0b3IiLCJpbml0aWFsQk5GIiwiaW5pdGlhbENvbnRlbnQiLCJpbml0aWFsTGV4aWNhbEVudHJpZXMiLCJpbml0aWFsU3RhcnRSdWxlTmFtZSIsInNldEJORiIsInNldENvbnRlbnQiLCJzZXRMZXhpY2FsRW50cmllcyIsInNldFN0YXJ0UnVsZU5hbWUiLCJFbGVtZW50Iiwib2NjbHVkZWRCTkYiLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJ3aXRoU3R5bGUiLCJlbnRyaWVzIiwiRXhhbXBsZUxleGVyIiwiZnJvbUVudHJpZXMiLCJydWxlTWFwIiwic3RhcnRSdWxlIiwiRXhhbXBsZVBhcnNlciJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7K0JBK0xBOzs7ZUFBQTs7O29FQTdMc0I7b0JBRUU7NEJBQ3dCO3FCQUNvQjswQkFDQTtpRUFFN0M7K0RBQ0M7MERBQ0E7OERBQ0k7Z0VBQ0U7b0VBQ0M7a0VBQ0M7cUVBQ0c7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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