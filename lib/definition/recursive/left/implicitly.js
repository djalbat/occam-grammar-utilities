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
            truncateLeftRecursiveDefinitions(leftRecursiveDefinitions, leftRecursiveDefinition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9kZWZpbml0aW9uL3JlY3Vyc2l2ZS9sZWZ0L2ltcGxpY2l0bHkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uLy4uL2RlZmluaXRpb24vcmVjdXJzaXZlL2xlZnRcIjtcblxuaW1wb3J0IHsgaXNEZWZpbml0aW9uQ29tcGxleCB9IGZyb20gXCIuLi8uLi8uLi91dGlsaXRpZXMvZGVmaW5pdGlvblwiO1xuXG5jb25zdCB7IGxhc3QsIGZpcnN0LCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgc3VwZXIocGFydHMsIHJ1bGVOYW1lLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpO1xuXG4gICAgdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSB7XG4gICAgcmV0dXJuIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICBzdGF0aWMgZnJvbVJlY3Vyc2l2ZURlZmluaXRpb25zKHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gICAgbGV0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihyZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGluc3RhbmNlb2YgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBkZWZpbml0aW9uID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24sIC8vL1xuICAgICAgICAgICAgICBkZWZpbml0aW9uQ29tcGxleCA9IGlzRGVmaW5pdGlvbkNvbXBsZXgoZGVmaW5pdGlvbik7XG5cbiAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyBjb21wbGV4IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgcnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSZWN1cnNpdmVSdWxlTmFtZXMoKSxcbiAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHBhcnRzLCBydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgbGV0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbCxcbiAgICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xuXG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5sZW5ndGg7XG5cbiAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc0xlbmd0aCA+IDEpIHtcbiAgICBjb25zdCBsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsYXN0KGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxhc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWU7IC8vL1xuXG4gICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBiYWNrd2FyZHNGaW5kKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBydWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgIGlmIChydWxlTmFtZSA9PT0gbExlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KSB8fCBudWxsO1xuXG4gICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICB0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgY29uc3QgcnVsZU5hbWVzID0gcnVsZU5hbWVzRnJvbUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmV2ZXJ5KChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgICAgIGlmIChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcblxuICAgICAgaWYgKCFsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZXMpIHtcbiAgICAgICAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhyZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBbXTtcblxuICBiYWNrd2FyZHNFdmVyeShyZWN1cnNpdmVEZWZpbml0aW9ucywgKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCByZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAocmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVjdXJzaXZlRGVmaW5pdGlvbjsgIC8vL1xuXG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMudW5zaGlmdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbn1cblxuZnVuY3Rpb24gdHJ1bmNhdGVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICBjb25zdCBpbmRleCA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5pbmRleE9mKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSxcbiAgICAgICAgc3RhcnQgPSAwLFxuICAgICAgICBkZWxldGVDb3VudCA9IGluZGV4OyAgLy8vXG5cbiAgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLnNwbGljZShzdGFydCwgZGVsZXRlQ291bnQpO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZXNGcm9tTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBjb25zdCBydWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMubWFwKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKTtcblxuICAgICAgICAgIHJldHVybiBydWxlTmFtZTtcbiAgICAgICAgfSksXG4gICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVzLnNoaWZ0KCk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIHJldHVybiBydWxlTmFtZXM7XG59XG4iXSwibmFtZXMiOlsiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGFzdCIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJwYXJ0cyIsInJ1bGVOYW1lIiwicmVjdXJzaXZlUnVsZU5hbWVzIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZ2V0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmcm9tUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGVmaW5pdGlvbiIsImRlZmluaXRpb25Db21wbGV4IiwiaXNEZWZpbml0aW9uQ29tcGxleCIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsIkVycm9yIiwiZ2V0UGFydHMiLCJnZXRSdWxlTmFtZSIsImdldFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNMZW5ndGgiLCJsZW5ndGgiLCJsYXN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsImxMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ0cnVuY2F0ZUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGVOYW1lcyIsInJ1bGVOYW1lc0Zyb21MZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZXMiLCJldmVyeSIsImluZGV4IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJyZWN1cnNpdmVEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJ1bnNoaWZ0IiwiaW5kZXhPZiIsInN0YXJ0IiwiZGVsZXRlQ291bnQiLCJzcGxpY2UiLCJtYXAiLCJzaGlmdCIsInB1c2giXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7O2VBVVFBLGlDQUFpQzs7Ozt5QkFSdkIsV0FBVzsyQ0FFTixvQ0FBb0M7MEJBRXBDLCtCQUErQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFbkUsSUFBUUMsSUFBSSxHQUEyQ0MsVUFBYyxlQUFBLENBQTdERCxJQUFJLEVBQUVFLEtBQUssR0FBb0NELFVBQWMsZUFBQSxDQUF2REMsS0FBSyxFQUFFQyxhQUFhLEdBQXFCRixVQUFjLGVBQUEsQ0FBaERFLGFBQWEsRUFBRUMsY0FBYyxHQUFLSCxVQUFjLGVBQUEsQ0FBakNHLGNBQWMsQUFBb0I7QUFFdkQsSUFBQSxBQUFNTCxpQ0FBaUMsaUJBNENuRCxBQTVDWTs7O2FBQU1BLGlDQUFpQyxDQUN4Q00sS0FBSyxFQUFFQyxRQUFRLEVBQUVDLGtCQUFrQixFQUFFQyxzQkFBc0IsRUFBRUMsdUJBQXVCOzs7a0NBQ3hGSixLQUFLLEVBQUVDLFFBQVEsRUFBRUMsa0JBQWtCLEVBQUVDLHNCQUFzQixFQUFFO1FBRW5FLE1BQUtDLHVCQUF1QixHQUFHQSx1QkFBdUIsQ0FBQzs7Ozs7WUFHekRDLEdBQTBCLEVBQTFCQSw0QkFBMEI7bUJBQTFCQSxTQUFBQSwwQkFBMEIsR0FBRztnQkFDM0IsT0FBTyxJQUFJLENBQUNELHVCQUF1QixDQUFDO2FBQ3JDOzs7O1lBRU1FLEdBQXdCLEVBQXhCQSwwQkFBd0I7bUJBQS9CLFNBQU9BLHdCQUF3QixDQUFDQyxvQkFBb0IsRUFBRTtnQkFDcEQsSUFBSUMsaUNBQWlDLEdBQUcsSUFBSSxBQUFDO2dC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