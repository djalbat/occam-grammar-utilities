'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var NonTerminalDefinition = function () {
  function NonTerminalDefinition(definition, rule) {
    _classCallCheck(this, NonTerminalDefinition);

    this.definition = definition;

    this.rule = rule;
  }

  _createClass(NonTerminalDefinition, [{
    key: 'getDefinition',
    value: function getDefinition() {
      return this.definition;
    }
  }, {
    key: 'getRule',
    value: function getRule() {
      return this.rule;
    }
  }, {
    key: 'getParts',
    value: function getParts() {
      var parts = this.definition.getParts();

      parts = parts.reduce(function (parts, part) {
        var partNonTerminalPart = part.isNonTerminalPart();

        if (partNonTerminalPart) {
          parts.push(part);
        }

        return parts;
      });

      return parts;
    }
  }, {
    key: 'forEachPart',
    value: function forEachPart(callback) {
      var parts = this.getParts();

      parts.forEach(callback);
    }
  }], [{
    key: 'fromDefinitionAndRule',
    value: function fromDefinitionAndRule(definition, rule) {
      var nonTerminalDefinition = null;

      var parts = definition.getParts(),
          nonTerminal = parts.some(function (part) {
        var partNonTerminalPart = part.isNonTerminalPart();

        if (partNonTerminalPart) {
          return true;
        }
      });

      if (nonTerminal) {
        nonTerminalDefinition = new NonTerminalDefinition(definition, rule);
      }

      return nonTerminalDefinition;
    }
  }]);

  return NonTerminalDefinition;
}();

