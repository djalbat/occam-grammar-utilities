'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ruleUtilities = require('./utilities/rule');

var findRuleByName = ruleUtilities.findRuleByName;

var Configuration = function () {
  function Configuration(map, rules) {
    _classCallCheck(this, Configuration);

    this.map = map;

    this.rules = rules;
  }

  _createClass(Configuration, [{
    key: 'getMap',
    value: function getMap() {
      return this.map;
    }
  }, {
    key: 'getRules',
    value: function getRules() {
      return this.rules;
    }
  }, {
    key: 'getRuleNames',
    value: function getRuleNames() {
      var ruleNames = Object.keys(this.map);

      return ruleNames;
    }
  }, {
    key: 'getImmediatelyLeftRecursiveDefinitions',
    value: function getImmediatelyLeftRecursiveDefinitions(ruleName) {
      var immediatelyLeftRecursiveDefinitions = this.map[ruleName];

      return immediatelyLeftRecursiveDefinitions;
    }
  }, {
    key: 'findRule',
    value: function findRule(ruleName) {
      var name = ruleName,
          ///
      rule = findRuleByName(name, this.rules);

      return rule;
    }
  }, {
    key: 'forEachRule',
    value: function forEachRule(callback) {
      this.rules.forEach(callback);
    }
  }, {
    key: 'forEachRuleName',
    value: function forEachRuleName(callback) {
      var ruleNames = this.getRuleNames();

      ruleNames.forEach(callback);
    }
  }, {
    key: 'addNonRecursiveRule',
    value: function addNonRecursiveRule(nonRecursiveRule) {
      var rule = nonRecursiveRule; ///

      this.rules.push(rule);
    }
  }, {
    key: 'addRightRecursiveRule',
    value: function addRightRecursiveRule(rightRecursiveRule) {
      var rule = rightRecursiveRule; ///

      this.rules.push(rule);
    }
  }, {
    key: 'mapImmediatelyLeftRecursiveDefinition',
    value: function mapImmediatelyLeftRecursiveDefinition(ruleName, immediatelyLeftRecursiveDefinition) {
      if (!this.map[ruleName]) {
        this.map[ruleName] = [];
      }

      var immediatelyLeftRecursiveDefinitions = this.map[ruleName];

      immediatelyLeftRecursiveDefinitions.push(immediatelyLeftRecursiveDefinition);
    }
  }], [{
    key: 'fromRules',
    value: function fromRules(rules) {
      var map = {},
          configuration = new Configuration(map, rules);

      return configuration;
    }
  }]);

  return Configuration;
}();

