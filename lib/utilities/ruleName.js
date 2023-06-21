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
    ruleNameFromIndirectlyRepeatedRuleName: function() {
        return ruleNameFromIndirectlyRepeatedRuleName;
    },
    reducedRuleNameFromRuleName: function() {
        return reducedRuleNameFromRuleName;
    },
    directlyRepeatedRuleNameFromRuleName: function() {
        return directlyRepeatedRuleNameFromRuleName;
    },
    indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName: function() {
        return indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName;
    }
});
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/(__|_)$/g, "");
    return ruleName;
}
function ruleNameFromIndirectlyRepeatedRuleName(indirectlyRepeatedRuleName) {
    var ruleName = indirectlyRepeatedRuleName.replace(/^[^~]+~|~$/g, "");
    return ruleName;
}
function reducedRuleNameFromRuleName(ruleName) {
    var reducedRuleName = "".concat(ruleName, "_");
    return reducedRuleName;
}
function directlyRepeatedRuleNameFromRuleName(ruleName) {
    var directlyRepeatedRuleName = "".concat(ruleName, "~");
    return directlyRepeatedRuleName;
}
function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = "".concat(ruleName, "~").concat(leftRecursiveRuleName);
    return indirectlyRepeatedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lLnJlcGxhY2UoLyhfX3xfKSQvZywgXCJcIik7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tSW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUoaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZS5yZXBsYWNlKC9eW15+XSt+fH4kL2csIFwiXCIpO1xuXG4gIHJldHVybiBydWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCByZWR1Y2VkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1fYDtcblxuICByZXR1cm4gcmVkdWNlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfX5gO1xuXG4gIHJldHVybiBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gYCR7cnVsZU5hbWV9fiR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfWA7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbUluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lIiwicmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWVBbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJlcGxhY2UiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSwyQkFBMkI7ZUFBM0JBOztJQU1BQyxzQ0FBc0M7ZUFBdENBOztJQU1BQywyQkFBMkI7ZUFBM0JBOztJQU1BQyxvQ0FBb0M7ZUFBcENBOztJQU1BQyw4REFBOEQ7ZUFBOURBOzs7QUF4QlQsU0FBU0osNEJBQTRCSyxlQUFlO0lBQ3pELElBQU1DLFdBQVdELGdCQUFnQkUsT0FBTyxDQUFDLFlBQVk7SUFFckQsT0FBT0Q7QUFDVDtBQUVPLFNBQVNMLHVDQUF1Q08sMEJBQTBCO0lBQy9FLElBQU1GLFdBQVdFLDJCQUEyQkQsT0FBTyxDQUFDLGVBQWU7SUFFbkUsT0FBT0Q7QUFDVDtBQUVPLFNBQVNKLDRCQUE0QkksUUFBUTtJQUNsRCxJQUFNRCxrQkFBa0IsQUFBQyxHQUFXLE9BQVRDLFVBQVM7SUFFcEMsT0FBT0Q7QUFDVDtBQUVPLFNBQVNGLHFDQUFxQ0csUUFBUTtJQUMzRCxJQUFNRywyQkFBMkIsQUFBQyxHQUFXLE9BQVRILFVBQVM7SUFFN0MsT0FBT0c7QUFDVDtBQUVPLFNBQVNMLCtEQUErREUsUUFBUSxFQUFFSSxxQkFBcUI7SUFDNUcsSUFBTUYsNkJBQTZCLEFBQUMsR0FBY0UsT0FBWkosVUFBUyxLQUF5QixPQUF0Qkk7SUFFbEQsT0FBT0Y7QUFDVCJ9