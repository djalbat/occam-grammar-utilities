"use strict";

var _necessary = require("necessary");

var _reduced = _interopRequireDefault(require("../../rule/reduced"));

var _repeated = _interopRequireDefault(require("../../rule/repeated"));

var _rewritten = _interopRequireDefault(require("../../rule/rewritten"));

var _repeated2 = _interopRequireDefault(require("../../definition/repeated"));

var _rewritten2 = _interopRequireDefault(require("../../definition/rewritten"));

var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));

var _implicitly = _interopRequireDefault(require("../../definition/leftRecursive/implicitly"));

var _types = require("../../types");

var _rule = require("../../utilities/rule");

var _definition = require("../../utilities/definition");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

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

var first = _necessary.arrayUtilities.first;

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
          rule = (0, _rule.findRule)(ruleName, rules);
      var leftRecursiveRuleNames = this.getLeftRecursiveRuleNames(),
          firstLeftRecursiveRuleName = first(leftRecursiveRuleNames),
          leftRecursiveRuleName = firstLeftRecursiveRuleName,
          ///
      leftRecursiveRule = (0, _rule.findRule)(leftRecursiveRuleName, rules);
      var reducedRule = (0, _rule.reducedRuleFromRule)(leftRecursiveRule, rules, _reduced["default"]),
          reducedRuleEmpty = reducedRule.isEmpty();

      if (reducedRuleEmpty) {
        var definitionString = definition.asString(),
            implicitlyLeftRecursiveDefinition = this.getImplicitlyLeftRecursiveDefinition(),
            implicitlyLeftRecursiveDefinitionString = implicitlyLeftRecursiveDefinition.asString();
        throw new Error("The '".concat(implicitlyLeftRecursiveDefinitionString, "' implicitly left recursive definition of the '").concat(leftRecursiveRuleName, "' rule has no sibling non-left recursive definitions and therefore the '").concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule cannot be rewritten."));
      }

      var repeatedRule = (0, _rule.repeatedRuleFromRule)(leftRecursiveRule, rules, _repeated["default"]),
          repeatedDefinition = _repeated2["default"].fromDefinition(definition);

      repeatedRule.addDefinition(repeatedDefinition);
      (0, _rule.rewrittenRuleFromRule)(leftRecursiveRule, rules, _rewritten["default"]);

      var rewrittenDefinition = _rewritten2["default"].fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName),
          replacementDefinition = this; ///


      rule.replaceDefinition(replacementDefinition, rewrittenDefinition);
    }
  }], [{
    key: "fromRuleNameDefinitionAndRecursiveDefinitions",
    value: function fromRuleNameDefinitionAndRecursiveDefinitions(ruleName, definition, recursiveDefinitions) {
      var indirectlyLeftRecursiveDefinition = null;
      var leftRecursiveRuleNames = (0, _definition.leftRecursiveRuleNamesFromDefinition)(definition),
          leftRecursiveRuleNamesLength = leftRecursiveRuleNames.length,
          definitionLeftRecursive = leftRecursiveRuleNamesLength > 0;

      if (definitionLeftRecursive) {
        leftRecursiveRuleNames.some(function (leftRecursiveRuleName) {
          var ruleNameLeftRecursiveRuleName = ruleName === leftRecursiveRuleName;

          if (!ruleNameLeftRecursiveRuleName) {
            var implicitlyLeftRecursiveDefinition = _implicitly["default"].fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions);

            if (implicitlyLeftRecursiveDefinition !== null) {
              var definitionUnary = (0, _definition.isDefinitionUnary)(definition);

              if (definitionUnary) {
                var definitionString = definition.asString();
                throw new Error("The '".concat(definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is unary and therefore cannot be rewritten."));
              }

              var definitionComplex = (0, _definition.isDefinitionComplex)(definition);

              if (definitionComplex) {
                var _definitionString = definition.asString();

                throw new Error("The '".concat(_definitionString, "' indirectly left recursive definition of the '").concat(ruleName, "' rule is complex and therefore cannot be rewritten."));
              }

              var type = _types.INDIRECTLY_LEFT_RECURSIVE_TYPE,
                  parts = [],
                  recursiveRuleNames = (0, _definition.recursiveRuleNamesFromDefinition)(definition);
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
}(_leftRecursive["default"]);

module.exports = IndirectlyLeftRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGlyZWN0bHkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlcyIsImdldERlZmluaXRpb24iLCJnZXRSdWxlTmFtZSIsInJ1bGUiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJsZWZ0UmVjdXJzaXZlUnVsZSIsInJlZHVjZWRSdWxlIiwiUmVkdWNlZFJ1bGUiLCJyZWR1Y2VkUnVsZUVtcHR5IiwiaXNFbXB0eSIsImRlZmluaXRpb25TdHJpbmciLCJhc1N0cmluZyIsImdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZyIsIkVycm9yIiwicmVwZWF0ZWRSdWxlIiwiUmVwZWF0ZWRSdWxlIiwicmVwZWF0ZWREZWZpbml0aW9uIiwiUmVwZWF0ZWREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJhZGREZWZpbml0aW9uIiwiUmV3cml0dGVuUnVsZSIsInJld3JpdHRlbkRlZmluaXRpb24iLCJSZXdyaXR0ZW5EZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZXBsYWNlbWVudERlZmluaXRpb24iLCJyZXBsYWNlRGVmaW5pdGlvbiIsInJlY3Vyc2l2ZURlZmluaXRpb25zIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsImRlZmluaXRpb25MZWZ0UmVjdXJzaXZlIiwic29tZSIsInJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uVW5hcnkiLCJkZWZpbml0aW9uQ29tcGxleCIsIklORElSRUNUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsIkxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7O0FBRUE7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBQ0E7O0FBRUE7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFRkUsaUM7Ozs7O0FBQ0osNkNBQVlDLElBQVosRUFBa0JDLEtBQWxCLEVBQXlCQyxRQUF6QixFQUFtQ0MsVUFBbkMsRUFBK0NDLGtCQUEvQyxFQUFtRUMsc0JBQW5FLEVBQTJGQyxpQ0FBM0YsRUFBOEg7QUFBQTs7QUFBQTs7QUFDNUgsOEJBQU1OLElBQU4sRUFBWUMsS0FBWixFQUFtQkMsUUFBbkIsRUFBNkJDLFVBQTdCLEVBQXlDQyxrQkFBekMsRUFBNkRDLHNCQUE3RDtBQUVBLFVBQUtDLGlDQUFMLEdBQXlDQSxpQ0FBekM7QUFINEg7QUFJN0g7Ozs7MkRBRXNDO0FBQ3JDLGFBQU8sS0FBS0EsaUNBQVo7QUFDRDs7OzRCQUVPQyxLLEVBQU87QUFDYixVQUFNSixVQUFVLEdBQUcsS0FBS0ssYUFBTCxFQUFuQjtBQUFBLFVBQ01OLFFBQVEsR0FBRyxLQUFLTyxXQUFMLEVBRGpCO0FBQUEsVUFFTUMsSUFBSSxHQUFHLG9CQUFTUixRQUFULEVBQW1CSyxLQUFuQixDQUZiO0FBSUEsVUFBTUYsc0JBQXNCLEdBQUcsS0FBS00seUJBQUwsRUFBL0I7QUFBQSxVQUNN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QUFiO0FBQUEsa0JBQ005QyxLQUFLLEdBQUcsRUFEZDtBQUFBLGtCQUVNRyxrQkFBa0IsR0FBRyxrREFBaUNELFVBQWpDLENBRjNCO0FBSUFrQyxjQUFBQSxpQ0FBaUMsR0FBRyxJQUFJdEMsaUNBQUosQ0FBc0NDLElBQXRDLEVBQTRDQyxLQUE1QyxFQUFtREMsUUFBbkQsRUFBNkRDLFVBQTdELEVBQXlFQyxrQkFBekUsRUFBNkZDLHNCQUE3RixFQUFxSEMsaUNBQXJILENBQXBDO0FBRUEscUJBQU8sSUFBUDtBQUNEO0FBQ0Y7QUFDRixTQWhDRDtBQWlDRDs7QUFFRCxhQUFPK0IsaUNBQVA7QUFDRDs7OztFQXpGNkNXLHlCOztBQTRGaERDLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQm5ELGlDQUFqQiIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG5pbXBvcnQgeyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IFJlZHVjZWRSdWxlIGZyb20gXCIuLi8uLi9ydWxlL3JlZHVjZWRcIjtcbmltcG9ydCBSZXBlYXRlZFJ1bGUgZnJvbSBcIi4uLy4uL3J1bGUvcmVwZWF0ZWRcIjtcbmltcG9ydCBSZXdyaXR0ZW5SdWxlIGZyb20gXCIuLi8uLi9ydWxlL3Jld3JpdHRlblwiO1xuaW1wb3J0IFJlcGVhdGVkRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9yZXBlYXRlZFwiO1xuaW1wb3J0IFJld3JpdHRlbkRlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vcmV3cml0dGVuXCI7XG5pbXBvcnQgTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uLy4uL2RlZmluaXRpb24vbGVmdFJlY3Vyc2l2ZVwiO1xuaW1wb3J0IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vLi4vZGVmaW5pdGlvbi9sZWZ0UmVjdXJzaXZlL2ltcGxpY2l0bHlcIjtcblxuaW1wb3J0IHsgSU5ESVJFQ1RMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5pbXBvcnQgeyBmaW5kUnVsZSwgcmVkdWNlZFJ1bGVGcm9tUnVsZSwgcmVwZWF0ZWRSdWxlRnJvbVJ1bGUsIHJld3JpdHRlblJ1bGVGcm9tUnVsZSB9IGZyb20gXCIuLi8uLi91dGlsaXRpZXMvcnVsZVwiO1xuaW1wb3J0IHsgaXNEZWZpbml0aW9uVW5hcnksIGlzRGVmaW5pdGlvbkNvbXBsZXgsIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24gfSBmcm9tIFwiLi4vLi4vdXRpbGl0aWVzL2RlZmluaXRpb25cIjtcblxuY29uc3QgeyBmaXJzdCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmNsYXNzIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIHtcbiAgY29uc3RydWN0b3IodHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMuaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0SW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICBjb25zdCBkZWZpbml0aW9uID0gdGhpcy5nZXREZWZpbml0aW9uKCksXG4gICAgICAgICAgcnVsZU5hbWUgPSB0aGlzLmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlKHJ1bGVOYW1lLCBydWxlcyk7XG5cbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzID0gdGhpcy5nZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKCksXG4gICAgICAgICAgZmlyc3RMZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdChsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBmaXJzdExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgLy8vXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGUgPSBmaW5kUnVsZShsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJ1bGVzKTtcblxuICAgIGNvbnN0IHJlZHVjZWRSdWxlID0gcmVkdWNlZFJ1bGVGcm9tUnVsZShsZWZ0UmVjdXJzaXZlUnVsZSwgcnVsZXMsIFJlZHVjZWRSdWxlKSxcbiAgICAgICAgICByZWR1Y2VkUnVsZUVtcHR5ID0gcmVkdWNlZFJ1bGUuaXNFbXB0eSgpO1xuXG4gICAgaWYgKHJlZHVjZWRSdWxlRW1wdHkpIHtcbiAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCksXG4gICAgICAgICAgICBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSB0aGlzLmdldEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbigpLFxuICAgICAgICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uU3RyaW5nID0gaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlICcke2ltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblN0cmluZ30nIGltcGxpY2l0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7bGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lfScgcnVsZSBoYXMgbm8gc2libGluZyBub24tbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbnMgYW5kIHRoZXJlZm9yZSB0aGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgfVxuXG4gICAgY29uc3QgcmVwZWF0ZWRSdWxlID0gcmVwZWF0ZWRSdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVzLCBSZXBlYXRlZFJ1bGUpLFxuICAgICAgICAgIHJlcGVhdGVkRGVmaW5pdGlvbiA9IFJlcGVhdGVkRGVmaW5pdGlvbi5mcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgIHJlcGVhdGVkUnVsZS5hZGREZWZpbml0aW9uKHJlcGVhdGVkRGVmaW5pdGlvbik7XG5cbiAgICByZXdyaXR0ZW5SdWxlRnJvbVJ1bGUobGVmdFJlY3Vyc2l2ZVJ1bGUsIHJ1bGVzLCBSZXdyaXR0ZW5SdWxlKTtcblxuICAgIGNvbnN0IHJld3JpdHRlbkRlZmluaXRpb24gPSBSZXdyaXR0ZW5EZWZpbml0aW9uLmZyb21EZWZpbml0aW9uQW5kTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKGRlZmluaXRpb24sIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmVwbGFjZW1lbnREZWZpbml0aW9uID0gdGhpczsgLy8vXG5cbiAgICBydWxlLnJlcGxhY2VEZWZpbml0aW9uKHJlcGxhY2VtZW50RGVmaW5pdGlvbiwgcmV3cml0dGVuRGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lRGVmaW5pdGlvbkFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICAgIGxldCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBudWxsO1xuXG4gICAgY29uc3QgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSxcbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5sZW5ndGgsXG4gICAgICAgICAgZGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUgPSAobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCA+IDApO1xuXG4gICAgaWYgKGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLnNvbWUoKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSkgPT4ge1xuICAgICAgICBjb25zdCBydWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IChydWxlTmFtZSA9PT0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgICAgICBpZiAoIXJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgICAgICAgY29uc3QgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gSW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmZyb21SdWxlTmFtZUxlZnRSZWN1cnNpdmVSdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgICAgICAgIGlmIChpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25VbmFyeSA9IGlzRGVmaW5pdGlvblVuYXJ5KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvblVuYXJ5KSB7XG4gICAgICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25TdHJpbmcgPSBkZWZpbml0aW9uLmFzU3RyaW5nKCk7XG5cbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgJyR7ZGVmaW5pdGlvblN0cmluZ30nIGluZGlyZWN0bHkgbGVmdCByZWN1cnNpdmUgZGVmaW5pdGlvbiBvZiB0aGUgJyR7cnVsZU5hbWV9JyBydWxlIGlzIHVuYXJ5IGFuZCB0aGVyZWZvcmUgY2Fubm90IGJlIHJld3JpdHRlbi5gKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvbkNvbXBsZXggPSBpc0RlZmluaXRpb25Db21wbGV4KGRlZmluaXRpb24pO1xuXG4gICAgICAgICAgICBpZiAoZGVmaW5pdGlvbkNvbXBsZXgpIHtcbiAgICAgICAgICAgICAgY29uc3QgZGVmaW5pdGlvblN0cmluZyA9IGRlZmluaXRpb24uYXNTdHJpbmcoKTtcblxuICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSAnJHtkZWZpbml0aW9uU3RyaW5nfScgaW5kaXJlY3RseSBsZWZ0IHJlY3Vyc2l2ZSBkZWZpbml0aW9uIG9mIHRoZSAnJHtydWxlTmFtZX0nIHJ1bGUgaXMgY29tcGxleCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSByZXdyaXR0ZW4uYCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IHR5cGUgPSBJTkRJUkVDVExZX0xFRlRfUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgICAgICAgICBwYXJ0cyA9IFtdLFxuICAgICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24odHlwZSwgcGFydHMsIHJ1bGVOYW1lLCBkZWZpbml0aW9uLCByZWN1cnNpdmVSdWxlTmFtZXMsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMsIGltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==