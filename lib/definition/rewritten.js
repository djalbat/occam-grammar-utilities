'use strict';

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part'),
    partsUtilities = require('../utilities/parts'),
    ruleNameUtilities = require('../utilities/ruleName'),
    definitionUtilities = require('../utilities/definition');

var Definition = parsers.Definition,
    cloneParts = partsUtilities.cloneParts,
    isDefinitionLookAhead = definitionUtilities.isDefinitionLookAhead,
    repeatedRuleNameFromRuleName = ruleNameUtilities.repeatedRuleNameFromRuleName,
    reducedRuleNameFromRuleName = ruleNameUtilities.reducedRuleNameFromRuleName,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName,
    zeroOrMoreRuleNamePartPartFromRuleName = partUtilities.zeroOrMoreRuleNamePartPartFromRuleName;

var RewrittenDefinition = /*#__PURE__*/function (_Definition) {
  _inherits(RewrittenDefinition, _Definition);

  function RewrittenDefinition() {
    _classCallCheck(this, RewrittenDefinition);

    return _possibleConstructorReturn(this, _getPrototypeOf(RewrittenDefinition).apply(this, arguments));
  }

  _createClass(RewrittenDefinition, null, [{
    key: "fromDefinitionAndLeftRecursiveRuleName",
    value: function fromDefinitionAndLeftRecursiveRuleName(definition, leftRecursiveRuleName) {
      var parts = definition.getParts();
      parts = cloneParts(parts); ///

      parts.shift(); ///

      var definitionLookAhead = isDefinitionLookAhead(definition),
          lookAhead = definitionLookAhead,
          ///
      repeatedRuleName = repeatedRuleNameFromRuleName(leftRecursiveRuleName),
          reducedLeftRecursiveRuleName = reducedRuleNameFromRuleName(leftRecursiveRuleName),
          zeroOrMoreRepeatedRuleNamePart = zeroOrMoreRuleNamePartPartFromRuleName(repeatedRuleName),
          reducedLeftRecursiveRuleNamePart = ruleNamePartFromRuleName(reducedLeftRecursiveRuleName, lookAhead),
          rewrittenDefinition = new RewrittenDefinition(parts);
      parts.unshift(reducedLeftRecursiveRuleNamePart);
      parts.push(zeroOrMoreRepeatedRuleNamePart);
      return rewrittenDefinition;
    }
  }]);

  return RewrittenDefinition;
}(Definition);

