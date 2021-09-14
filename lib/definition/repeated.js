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
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RepeatedDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RepeatedDefinition, Definition);
    function RepeatedDefinition() {
        _classCallCheck(this, RepeatedDefinition);
        return _possibleConstructorReturn(this, _getPrototypeOf(RepeatedDefinition).apply(this, arguments));
    }
    _createClass(RepeatedDefinition, null, [
        {
            key: "fromDefinition",
            value: function fromDefinition(definition) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                parts.shift(); ///
                var repeatedDefinition = new RepeatedDefinition(parts);
                return repeatedDefinition;
            }
        }
    ]);
    return RepeatedDefinition;
}(_occamParsers.Definition);
exports.default = RepeatedDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlcGVhdGVkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBEZWZpbml0aW9uIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcblxuaW1wb3J0IHsgY2xvbmVQYXJ0cyB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydHNcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVwZWF0ZWREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgcmVwZWF0ZWREZWZpbml0aW9uID0gbmV3IFJlcGVhdGVkRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gcmVwZWF0ZWREZWZpbml0aW9uO1xuICB9XG59XG4iXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUFlLENBQWYsYUFBZTtBQUVmLEdBQW9CLENBQXBCLE1BQW9COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRTFCLGtCQUFrQjtjQUFsQixrQkFBa0I7YUFBbEIsa0JBQWtCOzhCQUFsQixrQkFBa0I7Z0VBQWxCLGtCQUFrQjs7aUJBQWxCLGtCQUFrQjs7WUFDOUIsR0FBYyxHQUFkLGNBQWM7NEJBQWQsY0FBYyxDQUFDLFVBQVUsRUFBRSxDQUFDO2dCQUNqQyxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsQ0FBQyxRQUFRO2dCQUUvQixLQUFLLE9BTmtCLE1BQW9CLGFBTXhCLEtBQUssRUFBSSxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRS9CLEtBQUssQ0FBQyxLQUFLLEdBQUssQ0FBRyxBQUFILEVBQUcsQUFBSCxDQUFHO2dCQUVuQixHQUFLLENBQUMsa0JBQWtCLEdBQUcsR0FBRyxDQUFDLGtCQUFrQixDQUFDLEtBQUs7dUJBRWhELGtCQUFrQjtZQUMzQixDQUFDOzs7V0FYa0Isa0JBQWtCO0VBSlosYUFBZTtrQkFJckIsa0JBQWtCIn0=