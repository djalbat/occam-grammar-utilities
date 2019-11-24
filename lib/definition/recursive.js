'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var types = require('../types'),
    ruleUtilities = require('../utilities/rule'),
    definitionUtilities = require('../utilities/definition');

var findRule = ruleUtilities.findRule,
    Definition = parsers.Definition,
    RECURSIVE_TYPE = types.RECURSIVE_TYPE,
    recursiveRuleNamesFromDefinition = definitionUtilities.recursiveRuleNamesFromDefinition;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames) {
    _classCallCheck(this, RecursiveDefinition);

    var _this = _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).call(this, parts));

    _this.type = type;

    _this.ruleName = ruleName;

    _this.definition = definition;

    _this.recursiveRuleNames = recursiveRuleNames;
    return _this;
  }

  _createClass(RecursiveDefinition, [{
    key: 'getType',
    value: function getType() {
      return this.type;
    }
  }, {
    key: 'getRuleName',
    value: function getRuleName() {
      return this.ruleName;
    }
  }, {
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getRecursiveRuleNames',
    value: function getRecursiveRuleNames() {
      return this.recursiveRuleNames;
    }
  }, {
    key: 'rewrite',
    value: function rewrite(rules) {
      ///
    }
  }, {
    key: 'replace',
    value: function replace(rules) {
      var rule = findRule(this.ruleName, rules),
          replacedDefinition = this.definition,
          replacementDefinition = this; ///

      rule.replaceDefinition(replacedDefinition, replacementDefinition);
    }
  }], [{
    key: 'fromRuleNameAndDefinition',
    value: function fromRuleNameAndDefinition(ruleName, definition) {
      var recursiveDefinition = null;

      var type = RECURSIVE_TYPE,
          parts = definition.getParts(),
          recursiveRuleNames = recursiveRuleNamesFromDefinition(definition),
          recursiveRuleNamesLength = recursiveRuleNames.length,
          definitionRecursiveDefinition = recursiveRuleNamesLength > 0;

      if (definitionRecursiveDefinition) {
        recursiveDefinition = new RecursiveDefinition(type, parts, ruleName, definition, recursiveRuleNames);
      }

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInR5cGVzIiwicnVsZVV0aWxpdGllcyIsImRlZmluaXRpb25VdGlsaXRpZXMiLCJmaW5kUnVsZSIsIkRlZmluaXRpb24iLCJSRUNVUlNJVkVfVFlQRSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsInR5cGUiLCJwYXJ0cyIsInJ1bGVOYW1lIiwiZGVmaW5pdGlvbiIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInJ1bGVzIiwicnVsZSIsInJlcGxhY2VkRGVmaW5pdGlvbiIsInJlcGxhY2VtZW50RGVmaW5pdGlvbiIsInJlcGxhY2VEZWZpbml0aW9uIiwicmVjdXJzaXZlRGVmaW5pdGlvbiIsImdldFBhcnRzIiwicmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoIiwibGVuZ3RoIiwiZGVmaW5pdGlvblJlY3Vyc2l2ZURlZmluaXRpb24iLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLFVBQVVDLFFBQVEsZUFBUixDQUFoQjs7QUFFQSxJQUFNQyxRQUFRRCxRQUFRLFVBQVIsQ0FBZDtBQUFBLElBQ01FLGdCQUFnQkYsUUFBUSxtQkFBUixDQUR0QjtBQUFBLElBRU1HLHNCQUFzQkgsUUFBUSx5QkFBUixDQUY1Qjs7QUFJTSxJQUFFSSxRQUFGLEdBQWVGLGFBQWYsQ0FBRUUsUUFBRjtBQUFBLElBQ0VDLFVBREYsR0FDaUJOLE9BRGpCLENBQ0VNLFVBREY7QUFBQSxJQUVFQyxjQUZGLEdBRXFCTCxLQUZyQixDQUVFSyxjQUZGO0FBQUEsSUFHRUMsZ0NBSEYsR0FHdUNKLG1CQUh2QyxDQUdFSSxnQ0FIRjs7SUFLQUMsbUI7OztBQUNKLCtCQUFZQyxJQUFaLEVBQWtCQyxLQUFsQixFQUF5QkMsUUFBekIsRUFBbUNDLFVBQW5DLEVBQStDQyxrQkFBL0MsRUFBbUU7QUFBQTs7QUFBQSwwSUFDM0RILEtBRDJEOztBQUdqRSxVQUFLRCxJQUFMLEdBQVlBLElBQVo7O0FBRUEsVUFBS0UsUUFBTCxHQUFnQkEsUUFBaEI7O0FBRUEsVUFBS0MsVUFBTCxHQUFrQkEsVUFBbEI7O0FBRUEsVUFBS0Msa0JBQUwsR0FBMEJBLGtCQUExQjtBQVRpRTtBQVVsRTs7Ozs4QkFFUztBQUNSLGFBQU8sS0FBS0osSUFBWjtBQUNEOzs7a0NBRWE7QUFDWixhQUFPLEtBQUtFLFFBQVo7QUFDRDs7O29DQUVlO0FBQ2QsYUFBTyxLQUFLQyxVQUFaO0FBQ0Q7Ozs0Q0FFdUI7QUFDdEIsYUFBTyxLQUFLQyxrQkFBWjtBQUNEOzs7NEJBRU9DLEssRUFBTztBQUNiO0FBQ0Q7Ozs0QkFFT0EsSyxFQUFPO0FBQ2IsVUFBTUMsT0FBT1gsU0FBUyxLQUFLTyxRQUFkLEVBQXdCRyxLQUF4QixDQUFiO0FBQUEsVUFDTUUscUJBQXFCLEtBQUtKLFVBRGhDO0FBQUEsVUFFTUssd0JBQXdCLElBRjlCLENBRGEsQ0FHdUI7O0FBRXBDRixXQUFLRyxpQkFBTCxDQUF1QkYsa0JBQXZCLEVBQTJDQyxxQkFBM0M7QUFDRDs7OzhDQUVnQ04sUSxFQUFVQyxVLEVBQVk7QUFDckQsVUFBSU8sc0JBQXNCLElBQTFCOztBQUVBLFVBQU1WLE9BQU9ILGNBQWI7QUFBQSxVQUNNSSxRQUFRRSxXQUFXUSxRQUFYLEVBRGQ7QUFBQSxVQUVNUCxxQkFBcUJOLGlDQUFpQ0ssVUFBakMsQ0FGM0I7QUFBQSxVQUdNUywyQkFBMkJSLG1CQUFtQlMsTUFIcEQ7QUFBQSxVQUlNQyxnQ0FBaUNGLDJCQUEyQixDQUpsRTs7QUFNQSxVQUFJRSw2QkFBSixFQUFtQztBQUNqQ0osOEJBQXNCLElBQUlYLG1CQUFKLENBQXdCQyxJQUF4QixFQUE4QkMsS0FBOUIsRUFBcUNDLFFBQXJDLEVBQStDQyxVQUEvQyxFQUEyREMsa0JBQTNELENBQXRCO0FBQ0Q7O0FBRUQsYUFBT00sbUJBQVA7QUFDRDs7OztFQXZEK0JkLFU7O0FBMERsQ21CLE9BQU9DLE9BQVAsR0FBaUJqQixtQkFBakIiLCJmaWxlIjoicmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCB0eXBlcyA9IHJlcXVpcmUoJy4uL3R5cGVzJyksXG4gICAgICBydWxlVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGUnKSxcbiAgICAgIGRlZmluaXRpb25VdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvZGVmaW5pdGlvbicpO1xuXG5jb25zdCB7IGZpbmRSdWxlIH0gPSBydWxlVXRpbGl0aWVzLFxuICAgICAgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBSRUNVUlNJVkVfVFlQRSB9ID0gdHlwZXMsXG4gICAgICB7IHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21EZWZpbml0aW9uIH0gPSBkZWZpbml0aW9uVXRpbGl0aWVzO1xuXG5jbGFzcyBSZWN1cnNpdmVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKSB7XG4gICAgc3VwZXIocGFydHMpO1xuXG4gICAgdGhpcy50eXBlID0gdHlwZTtcblxuICAgIHRoaXMucnVsZU5hbWUgPSBydWxlTmFtZTtcblxuICAgIHRoaXMuZGVmaW5pdGlvbiA9IGRlZmluaXRpb247XG5cbiAgICB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcyA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIGdldFR5cGUoKSB7XG4gICAgcmV0dXJuIHRoaXMudHlwZTtcbiAgfVxuXG4gIGdldFJ1bGVOYW1lKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGVOYW1lO1xuICB9XG5cbiAgZ2V0RGVmaW5pdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy5kZWZpbml0aW9uO1xuICB9XG5cbiAgZ2V0UmVjdXJzaXZlUnVsZU5hbWVzKCkge1xuICAgIHJldHVybiB0aGlzLnJlY3Vyc2l2ZVJ1bGVOYW1lcztcbiAgfVxuXG4gIHJld3JpdGUocnVsZXMpIHtcbiAgICAvLy9cbiAgfVxuXG4gIHJlcGxhY2UocnVsZXMpIHtcbiAgICBjb25zdCBydWxlID0gZmluZFJ1bGUodGhpcy5ydWxlTmFtZSwgcnVsZXMpLFxuICAgICAgICAgIHJlcGxhY2VkRGVmaW5pdGlvbiA9IHRoaXMuZGVmaW5pdGlvbixcbiAgICAgICAgICByZXBsYWNlbWVudERlZmluaXRpb24gPSB0aGlzOyAvLy9cblxuICAgIHJ1bGUucmVwbGFjZURlZmluaXRpb24ocmVwbGFjZWREZWZpbml0aW9uLCByZXBsYWNlbWVudERlZmluaXRpb24pO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlTmFtZUFuZERlZmluaXRpb24ocnVsZU5hbWUsIGRlZmluaXRpb24pIHtcbiAgICBsZXQgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCB0eXBlID0gUkVDVVJTSVZFX1RZUEUsXG4gICAgICAgICAgcGFydHMgPSBkZWZpbml0aW9uLmdldFBhcnRzKCksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzID0gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbURlZmluaXRpb24oZGVmaW5pdGlvbiksXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgICBkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbiA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICAgIGlmIChkZWZpbml0aW9uUmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBSZWN1cnNpdmVEZWZpbml0aW9uKHR5cGUsIHBhcnRzLCBydWxlTmFtZSwgZGVmaW5pdGlvbiwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICB9XG5cbiAgICByZXR1cm4gcmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=