module.exports = NonTerminalDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblRlcm1pbmFsLmpzIl0sIm5hbWVzIjpbIk5vblRlcm1pbmFsRGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJydWxlIiwicGFydHMiLCJnZXRQYXJ0cyIsInJlZHVjZSIsInBhcnQiLCJwYXJ0Tm9uVGVybWluYWxQYXJ0IiwiaXNOb25UZXJtaW5hbFBhcnQiLCJwdXNoIiwiY2FsbGJhY2siLCJmb3JFYWNoIiwibm9uVGVybWluYWxEZWZpbml0aW9uIiwibm9uVGVybWluYWwiLCJzb21lIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OztJQUVNQSxxQjtBQUNKLGlDQUFZQyxVQUFaLEVBQXdCQyxJQUF4QixFQUE4QjtBQUFBOztBQUM1QixTQUFLRCxVQUFMLEdBQWtCQSxVQUFsQjs7QUFFQSxTQUFLQyxJQUFMLEdBQVlBLElBQVo7QUFDRDs7OztvQ0FFZTtBQUNkLGFBQU8sS0FBS0QsVUFBWjtBQUNEOzs7OEJBRVM7QUFDUixhQUFPLEtBQUtDLElBQVo7QUFDRDs7OytCQUVVO0FBQ1QsVUFBSUMsUUFBUSxLQUFLRixVQUFMLENBQWdCRyxRQUFoQixFQUFaOztBQUVBRCxjQUFRQSxNQUFNRSxNQUFOLENBQWEsVUFBQ0YsS0FBRCxFQUFRRyxJQUFSLEVBQWlCO0FBQ3BDLFlBQU1DLHNCQUFzQkQsS0FBS0UsaUJBQUwsRUFBNUI7O0FBRUEsWUFBSUQsbUJBQUosRUFBeUI7QUFDdkJKLGdCQUFNTSxJQUFOLENBQVdILElBQVg7QUFDRDs7QUFFRCxlQUFPSCxLQUFQO0FBQ0QsT0FSTyxDQUFSOztBQVVBLGFBQU9BLEtBQVA7QUFDRDs7O2dDQUVXTyxRLEVBQVU7QUFDcEIsVUFBTVAsUUFBUSxLQUFLQyxRQUFMLEVBQWQ7O0FBRUFELFlBQU1RLE9BQU4sQ0FBY0QsUUFBZDtBQUNEOzs7MENBRTRCVCxVLEVBQVlDLEksRUFBTTtBQUM3QyxVQUFJVSx3QkFBd0IsSUFBNUI7O0FBRUEsVUFBTVQsUUFBUUYsV0FBV0csUUFBWCxFQUFkO0FBQUEsVUFDTVMsY0FBY1YsTUFBTVcsSUFBTixDQUFXLFVBQUNSLElBQUQsRUFBVTtBQUNqQyxZQUFNQyxzQkFBc0JELEtBQUtFLGlCQUFMLEVBQTVCOztBQUVBLFlBQUlELG1CQUFKLEVBQXlCO0FBQ3ZCLGlCQUFPLElBQVA7QUFDRDtBQUNGLE9BTmEsQ0FEcEI7O0FBU0EsVUFBSU0sV0FBSixFQUFpQjtBQUNmRCxnQ0FBd0IsSUFBSVoscUJBQUosQ0FBMEJDLFVBQTFCLEVBQXNDQyxJQUF0QyxDQUF4QjtBQUNEOztBQUVELGFBQU9VLHFCQUFQO0FBQ0Q7Ozs7OztBQUdIRyxPQUFPQyxPQUFQLEdBQWlCaEIscUJBQWpCIiwiZmlsZSI6Im5vblRlcm1pbmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jbGFzcyBOb25UZXJtaW5hbERlZmluaXRpb24ge1xuICBjb25zdHJ1Y3RvcihkZWZpbml0aW9uLCBydWxlKSB7XG4gICAgdGhpcy5kZWZpbml0aW9uID0gZGVmaW5pdGlvbjtcblxuICAgIHRoaXMucnVsZSA9IHJ1bGU7XG4gIH1cblxuICBnZXREZWZpbml0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLmRlZmluaXRpb247XG4gIH1cblxuICBnZXRSdWxlKCkge1xuICAgIHJldHVybiB0aGlzLnJ1bGU7XG4gIH1cblxuICBnZXRQYXJ0cygpIHtcbiAgICBsZXQgcGFydHMgPSB0aGlzLmRlZmluaXRpb24uZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzID0gcGFydHMucmVkdWNlKChwYXJ0cywgcGFydCkgPT4ge1xuICAgICAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICAgICAgaWYgKHBhcnROb25UZXJtaW5hbFBhcnQpIHtcbiAgICAgICAgcGFydHMucHVzaChwYXJ0KTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHBhcnRzO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuIHBhcnRzO1xuICB9XG5cbiAgZm9yRWFjaFBhcnQoY2FsbGJhY2spIHtcbiAgICBjb25zdCBwYXJ0cyA9IHRoaXMuZ2V0UGFydHMoKTtcblxuICAgIHBhcnRzLmZvckVhY2goY2FsbGJhY2spO1xuICB9XG5cbiAgc3RhdGljIGZyb21EZWZpbml0aW9uQW5kUnVsZShkZWZpbml0aW9uLCBydWxlKSB7XG4gICAgbGV0IG5vblRlcm1pbmFsRGVmaW5pdGlvbiA9IG51bGw7XG5cbiAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKSxcbiAgICAgICAgICBub25UZXJtaW5hbCA9IHBhcnRzLnNvbWUoKHBhcnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcnROb25UZXJtaW5hbFBhcnQgPSBwYXJ0LmlzTm9uVGVybWluYWxQYXJ0KCk7XG5cbiAgICAgICAgICAgIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuXG4gICAgaWYgKG5vblRlcm1pbmFsKSB7XG4gICAgICBub25UZXJtaW5hbERlZmluaXRpb24gPSBuZXcgTm9uVGVybWluYWxEZWZpbml0aW9uKGRlZmluaXRpb24sIHJ1bGUpO1xuICAgIH1cblxuICAgIHJldHVybiBub25UZXJtaW5hbERlZmluaXRpb247XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBOb25UZXJtaW5hbERlZmluaXRpb247XG4iXX0=