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
    key: 'getMappedRuleNames',
    value: function getMappedRuleNames() {
      var mappedRuleNames = Object.keys(this.map);

      return mappedRuleNames;
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
    key: 'forEachMappedRule',
    value: function forEachMappedRule(callback) {
      var _this = this;

      var mappedRuleNames = this.getMappedRuleNames();

      mappedRuleNames.forEach(function (mappedRuleName) {
        var mappedRule = _this.findRule(mappedRuleName);

        callback(mappedRule);
      });
    }
  }, {
    key: 'forEachMappedRuleName',
    value: function forEachMappedRuleName(callback) {
      var mappedRuleNames = this.getMappedRuleNames();

      mappedRuleNames.forEach(callback);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL2VzNi9jb25maWd1cmF0aW9uLmpzIl0sIm5hbWVzIjpbInJ1bGVVdGlsaXRpZXMiLCJyZXF1aXJlIiwiZmluZFJ1bGVCeU5hbWUiLCJDb25maWd1cmF0aW9uIiwibWFwIiwicnVsZXMiLCJtYXBwZWRSdWxlTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwicnVsZU5hbWUiLCJpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsIm5hbWUiLCJydWxlIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwiZ2V0TWFwcGVkUnVsZU5hbWVzIiwibWFwcGVkUnVsZU5hbWUiLCJtYXBwZWRSdWxlIiwiZmluZFJ1bGUiLCJub25SZWN1cnNpdmVSdWxlIiwicHVzaCIsInJpZ2h0UmVjdXJzaXZlUnVsZSIsImltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb25maWd1cmF0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztBQUVBLElBQU1BLGdCQUFnQkMsUUFBUSxrQkFBUixDQUF0Qjs7SUFFUUMsYyxHQUFtQkYsYSxDQUFuQkUsYzs7SUFFRkMsYTtBQUNKLHlCQUFZQyxHQUFaLEVBQWlCQyxLQUFqQixFQUF3QjtBQUFBOztBQUN0QixTQUFLRCxHQUFMLEdBQVdBLEdBQVg7O0FBRUEsU0FBS0MsS0FBTCxHQUFhQSxLQUFiO0FBQ0Q7Ozs7NkJBRVE7QUFDUCxhQUFPLEtBQUtELEdBQVo7QUFDRDs7OytCQUVVO0FBQ1QsYUFBTyxLQUFLQyxLQUFaO0FBQ0Q7Ozt5Q0FFb0I7QUFDbkIsVUFBTUMsa0JBQWtCQyxPQUFPQyxJQUFQLENBQVksS0FBS0osR0FBakIsQ0FBeEI7O0FBRUEsYUFBT0UsZUFBUDtBQUNEOzs7MkRBRXNDRyxRLEVBQVU7QUFDL0MsVUFBTUMsc0NBQXNDLEtBQUtOLEdBQUwsQ0FBU0ssUUFBVCxDQUE1Qzs7QUFFQSxhQUFPQyxtQ0FBUDtBQUNEOzs7NkJBRVFELFEsRUFBVTtBQUNqQixVQUFNRSxPQUFPRixRQUFiO0FBQUEsVUFBd0I7QUFDbEJHLGFBQU9WLGVBQWVTLElBQWYsRUFBcUIsS0FBS04sS0FBMUIsQ0FEYjs7QUFHQSxhQUFPTyxJQUFQO0FBQ0Q7OztnQ0FFV0MsUSxFQUFVO0FBQ3BCLFdBQUtSLEtBQUwsQ0FBV1MsT0FBWCxDQUFtQkQsUUFBbkI7QUFDRDs7O3NDQUVpQkEsUSxFQUFVO0FBQUE7O0FBQzFCLFVBQU1QLGtCQUFrQixLQUFLUyxrQkFBTCxFQUF4Qjs7QUFFQVQsc0JBQWdCUSxPQUFoQixDQUF3QixVQUFDRSxjQUFELEVBQW9CO0FBQzFDLFlBQU1DLGFBQWEsTUFBS0MsUUFBTCxDQUFjRixjQUFkLENBQW5COztBQUVBSCxpQkFBU0ksVUFBVDtBQUNELE9BSkQ7QUFLRDs7OzBDQUVxQkosUSxFQUFVO0FBQzlCLFVBQU1QLGtCQUFrQixLQUFLUyxrQkFBTCxFQUF4Qjs7QUFFQVQsc0JBQWdCUSxPQUFoQixDQUF3QkQsUUFBeEI7QUFDRDs7O3dDQUVtQk0sZ0IsRUFBa0I7QUFDcEMsVUFBTVAsT0FBT08sZ0JBQWIsQ0FEb0MsQ0FDSjs7QUFFaEMsV0FBS2QsS0FBTCxDQUFXZSxJQUFYLENBQWdCUixJQUFoQjtBQUNEOzs7MENBRXFCUyxrQixFQUFvQjtBQUN4QyxVQUFNVCxPQUFPUyxrQkFBYixDQUR3QyxDQUNOOztBQUVsQyxXQUFLaEIsS0FBTCxDQUFXZSxJQUFYLENBQWdCUixJQUFoQjtBQUNEOzs7MERBRXFDSCxRLEVBQVVhLGtDLEVBQW9DO0FBQ2xGLFVBQUksQ0FBQyxLQUFLbEIsR0FBTCxDQUFTSyxRQUFULENBQUwsRUFBeUI7QUFDdkIsYUFBS0wsR0FBTCxDQUFTSyxRQUFULElBQXFCLEVBQXJCO0FBQ0Q7O0FBRUQsVUFBTUMsc0NBQXNDLEtBQUtOLEdBQUwsQ0FBU0ssUUFBVCxDQUE1Qzs7QUFFQUMsMENBQW9DVSxJQUFwQyxDQUF5Q0Usa0NBQXpDO0FBQ0Q7Ozs4QkFFZ0JqQixLLEVBQU87QUFDdEIsVUFBTUQsTUFBTSxFQUFaO0FBQUEsVUFDTW1CLGdCQUFnQixJQUFJcEIsYUFBSixDQUFrQkMsR0FBbEIsRUFBdUJDLEtBQXZCLENBRHRCOztBQUdBLGFBQU9rQixhQUFQO0FBQ0Q7Ozs7OztBQUdIQyxPQUFPQyxPQUFQLEdBQWlCdEIsYUFBakIiLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcnVsZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4vdXRpbGl0aWVzL3J1bGUnKTtcblxuY29uc3QgeyBmaW5kUnVsZUJ5TmFtZSB9ID0gcnVsZVV0aWxpdGllcztcblxuY2xhc3MgQ29uZmlndXJhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKG1hcCwgcnVsZXMpIHtcbiAgICB0aGlzLm1hcCA9IG1hcDtcblxuICAgIHRoaXMucnVsZXMgPSBydWxlcztcbiAgfVxuXG4gIGdldE1hcCgpIHtcbiAgICByZXR1cm4gdGhpcy5tYXA7XG4gIH1cblxuICBnZXRSdWxlcygpIHtcbiAgICByZXR1cm4gdGhpcy5ydWxlcztcbiAgfVxuXG4gIGdldE1hcHBlZFJ1bGVOYW1lcygpIHtcbiAgICBjb25zdCBtYXBwZWRSdWxlTmFtZXMgPSBPYmplY3Qua2V5cyh0aGlzLm1hcCk7XG5cbiAgICByZXR1cm4gbWFwcGVkUnVsZU5hbWVzO1xuICB9XG5cbiAgZ2V0SW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZU5hbWUpIHtcbiAgICBjb25zdCBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyA9IHRoaXMubWFwW3J1bGVOYW1lXTtcblxuICAgIHJldHVybiBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucztcbiAgfVxuXG4gIGZpbmRSdWxlKHJ1bGVOYW1lKSB7XG4gICAgY29uc3QgbmFtZSA9IHJ1bGVOYW1lLCAgLy8vXG4gICAgICAgICAgcnVsZSA9IGZpbmRSdWxlQnlOYW1lKG5hbWUsIHRoaXMucnVsZXMpO1xuXG4gICAgcmV0dXJuIHJ1bGU7XG4gIH1cblxuICBmb3JFYWNoUnVsZShjYWxsYmFjaykge1xuICAgIHRoaXMucnVsZXMuZm9yRWFjaChjYWxsYmFjayk7XG4gIH1cblxuICBmb3JFYWNoTWFwcGVkUnVsZShjYWxsYmFjaykge1xuICAgIGNvbnN0IG1hcHBlZFJ1bGVOYW1lcyA9IHRoaXMuZ2V0TWFwcGVkUnVsZU5hbWVzKCk7XG5cbiAgICBtYXBwZWRSdWxlTmFtZXMuZm9yRWFjaCgobWFwcGVkUnVsZU5hbWUpID0+IHtcbiAgICAgIGNvbnN0IG1hcHBlZFJ1bGUgPSB0aGlzLmZpbmRSdWxlKG1hcHBlZFJ1bGVOYW1lKTtcblxuICAgICAgY2FsbGJhY2sobWFwcGVkUnVsZSk7XG4gICAgfSk7XG4gIH1cblxuICBmb3JFYWNoTWFwcGVkUnVsZU5hbWUoY2FsbGJhY2spIHtcbiAgICBjb25zdCBtYXBwZWRSdWxlTmFtZXMgPSB0aGlzLmdldE1hcHBlZFJ1bGVOYW1lcygpO1xuXG4gICAgbWFwcGVkUnVsZU5hbWVzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgYWRkTm9uUmVjdXJzaXZlUnVsZShub25SZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZSA9IG5vblJlY3Vyc2l2ZVJ1bGU7ICAvLy9cblxuICAgIHRoaXMucnVsZXMucHVzaChydWxlKTtcbiAgfVxuXG4gIGFkZFJpZ2h0UmVjdXJzaXZlUnVsZShyaWdodFJlY3Vyc2l2ZVJ1bGUpIHtcbiAgICBjb25zdCBydWxlID0gcmlnaHRSZWN1cnNpdmVSdWxlOyAgLy8vXG5cbiAgICB0aGlzLnJ1bGVzLnB1c2gocnVsZSk7XG4gIH1cblxuICBtYXBJbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKHJ1bGVOYW1lLCBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgaWYgKCF0aGlzLm1hcFtydWxlTmFtZV0pIHtcbiAgICAgIHRoaXMubWFwW3J1bGVOYW1lXSA9IFtdO1xuICAgIH1cblxuICAgIGNvbnN0IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gdGhpcy5tYXBbcnVsZU5hbWVdO1xuXG4gICAgaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMucHVzaChpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tUnVsZXMocnVsZXMpIHtcbiAgICBjb25zdCBtYXAgPSB7fSxcbiAgICAgICAgICBjb25maWd1cmF0aW9uID0gbmV3IENvbmZpZ3VyYXRpb24obWFwLCBydWxlcyk7XG5cbiAgICByZXR1cm4gY29uZmlndXJhdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IENvbmZpZ3VyYXRpb247XG4iXX0=