"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    recursiveRuleNamesFromRule: function() {
        return recursiveRuleNamesFromRule;
    },
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    }
});
var _definition = require("./definition");
function recursiveRuleNamesFromRule(rule) {
    var recursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        (0, _definition.recursiveRuleNamesFromDefinition)(definition, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromRule(rule) {
    var leftRecursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var definitions = rule.getDefinitions();
    definitions.forEach(function(definition) {
        (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition, leftRecursiveRuleNames);
    });
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21SdWxlKHJ1bGUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsInJ1bGUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZm9yRWFjaCIsImRlZmluaXRpb24iLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUlnQkEsMEJBQTBCO2VBQTFCQTs7SUFVQUMsOEJBQThCO2VBQTlCQTs7OzBCQVp1RTtBQUVoRixTQUFTRCwyQkFBMkJFLElBQUksRUFBMkI7UUFBekJDLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RSxJQUFNQyxjQUFjRixLQUFLRyxjQUFjO0lBRXZDRCxZQUFZRSxPQUFPLENBQUMsU0FBQ0MsWUFBZTtRQUNsQ0MsSUFBQUEsNENBQWdDLEVBQUNELFlBQVlKO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNGLCtCQUErQkMsSUFBSSxFQUErQjtRQUE3Qk8seUJBQUFBLGlFQUF5QixFQUFFO0lBQzlFLElBQU1MLGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVlFLE9BQU8sQ0FBQyxTQUFDQyxZQUFlO1FBQ2xDRyxJQUFBQSxnREFBb0MsRUFBQ0gsWUFBWUU7SUFDbkQ7SUFFQSxPQUFPQTtBQUNUIn0=