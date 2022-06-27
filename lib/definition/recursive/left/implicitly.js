"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "default", {
    get: function() {
        return ImplicitlyLeftRecursiveDefinition;
    },
    enumerable: true
});
var _necessary = require("necessary");
var _left = _interopRequireDefault(require("../../../definition/recursive/left"));
var _definition = require("../../../utilities/definition");
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
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
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
    "@swc/helpers - typeof";
    return obj && typeof Symbol !== "undefined" && obj.constructor === Symbol ? "symbol" : typeof obj;
};
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
        return true;
    } catch (e) {
        return false;
    }
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else {
            result = Super.apply(this, arguments);
        }
        return _possibleConstructorReturn(this, result);
    };
}
var last = _necessary.arrayUtilities.last, first = _necessary.arrayUtilities.first, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/ function(LeftRecursiveDefinition) {
    _inherits(ImplicitlyLeftRecursiveDefinition, LeftRecursiveDefinition);
    var _super = _createSuper(ImplicitlyLeftRecursiveDefinition);
    function ImplicitlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
        _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);
        var _this;
        _this = _super.call(this, parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames);
        _this.leftRecursiveDefinition = leftRecursiveDefinition;
        return _this;
    }
    _createClass(ImplicitlyLeftRecursiveDefinition, [
        {
            key: "getLeftRecursiveDefinition",
            value: function getLeftRecursiveDefinition() {
                return this.leftRecursiveDefinition;
            }
        }
    ], [
        {
            key: "fromRecursiveDefinitions",
            value: function fromRecursiveDefinitions(recursiveDefinitions) {
                var implicitlyLeftRecursiveDefinition = null;
                var leftRecursiveDefinition = findLeftRecursiveDefinition(recursiveDefinitions);
                if (leftRecursiveDefinition !== null) {
                    var leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, ImplicitlyLeftRecursiveDefinition);
                    if (leftRecursiveDefinitionImplicitlyLeftRecursiveDefinition) {
                        implicitlyLeftRecursiveDefinition = leftRecursiveDefinition; ///
                    } else {
                        var definition = leftRecursiveDefinition, definitionComplex = (0, _definition.isDefinitionComplex)(definition);
                        if (definitionComplex) {
                            var definitionString = definition.asString();
                            throw new Error("The '".concat(definitionString, "' implicitly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
                        }
                        var parts = leftRecursiveDefinition.getParts(), ruleName = leftRecursiveDefinition.getRuleName(), recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(), leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();
                        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(parts, ruleName, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
                    }
                }
                return implicitlyLeftRecursiveDefinition;
            }
        }
    ]);
    return ImplicitlyLeftRecursiveDefinition;
}(_left.default);
function findLeftRecursiveDefinition(recursiveDefinitions) {
    var leftRecursiveDefinition = null, leftRecursiveDefinitions = findLeftRecursiveDefinitions(recursiveDefinitions);
    var leftRecursiveDefinitionsLength = leftRecursiveDefinitions.length;
    if (leftRecursiveDefinitionsLength > 1) {
        var lastLeftRecursiveDefinition = last(leftRecursiveDefinitions), leftRecursiveRuleNames = lastLeftRecursiveDefinition.getLeftRecursiveRuleNames(), firstLeftRecursiveRuleName = first(leftRecursiveRuleNames), lLeftRecursiveRuleName = firstLeftRecursiveRuleName; ///
        leftRecursiveDefinition = backwardsFind(leftRecursiveDefinitions, function(leftRecursiveDefinition) {
            var ruleName = leftRecursiveDefinition.getRuleName();
            if (ruleName === lLeftRecursiveRuleName) {
                return true;
            }
        }) || null;
        if (leftRecursiveDefinition !== null) {
            truncateLeftRecursiveDefinitions(leftRecursiveDefinitions);
            var ruleNames = ruleNamesFromLeftRecursiveDefinitions(leftRecursiveDefinitions), leftRecursiveRuleNamesIncludesRuleNames = leftRecursiveDefinitions.every(function(leftRecursiveDefinition, index) {
                var ruleName = ruleNames[index], leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames(), leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);
                if (leftRecursiveRuleNamesIncludesRuleName) {
                    return true;
                }
            });
            if (!leftRecursiveRuleNamesIncludesRuleNames) {
                leftRecursiveDefinition = null;
            }
        }
    }
    return leftRecursiveDefinition;
}
function findLeftRecursiveDefinitions(recursiveDefinitions) {
    var leftRecursiveDefinitions = [];
    backwardsEvery(recursiveDefinitions, function(recursiveDefinition) {
        var recursiveDefinitionLeftRecursiveDefinition = _instanceof(recursiveDefinition, _left.default);
        if (recursiveDefinitionLeftRecursiveDefinition) {
            var leftRecursiveDefinition = recursiveDefinition; ///
            leftRecursiveDefinitions.unshift(leftRecursiveDefinition);
            return true;
        }
    });
    return leftRecursiveDefinitions;
}
function truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition) {
    var index = leftRecursiveDefinitions.indexOf(leftRecursiveDefinition), start = 0, deleteCount = index; ///
    leftRecursiveDefinitions.splice(start, deleteCount);
}
function ruleNamesFromLeftRecursiveDefinitions(leftRecursiveDefinitions) {
    var ruleNames = leftRecursiveDefinitions.map(function(leftRecursiveDefinition) {
        var ruleName = leftRecursiveDefinition.getRuleName();
        return ruleName;
    }), ruleName = ruleNames.shift();
    ruleNames.push(ruleName);
    return ruleNames;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGxhc3QsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbCxcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gICAgICBjb25zdCBydWxlTmFtZXMgPSBydWxlTmFtZXNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZXZlcnkoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBjb25zdCBydWxlTmFtZSA9IHJ1bGVOYW1lc1tpbmRleF0sXG4gICAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lcykge1xuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IFtdO1xuXG4gIGJhY2t3YXJkc0V2ZXJ5KHJlY3Vyc2l2ZURlZmluaXRpb25zLCAocmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgaWYgKHJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy51bnNoaWZ0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5mdW5jdGlvbiB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gIGNvbnN0IGluZGV4ID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmluZGV4T2YobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pLFxuICAgICAgICBzdGFydCA9IDAsXG4gICAgICAgIGRlbGV0ZUNvdW50ID0gaW5kZXg7ICAvLy9cblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuc3BsaWNlKHN0YXJ0LCBkZWxldGVDb3VudCk7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5tYXAoKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpO1xuXG4gICAgICAgICAgcmV0dXJuIHJ1bGVOYW1lO1xuICAgICAgICB9KSxcbiAgICAgICAgcnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKTtcblxuICBydWxlTmFtZXMucHVzaChydWxlTmFtZSk7XG5cbiAgcmV0dXJuIHJ1bGVOYW1lcztcbn1cbiJdLCJuYW1lcyI6WyJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsYXN0IiwiYXJyYXlVdGlsaXRpZXMiLCJmaXJzdCIsImJhY2t3YXJkc0ZpbmQiLCJiYWNrd2FyZHNFdmVyeSIsInBhcnRzIiwicnVsZU5hbWUiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJnZXRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZyb21SZWN1cnNpdmVEZWZpbml0aW9ucyIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJkZWZpbml0aW9uIiwiZGVmaW5pdGlvbkNvbXBsZXgiLCJpc0RlZmluaXRpb25Db21wbGV4IiwiZGVmaW5pdGlvblN0cmluZyIsImFzU3RyaW5nIiwiRXJyb3IiLCJnZXRQYXJ0cyIsImdldFJ1bGVOYW1lIiwiZ2V0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCIsImxlbmd0aCIsImxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInRydW5jYXRlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lcyIsImV2ZXJ5IiwiaW5kZXgiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSIsImluY2x1ZGVzIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInVuc2hpZnQiLCJpbmRleE9mIiwic3RhcnQiLCJkZWxldGVDb3VudCIsInNwbGljZSIsIm1hcCIsInNoaWZ0IiwicHVzaCJdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWSxDQUFDOzs7Ozs7ZUFVUUEsaUNBQWlDOzs7O3lCQVJ2QixXQUFXOzJDQUVOLG9DQUFvQzswQkFFcEMsK0JBQStCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVuRSxJQUFRQyxJQUFJLEdBQTJDQyxVQUFjLGVBQUEsQ0FBN0RELElBQUksRUFBRUUsS0FBSyxHQUFvQ0QsVUFBYyxlQUFBLENBQXZEQyxLQUFLLEVBQUVDLGFBQWEsR0FBcUJGLFVBQWMsZUFBQSxDQUFoREUsYUFBYSxFQUFFQyxjQUFjLEdBQUtILFVBQWMsZUFBQSxDQUFqQ0csY0FBYyxBQUFvQjtBQUV2RCxJQUFBLEFBQU1MLGlDQUFpQyxpQkE0Q25ELEFBNUNZOzs7YUFBTUEsaUNBQWlDLENBQ3hDTSxLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFQyx1QkFBdUI7OztrQ0FDeEZKLEtBQUssRUFBRUMsUUFBUSxFQUFFQyxrQkFBa0IsRUFBRUMsc0JBQXNCLEVBQUU7UUFFbkUsTUFBS0MsdUJBQXVCLEdBQUdBLHVCQUF1QixDQUFDOzs7OztZQUd6REMsR0FBMEIsRUFBMUJBLDRCQUEwQjttQkFBMUJBLFNBQUFBLDBCQUEwQixHQUFHO2dCQUMzQixPQUFPLElBQUksQ0FBQ0QsdUJBQXVCLENBQUM7YUFDckM7Ozs7WUFFTUUsR0FBd0IsRUFBeEJBLDBCQUF3QjttQkFBL0IsU0FBT0Esd0JBQXdCLENBQUNDLG9CQUFvQixFQUFFO2dCQUNwRCxJQUFJQyxpQ0FBaUMsR0FBRyxJQUFJLEFBQUM7Z0JBRTdDLElBQU1KLHVCQUF1QixHQUFHSywy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