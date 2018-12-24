'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var NonUnitDefinition = require('../definition/nonUnit');

var Rule = parsers.Rule;

var NonUnitsRule = function (_Rule) {
  _inherits(NonUnitsRule, _Rule);

  function NonUnitsRule() {
    _classCallCheck(this, NonUnitsRule);

    return _possibleConstructorReturn(this, (NonUnitsRule.__proto__ || Object.getPrototypeOf(NonUnitsRule)).apply(this, arguments));
  }

  _createClass(NonUnitsRule, [{
    key: 'isNonTrivial',
    value: function isNonTrivial() {
      var definitions = this.getDefinitions(),
          definitionsLength = definitions.length,
          nonTrivial = definitionsLength > 0;

      return nonTrivial;
    }
  }], [{
    key: 'fromRule',
    value: function fromRule(rule) {
      var name = rule.getName(),
          definitions = definitionsFromRule(rule),
          nonTerminalNode = rule.getNonTerminalNode(),
          nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);

      return nonUnitsRule;
    }
  }, {
    key: 'fromNameAndDefinitions',
    value: function fromNameAndDefinitions(name, definitions) {
      var nonTerminalNode = null,
          ///
      nonUnitsRule = new NonUnitsRule(name, definitions, nonTerminalNode);

      return nonUnitsRule;
    }
  }]);

  return NonUnitsRule;
}(Rule);

module.exports = NonUnitsRule;

