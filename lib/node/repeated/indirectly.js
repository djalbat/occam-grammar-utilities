"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return IndirectlyRepeatedNode;
    }
});
var _necessary = require("necessary");
var _occamparsers = require("occam-parsers");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
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
function _type_of(obj) {
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
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
var first = _necessary.arrayUtilities.first;
var IndirectlyRepeatedNode = /*#__PURE__*/ function(NonTerminalNode) {
    _inherits(IndirectlyRepeatedNode, NonTerminalNode);
    var _super = _create_super(IndirectlyRepeatedNode);
    function IndirectlyRepeatedNode() {
        _class_call_check(this, IndirectlyRepeatedNode);
        return _super.apply(this, arguments);
    }
    _create_class(IndirectlyRepeatedNode, [
        {
            key: "isNullary",
            value: function isNullary() {
                var nullary = false;
                var childNodes = this.getChildNodes(), childNodesLength = childNodes.length;
                if (childNodesLength === 1) {
                    var firstChildNode = first(childNodes), firstChildNodeEpsilonNode = _instanceof(firstChildNode, _occamparsers.EpsilonNode);
                    if (firstChildNodeEpsilonNode) {
                        nullary = true;
                    }
                }
                return nullary;
            }
        }
    ], [
        {
            key: "fromRuleNameAndChildNodes",
            value: function fromRuleNameAndChildNodes(ruleName, childNodes) {
                return _occamparsers.NonTerminalNode.fromRuleNameAndChildNodes(IndirectlyRepeatedNode, ruleName, childNodes);
            }
        },
        {
            key: "fromRuleNameChildNodesAndPrecedence",
            value: function fromRuleNameChildNodesAndPrecedence(ruleName, childNodes, precedence) {
                return _occamparsers.NonTerminalNode.fromRuleNameChildNodesAndPrecedence(IndirectlyRepeatedNode, ruleName, childNodes, precedence);
            }
        }
    ]);
    return IndirectlyRepeatedNode;
}(_occamparsers.NonTerminalNode);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9ub2RlL3JlcGVhdGVkL2luZGlyZWN0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgRXBzaWxvbk5vZGUsIE5vblRlcm1pbmFsTm9kZSB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIGV4dGVuZHMgTm9uVGVybWluYWxOb2RlIHtcbiAgaXNOdWxsYXJ5KCkge1xuICAgIGxldCBudWxsYXJ5ID0gZmFsc2U7XG5cbiAgICBjb25zdCBjaGlsZE5vZGVzID0gdGhpcy5nZXRDaGlsZE5vZGVzKCksXG4gICAgICAgICAgY2hpbGROb2Rlc0xlbmd0aCA9IGNoaWxkTm9kZXMubGVuZ3RoO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0Q2hpbGROb2RlID0gZmlyc3QoY2hpbGROb2RlcyksXG4gICAgICAgICAgICBmaXJzdENoaWxkTm9kZUVwc2lsb25Ob2RlID0gKGZpcnN0Q2hpbGROb2RlIGluc3RhbmNlb2YgRXBzaWxvbk5vZGUpO1xuXG4gICAgICBpZiAoZmlyc3RDaGlsZE5vZGVFcHNpbG9uTm9kZSkge1xuICAgICAgICBudWxsYXJ5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbnVsbGFyeTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmRDaGlsZE5vZGVzKHJ1bGVOYW1lLCBjaGlsZE5vZGVzKSB7IHJldHVybiBOb25UZXJtaW5hbE5vZGUuZnJvbVJ1bGVOYW1lQW5kQ2hpbGROb2RlcyhJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCBydWxlTmFtZSwgY2hpbGROb2Rlcyk7IH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lQ2hpbGROb2Rlc0FuZFByZWNlZGVuY2UocnVsZU5hbWUsIGNoaWxkTm9kZXMsIHByZWNlZGVuY2UpIHsgcmV0dXJuIE5vblRlcm1pbmFsTm9kZS5mcm9tUnVsZU5hbWVDaGlsZE5vZGVzQW5kUHJlY2VkZW5jZShJbmRpcmVjdGx5UmVwZWF0ZWROb2RlLCBydWxlTmFtZSwgY2hpbGROb2RlcywgcHJlY2VkZW5jZSk7IH1cbn1cbiJdLCJuYW1lcyI6WyJJbmRpcmVjdGx5UmVwZWF0ZWROb2RlIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsImlzTnVsbGFyeSIsIm51bGxhcnkiLCJjaGlsZE5vZGVzIiwiZ2V0Q2hpbGROb2RlcyIsImNoaWxkTm9kZXNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdENoaWxkTm9kZSIsImZpcnN0Q2hpbGROb2RlRXBzaWxvbk5vZGUiLCJFcHNpbG9uTm9kZSIsImZyb21SdWxlTmFtZUFuZENoaWxkTm9kZXMiLCJydWxlTmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsImZyb21SdWxlTmFtZUNoaWxkTm9kZXNBbmRQcmVjZWRlbmNlIiwicHJlY2VkZW5jZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFPcUJBOzs7eUJBTFU7NEJBQ2M7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU3QyxJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVPLElBQUEsQUFBTUQsdUNBQU47Y0FBTUE7K0JBQUFBO2FBQUFBO2dDQUFBQTs7O2tCQUFBQTs7WUFDbkJHLEtBQUFBO21CQUFBQSxTQUFBQTtnQkFDRSxJQUFJQyxVQUFVO2dCQUVkLElBQU1DLGFBQWEsSUFBSSxDQUFDQyxhQUFhLElBQy9CQyxtQkFBbUJGLFdBQVdHLE1BQU07Z0JBRTFDLElBQUlELHFCQUFxQixHQUFHO29CQUMxQixJQUFNRSxpQkFBaUJSLE1BQU1JLGFBQ3ZCSyw0QkFBNkJELEFBQWMsWUFBZEEsZ0JBQTBCRSx5QkFBVztvQkFFeEUsSUFBSUQsMkJBQTJCO3dCQUM3Qk4sVUFBVTtvQkFDWjtnQkFDRjtnQkFFQSxPQUFPQTtZQUNUOzs7O1lBRU9RLEtBQUFBO21CQUFQLFNBQU9BLDBCQUEwQkMsUUFBUSxFQUFFUixVQUFVO2dCQUFJLE9BQU9TLDZCQUFlLENBQUNGLHlCQUF5QixDQW5CdEZaLHdCQW1CK0dhLFVBQVVSO1lBQWE7OztZQUVsSlUsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DRixRQUFRLEVBQUVSLFVBQVUsRUFBRVcsVUFBVTtnQkFBSSxPQUFPRiw2QkFBZSxDQUFDQyxtQ0FBbUMsQ0FyQnRIZix3QkFxQitJYSxVQUFVUixZQUFZVztZQUFhOzs7V0FyQmxMaEI7RUFBK0JjLDZCQUFlIn0=