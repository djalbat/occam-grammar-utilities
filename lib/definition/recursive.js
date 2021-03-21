"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _rule = require("../utilities/rule");
var _types = require("../types");
var _definition = require("../utilities/definition");
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
var RecursiveDefinition = function(Definition) {
    _inherits(RecursiveDefinition, _occamParsers.Definition);
    function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
        _classCallCheck(this, RecursiveDefinition);
        var _this;
        _this = _possibleConstructorReturn(this, _getPrototypeOf(RecursiveDefinition).call(this, parts));
        _this.type = type;
        _this.ruleName = ruleName;
        _this.definition = definition;
        _this.recursiveRuleNames = recursiveRuleNames;
        return _this;
    }
    _createClass(RecursiveDefinition, [
        {
            key: "getType",
            value: function getType() {
                return this.type;
            }
        },
        {
            key: "getRuleName",
            value: function getRuleName() {
                return this.ruleName;
            }
        },
        {
            key: "getDefinition",
            value: function getDefinition() {
                return this.definition;
            }
        },
        {
            key: "getRecursiveRuleNames",
            value: function getRecursiveRuleNames() {
                return this.recursiveRuleNames;
            }
        },
        {
            key: "replace",
            value: function replace(ruleMap) {
                var rule = ruleMap[this.ruleName] || null, replacedDefinition = this.definition, replacementDefinition = this; ///
                rule.replaceDefinition(replacedDefinition, replacementDefinition);
            }
        }
    ], [
        {
            key: "fromRuleNameAndDefinition",
            value: function fromRuleNameAndDefinition(ruleName, definition) {
                var recursiveDefinition = null;
                var type = _types.RECURSIVE_TYPE, parts = definition.getParts(), recursiveRuleNames = _definition.recursiveRuleNamesFromDefinition(definition), recursiveRuleNamesLength = recursiveRuleNames.length, definitionRecursiveDefinition = recursiveRuleNamesLength > 0;
                if (definitionRecursiveDefinition) {
                    recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}(_occamParsers.Definition);
exports.default = RecursiveDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGZpbmRSdWxlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlXCI7XG5pbXBvcnQgeyBSRUNVUlNJVkVfVFlQRSB9IGZyb20gXCIuLi90eXBlc1wiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3Rvcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHN1cGVyKHBhcnRzKTtcblxuICAgIHRoaXMudHlwZSA9IHR5cGU7XG5cbiAgICB0aGlzLnJ1bGVOYW1lID0gcnVsZU5hbWU7XG5cbiAgICB0aGlzLmRlZmluaXRpb24gPSBkZWZpbml0aW9uO1xuXG4gICAgdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRUeXBlKCkge1xuICAgIHJldHVybiB0aGlzLnR5cGU7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlTmFtZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICByZXBsYWNlKHJ1bGVNYXApIHtcbiAgICBjb25zdCBydWxlID0gcnVsZU1hcFt0aGlzLnJ1bGVOYW1lXSB8fCBudWxsLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VkRGVmaW5pdGlvbiwgcmVwbGFjZW1lbnREZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZU5hbWVBbmREZWZpbml0aW9uKHJ1bGVOYW1lLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgdHlwZSA9IFJFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgIHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID4gMCk7XG5cbiAgICBpZiAoZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIHJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgUmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQ0FBQSxVQUFBOzs7OztJQUVBLGFBQUE7SUFFQSxLQUFBO0lBQ0EsTUFBQTtJQUNBLFdBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxtQkFBQSxZQUFBLFVBQUE7Y0FBQSxtQkFBQSxFQU5BLGFBQUE7YUFNQSxtQkFBQSxDQUNBLElBQUEsRUFBQSxLQUFBLEVBQUEsUUFBQSxFQUFBLFVBQUEsRUFBQSxrQkFBQTs4QkFEQSxtQkFBQTs7aUVBQUEsbUJBQUEsYUFFQSxLQUFBO2NBRUEsSUFBQSxHQUFBLElBQUE7Y0FFQSxRQUFBLEdBQUEsUUFBQTtjQUVBLFVBQUEsR0FBQSxVQUFBO2NBRUEsa0JBQUEsR0FBQSxrQkFBQTs7O2lCQVZBLG1CQUFBOztBQWFBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUE7NEJBQ0EsSUFBQTs7OztBQUdBLGVBQUEsR0FBQSxXQUFBOzRCQUFBLFdBQUE7NEJBQ0EsUUFBQTs7OztBQUdBLGVBQUEsR0FBQSxhQUFBOzRCQUFBLGFBQUE7NEJBQ0EsVUFBQTs7OztBQUdBLGVBQUEsR0FBQSxxQkFBQTs0QkFBQSxxQkFBQTs0QkFDQSxrQkFBQTs7OztBQUdBLGVBQUEsR0FBQSxPQUFBOzRCQUFBLE9BQUEsQ0FBQSxPQUFBO29CQUNBLElBQUEsR0FBQSxPQUFBLE1BQUEsUUFBQSxLQUFBLElBQUEsRUFDQSxrQkFBQSxRQUFBLFVBQUEsRUFDQSxxQkFBQSxRQUFBLENBQUEsRUFBQSxDQUFBO0FBRUEsb0JBQUEsQ0FBQSxpQkFBQSxDQUFBLGtCQUFBLEVBQUEscUJBQUE7Ozs7O0FBR0EsZUFBQSxHQUFBLHlCQUFBOzRCQUFBLHlCQUFBLENBQUEsUUFBQSxFQUFBLFVBQUE7b0JBQ0EsbUJBQUEsR0FBQSxJQUFBO29CQUVBLElBQUEsR0EzQ0EsTUFBQSxpQkE0Q0EsS0FBQSxHQUFBLFVBQUEsQ0FBQSxRQUFBLElBQ0Esa0JBQUEsR0E1Q0EsV0FBQSxrQ0E0Q0EsVUFBQSxHQUNBLHdCQUFBLEdBQUEsa0JBQUEsQ0FBQSxNQUFBLEVBQ0EsNkJBQUEsR0FBQSx3QkFBQSxHQUFBLENBQUE7b0JBRUEsNkJBQUE7QUFDQSx1Q0FBQSxPQUFBLG1CQUFBLENBQUEsSUFBQSxFQUFBLEtBQUEsRUFBQSxRQUFBLEVBQUEsVUFBQSxFQUFBLGtCQUFBOzt1QkFHQSxtQkFBQTs7OztXQWxEQSxtQkFBQTtFQU5BLGFBQUE7a0JBTUEsbUJBQUEifQ==