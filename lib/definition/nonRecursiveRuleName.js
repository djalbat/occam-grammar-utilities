'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var NonRecursiveRuleNameDefinition = function (_Definition) {
  _inherits(NonRecursiveRuleNameDefinition, _Definition);

  function NonRecursiveRuleNameDefinition() {
    _classCallCheck(this, NonRecursiveRuleNameDefinition);

    return _possibleConstructorReturn(this, (NonRecursiveRuleNameDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveRuleNameDefinition)).apply(this, arguments));
  }

  _createClass(NonRecursiveRuleNameDefinition, null, [{
    key: 'fromNonRecursiveRule',
    value: function fromNonRecursiveRule(nonRecursiveRule) {
      var nonRecursiveRuleName = nonRecursiveRule.getName(),
          nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveRuleNameDefinition(parts);

      return nonRecursiveDefinition;
    }
  }]);

  return NonRecursiveRuleNameDefinition;
}(Definition);

module.exports = NonRecursiveRuleNameDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZVJ1bGVOYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwicGFydFV0aWxpdGllcyIsIkRlZmluaXRpb24iLCJydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUiLCJOb25SZWN1cnNpdmVSdWxlTmFtZURlZmluaXRpb24iLCJub25SZWN1cnNpdmVSdWxlIiwibm9uUmVjdXJzaXZlUnVsZU5hbWUiLCJnZXROYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicGFydHMiLCJub25SZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkYsYUFEL0IsQ0FDRUUsd0JBREY7O0lBR0FDLDhCOzs7Ozs7Ozs7Ozt5Q0FDd0JDLGdCLEVBQWtCO0FBQzVDLFVBQU1DLHVCQUF1QkQsaUJBQWlCRSxPQUFqQixFQUE3QjtBQUFBLFVBQ01DLDJCQUEyQkwseUJBQXlCRyxvQkFBekIsQ0FEakM7QUFBQSxVQUVNRyxRQUFRLENBQ05ELHdCQURNLENBRmQ7QUFBQSxVQUtNRSx5QkFBeUIsSUFBSU4sOEJBQUosQ0FBbUNLLEtBQW5DLENBTC9COztBQU9BLGFBQU9DLHNCQUFQO0FBQ0Q7Ozs7RUFWMENSLFU7O0FBYTdDUyxPQUFPQyxPQUFQLEdBQWlCUiw4QkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlUnVsZU5hbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgTm9uUmVjdXJzaXZlUnVsZU5hbWVEZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tTm9uUmVjdXJzaXZlUnVsZShub25SZWN1cnNpdmVSdWxlKSB7XG4gICAgY29uc3Qgbm9uUmVjdXJzaXZlUnVsZU5hbWUgPSBub25SZWN1cnNpdmVSdWxlLmdldE5hbWUoKSxcbiAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUobm9uUmVjdXJzaXZlUnVsZU5hbWUpLFxuICAgICAgICAgIHBhcnRzID0gW1xuICAgICAgICAgICAgbm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBub25SZWN1cnNpdmVEZWZpbml0aW9uID0gbmV3IE5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZVJ1bGVOYW1lRGVmaW5pdGlvbjtcbiJdfQ==