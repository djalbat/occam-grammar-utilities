'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array'),
    ruleNameUtilities = require('../utilities/ruleName'),
    NonLeftRecursiveNode = require('../node/nonLeftRecursive');

var Rule = parsers.Rule,
    filter = arrayUtilities.filter,
    nonLeftRecursiveRuleNameFromRuleName = ruleNameUtilities.nonLeftRecursiveRuleNameFromRuleName;

var NonLeftRecursiveRule = function (_Rule) {
      _inherits(NonLeftRecursiveRule, _Rule);

      function NonLeftRecursiveRule() {
            _classCallCheck(this, NonLeftRecursiveRule);

            return _possibleConstructorReturn(this, (NonLeftRecursiveRule.__proto__ || Object.getPrototypeOf(NonLeftRecursiveRule)).apply(this, arguments));
      }

      _createClass(NonLeftRecursiveRule, null, [{
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

                  var nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
                      name = nonLeftRecursiveRuleName,
                      ///
                  NonTerminalNode = NonLeftRecursiveNode,
                      ///
                  nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

                  return nonLeftRecursiveRule;
            }
      }, {
            key: 'fromImmediatelyLeftRecursiveRule',
            value: function fromImmediatelyLeftRecursiveRule(immediatelyLeftRecursiveRule) {
                  var ruleName = immediatelyLeftRecursiveRule.getName(),
                      definitions = immediatelyLeftRecursiveRule.getDefinitions(),
                      nonLeftRecursiveRuleName = nonLeftRecursiveRuleNameFromRuleName(ruleName),
                      name = nonLeftRecursiveRuleName,
                      ///
                  NonTerminalNode = NonLeftRecursiveNode,
                      ///
                  nonLeftRecursiveRule = new NonLeftRecursiveRule(name, definitions, NonTerminalNode);

                  return nonLeftRecursiveRule;
            }
      }]);

      return NonLeftRecursiveRule;
}(Rule);