module.exports = Configuration;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbInJ1bGVVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmluZFJ1bGVCeU5hbWUiLCJDb25maWd1cmF0aW9uIiwibWFwIiwicnVsZXMiLCJydWxlTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicnVsZU5hbWUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIm5hbWUiLCJydWxlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0UnVsZU5hbWVzIiwibm9uUmVjdXJzaXZlUnVsZSIsInB1c2giLCJyaWdodFJlY3Vyc2l2ZVJ1bGUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29uZmlndXJhdGlvbiIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7QUFFQSxJQUFNQSxnQkFBZ0JDLFFBQVEsa0JBQVIsQ0FBdEI7O0lBRVFDLGMsR0FBbUJGLGEsQ0FBbkJFLGM7O0lBRUZDLGE7QUFDSix5QkFBWUMsR0FBWixFQUFpQkMsS0FBakIsRUFBd0I7QUFBQTs7QUFDdEIsU0FBS0QsR0FBTCxHQUFXQSxHQUFYOztBQUVBLFNBQUtDLEtBQUwsR0FBYUEsS0FBYjtBQUNEOzs7OzZCQUVRO0FBQ1AsYUFBTyxLQUFLRCxHQUFaO0FBQ0Q7OzsrQkFFVTtBQUNULGFBQU8sS0FBS0MsS0FBWjtBQUNEOzs7bUNBRWM7QUFDYixVQUFNQyxZQUFZQyxPQUFPQyxJQUFQLENBQVksS0FBS0osR0FBakIsQ0FBbEI7O0FBRUEsYUFBT0UsU0FBUDtBQUNEOzs7MkRBRXNDRyxRLEVBQVU7QUFDL0MsVUFBTUMsc0NBQXNDLEtBQUtOLEdBQUwsQ0FBU0ssUUFBVCxDQUE1Qzs7QUFFQSxhQUFPQyxtQ0FBUDtBQUNEOzs7NkJBRVFELFEsRUFBVTtBQUNqQixVQUFNRSxPQUFPRixRQUFiO0FBQUEsVUFBd0I7QUFDbEJHLGFBQU9WLGVBQWVTLElBQWYsRUFBcUIsS0FBS04sS0FBMUIsQ0FEYjs7QUFHQSxhQUFPTyxJQUFQO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVO0FBQ3BCLFdBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsUUFBbkI7QUFDRDs7O29DQUVlQSxRLEVBQVU7QUFDeEIsVUFBTVAsWUFBWSxLQUFLUyxZQUFMLEVBQWxCOztBQUVBVCxnQkFBVVEsT0FBVixDQUFrQkQsUUFBbEI7QUFDRDs7O3dDQUVtQkcsZ0IsRUFBa0I7QUFDcEMsVUFBTUosT0FBT0ksZ0JBQWIsQ0FEb0MsQ0FDSjs7QUFFaEMsV0FBS1gsS0FBTCxDQUFXWSxJQUFYLENBQWdCTCxJQUFoQjtBQUNEOzs7MENBRXFCTSxrQixFQUFvQjtBQUN4QyxVQUFNTixPQUFPTSxrQkFBYixDQUR3QyxDQUNOOztBQUVsQyxXQUFLYixLQUFMLENBQVdZLElBQVgsQ0FBZ0JMLElBQWhCO0FBQ0Q7OzswREFFcUNILFEsRUFBVVUsa0MsRUFBb0M7QUFDbEYsVUFBSSxDQUFDLEtBQUtmLEdBQUwsQ0FBU0ssUUFBVCxDQUFMLEVBQXlCO0FBQ3ZCLGFBQUtMLEdBQUwsQ0FBU0ssUUFBVCxJQUFxQixFQUFyQjtBQUNEOztBQUVELFVBQU1DLHNDQUFzQyxLQUFLTixHQUFMLENBQVNLLFFBQVQsQ0FBNUM7O0FBRUFDLDBDQUFvQ08sSUFBcEMsQ0FBeUNFLGtDQUF6QztBQUNEOzs7OEJBRWdCZCxLLEVBQU87QUFDdEIsVUFBTUQsTUFBTSxFQUFaO0FBQUEsVUFDTWdCLGdCQUFnQixJQUFJakIsYUFBSixDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLENBRHRCOztBQUdBLGFBQU9lLGFBQVA7QUFDRDs7Ozs7O0FBR0hDLE9BQU9DLE9BQVAsR0FBaUJuQixhQUFqQiIsImZpbGUiOiJjb25maWd1cmF0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi91dGlsaXRpZXMvcnVsZScpO1xuXG5jb25zdCB7IGZpbmRSdWxlQnlOYW1lIH0gPSBydWxlVXRpbGl0aWVzO1xuXG5jbGFzcyBDb25maWd1cmF0aW9uIHtcbiAgY29uc3RydWN0b3IobWFwLCBydWxlcykge1xuICAgIHRoaXMubWFwID0gbWFwO1xuXG4gICAgdGhpcy5ydWxlcyA9IHJ1bGVzO1xuICB9XG5cbiAgZ2V0TWFwKCkge1xuICAgIHJldHVybiB0aGlzLm1hcDtcbiAgfVxuXG4gIGdldFJ1bGVzKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVzO1xuICB9XG5cbiAgZ2V0UnVsZU5hbWVzKCkge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IE9iamVjdC5rZXlzKHRoaXMubWFwKTtcblxuICAgIHJldHVybiBydWxlTmFtZXM7XG4gIH1cblxuICBnZXRJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlTmFtZSkge1xuICAgIGNvbnN0IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gdGhpcy5tYXBbcnVsZU5hbWVdO1xuXG4gICAgcmV0dXJuIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xuICB9XG5cbiAgZmluZFJ1bGUocnVsZU5hbWUpIHtcbiAgICBjb25zdCBuYW1lID0gcnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBydWxlID0gZmluZFJ1bGVCeU5hbWUobmFtZSwgdGhpcy5ydWxlcyk7XG5cbiAgICByZXR1cm4gcnVsZTtcbiAgfVxuXG4gIGZvckVhY2hSdWxlKGNhbGxiYWNrKSB7XG4gICAgdGhpcy5ydWxlcy5mb3JFYWNoKGNhbGxiYWNrKTtcbiAgfVxuXG4gIGZvckVhY2hSdWxlTmFtZShjYWxsYmFjaykge1xuICAgIGNvbnN0IHJ1bGVOYW1lcyA9IHRoaXMuZ2V0UnVsZU5hbWVzKCk7XG5cbiAgICBydWxlTmFtZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBhZGROb25SZWN1cnNpdmVSdWxlKG5vblJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gbm9uUmVjdXJzaXZlUnVsZTsgIC8vL1xuXG4gICAgdGhpcy5ydWxlcy5wdXNoKHJ1bGUpO1xuICB9XG5cbiAgYWRkUmlnaHRSZWN1cnNpdmVSdWxlKHJpZ2h0UmVjdXJzaXZlUnVsZSkge1xuICAgIGNvbnN0IHJ1bGUgPSByaWdodFJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIG1hcEltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZU5hbWUsIGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBpZiAoIXRoaXMubWFwW3J1bGVOYW1lXSkge1xuICAgICAgdGhpcy5tYXBbcnVsZU5hbWVdID0gW107XG4gICAgfVxuXG4gICAgY29uc3QgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSB0aGlzLm1hcFtydWxlTmFtZV07XG5cbiAgICBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlcyhydWxlcykge1xuICAgIGNvbnN0IG1hcCA9IHt9LFxuICAgICAgICAgIGNvbmZpZ3VyYXRpb24gPSBuZXcgQ29uZmlndXJhdGlvbihtYXAsIHJ1bGVzKTtcblxuICAgIHJldHVybiBjb25maWd1cmF0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gQ29uZmlndXJhdGlvbjtcbiJdfQ==