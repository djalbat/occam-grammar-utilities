"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedRule;
    }
});
var _occamParsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/indirectly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
var _array = require("../../utilities/array");
var _ruleName = require("../../utilities/ruleName");
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
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
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
var EpsilonPart = _occamParsers.Parts.EpsilonPart;
var IndirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyRepeatedRule, Rule);
    var _super = _createSuper(IndirectlyRepeatedRule);
    function IndirectlyRepeatedRule() {
        _classCallCheck(this, IndirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyRepeatedRule, null, [
        {
            key: "fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions",
            value: function fromRuleLeftRecursiveRuleNameAndIndirectlyLeftRecursiveDefinitions(rule, leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions) {
                var firstIndirectlyLeftRecursiveDefinition = (0, _array.first)(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///
                var definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []), definition, parts;
                var firstDefinition = (0, _array.first)(definitions);
                definition = firstDefinition; ///
                parts = definition.getParts();
                var firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
                definitions = definitions.reduce(function(definitions, definition) {
                    var parts = definition.getParts();
                    var firstPart = (0, _array.first)(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = (0, _array.tail)(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        definition = new _occamParsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition1 = new _occamParsers.Definition(parts1);
                    definitions.push(definition1);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHRhaWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBFcHNpbG9uUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBjb25zdCBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAvLy9cblxuICAgIGxldCBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldERlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uID0gZGVmaW5pdGlvbnMuaW5jbHVkZXMoZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24pIHtcbiAgICAgICAgZGVmaW5pdGlvbnMucHVzaChkZWZpbml0aW9uKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGRlZmluaXRpb25zO1xuICAgIH0sIFtdKSxcbiAgICAgICAgZGVmaW5pdGlvbixcbiAgICAgICAgcGFydHM7XG5cbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyk7XG5cbiAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uOyAvLy9cblxuICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgIHByZXZpb3VzRmlyc3RQYXJ0ID0gZmlyc3RQYXJ0OyAgLy8vXG5cbiAgICBkZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGRlZmluaXRpb24pID0+IHtcbiAgICAgIGxldCBwYXJ0cyAgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgZG9lcyBub3QgbWF0Y2ggb25lIG9mIGl0cyBzaWJsaW5nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZpbml0aW9ucztcbiAgICB9LCBbXSk7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICAgIGlmIChkZWZpbml0aW9uc0xlbmd0aCA9PT0gMCkge1xuICAgICAgY29uc3QgZXBzaWxvblBhcnQgPSBuZXcgRXBzaWxvblBhcnQoKSxcbiAgICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgICBlcHNpbG9uUGFydFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICAgIGRlZmluaXRpb25zLnB1c2goZGVmaW5pdGlvbik7XG4gICAgfVxuXG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUsICAvLy9cbiAgICAgICAgICBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbmV3IEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUobmFtZSwgYW1iaWd1b3VzLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIkluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJFcHNpbG9uUGFydCIsIlBhcnRzIiwiZnJvbVJ1bGVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0IiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJwdXNoIiwicGFydHMiLCJmaXJzdERlZmluaXRpb24iLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRzVGFpbCIsInRhaWwiLCJjbG9uZVBhcnRzIiwiRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwiZXBzaWxvblBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFhcUJBOzs7NEJBWG1COytEQUVMO29CQUVSO3FCQUNBO3FCQUNDO3dCQUNtRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUUvRSxJQUFNLEFBQUVDLGNBQWdCQyxtQkFBSyxDQUFyQkQ7QUFFTyxJQUFBLEFBQU1ELHVDQUFOO2NBQU1BOzhCQUFBQTthQUFBQTs4QkFBQUE7OztpQkFBQUE7O1lBQ1pHLEtBQUFBO21CQUFQLFNBQU9BLG1FQUFtRUMsSUFBSSxFQUFFQyxxQkFBcUIsRUFBRUMsa0NBQWtDLEVBQUU7Z0JBQ3pJLElBQU1DLHlDQUF5Q0MsSUFBQUEsWUFBSyxFQUFDRixxQ0FDL0NHLG9DQUFvQ0Ysd0NBQXdDLEdBQUc7Z0JBRXJGLElBQUlHLGNBQWNKLG1DQUFtQ0ssTUFBTSxDQUFDLFNBQUNELGFBQWFELG1DQUFzQztvQkFDOUcsSUFBTUcsYUFBYUgsa0NBQWtDSSxhQUFhLElBQzVEQyxnQ0FBZ0NKLFlBQVlLLFFBQVEsQ0FBQ0g7b0JBRTNELElBQUksQ0FBQ0UsK0JBQStCO3dCQUNsQ0osWUFBWU0sSUFBSSxDQUFDSjtvQkFDbkIsQ0FBQztvQkFFRCxPQUFPRjtnQkFDVCxHQUFHLEVBQUUsR0FDREUsWUFDQUs7Z0JBRUosSUFBTUMsa0JBQWtCVixJQUFBQSxZQUFLLEVBQUNFO2dCQUU5QkUsYUFBYU0saUJBQWlCLEdBQUc7Z0JBRWpDRCxRQUFRTCxXQUFXTyxRQUFRO2dCQUUzQixJQUFNQyxZQUFZWixJQUFBQSxZQUFLLEVBQUNTLFFBQ2xCSSxvQkFBb0JELFdBQVksR0FBRztnQkFFekNWLGNBQWNBLFlBQVlDLE1BQU0sQ0FBQyxTQUFDRCxhQUFhRSxZQUFlO29CQUM1RCxJQUFJSyxRQUFTTCxXQUFXTyxRQUFRO29CQUVoQyxJQUFNQyxZQUFZWixJQUFBQSxZQUFLLEVBQUNTLFFBQ2xCSyxVQUFVQyxJQUFBQSxnQkFBVSxFQUFDSCxXQUFXQztvQkFFdEMsSUFBSSxDQUFDQyxTQUFTO3dCQUNaLElBQU1FLFdBQVdmLGtDQUFrQ2dCLFdBQVcsSUFDeERDLG1CQUFtQmQsV0FBV2UsUUFBUTt3QkFFNUMsTUFBTSxJQUFJQyxNQUFNLEFBQUMsUUFBeUVKLE9BQWxFRSxrQkFBaUIsbURBQTBELE9BQVRGLFVBQVMsK0hBQTZIO29CQUNsTyxDQUFDO29CQUVELElBQU1LLGNBQWNaLE1BQU1hLE1BQU07b0JBRWhDLElBQUlELGNBQWMsR0FBRzt3QkFDbkIsSUFBTUUsWUFBWUMsSUFBQUEsV0FBSSxFQUFDZjt3QkFFdkJBLFFBQVFjLFdBQVksR0FBRzt3QkFFdkJkLFFBQVFnQixJQUFBQSxpQkFBVSxFQUFDaEIsUUFBUyxHQUFHO3dCQUUvQkwsYUFBYSxJQUFJc0Isd0JBQVUsQ0FBQ2pCO3dCQUU1QlAsWUFBWU0sSUFBSSxDQUFDSjtvQkFDbkIsQ0FBQztvQkFFRCxPQUFPRjtnQkFDVCxHQUFHLEVBQUU7Z0JBRUwsSUFBTXlCLG9CQUFvQnpCLFlBQVlvQixNQUFNO2dCQUU1QyxJQUFJSyxzQkFBc0IsR0FBRztvQkFDM0IsSUFBTUMsY0FBYyxJQUFJbkMsZUFDbEJnQixTQUFRO3dCQUNObUI7cUJBQ0QsRUFDRHhCLGNBQWEsSUFBSXNCLHdCQUFVLENBQUNqQjtvQkFFbENQLFlBQVlNLElBQUksQ0FBQ0o7Z0JBQ25CLENBQUM7Z0JBRUQsSUFBTVksV0FBV2Ysa0NBQWtDZ0IsV0FBVyxJQUN4RFksNkJBQTZCQyxJQUFBQSx3RUFBOEQsRUFBQ2QsVUFBVW5CLHdCQUN0R2tDLE9BQU9GLDRCQUNQRyxZQUFZLEtBQUssRUFDakJDLGtCQUFrQkMsbUJBQXNCLEVBQ3hDQyx5QkFBeUIsSUExRWQzQyx1QkEwRXlDdUMsTUFBTUMsV0FBVzlCLGFBQWErQjtnQkFFeEYsT0FBT0U7WUFDVDs7O1dBN0VtQjNDO0VBQStCNEMsa0JBQUkifQ==