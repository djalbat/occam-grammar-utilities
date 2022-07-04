"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        get: all[name],
        enumerable: true
    });
}
_export(exports, {
    cloneParts: function() {
        return cloneParts;
    },
    leftRecursiveRuleNamesFromParts: function() {
        return leftRecursiveRuleNamesFromParts;
    },
    mergeParts: function() {
        return mergeParts;
    },
    recursiveRuleNamesFromParts: function() {
        return recursiveRuleNamesFromParts;
    },
    repeatedPartFromParts: function() {
        return repeatedPartFromParts;
    },
    singlePartFromParts: function() {
        return singlePartFromParts;
    }
});
var _occamParsers = require("occam-parsers");
var _necessary = require("necessary");
var _part = require("./part");
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(n);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
var tail = _necessary.arrayUtilities.tail, first = _necessary.arrayUtilities.first, SequenceOfPartsPart = _occamParsers.Parts.SequenceOfPartsPart, ZeroOrMorePartsPart = _occamParsers.Parts.ZeroOrMorePartsPart;
function cloneParts(parts) {
    parts = parts.map(function(part) {
        return part.clone();
    }); ///
    return parts;
}
function mergeParts(partsA, partsB) {
    partsA = cloneParts(partsA); ///
    partsB = cloneParts(partsB); ///
    var parts = _toConsumableArray(partsA).concat(_toConsumableArray(partsB));
    return parts;
}
function singlePartFromParts(parts) {
    parts = tail(parts); ///
    var singlePart;
    var partsLength = parts.length;
    if (partsLength === 1) {
        var firstPart = first(parts);
        singlePart = firstPart; ///
    } else {
        var sequenceOfPartsPart = new SequenceOfPartsPart(parts);
        singlePart = sequenceOfPartsPart; ///
    }
    return singlePart;
}
function repeatedPartFromParts(parts) {
    var singlePart = singlePartFromParts(parts), part = singlePart, zeroOrMorePartsPart = new ZeroOrMorePartsPart(part), repeatedPart = zeroOrMorePartsPart; ///
    return repeatedPart;
}
function recursiveRuleNamesFromParts(parts) {
    var recursiveRuleNames = [];
    parts.forEach(function(part) {
        return (0, _part.recursiveRuleNamesFromPart)(part, recursiveRuleNames);
    });
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromParts(parts) {
    var leftRecursiveRuleNames = [], firstPart = first(parts), part = firstPart; ///
    (0, _part.leftRecursiveRuleNamesFromPart)(part, leftRecursiveRuleNames);
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IFBhcnRzIH0gZnJvbSBcIm9jY2FtLXBhcnNlcnNcIjtcbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuaW1wb3J0IHsgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCB9IGZyb20gXCIuL3BhcnRcIjtcblxuY29uc3QgeyB0YWlsLCBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IFNlcXVlbmNlT2ZQYXJ0c1BhcnQsIFplcm9Pck1vcmVQYXJ0c1BhcnQgfSA9IFBhcnRzO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVQYXJ0cyhwYXJ0cykge1xuICBwYXJ0cyA9IHBhcnRzLm1hcCgocGFydCkgPT4gcGFydC5jbG9uZSgpKTsgIC8vL1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlUGFydHMocGFydHNBLCBwYXJ0c0IpIHtcbiAgcGFydHNBID0gY2xvbmVQYXJ0cyhwYXJ0c0EpOyAgLy8vXG4gIHBhcnRzQiA9IGNsb25lUGFydHMocGFydHNCKTsgIC8vL1xuXG4gIGNvbnN0IHBhcnRzID0gW1xuICAgIC4uLnBhcnRzQSxcbiAgICAuLi5wYXJ0c0JcbiAgXTtcblxuICByZXR1cm4gcGFydHM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBzaW5nbGVQYXJ0RnJvbVBhcnRzKHBhcnRzKSB7XG4gIHBhcnRzID0gdGFpbChwYXJ0cyk7ICAvLy9cblxuICBsZXQgc2luZ2xlUGFydDtcblxuICBjb25zdCBwYXJ0c0xlbmd0aCA9IHBhcnRzLmxlbmd0aDtcblxuICBpZiAocGFydHNMZW5ndGggPT09IDEpIHtcbiAgICBjb25zdCBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICBzaW5nbGVQYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cbiAgfSBlbHNlIHtcbiAgICBjb25zdCBzZXF1ZW5jZU9mUGFydHNQYXJ0ID0gbmV3IFNlcXVlbmNlT2ZQYXJ0c1BhcnQocGFydHMpO1xuXG4gICAgc2luZ2xlUGFydCA9IHNlcXVlbmNlT2ZQYXJ0c1BhcnQ7IC8vL1xuICB9XG5cbiAgcmV0dXJuIHNpbmdsZVBhcnQ7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXBlYXRlZFBhcnRGcm9tUGFydHMocGFydHMpIHtcbiAgY29uc3Qgc2luZ2xlUGFydCA9IHNpbmdsZVBhcnRGcm9tUGFydHMocGFydHMpLFxuICAgICAgICBwYXJ0ID0gc2luZ2xlUGFydCxcbiAgICAgICAgemVyb09yTW9yZVBhcnRzUGFydCA9IG5ldyBaZXJvT3JNb3JlUGFydHNQYXJ0KHBhcnQpLFxuICAgICAgICByZXBlYXRlZFBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0OyAgLy8vXG5cbiAgcmV0dXJuIHJlcGVhdGVkUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSBbXTtcblxuICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcblxuICByZXR1cm4gcmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gW10sXG4gICAgICAgIGZpcnN0UGFydCA9IGZpcnN0KHBhcnRzKSxcbiAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzO1xufVxuIl0sIm5hbWVzIjpbImNsb25lUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIiwibWVyZ2VQYXJ0cyIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyIsInJlcGVhdGVkUGFydEZyb21QYXJ0cyIsInNpbmdsZVBhcnRGcm9tUGFydHMiLCJ0YWlsIiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsIlNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJQYXJ0cyIsIlplcm9Pck1vcmVQYXJ0c1BhcnQiLCJwYXJ0cyIsIm1hcCIsInBhcnQiLCJjbG9uZSIsInBhcnRzQSIsInBhcnRzQiIsInNpbmdsZVBhcnQiLCJwYXJ0c0xlbmd0aCIsImxlbmd0aCIsImZpcnN0UGFydCIsInNlcXVlbmNlT2ZQYXJ0c1BhcnQiLCJ6ZXJvT3JNb3JlUGFydHNQYXJ0IiwicmVwZWF0ZWRQYXJ0IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwiZm9yRWFjaCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7OztJQVNHQSxVQUFVO2VBQVZBLFVBQVU7O0lBdURWQywrQkFBK0I7ZUFBL0JBLCtCQUErQjs7SUFqRC9CQyxVQUFVO2VBQVZBLFVBQVU7O0lBeUNWQywyQkFBMkI7ZUFBM0JBLDJCQUEyQjs7SUFUM0JDLHFCQUFxQjtlQUFyQkEscUJBQXFCOztJQXBCckJDLG1CQUFtQjtlQUFuQkEsbUJBQW1COzs7NEJBekJiLGVBQWU7eUJBQ04sV0FBVztvQkFDaUMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkYsSUFBUUMsSUFBSSxHQUFZQyxVQUFjLGVBQUEsQ0FBOUJELElBQUksRUFBRUUsS0FBSyxHQUFLRCxVQUFjLGVBQUEsQ0FBeEJDLEtBQUssRUFDWEMsbUJBQW1CLEdBQTBC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