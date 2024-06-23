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
    arePartsEqual: function() {
        return arePartsEqual;
    },
    arePartsLeftRecursive: function() {
        return arePartsLeftRecursive;
    },
    leftRecursiveRuleNamesFromParts: function() {
        return leftRecursiveRuleNamesFromParts;
    },
    recursiveRuleNamesFromParts: function() {
        return recursiveRuleNamesFromParts;
    }
});
var _necessary = require("necessary");
var _part = require("../utilities/part");
var first = _necessary.arrayUtilities.first;
function arePartsEqual(parts) {
    var firstPart = first(parts), firstPartString = firstPart.asString(), partsEqual = parts.every(function(part) {
        var partString = part.asString(), partStringFirstPartString = partString === firstPartString;
        if (partStringFirstPartString) {
            return true;
        }
    });
    return partsEqual;
}
function arePartsLeftRecursive(parts) {
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromParts(parts), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, partsLeftRecursive = leftRecursiveRuleNamesLength > 0;
    return partsLeftRecursive;
}
function recursiveRuleNamesFromParts(parts) {
    var recursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    parts.forEach(function(part) {
        (0, _part.recursiveRuleNamesFromPart)(part, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromParts(parts) {
    var leftRecursiveRuleNames = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
    var firstPart = first(parts), part = firstPart; ///
    (0, _part.leftRecursiveRuleNamesFromPart)(part, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFcXVhbChwYXJ0cykge1xuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGZpcnN0UGFydFN0cmluZyA9IGZpcnN0UGFydC5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0c0VxdWFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmcgPSAocGFydFN0cmluZyA9PT0gZmlyc3RQYXJ0U3RyaW5nKTtcblxuICAgICAgICAgIGlmIChwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VxdWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImFyZVBhcnRzRXF1YWwiLCJhcmVQYXJ0c0xlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsInBhcnRzIiwiZmlyc3RQYXJ0IiwiZmlyc3RQYXJ0U3RyaW5nIiwiYXNTdHJpbmciLCJwYXJ0c0VxdWFsIiwiZXZlcnkiLCJwYXJ0IiwicGFydFN0cmluZyIsInBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmciLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImZvckVhY2giLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBUWdCQSxhQUFhO2VBQWJBOztJQWVBQyxxQkFBcUI7ZUFBckJBOztJQWdCQUMsK0JBQStCO2VBQS9CQTs7SUFSQUMsMkJBQTJCO2VBQTNCQTs7O3lCQTdCZTtvQkFFNEM7QUFFM0UsSUFBTSxBQUFFQyxRQUFVQyx5QkFBYyxDQUF4QkQ7QUFFRCxTQUFTSixjQUFjTSxLQUFLO0lBQ2pDLElBQU1DLFlBQVlILE1BQU1FLFFBQ2xCRSxrQkFBa0JELFVBQVVFLFFBQVEsSUFDcENDLGFBQWFKLE1BQU1LLEtBQUssQ0FBQyxTQUFDQztRQUN4QixJQUFNQyxhQUFhRCxLQUFLSCxRQUFRLElBQzFCSyw0QkFBNkJELGVBQWVMO1FBRWxELElBQUlNLDJCQUEyQjtZQUM3QixPQUFPO1FBQ1Q7SUFDRjtJQUVOLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTVCxzQkFBc0JLLEtBQUs7SUFDekMsSUFBTVMseUJBQXlCYixnQ0FBZ0NJLFFBQ3pEVSwrQkFBK0JELHVCQUF1QkUsTUFBTSxFQUM1REMscUJBQXNCRiwrQkFBK0I7SUFFM0QsT0FBT0U7QUFDVDtBQUVPLFNBQVNmLDRCQUE0QkcsS0FBSztRQUFFYSxxQkFBQUEsaUVBQXFCLEVBQUU7SUFDeEViLE1BQU1jLE9BQU8sQ0FBQyxTQUFDUjtRQUNiUyxJQUFBQSxnQ0FBMEIsRUFBQ1QsTUFBTU87SUFDbkM7SUFFQSxPQUFPQTtBQUNUO0FBRU8sU0FBU2pCLGdDQUFnQ0ksS0FBSztRQUFFUyx5QkFBQUEsaUVBQXlCLEVBQUU7SUFDaEYsSUFBTVIsWUFBWUgsTUFBTUUsUUFDbEJNLE9BQU9MLFdBQVcsR0FBRztJQUUzQmUsSUFBQUEsb0NBQThCLEVBQUNWLE1BQU1HO0lBRXJDLE9BQU9BO0FBQ1QifQ==