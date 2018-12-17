'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var parsers = require('occam-parsers');

var UnitDefinition = require('../definition/unit');

var Definition = parsers.Definition;

var NonUnitDefinition = function (_Definition) {
  _inherits(NonUnitDefinition, _Definition);

  function NonUnitDefinition() {
    _classCallCheck(this, NonUnitDefinition);

    return _possibleConstructorReturn(this, (NonUnitDefinition.__proto__ || Object.getPrototypeOf(NonUnitDefinition)).apply(this, arguments));
  }

  _createClass(NonUnitDefinition, null, [{
    key: 'fromDefinition',
    value: function fromDefinition(definition) {
      var nonUnitDefinition = null;

      var unitDefinition = UnitDefinition.fromDefinition(definition);

      if (unitDefinition === null) {
        var parts = definition.getParts();

        nonUnitDefinition = new NonUnitDefinition(parts);
      }

      return nonUnitDefinition;
    }
  }]);

  return NonUnitDefinition;
}(Definition);

module.exports = NonUnitDefinition;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9kZWZpbml0aW9uL25vblVuaXQuanMiXSwibmFtZXMiOlsicGFyc2VycyIsInJlcXVpcmUiLCJVbml0RGVmaW5pdGlvbiIsIkRlZmluaXRpb24iLCJOb25Vbml0RGVmaW5pdGlvbiIsImRlZmluaXRpb24iLCJub25Vbml0RGVmaW5pdGlvbiIsInVuaXREZWZpbml0aW9uIiwiZnJvbURlZmluaXRpb24iLCJwYXJ0cyIsImdldFBhcnRzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxVQUFVQyxRQUFRLGVBQVIsQ0FBaEI7O0FBRUEsSUFBTUMsaUJBQWlCRCxRQUFRLG9CQUFSLENBQXZCOztJQUVRRSxVLEdBQWVILE8sQ0FBZkcsVTs7SUFFRkMsaUI7Ozs7Ozs7Ozs7O21DQUNrQkMsVSxFQUFZO0FBQ2hDLFVBQUlDLG9CQUFvQixJQUF4Qjs7QUFFQSxVQUFNQyxpQkFBaUJMLGVBQWVNLGNBQWYsQ0FBOEJILFVBQTlCLENBQXZCOztBQUVBLFVBQUlFLG1CQUFtQixJQUF2QixFQUE2QjtBQUMzQixZQUFNRSxRQUFRSixXQUFXSyxRQUFYLEVBQWQ7O0FBRUFKLDRCQUFvQixJQUFJRixpQkFBSixDQUFzQkssS0FBdEIsQ0FBcEI7QUFDRDs7QUFFRCxhQUFPSCxpQkFBUDtBQUNEOzs7O0VBYjZCSCxVOztBQWdCaENRLE9BQU9DLE9BQVAsR0FBaUJSLGlCQUFqQiIsImZpbGUiOiJub25Vbml0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG5jb25zdCBwYXJzZXJzID0gcmVxdWlyZSgnb2NjYW0tcGFyc2VycycpO1xuXG5jb25zdCBVbml0RGVmaW5pdGlvbiA9IHJlcXVpcmUoJy4uL2RlZmluaXRpb24vdW5pdCcpO1xuXG5jb25zdCB7IERlZmluaXRpb24gfSA9IHBhcnNlcnM7XG5cbmNsYXNzIE5vblVuaXREZWZpbml0aW9uIGV4dGVuZHMgRGVmaW5pdGlvbiB7XG4gIHN0YXRpYyBmcm9tRGVmaW5pdGlvbihkZWZpbml0aW9uKSB7XG4gICAgbGV0IG5vblVuaXREZWZpbml0aW9uID0gbnVsbDtcblxuICAgIGNvbnN0IHVuaXREZWZpbml0aW9uID0gVW5pdERlZmluaXRpb24uZnJvbURlZmluaXRpb24oZGVmaW5pdGlvbik7XG4gICAgXG4gICAgaWYgKHVuaXREZWZpbml0aW9uID09PSBudWxsKSB7XG4gICAgICBjb25zdCBwYXJ0cyA9IGRlZmluaXRpb24uZ2V0UGFydHMoKTtcbiAgICAgIFxuICAgICAgbm9uVW5pdERlZmluaXRpb24gPSBuZXcgTm9uVW5pdERlZmluaXRpb24ocGFydHMpO1xuICAgIH1cblxuICAgIHJldHVybiBub25Vbml0RGVmaW5pdGlvbjtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IE5vblVuaXREZWZpbml0aW9uO1xuIl19