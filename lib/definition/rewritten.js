"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = void 0;
var _occamParsers = require("occam-parsers");
var _parts = require("../utilities/parts");
var _definition = require("../utilities/definition");
var _ruleName = require("../utilities/ruleName");
var _part = require("../utilities/part");
function _assertThisInitialized(self) {
    if (self === void 0) {
        throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    return self;
}
function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
        throw new TypeError("Super expression must either be null or a function");
    }
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
        return call;
    }
    return _assertThisInitialized(self);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
var _typeof = function(obj) {
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
var RewrittenDefinition = /*#__PURE__*/ function(Definition) {
    _inherits(RewrittenDefinition, Definition);
    function RewrittenDefinition() {
        _classCallCheck(this, RewrittenDefinition);
        return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenDefinition).apply(this, arguments));
    }
    _createClass(RewrittenDefinition, null, [
        {
            key: "fromDefinitionAndLeftRecursiveRuleName",
            value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
                var parts = definition.getParts();
                parts = (0, _parts).cloneParts(parts); ///
                parts.shift(); ///
                var definitionLookAhead = (0, _definition).isDefinitionLookAhead(definition), lookAhead = definitionLookAhead, repeatedRuleName = (0, _ruleName).repeatedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleName = (0, _ruleName).reducedRuleNameFromRuleName(leftRecursiveRuleName), zeroOrMoreRepeatedRuleNamePart = (0, _part).zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName), reducedLeftRecursiveRuleNamePart = (0, _part).ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead), rewrittenDefinition = new RewrittenDefinition(parts);
                parts.unshift(reducedLeftRecursiveRuleNamePart);
                parts.push(zeroOrMoreRepeatedRuleNamePart);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJEZWZpbml0aW9uIiwiY2xvbmVQYXJ0cyIsImlzRGVmaW5pdGlvbkxvb2tBaGVhZCIsInJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJyZWR1Y2VkUnVsZU5hbWVGcm9tUnVsZU5hbWUiLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwibG9va0FoZWFkIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJ1bnNoaWZ0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkNBQUEsVUFBWTs7Ozs7QUFFZSxHQUFlLENBQWYsYUFBZTtBQUVmLEdBQW9CLENBQXBCLE1BQW9CO0FBQ1QsR0FBeUIsQ0FBekIsV0FBeUI7QUFDVyxHQUF1QixDQUF2QixTQUF1QjtBQUNoQixHQUFtQixDQUFuQixLQUFtQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztJQUUvRSxtQkFBbUIsaUJBQXpCLFFBQVE7Y0FBRixtQkFBbUI7YUFBbkIsbUJBQW1COzhCQUFuQixtQkFBbUI7Z0VBQW5CLG1CQUFtQjs7aUJBQW5CLG1CQUFtQjs7WUFDL0IsR0FBc0MsR0FBdEMsc0NBQXNDO21CQUE3QyxRQUFRLENBQUQsc0NBQXNDLENBQUMsVUFBVSxFQUFFLHFCQUFxQixFQUFFLENBQUM7Z0JBQ2hGLEdBQUcsQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFDLFFBQVE7Z0JBRS9CLEtBQUssT0FUa0IsTUFBb0IsYUFTeEIsS0FBSyxFQUFJLENBQUcsQUFBSCxFQUFHLEFBQUgsQ0FBRztnQkFFL0IsS0FBSyxDQUFDLEtBQUssR0FBSyxDQUFHLEFBQUgsRUFBRyxBQUFILENBQUc7Z0JBRW5CLEdBQUssQ0FBQyxtQkFBbUIsT0FaUyxXQUF5Qix3QkFZVCxVQUFVLEdBQ3RELFNBQVMsR0FBRyxtQkFBbUIsRUFDL0IsZ0JBQWdCLE9BYmdELFNBQXVCLCtCQWF2QyxxQkFBcUIsR0FDckUsNEJBQTRCLE9BZG9DLFNBQXVCLDhCQWM1QixxQkFBcUIsR0FDaEYsOEJBQThCLE9BZHlDLEtBQW1CLHlDQWNsQixnQkFBZ0IsR0FDeEYsZ0NBQWdDLE9BZnVDLEtBQW1CLDJCQWU5Qiw0QkFBNEIsRUFBRSxTQUFTLEdBQ25HLG1CQUFtQixHQUFHLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxLQUFLO2dCQUV6RCxLQUFLLENBQUMsT0FBTyxDQUFDLGdDQUFnQztnQkFFOUMsS0FBSyxDQUFDLElBQUksQ0FBQyw4QkFBOEI7Z0JBRXpDLE1BQU0sQ0FBQyxtQkFBbUI7WUFDNUIsQ0FBQzs7O1dBckJrQixtQkFBbUI7RUFQYixhQUFlO2tCQU9yQixtQkFBbUIifQ==