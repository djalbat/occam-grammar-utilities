"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return RepeatedRule;
    },
    enumerable: true
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _repeated = _interopRequireDefault(require("../node/repeated"));
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi9ub2RlL3JlcGVhdGVkXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyByZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlTmFtZVwiO1xuXG5jb25zdCB7IHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZXBlYXRlZFJ1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgc3RhdGljIGZyb21JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlcGVhdGVkUnVsZSA9IG51bGw7XG5cbiAgICBsZXQgcGFydHMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIGNvbnN0IHBhcnRzTGVuZ3RoID0gcGFydHMubGVuZ3RoO1xuXG4gICAgaWYgKHBhcnRzTGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcGFydHNUYWlsID0gdGFpbChwYXJ0cyk7XG5cbiAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgIHBhcnRzID0gY2xvbmVQYXJ0cyhwYXJ0cyk7ICAvLy9cblxuICAgICAgY29uc3QgZGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgICAgYW1iaWd1b3VzID0gZmFsc2UsXG4gICAgICAgICAgICBkZWZpbml0aW9ucyA9IFtcbiAgICAgICAgICAgICAgZGVmaW5pdGlvblxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZTsgIC8vL1xuXG4gICAgICByZXBlYXRlZFJ1bGUgPSBuZXcgUmVwZWF0ZWRSdWxlKG5hbWUsIGFtYmlndW91cywgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZXBlYXRlZFJ1bGUiLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwicmVwZWF0ZWRSdWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNUYWlsIiwiY2xvbmVQYXJ0cyIsImRlZmluaXRpb24iLCJEZWZpbml0aW9uIiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsImRlZmluaXRpb25zIiwiTm9uVGVybWluYWxOb2RlIiwiUmVwZWF0ZWROb2RlIiwiUnVsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFZUUEsWUFBWTs7Ozt5QkFWRixXQUFXOzRCQUNULGVBQWU7K0NBRXZCLGtCQUFrQjtxQkFFaEIsb0JBQW9CO3dCQUNGLHVCQUF1Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVwRSxJQUFNLEFBQUVDLElBQUksR0FBS0MsVUFBYyxlQUFBLENBQXZCRCxJQUFJLEFBQW1CLEFBQUM7QUFFakIsSUFBQSxBQUFNRCxZQUFZLGlCQUFsQjs7O2FBQU1BLFlBQVk7Ozs7OztZQUN4QkcsR0FBcUMsRUFBckNBLHVDQUFxQzttQkFBNUMsU0FBT0EscUNBQXFDLENBQUNDLGlDQUFpQyxFQUFFO2dCQUM5RSxJQUFJQyxZQUFZLEdBQUcsSUFBSSxBQUFDO2dCQUV4QixJQUFJQyxLQUFLLEdBQUdGLGlDQUFpQyxDQUFDRyxRQUFRLEVBQUUsQUFBQztnQkFFekQsSUFBTUMsV0FBVyxHQUFHRixLQUFLLENBQUNHLE1BQU0sQUFBQztnQkFFakMsSUFBSUQsV0FBVyxHQUFHLENBQUMsRUFBRTtvQkFDbkIsSUFBTUUsU0FBUyxHQUFHVCxJQUFJLENBQUNLLEtBQUssQ0FBQyxBQUFDO29CQUU5QkEsS0FBSyxHQUFHSSxTQUFTLENBQUMsQ0FBRSxHQUFHO29CQUV2QkosS0FBSyxHQUFHSyxJQUFBQSxNQUFVLFdBQUEsRUFBQ0wsS0FBSyxDQUFDLENBQUMsQ0FBRSxHQUFHO29CQUUvQixJQUFNTSxVQUFVLEdBQUcsSUFBSUMsYUFBVSxXQUFBLENBQUNQLEtBQUssQ0FBQyxFQUNsQ1EsUUFBUSxHQUFHVixpQ0FBaUMsQ0FBQ1csV0FBVyxFQUFFLEVBQzFEQyxnQkFBZ0IsR0FBR0MsSUFBQUEsU0FBNEIsNkJBQUEsRUFBQ0gsUUFBUSxDQUFDLEVBQ3pESSxJQUFJLEdBQUdGLGdCQUFnQixFQUN2QkcsU0FBUyxHQUFHLEtBQUssRUFDakJDLFdBQVcsR0FBRzt3QkFDWlIsVUFBVTtxQkFDWCxFQUNEUyxlQUFlLEdBQUdDLFNBQVksUUFBQSxBQUFDLEVBQUUsR0FBRztvQkFFMUNqQixZQUFZLEdBQUcsSUFBSUwsWUFBWSxDQUFDa0IsSUFBSSxFQUFFQyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsZUFBZSxDQUFDLENBQUM7aUJBQ2hGO2dCQUVELE9BQU9oQixZQUFZLENBQUM7YUFDckI7Ozs7Q0FDRixDQTlCeUNrQixhQUFJLEtBQUEsQ0E4QjdDIn0=