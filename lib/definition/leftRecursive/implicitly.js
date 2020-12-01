"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _necessary = require("necessary");

var _leftRecursive = _interopRequireDefault(require("../../definition/leftRecursive"));

var _types = require("../../types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) {
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;

    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }

  return function () {
    var Super = _getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

var first = _necessary.arrayUtilities.first;

var ImplicitlyLeftRecursiveDefinition = /*#__PURE__*/function (_LeftRecursiveDefinit) {
  _inherits(ImplicitlyLeftRecursiveDefinition, _LeftRecursiveDefinit);

  var _super = _createSuper(ImplicitlyLeftRecursiveDefinition);

  function ImplicitlyLeftRecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition) {
    var _this;

    _classCallCheck(this, ImplicitlyLeftRecursiveDefinition);

    _this = _super.call(this, type, parts, ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames);
    _this.leftRecursiveDefinition = leftRecursiveDefinition;
    return _this;
  }

  _createClass(ImplicitlyLeftRecursiveDefinition, [{
    key: "getLeftRecursiveDefinition",
    value: function getLeftRecursiveDefinition() {
      this.leftRecursiveDefinition = leftRecursiveDefinition;
    }
  }, {
    key: "replace",
    value: function replace(ruleMap) {
      var rule = ruleMap[this.ruleName] || null,
          replacedDefinition = this.leftRecursiveDefinition,
          ///
      replacementDefinition = this; ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);
    }
  }], [{
    key: "fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions",
    value: function fromRuleNameLeftRecursiveRuleNameAndRecursiveDefinitions(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
      var implicitlyLeftRecursiveDefinition = null;
      var leftRecursiveDefinition = findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions);

      if (leftRecursiveDefinition !== null) {
        var type = _types.IMPLICITLY_LEFT_RECURSIVE_TYPE,
            parts = leftRecursiveDefinition.getParts(),
            _ruleName = leftRecursiveDefinition.getRuleName(),
            definition = null,
            ///
        recursiveRuleNames = leftRecursiveDefinition.getRecursiveRuleNames(),
            leftRecursiveRuleNames = leftRecursiveDefinition.getLeftRecursiveRuleNames();

        implicitlyLeftRecursiveDefinition = new ImplicitlyLeftRecursiveDefinition(type, parts, _ruleName, definition, recursiveRuleNames, leftRecursiveRuleNames, leftRecursiveDefinition);
      }

      return implicitlyLeftRecursiveDefinition;
    }
  }]);

  return ImplicitlyLeftRecursiveDefinition;
}(_leftRecursive["default"]);

exports["default"] = ImplicitlyLeftRecursiveDefinition;

function findLeftRecursiveDefinition(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
  var leftRecursiveDefinition = null;
  var leftRecursiveDefinitionsPath = findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions);

  if (leftRecursiveDefinitionsPath !== null) {
    var firstLeftRecursiveDefinition = first(leftRecursiveDefinitionsPath);
    leftRecursiveDefinition = firstLeftRecursiveDefinition; ///
  }

  return leftRecursiveDefinition;
}

function findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions) {
  var recursiveDefinitionsPath = null;
  recursiveDefinitions.some(function (recursiveDefinition, index) {
    var recursiveDefinitionRuleName = recursiveDefinition.getRuleName(),
        recursiveDefinitionRuleNameRecursiveRuleName = recursiveDefinitionRuleName === recursiveRuleName;

    if (recursiveDefinitionRuleNameRecursiveRuleName) {
      recursiveDefinitionsPath = recursiveDefinitions.slice(index);
      return true;
    }
  });
  return recursiveDefinitionsPath;
}

function findLeftRecursiveDefinitionsPath(ruleName, leftRecursiveRuleName, recursiveDefinitions) {
  var leftRecursiveDefinitionsPath = null;
  var recursiveRuleName = leftRecursiveRuleName,
      ///
  recursiveDefinitionsPath = findRecursiveDefinitionsPath(ruleName, recursiveRuleName, recursiveDefinitions);

  if (recursiveDefinitionsPath !== null) {
    var recursiveDefinitionsPathLeftRecursive = isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath);

    if (recursiveDefinitionsPathLeftRecursive) {
      leftRecursiveDefinitionsPath = recursiveDefinitionsPath; ///
    }
  }

  return leftRecursiveDefinitionsPath;
}

function isRecursiveDefinitionsPathLeftRecursive(ruleName, recursiveDefinitionsPath) {
  var ruleNames = ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath),
      recursiveDefinitionsPathLeftRecursive = recursiveDefinitionsPath.every(function (recursiveDefinition, index) {
    var type = recursiveDefinition.getType();

    if (type === _types.LEFT_RECURSIVE_TYPE) {
      var _ruleName2 = ruleNames[index],
          leftRecursiveRuleNames = recursiveDefinition.getLeftRecursiveRuleNames(),
          leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(_ruleName2);

      if (leftRecursiveRuleNamesIncludesRuleName) {
        return true;
      }
    }
  });
  return recursiveDefinitionsPathLeftRecursive;
}

