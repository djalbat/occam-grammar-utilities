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
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/indirectly"));
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
                var indirectlyLeftRecursiveDefinitions = findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName);
                definitions = indirectlyLeftRecursiveDefinitions.reduce(function(definitions, indirectlyLeftRecursiveDefinition) {
                    var parts = indirectlyLeftRecursiveDefinition.getParts();
                    var partsLength = parts.length;
                    if (partsLength > 1) {
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        parts = (0, _parts.cloneParts)(parts); ///
                        var definition = new _occamParsers.Definition(parts);
                        definitions.push(definition);
                    }
                    return definitions;
                }, []);
                var definitionsLength = definitions.length;
                if (definitionsLength === 0) {
                    var epsilonPart = new EpsilonPart(), parts = [
                        epsilonPart
                    ], definition = new _occamParsers.Definition(parts);
                    definitions.push(definition);
                }
                var firstIndirectlyLeftRecursiveDefinition = first(indirectlyLeftRecursiveDefinitions), indirectlyLeftRecursiveDefinition = firstIndirectlyLeftRecursiveDefinition, ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), indirectlyRepeatedRuleName = (0, _ruleName.indirectlyRepeatedRuleNameFromRuleName)(ruleName), name = indirectlyRepeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default, indirectlyRepeatedRule = new IndirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return indirectlyRepeatedRule;
            }
        }
    ]);
    return IndirectlyRepeatedRule;
}(_occamParsers.Rule);
function findIndirectlyLeftRecursiveDefinitions(definitions, leftRecursiveRuleName) {
    var indirectlyLeftRecursiveDefinitions = find(definitions, function(definition) {
        var definitionIndirectlyLeftRecursiveDefinition = _instanceof(definition, _indirectly.default);
        if (definitionIndirectlyLeftRecursiveDefinition) {
            var indirectlyLeftRecursiveDefinition = definition, leftRecursiveRuleNames = indirectlyLeftRecursiveDefinition.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), ruleName = firstLeftRecursiveRuleName; ///
            if (ruleName === leftRecursiveRuleName) {
                return true;
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgUnVsZSwgUGFydHMsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkXCI7XG5pbXBvcnQgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcGFydHNcIjtcbmltcG9ydCB7IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uLy4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IEVwc2lsb25QYXJ0IH0gPSBQYXJ0cyxcbiAgICAgIHsgZmlyc3QsIHRhaWwsIGZpbmQgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgICBsZXQgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMoZGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICBkZWZpbml0aW9ucyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucmVkdWNlKChkZWZpbml0aW9ucywgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBsZXQgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgICAgY29uc3QgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgICAgcGFydHMgPSBwYXJ0c1RhaWw7ICAvLy9cblxuICAgICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZGVmaW5pdGlvbnM7XG4gICAgfSwgW10pO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbnNMZW5ndGggPSBkZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDApIHtcbiAgICAgIGNvbnN0IGVwc2lsb25QYXJ0ID0gbmV3IEVwc2lsb25QYXJ0KCksXG4gICAgICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAgICAgZXBzaWxvblBhcnRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpO1xuXG4gICAgICBkZWZpbml0aW9ucy5wdXNoKGRlZmluaXRpb24pO1xuICAgIH1cblxuICAgIGNvbnN0IGZpcnN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3QoaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgIHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgaW5kaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBJbmRpcmVjdGx5UmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhkZWZpbml0aW9ucywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBmaW5kKGRlZmluaXRpb25zLCAoZGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IGRlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAoZGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAoZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGZpcnN0KGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpLFxuICAgICAgICAgICAgcnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZTsgLy8vXG5cbiAgICAgIGlmIChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiSW5kaXJlY3RseVJlcGVhdGVkUnVsZSIsIkVwc2lsb25QYXJ0IiwiUGFydHMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImZpbmQiLCJmcm9tUnVsZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVkdWNlIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwiY2xvbmVQYXJ0cyIsImRlZmluaXRpb24iLCJEZWZpbml0aW9uIiwicHVzaCIsImRlZmluaXRpb25zTGVuZ3RoIiwiZXBzaWxvblBhcnQiLCJmaXJzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlcGVhdGVkTm9kZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGUiLCJSdWxlIiwiZGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWNRQSxzQkFBc0I7Ozt5QkFaWixXQUFXOzRCQUNGLGVBQWU7NkRBRTlCLHFCQUFxQjsrREFDQSw0Q0FBNEM7cUJBRS9ELHVCQUF1Qjt3QkFDSywwQkFBMEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQU0sQUFBRUMsV0FBVyxHQUFLQyxhQUFLLE1BQUEsQ0FBckJELFdBQVcsQUFBVSxFQUNyQkUsS0FBSyxHQUFpQkMsVUFBYyxlQUFBLENBQXBDRCxLQUFLLEVBQUVFLElBQUksR0FBV0QsVUFBYyxlQUFBLENBQTdCQyxJQUFJLEVBQUVDLElBQUksR0FBS0YsVUFBYyxlQUFBLENBQXZCRSxJQUFJLEFBQW9CO0FBRTlCLElBQUEsQUFBTU4sc0JBQXNCLGlCQW1EeEMsQUFuRFk7OzthQUFNQSxzQkFBc0I7Ozs7OztZQUNsQ08sR0FBZ0MsRUFBaENBLGtDQUFnQzttQkFBdkMsU0FBT0EsZ0NBQWdDLENBQUNDLElBQUksRUFBRUMscUJBQXFC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