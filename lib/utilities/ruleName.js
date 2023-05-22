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
    ruleNameFromReducedRuleName: function() {
        return ruleNameFromReducedRuleName;
    },
    reducedRuleNameFromRuleName: function() {
        return reducedRuleNameFromRuleName;
    },
    directlyReducedRuleNameFromRuleName: function() {
        return directlyReducedRuleNameFromRuleName;
    },
    directlyRepeatedRuleNameFromRuleName: function() {
        return directlyRepeatedRuleNameFromRuleName;
    },
    ruleNameFromIndirectlyRepeatedRuleName: function() {
        return ruleNameFromIndirectlyRepeatedRuleName;
    },
    indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName: function() {
        return indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName;
    }
});
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/(__|_)$/g, "");
    return ruleName;
}
function reducedRuleNameFromRuleName(ruleName) {
    var reducedRuleName = "".concat(ruleName, "_");
    return reducedRuleName;
}
function directlyReducedRuleNameFromRuleName(ruleName) {
    var directlyReducedRuleName = "".concat(ruleName, "_");
    return directlyReducedRuleName;
}
function directlyRepeatedRuleNameFromRuleName(ruleName) {
    var directlyRepeatedRuleName = "".concat(ruleName, "~");
    return directlyRepeatedRuleName;
}
function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
    var ruleName = indirectlyRepeatedRuleName.replace(/^[^~]+~|~$/g, "");
    return ruleName;
}
function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = "".concat(ruleName, "~").concat(leftRecursiveRuleName);
    return indirectlyRepeatedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lLnJlcGxhY2UoLyhfX3xfKSQvZywgXCJcIik7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJlZHVjZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfV9gO1xuXG4gIHJldHVybiByZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfV9gO1xuXG4gIHJldHVybiBkaXJlY3RseVJlZHVjZWRSdWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1+YDtcblxuICByZXR1cm4gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZS5yZXBsYWNlKC9eW15+XSt+fH4kL2csIFwiXCIpO1xuXG4gIHJldHVybiBydWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1+JHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9YDtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWU7XG59XG4iXSwibmFtZXMiOlsicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZUZyb21JbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWUiLCJyZXBsYWNlIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSwyQkFBMkI7ZUFBM0JBOztJQU1BQywyQkFBMkI7ZUFBM0JBOztJQU1BQyxtQ0FBbUM7ZUFBbkNBOztJQU1BQyxvQ0FBb0M7ZUFBcENBOztJQU1BQyxzQ0FBc0M7ZUFBdENBOztJQU1BQyw4REFBOEQ7ZUFBOURBOzs7QUE5QlQsU0FBU0wsNEJBQTRCTSxlQUFlO0lBQ3pELElBQU1DLFdBQVdELGdCQUFnQkUsUUFBUSxZQUFZO0lBRXJELE9BQU9EO0FBQ1Q7QUFFTyxTQUFTTiw0QkFBNEJNLFFBQVE7SUFDbEQsSUFBTUQsa0JBQWtCLEFBQUMsR0FBVyxPQUFUQyxVQUFTO0lBRXBDLE9BQU9EO0FBQ1Q7QUFFTyxTQUFTSixvQ0FBb0NLLFFBQVE7SUFDMUQsSUFBTUUsMEJBQTBCLEFBQUMsR0FBVyxPQUFURixVQUFTO0lBRTVDLE9BQU9FO0FBQ1Q7QUFFTyxTQUFTTixxQ0FBcUNJLFFBQVE7SUFDM0QsSUFBTUcsMkJBQTJCLEFBQUMsR0FBVyxPQUFUSCxVQUFTO0lBRTdDLE9BQU9HO0FBQ1Q7QUFFTyxTQUFTTix1Q0FBdUNPLDBCQUEwQjtJQUMvRSxJQUFNSixXQUFXSSwyQkFBMkJILFFBQVEsZUFBZTtJQUVuRSxPQUFPRDtBQUNUO0FBRU8sU0FBU0YsK0RBQStERSxRQUFRLEVBQUVLLHFCQUFxQjtJQUM1RyxJQUFNRCw2QkFBNkIsQUFBQyxHQUFjQyxPQUFaTCxVQUFTLEtBQXlCLE9BQXRCSztJQUVsRCxPQUFPRDtBQUNUIn0=