function ruleNamesFromRuleNameAndRecursiveDefinitionsPath(ruleName, recursiveDefinitionsPath) {
  var ruleNames = recursiveDefinitionsPath.map(function (recursiveDefinition) {
    return recursiveDefinition.getRuleName();
  });
  ruleNames.push(ruleName);
  var firstRuleName = ruleNames.shift(),
      lastRuleName = firstRuleName; ///

  ruleNames.push(lastRuleName);
  return ruleNames;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltcGxpY2l0bHkuanMiXSwibmFtZXMiOlsiZmlyc3QiLCJhcnJheVV0aWxpdGllcyIsIkltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVNYXAiLCJydWxlIiwicmVwbGFjZWREZWZpbml0aW9uIiwicmVwbGFjZW1lbnREZWZpbml0aW9uIiwicmVwbGFjZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJyZWN1cnNpdmVEZWZpbml0aW9ucyIsImltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIklNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSIsImdldFBhcnRzIiwiZ2V0UnVsZU5hbWUiLCJnZXRSZWN1cnNpdmVSdWxlTmFtZXMiLCJnZXRMZWZ0UmVjdXJzaXZlUnVsZU5hbWVzIiwiTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgiLCJmaXJzdExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwic29tZSIsInJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRleCIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSIsInJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZVJlY3Vyc2l2ZVJ1bGVOYW1lIiwic2xpY2UiLCJyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwiaXNSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlIiwicnVsZU5hbWVzIiwicnVsZU5hbWVzRnJvbVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoIiwiZXZlcnkiLCJnZXRUeXBlIiwiTEVGVF9SRUNVUlNJVkVfVFlQRSIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwiaW5jbHVkZXMiLCJtYXAiLCJwdXNoIiwiZmlyc3RSdWxlTmFtZSIsInNoaWZ0IiwibGFzdFJ1bGVOYW1lIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7OztBQUVBOztBQUVBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRVFBLEssR0FBVUMseUIsQ0FBVkQsSzs7SUFFYUUsaUM7Ozs7O0FBQ25CLDZDQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxrQkFBL0MsRUFBbUVDLHNCQUFuRSxFQUEyRkMsdUJBQTNGLEVBQW9IO0FBQUE7O0FBQUE7O0FBQ2xILDhCQUFNTixJQUFOLEVBQVlDLEtBQVosRUFBbUJDLFFBQW5CLEVBQTZCQyxVQUE3QixFQUF5Q0Msa0JBQXpDLEVBQTZEQyxzQkFBN0Q7QUFFQSxVQUFLQyx1QkFBTCxHQUErQkEsdUJBQS9CO0FBSGtIO0FBSW5IOzs7O2lEQUU0QjtBQUMzQixXQUFLQSx1QkFBTCxHQUErQkEsdUJBQS9CO0FBQ0Q7Ozs0QkFFT0MsTyxFQUFTO0FBQ2YsVUFBTUMsSUFBSSxHQUFHRCxPQUFPLENBQUMsS0FBS0wsUUFBTixDQUFQLElBQTBCLElBQXZDO0FBQUEsVUFDTU8sa0JBQWtCLEdBQUcsS0FBS0gsdUJBRGhDO0FBQUEsVUFDMEQ7QUFDcERJLE1BQUFBLHFCQUFxQixHQUFHLElBRjlCLENBRGUsQ0FHcUI7O0FBRXBDRixNQUFBQSxJQUFJLENBQUNHLGlCQUFMLENBQXVCRixrQkFBdkIsRUFBMkNDLHFCQUEzQztBQUNEOzs7NkVBRStEUixR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eyBhcnJheVV0aWxpdGllcyB9IGZyb20gXCJuZWNlc3NhcnlcIjtcblxuaW1wb3J0IExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIGZyb20gXCIuLi8uLi9kZWZpbml0aW9uL2xlZnRSZWN1cnNpdmVcIjtcblxuaW1wb3J0IHsgTEVGVF9SRUNVUlNJVkVfVFlQRSwgSU1QTElDSVRMWV9MRUZUX1JFQ1VSU0lWRV9UWVBFIH0gZnJvbSBcIi4uLy4uL3R5cGVzXCI7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgIHN1cGVyKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcblxuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIGdldExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKCkge1xuICAgIHRoaXMubGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxuXG4gIHJlcGxhY2UocnVsZU1hcCkge1xuICAgIGNvbnN0IHJ1bGUgPSBydWxlTWFwW3RoaXMucnVsZU5hbWVdIHx8IG51bGwsXG4gICAgICAgICAgcmVwbGFjZWREZWZpbml0aW9uID0gdGhpcy5sZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgIHJlcGxhY2VtZW50RGVmaW5pdGlvbiA9IHRoaXM7IC8vL1xuXG4gICAgcnVsZS5yZXBsYWNlRGVmaW5pdGlvbihyZXBsYWNlZERlZmluaXRpb24sIHJlcGxhY2VtZW50RGVmaW5pdGlvbik7XG4gIH1cblxuICBzdGF0aWMgZnJvbVJ1bGVOYW1lTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnMpIHtcbiAgICBsZXQgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICAgIGlmIChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiAhPT0gbnVsbCkge1xuICAgICAgY29uc3QgdHlwZSA9IElNUExJQ0lUTFlfTEVGVF9SRUNVUlNJVkVfVFlQRSxcbiAgICAgICAgICAgIHBhcnRzID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICAgIHJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICAgIGRlZmluaXRpb24gPSBudWxsLCAvLy9cbiAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldExlZnRSZWN1cnNpdmVSdWxlTmFtZXMoKTtcblxuICAgICAgaW1wbGljaXRseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IEltcGxpY2l0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbih0eXBlLCBwYXJ0cywgcnVsZU5hbWUsIGRlZmluaXRpb24sIHJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcywgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBpbXBsaWNpdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG4gIH1cbn1cblxuZnVuY3Rpb24gZmluZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCA9IGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IGZpcnN0TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBmaXJzdChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gZmlyc3RMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG5cbmZ1bmN0aW9uIGZpbmRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGgocnVsZU5hbWUsIHJlY3Vyc2l2ZVJ1bGVOYW1lLCByZWN1cnNpdmVEZWZpbml0aW9ucykge1xuICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICByZWN1cnNpdmVEZWZpbml0aW9ucy5zb21lKChyZWN1cnNpdmVEZWZpbml0aW9uLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IHJlY3Vyc2l2ZURlZmluaXRpb25SdWxlTmFtZSA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSxcbiAgICAgICAgICByZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSA9IChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWUgPT09IHJlY3Vyc2l2ZVJ1bGVOYW1lKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uUnVsZU5hbWVSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnMuc2xpY2UoaW5kZXgpO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGZpbmRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKHJ1bGVOYW1lLCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKSB7XG4gIGxldCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gbnVsbDtcblxuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gZmluZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlUnVsZU5hbWUsIHJlY3Vyc2l2ZURlZmluaXRpb25zKTtcblxuICBpZiAocmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKTtcblxuICAgIGlmIChyZWN1cnNpdmVEZWZpbml0aW9uc1BhdGhMZWZ0UmVjdXJzaXZlKSB7XG4gICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoID0gcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoOyAgLy8vXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1BhdGg7XG59XG5cbmZ1bmN0aW9uIGlzUmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZShydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSxcbiAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoTGVmdFJlY3Vyc2l2ZSA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5ldmVyeSgocmVjdXJzaXZlRGVmaW5pdGlvbiwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCB0eXBlID0gcmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRUeXBlKCk7XG5cbiAgICAgICAgICBpZiAodHlwZSA9PT0gTEVGVF9SRUNVUlNJVkVfVFlQRSkge1xuICAgICAgICAgICAgY29uc3QgcnVsZU5hbWUgPSBydWxlTmFtZXNbaW5kZXhdLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0TGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcygpLFxuICAgICAgICAgICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzLmluY2x1ZGVzKHJ1bGVOYW1lKTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aExlZnRSZWN1cnNpdmU7XG59XG5cbmZ1bmN0aW9uIHJ1bGVOYW1lc0Zyb21SdWxlTmFtZUFuZFJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aChydWxlTmFtZSwgcmVjdXJzaXZlRGVmaW5pdGlvbnNQYXRoKSB7XG4gIGNvbnN0IHJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZURlZmluaXRpb25zUGF0aC5tYXAoKHJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHJlY3Vyc2l2ZURlZmluaXRpb24uZ2V0UnVsZU5hbWUoKSk7XG5cbiAgcnVsZU5hbWVzLnB1c2gocnVsZU5hbWUpO1xuXG4gIGNvbnN0IGZpcnN0UnVsZU5hbWUgPSBydWxlTmFtZXMuc2hpZnQoKSxcbiAgICAgICAgbGFzdFJ1bGVOYW1lID0gZmlyc3RSdWxlTmFtZTsgLy8vXG5cbiAgcnVsZU5hbWVzLnB1c2gobGFzdFJ1bGVOYW1lKTtcblxuICByZXR1cm4gcnVsZU5hbWVzO1xufVxuIl19