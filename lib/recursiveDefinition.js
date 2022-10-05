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
        },
        {
            key: "getParts",
            value: function getParts() {
                return this.definition.getParts();
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9yZWN1cnNpdmVEZWZpbml0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBpc0RlZmluaXRpb25SZWN1cnNpdmUsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcykge1xuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFJ1bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMucnVsZTtcbiAgfVxuXG4gIGdldERlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpIHtcbiAgICByZXR1cm4gdGhpcy5yZWN1cnNpdmVSdWxlTmFtZXM7XG4gIH1cblxuICBnZXRSdWxlTmFtZSgpIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IHRoaXMucnVsZS5nZXROYW1lKCk7XG5cbiAgICByZXR1cm4gcnVsZU5hbWU7XG4gIH1cblxuICBnZXRQYXJ0cygpIHsgcmV0dXJuIHRoaXMuZGVmaW5pdGlvbi5nZXRQYXJ0cygpOyB9XG5cbiAgc3RhdGljIGZyb21SdWxlQW5kRGVmaW5pdGlvbihydWxlLCBkZWZpbml0aW9uKSB7XG4gICAgbGV0IHJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgZGVmaW5pdGlvblJlY3Vyc2l2ZSA9IGlzRGVmaW5pdGlvblJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlKSB7XG4gICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGUiLCJkZWZpbml0aW9uIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0UnVsZSIsImdldERlZmluaXRpb24iLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRSdWxlTmFtZSIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImdldFBhcnRzIiwiZnJvbVJ1bGVBbmREZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImRlZmluaXRpb25SZWN1cnNpdmUiLCJpc0RlZmluaXRpb25SZWN1cnNpdmUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFJcUJBOzs7MEJBRm1EOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUV6RCxJQUFBLEFBQU1BLG9DQUFOO2FBQU1BLG9CQUNQQyxJQUFJLEVBQUVDLFVBQVUsRUFBRUMsa0JBQWtCOzhCQUQ3Qkg7UUFFakIsSUFBSSxDQUFDQyxJQUFJLEdBQUdBO1FBQ1osSUFBSSxDQUFDQyxVQUFVLEdBQUdBO1FBQ2xCLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUdBOztpQkFKVEg7O1lBT25CSSxLQUFBQTttQkFBQUEsU0FBQUEsVUFBVTtnQkFDUixPQUFPLElBQUksQ0FBQ0gsSUFBSTtZQUNsQjs7O1lBRUFJLEtBQUFBO21CQUFBQSxTQUFBQSxnQkFBZ0I7Z0JBQ2QsT0FBTyxJQUFJLENBQUNILFVBQVU7WUFDeEI7OztZQUVBSSxLQUFBQTttQkFBQUEsU0FBQUEsd0JBQXdCO2dCQUN0QixPQUFPLElBQUksQ0FBQ0gsa0JBQWtCO1lBQ2hDOzs7WUFFQUksS0FBQUE7bUJBQUFBLFNBQUFBLGNBQWM7Z0JBQ1osSUFBTUMsV0FBVyxJQUFJLENBQUNQLElBQUksQ0FBQ1EsT0FBTztnQkFFbEMsT0FBT0Q7WUFDVDs7O1lBRUFFLEtBQUFBO21CQUFBQSxTQUFBQSxXQUFXO2dCQUFFLE9BQU8sSUFBSSxDQUFDUixVQUFVLENBQUNRLFFBQVE7WUFBSTs7OztZQUV6Q0MsS0FBQUE7bUJBQVAsU0FBT0Esc0JBQXNCVixJQUFJLEVBQUVDLFVBQVUsRUFBRTtnQkFDN0MsSUFBSVUsc0JBQXNCLElBQUk7Z0JBRTlCLElBQU1DLHNCQUFzQkMsSUFBQUEsaUNBQXFCLEVBQUNaO2dCQUVsRCxJQUFJVyxxQkFBcUI7b0JBQ3ZCLElBQU1WLHFCQUFxQlksSUFBQUEsNENBQWdDLEVBQUNiO29CQUU1RFUsc0JBQXNCLElBbkNQWixvQkFtQytCQyxNQUFNQyxZQUFZQztnQkFDbEUsQ0FBQztnQkFFRCxPQUFPUztZQUNUOzs7V0F2Q21CWiJ9