'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var partUtilities = require('../utilities/part');

var Definition = parsers.Definition,
    ruleNamePartFromRuleName = partUtilities.ruleNamePartFromRuleName;

var NonRecursiveDefinition = function (_Definition) {
  _inherits(NonRecursiveDefinition, _Definition);

  function NonRecursiveDefinition() {
    _classCallCheck(this, NonRecursiveDefinition);

    return _possibleConstructorReturn(this, (NonRecursiveDefinition.__proto__ || Object.getPrototypeOf(NonRecursiveDefinition)).apply(this, arguments));
  }

  _createClass(NonRecursiveDefinition, null, [{
    key: 'fromNonRecursiveRuleName',
    value: function fromNonRecursiveRuleName(nonRecursiveRuleName) {
      var nonRecursiveRuleNamePart = ruleNamePartFromRuleName(nonRecursiveRuleName),
          parts = [nonRecursiveRuleNamePart],
          nonRecursiveDefinition = new NonRecursiveDefinition(parts);

      return nonRecursiveDefinition;
    }
  }]);

  return NonRecursiveDefinition;
}(Definition);

module.exports = NonRecursiveDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblJlY3Vyc2l2ZS5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsInBhcnRVdGlsaXRpZXMiLCJEZWZpbml0aW9uIiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwiTm9uUmVjdXJzaXZlRGVmaW5pdGlvbiIsIm5vblJlY3Vyc2l2ZVJ1bGVOYW1lIiwibm9uUmVjdXJzaXZlUnVsZU5hbWVQYXJ0IiwicGFydHMiLCJub25SZWN1cnNpdmVEZWZpbml0aW9uIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsZ0JBQWdCRCxRQUFRLG1CQUFSLENBQXRCOztBQUVNLElBQUVFLFVBQUYsR0FBaUJILE9BQWpCLENBQUVHLFVBQUY7QUFBQSxJQUNFQyx3QkFERixHQUMrQkYsYUFEL0IsQ0FDRUUsd0JBREY7O0lBR0FDLHNCOzs7Ozs7Ozs7Ozs2Q0FDNEJDLG9CLEVBQXNCO0FBQ3BELFVBQU1DLDJCQUEyQkgseUJBQXlCRSxvQkFBekIsQ0FBakM7QUFBQSxVQUNNRSxRQUFRLENBQ05ELHdCQURNLENBRGQ7QUFBQSxVQUlNRSx5QkFBeUIsSUFBSUosc0JBQUosQ0FBMkJHLEtBQTNCLENBSi9COztBQU1BLGFBQU9DLHNCQUFQO0FBQ0Q7Ozs7RUFUa0NOLFU7O0FBWXJDTyxPQUFPQyxPQUFQLEdBQWlCTixzQkFBakIiLCJmaWxlIjoibm9uUmVjdXJzaXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBwYXJ0VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL3BhcnQnKTtcblxuY29uc3QgeyBEZWZpbml0aW9uIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUgfSA9IHBhcnRVdGlsaXRpZXM7XG5cbmNsYXNzIE5vblJlY3Vyc2l2ZURlZmluaXRpb24gZXh0ZW5kcyBEZWZpbml0aW9uIHtcbiAgc3RhdGljIGZyb21Ob25SZWN1cnNpdmVSdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSkge1xuICAgIGNvbnN0IG5vblJlY3Vyc2l2ZVJ1bGVOYW1lUGFydCA9IHJ1bGVOYW1lUGFydEZyb21SdWxlTmFtZShub25SZWN1cnNpdmVSdWxlTmFtZSksXG4gICAgICAgICAgcGFydHMgPSBbXG4gICAgICAgICAgICBub25SZWN1cnNpdmVSdWxlTmFtZVBhcnRcbiAgICAgICAgICBdLFxuICAgICAgICAgIG5vblJlY3Vyc2l2ZURlZmluaXRpb24gPSBuZXcgTm9uUmVjdXJzaXZlRGVmaW5pdGlvbihwYXJ0cyk7XG5cbiAgICByZXR1cm4gbm9uUmVjdXJzaXZlRGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblJlY3Vyc2l2ZURlZmluaXRpb247XG4iXX0=