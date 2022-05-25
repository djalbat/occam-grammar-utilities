"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _easyWithStyle = _interopRequireDefault(require("easy-with-style"));
var _easy = require("easy");
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
function _defineProperty(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
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
function _setPrototypeOf(o2, p1) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o2, p1);
}
function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
        raw = strings.slice(0);
    }
    return Object.freeze(Object.defineProperties(strings, {
        raw: {
            value: Object.freeze(raw)
        }
    }));
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
function _templateObject() {
    var data = _taggedTemplateLiteral([
        "\n\n  zoom: 1.5;\n  margin-right: 0.5rem;\n  vertical-align: bottom;\n  \n"
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
var RemoveOrRenameReducedNodesCheckbox = /*#__PURE__*/ function(Checkbox) {
    _inherits(RemoveOrRenameReducedNodesCheckbox, Checkbox);
    var _super = _createSuper(RemoveOrRenameReducedNodesCheckbox);
    function RemoveOrRenameReducedNodesCheckbox() {
        _classCallCheck(this, RemoveOrRenameReducedNodesCheckbox);
        return _super.apply(this, arguments);
    }
    _createClass(RemoveOrRenameReducedNodesCheckbox, [
        {
            key: "parentContext",
            value: function parentContext() {
                var isRemoveOrRenameReducedNodesCheckboxChecked = this.isChecked.bind(this); ///
                return {
                    isRemoveOrRenameReducedNodesCheckboxChecked: isRemoveOrRenameReducedNodesCheckboxChecked
                };
            }
        }
    ]);
    return RemoveOrRenameReducedNodesCheckbox;
}(_easy.Checkbox);
_defineProperty(RemoveOrRenameReducedNodesCheckbox, "defaultProperties", {
    className: "remove-or-rename-reduced-nodes",
    spellCheck: "false"
});
var _default = (0, _easyWithStyle).default(RemoveOrRenameReducedNodesCheckbox)(_templateObject());
exports.default = _default;

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9leGFtcGxlL2NoZWNrYm94L3JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgd2l0aFN0eWxlIGZyb20gXCJlYXN5LXdpdGgtc3R5bGVcIjsgIC8vL1xuXG5pbXBvcnQgeyBDaGVja2JveCB9IGZyb20gXCJlYXN5XCI7XG5cbmNsYXNzIFJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3ggZXh0ZW5kcyBDaGVja2JveCB7XG4gIHBhcmVudENvbnRleHQoKSB7XG4gICAgY29uc3QgaXNSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCA9IHRoaXMuaXNDaGVja2VkLmJpbmQodGhpcyk7IC8vL1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBpc1JlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3hDaGVja2VkXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZGVmYXVsdFByb3BlcnRpZXMgPSB7XG4gICAgY2xhc3NOYW1lOiBcInJlbW92ZS1vci1yZW5hbWUtcmVkdWNlZC1ub2Rlc1wiLFxuICAgIHNwZWxsQ2hlY2s6IFwiZmFsc2VcIlxuICB9O1xufVxuXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGUoUmVtb3ZlT3JSZW5hbWVSZWR1Y2VkTm9kZXNDaGVja2JveClgXG5cbiAgem9vbTogMS41O1xuICBtYXJnaW4tcmlnaHQ6IDAuNXJlbTtcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcbiAgXG5gO1xuIl0sIm5hbWVzIjpbIlJlbW92ZU9yUmVuYW1lUmVkdWNlZE5vZGVzQ2hlY2tib3giLCJwYXJlbnRDb250ZXh0IiwiaXNSZW1vdmVPclJlbmFtZVJlZHVjZWROb2Rlc0NoZWNrYm94Q2hlY2tlZCIsImlzQ2hlY2tlZCIsImJpbmQiLCJDaGVja2JveCIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsIndpdGhTdHlsZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7OztBQUVTLElBQUEsY0FBaUIsa0NBQWpCLGlCQUFpQixFQUFBO0FBRWQsSUFBQSxLQUFNLFdBQU4sTUFBTSxDQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFL0IsSUFBQSxBQUFNQSxrQ0FBa0MsaUJBZXJDLEFBZkg7OzthQUFNQSxrQ0FBa0M7Ozs7OztZQUN0Q0MsR0FBYSxFQUFiQSxlQUFhO21CQUFiQSxTQUFBQSxhQUFhLEdBQUc7Z0JBQ2QsSUFBTUMsMkNBQTJDLEdBQUcsSUFBSSxDQUFDQyxTQUFTLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUMsQUFBQyxFQUFDLEdBQUc7Z0JBRWxGLE9BQVE7b0JBQ05GLDJDQUEyQyxFQUEzQ0EsMkNBQTJDO2lCQUM1QyxDQUFFO2FBQ0o7Ozs7Q0FNRixDQWJnREcsS0FBUSxTQUFBLENBYXhEO0FBSkMsZ0JBVElMLGtDQUFrQyxFQVMvQk0sbUJBQWlCLEVBQUc7SUFDekJDLFNBQVMsRUFBRSxnQ0FBZ0M7SUFDM0NDLFVBQVUsRUFBRSxPQUFPO0NBQ3BCLENBQUM7ZUFHV0MsQ0FBQUEsR0FBQUEsY0FBUyxBQUFvQyxDQUFBLFFBQXBDLENBQUNULGtDQUFrQyxDQUFDIn0=