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
    default: function() {
        return _default;
    },
    parserFromRules: function() {
        return parserFromRules;
    },
    parserFromRulesAndStartRuleName: function() {
        return parserFromRulesAndStartRuleName;
    }
});
var _occamParsers = require("occam-parsers");
var _eliminateLeftRecursion = /*#__PURE__*/ _interopRequireDefault(require("../eliminateLeftRecursion"));
var _rules = require("../utilities/rules");
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
var ruleMapFromRules = _occamParsers.rulesUtilities.ruleMapFromRules, startRuleFromRules = _occamParsers.rulesUtilities.startRuleFromRules;
function parserFromRules(Class, rules) {
    var ruleMap = ruleMapFromRules(rules), startRule = startRuleFromRules(rules);
    (0, _eliminateLeftRecursion.default)(startRule, ruleMap);
    var parser = new Class(startRule, ruleMap);
    return parser;
}
function parserFromRulesAndStartRuleName(Class, rules, startRuleName) {
    var ruleMap = ruleMapFromRules(rules), startRule = (0, _rules.startRuleFromRulesAndStartRuleName)(rules, startRuleName);
    (0, _eliminateLeftRecursion.default)(startRule, ruleMap);
    var parser = new Class(startRule, ruleMap);
    return parser;
}
var _default = {
    parserFromRules: parserFromRules,
    parserFromRulesAndStartRuleName: parserFromRulesAndStartRuleName
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvcGFyc2VyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBydWxlc1V0aWxpdGllcyB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uICBmcm9tIFwiLi4vZWxpbWluYXRlTGVmdFJlY3Vyc2lvblwiO1xuXG5pbXBvcnQgeyBzdGFydFJ1bGVGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9ydWxlc1wiO1xuXG5jb25zdCB7IHJ1bGVNYXBGcm9tUnVsZXMsIHN0YXJ0UnVsZUZyb21SdWxlcyB9ID0gcnVsZXNVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBwYXJzZXJGcm9tUnVsZXMoQ2xhc3MsIHJ1bGVzKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzKHJ1bGVzKTtcblxuICBlbGltaW5hdGVMZWZ0UmVjdXJzaW9uKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgY29uc3QgcGFyc2VyID0gbmV3IENsYXNzKHN0YXJ0UnVsZSwgcnVsZU1hcCk7XG5cbiAgcmV0dXJuIHBhcnNlcjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUoQ2xhc3MsIHJ1bGVzLCBzdGFydFJ1bGVOYW1lKSB7XG4gIGNvbnN0IHJ1bGVNYXAgPSBydWxlTWFwRnJvbVJ1bGVzKHJ1bGVzKSxcbiAgICAgICAgc3RhcnRSdWxlID0gc3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZShydWxlcywgc3RhcnRSdWxlTmFtZSk7XG5cbiAgZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIGNvbnN0IHBhcnNlciA9IG5ldyBDbGFzcyhzdGFydFJ1bGUsIHJ1bGVNYXApO1xuXG4gIHJldHVybiBwYXJzZXI7XG59XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgcGFyc2VyRnJvbVJ1bGVzLFxuICBwYXJzZXJGcm9tUnVsZXNBbmRTdGFydFJ1bGVOYW1lXG59O1xuIl0sIm5hbWVzIjpbInBhcnNlckZyb21SdWxlcyIsInBhcnNlckZyb21SdWxlc0FuZFN0YXJ0UnVsZU5hbWUiLCJydWxlTWFwRnJvbVJ1bGVzIiwicnVsZXNVdGlsaXRpZXMiLCJzdGFydFJ1bGVGcm9tUnVsZXMiLCJDbGFzcyIsInJ1bGVzIiwicnVsZU1hcCIsInN0YXJ0UnVsZSIsImVsaW1pbmF0ZUxlZnRSZWN1cnNpb24iLCJwYXJzZXIiLCJzdGFydFJ1bGVOYW1lIiwic3RhcnRSdWxlRnJvbVJ1bGVzQW5kU3RhcnRSdWxlTmFtZSJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7Ozs7Ozs7OztJQVVHQSxlQUFlO2VBQWZBLGVBQWU7O0lBV2ZDLCtCQUErQjtlQUEvQkEsK0JBQStCOzs7NEJBbkJoQixlQUFlOzJFQUVWLDJCQUEyQjtxQkFFWixvQkFBb0I7Ozs7OztBQUV2RSxJQUFRQyxnQkFBZ0IsR0FBeUJDLGFBQWMsZUFBQSxDQUF2REQsZ0JBQWdCLEVBQUVFLGtCQUFrQixHQUFLRCxhQUFjLGVBQUEsQ0FBckNDLGtCQUFrQixBQUFvQjtBQUV6RCxTQUFTSixlQUFlLENBQUNLLEtBQUssRUFBRUMsS0FBSyxFQUFFO0lBQzVDLElBQU1DLE9BQU8sR0FBR0wsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQyxFQUNqQ0UsU0FBUyxHQUFHSixrQkFBa0IsQ0FBQ0UsS0FBSyxDQUFDLEFBQUM7SUFFNUNHLElBQUFBLHVCQUFzQixRQUFBLEVBQUNELFNBQVMsRUFBRUQsT0FBTyxDQUFDLENBQUM7SUFFM0MsSUFBTUcsTUFBTSxHQUFHLElBQUlMLEtBQUssQ0FBQ0csU0FBUyxFQUFFRCxPQUFPLENBQUMsQUFBQztJQUU3QyxPQUFPRyxNQUFNLENBQUM7Q0FDZjtBQUVNLFNBQVNULCtCQUErQixDQUFDSSxLQUFLLEVBQUVDLEtBQUssRUFBRUssYUFBYSxFQUFFO0lBQzNFLElBQU1KLE9BQU8sR0FBR0wsZ0JBQWdCLENBQUNJLEtBQUssQ0FBQyxFQUNqQ0UsU0FBUyxHQUFHSSxJQUFBQSxNQUFrQyxtQ0FBQSxFQUFDTixLQUFLLEVBQUVLLGFBQWEsQ0FBQyxBQUFDO0lBRTNFRixJQUFBQSx1QkFBc0IsUUFBQSxFQUFDRCxTQUFTLEVBQUVELE9BQU8sQ0FBQyxDQUFDO0lBRTNDLElBQU1HLE1BQU0sR0FBRyxJQUFJTCxLQUFLLENBQUNHLFNBQVMsRUFBRUQsT0FBTyxDQUFDLEFBQUM7SUFFN0MsT0FBT0csTUFBTSxDQUFDO0NBQ2Y7ZUFFYztJQUNiVixlQUFlLEVBQWZBLGVBQWU7SUFDZkMsK0JBQStCLEVBQS9CQSwrQkFBK0I7Q0FDaEMifQ==