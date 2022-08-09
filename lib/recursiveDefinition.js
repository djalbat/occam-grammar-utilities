"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RecursiveDefinition;
    }
});
var _definition = require("./utilities/definition");
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
var RecursiveDefinition = /*#__PURE__*/ function() {
    function RecursiveDefinition(rule, definition, recursiveRuleNames) {
        _classCallCheck(this, RecursiveDefinition);
        this.rule = rule;
        this.definition = definition;
        this.recursiveRuleNames = recursiveRuleNames;
    }
    _createClass(RecursiveDefinition, [
        {
            key: "getRule",
            value: function getRule() {
                return this.rule;
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
            key: "getRuleName",
            value: function getRuleName() {
                var ruleName = this.rule.getName();
                return ruleName;
            }
        }
    ], [
        {
            key: "fromRuleAndDefinition",
            value: function fromRuleAndDefinition(rule, definition) {
                var recursiveDefinition = null;
                var definitionRecursive = (0, _definition.isDefinitionRecursive)(definition);
                if (definitionRecursive) {
                    var recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
                    recursiveDefinition = new RecursiveDefinition(rule, definition, recursiveRuleNames);
                }
                return recursiveDefinition;
            }
        }
    ]);
    return RecursiveDefinition;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc0RlZmluaXRpb25SZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMucnVsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVBbmREZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBkZWZpbml0aW9uUmVjdXJzaXZlID0gaXNEZWZpbml0aW9uUmVjdXJzaXZlKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKGRlZmluaXRpb25SZWN1cnNpdmUpIHtcbiAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICByZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuIiwiUmVhY3QuY3JlYXRlRWxlbWVudCJdLCJuYW1lcyI6WyJSZWN1cnNpdmVEZWZpbml0aW9uIiwicnVsZSIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlIiwiZ2V0RGVmaW5pdGlvbiIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJnZXROYW1lIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJpc0RlZmluaXRpb25SZWN1cnNpdmUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7O2VBSVFBLG1CQUFtQjs7OzBCQUZnQyx3QkFBd0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWpGLElBQUEsQUFBTUEsbUJBQW1CLGlCQUF6QjthQUFNQSxtQkFBbUIsQ0FDMUJDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0I7O1FBQzlDLElBQUksQ0FBQ0YsSUFBSSxHQUFHQSxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDQyxVQUFVLEdBQUdBLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUNDLGtCQUFrQixHQUFHQSxrQkFBa0IsQ0FBQzs7OztZQUcvQ0MsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNILElBQUksQ0FBQzthQUNsQjs7O1lBRURJLEdBQWEsRUFBYkEsZUFBYTttQkFBYkEsU0FBQUEsYUFBYSxHQUFHO2dCQUNkLE9BQU8sSUFBSSxDQUFDSCxVQUFVLENBQUM7YUFDeEI7OztZQUVESSxHQUFxQixFQUFyQkEsdUJBQXFCO21CQUFyQkEsU0FBQUEscUJBQXFCLEdBQUc7Z0JBQ3RCLE9BQU8sSUFBSSxDQUFDSCxrQkFBa0IsQ0FBQzthQUNoQzs7O1lBRURJLEdBQVcsRUFBWEEsYUFBVzttQkFBWEEsU0FBQUEsV0FBVyxHQUFHO2dCQUNaLElBQU1DLFFBQVEsR0FBRyxJQUFJLENBQUNQLElBQUksQ0FBQ1EsT0FBTyxFQUFFLEFBQUM7Z0JBRXJDLE9BQU9ELFFBQVEsQ0FBQzthQUNqQjs7OztZQUVNRSxHQUFxQixFQUFyQkEsdUJBQXFCO21CQUE1QixTQUFPQSxxQkFBcUIsQ0FBQ1QsSUFBSSxFQUFFQyxVQUFVLEVBQUU7Z0JBQzdDLElBQUlTLG1CQUFtQixHQUFHLElBQUksQUFBQztnQkFFL0IsSUFBTUMsbUJBQW1CLEdBQUdDLElBQUFBLFdBQXFCLHNCQUFBLEVBQUNYLFVBQVUsQ0FBQyxBQUFDO2dCQUU5RCxJQUFJVSxtQkFBbUIsRUFBRTtvQkFDdkIsSUFBTVQsa0JBQWtCLEdBQUdXLElBQUFBLFdBQWdDLGlDQUFBLEVBQUNaLFVBQVUsQ0FBQyxBQUFDO29CQUV4RVMsbUJBQW1CLEdBQUcsSUFBSVgsbUJBQW1CLENBQUNDLElBQUksRUFBRUMsVUFBVSxFQUFFQyxrQkFBa0IsQ0FBQyxDQUFDO2lCQUNyRjtnQkFFRCxPQUFPUSxtQkFBbUIsQ0FBQzthQUM1Qjs7OztDQUNGLEVBQUEifQ==