function definitionsFromRule(rule) {
  var definitions = rule.getDefinitions();

  var nonUnitDefinitions = definitions.reduce(function (nonUnitDefinitions, definition) {
    var nonUnitDefinition = NonUnitDefinition.fromDefinition(definition);

    if (nonUnitDefinition !== null) {
      nonUnitDefinitions = nonUnitDefinitions.concat(nonUnitDefinition);
    }

    return nonUnitDefinitions;
  }, []);

  definitions = nonUnitDefinitions; ///

  return definitions;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9ydWxlL25vblVuaXRzLmpzIl0sIm5hbWVzIjpbInBhcnNlcnMiLCJyZXF1aXJlIiwiTm9uVW5pdERlZmluaXRpb24iLCJSdWxlIiwiTm9uVW5pdHNSdWxlIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImRlZmluaXRpb25zTGVuZ3RoIiwibGVuZ3RoIiwibm9uVHJpdmlhbCIsInJ1bGUiLCJuYW1lIiwiZ2V0TmFtZSIsImRlZmluaXRpb25zRnJvbVJ1bGUiLCJub25UZXJtaW5hbE5vZGUiLCJnZXROb25UZXJtaW5hbE5vZGUiLCJub25Vbml0c1J1bGUiLCJtb2R1bGUiLCJleHBvcnRzIiwibm9uVW5pdERlZmluaXRpb25zIiwicmVkdWNlIiwiZGVmaW5pdGlvbiIsIm5vblVuaXREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJjb25jYXQiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLG9CQUFvQkQsUUFBUSx1QkFBUixDQUExQjs7SUFFUUUsSSxHQUFTSCxPLENBQVRHLEk7O0lBRUZDLFk7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2IsVUFBTUMsY0FBYyxLQUFLQyxjQUFMLEVBQXBCO0FBQUEsVUFDTUMsb0JBQW9CRixZQUFZRyxNQUR0QztBQUFBLFVBRU1DLGFBQWNGLG9CQUFvQixDQUZ4Qzs7QUFJQSxhQUFPRSxVQUFQO0FBQ0Q7Ozs2QkFFZUMsSSxFQUFNO0FBQ3BCLFVBQU1DLE9BQU9ELEtBQUtFLE9BQUwsRUFBYjtBQUFBLFVBQ01QLGNBQWNRLG9CQUFvQkgsSUFBcEIsQ0FEcEI7QUFBQSxVQUVNSSxrQkFBa0JKLEtBQUtLLGtCQUFMLEVBRnhCO0FBQUEsVUFHTUMsZUFBZSxJQUFJWixZQUFKLENBQWlCTyxJQUFqQixFQUF1Qk4sV0FBdkIsRUFBb0NTLGVBQXBDLENBSHJCOztBQUtBLGFBQU9FLFlBQVA7QUFDRDs7OzJDQUU2QkwsSSxFQUFNTixXLEVBQWE7QUFDL0MsVUFBTVMsa0JBQWtCLElBQXhCO0FBQUEsVUFBOEI7QUFDeEJFLHFCQUFlLElBQUlaLFlBQUosQ0FBaUJPLElBQWpCLEVBQXVCTixXQUF2QixFQUFvQ1MsZUFBcEMsQ0FEckI7O0FBR0EsYUFBT0UsWUFBUDtBQUNEOzs7O0VBdkJ3QmIsSTs7QUEwQjNCYyxPQUFPQyxPQUFQLEdBQWlCZCxZQUFqQjs7QUFFQSxTQUFTUyxtQkFBVCxDQUE2QkgsSUFBN0IsRUFBbUM7QUFDakMsTUFBSUwsY0FBY0ssS0FBS0osY0FBTCxFQUFsQjs7QUFFQSxNQUFNYSxxQkFBcUJkLFlBQVllLE1BQVosQ0FBbUIsVUFBU0Qsa0JBQVQsRUFBNkJFLFVBQTdCLEVBQXlDO0FBQ3JGLFFBQU1DLG9CQUFvQnBCLGtCQUFrQnFCLGNBQWxCLENBQWlDRixVQUFqQyxDQUExQjs7QUFFQSxRQUFJQyxzQkFBc0IsSUFBMUIsRUFBZ0M7QUFDOUJILDJCQUFxQkEsbUJBQW1CSyxNQUFuQixDQUEwQkYsaUJBQTFCLENBQXJCO0FBQ0Q7O0FBRUQsV0FBT0gsa0JBQVA7QUFDRCxHQVIwQixFQVF4QixFQVJ3QixDQUEzQjs7QUFVQWQsZ0JBQWNjLGtCQUFkLENBYmlDLENBYUM7O0FBRWxDLFNBQU9kLFdBQVA7QUFDRCIsImZpbGUiOiJub25Vbml0cy5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKTtcblxuY29uc3QgTm9uVW5pdERlZmluaXRpb24gPSByZXF1aXJlKCcuLi9kZWZpbml0aW9uL25vblVuaXQnKTtcblxuY29uc3QgeyBSdWxlIH0gPSBwYXJzZXJzO1xuXG5jbGFzcyBOb25Vbml0c1J1bGUgZXh0ZW5kcyBSdWxlIHtcbiAgaXNOb25Ucml2aWFsKCkge1xuICAgIGNvbnN0IGRlZmluaXRpb25zID0gdGhpcy5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICAgIGRlZmluaXRpb25zTGVuZ3RoID0gZGVmaW5pdGlvbnMubGVuZ3RoLFxuICAgICAgICAgIG5vblRyaXZpYWwgPSAoZGVmaW5pdGlvbnNMZW5ndGggPiAwKTtcblxuICAgIHJldHVybiBub25Ucml2aWFsO1xuICB9XG5cbiAgc3RhdGljIGZyb21SdWxlKHJ1bGUpIHtcbiAgICBjb25zdCBuYW1lID0gcnVsZS5nZXROYW1lKCksXG4gICAgICAgICAgZGVmaW5pdGlvbnMgPSBkZWZpbml0aW9uc0Zyb21SdWxlKHJ1bGUpLFxuICAgICAgICAgIG5vblRlcm1pbmFsTm9kZSA9IHJ1bGUuZ2V0Tm9uVGVybWluYWxOb2RlKCksXG4gICAgICAgICAgbm9uVW5pdHNSdWxlID0gbmV3IE5vblVuaXRzUnVsZShuYW1lLCBkZWZpbml0aW9ucywgbm9uVGVybWluYWxOb2RlKTtcblxuICAgIHJldHVybiBub25Vbml0c1J1bGU7XG4gIH1cblxuICBzdGF0aWMgZnJvbU5hbWVBbmREZWZpbml0aW9ucyhuYW1lLCBkZWZpbml0aW9ucykge1xuICAgIGNvbnN0IG5vblRlcm1pbmFsTm9kZSA9IG51bGwsIC8vL1xuICAgICAgICAgIG5vblVuaXRzUnVsZSA9IG5ldyBOb25Vbml0c1J1bGUobmFtZSwgZGVmaW5pdGlvbnMsIG5vblRlcm1pbmFsTm9kZSk7XG5cbiAgICByZXR1cm4gbm9uVW5pdHNSdWxlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gTm9uVW5pdHNSdWxlO1xuXG5mdW5jdGlvbiBkZWZpbml0aW9uc0Zyb21SdWxlKHJ1bGUpIHtcbiAgbGV0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpO1xuXG4gIGNvbnN0IG5vblVuaXREZWZpbml0aW9ucyA9IGRlZmluaXRpb25zLnJlZHVjZShmdW5jdGlvbihub25Vbml0RGVmaW5pdGlvbnMsIGRlZmluaXRpb24pIHtcbiAgICBjb25zdCBub25Vbml0RGVmaW5pdGlvbiA9IE5vblVuaXREZWZpbml0aW9uLmZyb21EZWZpbml0aW9uKGRlZmluaXRpb24pO1xuXG4gICAgaWYgKG5vblVuaXREZWZpbml0aW9uICE9PSBudWxsKSB7XG4gICAgICBub25Vbml0RGVmaW5pdGlvbnMgPSBub25Vbml0RGVmaW5pdGlvbnMuY29uY2F0KG5vblVuaXREZWZpbml0aW9uKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbm9uVW5pdERlZmluaXRpb25zO1xuICB9LCBbXSk7XG5cbiAgZGVmaW5pdGlvbnMgPSBub25Vbml0RGVmaW5pdGlvbnM7IC8vL1xuXG4gIHJldHVybiBkZWZpbml0aW9ucztcbn1cbiJdfQ==