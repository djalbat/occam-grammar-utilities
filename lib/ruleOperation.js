"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    enumerable: true,
    get: function() {
        return RuleOperation;
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
var RuleOperation = /*#__PURE__*/ function() {
    function RuleOperation(rule) {
        _classCallCheck(this, RuleOperation);
        this.rule = rule;
    }
    _createClass(RuleOperation, [
        {
            key: "getRule",
            value: function getRule() {
                return this.rule;
            }
        },
        {
            key: "isEqualTo",
            value: function isEqualTo(ruleOperation) {
                var equalTo = false;
                var constructor = this.constructor, operationIndirectlyReduceRuleOperation = _instanceof(ruleOperation, constructor);
                if (operationIndirectlyReduceRuleOperation) {
                    var comparesTo = this.compare(ruleOperation);
                    equalTo = comparesTo; ///
                }
                return equalTo;
            }
        },
        {
            key: "execute",
            value: function execute(context) {
                var ruleOperations = context.ruleOperations;
                var ruleOperation = this.find(context);
                if (ruleOperation === null) {
                    ruleOperation = this; ///
                    ruleOperations.push(ruleOperation);
                    ruleOperation.apply(context);
                }
                var result = ruleOperation.retrieve(context);
                return result;
            }
        },
        {
            key: "find",
            value: function find(context) {
                var _this = this;
                var ruleOperations = context.ruleOperations, ruleOperation = ruleOperations.find(function(ruleOperation) {
                    var equalTo = _this.isEqualTo(ruleOperation);
                    if (equalTo) {
                        return true;
                    }
                }) || null;
                return ruleOperation;
            }
        }
    ]);
    return RuleOperation;
}();

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9ydWxlT3BlcmF0aW9uLmpzIiwiPDxqc3gtY29uZmlnLXByYWdtYS5qcz4+Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSdWxlT3BlcmF0aW9uIHtcbiAgY29uc3RydWN0b3IocnVsZSkge1xuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gIH1cblxuICBnZXRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGU7XG4gIH1cblxuICBpc0VxdWFsVG8ocnVsZU9wZXJhdGlvbikge1xuICAgIGxldCBlcXVhbFRvID0gZmFsc2U7XG5cbiAgICBjb25zdCB7IGNvbnN0cnVjdG9yIH0gPSB0aGlzLFxuICAgICAgICAgIG9wZXJhdGlvbkluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uID0gKHJ1bGVPcGVyYXRpb24gaW5zdGFuY2VvZiBjb25zdHJ1Y3Rvcik7XG5cbiAgICBpZiAob3BlcmF0aW9uSW5kaXJlY3RseVJlZHVjZVJ1bGVPcGVyYXRpb24pIHtcbiAgICAgIGNvbnN0IGNvbXBhcmVzVG8gPSB0aGlzLmNvbXBhcmUocnVsZU9wZXJhdGlvbik7XG5cbiAgICAgIGVxdWFsVG8gPSBjb21wYXJlc1RvOyAvLy9cbiAgICB9XG5cbiAgICByZXR1cm4gZXF1YWxUbztcbiAgfVxuXG4gIGV4ZWN1dGUoY29udGV4dCkge1xuICAgIGNvbnN0IHsgcnVsZU9wZXJhdGlvbnMgfSA9IGNvbnRleHQ7XG5cbiAgICBsZXQgcnVsZU9wZXJhdGlvbiA9IHRoaXMuZmluZChjb250ZXh0KTtcblxuICAgIGlmIChydWxlT3BlcmF0aW9uID09PSBudWxsKSB7XG4gICAgICBydWxlT3BlcmF0aW9uID0gdGhpczsgIC8vL1xuXG4gICAgICBydWxlT3BlcmF0aW9ucy5wdXNoKHJ1bGVPcGVyYXRpb24pO1xuXG4gICAgICBydWxlT3BlcmF0aW9uLmFwcGx5KGNvbnRleHQpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdCA9IHJ1bGVPcGVyYXRpb24ucmV0cmlldmUoY29udGV4dCk7XG5cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgZmluZChjb250ZXh0KSB7XG4gICAgY29uc3QgeyBydWxlT3BlcmF0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgICBydWxlT3BlcmF0aW9uID0gcnVsZU9wZXJhdGlvbnMuZmluZCgocnVsZU9wZXJhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXF1YWxUbyA9IHRoaXMuaXNFcXVhbFRvKHJ1bGVPcGVyYXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZXF1YWxUbykge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSB8fCBudWxsO1xuXG4gICAgcmV0dXJuIHJ1bGVPcGVyYXRpb247XG4gIH1cbn1cbiIsIlJlYWN0LmNyZWF0ZUVsZW1lbnQiXSwibmFtZXMiOlsiUnVsZU9wZXJhdGlvbiIsInJ1bGUiLCJnZXRSdWxlIiwiaXNFcXVhbFRvIiwicnVsZU9wZXJhdGlvbiIsImVxdWFsVG8iLCJjb25zdHJ1Y3RvciIsIm9wZXJhdGlvbkluZGlyZWN0bHlSZWR1Y2VSdWxlT3BlcmF0aW9uIiwiY29tcGFyZXNUbyIsImNvbXBhcmUiLCJleGVjdXRlIiwiY29udGV4dCIsInJ1bGVPcGVyYXRpb25zIiwiZmluZCIsInB1c2giLCJhcHBseSIsInJlc3VsdCIsInJldHJpZXZlIl0sIm1hcHBpbmdzIjoiQUFBQSxZQUFZLENBQUM7Ozs7Ozs7ZUFFUUEsYUFBYTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbkIsSUFBQSxBQUFNQSxhQUFhLGlCQUFuQjthQUFNQSxhQUFhLENBQ3BCQyxJQUFJOzhCQURHRCxhQUFhO1FBRTlCLElBQUksQ0FBQ0MsSUFBSSxHQUFHQSxJQUFJLENBQUM7O2lCQUZBRCxhQUFhOztZQUtoQ0UsR0FBTyxFQUFQQSxTQUFPO21CQUFQQSxTQUFBQSxPQUFPLEdBQUc7Z0JBQ1IsT0FBTyxJQUFJLENBQUNELElBQUksQ0FBQztZQUNuQixDQUFDOzs7WUFFREUsR0FBUyxFQUFUQSxXQUFTO21CQUFUQSxTQUFBQSxTQUFTLENBQUNDLGFBQWEsRUFBRTtnQkFDdkIsSUFBSUMsT0FBTyxHQUFHLEtBQUssQUFBQztnQkFFcEIsSUFBTSxBQUFFQyxXQUFXLEdBQUssSUFBSSxDQUFwQkEsV0FBVyxBQUFTLEVBQ3RCQyxzQ0FBc0MsR0FBSUgsQUFBYSxXQUFZRSxDQUF6QkYsYUFBYSxFQUFZRSxXQUFXLENBQUEsQUFBQyxBQUFDO2dCQUV0RixJQUFJQyxzQ0FBc0MsRUFBRTtvQkFDMUMsSUFBTUMsVUFBVSxHQUFHLElBQUksQ0FBQ0MsT0FBTyxDQUFDTCxhQUFhLENBQUMsQUFBQztvQkFFL0NDLE9BQU8sR0FBR0csVUFBVSxDQUFDLENBQUMsR0FBRztnQkFDM0IsQ0FBQztnQkFFRCxPQUFPSCxPQUFPLENBQUM7WUFDakIsQ0FBQzs7O1lBRURLLEdBQU8sRUFBUEEsU0FBTzttQkFBUEEsU0FBQUEsT0FBTyxDQUFDQyxPQUFPLEVBQUU7Z0JBQ2YsSUFBTSxBQUFFQyxjQUFjLEdBQUtELE9BQU8sQ0FBMUJDLGNBQWMsQUFBWSxBQUFDO2dCQUVuQyxJQUFJUixhQUFhLEdBQUcsSUFBSSxDQUFDUyxJQUFJLENBQUNGLE9BQU8sQ0FBQyxBQUFDO2dCQUV2QyxJQUFJUCxhQUFhLEtBQUssSUFBSSxFQUFFO29CQUMxQkEsYUFBYSxHQUFHLElBQUksQ0FBQyxDQUFFLEdBQUc7b0JBRTFCUSxjQUFjLENBQUNFLElBQUksQ0FBQ1YsYUFBYSxDQUFDLENBQUM7b0JBRW5DQSxhQUFhLENBQUNXLEtBQUssQ0FBQ0osT0FBTyxDQUFDLENBQUM7Z0JBQy9CLENBQUM7Z0JBRUQsSUFBTUssTUFBTSxHQUFHWixhQUFhLENBQUNhLFFBQVEsQ0FBQ04sT0FBTyxDQUFDLEFBQUM7Z0JBRS9DLE9BQU9LLE1BQU0sQ0FBQztZQUNoQixDQUFDOzs7WUFFREgsR0FBSSxFQUFKQSxNQUFJO21CQUFKQSxTQUFBQSxJQUFJLENBQUNGLE9BQU8sRUFBRTs7Z0JBQ1osSUFBTSxBQUFFQyxjQUFjLEdBQUtELE9BQU8sQ0FBMUJDLGNBQWMsQUFBWSxFQUM1QlIsYUFBYSxHQUFHUSxjQUFjLENBQUNDLElBQUksQ0FBQyxTQUFDVCxhQUFhLEVBQUs7b0JBQ3JELElBQU1DLE9BQU8sR0FBRyxNQUFLRixTQUFTLENBQUNDLGFBQWEsQ0FBQyxBQUFDO29CQUU5QyxJQUFJQyxPQUFPLEVBQUU7d0JBQ1gsT0FBTyxJQUFJLENBQUM7b0JBQ2QsQ0FBQztnQkFDSCxDQUFDLENBQUMsSUFBSSxJQUFJLEFBQUM7Z0JBRWpCLE9BQU9ELGFBQWEsQ0FBQztZQUN2QixDQUFDOzs7V0FyRGtCSixhQUFhO0NBc0RqQyxFQUFBIn0=