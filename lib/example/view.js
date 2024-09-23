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
_define_property(View, "initialBNF", 'unqualifiedStatement ::= statement... <END_OF_LINE> ; \n  \nstatement            ::= judgement\n\n                       | metavariable\n\n                       ;\n\njudgement            ::=  frame "|=" declaration ;\n\nframe                ::=  declaration ( "," ( statement | declaration ) )* \n\n                       |  statement ( "," ( statement | declaration ) )*\n                                       \n                       ;\n \ndeclaration          ::=  reference "::" statement ;\n\nreference            ::=  metavariable ;\n\nmetavariable         ::=  [identifier] ;');
_define_property(View, "initialContent", "a |= R :: S\n");
_define_property(View, "initialStartRuleName", "");
_define_property(View, "initialLexicalEntries", [
    {
        "special": "\\|=|::"
    },
    {
        "identifier": "[a-zA-Z]+"
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9leGFtcGxlL3ZpZXcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB3aXRoU3R5bGUgZnJvbSBcImVhc3ktd2l0aC1zdHlsZVwiOyAgLy8vXG5cbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiZWFzeVwiO1xuaW1wb3J0IHsgcnVsZXNVdGlsaXRpZXMsIHBhcnNlclV0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5pbXBvcnQgeyBFeGFtcGxlTGV4ZXIsIEV4YW1wbGVQYXJzZXIsIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gfSBmcm9tIFwiLi4vaW5kZXhcIjsgLy8vXG5pbXBvcnQgeyBSb3dzRGl2LCBDb2x1bW5EaXYsIENvbHVtbnNEaXYsIFZlcnRpY2FsU3BsaXR0ZXJEaXYgfSBmcm9tIFwiZWFzeS1sYXlvdXRcIjtcblxuaW1wb3J0IFN1YkhlYWRpbmcgZnJvbSBcIi4vdmlldy9zdWJIZWFkaW5nXCI7XG5pbXBvcnQgU2l6ZWFibGVEaXYgZnJvbSBcIi4vdmlldy9kaXYvc2l6ZWFibGVcIjtcbmltcG9ydCBCTkZUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2JuZlwiO1xuaW1wb3J0IENvbnRlbnRUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL2NvbnRlbnRcIjtcbmltcG9ydCBQYXJzZVRyZWVUZXh0YXJlYSBmcm9tIFwiLi92aWV3L3RleHRhcmVhL3BhcnNlVHJlZVwiO1xuaW1wb3J0IFN0YXJ0UnVsZU5hbWVJbnB1dCBmcm9tIFwiLi92aWV3L2lucHV0L3N0YXJ0UnVsZU5hbWVcIjtcbmltcG9ydCBBZGp1c3RlZEJORlRleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvYWRqdXN0ZWRCTkZcIjtcbmltcG9ydCBMZXhpY2FsRW50cmllc1RleHRhcmVhIGZyb20gXCIuL3ZpZXcvdGV4dGFyZWEvbGV4aWNhbEVudHJpZXNcIjtcblxuY29uc3QgeyBydWxlc0Zyb21CTkYgfSA9IHBhcnNlclV0aWxpdGllcyxcbiAgICAgIHsgcnVsZXNBc1N0cmluZywgcnVsZU1hcEZyb21SdWxlcywgc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmNsYXNzIFZpZXcgZXh0ZW5kcyBFbGVtZW50IHtcbiAga2V5VXBIYW5kbGVyID0gKGV2ZW50LCBlbGVtZW50KSA9PiB7XG4gICAgdGhpcy51cGRhdGUoKTtcbiAgfVxuXG4gIGNoYW5nZUhhbmRsZXIgPSAoZXZlbnQsIGVsZW1lbnQpID0+IHtcbiAgICB0aGlzLnVwZGF0ZSgpO1xuICB9XG5cbiAgdXBkYXRlKCkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBibmYgPSB0aGlzLmdldEJORigpLFxuICAgICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IHRoaXMuZ2V0U3RhcnRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgbGV4aWNhbEVudHJpZXMgPSB0aGlzLmdldExleGljYWxFbnRyaWVzKCk7XG5cbiAgICAgIGxldCBydWxlcyA9IHJ1bGVzRnJvbUJORihibmYpO1xuXG4gICAgICBydWxlcyA9IGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24ocnVsZXMpOyAgLy8vXG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuXG4gICAgICBjb25zdCBleGFtcGxlTGV4ZXIgPSBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpLFxuICAgICAgICAgICAgZXhhbXBsZVBhcnNlciA9ICBleGFtcGxlUGFyc2VyRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgICAgIGNvbnN0IGNvbnRlbnQgPSB0aGlzLmdldENvbnRlbnQoKSxcbiAgICAgICAgICAgIHRva2VucyA9IGV4YW1wbGVMZXhlci50b2tlbmlzZShjb250ZW50KSxcbiAgICAgICAgICAgIG5vZGUgPSBleGFtcGxlUGFyc2VyLnBhcnNlKHRva2Vucyk7XG5cbiAgICAgIGxldCBwYXJzZVRyZWUgPSBudWxsO1xuXG4gICAgICBpZiAobm9kZSAhPT0gbnVsbCkge1xuICAgICAgICBwYXJzZVRyZWUgPSBub2RlLmFzUGFyc2VUcmVlKHRva2Vucyk7XG4gICAgICB9XG5cbiAgICAgIHRoaXMuc2V0UGFyc2VUcmVlKHBhcnNlVHJlZSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKCkge1xuICAgIHJldHVybiAoXG5cbiAgICAgIDxDb2x1bW5zRGl2PlxuICAgICAgICA8U2l6ZWFibGVEaXY+XG4gICAgICAgICAgPFJvd3NEaXY+XG4gICAgICAgICAgICA8U3ViSGVhZGluZz5cbiAgICAgICAgICAgICAgTGV4aWNhbCBlbnRyaWVzXG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8TGV4aWNhbEVudHJpZXNUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxCTkZUZXh0YXJlYSBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBBZGp1c3RlZCBCTkZcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIHJlYWRPbmx5IC8+XG4gICAgICAgICAgPC9Sb3dzRGl2PlxuICAgICAgICA8L1NpemVhYmxlRGl2PlxuICAgICAgICA8VmVydGljYWxTcGxpdHRlckRpdiAvPlxuICAgICAgICA8Q29sdW1uRGl2PlxuICAgICAgICAgIDxSb3dzRGl2PlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFN0YXJ0IHJ1bGUgbmFtZVxuICAgICAgICAgICAgPC9TdWJIZWFkaW5nPlxuICAgICAgICAgICAgPFN0YXJ0UnVsZU5hbWVJbnB1dCBvbktleVVwPXt0aGlzLmtleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgICAgIDxTdWJIZWFkaW5nPlxuICAgICAgICAgICAgICBDb250ZW50XG4gICAgICAgICAgICA8L1N1YkhlYWRpbmc+XG4gICAgICAgICAgICA8Q29udGVudFRleHRhcmVhIG9uS2V5VXA9e3RoaXMua2V5VXBIYW5kbGVyfSAvPlxuICAgICAgICAgICAgPFN1YkhlYWRpbmc+XG4gICAgICAgICAgICAgIFBhcnNlIHRyZWVcbiAgICAgICAgICAgIDwvU3ViSGVhZGluZz5cbiAgICAgICAgICAgIDxQYXJzZVRyZWVUZXh0YXJlYSAvPlxuICAgICAgICAgIDwvUm93c0Rpdj5cbiAgICAgICAgPC9Db2x1bW5EaXY+XG4gICAgICA8L0NvbHVtbnNEaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IHsgaW5pdGlhbEJORiwgaW5pdGlhbENvbnRlbnQsIGluaXRpYWxMZXhpY2FsRW50cmllcywgaW5pdGlhbFN0YXJ0UnVsZU5hbWUgfSA9IHRoaXMuY29uc3RydWN0b3IsXG4gICAgICAgICAgYm5mID0gaW5pdGlhbEJORiwgLy8vXG4gICAgICAgICAgY29udGVudCA9IGluaXRpYWxDb250ZW50LCAvLy9cbiAgICAgICAgICBsZXhpY2FsRW50cmllcyA9IGluaXRpYWxMZXhpY2FsRW50cmllcywgLy8vXG4gICAgICAgICAgc3RhcnRSdWxlTmFtZSA9IGluaXRpYWxTdGFydFJ1bGVOYW1lOyAvLy9cblxuICAgIHRoaXMuc2V0Qk5GKGJuZik7XG5cbiAgICB0aGlzLnNldENvbnRlbnQoY29udGVudCk7XG5cbiAgICB0aGlzLnNldExleGljYWxFbnRyaWVzKGxleGljYWxFbnRyaWVzKTtcblxuICAgIHRoaXMuc2V0U3RhcnRSdWxlTmFtZShzdGFydFJ1bGVOYW1lKTtcblxuICAgIHRoaXMudXBkYXRlKCk7XG4gIH1cblxuICBzdGF0aWMgb2NjbHVkZWRCTkYgPSBgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgOjo9IHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDsgXG4gIFxuc3RhdGVtZW50ICAgICAgICAgICAgOjo9IGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifD1cIiBkZWNsYXJhdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgIDo6PSAgZW50cnkgKCBcIixcIiBlbnRyeSApIDtcbiBcbmVudHJ5ICAgICAgICAgICAgICAgIDo6PSAgKCByZWZlcmVuY2UgXCI6OlwiICk/ICBzdGF0ZW1lbnQgO1xuXG5kZWNsYXJhdGlvbiAgICAgICAgICA6Oj0gIHJlZmVyZW5jZSBcIjo6XCIgc3RhdGVtZW50IDtcblxubWV0YXZhcmlhYmxlICAgICAgICAgOjo9IFwiYVwiIDtgXG5cbiAgc3RhdGljIGluaXRpYWxCTkYgPSBgdW5xdWFsaWZpZWRTdGF0ZW1lbnQgOjo9IHN0YXRlbWVudC4uLiA8RU5EX09GX0xJTkU+IDsgXG4gIFxuc3RhdGVtZW50ICAgICAgICAgICAgOjo9IGp1ZGdlbWVudFxuXG4gICAgICAgICAgICAgICAgICAgICAgIHwgbWV0YXZhcmlhYmxlXG5cbiAgICAgICAgICAgICAgICAgICAgICAgO1xuXG5qdWRnZW1lbnQgICAgICAgICAgICA6Oj0gIGZyYW1lIFwifD1cIiBkZWNsYXJhdGlvbiA7XG5cbmZyYW1lICAgICAgICAgICAgICAgIDo6PSAgZGVjbGFyYXRpb24gKCBcIixcIiAoIHN0YXRlbWVudCB8IGRlY2xhcmF0aW9uICkgKSogXG5cbiAgICAgICAgICAgICAgICAgICAgICAgfCAgc3RhdGVtZW50ICggXCIsXCIgKCBzdGF0ZW1lbnQgfCBkZWNsYXJhdGlvbiApICkqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgO1xuIFxuZGVjbGFyYXRpb24gICAgICAgICAgOjo9ICByZWZlcmVuY2UgXCI6OlwiIHN0YXRlbWVudCA7XG5cbnJlZmVyZW5jZSAgICAgICAgICAgIDo6PSAgbWV0YXZhcmlhYmxlIDtcblxubWV0YXZhcmlhYmxlICAgICAgICAgOjo9ICBbaWRlbnRpZmllcl0gO2BcblxuICBzdGF0aWMgaW5pdGlhbENvbnRlbnQgPSBgYSB8PSBSIDo6IFNcbmA7XG5cbiAgc3RhdGljIGluaXRpYWxTdGFydFJ1bGVOYW1lID0gXCJcIjtcblxuICBzdGF0aWMgaW5pdGlhbExleGljYWxFbnRyaWVzID0gW1xuICAgIHtcbiAgICAgIFwic3BlY2lhbFwiOiBcIlxcXFx8PXw6OlwiXG4gICAgfSxcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjogXCJbYS16QS1aXStcIlxuICAgIH0sXG4gICAge1xuICAgICAgXCJ1bmFzc2lnbmVkXCI6IFwiLlwiXG4gICAgfVxuICBdO1xuXG4gIHN0YXRpYyB0YWdOYW1lID0gXCJkaXZcIjtcblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInZpZXdcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoVmlldylgXG5cbiAgcGFkZGluZzogMXJlbTtcbiAgXG5gO1xuXG5mdW5jdGlvbiBleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMobGV4aWNhbEVudHJpZXMpIHtcbiAgY29uc3QgZW50cmllcyA9IGxleGljYWxFbnRyaWVzLCAvLy9cbiAgICAgICAgZXhhbXBsZUxleGVyID0gRXhhbXBsZUxleGVyLmZyb21FbnRyaWVzKGVudHJpZXMpO1xuXG4gIHJldHVybiBleGFtcGxlTGV4ZXI7XG59XG5cbmZ1bmN0aW9uIGV4YW1wbGVQYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lKHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSksXG4gICAgICAgIGV4YW1wbGVQYXJzZXIgPSBuZXcgRXhhbXBsZVBhcnNlcihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBleGFtcGxlUGFyc2VyO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVzRnJvbUJORiIsInBhcnNlclV0aWxpdGllcyIsInJ1bGVzQXNTdHJpbmciLCJydWxlc1V0aWxpdGllcyIsInJ1bGVNYXBGcm9tUnVsZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIiwiVmlldyIsImtleVVwSGFuZGxlciIsImV2ZW50IiwiZWxlbWVudCIsInVwZGF0ZSIsImNoYW5nZUhhbmRsZXIiLCJibmYiLCJnZXRCTkYiLCJzdGFydFJ1bGVOYW1lIiwiZ2V0U3RhcnRSdWxlTmFtZSIsImxleGljYWxFbnRyaWVzIiwiZ2V0TGV4aWNhbEVudHJpZXMiLCJydWxlcyIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJtdWx0aUxpbmUiLCJydWxlc1N0cmluZyIsImFkanVzdGVkQk5GIiwic2V0QWRqdXN0ZWRCTkYiLCJleGFtcGxlTGV4ZXIiLCJleGFtcGxlTGV4ZXJGcm9tTGV4aWNhbEVudHJpZXMiLCJleGFtcGxlUGFyc2VyIiwiZXhhbXBsZVBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJjb250ZW50IiwiZ2V0Q29udGVudCIsInRva2VucyIsInRva2VuaXNlIiwibm9kZSIsInBhcnNlIiwicGFyc2VUcmVlIiwiYXNQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJjaGlsZEVsZW1lbnRzIiwiQ29sdW1uc0RpdiIsIlNpemVhYmxlRGl2IiwiUm93c0RpdiIsIlN1YkhlYWRpbmciLCJMZXhpY2FsRW50cmllc1RleHRhcmVhIiwib25LZXlVcCIsIkJORlRleHRhcmVhIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsInJlYWRPbmx5IiwiVmVydGljYWxTcGxpdHRlckRpdiIsIkNvbHVtbkRpdiIsIlN0YXJ0UnVsZU5hbWVJbnB1dCIsIkNvbnRlbnRUZXh0YXJlYSIsIlBhcnNlVHJlZVRleHRhcmVhIiwiaW5pdGlhbGlzZSIsImFzc2lnbkNvbnRleHQiLCJjb25zdHJ1Y3RvciIsImluaXRpYWxCTkYiLCJpbml0aWFsQ29udGVudCIsImluaXRpYWxMZXhpY2FsRW50cmllcyIsImluaXRpYWxTdGFydFJ1bGVOYW1lIiwic2V0Qk5GIiwic2V0Q29udGVudCIsInNldExleGljYWxFbnRyaWVzIiwic2V0U3RhcnRSdWxlTmFtZSIsIkVsZW1lbnQiLCJvY2NsdWRlZEJORiIsInRhZ05hbWUiLCJkZWZhdWx0UHJvcGVydGllcyIsImNsYXNzTmFtZSIsIndpdGhTdHlsZSIsImVudHJpZXMiLCJFeGFtcGxlTGV4ZXIiLCJmcm9tRW50cmllcyIsInJ1bGVNYXAiLCJzdGFydFJ1bGUiLCJFeGFtcGxlUGFyc2VyIl0sIm1hcHBpbmdzIjoiQUFBQTs7OzsrQkErTEE7OztlQUFBOzs7b0VBN0xzQjtvQkFFRTs0QkFDd0I7cUJBQ29COzBCQUNBO2lFQUU3QzsrREFDQzswREFDQTs4REFDSTtnRUFDRTtvRUFDQztrRUFDQztxRUFDRzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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