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
var _array = require("../utilities/array");
var _part = require("../utilities/part");
var _definition = require("./definition");
function isRuleEmpty(rule) {
    var ruleEmpty = false;
    var definitions = rule.getDefinitions(), definitionsLength = definitions.length;
    if (definitionsLength === 1) {
        var firstDefinition = (0, _array.first)(definitions), definition = firstDefinition, parts = definition.getParts(), partsLength = parts.length;
        if (partsLength === 1) {
            var firstPart = (0, _array.first)(parts), part = firstPart, partEmpty = (0, _part.isPartEmpty)(part);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgZmlyc3QgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc1BhcnRFbXB0eSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcGFydFwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuL2RlZmluaXRpb25cIjtcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVtcHR5KHJ1bGUpIHtcbiAgbGV0IHJ1bGVFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb24gPSBmaXJzdChkZWZpbml0aW9ucyksXG4gICAgICAgICAgZGVmaW5pdGlvbiA9IGZpcnN0RGVmaW5pdGlvbiwgLy8vXG4gICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcGFydHNMZW5ndGggPSBwYXJ0cy5sZW5ndGg7XG5cbiAgICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICAgIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgICAgIHBhcnQgPSBmaXJzdFBhcnQsIC8vL1xuICAgICAgICAgICAgcGFydEVtcHR5ID0gaXNQYXJ0RW1wdHkocGFydCk7XG5cbiAgICAgIGlmIChwYXJ0RW1wdHkpIHtcbiAgICAgICAgcnVsZUVtcHR5ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gcnVsZUVtcHR5O1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVSdWxlTmFtZXM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUocnVsZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGRlZmluaXRpb25zLmZvckVhY2goKGRlZmluaXRpb24pID0+IHtcbiAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImlzUnVsZUVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVJ1bGUiLCJydWxlIiwicnVsZUVtcHR5IiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwiZmlyc3REZWZpbml0aW9uIiwiZmlyc3QiLCJkZWZpbml0aW9uIiwicGFydHMiLCJnZXRQYXJ0cyIsInBhcnRzTGVuZ3RoIiwiZmlyc3RQYXJ0IiwicGFydCIsInBhcnRFbXB0eSIsImlzUGFydEVtcHR5IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBTWdCQSxXQUFXO2VBQVhBOztJQTBCQUMsMEJBQTBCO2VBQTFCQTs7SUFVQUMsOEJBQThCO2VBQTlCQTs7O3FCQXhDTTtvQkFDTTswQkFDMkQ7QUFFaEYsU0FBU0YsWUFBWUcsSUFBSSxFQUFFO0lBQ2hDLElBQUlDLFlBQVksS0FBSztJQUVyQixJQUFNQyxjQUFjRixLQUFLRyxjQUFjLElBQ2pDQyxvQkFBb0JGLFlBQVlHLE1BQU07SUFFNUMsSUFBSUQsc0JBQXNCLEdBQUc7UUFDM0IsSUFBTUUsa0JBQWtCQyxJQUFBQSxZQUFLLEVBQUNMLGNBQ3hCTSxhQUFhRixpQkFDYkcsUUFBUUQsV0FBV0UsUUFBUSxJQUMzQkMsY0FBY0YsTUFBTUosTUFBTTtRQUVoQyxJQUFJTSxnQkFBZ0IsR0FBRztZQUNyQixJQUFNQyxZQUFZTCxJQUFBQSxZQUFLLEVBQUNFLFFBQ2xCSSxPQUFPRCxXQUNQRSxZQUFZQyxJQUFBQSxpQkFBVyxFQUFDRjtZQUU5QixJQUFJQyxXQUFXO2dCQUNiYixZQUFZLElBQUk7WUFDbEIsQ0FBQztRQUNILENBQUM7SUFDSCxDQUFDO0lBRUQsT0FBT0E7QUFDVDtBQUVPLFNBQVNILDJCQUEyQkUsSUFBSSxFQUEyQjtRQUF6QmdCLHFCQUFBQSxpRUFBcUIsRUFBRTtJQUN0RSxJQUFNZCxjQUFjRixLQUFLRyxjQUFjO0lBRXZDRCxZQUFZZSxPQUFPLENBQUMsU0FBQ1QsWUFBZTtRQUNsQ1UsSUFBQUEsNENBQWdDLEVBQUNWLFlBQVlRO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNqQiwrQkFBK0JDLElBQUksRUFBK0I7UUFBN0JtQix5QkFBQUEsaUVBQXlCLEVBQUU7SUFDOUUsSUFBTWpCLGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVllLE9BQU8sQ0FBQyxTQUFDVCxZQUFlO1FBQ2xDWSxJQUFBQSxnREFBb0MsRUFBQ1osWUFBWVc7SUFDbkQ7SUFFQSxPQUFPQTtBQUNUIn0=