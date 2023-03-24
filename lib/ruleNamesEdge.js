"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleNamesEdge;
    }
});
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
var RuleNamesEdge = /*#__PURE__*/ function() {
    function RuleNamesEdge(sourceRuleName, targetRuleName) {
        _classCallCheck(this, RuleNamesEdge);
        this.sourceRuleName = sourceRuleName;
        this.targetRuleName = targetRuleName;
    }
    _createClass(RuleNamesEdge, [
        {
            key: "getSourceRuleName",
            value: function getSourceRuleName() {
                return this.sourceRuleName;
            }
        },
        {
            key: "getTargetRuleName",
            value: function getTargetRuleName() {
                return this.targetRuleName;
            }
        },
        {
            key: "match",
            value: function match(sourceRuleName, targetRuleName) {
                var matches = this.sourceRuleName === sourceRuleName && this.targetRuleName === targetRuleName;
                return matches;
            }
        }
    ], [
        {
            key: "fromSourceRuleNameAndTargetRuleName",
            value: function fromSourceRuleNameAndTargetRuleName(sourceRuleName, targetRuleName) {
                var ruleNamesEdge = new RuleNamesEdge(sourceRuleName, targetRuleName);
                return ruleNamesEdge;
            }
        }
    ]);
    return RuleNamesEdge;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlTmFtZXNFZGdlLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlTmFtZXNFZGdlIHtcbiAgY29uc3RydWN0b3Ioc291cmNlUnVsZU5hbWUsIHRhcmdldFJ1bGVOYW1lKSB7XG4gICAgdGhpcy5zb3VyY2VSdWxlTmFtZSA9IHNvdXJjZVJ1bGVOYW1lO1xuICAgIHRoaXMudGFyZ2V0UnVsZU5hbWUgPSB0YXJnZXRSdWxlTmFtZTtcbiAgfVxuXG4gIGdldFNvdXJjZVJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnNvdXJjZVJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0VGFyZ2V0UnVsZU5hbWUoKSB7XG4gICAgcmV0dXJuIHRoaXMudGFyZ2V0UnVsZU5hbWU7XG4gIH1cblxuICBtYXRjaChzb3VyY2VSdWxlTmFtZSwgdGFyZ2V0UnVsZU5hbWUpIHtcbiAgICBjb25zdCBtYXRjaGVzID0gKCh0aGlzLnNvdXJjZVJ1bGVOYW1lID09PSBzb3VyY2VSdWxlTmFtZSkgJiYgKHRoaXMudGFyZ2V0UnVsZU5hbWUgPT09IHRhcmdldFJ1bGVOYW1lKSk7XG5cbiAgICByZXR1cm4gbWF0Y2hlcztcbiAgfVxuXG4gIHN0YXRpYyBmcm9tU291cmNlUnVsZU5hbWVBbmRUYXJnZXRSdWxlTmFtZShzb3VyY2VSdWxlTmFtZSwgdGFyZ2V0UnVsZU5hbWUpIHtcbiAgICBjb25zdCBydWxlTmFtZXNFZGdlID0gbmV3IFJ1bGVOYW1lc0VkZ2Uoc291cmNlUnVsZU5hbWUsIHRhcmdldFJ1bGVOYW1lKTtcblxuICAgIHJldHVybiBydWxlTmFtZXNFZGdlO1xuICB9XG59XG4iLCJSZWFjdC5jcmVhdGVFbGVtZW50Il0sIm5hbWVzIjpbIlJ1bGVOYW1lc0VkZ2UiLCJzb3VyY2VSdWxlTmFtZSIsInRhcmdldFJ1bGVOYW1lIiwiZ2V0U291cmNlUnVsZU5hbWUiLCJnZXRUYXJnZXRSdWxlTmFtZSIsIm1hdGNoIiwibWF0Y2hlcyIsImZyb21Tb3VyY2VSdWxlTmFtZUFuZFRhcmdldFJ1bGVOYW1lIiwicnVsZU5hbWVzRWRnZSJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7ZUFFcUJBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU4sSUFBQSxBQUFNQSw4QkFBTjthQUFNQSxjQUNQQyxjQUFjLEVBQUVDLGNBQWM7OEJBRHZCRjtRQUVqQixJQUFJLENBQUNDLGNBQWMsR0FBR0E7UUFDdEIsSUFBSSxDQUFDQyxjQUFjLEdBQUdBOztpQkFITEY7O1lBTW5CRyxLQUFBQTttQkFBQUEsU0FBQUEsb0JBQW9CO2dCQUNsQixPQUFPLElBQUksQ0FBQ0YsY0FBYztZQUM1Qjs7O1lBRUFHLEtBQUFBO21CQUFBQSxTQUFBQSxvQkFBb0I7Z0JBQ2xCLE9BQU8sSUFBSSxDQUFDRixjQUFjO1lBQzVCOzs7WUFFQUcsS0FBQUE7bUJBQUFBLFNBQUFBLE1BQU1KLGNBQWMsRUFBRUMsY0FBYyxFQUFFO2dCQUNwQyxJQUFNSSxVQUFXLEFBQUMsSUFBSSxDQUFDTCxjQUFjLEtBQUtBLGtCQUFvQixJQUFJLENBQUNDLGNBQWMsS0FBS0E7Z0JBRXRGLE9BQU9JO1lBQ1Q7Ozs7WUFFT0MsS0FBQUE7bUJBQVAsU0FBT0Esb0NBQW9DTixjQUFjLEVBQUVDLGNBQWMsRUFBRTtnQkFDekUsSUFBTU0sZ0JBQWdCLElBckJMUixjQXFCdUJDLGdCQUFnQkM7Z0JBRXhELE9BQU9NO1lBQ1Q7OztXQXhCbUJSIn0=