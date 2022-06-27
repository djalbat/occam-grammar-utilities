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
    cloneDefinitionParts: function() {
        return cloneDefinitionParts;
    },
    isDefinitionComplex: function() {
        return isDefinitionComplex;
    },
    isDefinitionLeftRecursive: function() {
        return isDefinitionLeftRecursive;
    },
    isDefinitionRecursive: function() {
        return isDefinitionRecursive;
    },
    leftRecursiveRuleNamesFromDefinition: function() {
        return leftRecursiveRuleNamesFromDefinition;
    },
    mergeDefinitionParts: function() {
        return mergeDefinitionParts;
    },
    recursiveRuleNamesFromDefinition: function() {
        return recursiveRuleNamesFromDefinition;
    }
});
var _necessary = require("necessary");
var _parts = require("../utilities/parts");
var _part = require("../utilities/part");
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
var first = _necessary.arrayUtilities.first, tail = _necessary.arrayUtilities.tail;
function cloneDefinitionParts(definition) {
    var clonedParts = definition.getParts();
    clonedParts = (0, _parts.cloneParts)(clonedParts); //
    return clonedParts;
}
function mergeDefinitionParts(definitionA, definitionB) {
    var clonedPartsA = cloneDefinitionParts(definitionA), clonedPartsB = cloneDefinitionParts(definitionB), clonedPartsBTail = tail(clonedPartsB), parts = _toConsumableArray(clonedPartsA).concat(_toConsumableArray(clonedPartsBTail));
    return parts;
}
function isDefinitionComplex(definition) {
    var parts = definition.getParts(), firstPart = first(parts), firstPartComplex = (0, _part.isPartComplex)(firstPart), definitionComplex = firstPartComplex; ///
    return definitionComplex;
}
function isDefinitionRecursive(definition) {
    var recursiveRuleNames = recursiveRuleNamesFromDefinition(definition), recursiveRuleNamesLength = recursiveRuleNames.length, definitionRecursive = recursiveRuleNamesLength > 0;
    return definitionRecursive;
}
function isDefinitionLeftRecursive(definition) {
    var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition), leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length, definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;
    return definitionLeftRecursive;
}
function recursiveRuleNamesFromDefinition(definition) {
    var parts = definition.getParts(), recursiveRuleNames = (0, _parts.recursiveRuleNamesFromParts)(parts);
    return recursiveRuleNames;
}
function leftRecursiveRuleNamesFromDefinition(definition) {
    var parts = definition.getParts(), leftRecursiveRuleNames = (0, _parts.leftRecursiveRuleNamesFromParts)(parts);
    return leftRecursiveRuleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvZGVmaW5pdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgYXJyYXlVdGlsaXRpZXMgfSBmcm9tIFwibmVjZXNzYXJ5XCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc1BhcnRDb21wbGV4IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9wYXJ0XCI7XG5pbXBvcnQgeyByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5cbmNvbnN0IHsgZmlyc3QsIHRhaWwgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVEZWZpbml0aW9uUGFydHMoZGVmaW5pdGlvbikge1xuICBsZXQgY2xvbmVkUGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCk7XG5cbiAgY2xvbmVkUGFydHMgPSBjbG9uZVBhcnRzKGNsb25lZFBhcnRzKTsgIC8vXG5cbiAgcmV0dXJuIGNsb25lZFBhcnRzO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gbWVyZ2VEZWZpbml0aW9uUGFydHMoZGVmaW5pdGlvbkEsIGRlZmluaXRpb25CKSB7XG4gIGNvbnN0IGNsb25lZFBhcnRzQSA9IGNsb25lRGVmaW5pdGlvblBhcnRzKGRlZmluaXRpb25BKSxcbiAgICAgICAgY2xvbmVkUGFydHNCID0gY2xvbmVEZWZpbml0aW9uUGFydHMoZGVmaW5pdGlvbkIpLFxuICAgICAgICBjbG9uZWRQYXJ0c0JUYWlsID0gdGFpbChjbG9uZWRQYXJ0c0IpLFxuICAgICAgICBwYXJ0cyA9IFtcbiAgICAgICAgICAuLi5jbG9uZWRQYXJ0c0EsXG4gICAgICAgICAgLi4uY2xvbmVkUGFydHNCVGFpbFxuICAgICAgICBdO1xuXG4gIHJldHVybiBwYXJ0cztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbikge1xuICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpLFxuICAgICAgICBmaXJzdFBhcnRDb21wbGV4ID0gaXNQYXJ0Q29tcGxleChmaXJzdFBhcnQpLFxuICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGZpcnN0UGFydENvbXBsZXg7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9uQ29tcGxleDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGVmaW5pdGlvblJlY3Vyc2l2ZShkZWZpbml0aW9uKSB7XG4gIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pLFxuICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSByZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICBkZWZpbml0aW9uUmVjdXJzaXZlID0gKHJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBkZWZpbml0aW9uUmVjdXJzaXZlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gIHJldHVybiBkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pIHtcbiAgY29uc3QgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gIGNvbnN0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0cyhwYXJ0cyk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXM7XG59XG4iXSwibmFtZXMiOlsiY2xvbmVEZWZpbml0aW9uUGFydHMiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvblJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIm1lcmdlRGVmaW5pdGlvblBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24iLCJmaXJzdCIsImFycmF5VXRpbGl0aWVzIiwidGFpbCIsImRlZmluaXRpb24iLCJjbG9uZWRQYXJ0cyIsImdldFBhcnRzIiwiY2xvbmVQYXJ0cyIsImRlZmluaXRpb25BIiwiZGVmaW5pdGlvbkIiLCJjbG9uZWRQYXJ0c0EiLCJjbG9uZWRQYXJ0c0IiLCJjbG9uZWRQYXJ0c0JUYWlsIiwicGFydHMiLCJmaXJzdFBhcnQiLCJmaXJzdFBhcnRDb21wbGV4IiwiaXNQYXJ0Q29tcGxleCIsImRlZmluaXRpb25Db21wbGV4IiwicmVjdXJzaXZlUnVsZU5hbWVzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydHMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnRzIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBVUdBLG9CQUFvQjtlQUFwQkEsb0JBQW9COztJQW9CcEJDLG1CQUFtQjtlQUFuQkEsbUJBQW1COztJQWlCbkJDLHlCQUF5QjtlQUF6QkEseUJBQXlCOztJQVJ6QkMscUJBQXFCO2VBQXJCQSxxQkFBcUI7O0lBdUJyQkMsb0NBQW9DO2VBQXBDQSxvQ0FBb0M7O0lBNUNwQ0Msb0JBQW9CO2VBQXBCQSxvQkFBb0I7O0lBcUNwQkMsZ0NBQWdDO2VBQWhDQSxnQ0FBZ0M7Ozt5QkFyRGpCLFdBQVc7cUJBRWYsb0JBQW9CO29CQUNqQixtQkFBbUI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBR2pELElBQVFDLEtBQUssR0FBV0MsVUFBYyxlQUFBLENBQTlCRCxLQUFLLEVBQUVFLElBQUksR0FBS0QsVUFBYyxlQUFBLENBQXZCQyxJQUFJLEFBQW9CO0FBRWhDLFNBQVNULG9CQUFvQixDQUFDVSxVQUFVLEVBQUU7SUFDL0MsSUFBSUMsV0FBVyxHQUFHRCxVQUFVLENBQUNFLFFBQVEsRUFBRSxBQUFDO0lBRXhDRCxXQUFXLEdBQUdFLElBQUFBLE1BQVUsV0FBQSxFQUFDRixXQUFXLENBQUMsQ0FBQyxDQUFFLEVBQUU7SUFFMUMsT0FBT0EsV0FBVyxDQUFDO0NBQ3BCO0FBRU0sU0FBU04sb0JBQW9CLENBQUNTLFdBQVcsRUFBRUMsV0FBVyxFQUFFO0lBQzdELElBQU1DLFlBQVksR0FBR2hCLG9CQUFvQixDQUFDYyxXQUFXLENBQUMsRUFDaERHLFlBQVksR0FBR2pCLG9CQUFvQixDQUFDZSxXQUFXLENBQUMsRUFDaERHLGdCQUFnQixHQUFHVCxJQUFJLENBQUNRLFlBQVksQ0FBQyxFQUNyQ0UsS0FBSyxHQUFHLEFBQ04sbUJBQUdILFlBQVksQ0FBWkEsUUFDSCxtQkFBR0UsZ0JBQWdCLENBQWhCQSxDQUNKLEFBQUM7SUFFUixPQUFPQyxLQUFLLENBQUM7Q0FDZDtBQUVNLFNBQVNsQixtQkFBbUIsQ0FBQ1MsVUFBVSxFQUFFO0lBQzlDLElBQU1TLEtBQUssR0FBR1QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsRUFDN0JRLFNBQVMsR0FBR2IsS0FBSyxDQUFDWSxLQUFLLENBQUMsRUFDeEJFLGdCQUFnQixHQUFHQyxJQUFBQSxLQUFhLGNBQUEsRUFBQ0YsU0FBUyxDQUFDLEVBQzNDRyxpQkFBaUIsR0FBR0YsZ0JBQWdCLEFBQUMsRUFBQyxHQUFHO0lBRS9DLE9BQU9FLGlCQUFpQixDQUFDO0NBQzFCO0FBRU0sU0FBU3BCLHFCQUFxQixDQUFDTyxVQUFVLEVBQUU7SUFDaEQsSUFBTWMsa0JBQWtCLEdBQUdsQixnQ0FBZ0MsQ0FBQ0ksVUFBVSxDQUFDLEVBQ2pFZSx3QkFBd0IsR0FBR0Qsa0JBQWtCLENBQUNFLE1BQU0sRUFDcERDLG1CQUFtQixHQUFJRix3QkFBd0IsR0FBRyxDQUFDLEFBQUMsQUFBQztJQUUzRCxPQUFPRSxtQkFBbUIsQ0FBQztDQUM1QjtBQUVNLFNBQVN6Qix5QkFBeUIsQ0FBQ1EsVUFBVSxFQUFFO0lBQ3BELElBQU1rQixzQkFBc0IsR0FBR3hCLG9DQUFvQyxDQUFDTSxVQUFVLENBQUMsRUFDekVtQiw0QkFBNEIsR0FBR0Qsc0JBQXNCLENBQUNGLE1BQU0sRUFDNURJLHVCQUF1QixHQUFJRCw0QkFBNEIsR0FBRyxDQUFDLEFBQUMsQUFBQztJQUVuRSxPQUFPQyx1QkFBdUIsQ0FBQztDQUNoQztBQUVNLFNBQVN4QixnQ0FBZ0MsQ0FBQ0ksVUFBVSxFQUFFO0lBQzNELElBQU1TLEtBQUssR0FBR1QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsRUFDN0JZLGtCQUFrQixHQUFHTyxJQUFBQSxNQUEyQiw0QkFBQSxFQUFDWixLQUFLLENBQUMsQUFBQztJQUU5RCxPQUFPSyxrQkFBa0IsQ0FBQztDQUMzQjtBQUVNLFNBQVNwQixvQ0FBb0MsQ0FBQ00sVUFBVSxFQUFFO0lBQy9ELElBQU1TLEtBQUssR0FBR1QsVUFBVSxDQUFDRSxRQUFRLEVBQUUsRUFDN0JnQixzQkFBc0IsR0FBR0ksSUFBQUEsTUFBK0IsZ0NBQUEsRUFBQ2IsS0FBSyxDQUFDLEFBQUM7SUFFdEUsT0FBT1Msc0JBQXNCLENBQUM7Q0FDL0IifQ==