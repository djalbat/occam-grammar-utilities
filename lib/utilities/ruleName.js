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
    repeatedRuleNameFromRuleName: function() {
        return repeatedRuleNameFromRuleName;
    },
    directlyReducedRuleNameFromRuleName: function() {
        return directlyReducedRuleNameFromRuleName;
    },
    indirectlyReducedRuleNameFromRuleName: function() {
        return indirectlyReducedRuleNameFromRuleName;
    }
});
function ruleNameFromReducedRuleName(reducedRuleName) {
    var ruleName = reducedRuleName.replace(/(__|_)$/g, "");
    return ruleName;
}
function ruleNameFromRepeatedRuleName(repeatedRuleName) {
    var ruleName = repeatedRuleName.replace(/~$/, "");
    return ruleName;
}
function repeatedRuleNameFromRuleName(ruleName) {
    var repeatedRuleName = "".concat(ruleName, "~");
    return repeatedRuleName;
}
function directlyReducedRuleNameFromRuleName(ruleName) {
    var directlyReducedRuleName = "".concat(ruleName, "_");
    return directlyReducedRuleName;
}
function indirectlyReducedRuleNameFromRuleName(ruleName) {
    var indirectlyReducedRuleName = "".concat(ruleName, "__");
    return indirectlyReducedRuleName;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcnVsZU5hbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZUZyb21SZWR1Y2VkUnVsZU5hbWUocmVkdWNlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lLnJlcGxhY2UoLyhfX3xfKSQvZywgXCJcIik7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZShyZXBlYXRlZFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVOYW1lID0gcmVwZWF0ZWRSdWxlTmFtZS5yZXBsYWNlKC9+JC8sIFwiXCIpO1xuXG4gIHJldHVybiBydWxlTmFtZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcmVwZWF0ZWRSdWxlTmFtZSA9IGAke3J1bGVOYW1lfX5gO1xuXG4gIHJldHVybiByZXBlYXRlZFJ1bGVOYW1lO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1fYDtcblxuICByZXR1cm4gZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWU7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSB7XG4gIGNvbnN0IGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUgPSBgJHtydWxlTmFtZX1fX2A7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWU7XG59XG4iXSwibmFtZXMiOlsicnVsZU5hbWVGcm9tUmVkdWNlZFJ1bGVOYW1lIiwicnVsZU5hbWVGcm9tUmVwZWF0ZWRSdWxlTmFtZSIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJkaXJlY3RseVJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsImluZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWUiLCJydWxlTmFtZSIsInJlcGxhY2UiLCJyZXBlYXRlZFJ1bGVOYW1lIiwiZGlyZWN0bHlSZWR1Y2VkUnVsZU5hbWUiLCJpbmRpcmVjdGx5UmVkdWNlZFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7Ozs7O0lBRUdBLDJCQUEyQjtlQUEzQkEsMkJBQTJCOztJQU0zQkMsNEJBQTRCO2VBQTVCQSw0QkFBNEI7O0lBTTVCQyw0QkFBNEI7ZUFBNUJBLDRCQUE0Qjs7SUFNNUJDLG1DQUFtQztlQUFuQ0EsbUNBQW1DOztJQU1uQ0MscUNBQXFDO2VBQXJDQSxxQ0FBcUM7OztBQXhCOUMsU0FBU0osMkJBQTJCLENBQUNLLGVBQWUsRUFBRTtJQUMzRCxJQUFNQyxRQUFRLEdBQUdELGVBQWUsQ0FBQ0UsT0FBTyxhQUFhLEVBQUUsQ0FBQyxBQUFDO0lBRXpELE9BQU9ELFFBQVEsQ0FBQztDQUNqQjtBQUVNLFNBQVNMLDRCQUE0QixDQUFDTyxnQkFBZ0IsRUFBRTtJQUM3RCxJQUFNRixRQUFRLEdBQUdFLGdCQUFnQixDQUFDRCxPQUFPLE9BQU8sRUFBRSxDQUFDLEFBQUM7SUFFcEQsT0FBT0QsUUFBUSxDQUFDO0NBQ2pCO0FBRU0sU0FBU0osNEJBQTRCLENBQUNJLFFBQVEsRUFBRTtJQUNyRCxJQUFNRSxnQkFBZ0IsR0FBRyxBQUFDLEVBQUEsQ0FBVyxNQUFDLENBQVZGLFFBQVEsRUFBQyxHQUFDLENBQUMsQUFBQztJQUV4QyxPQUFPRSxnQkFBZ0IsQ0FBQztDQUN6QjtBQUVNLFNBQVNMLG1DQUFtQyxDQUFDRyxRQUFRLEVBQUU7SUFDNUQsSUFBTUcsdUJBQXVCLEdBQUcsQUFBQyxFQUFBLENBQVcsTUFBQyxDQUFWSCxRQUFRLEVBQUMsR0FBQyxDQUFDLEFBQUM7SUFFL0MsT0FBT0csdUJBQXVCLENBQUM7Q0FDaEM7QUFFTSxTQUFTTCxxQ0FBcUMsQ0FBQ0UsUUFBUSxFQUFFO0lBQzlELElBQU1JLHlCQUF5QixHQUFHLEFBQUMsRUFBQSxDQUFXLE1BQUUsQ0FBWEosUUFBUSxFQUFDLElBQUUsQ0FBQyxBQUFDO0lBRWxELE9BQU9JLHlCQUF5QixDQUFDO0NBQ2xDIn0=