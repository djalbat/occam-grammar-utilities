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
                indirectlyLeftRecursiveDefinitions = indirectlyLeftRecursiveDefinitions.filter(function(indirectlyLeftRecursiveDefinition) {
                    var indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();
                    if (indirectlyLeftRecursiveDefinitionRule === rule) {
                        var indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
                        if (indirectlyLeftRecursiveDefinitionLeftRecursiveRuleName === leftRecursiveRuleName) {
                            return true;
                        }
                    }
                });
                var firstIndirectlyLeftRecursiveDefinition = (0, _array.first)(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition; ///
                var definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var definition = indirectlyLeftRecursiveDefinition.getDefinition(), definitionsIncludesDefinition = definitions.includes(definition);
                    if (!definitionsIncludesDefinition) {
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var firstDefinition = (0, _array.first)(definitions), definition = firstDefinition, parts = definition.getParts(), firstPart = (0, _array.first)(parts), previousFirstPart = firstPart; ///
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiLCI8PGpzeC1jb25maWctcHJhZ21hLmpzPj4iXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFJ1bGUsIFBhcnRzLCBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IEluZGlyZWN0bHlSZXBlYXRlZE5vZGUgZnJvbSBcIi4uLy4uL25vZGUvcmVwZWF0ZWQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgZmlyc3QsIHRhaWwgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcblxuY29uc3QgeyBFcHNpbG9uUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5maWx0ZXIoKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAvLy9cbiAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZSgpO1xuXG4gICAgICBpZiAoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9PT0gcnVsZSkge1xuICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCk7XG5cbiAgICAgICAgaWYgKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuXG4gICAgbGV0IGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnNJbmNsdWRlc0RlZmluaXRpb24gPSBkZWZpbml0aW9ucy5pbmNsdWRlcyhkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFkZWZpbml0aW9uc0luY2x1ZGVzRGVmaW5pdGlvbikge1xuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZmlyc3REZWZpbml0aW9uID0gZmlyc3QoZGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGRlZmluaXRpb24gPSBmaXJzdERlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5yZWR1Y2UoKGRlZmluaXRpb25zLCBkZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgICAgICBtYXRjaGVzID0gbWF0Y2hQYXJ0cyhmaXJzdFBhcnQsIHByZXZpb3VzRmlyc3RQYXJ0KTtcblxuICAgICAgaWYgKCFtYXRjaGVzKSB7XG4gICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiRXBzaWxvblBhcnQiLCJQYXJ0cyIsImZyb21SdWxlTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlsdGVyIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSIsImdldFJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0IiwiZGVmaW5pdGlvbnMiLCJyZWR1Y2UiLCJkZWZpbml0aW9uIiwiZ2V0RGVmaW5pdGlvbiIsImRlZmluaXRpb25zSW5jbHVkZXNEZWZpbml0aW9uIiwiaW5jbHVkZXMiLCJwdXNoIiwiZmlyc3REZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsImZpcnN0UGFydCIsInByZXZpb3VzRmlyc3RQYXJ0IiwibWF0Y2hlcyIsIm1hdGNoUGFydHMiLCJydWxlTmFtZSIsImdldFJ1bGVOYW1lIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRzVGFpbCIsInRhaWwiLCJjbG9uZVBhcnRzIiwiRGVmaW5pdGlvbiIsImRlZmluaXRpb25zTGVuZ3RoIiwiZXBzaWxvblBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBYVFBLHNCQUFzQjs7OzRCQVhILGVBQWU7K0RBRXBCLGdDQUFnQztvQkFFeEMsc0JBQXNCO3FCQUN0Qix1QkFBdUI7cUJBQ3RCLHVCQUF1Qjt3QkFDNEIsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRXpHLElBQU0sQUFBRUMsV0FBVyxHQUFLQyxhQUFLLE1BQUEsQ0FBckJELFdBQVcsQUFBVSxBQUFDO0FBRWYsSUFBQSxBQUFNRCxzQkFBc0IsaUJBQTVCO2NBQU1BLHNCQUFzQjs4QkFBdEJBLHNCQUFzQjthQUF0QkEsc0JBQXNCOzhCQUF0QkEsc0JBQXNCOzs7aUJBQXRCQSxzQkFBc0I7O1lBQ2xDRyxHQUFrRSxFQUFsRUEsb0VBQWtFO21CQUF6RSxTQUFPQSxrRUFBa0UsQ0FBQ0MsSUFBSSxFQUFFQyxxQkFBcUIsRUFBRUMsa0NBQWtDLEVBQUU7Z0JBQ3pJQSxrQ0FBa0MsR0FBR0Esa0NBQWtDLENBQUNDLE1BQU0sQ0FBQyxTQUFDQyxpQ0FBaUMsRUFBSztvQkFDcEgsSUFBTUMscUNBQXFDLEdBQUdELGlDQUFpQyxDQUFDRSxPQUFPLEVBQUUsQUFBQztvQkFFMUYsSUFBSUQscUNBQXFDLEtBQUtMLElBQUksRUFBRTt3QkFDbEQsSUFBTU8sc0RBQXNELEdBQUdILGlDQUFpQyxDQUFDSSx3QkFBd0IsRUFBRSxBQUFDO3dCQUU1SCxJQUFJRCxzREFBc0QsS0FBS04scUJBQXFCLEVBQUU7NEJBQ3BGLE9BQU8sSUFBSSxDQUFDO3dCQUNkLENBQUM7b0JBQ0gsQ0FBQztnQkFDSCxDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFNUSxzQ0FBc0MsR0FBR0MsSUFBQUEsTUFBSyxNQUFBLEVBQUNSLGtDQUFrQyxDQUFDLEVBQ2xGRSxpQ0FBaUMsR0FBR0ssc0NBQXNDLEFBQUMsRUFBQyxHQUFHO2dCQUVyRixJQUFJRSxXQUFXLEdBQUdULGtDQUFrQyxDQUFDVSxNQUFNLENBQUMsU0FBQ0QsV0FBVyxFQUFFUCxpQ0FBaUMsRUFBSztvQkFDOUcsSUFBTVMsVUFBVSxHQUFHVCxpQ0FBaUMsQ0FBQ1UsYUFBYSxFQUFFLEVBQzlEQyw2QkFBNkIsR0FBR0osV0FBVyxDQUFDSyxRQUFRLENBQUNILFVBQVUsQ0FBQyxBQUFDO29CQUV2RSxJQUFJLENBQUNFLDZCQUE2QixFQUFFO3dCQUNsQ0osV0FBVyxDQUFDTSxJQUFJLENBQUNKLFVBQVUsQ0FBQyxDQUFDO29CQUMvQixDQUFDO29CQUVELE9BQU9GLFdBQVcsQ0FBQztnQkFDckIsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxBQUFDO2dCQUVQLElBQU1PLGVBQWUsR0FBR1IsSUFBQUEsTUFBSyxNQUFBLEVBQUNDLFdBQVcsQ0FBQyxFQUNwQ0UsVUFBVSxHQUFHSyxlQUFlLEVBQzVCQyxLQUFLLEdBQUdOLFVBQVUsQ0FBQ08sUUFBUSxFQUFFLEVBQzdCQyxTQUFTLEdBQUdYLElBQUFBLE1BQUssTUFBQSxFQUFDUyxLQUFLLENBQUMsRUFDeEJHLGlCQUFpQixHQUFHRCxTQUFTLEFBQUMsRUFBRSxHQUFHO2dCQUV6Q1YsV0FBVyxHQUFHQSxXQUFXLENBQUNDLE1BQU0sQ0FBQyxTQUFDRCxXQUFXLEVBQUVFLFVBQVUsRUFBSztvQkFDNUQsSUFBSU0sS0FBSyxHQUFJTixVQUFVLENBQUNPLFFBQVEsRUFBRSxBQUFDO29CQUVuQyxJQUFNQyxTQUFTLEdBQUdYLElBQUFBLE1BQUssTUFBQSxFQUFDUyxLQUFLLENBQUMsRUFDeEJJLE9BQU8sR0FBR0MsSUFBQUEsS0FBVSxXQUFBLEVBQUNILFNBQVMsRUFBRUMsaUJBQWlCLENBQUMsQUFBQztvQkFFekQsSUFBSSxDQUFDQyxPQUFPLEVBQUU7d0JBQ1osSUFBTUUsUUFBUSxHQUFHckIsaUNBQWlDLENBQUNzQixXQUFXLEVBQUUsRUFDMURDLGdCQUFnQixHQUFHZCxVQUFVLENBQUNlLFFBQVEsRUFBRSxBQUFDO3dCQUUvQyxNQUFNLElBQUlDLEtBQUssQ0FBQyxBQUFDLE9BQUssQ0FBb0VKLE1BQVEsQ0FBMUVFLGdCQUFnQixFQUFDLGlEQUErQyxDQUFXLENBQUEsTUFBMEgsQ0FBbklGLFFBQVEsRUFBQyw0SEFBMEgsQ0FBQyxDQUFDLENBQUM7b0JBQ2xPLENBQUM7b0JBRUQsSUFBTUssV0FBVyxHQUFHWCxLQUFLLENBQUNZLE1BQU0sQUFBQztvQkFFakMsSUFBSUQsV0FBVyxHQUFHLENBQUMsRUFBRTt3QkFDbkIsSUFBTUUsU0FBUyxHQUFHQyxJQUFBQSxNQUFJLEtBQUEsRUFBQ2QsS0FBSyxDQUFDLEFBQUM7d0JBRTlCQSxLQUFLLEdBQUdhLFNBQVMsQ0FBQyxDQUFFLEdBQUc7d0JBRXZCYixLQUFLLEdBQUdlLElBQUFBLE1BQVUsV0FBQSxFQUFDZixLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7d0JBRS9CTixVQUFVLEdBQUcsSUFBSXNCLGFBQVUsV0FBQSxDQUFDaEIsS0FBSyxDQUFDLENBQUM7d0JBRW5DUixXQUFXLENBQUNNLElBQUksQ0FBQ0osVUFBVSxDQUFDLENBQUM7b0JBQy9CLENBQUM7b0JBRUQsT0FBT0YsV0FBVyxDQUFDO2dCQUNyQixDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7Z0JBRVAsSUFBTXlCLGlCQUFpQixHQUFHekIsV0FBVyxDQUFDb0IsTUFBTSxBQUFDO2dCQUU3QyxJQUFJSyxpQkFBaUIsS0FBSyxDQUFDLEVBQUU7b0JBQzNCLElBQU1DLFdBQVcsR0FBRyxJQUFJeEMsV0FBVyxFQUFFLEVBQy9Cc0IsTUFBSyxHQUFHO3dCQUNOa0IsV0FBVztxQkFDWixFQUNEeEIsV0FBVSxHQUFHLElBQUlzQixhQUFVLFdBQUEsQ0FBQ2hCLE1BQUssQ0FBQyxBQUFDO29CQUV6Q1IsV0FBVyxDQUFDTSxJQUFJLENBQUNKLFdBQVUsQ0FBQyxDQUFDO2dCQUMvQixDQUFDO2dCQUVELElBQU1ZLFFBQVEsR0FBR3JCLGlDQUFpQyxDQUFDc0IsV0FBVyxFQUFFLEVBQzFEWSwwQkFBMEIsR0FBR0MsSUFBQUEsU0FBOEQsK0RBQUEsRUFBQ2QsUUFBUSxFQUFFeEIscUJBQXFCLENBQUMsRUFDNUh1QyxJQUFJLEdBQUdGLDBCQUEwQixFQUNqQ0csU0FBUyxHQUFHLEtBQUssRUFDakJDLGVBQWUsR0FBR0MsV0FBc0IsUUFBQSxFQUN4Q0Msc0JBQXNCLEdBQUcsSUFqRmRoRCxzQkFBc0IsQ0FpRm1CNEMsSUFBSSxFQUFFQyxTQUFTLEVBQUU5QixXQUFXLEVBQUUrQixlQUFlLENBQUMsQUFBQztnQkFFekcsT0FBT0Usc0JBQXNCLENBQUM7WUFDaEMsQ0FBQzs7O1dBcEZrQmhELHNCQUFzQjtDQXFGMUMsQ0FyRm1EaUQsYUFBSSxLQUFBLENBcUZ2RCJ9