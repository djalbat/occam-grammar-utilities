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
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated/indirectly"));
var _indirectly1 = /*#__PURE__*/ _interopRequireDefault(require("../../recursiveDefinition/left/indirectly"));
var _part = require("../../utilities/part");
var _parts = require("../../utilities/parts");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
var EpsilonPart = _occamParsers.Parts.EpsilonPart, first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail, find = _necessary.arrayUtilities.find;
var IndirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(IndirectlyRepeatedRule, Rule);
    var _super = _createSuper(IndirectlyRepeatedRule);
    function IndirectlyRepeatedRule() {
        _classCallCheck(this, IndirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(IndirectlyRepeatedRule, null, [
        {
            key: "fromRuleAndLeftRecursiveRuleName",
            value: function fromRuleAndLeftRecursiveRuleName(rule, leftRecursiveRuleName) {
                var definitions = rule.getDefinitions();
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName), firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, parts = indirectlyLeftRecursiveDefinition.getParts(), firstPart = first(parts), previousFirstPart = firstPart; ///
                definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var parts = indirectlyLeftRecursiveDefinition.getParts();
                    var firstPart = first(parts), matches = (0, _part.matchParts)(firstPart, previousFirstPart);
                    if (!matches) {
                        var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), definition = indirectlyLeftRecursiveDefinition, definitionString = definition.asString();
                        throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule does not match one of its sibling indirectly left recursive definitions and therefore the rule cannot be rewritten."));
                    }
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        var definition1 = new _occamParsers.Definition(parts);
                        definitions.push(definition1);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts1 = [
                        epsilonPart
                    ], definition = new _occamParsers.Definition(parts1);
                    definitions.push(definition);
                }
                var ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName)(ruleName, leftRecursiveRuleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _indirectly.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamParsers.Rule);
function findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName) {
    var ruleName = leftRecursiveRuleName, indirectlyLeftRecursiveDefinitions = find(definitions, function(definition) {
        var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly1.default);
        if (definitionIndirectlyLeftRecursiveDefinition) {
            var indirectlyLeftRecursiveDefinition = definition, _$leftRecursiveRuleName = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleName();
            if (ruleName === _$leftRecursiveRuleName) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgSW5kaXJlY3RseVJlcGVhdGVkTm9kZSBmcm9tIFwiLi4vLi4vbm9kZS9yZXBlYXRlZC9pbmRpcmVjdGx5XCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9yZWN1cnNpdmVEZWZpbml0aW9uL2xlZnQvaW5kaXJlY3RseVwiO1xuXG5pbXBvcnQgeyBtYXRjaFBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyBjbG9uZVBhcnRzIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9wYXJ0c1wiO1xuaW1wb3J0IHsgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgRXBzaWxvblBhcnQgfSA9IFBhcnRzLFxuICAgICAgeyBmaXJzdCwgdGFpbCwgZmluZCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGlyZWN0bHlSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21SdWxlQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0KGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICBwcmV2aW91c0ZpcnN0UGFydCA9IGZpcnN0UGFydDsgIC8vL1xuXG4gICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnJlZHVjZSgoZGVmaW5pdGlvbnMsIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgbGV0IHBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIG1hdGNoZXMgPSBtYXRjaFBhcnRzKGZpcnN0UGFydCwgcHJldmlvdXNGaXJzdFBhcnQpO1xuXG4gICAgICBpZiAoIW1hdGNoZXMpIHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgICAgZGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgICAgIGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGRvZXMgbm90IG1hdGNoIG9uZSBvZiBpdHMgc2libGluZyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlIHJ1bGUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCAvLy9cbiAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmQoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLCAgLy8vXG4gICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICAgIGlmIChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImZpbmQiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwicHJldmlvdXNGaXJzdFBhcnQiLCJyZWR1Y2UiLCJtYXRjaGVzIiwibWF0Y2hQYXJ0cyIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsInBhcnRzVGFpbCIsImNsb25lUGFydHMiLCJEZWZpbml0aW9uIiwicHVzaCIsImRlZmluaXRpb25zTGVuZ3RoIiwiZXBzaWxvblBhcnQiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIkluZGlyZWN0bHlSZXBlYXRlZE5vZGUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIiwiUnVsZSIsImRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWVRQSxzQkFBc0I7Ozt5QkFiWixXQUFXOzRCQUNGLGVBQWU7K0RBRXBCLGdDQUFnQztnRUFDckIsMkNBQTJDO29CQUU5RCxzQkFBc0I7cUJBQ3RCLHVCQUF1Qjt3QkFDNkIsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RyxJQUFNLEFBQUVDLFdBQVcsR0FBS0MsYUFBSyxNQUFBLENBQXJCRCxXQUFXLEFBQVUsRUFDckJFLEtBQUssR0FBaUJDLFVBQWMsZUFBQSxDQUFwQ0QsS0FBSyxFQUFFRSxJQUFJLEdBQVdELFVBQWMsZUFBQSxDQUE3QkMsSUFBSSxFQUFFQyxJQUFJLEdBQUtGLFVBQWMsZUFBQSxDQUF2QkUsSUFBSSxBQUFvQjtBQUU5QixJQUFBLEFBQU1OLHNCQUFzQixpQkFpRXhDLEFBakVZOzs7YUFBTUEsc0JBQXNCOzs7Ozs7WUFDbENPLEdBQWdDLEVBQWhDQSxrQ0FBZ0M7bUJBQXZD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