module.exports = RewrittenDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJld3JpdHRlbi5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJwYXJ0c1V0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiZGVmaW5pdGlvblV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJjbG9uZVBhcnRzIiwiaXNEZWZpbml0aW9uTG9va0FoZWFkIiwicmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJlZHVjZWRSdWxlTmFtZUZyb21SdWxlTmFtZSIsInJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSIsInplcm9Pck1vcmVSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIiwiUmV3cml0dGVuRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJsZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJwYXJ0cyIsImdldFBhcnRzIiwic2hpZnQiLCJkZWZpbml0aW9uTG9va0FoZWFkIiwibG9va0FoZWFkIiwicmVwZWF0ZWRSdWxlTmFtZSIsInJlZHVjZWRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUiLCJ6ZXJvT3JNb3JlUmVwZWF0ZWRSdWxlTmFtZVBhcnQiLCJyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJld3JpdHRlbkRlZmluaXRpb24iLCJ1bnNoaWZ0IiwicHVzaCIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU8sR0FBR0MsT0FBTyxDQUFDLGVBQUQsQ0FBdkI7O0FBRUEsSUFBTUMsYUFBYSxHQUFHRCxPQUFPLENBQUMsbUJBQUQsQ0FBN0I7QUFBQSxJQUNNRSxjQUFjLEdBQUdGLE9BQU8sQ0FBQyxvQkFBRCxDQUQ5QjtBQUFBLElBRU1HLGlCQUFpQixHQUFHSCxPQUFPLENBQUMsdUJBQUQsQ0FGakM7QUFBQSxJQUdNSSxtQkFBbUIsR0FBR0osT0FBTyxDQUFDLHlCQUFELENBSG5DOztBQUtNLElBQUVLLFVBQUYsR0FBaUJOLE9BQWpCLENBQUVNLFVBQUY7QUFBQSxJQUNFQyxVQURGLEdBQ2lCSixjQURqQixDQUNFSSxVQURGO0FBQUEsSUFFRUMscUJBRkYsR0FFNEJILG1CQUY1QixDQUVFRyxxQkFGRjtBQUFBLElBR0VDLDRCQUhGLEdBR2dFTCxpQkFIaEUsQ0FHRUssNEJBSEY7QUFBQSxJQUdnQ0MsMkJBSGhDLEdBR2dFTixpQkFIaEUsQ0FHZ0NNLDJCQUhoQztBQUFBLElBSUVDLHdCQUpGLEdBSXVFVCxhQUp2RSxDQUlFUyx3QkFKRjtBQUFBLElBSTRCQyxzQ0FKNUIsR0FJdUVWLGFBSnZFLENBSTRCVSxzQ0FKNUI7O0lBTUFDLG1COzs7Ozs7Ozs7OzsyREFDMENDLFUsRUFBWUMscUIsRUFBdUI7QUFDL0UsVUFBSUMsS0FBSyxHQUFHRixVQUFVLENBQUNHLFFBQVgsRUFBWjtBQUVBRCxNQUFBQSxLQUFLLEdBQUdULFVBQVUsQ0FBQ1MsS0FBRCxDQUFsQixDQUgrRSxDQUduRDs7QUFFNUJBLE1BQUFBLEtBQUssQ0FBQ0UsS0FBTixHQUwrRSxDQUsvRDs7QUFFaEIsVUFBTUMsbUJBQW1CLEdBQUdYLHFCQUFxQixDQUFDTSxVQUFELENBQWpEO0FBQUEsVUFDTU0sU0FBUyxHQUFHRCxtQkFEbEI7QUFBQSxVQUN3QztBQUNsQ0UsTUFBQUEsZ0JBQWdCLEdBQUdaLDRCQUE0QixDQUFDTSxxQkFBRCxDQUZyRDtBQUFBLFVBR01PLDRCQUE0QixHQUFHWiwyQkFBMkIsQ0FBQ0sscUJBQUQsQ0FIaEU7QUFBQSxVQUlNUSw4QkFBOEIsR0FBR1gsc0NBQXNDLENBQUNTLGdCQUFELENBSjdFO0FBQUEsVUFLTUcsZ0NBQWdDLEdBQUdiLHdCQUF3QixDQUFDVyw0QkFBRCxFQUErQkYsU0FBL0IsQ0FMakU7QUFBQSxVQU1NSyxtQkFBbUIsR0FBRyxJQUFJWixtQkFBSixDQUF3QkcsS0FBeEIsQ0FONUI7QUFRQUEsTUFBQUEsS0FBSyxDQUFDVSxPQUFOLENBQWNGLGdDQUFkO0FBRUFSLE1BQUFBLEtBQUssQ0FBQ1csSUFBTixDQUFXSiw4QkFBWDtBQUVBLGFBQU9FLG1CQUFQO0FBQ0Q7Ozs7RUFyQitCbkIsVTs7QUF3QmxDc0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCaEIsbUJBQWpCIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKSxcbiAgICAgIHBhcnRzVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnRzJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpLFxuICAgICAgZGVmaW5pdGlvblV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9kZWZpbml0aW9uJyk7XG5cbmNvbnN0IHsgRGVmaW5pdGlvbiB9ID0gcGFyc2VycyxcbiAgICAgIHsgY2xvbmVQYXJ0cyB9ID0gcGFydHNVdGlsaXRpZXMsXG4gICAgICB7IGlzRGVmaW5pdGlvbkxvb2tBaGVhZCB9ID0gZGVmaW5pdGlvblV0aWxpdGllcyxcbiAgICAgIHsgcmVwZWF0ZWRSdWxlTmFtZUZyb21SdWxlTmFtZSwgcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcyxcbiAgICAgIHsgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLCB6ZXJvT3JNb3JlUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUmV3cml0dGVuRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbURlZmluaXRpb25BbmRMZWZ0UmVjdXJzaXZlUnVsZU5hbWUoZGVmaW5pdGlvbiwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSB7XG4gICAgbGV0IHBhcnRzID0gZGVmaW5pdGlvbi5nZXRQYXJ0cygpO1xuXG4gICAgcGFydHMgPSBjbG9uZVBhcnRzKHBhcnRzKTsgIC8vL1xuXG4gICAgcGFydHMuc2hpZnQoKTsgIC8vL1xuXG4gICAgY29uc3QgZGVmaW5pdGlvbkxvb2tBaGVhZCA9IGlzRGVmaW5pdGlvbkxvb2tBaGVhZChkZWZpbml0aW9uKSxcbiAgICAgICAgICBsb29rQWhlYWQgPSBkZWZpbml0aW9uTG9va0FoZWFkLCAgLy8vXG4gICAgICAgICAgcmVwZWF0ZWRSdWxlTmFtZSA9IHJlcGVhdGVkUnVsZU5hbWVGcm9tUnVsZU5hbWUobGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lKSxcbiAgICAgICAgICByZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gcmVkdWNlZFJ1bGVOYW1lRnJvbVJ1bGVOYW1lKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgemVyb09yTW9yZVJlcGVhdGVkUnVsZU5hbWVQYXJ0ID0gemVyb09yTW9yZVJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWUocmVwZWF0ZWRSdWxlTmFtZSksXG4gICAgICAgICAgcmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmVkdWNlZExlZnRSZWN1cnNpdmVSdWxlTmFtZSwgbG9va0FoZWFkKSxcbiAgICAgICAgICByZXdyaXR0ZW5EZWZpbml0aW9uID0gbmV3IFJld3JpdHRlbkRlZmluaXRpb24ocGFydHMpO1xuXG4gICAgcGFydHMudW5zaGlmdChyZWR1Y2VkTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCk7XG5cbiAgICBwYXJ0cy5wdXNoKHplcm9Pck1vcmVSZXBlYXRlZFJ1bGVOYW1lUGFydCk7XG5cbiAgICByZXR1cm4gcmV3cml0dGVuRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IFJld3JpdHRlbkRlZmluaXRpb247XG4iXX0=