module.exports = NonLeftRecursiveRule;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vbkxlZnRSZWN1cnNpdmUuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJhcnJheVV0aWxpdGllcyIsInJ1bGVOYW1lVXRpbGl0aWVzIiwiTm9uTGVmdFJlY3Vyc2l2ZU5vZGUiLCJSdWxlIiwiZmlsdGVyIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVJ1bGVOYW1lIiwiTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJydWxlTmFtZSIsImdldE5hbWUiLCJkZWZpbml0aW9ucyIsImdldERlZmluaXRpb25zIiwiZGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uIiwibWF0Y2hEZWZpbml0aW9uIiwibm9uTGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibmFtZSIsIk5vblRlcm1pbmFsTm9kZSIsIm5vbkxlZnRSZWN1cnNpdmVSdWxlIiwiaW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUnVsZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2QjtBQUFBLElBQ01FLG9CQUFvQkYsUUFBUSx1QkFBUixDQUQxQjtBQUFBLElBRU1HLHVCQUF1QkgsUUFBUSwwQkFBUixDQUY3Qjs7QUFJTSxJQUFFSSxJQUFGLEdBQVdMLE9BQVgsQ0FBRUssSUFBRjtBQUFBLElBQ0VDLE1BREYsR0FDYUosY0FEYixDQUNFSSxNQURGO0FBQUEsSUFFRUMsb0NBRkYsR0FFMkNKLGlCQUYzQyxDQUVFSSxvQ0FGRjs7SUFJQUMsb0I7Ozs7Ozs7Ozs7OytGQUNzRUMsMkIsRUFBNkJDLGlDLEVBQW1DO0FBQ3hJLHNCQUFNQyxXQUFXRiw0QkFBNEJHLE9BQTVCLEVBQWpCO0FBQUEsc0JBQ01DLGNBQWNKLDRCQUE0QkssY0FBNUIsRUFEcEI7O0FBR0FSLHlCQUFPTyxXQUFQLEVBQW9CLFVBQUNFLFVBQUQsRUFBZ0I7QUFDbEMsNEJBQU1DLHFEQUFxRE4sa0NBQWtDTyxlQUFsQyxDQUFrREYsVUFBbEQsQ0FBM0Q7O0FBRUEsNEJBQUksQ0FBQ0Msa0RBQUwsRUFBeUQ7QUFDdkQscUNBQU8sSUFBUDtBQUNEO0FBQ0YsbUJBTkQ7O0FBUUEsc0JBQU1FLDJCQUEyQlgscUNBQXFDSSxRQUFyQyxDQUFqQztBQUFBLHNCQUNNUSxPQUFPRCx3QkFEYjtBQUFBLHNCQUN3QztBQUNsQ0Usb0NBQWtCaEIsb0JBRnhCO0FBQUEsc0JBRThDO0FBQ3hDaUIseUNBQXVCLElBQUliLG9CQUFKLENBQXlCVyxJQUF6QixFQUErQk4sV0FBL0IsRUFBNENPLGVBQTVDLENBSDdCOztBQUtBLHlCQUFPQyxvQkFBUDtBQUNEOzs7NkRBRXVDQyw0QixFQUE4QjtBQUNwRSxzQkFBTVgsV0FBV1csNkJBQTZCVixPQUE3QixFQUFqQjtBQUFBLHNCQUNNQyxjQUFjUyw2QkFBNkJSLGNBQTdCLEVBRHBCO0FBQUEsc0JBRU1JLDJCQUEyQlgscUNBQXFDSSxRQUFyQyxDQUZqQztBQUFBLHNCQUdNUSxPQUFPRCx3QkFIYjtBQUFBLHNCQUd3QztBQUNsQ0Usb0NBQWtCaEIsb0JBSnhCO0FBQUEsc0JBSThDO0FBQ3hDaUIseUNBQXVCLElBQUliLG9CQUFKLENBQXlCVyxJQUF6QixFQUErQk4sV0FBL0IsRUFBNENPLGVBQTVDLENBTDdCOztBQU9BLHlCQUFPQyxvQkFBUDtBQUNEOzs7O0VBOUJnQ2hCLEk7O0FBaUNuQ2tCLE9BQU9DLE9BQVAsR0FBaUJoQixvQkFBakIiLCJmaWxlIjoibm9uTGVmdFJlY3Vyc2l2ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgYXJyYXlVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvYXJyYXknKSxcbiAgICAgIHJ1bGVOYW1lVXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3J1bGVOYW1lJyksXG4gICAgICBOb25MZWZ0UmVjdXJzaXZlTm9kZSA9IHJlcXVpcmUoJy4uL25vZGUvbm9uTGVmdFJlY3Vyc2l2ZScpO1xuXG5jb25zdCB7IFJ1bGUgfSA9IHBhcnNlcnMsXG4gICAgICB7IGZpbHRlciB9ID0gYXJyYXlVdGlsaXRpZXMsXG4gICAgICB7IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZSB9ID0gcnVsZU5hbWVVdGlsaXRpZXM7XG5cbmNsYXNzIE5vbkxlZnRSZWN1cnNpdmVSdWxlIGV4dGVuZHMgUnVsZSB7XG4gIHN0YXRpYyBmcm9tSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlQW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbnRpb24oaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVSdWxlLCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICBjb25zdCBydWxlTmFtZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlUnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0RGVmaW5pdGlvbnMoKTtcblxuICAgIGZpbHRlcihkZWZpbml0aW9ucywgKGRlZmluaXRpb24pID0+IHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbk1hdGNoZXNEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLm1hdGNoRGVmaW5pdGlvbihkZWZpbml0aW9uKTtcblxuICAgICAgaWYgKCFpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25NYXRjaGVzRGVmaW5pdGlvbikge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIGNvbnN0IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21SdWxlTmFtZShydWxlTmFtZSksXG4gICAgICAgICAgbmFtZSA9IG5vbkxlZnRSZWN1cnNpdmVSdWxlTmFtZSwgIC8vL1xuICAgICAgICAgIE5vblRlcm1pbmFsTm9kZSA9IE5vbkxlZnRSZWN1cnNpdmVOb2RlLCAvLy9cbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZSA9IG5ldyBOb25MZWZ0UmVjdXJzaXZlUnVsZShuYW1lLCBkZWZpbml0aW9ucywgTm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25MZWZ0UmVjdXJzaXZlUnVsZTtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tSW1tZWRpYXRlbHlMZWZ0UmVjdXJzaXZlUnVsZShpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3QgcnVsZU5hbWUgPSBpbW1lZGlhdGVseUxlZnRSZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBkZWZpbml0aW9ucyA9IGltbWVkaWF0ZWx5TGVmdFJlY3Vyc2l2ZVJ1bGUuZ2V0RGVmaW5pdGlvbnMoKSxcbiAgICAgICAgICBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICAgIG5hbWUgPSBub25MZWZ0UmVjdXJzaXZlUnVsZU5hbWUsICAvLy9cbiAgICAgICAgICBOb25UZXJtaW5hbE5vZGUgPSBOb25MZWZ0UmVjdXJzaXZlTm9kZSwgLy8vXG4gICAgICAgICAgbm9uTGVmdFJlY3Vyc2l2ZVJ1bGUgPSBuZXcgTm9uTGVmdFJlY3Vyc2l2ZVJ1bGUobmFtZSwgZGVmaW5pdGlvbnMsIE5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uTGVmdFJlY3Vyc2l2ZVJ1bGU7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25MZWZ0UmVjdXJzaXZlUnVsZTtcbiJdfQ==