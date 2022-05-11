"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parts = require("../utilities/parts");
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
function _getPrototypeOf(o1) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o1);
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
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
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
var RepeatedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RepeatedDefinition, Definition);
    var _super = _createSuper(RepeatedDefinition);
    function RepeatedDefinition() {
        _classCallCheck(this, RepeatedDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(RepeatedDefinition, null, [
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts(), repeatedDefinition = repeatedDefinitionFromParts(parts);
                return repeatedDefinition;
            }
        },
        {
            key: "fromImplicitlyLeftRecursiveDefinition",
            value: function fromImplicitlyLeftRecursiveDefinition(implicitlyLeftRecursiveDefinition) {
                var parts = implicitlyLeftRecursiveDefinition.getParts(), repeatedDefinition = repeatedDefinitionFromParts(parts);
                return repeatedDefinition;
            }
        }
    ]);
    return RepeatedDefinition;
}(_occamParsers.Definition);
function repeatedDefinitionFromParts(parts) {
    parts = (0, _parts).cloneParts(parts); ///
    parts.shift(); ///
    var repeatedDefinition = new RepeatedDefinition(parts);
    return repeatedDefinition;
}
exports.default = RepeatedDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcmVwZWF0ZWREZWZpbml0aW9uID0gcmVwZWF0ZWREZWZpbml0aW9uRnJvbVBhcnRzKHBhcnRzKTtcblxuICAgIHJldHVybiByZXBlYXRlZERlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbUltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBwYXJ0cyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IHJlcGVhdGVkRGVmaW5pdGlvbkZyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlcGVhdGVkRGVmaW5pdGlvbkZyb21QYXJ0cyhwYXJ0cykge1xuICBwYXJ0cyA9IGNsb25lUGFydHMocGFydHMpOyAgLy8vXG5cbiAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gIGNvbnN0IHJlcGVhdGVkRGVmaW5pdGlvbiA9IG5ldyBSZXBlYXRlZERlZmluaXRpb24ocGFydHMpO1xuXG4gIHJldHVybiByZXBlYXRlZERlZmluaXRpb247XG59Il0sIm5hbWVzIjpbIlJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsInBhcnRzIiwiZ2V0UGFydHMiLCJyZXBlYXRlZERlZmluaXRpb24iLCJyZXBlYXRlZERlZmluaXRpb25Gcm9tUGFydHMiLCJmcm9tSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGVmaW5pdGlvbiIsImNsb25lUGFydHMiLCJzaGlmdCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVjLElBQUEsYUFBZSxXQUFmLGVBQWUsQ0FBQTtBQUVmLElBQUEsTUFBb0IsV0FBcEIsb0JBQW9CLENBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWhDLElBQUEsQUFBTUEsa0JBQWtCLGlCQWdCcEMsQUFoQlk7OzthQUFNQSxrQkFBa0I7Ozs7OztZQUM5QkMsR0FBYyxFQUFkQSxnQkFBYzttQkFBckIsU0FBT0EsY0FBYyxDQUFDQyxVQUFVLEVBQUU7Z0JBQ2hDLElBQU1DLEtBQUssR0FBR0QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsRUFDN0JDLGtCQUFrQixHQUFHQywyQkFBMkIsQ0FBQ0gsS0FBSyxDQUFDLEFBQUM7Z0JBRTlELE9BQU9FLGtCQUFrQixDQUFDO2FBQzNCOzs7WUFFTUUsR0FBcUMsRUFBckNBLHVDQUFxQzttQkFBNUMsU0FBT0EscUNBQXFDLENBQUNDLGlDQUFpQyxFQUFFO2dCQUM5RSxJQUFNTCxLQUFLLEdBQUdLLGlDQUFpQyxDQUFDSixRQUFRLEVBQUUsRUFDcERDLGtCQUFrQixHQUFHQywyQkFBMkIsQ0FBQ0gsS0FBSyxDQUFDLEFBQUM7Z0JBRTlELE9BQU9FLGtCQUFrQixDQUFDO2FBQzNCOzs7O0NBQ0YsQ0FkK0NJLGFBQVUsV0FBQSxDQWN6RDtBQUVELFNBQVNILDJCQUEyQixDQUFDSCxLQUFLLEVBQUU7SUFDMUNBLEtBQUssR0FBR08sQ0FBQUEsR0FBQUEsTUFBVSxBQUFPLENBQUEsV0FBUCxDQUFDUCxLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7SUFFL0JBLEtBQUssQ0FBQ1EsS0FBSyxFQUFFLENBQUMsQ0FBRSxHQUFHO0lBRW5CLElBQU1OLGtCQUFrQixHQUFHLElBQUlMLGtCQUFrQixDQUFDRyxLQUFLLENBQUMsQUFBQztJQUV6RCxPQUFPRSxrQkFBa0IsQ0FBQztDQUMzQjtrQkF4Qm9CTCxrQkFBa0IifQ==