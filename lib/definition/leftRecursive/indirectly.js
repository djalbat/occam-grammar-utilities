"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function () { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var necessary = require("necessary");

var types = require("../../types"),
    ReducedRule = require("../../rule/reduced"),
    RepeatedRule = require("../../rule/repeated"),
    RewrittenRule = require("../../rule/rewritten"),
    ruleUtilities = require("../../utilities/rule"),
    RepeatedDefinition = require("../../definition/repeated"),
    RewrittenDefinition = require("../../definition/rewritten"),
    definitionUtilities = require("../../utilities/definition"),
    LeftRecursiveDefinition = require("../../definition/leftRecursive"),
    ImplicitlyLeftRecursiveDefinition = require("../../definition/leftRecursive/implicitly");

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first,
    INDIRECTLY_LEFT_RECURSIVE_TYPE = types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
    findRule = ruleUtilities.findRule,
    reducedRuleFromRule = ruleUtilities.reducedRuleFromRule,
    repeatedRuleFromRule = ruleUtilities.repeatedRuleFromRule,
    rewrittenRuleFromRule = ruleUtilities.rewrittenRuleFromRule,
    isDefinitionUnary = definitionUtilities.isDefinitionUnary,
    isDefinitionComplex = definitionUtilities.isDefinitionComplex,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition,
    leftRecursiveRuleNamesFromDefinition = definitionUtilities.leftRecursiveRuleNamesFromDefinition;

var IndirectlyLeftRecursiveDefinition = /*#__PURE__*/function (_LeftRecursiveDefinit) {
  _inherits(IndirectlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  var _super = _createSuper(IndirectlyLeftRecursiveDefinition);

  function IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition) {
    var _this;

    _classCallCheck(this, IndirectlyLeftRecursiveDefinition);

    _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    _this.implicitlyLeftRecursiveDefinition = implicitlyLeftRecursiveDefinition;
    return _this;
  }

  _createClass(IndirectlyLeftRecursiveDefinition, [{
    key: "getImplicitlyLeftRecursiveDefinition",
    value: function getImplicitlyLeftRecursiveDefinition() {
      return this.implicitlyLeftRecursiveDefinition;
    }
  }, {
    key: "rewrite",
    value: function rewrite(rules) {
      var definition = this.getDefinition(),
          ruleName = this.getRuleName(),
          rule = findRule(ruleName, rules);
      var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName,
          ///
      leftRecursiveRule = findRule(leftRecursiveRuleName, rules);
      var reducedRule = reducedRuleFromRule(leftRecursiveRule, rules, ReducedRule),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString(),
            implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
        throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
      }

      var repeatedRule = repeatedRuleFromRule(leftRecursiveRule, rules, RepeatedRule),
          repeatedDefinition = RepeatedDefinition.fromDefinition(definition);
      repeatedRule.addDefinition(repeatedDefinition);
      rewrittenRuleFromRule(leftRecursiveRule, rules, RewrittenRule);
      var rewrittenDefinition = RewrittenDefinition.fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///

      rule.replaceDefinition(replacementDefinition, rewrittenDefinition);
    }
  }], [{
    key: "fromRuleNameDefinitionAndRecursiveDefinitions",
    value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
      var indirectlyLeftRecursiveDefinition = null;
      var leftRecursiveRuleNames = leftRecursiveRuleNamesFromDefinition(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        leftRecursiveRuleNames.some(function (leftRecursiveRuleName) {
          var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

          if (!ruleNameLeftRecursiveRuleName) {
            var implicitlyLeftRecursiveDefinition = ImplicitlyLeftRecursiveDefinition.fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

            if (implicitlyLeftRecursiveDefinition !== null) {
              var definitionUnary = isDefinitionUnary(definition);

              if (definitionUnary) {
                var definitionString = definition.asString();
                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
              }

              var definitionComplex = isDefinitionComplex(definition);

              if (definitionComplex) {
                var _definitionString = definition.asString();

                throw new Error("The '".concat(_definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
              }

              var type = INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  parts = [],
                  recursiveRuleNames = recursiveRuleNamesFromDefinition(definition);
              indirectlyLeftRecursiveDefinition = new IndirectlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, implicitlyLeftRecursiveDefinition);
              return true;
            }
          }
        });
      }

      return indirectlyLeftRecursiveDefinition;
    }
  }]);

  return IndirectlyLeftRecursiveDefinition;
}(LeftRecursiveDefinition);

