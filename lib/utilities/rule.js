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
var _occamlexers = require("occam-lexers");
var _array = require("../utilities/array");
var _definition = require("./definition");
var epsilon = _occamlexers.specialSymbols.epsilon;
function isRuleEmpty(rule) {
    var ruleEmpty = false;
    var definitions = rule.getDefinitions(), definitionsLength = definitions.length;
    if (definitionsLength === 1) {
        var firstDefinition = (0, _array.first)(definitions), definition = firstDefinition, parts = definition.getParts(), partsLength = parts.length;
        if (partsLength === 1) {
            var firstPart = (0, _array.first)(parts), part = firstPart, partString = part.asString(), partStringEpsilon = partString === epsilon;
            if (partStringEpsilon) {
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgc3BlY2lhbFN5bWJvbHMgfSBmcm9tIFwib2NjYW0tbGV4ZXJzXCI7XG5cbmltcG9ydCB7IGZpcnN0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9hcnJheVwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiB9IGZyb20gXCIuL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBlcHNpbG9uIH0gPSBzcGVjaWFsU3ltYm9scztcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUnVsZUVtcHR5KHJ1bGUpIHtcbiAgbGV0IHJ1bGVFbXB0eSA9IGZhbHNlO1xuXG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBkZWZpbml0aW9uc0xlbmd0aCA9IGRlZmluaXRpb25zLmxlbmd0aDtcblxuICBpZiAoZGVmaW5pdGlvbnNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdERlZmluaXRpb249IGZpcnN0KGRlZmluaXRpb25zKSxcbiAgICAgICAgICBkZWZpbml0aW9uID0gZmlyc3REZWZpbml0aW9uLCAvLy9cbiAgICAgICAgICBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICAgIGlmIChwYXJ0c0xlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICAgICAgcGFydCA9IGZpcnN0UGFydCwgLy8vXG4gICAgICAgICAgICBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpLFxuICAgICAgICAgICAgcGFydFN0cmluZ0Vwc2lsb24gPSAocGFydFN0cmluZyA9PT0gZXBzaWxvbik7XG5cbiAgICAgIGlmIChwYXJ0U3RyaW5nRXBzaWxvbikge1xuICAgICAgICBydWxlRW1wdHkgPSB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBydWxlRW1wdHk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXSkge1xuICBjb25zdCBkZWZpbml0aW9ucyA9IHJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICBkZWZpbml0aW9ucy5mb3JFYWNoKChkZWZpbml0aW9uKSA9PiB7XG4gICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZShydWxlLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgY29uc3QgZGVmaW5pdGlvbnMgPSBydWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgZGVmaW5pdGlvbnMuZm9yRWFjaCgoZGVmaW5pdGlvbikgPT4ge1xuICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG4iXSwibmFtZXMiOlsiaXNSdWxlRW1wdHkiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUnVsZSIsImVwc2lsb24iLCJzcGVjaWFsU3ltYm9scyIsInJ1bGUiLCJydWxlRW1wdHkiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJmaXJzdERlZmluaXRpb24iLCJmaXJzdCIsImRlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwicGFydHNMZW5ndGgiLCJmaXJzdFBhcnQiLCJwYXJ0IiwicGFydFN0cmluZyIsImFzU3RyaW5nIiwicGFydFN0cmluZ0Vwc2lsb24iLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJmb3JFYWNoIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFTZ0JBLFdBQVc7ZUFBWEE7O0lBMkJBQywwQkFBMEI7ZUFBMUJBOztJQVVBQyw4QkFBOEI7ZUFBOUJBOzs7MkJBNUNlO3FCQUVUOzBCQUNpRTtBQUV2RixJQUFNLEFBQUVDLFVBQVlDLDJCQUFjLENBQTFCRDtBQUVELFNBQVNILFlBQVlLLElBQUksRUFBRTtJQUNoQyxJQUFJQyxZQUFZLEtBQUs7SUFFckIsSUFBTUMsY0FBY0YsS0FBS0csY0FBYyxJQUNqQ0Msb0JBQW9CRixZQUFZRyxNQUFNO0lBRTVDLElBQUlELHNCQUFzQixHQUFHO1FBQzNCLElBQU1FLGtCQUFpQkMsSUFBQUEsWUFBSyxFQUFDTCxjQUN2Qk0sYUFBYUYsaUJBQ2JHLFFBQVFELFdBQVdFLFFBQVEsSUFDM0JDLGNBQWNGLE1BQU1KLE1BQU07UUFFaEMsSUFBSU0sZ0JBQWdCLEdBQUc7WUFDckIsSUFBTUMsWUFBWUwsSUFBQUEsWUFBSyxFQUFDRSxRQUNsQkksT0FBT0QsV0FDUEUsYUFBYUQsS0FBS0UsUUFBUSxJQUMxQkMsb0JBQXFCRixlQUFlaEI7WUFFMUMsSUFBSWtCLG1CQUFtQjtnQkFDckJmLFlBQVksSUFBSTtZQUNsQixDQUFDO1FBQ0gsQ0FBQztJQUNILENBQUM7SUFFRCxPQUFPQTtBQUNUO0FBRU8sU0FBU0wsMkJBQTJCSSxJQUFJLEVBQTJCO1FBQXpCaUIscUJBQUFBLGlFQUFxQixFQUFFO0lBQ3RFLElBQU1mLGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVlnQixPQUFPLENBQUMsU0FBQ1YsWUFBZTtRQUNsQ1csSUFBQUEsNENBQWdDLEVBQUNYLFlBQVlTO0lBQy9DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNwQiwrQkFBK0JHLElBQUksRUFBK0I7UUFBN0JvQix5QkFBQUEsaUVBQXlCLEVBQUU7SUFDOUUsSUFBTWxCLGNBQWNGLEtBQUtHLGNBQWM7SUFFdkNELFlBQVlnQixPQUFPLENBQUMsU0FBQ1YsWUFBZTtRQUNsQ2EsSUFBQUEsZ0RBQW9DLEVBQUNiLFlBQVlZO0lBQ25EO0lBRUEsT0FBT0E7QUFDVCJ9