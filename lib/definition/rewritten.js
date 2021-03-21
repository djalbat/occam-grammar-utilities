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
var RewrittenDefinition = function(Definition) {
    _inherits(RewrittenDefinition, _occamParsers.Definition);
    function RewrittenDefinition() {
        _classCallCheck(this, RewrittenDefinition);
        return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenDefinition).apply(this, arguments));
    }
    _createClass(RewrittenDefinition, null, [
        {
            key: "fromDefinitionAndLeftRecursiveRuleName",
            value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
                var parts = definition.getParts();
                parts = _parts.cloneParts(parts); ///
                parts.shift(); ///
                var definitionLookAhead = _definition.isDefinitionLookAhead(definition), lookAhead = definitionLookAhead, repeatedRuleName = _ruleName.repeatedRuleNameFromRuleName(leftRecursiveRuleName), reducedLeftRecursiveRuleName = _ruleName.reducedRuleNameFromRuleName(leftRecursiveRuleName), zeroOrMoreRepeatedRuleNamePart = _part.zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName), reducedLeftRecursiveRuleNamePart = _part.ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead), rewrittenDefinition = new RewrittenDefinition(parts);
                parts.unshift(reducedLeftRecursiveRuleNamePart);
                parts.push(zeroOrMoreRepeatedRuleNamePart);
                return rewrittenDefinition;
            }
        }
    ]);
    return RewrittenDefinition;
}(_occamParsers.Definition);
exports.default = RewrittenDefinition;

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9kZWZpbml0aW9uL3Jld3JpdHRlbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IHsgRGVmaW5pdGlvbiB9IGZyb20gXCJvY2NhbS1wYXJzZXJzXCI7XG5cbmltcG9ydCB7IGNsb25lUGFydHMgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRzXCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25Mb29rQWhlYWQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcbmltcG9ydCB7IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUsIHJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSB9IGZyb20gXCIuLi91dGlsaXRpZXMvcnVsZU5hbWVcIjtcbmltcG9ydCB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSwgemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL3BhcnRcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBkZWZpbml0aW9uTG9va0FoZWFkLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcGFydHMudW5zaGlmdChyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJDQUFBLFVBQUE7Ozs7O0lBRUEsYUFBQTtJQUVBLE1BQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLEtBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFQSxtQkFBQSxZQUFBLFVBQUE7Y0FBQSxtQkFBQSxFQVBBLGFBQUE7YUFPQSxtQkFBQTs4QkFBQSxtQkFBQTtnRUFBQSxtQkFBQTs7aUJBQUEsbUJBQUE7O0FBQ0EsZUFBQSxHQUFBLHNDQUFBOzRCQUFBLHNDQUFBLENBQUEsVUFBQSxFQUFBLHFCQUFBO29CQUNBLEtBQUEsR0FBQSxVQUFBLENBQUEsUUFBQTtBQUVBLHFCQUFBLEdBVEEsTUFBQSxZQVNBLEtBQUEsRUFBQSxDQUFBLEVBQUEsQ0FBQTtBQUVBLHFCQUFBLENBQUEsS0FBQSxHQUFBLENBQUEsRUFBQSxDQUFBO29CQUVBLG1CQUFBLEdBWkEsV0FBQSx1QkFZQSxVQUFBLEdBQ0EsU0FBQSxHQUFBLG1CQUFBLEVBQ0EsZ0JBQUEsR0FiQSxTQUFBLDhCQWFBLHFCQUFBLEdBQ0EsNEJBQUEsR0FkQSxTQUFBLDZCQWNBLHFCQUFBLEdBQ0EsOEJBQUEsR0FkQSxLQUFBLHdDQWNBLGdCQUFBLEdBQ0EsZ0NBQUEsR0FmQSxLQUFBLDBCQWVBLDRCQUFBLEVBQUEsU0FBQSxHQUNBLG1CQUFBLE9BQUEsbUJBQUEsQ0FBQSxLQUFBO0FBRUEscUJBQUEsQ0FBQSxPQUFBLENBQUEsZ0NBQUE7QUFFQSxxQkFBQSxDQUFBLElBQUEsQ0FBQSw4QkFBQTt1QkFFQSxtQkFBQTs7OztXQXBCQSxtQkFBQTtFQVBBLGFBQUE7a0JBT0EsbUJBQUEifQ==