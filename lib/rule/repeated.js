"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RepeatedRule;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../node/repeated"));
var _parts = require("../utilities/parts");
var _ruleName = require("../utilities/ruleName");
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
var tail = _necessary.arrayUtilities.tail;
var RepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(RepeatedRule, Rule);
    var _super = _createSuper(RepeatedRule);
    function RepeatedRule() {
        _classCallCheck(this, RepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(RepeatedRule, null, [
        {
            key: "fromDirectlyLeftRecursiveDefinition",
            value: function fromDirectlyLeftRecursiveDefinition(directlyLeftRecursiveDefinition) {
                var parts = directlyLeftRecursiveDefinition.getParts();
                var partsTail = tail(parts);
                parts = partsTail; ///
                parts = (0, _parts.cloneParts)(parts); ///
                var definition = new _occamParsers.Definition(parts), ruleName = directlyLeftRecursiveDefinition.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, definitions = [
                    definition
                ], NonTerminalNode = _repeated.default, repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                return repeatedRule;
            }
        },
        {
            key: "fromIndirectlyLeftRecursiveDefinition",
            value: function fromIndirectlyLeftRecursiveDefinition(indirectlyLeftRecursiveDefinition) {
                var repeatedRule = null;
                var parts = indirectlyLeftRecursiveDefinition.getParts();
                var partsLength = parts.length;
                if (partsLength > 1) {
                    var partsTail = tail(parts);
                    parts = partsTail; ///
                    parts = (0, _parts.cloneParts)(parts); ///
                    var definition = new _occamParsers.Definition(parts), ruleName = indirectlyLeftRecursiveDefinition.getRuleName(), repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, definitions = [
                        definition
                    ], NonTerminalNode = _repeated.default; ///
                    repeatedRule = new RepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return repeatedRule;
            }
        }
    ]);
    return RepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBsZXQgcGFydHMgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c1RhaWwgPSB0YWlsKHBhcnRzKTtcblxuICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICBjb25zdCBkZWZpbml0aW9uID0gbmV3IERlZmluaXRpb24ocGFydHMpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJlcGVhdGVkUnVsZU5hbWUgPSByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gW1xuICAgICAgICAgICAgZGVmaW5pdGlvblxuICAgICAgICAgIF0sXG4gICAgICAgICAgTm9uVGVybWluYWxOb2RlID0gUmVwZWF0ZWROb2RlLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIGxldCByZXBlYXRlZFJ1bGUgPSBudWxsO1xuXG4gICAgbGV0IHBhcnRzID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJ0c0xlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICBwYXJ0cyA9IHBhcnRzVGFpbDsgIC8vL1xuXG4gICAgICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgICAgIGNvbnN0IGRlZmluaXRpb24gPSBuZXcgRGVmaW5pdGlvbihwYXJ0cyksXG4gICAgICAgICAgICBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgICAgbmFtZSA9IHJlcGVhdGVkUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICAgIGFtYmlndW91cyA9IGZhbHNlLFxuICAgICAgICAgICAgZGVmaW5pdGlvbnMgPSBbXG4gICAgICAgICAgICAgIGRlZmluaXRpb25cbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBSZXBlYXRlZE5vZGU7ICAvLy9cblxuICAgICAgcmVwZWF0ZWRSdWxlID0gbmV3IFJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiByZXBlYXRlZFJ1bGU7XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVwZWF0ZWRSdWxlIiwidGFpbCIsImFycmF5VXRpbGl0aWVzIiwiZnJvbURpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzVGFpbCIsImNsb25lUGFydHMiLCJkZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0UnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsIm5hbWUiLCJhbWJpZ3VvdXMiLCJkZWZpbml0aW9ucyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlcGVhdGVkTm9kZSIsInJlcGVhdGVkUnVsZSIsImZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQVlRQSxZQUFZOzs7eUJBVkYsV0FBVzs0QkFDVCxlQUFlOzZEQUV2QixrQkFBa0I7cUJBRWhCLG9CQUFvQjt3QkFDRix1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