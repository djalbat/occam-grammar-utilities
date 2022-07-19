"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return DirectlyRepeatedRule;
    }
});
var _necessary = require("necessary");
var _occamParsers = require("occam-parsers");
var _repeated = /*#__PURE__*/ _interopRequireDefault(require("../../node/repeated"));
var _recursive = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive"));
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../../definition/recursive/left/directly"));
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
var find = _necessary.arrayUtilities.find, tail = _necessary.arrayUtilities.tail;
var DirectlyRepeatedRule = /*#__PURE__*/ function(Rule) {
    _inherits(DirectlyRepeatedRule, Rule);
    var _super = _createSuper(DirectlyRepeatedRule);
    function DirectlyRepeatedRule() {
        _classCallCheck(this, DirectlyRepeatedRule);
        return _super.apply(this, arguments);
    }
    _createClass(DirectlyRepeatedRule, null, [
        {
            key: "fromRule",
            value: function fromRule(rule) {
                var directlyRepeatedRule = null;
                var definitions = rule.getDefinitions();
                definitions = find(definitions, function(definition) {
                    var definitionDirectlyLeftRecursiveDefinition = _instanceof(definition, _directly.default);
                    if (definitionDirectlyLeftRecursiveDefinition) {
                        return true;
                    }
                });
                var definitionsLength = definitions.length;
                if (definitionsLength > 0) {
                    var ruleName = rule.getName();
                    definitions = definitions.map(function(definition) {
                        var parts = definition.getParts();
                        var partsTail = tail(parts);
                        parts = partsTail; ///
                        definition = _recursive.default.fromRuleNameAndParts(ruleName, parts) || new _occamParsers.Definition(parts);
                        return definition;
                    });
                    var repeatedRuleName = (0, _ruleName.repeatedRuleNameFromRuleName)(ruleName), name = repeatedRuleName, ambiguous = false, NonTerminalNode = _repeated.default; ///
                    directlyRepeatedRule = new DirectlyRepeatedRule(name, ambiguous, definitions, NonTerminalNode);
                }
                return directlyRepeatedRule;
            }
        }
    ]);
    return DirectlyRepeatedRule;
}(_occamParsers.Rule);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ydWxlL3JlcGVhdGVkL2RpcmVjdGx5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcbmltcG9ydCB7IFJ1bGUsIERlZmluaXRpb24gfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5pbXBvcnQgUmVwZWF0ZWROb2RlIGZyb20gXCIuLi8uLi9ub2RlL3JlcGVhdGVkXCI7XG5pbXBvcnQgUmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZWN1cnNpdmVcIjtcbmltcG9ydCBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2RpcmVjdGx5XCI7XG5cbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVOYW1lXCI7XG5cbmNvbnN0IHsgZmluZCwgdGFpbCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpcmVjdGx5UmVwZWF0ZWRSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tUnVsZShydWxlKSB7XG4gICAgbGV0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlID0gbnVsbDtcblxuICAgIGxldCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGRlZmluaXRpb25zID0gZmluZChkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHsgLy8vXG4gICAgICBjb25zdCBkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChkZWZpbml0aW9uIGluc3RhbmNlb2YgRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChkZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoO1xuXG4gICAgaWYgKGRlZmluaXRpb25zTGVuZ3RoID4gMCkge1xuICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlLmdldE5hbWUoKTtcblxuICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5tYXAoKGRlZmluaXRpb24pID0+IHtcbiAgICAgICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgICAgIGNvbnN0IHBhcnRzVGFpbCA9IHRhaWwocGFydHMpO1xuXG4gICAgICAgIHBhcnRzID0gcGFydHNUYWlsOyAgLy8vXG5cbiAgICAgICAgZGVmaW5pdGlvbiA9IFJlY3Vyc2l2ZURlZmluaXRpb24uZnJvbVJ1bGVOYW1lQW5kUGFydHMocnVsZU5hbWUsIHBhcnRzKSB8fFxuICAgICAgICAgICAgICAgICAgICAgIG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgICAgICByZXR1cm4gZGVmaW5pdGlvbjtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCByZXBlYXRlZFJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgICBuYW1lID0gcmVwZWF0ZWRSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgICBhbWJpZ3VvdXMgPSBmYWxzZSxcbiAgICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IFJlcGVhdGVkTm9kZTsgIC8vL1xuXG4gICAgICBkaXJlY3RseVJlcGVhdGVkUnVsZSA9IG5ldyBEaXJlY3RseVJlcGVhdGVkUnVsZShuYW1lLCBhbWJpZ3VvdXMsIGRlZmluaXRpb25zLCBOb25UZXJtaW5hbE5vZGUpO1xuICAgIH1cblxuICAgIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZTtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJEaXJlY3RseVJlcGVhdGVkUnVsZSIsImZpbmQiLCJhcnJheVV0aWxpdGllcyIsInRhaWwiLCJmcm9tUnVsZSIsInJ1bGUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJydWxlTmFtZSIsImdldE5hbWUiLCJtYXAiLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNUYWlsIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SdWxlTmFtZUFuZFBhcnRzIiwiRGVmaW5pdGlvbiIsInJlcGVhdGVkUnVsZU5hbWUiLCJyZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwibmFtZSIsImFtYmlndW91cyIsIk5vblRlcm1pbmFsTm9kZSIsIlJlcGVhdGVkTm9kZSIsIlJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7OztlQWFRQSxvQkFBb0I7Ozt5QkFYVixXQUFXOzRCQUNULGVBQWU7NkRBRXZCLHFCQUFxQjs4REFDZCw0QkFBNEI7NkRBQ2hCLDBDQUEwQzt3QkFFekMsMEJBQTBCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV2RSxJQUFRQyxJQUFJLEdBQVdDLFVBQWMsZUFBQSxDQUE3QkQsSUFBSSxFQUFFRSxJQUFJLEdBQUtELFVBQWMsZUFBQSxDQUF2QkMsSUFBSSxBQUFvQjtBQUV2QixJQUFBLEFBQU1ILG9CQUFvQixpQkFBMUI7OzthQUFNQSxvQkFBb0I7Ozs7OztZQUNoQ0ksR0FBUSxFQUFSQSxVQUFRO21CQUFmLFNBQU9BLFFBQVEsQ0FBQ0MsSUFBSSxFQUFFO2dCQUNwQixJQUFJQyxvQkFBb0IsR0FBRyxJQUFJLEFBQUM7Z0JBRWhDLElBQUlDLFdBQVcsR0FBR0YsSUFBSSxDQUFDRyxjQUFjLEVBQUUsQUFBQztnQkFFeENELFdBQVcsR0FBR04sSUFBSSxDQUFDTSxXQUFXLEVBQUUsU0FBQ0UsVUFBVSxFQUFLO29CQUM5QyxJQUFNQyx5Q0FBeUMsR0FBSUQsQUFBVSxXQUFZRSxDQUF0QkYsVUFBVSxFQUFZRSxTQUErQixRQUFBLENBQUEsQUFBQyxBQUFDO29CQUUxRyxJQUFJRCx5Q0FBeUMsRUFBRTt3QkFDN0MsT0FBTyxJQUFJLENBQUM7cUJBQ2I7aUJBQ0YsQ0FBQyxDQUFDO2dCQUVILElBQU1FLGlCQUFpQixHQUFHTCxXQUFXLENBQUNNLE1BQU0sQUFBQztnQkFFN0MsSUFBSUQsaUJBQWlCLEdBQUcsQ0FBQyxFQUFFO29CQUN6QixJQUFNRSxRQUFRLEdBQUdULElBQUksQ0FBQ1UsT0FBTyxFQUFFLEFBQUM7b0JBRWhDUixXQUFXLEdBQUdBLFdBQVcsQ0FBQ1MsR0FBRyxDQUFDLFNBQUNQLFVBQVUsRUFBSzt3QkFDNUMsSUFBSVEsS0FBSyxHQUFHUixVQUFVLENBQUNTLFFBQVEsRUFBRSxBQUFDO3dCQUVsQyxJQUFNQyxTQUFTLEdBQUdoQixJQUFJLENBQUNjLEtBQUssQ0FBQyxBQUFDO3dCQUU5QkEsS0FBSyxHQUFHRSxTQUFTLENBQUMsQ0FBRSxHQUFHO3dCQUV2QlYsVUFBVSxHQUFHVyxVQUFtQixRQUFBLENBQUNDLG9CQUFvQixDQUFDUCxRQUFRLEVBQUVHLEtBQUssQ0FBQyxJQUN4RCxJQUFJSyxhQUFVLFdBQUEsQ0FBQ0wsS0FBSyxDQUFDLENBQUM7d0JBRXBDLE9BQU9SLFVBQVUsQ0FBQztxQkFDbkIsQ0FBQyxDQUFDO29CQUVILElBQU1jLGdCQUFnQixHQUFHQyxJQUFBQSxTQUE0Qiw2QkFBQSxFQUFDVixRQUFRLENBQUMsRUFDekRXLElBQUksR0FBR0YsZ0JBQWdCLEVBQ3ZCRyxTQUFTLEdBQUcsS0FBSyxFQUNqQkMsZUFBZSxHQUFHQyxTQUFZLFFBQUEsQUFBQyxFQUFFLEdBQUc7b0JBRTFDdEIsb0JBQW9CLEdBQUcsSUFBSU4sb0JBQW9CLENBQUN5QixJQUFJLEVBQUVDLFNBQVMsRUFBRW5CLFdBQVcsRUFBRW9CLGVBQWUsQ0FBQyxDQUFDO2lCQUNoRztnQkFFRCxPQUFPckIsb0JBQW9CLENBQUM7YUFDN0I7Ozs7Q0FDRixDQTFDaUR1QixhQUFJLEtBQUEsQ0EwQ3JEIn0=