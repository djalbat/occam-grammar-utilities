"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
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
var first = _necessary.arrayUtilities.first;
var UnaryDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(UnaryDefinition, Definition);
    var _super = _createSuper(UnaryDefinition);
    function UnaryDefinition() {
        _classCallCheck(this, UnaryDefinition);
        return _super.apply(this, arguments);
    }
    _createClass(UnaryDefinition, null, [
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts();
                var firstPart = first(parts);
                parts = [
                    firstPart
                ];
                parts = (0, _parts).cloneParts(parts); ///
                var unaryDefinition = new UnaryDefinition(parts);
                return unaryDefinition;
            }
        }
    ]);
    return UnaryDefinition;
}(_occamParsers.Definition);
exports.default = UnaryDefinition;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3VuYXJ5LmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVW5hcnlEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgcGFydHMgPSBbIGZpcnN0UGFydCBdO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgY29uc3QgdW5hcnlEZWZpbml0aW9uID0gbmV3IFVuYXJ5RGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gdW5hcnlEZWZpbml0aW9uO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbImZpcnN0IiwiYXJyYXlVdGlsaXRpZXMiLCJVbmFyeURlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwiZmlyc3RQYXJ0IiwiY2xvbmVQYXJ0cyIsInVuYXJ5RGVmaW5pdGlvbiIsIkRlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7QUFFYyxJQUFBLGFBQWUsV0FBZixlQUFlLENBQUE7QUFDWCxJQUFBLFVBQVcsV0FBWCxXQUFXLENBQUE7QUFJZixJQUFBLE1BQW9CLFdBQXBCLG9CQUFvQixDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUYvQyxJQUFNLEFBQUVBLEtBQUssR0FBS0MsVUFBYyxlQUFBLENBQXhCRCxLQUFLLEFBQW1CLEFBQUM7QUFJbEIsSUFBQSxBQUFNRSxlQUFlLGlCQ1RqQyxBRFNZOzs7YUFBTUEsZUFBZTs7Ozs7O1lBQzNCQyxHQUFjLEVBQWRBLGdCQUFjO21CQUFyQixTQUFPQSxjQUFjLENBQUNDLFVBQVUsRUFBRTtnQkFDaEMsSUFBSUMsS0FBSyxHQUFHRCxVQUFVLENBQUNFLFFBQVEsRUFBRSxBQUFDO2dCQUVsQyxJQUFNQyxTQUFTLEdBQUdQLEtBQUssQ0FBQ0ssS0FBSyxDQUFDLEFBQUM7Z0JBRS9CQSxLQUFLLEdBQUc7b0JBQUVFLFNBQVM7aUJBQUUsQ0FBQztnQkFFdEJGLEtBQUssR0FBR0csQ0FBQUEsR0FBQUEsTUFBVSxBQUFPLENBQUEsV0FBUCxDQUFDSCxLQUFLLENBQUMsQ0FBQyxDQUFFLEdBQUc7Z0JBRS9CLElBQU1JLGVBQWUsR0FBRyxJQUFJUCxlQUFlLENBQUNHLEtBQUssQ0FBQyxBQUFDO2dCQUVuRCxPQUFPSSxlQUFlLENBQUM7YUFDeEI7Ozs7Q0FDRixDQWQ0Q0MsYUFBVSxXQUFBLENBY3REO2tCQWRvQlIsZUFBZSJ9