"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get ruleNamePartFromRuleName () {
        return ruleNamePartFromRuleName;
    },
    get zeroOrMorePartsPartFromPart () {
        return zeroOrMorePartsPartFromPart;
    }
});
var _occamparsers = require("occam-parsers");
var RuleNamePart = _occamparsers.Parts.RuleNamePart, ZeroOrMorePartsPart = _occamparsers.Parts.ZeroOrMorePartsPart;
function ruleNamePartFromRuleName(ruleName) {
    var ruleNamePart = RuleNamePart.fromRuleName(ruleName);
    return ruleNamePart;
}
function zeroOrMorePartsPartFromPart(part) {
    var zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);
    return zeroOrMorePartsPart;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgUGFydHMgfSBmcm9tIFwib2NjYW0tcGFyc2Vyc1wiO1xuXG5jb25zdCB7IFJ1bGVOYW1lUGFydCwgWmVyb09yTW9yZVBhcnRzUGFydCB9ID0gUGFydHM7XG5cbmV4cG9ydCBmdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpIHtcbiAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gUnVsZU5hbWVQYXJ0LmZyb21SdWxlTmFtZShydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lUGFydDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydChwYXJ0KSB7XG4gIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBaZXJvT3JNb3JlUGFydHNQYXJ0LmZyb21QYXJ0KHBhcnQpO1xuXG4gIHJldHVybiB6ZXJvT3JNb3JlUGFydHNQYXJ0O1xufVxuIl0sIm5hbWVzIjpbInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVQYXJ0c1BhcnRGcm9tUGFydCIsIlJ1bGVOYW1lUGFydCIsIlBhcnRzIiwiWmVyb09yTW9yZVBhcnRzUGFydCIsInJ1bGVOYW1lIiwicnVsZU5hbWVQYXJ0IiwiZnJvbVJ1bGVOYW1lIiwicGFydCIsInplcm9Pck1vcmVQYXJ0c1BhcnQiLCJmcm9tUGFydCJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7O1FBTWdCQTtlQUFBQTs7UUFNQUM7ZUFBQUE7Ozs0QkFWTTtBQUV0QixJQUFRQyxlQUFzQ0MsbUJBQUssQ0FBM0NELGNBQWNFLHNCQUF3QkQsbUJBQUssQ0FBN0JDO0FBRWYsU0FBU0oseUJBQXlCSyxRQUFRO0lBQy9DLElBQU1DLGVBQWVKLGFBQWFLLFlBQVksQ0FBQ0Y7SUFFL0MsT0FBT0M7QUFDVDtBQUVPLFNBQVNMLDRCQUE0Qk8sSUFBSTtJQUM5QyxJQUFNQyxzQkFBc0JMLG9CQUFvQk0sUUFBUSxDQUFDRjtJQUV6RCxPQUFPQztBQUNUIn0=