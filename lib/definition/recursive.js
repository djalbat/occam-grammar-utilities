'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var RecursiveDefinition = function (_Definition) {
  _inherits(RecursiveDefinition, _Definition);

  function RecursiveDefinition() {
    _classCallCheck(this, RecursiveDefinition);

    return _possibleConstructorReturn(this, (RecursiveDefinition.__proto__ || Object.getPrototypeOf(RecursiveDefinition)).apply(this, arguments));
  }

  _createClass(RecursiveDefinition, null, [{
    key: 'fromNonRecursiveRuleNameAndRightRecursiveRuleName',
    value: function fromNonRecursiveRuleNameAndRightRecursiveRuleName(nonRecursiveRuleName, rightRecursiveRuleName) {
      var nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          rightRecursiveRuleNamePart = ruleNamePartFromRuleName(rightRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart, rightRecursiveRuleNamePart],
          recursiveDefinition = new Definition(parts);

      return recursiveDefinition;
    }
  }]);

  return RecursiveDefinition;
}(Definition);

module.exports = RecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL3JlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwicmlnaHRSZWN1cnNpdmVSdWxlTmFtZSIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCIsInJpZ2h0UmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicGFydHMiLCJyZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkYsYUFEL0IsQ0FDRUUsd0JBREY7O0lBR0FDLG1COzs7Ozs7Ozs7OztzRUFDcURDLG9CLEVBQXNCQyxzQixFQUF3QjtBQUNyRyxVQUFNQywyQkFBMkJKLHlCQUF5QkUsb0JBQXpCLENBQWpDO0FBQUEsVUFDTUcsNkJBQTZCTCx5QkFBeUJHLHNCQUF6QixDQURuQztBQUFBLFVBRU1HLFFBQVEsQ0FDTkYsd0JBRE0sRUFFTkMsMEJBRk0sQ0FGZDtBQUFBLFVBTU1FLHNCQUFzQixJQUFJUixVQUFKLENBQWVPLEtBQWYsQ0FONUI7O0FBUUEsYUFBT0MsbUJBQVA7QUFDRDs7OztFQVgrQlIsVTs7QUFjbENTLE9BQU9DLE9BQVAsR0FBaUJSLG1CQUFqQiIsImZpbGUiOiJyZWN1cnNpdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IHBhcnRVdGlsaXRpZXMgPSByZXF1aXJlKCcuLi91dGlsaXRpZXMvcGFydCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnMsXG4gICAgICB7IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZSB9ID0gcGFydFV0aWxpdGllcztcblxuY2xhc3MgUmVjdXJzaXZlRGVmaW5pdGlvbiBleHRlbmRzIERlZmluaXRpb24ge1xuICBzdGF0aWMgZnJvbU5vblJlY3Vyc2l2ZVJ1bGVOYW1lQW5kUmlnaHRSZWN1cnNpdmVSdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSwgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcmlnaHRSZWN1cnNpdmVSdWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocmlnaHRSZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnQsXG4gICAgICAgICAgICByaWdodFJlY3Vyc2l2ZVJ1bGVOYW1lUGFydFxuICAgICAgICAgIF0sXG4gICAgICAgICAgcmVjdXJzaXZlRGVmaW5pdGlvbiA9IG5ldyBEZWZpbml0aW9uKHBhcnRzKTtcblxuICAgIHJldHVybiByZWN1cnNpdmVEZWZpbml0aW9uO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiJdfQ==