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
    isRuleEmpty: function() {
        return isRuleEmpty;
    },
    recursiveRuleNamesFromRule: function() {
        return recursiveRuleNamesFromRule;
    },
    leftRecursiveRuleNamesFromRule: function() {
        return leftRecursiveRuleNamesFromRule;
    }
});
var _necessary = require("necessary");
var _part = require("../utilities/part");
var _definition = require("./definition");
var first = _necessary.arrayUtilities.first;
function isRuleEmpty(rule) {
    var ruleEmpty = false;
    var definitions = rule.getDefinitions(), definitionsLength = definitions.length;
    if (definitionsLength === 1) {
        var firstDefinition = first(definitions), definition = firstDefinition, parts = definition.getParts(), partsLength = parts.length;
        if (partsLength === 1) {
            var firstPart = first(parts), part = firstPart, partEmpty = (0, _part.isPartEmpty)(part);
            if (partEmpty) {
                ruleEmpty = true;
            }
        }
    }
    return ruleEmpty;
}
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGlzUGFydEVtcHR5IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gZnJvbSBcIi4vZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVtcHR5KHJ1bGUpIHtcbiAgbGV0IHJ1bGVFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydEVtcHR5ID0gaXNQYXJ0RW1wdHkocGFydCk7XG5cbiAgICAgIGlmIChwYXJ0RW1wdHkpIHtcbiAgICAgICAgcnVsZUVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImlzUnVsZUVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicnVsZSIsInJ1bGVFbXB0eSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImZpcnN0RGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJmaXJzdFBhcnQiLCJwYXJ0IiwicGFydEVtcHR5IiwiaXNQYXJ0RW1wdHkiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTZ0JBLFdBQVc7ZUFBWEE7O0lBMEJBQywwQkFBMEI7ZUFBMUJBOztJQVVBQyw4QkFBOEI7ZUFBOUJBOzs7eUJBM0NlO29CQUVIOzBCQUMyRDtBQUV2RixJQUFNLEFBQUVDLFFBQVVDLHlCQUFjLENBQXhCRDtBQUVELFNBQVNILFlBQVlLLElBQUksRUFBRTtJQUNoQyxJQUFJQyxZQUFZLEtBQUs7SUFFckIsSUFBTUMsY0FBY0YsS0FBS0csY0FBYyxJQUNqQ0Msb0JBQW9CRixZQUFZRyxNQUFNO0lBRTVDLElBQUlELHNCQUFzQixHQUFHO1FBQzNCLElBQU1FLGtCQUFrQlIsTUFBTUksY0FDeEJLLGFBQWFELGlCQUNiRSxRQUFRRCxXQUFXRSxRQUFRLElBQzNCQyxjQUFjRixNQUFNSCxNQUFNO1FBRWhDLElBQUlLLGdCQUFnQixHQUFHO1lBQ3JCLElBQU1DLFlBQVliLE1BQU1VLFFBQ2xCSSxPQUFPRCxXQUNQRSxZQUFZQyxJQUFBQSxpQkFBVyxFQUFDRjtZQUU5QixJQUFJQyxXQUFXO2dCQUNiWixZQUFZLElBQUk7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVDtBQUVPLFNBQVNMLDJCQUEyQkksSUFBSSxFQUEyQjtRQUF6QmUscUJBQUFBLGlFQUFxQixFQUFFO0lBQ3RFLElBQU1iLGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVljLE9BQU8sQ0FBQyxTQUFDVCxZQUFlO1FBQ2xDVSxJQUFBQSw0Q0FBZ0MsRUFBQ1YsWUFBWVE7SUFDL0M7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2xCLCtCQUErQkcsSUFBSSxFQUErQjtRQUE3QmtCLHlCQUFBQSxpRUFBeUIsRUFBRTtJQUM5RSxJQUFNaEIsY0FBY0YsS0FBS0csY0FBYztJQUV2Q0QsWUFBWWMsT0FBTyxDQUFDLFNBQUNULFlBQWU7UUFDbENZLElBQUFBLGdEQUFvQyxFQUFDWixZQUFZVztJQUNuRDtJQUVBLE9BQU9BO0FBQ1QifQ==