module.exports = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGlyZWN0bHkuanMiXSwibmFtZXMiOlsibmVjZXNzYXJ5IiwicmVxdWlyZSIsInR5cGVzIiwiUmVkdWNlZFJ1bGUiLCJSZXBlYXRlZFJ1bGUiLCJSZXdyaXR0ZW5SdWxlIiwicnVsZVV0aWxpdGllcyIsIlJlcGVhdGVkRGVmaW5pdGlvbiIsIlJld3JpdHRlbkRlZmluaXRpb24iLCJkZWZpbml0aW9uVXRpbGl0aWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhcnJheVV0aWxpdGllcyIsImZpcnN0IiwiSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIiwiZmluZFJ1bGUiLCJyZWR1Y2VkUnVsZUZyb21SdWxlIiwicmVwZWF0ZWRSdWxlRnJvbVJ1bGUiLCJyZXdyaXR0ZW5SdWxlRnJvbVJ1bGUiLCJpc0RlZmluaXRpb25VbmFyeSIsImlzRGVmaW5pdGlvbkNvbXBsZXgiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImdldERlZmluaXRpb24iLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsInJlZHVjZWRSdWxlIiwicmVkdWNlZFJ1bGVFbXB0eSIsImlzRW1wdHkiLCJkZWZpbml0aW9uU3RyaW5nIiwiYXNTdHJpbmciLCJnZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmciLCJFcnJvciIsInJlcGVhdGVkUnVsZSIsInJlcGVhdGVkRGVmaW5pdGlvbiIsImZyb21EZWZpbml0aW9uIiwiYWRkRGVmaW5pdGlvbiIsInJld3JpdHRlbkRlZmluaXRpb24iLCJmcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZSIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJzb21lIiwicnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJmcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRlZmluaXRpb25VbmFyeSIsImRlZmluaXRpb25Db21wbGV4IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLFNBQVMsR0FBR0MsT0FBTyxDQUFDLFdBQUQsQ0FBekI7O0FBRUEsSUFBTUMsS0FBSyxHQUFHRCxPQUFPLENBQUMsYUFBRCxDQUFyQjtBQUFBLElBQ01FLFdBQVcsR0FBR0YsT0FBTyxDQUFDLG9CQUFELENBRDNCO0FBQUEsSUFFTUcsWUFBWSxHQUFHSCxPQUFPLENBQUMscUJBQUQsQ0FGNUI7QUFBQSxJQUdNSSxhQUFhLEdBQUdKLE9BQU8sQ0FBQyxzQkFBRCxDQUg3QjtBQUFBLElBSU1LLGFBQWEsR0FBR0wsT0FBTyxDQUFDLHNCQUFELENBSjdCO0FBQUEsSUFLTU0sa0JBQWtCLEdBQUdOLE9BQU8sQ0FBQywyQkFBRCxDQUxsQztBQUFBLElB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LGdCQUFnQixHQUFHZixVQUFVLENBQUNnQixRQUFYLEVBQXpCO0FBRUEsc0JBQU0sSUFBSUcsS0FBSixnQkFBa0JKLGdCQUFsQiw0REFBb0ZoQixRQUFwRix3REFBTjtBQUNEOztBQUVELGtCQUFNc0MsaUJBQWlCLEdBQUc1QyxtQkFBbUIsQ0FBQ08sVUFBRCxDQUE3Qzs7QUFFQSxrQkFBSXFDLGlCQUFKLEVBQXVCO0FBQ3JCLG9CQUFNdEIsaUJBQWdCLEdBQUdmLFVBQVUsQ0FBQ2dCLFFBQVgsRUFBekI7O0FBRUEsc0JBQU0sSUFBSUcsS0FBSixnQkFBa0JKLGlCQUFsQiw0REFBb0ZoQixRQUFwRiwwREFBTjtBQUNEOztBQUVELGtCQUFNRixJQUFJLEdBQUdWLDhCQUFiO0FBQUEsa0JBQ01XLEtBQUssR0FBRyxFQURkO0FBQUEsa0JBRU1HLGtCQUFrQixHQUFHUCxnQ0FBZ0MsQ0FBQ00sVUFBRCxDQUYzRDtBQUlBNkIsY0FBQUEsaUNBQWlDLEdBQUcsSUFBSWpDLGlDQUFKLENBQXNDQyxJQUF0QyxFQUE0Q0MsS0FBNUMsRUFBbURDLFFBQW5ELEVBQTZEQyxVQUE3RCxFQUF5RUMsa0JBQXpFLEVBQTZGQyxzQkFBN0YsRUFBcUhDLGlDQUFySCxDQUFwQztBQUVBLHFCQUFPLElBQVA7QUFDRDtBQUNGO0FBQ0YsU0FoQ0Q7QUFpQ0Q7O0FBRUQsYUFBTzBCLGlDQUFQO0FBQ0Q7Ozs7RUF6RjZDOUMsdUI7O0FBNEZoRHVELE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQjNDLGlDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5jb25zdCBuZWNlc3NhcnkgPSByZXF1aXJlKFwibmVjZXNzYXJ5XCIpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoXCIuLi8uLi90eXBlc1wiKSxcbiAgICAgIFJlZHVjZWRSdWxlID0gcmVxdWlyZShcIi4uLy4uL3J1bGUvcmVkdWNlZFwiKSxcbiAgICAgIFJlcGVhdGVkUnVsZSA9IHJlcXVpcmUoXCIuLi8uLi9ydWxlL3JlcGVhdGVkXCIpLFxuICAgICAgUmV3cml0dGVuUnVsZSA9IHJlcXVpcmUoXCIuLi8uLi9ydWxlL3Jld3JpdHRlblwiKSxcbiAgICAgIHJ1bGVVdGlsaXRpZXMgPSByZXF1aXJlKFwiLi4vLi4vdXRpbGl0aWVzL3J1bGVcIiksXG4gICAgICBSZXBlYXRlZERlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vLi4vZGVmaW5pdGlvbi9yZXBlYXRlZFwiKSxcbiAgICAgIFJld3JpdHRlbkRlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vLi4vZGVmaW5pdGlvbi9yZXdyaXR0ZW5cIiksXG4gICAgICBkZWZpbml0aW9uVXRpbGl0aWVzID0gcmVxdWlyZShcIi4uLy4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCIpLFxuICAgICAgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSByZXF1aXJlKFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlXCIpLFxuICAgICAgSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gcmVxdWlyZShcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZS9pbXBsaWNpdGx5XCIpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcyxcbiAgICAgIHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gPSB0eXBlcyxcbiAgICAgIHsgZmluZFJ1bGUsIHJlZHVjZWRSdWxlRnJvbVJ1bGUsIHJlcGVhdGVkUnVsZUZyb21SdWxlLCByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUgfSA9IHJ1bGVVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvblVuYXJ5LCBpc0RlZmluaXRpb25Db21wbGV4LCByZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBzdXBlcih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG5cbiAgICB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5pbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cblxuICByZXdyaXRlKHJ1bGVzKSB7XG4gICAgY29uc3QgZGVmaW5pdGlvbiA9IHRoaXMuZ2V0RGVmaW5pdGlvbigpLFxuICAgICAgICAgIHJ1bGVOYW1lID0gdGhpcy5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgIHJ1bGUgPSBmaW5kUnVsZShydWxlTmFtZSwgcnVsZXMpO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHRoaXMuZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgIGZpcnN0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3QobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIC8vL1xuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlID0gZmluZFJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCByZWR1Y2VkUnVsZSA9IHJlZHVjZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVzLCBSZWR1Y2VkUnVsZSksXG4gICAgICAgICAgcmVkdWNlZFJ1bGVFbXB0eSA9IHJlZHVjZWRSdWxlLmlzRW1wdHkoKTtcblxuICAgIGlmIChyZWR1Y2VkUnVsZUVtcHR5KSB7XG4gICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gdGhpcy5nZXRJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24oKSxcbiAgICAgICAgICAgIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyA9IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25TdHJpbmd9JyBpbXBsaWNpdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke2xlZnRSZWN1cnNpdmVSdWxlTmFtZX0nIHJ1bGUgaGFzIG5vIHNpYmxpbmcgbm9uLWxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb25zIGFuZCB0aGVyZWZvcmUgdGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgIH1cblxuICAgIGNvbnN0IHJlcGVhdGVkUnVsZSA9IHJlcGVhdGVkUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlcywgUmVwZWF0ZWRSdWxlKSxcbiAgICAgICAgICByZXBlYXRlZERlZmluaXRpb24gPSBSZXBlYXRlZERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICByZXBlYXRlZFJ1bGUuYWRkRGVmaW5pdGlvbihyZXBlYXRlZERlZmluaXRpb24pO1xuXG4gICAgcmV3cml0dGVuUnVsZUZyb21SdWxlKGxlZnRSZWN1cnNpdmVSdWxlLCBydWxlcywgUmV3cml0dGVuUnVsZSk7XG5cbiAgICBjb25zdCByZXdyaXR0ZW5EZWZpbml0aW9uID0gUmV3cml0dGVuRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbkFuZExlZnRSZWN1cnNpdmVSdWxlTmFtZShkZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlbWVudERlZmluaXRpb24sIHJld3JpdHRlbkRlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZURlZmluaXRpb25BbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMubGVuZ3RoLFxuICAgICAgICAgIGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5zb21lKChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpID0+IHtcbiAgICAgICAgY29uc3QgcnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSAocnVsZU5hbWUgPT09IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSk7XG5cbiAgICAgICAgaWYgKCFydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgICAgIGNvbnN0IGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5mcm9tUnVsZU5hbWVMZWZ0UmVjdXJzaXZlUnVsZU5hbWVBbmRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucyk7XG5cbiAgICAgICAgICBpZiAoaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uVW5hcnkgPSBpc0RlZmluaXRpb25VbmFyeShkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25VbmFyeSkge1xuICAgICAgICAgICAgICBjb25zdCBkZWZpbml0aW9uU3RyaW5nID0gZGVmaW5pdGlvbi5hc1N0cmluZygpO1xuXG4gICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2RlZmluaXRpb25TdHJpbmd9JyBpbmRpcmVjdGx5IGxlZnQgcmVjdXJzaXZlIGRlZmluaXRpb24gb2YgdGhlICcke3J1bGVOYW1lfScgcnVsZSBpcyB1bmFyeSBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25Db21wbGV4ID0gaXNEZWZpbml0aW9uQ29tcGxleChkZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgaWYgKGRlZmluaXRpb25Db21wbGV4KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIGNvbXBsZXggYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgcmV3cml0dGVuLmApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0eXBlID0gSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFLFxuICAgICAgICAgICAgICAgICAgcGFydHMgPSBbXSxcbiAgICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=