'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    NonRecursiveNode = require('../node/nonRecursive'),
    ruleNameUtilities = require('../utilities/ruleName');

var Rule = parsers.Rule,
    filter = arrayUtilities.filter,
    nonRecursiveRuleNameFromRuleName = ruleNameUtilities.nonRecursiveRuleNameFromRuleName;

var NonRecursiveRule = function (_Rule) {
      _inherits(NonRecursiveRule, _Rule);

      function NonRecursiveRule() {
            _classCallCheck(this, NonRecursiveRule);

            return _possibleConstructorReturn(this, (NonRecursiveRule.__proto__ || Object.getPrototypeOf(NonRecursiveRule)).apply(this, arguments));
      }

      _createClass(NonRecursiveRule, null, [{
            key: 'fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefintion',
            value: function fromIndirectlyLeftRecursiveRuleAndIndirectlyLeftRecursiveDefintion(indirectlyLeftRecursiveRule, indirectlyLeftRecursiveDefinition) {
                  var ruleName = indirectlyLeftRecursiveRule.getName(),
                      definitions = indirectlyLeftRecursiveRule.getDefinitions();

                  filter(definitions, function (definition) {
                        var indirectlyLeftRecursiveDefinitionMatchesDefinition = indirectlyLeftRecursiveDefinition.matchDefinition(definition);

                        if (!indirectlyLeftRecursiveDefinitionMatchesDefinition) {
                              return true;
                        }
                  });

                  var nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNode = NonRecursiveNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }, {
            key: 'fromImmediatelyLeftRecursiveRule',
            value: function fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
                  var ruleName = immediatelyLeftRecursiveRule.getName(),
                      definitions = immediatelyLeftRecursiveRule.getDefinitions(),
                      nonRecursiveRuleName = nonRecursiveRuleNameFromRuleName(ruleName),
                      name = nonRecursiveRuleName,
                      ///
                  NonTerminalNode = NonRecursiveNode,
                      ///
                  nonRecursiveRule = new NonRecursiveRule(name, definitions, NonTerminalNode);

                  return nonRecursiveRule;
            }
      }]);

      return NonRecursiveRule;
}(Rule);

module.exports = NonRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiTm9uUmVjdXJzaXZlTm9kZSIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiUnVsZSIsImZpbHRlciIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsInJ1bGVOYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zIiwiZ2V0RGVmaW5pdGlvbnMiLCJkZWZpbml0aW9uIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24iLCJtYXRjaERlZmluaXRpb24iLCJub25SZWN1cnNpdmVSdWxlTmFtZSIsIm5hbWUiLCJOb25UZXJtaW5hbE5vZGUiLCJub25SZWN1cnNpdmVSdWxlIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLG1CQUFtQkYsUUFBUSxzQkFBUixDQUR6QjtBQUFBLElBRU1HLG9CQUFvQkgsUUFBUSx1QkFBUixDQUYxQjs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLE1BREYsR0FDYUosY0FEYixDQUNFSSxNQURGO0FBQUEsSUFFRUMsZ0NBRkYsR0FFdUNILGlCQUZ2QyxDQUVFRyxnQ0FGRjs7SUFJQUMsZ0I7Ozs7Ozs7Ozs7OytGQUNzRUMsMkIsRUFBNkJDLGlDLEVBQW1DO0FBQ3hJLHNCQUFNQyxXQUFXRiw0QkFBNEJHLE9BQTVCLEVBQWpCO0FBQUEsc0JBQ01DLGNBQWNKLDRCQUE0QkssY0FBNUIsRUFEcEI7O0FBR0FSLHlCQUFPTyxXQUFQLEVBQW9CLFVBQUNFLFVBQUQsRUFBZ0I7QUFDbEMsNEJBQU1DLHFEQUFxRE4sa0NBQWtDTyxlQUFsQyxDQUFrREYsVUFBbEQsQ0FBM0Q7O0FBRUEsNEJBQUksQ0FBQ0Msa0RBQUwsRUFBeUQ7QUFDdkQscUNBQU8sSUFBUDtBQUNEO0FBQ0YsbUJBTkQ7O0FBUUEsc0JBQU1FLHVCQUF1QlgsaUNBQWlDSSxRQUFqQyxDQUE3QjtBQUFBLHNCQUNNUSxPQUFPRCxvQkFEYjtBQUFBLHNCQUNvQztBQUM5QkUsb0NBQWtCakIsZ0JBRnhCO0FBQUEsc0JBRTBDO0FBQ3BDa0IscUNBQW1CLElBQUliLGdCQUFKLENBQXFCVyxJQUFyQixFQUEyQk4sV0FBM0IsRUFBd0NPLGVBQXhDLENBSHpCOztBQUtBLHlCQUFPQyxnQkFBUDtBQUNEOzs7NkRBRXVDQyw0QixFQUE4QjtBQUNwRSxzQkFBTVgsV0FBV1csNkJBQTZCVixPQUE3QixFQUFqQjtBQUFBLHNCQUNNQyxjQUFjUyw2QkFBNkJSLGNBQTdCLEVBRHBCO0FBQUEsc0JBRU1JLHVCQUF1QlgsaUNBQWlDSSxRQUFqQyxDQUY3QjtBQUFBLHNCQUdNUSxPQUFPRCxvQkFIYjtBQUFBLHNCQUdvQztBQUM5QkUsb0NBQWtCakIsZ0JBSnhCO0FBQUEsc0JBSTBDO0FBQ3BDa0IscUNBQW1CLElBQUliLGdCQUFKLENBQXFCVyxJQUFyQixFQUEyQk4sV0FBM0IsRUFBd0NPLGVBQXhDLENBTHpCOztBQU9BLHlCQUFPQyxnQkFBUDtBQUNEOzs7O0VBOUI0QmhCLEk7O0FBaUMvQmtCLE9BQU9DLE9BQVAsR0FBaUJoQixnQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBhcnJheVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9hcnJheScpLFxuICAgICAgTm9uUmVjdXJzaXZlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9uUmVjdXJzaXZlJyksXG4gICAgICBydWxlTmFtZVV0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlTmFtZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIH0gPSBydWxlTmFtZVV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZSBleHRlbmRzIFJ1bGUge1xuICBzdGF0aWMgZnJvbUluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZUFuZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW50aW9uKGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZSwgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0TmFtZSgpLFxuICAgICAgICAgIGRlZmluaXRpb25zID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlLmdldERlZmluaXRpb25zKCk7XG5cbiAgICBmaWx0ZXIoZGVmaW5pdGlvbnMsIChkZWZpbml0aW9uKSA9PiB7XG4gICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25NYXRjaGVzRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5tYXRjaERlZmluaXRpb24oZGVmaW5pdGlvbik7XG5cbiAgICAgIGlmICghaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uTWF0Y2hlc0RlZmluaXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBjb25zdCBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBOb25SZWN1cnNpdmVOb2RlLCAvLy9cbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUnVsZShpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZSA9IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lKHJ1bGVOYW1lKSxcbiAgICAgICAgICBuYW1lID0gbm9uUmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBOb25SZWN1cnNpdmVOb2RlLCAvLy9cbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlUnVsZTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZVJ1bGU7XG4iXX0=