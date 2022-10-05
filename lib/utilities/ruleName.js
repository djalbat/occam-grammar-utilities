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
    ruleNameFromRepeatedRuleName: function() {
        return ruleNameFromRepeatedRuleName;
    },
    directlyReducedRuleNameFromRuleName: function() {
        return directlyReducedRuleNameFromRuleName;
    },
    directlyRepeatedRuleNameFromRuleName: function() {
        return directlyRepeatedRuleNameFromRuleName;
    },
    indirectlyReducedRuleNameFromRuleName: function() {
        return indirectlyReducedRuleNameFromRuleName;
    },
    indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName: function() {
        return indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName;
    }
});
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/(__|_)$/g, "");
    return ruleName;
}
function ruleNameFromRepeatedRuleName(repeatedRuleName) {
    var ruleName = repeatedRuleName.replace(/~[^~]+~|~$/, "");
    return ruleName;
}
function directlyReducedRuleNameFromRuleName(ruleName) {
    var directlyReducedRuleName = "".concat(ruleName, "_");
    return directlyReducedRuleName;
}
function directlyRepeatedRuleNameFromRuleName(ruleName) {
    var directlyRepeatedRuleName = "".concat(ruleName, "~");
    return directlyRepeatedRuleName;
}
function indirectlyReducedRuleNameFromRuleName(ruleName) {
    var indirectlyReducedRuleName = "".concat(ruleName, "__");
    return indirectlyReducedRuleName;
}
function indirectlyRepeatedRuleNameFromRuleNameAndLeftRecursiveRuleName(ruleName, leftRecursiveRuleName) {
    var indirectlyRepeatedRuleName = "".concat(ruleName, "~").concat(leftRecursiveRuleName, "~");
    return indirectlyRepeatedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lLnJlcGxhY2UoLyhfX3xfKSQvZywgXCJcIik7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZS5yZXBsYWNlKC9+W15+XSt+fH4kLywgXCJcIik7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1fYDtcblxuICByZXR1cm4gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBkaXJlY3RseVJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lID0gYCR7cnVsZU5hbWV9fmA7XG5cbiAgcmV0dXJuIGRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfV9fYDtcblxuICByZXR1cm4gaW5kaXJlY3RseVJlZHVjZWRSdWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpIHtcbiAgY29uc3QgaW5kaXJlY3RseVJlcGVhdGVkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1+JHtsZWZ0UmVjdXJzaXZlUnVsZU5hbWV9fmA7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZXBlYXRlZFJ1bGVOYW1lO1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lRnJvbVJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lRnJvbVJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZUFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZSIsInJ1bGVOYW1lIiwicmVwbGFjZSIsInJlcGVhdGVkUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZSIsImRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVwZWF0ZWRSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O0lBRWdCQSwyQkFBMkI7ZUFBM0JBOztJQU1BQyw0QkFBNEI7ZUFBNUJBOztJQU1BQyxtQ0FBbUM7ZUFBbkNBOztJQU1BQyxvQ0FBb0M7ZUFBcENBOztJQU1BQyxxQ0FBcUM7ZUFBckNBOztJQU1BQyw4REFBOEQ7ZUFBOURBOzs7QUE5QlQsU0FBU0wsNEJBQTRCTSxlQUFlLEVBQUU7SUFDM0QsSUFBTUMsV0FBV0QsZ0JBQWdCRSxPQUFPLENBQUMsWUFBWTtJQUVyRCxPQUFPRDtBQUNUO0FBRU8sU0FBU04sNkJBQTZCUSxnQkFBZ0IsRUFBRTtJQUM3RCxJQUFNRixXQUFXRSxpQkFBaUJELE9BQU8sQ0FBQyxjQUFjO0lBRXhELE9BQU9EO0FBQ1Q7QUFFTyxTQUFTTCxvQ0FBb0NLLFFBQVEsRUFBRTtJQUM1RCxJQUFNRywwQkFBMEIsQUFBQyxHQUFXLE9BQVRILFVBQVM7SUFFNUMsT0FBT0c7QUFDVDtBQUVPLFNBQVNQLHFDQUFxQ0ksUUFBUSxFQUFFO0lBQzdELElBQU1JLDJCQUEyQixBQUFDLEdBQVcsT0FBVEosVUFBUztJQUU3QyxPQUFPSTtBQUNUO0FBRU8sU0FBU1Asc0NBQXNDRyxRQUFRLEVBQUU7SUFDOUQsSUFBTUssNEJBQTRCLEFBQUMsR0FBVyxPQUFUTCxVQUFTO0lBRTlDLE9BQU9LO0FBQ1Q7QUFFTyxTQUFTUCwrREFBK0RFLFFBQVEsRUFBRU0scUJBQXFCLEVBQUU7SUFDOUcsSUFBTUMsNkJBQTZCLEFBQUMsR0FBY0QsT0FBWk4sVUFBUyxLQUF5QixPQUF0Qk0sdUJBQXNCO0lBRXhFLE9BQU9DO0FBQ1QifQ==