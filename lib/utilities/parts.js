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
    recursiveRuleNamesFromParts: function() {
        return recursiveRuleNamesFromParts;
    },
    leftRecursiveRuleNamesFromParts: function() {
        return leftRecursiveRuleNamesFromParts;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNFcXVhbChwYXJ0cykge1xuICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyksXG4gICAgICAgIGZpcnN0UGFydFN0cmluZyA9IGZpcnN0UGFydC5hc1N0cmluZygpLFxuICAgICAgICBwYXJ0c0VxdWFsID0gcGFydHMuZXZlcnkoKHBhcnQpID0+IHtcbiAgICAgICAgICBjb25zdCBwYXJ0U3RyaW5nID0gcGFydC5hc1N0cmluZygpLFxuICAgICAgICAgICAgICAgIHBhcnRTdHJpbmdGaXJzdFBhcnRTdHJpbmcgPSAocGFydFN0cmluZyA9PT0gZmlyc3RQYXJ0U3RyaW5nKTtcblxuICAgICAgICAgIGlmIChwYXJ0U3RyaW5nRmlyc3RQYXJ0U3RyaW5nKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBwYXJ0c0VxdWFsO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYXJlUGFydHNMZWZ0UmVjdXJzaXZlKHBhcnRzKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzKHBhcnRzKSxcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBwYXJ0c0xlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBwYXJ0c0xlZnRSZWN1cnNpdmU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMocGFydHMsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIHBhcnRzLmZvckVhY2goKHBhcnQpID0+IHtcbiAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICB9KTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IFtdKSB7XG4gIGNvbnN0IGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG4iXSwibmFtZXMiOlsiYXJlUGFydHNFcXVhbCIsImFyZVBhcnRzTGVmdFJlY3Vyc2l2ZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwicGFydHMiLCJmaXJzdFBhcnQiLCJmaXJzdFBhcnRTdHJpbmciLCJhc1N0cmluZyIsInBhcnRzRXF1YWwiLCJldmVyeSIsInBhcnQiLCJwYXJ0U3RyaW5nIiwicGFydFN0cmluZ0ZpcnN0UGFydFN0cmluZyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwicGFydHNMZWZ0UmVjdXJzaXZlIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0Il0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLGFBQWE7ZUFBYkE7O0lBZUFDLHFCQUFxQjtlQUFyQkE7O0lBUUFDLDJCQUEyQjtlQUEzQkE7O0lBUUFDLCtCQUErQjtlQUEvQkE7Ozt5QkFyQ2U7b0JBRTRDO0FBRTNFLElBQU0sQUFBRUMsUUFBVUMseUJBQWMsQ0FBeEJEO0FBRUQsU0FBU0osY0FBY00sS0FBSyxFQUFFO0lBQ25DLElBQU1DLFlBQVlILE1BQU1FLFFBQ2xCRSxrQkFBa0JELFVBQVVFLFFBQVEsSUFDcENDLGFBQWFKLE1BQU1LLEtBQUssQ0FBQyxTQUFDQyxNQUFTO1FBQ2pDLElBQU1DLGFBQWFELEtBQUtILFFBQVEsSUFDMUJLLDRCQUE2QkQsZUFBZUw7UUFFbEQsSUFBSU0sMkJBQTJCO1lBQzdCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtJQUVOLE9BQU9KO0FBQ1Q7QUFFTyxTQUFTVCxzQkFBc0JLLEtBQUssRUFBRTtJQUMzQyxJQUFNUyx5QkFBeUJaLGdDQUFnQ0csUUFDekRVLCtCQUErQkQsdUJBQXVCRSxNQUFNLEVBQzVEQyxxQkFBc0JGLCtCQUErQjtJQUUzRCxPQUFPRTtBQUNUO0FBRU8sU0FBU2hCLDRCQUE0QkksS0FBSyxFQUEyQjtRQUF6QmEscUJBQUFBLGlFQUFxQixFQUFFO0lBQ3hFYixNQUFNYyxPQUFPLENBQUMsU0FBQ1IsTUFBUztRQUN0QlMsSUFBQUEsZ0NBQTBCLEVBQUNULE1BQU1PO0lBQ25DO0lBRUEsT0FBT0E7QUFDVDtBQUVPLFNBQVNoQixnQ0FBZ0NHLEtBQUssRUFBK0I7UUFBN0JTLHlCQUFBQSxpRUFBeUIsRUFBRTtJQUNoRixJQUFNUixZQUFZSCxNQUFNRSxRQUNsQk0sT0FBT0wsV0FBVyxHQUFHO0lBRTNCZSxJQUFBQSxvQ0FBOEIsRUFBQ1YsTUFBTUc7SUFFckMsT0FBT0E7QUFDVCJ9