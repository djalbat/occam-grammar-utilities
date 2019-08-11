'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy'),
    lexers = require('occam-lexers'),
    parsers = require('occam-parsers'),
    easyLayout = require('easy-layout');

var exampleBNF = require('../example/bnf'),
    BNFTextarea = require('./textarea/bnf'),
    rulesUtilities = require('../utilities/rules'),
    AdjustedBNFTextarea = require('./textarea/adjustedBNF'),
    MainVerticalSplitter = require('./verticalSplitter/main'),
    eliminateLeftRecursion = require('../eliminateLeftRecursion');

var Element = easy.Element,
    BNFLexer = lexers.BNFLexer,
    BNFParser = parsers.BNFParser,
    rulesAsString = rulesUtilities.rulesAsString,
    SizeableElement = easyLayout.SizeableElement;


var bnfLexer = BNFLexer.fromNothing(),
    bnfParser = BNFParser.fromNothing();

var View = function (_Element) {
  _inherits(View, _Element);

  function View() {
    _classCallCheck(this, View);

    return _possibleConstructorReturn(this, (View.__proto__ || Object.getPrototypeOf(View)).apply(this, arguments));
  }

  _createClass(View, [{
    key: 'keyUpHandler',
    value: function keyUpHandler() {
      try {
        var bnf = this.getBNF(),
            tokens = bnfLexer.tokensFromBNF(bnf);

        var rules = void 0;

        rules = bnfParser.rulesFromTokens(tokens);

        rules = eliminateLeftRecursion(rules);

        var multiLine = true,
            rulesString = rulesAsString(rules, multiLine),
            adjustedBNF = rulesString; ///

        this.hideError();

        this.setAdjustedBNF(adjustedBNF);
      } catch (error) {
        this.showError();

        this.clearAdjustedBNF();
      }
    }
  }, {
    key: 'childElements',
    value: function childElements(properties) {
      var keyUpHandler = this.keyUpHandler.bind(this);

      return React.createElement(
        'div',
        { className: 'columns' },
        React.createElement(
          SizeableElement,
          null,
          React.createElement(
            'h2',
            null,
            'BNF'
          ),
          React.createElement(BNFTextarea, { onKeyUp: keyUpHandler })
        ),
        React.createElement(MainVerticalSplitter, null),
        React.createElement(
          'div',
          { className: 'column' },
          React.createElement(
            'h2',
            null,
            'Adjusted BNF'
          ),
          React.createElement(AdjustedBNFTextarea, null)
        )
      );
    }
  }, {
    key: 'initialise',
    value: function initialise() {
      this.assignContext();

      var bnf = exampleBNF; ///

      this.setBNF(bnf);

      this.keyUpHandler();
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      var view = Element.fromProperties(View, properties);

      view.initialise();

      return view;
    }
  }]);

  return View;
}(Element);

Object.assign(View, {
  tagName: 'div',
  defaultProperties: {
    className: 'view'
  }
});

module.exports = View;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi9leGFtcGxlL3ZpZXcuanMiXSwibmFtZXMiOlsiZWFzeSIsInJlcXVpcmUiLCJsZXhlcnMiLCJwYXJzZXJzIiwiZWFzeUxheW91dCIsImV4YW1wbGVCTkYiLCJCTkZUZXh0YXJlYSIsInJ1bGVzVXRpbGl0aWVzIiwiQWRqdXN0ZWRCTkZUZXh0YXJlYSIsIk1haW5WZXJ0aWNhbFNwbGl0dGVyIiwiZWxpbWluYXRlTGVmdFJlY3Vyc2lvbiIsIkVsZW1lbnQiLCJCTkZMZXhlciIsIkJORlBhcnNlciIsInJ1bGVzQXNTdHJpbmciLCJTaXplYWJsZUVsZW1lbnQiLCJibmZMZXhlciIsImZyb21Ob3RoaW5nIiwiYm5mUGFyc2VyIiwiVmlldyIsImJuZiIsImdldEJORiIsInRva2VucyIsInRva2Vuc0Zyb21CTkYiLCJydWxlcyIsInJ1bGVzRnJvbVRva2VucyIsIm11bHRpTGluZSIsInJ1bGVzU3RyaW5nIiwiYWRqdXN0ZWRCTkYiLCJoaWRlRXJyb3IiLCJzZXRBZGp1c3RlZEJORiIsImVycm9yIiwic2hvd0Vycm9yIiwiY2xlYXJBZGp1c3RlZEJORiIsInByb3BlcnRpZXMiLCJrZXlVcEhhbmRsZXIiLCJiaW5kIiwiYXNzaWduQ29udGV4dCIsInNldEJORiIsInZpZXciLCJmcm9tUHJvcGVydGllcyIsImluaXRpYWxpc2UiLCJPYmplY3QiLCJhc3NpZ24iLCJ0YWdOYW1lIiwiZGVmYXVsdFByb3BlcnRpZXMiLCJjbGFzc05hbWUiLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7OztBQUVBLElBQU1BLE9BQU9DLFFBQVEsTUFBUixDQUFiO0FBQUEsSUFDTUMsU0FBU0QsUUFBUSxjQUFSLENBRGY7QUFBQSxJQUVNRSxVQUFVRixRQUFRLGVBQVIsQ0FGaEI7QUFBQSxJQUdNRyxhQUFhSCxRQUFRLGFBQVIsQ0FIbkI7O0FBS0EsSUFBTUksYUFBYUosUUFBUSxnQkFBUixDQUFuQjtBQUFBLElBQ01LLGNBQWNMLFFBQVEsZ0JBQVIsQ0FEcEI7QUFBQSxJQUVNTSxpQkFBaUJOLFFBQVEsb0JBQVIsQ0FGdkI7QUFBQSxJQUdNTyxzQkFBc0JQLFFBQVEsd0JBQVIsQ0FINUI7QUFBQSxJQUlNUSx1QkFBdUJSLFFBQVEseUJBQVIsQ0FKN0I7QUFBQSxJQUtNUyx5QkFBeUJULFFBQVEsMkJBQVIsQ0FML0I7O0FBT00sSUFBRVUsT0FBRixHQUFjWCxJQUFkLENBQUVXLE9BQUY7QUFBQSxJQUNFQyxRQURGLEdBQ2VWLE1BRGYsQ0FDRVUsUUFERjtBQUFBLElBRUVDLFNBRkYsR0FFZ0JWLE9BRmhCLENBRUVVLFNBRkY7QUFBQSxJQUdFQyxhQUhGLEdBR29CUCxjQUhwQixDQUdFTyxhQUhGO0FBQUEsSUFJRUMsZUFKRixHQUlzQlgsVUFKdEIsQ0FJRVcsZUFKRjs7O0FBTU4sSUFBTUMsV0FBV0osU0FBU0ssV0FBVCxFQUFqQjtBQUFBLElBQ01DLFlBQVlMLFVBQVVJLFdBQVYsRUFEbEI7O0lBR01FLEk7Ozs7Ozs7Ozs7O21DQUNXO0FBQ2IsVUFBSTtBQUNGLFlBQU1DLE1BQU0sS0FBS0MsTUFBTCxFQUFaO0FBQUEsWUFDTUMsU0FBU04sU0FBU08sYUFBVCxDQUF1QkgsR0FBdkIsQ0FEZjs7QUFHQSxZQUFJSSxjQUFKOztBQUVBQSxnQkFBUU4sVUFBVU8sZUFBVixDQUEwQkgsTUFBMUIsQ0FBUjs7QUFFQUUsZ0JBQVFkLHVCQUF1QmMsS0FBdkIsQ0FBUjs7QUFFQSxZQUFNRSxZQUFZLElBQWxCO0FBQUEsWUFDTUMsY0FBY2IsY0FBY1UsS0FBZCxFQUFxQkUsU0FBckIsQ0FEcEI7QUFBQSxZQUVNRSxjQUFjRCxXQUZwQixDQVZFLENBWWdDOztBQUVsQyxhQUFLRSxTQUFMOztBQUVBLGFBQUtDLGNBQUwsQ0FBb0JGLFdBQXBCO0FBQ0QsT0FqQkQsQ0FpQkUsT0FBT0csS0FBUCxFQUFjO0FBQ2QsYUFBS0MsU0FBTDs7QUFFQSxhQUFLQyxnQkFBTDtBQUNEO0FBQ0Y7OztrQ0FFYUMsVSxFQUFZO0FBQ3hCLFVBQU1DLGVBQWUsS0FBS0EsWUFBTCxDQUFrQkMsSUFBbEIsQ0FBdUIsSUFBdkIsQ0FBckI7O0FBRUEsYUFFRTtBQUFBO0FBQUEsVUFBSyxXQUFVLFNBQWY7QUFDRTtBQUFDLHlCQUFEO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFFRSw4QkFBQyxXQUFELElBQWEsU0FBU0QsWUFBdEI7QUFGRixTQURGO0FBS0UsNEJBQUMsb0JBQUQsT0FMRjtBQU1FO0FBQUE7QUFBQSxZQUFLLFdBQVUsUUFBZjtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUVFLDhCQUFDLG1CQUFEO0FBRkY7QUFORixPQUZGO0FBZUQ7OztpQ0FFWTtBQUNYLFdBQUtFLGFBQUw7O0FBRUEsVUFBTWpCLE1BQU1mLFVBQVosQ0FIVyxDQUdhOztBQUV4QixXQUFLaUMsTUFBTCxDQUFZbEIsR0FBWjs7QUFFQSxXQUFLZSxZQUFMO0FBQ0Q7OzttQ0FFcUJELFUsRUFBWTtBQUNoQyxVQUFNSyxPQUFPNUIsUUFBUTZCLGNBQVIsQ0FBdUJyQixJQUF2QixFQUE2QmUsVUFBN0IsQ0FBYjs7QUFFQUssV0FBS0UsVUFBTDs7QUFFQSxhQUFPRixJQUFQO0FBQ0Q7Ozs7RUE5RGdCNUIsTzs7QUFpRW5CK0IsT0FBT0MsTUFBUCxDQUFjeEIsSUFBZCxFQUFvQjtBQUNsQnlCLFdBQVMsS0FEUztBQUVsQkMscUJBQW1CO0FBQ2pCQyxlQUFXO0FBRE07QUFGRCxDQUFwQjs7QUFPQUMsT0FBT0MsT0FBUCxHQUFpQjdCLElBQWpCIiwiZmlsZSI6InZpZXcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5JyksXG4gICAgICBsZXhlcnMgPSByZXF1aXJlKCdvY2NhbS1sZXhlcnMnKSxcbiAgICAgIHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyksXG4gICAgICBlYXN5TGF5b3V0ID0gcmVxdWlyZSgnZWFzeS1sYXlvdXQnKTtcblxuY29uc3QgZXhhbXBsZUJORiA9IHJlcXVpcmUoJy4uL2V4YW1wbGUvYm5mJyksXG4gICAgICBCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYm5mJyksXG4gICAgICBydWxlc1V0aWxpdGllcyA9IHJlcXVpcmUoJy4uL3V0aWxpdGllcy9ydWxlcycpLFxuICAgICAgQWRqdXN0ZWRCTkZUZXh0YXJlYSA9IHJlcXVpcmUoJy4vdGV4dGFyZWEvYWRqdXN0ZWRCTkYnKSxcbiAgICAgIE1haW5WZXJ0aWNhbFNwbGl0dGVyID0gcmVxdWlyZSgnLi92ZXJ0aWNhbFNwbGl0dGVyL21haW4nKSxcbiAgICAgIGVsaW1pbmF0ZUxlZnRSZWN1cnNpb24gPSByZXF1aXJlKCcuLi9lbGltaW5hdGVMZWZ0UmVjdXJzaW9uJyk7XG5cbmNvbnN0IHsgRWxlbWVudCB9ID0gZWFzeSxcbiAgICAgIHsgQk5GTGV4ZXIgfSA9IGxleGVycyxcbiAgICAgIHsgQk5GUGFyc2VyIH0gPSBwYXJzZXJzLFxuICAgICAgeyBydWxlc0FzU3RyaW5nIH0gPSBydWxlc1V0aWxpdGllcyxcbiAgICAgIHsgU2l6ZWFibGVFbGVtZW50IH0gPSBlYXN5TGF5b3V0O1xuXG5jb25zdCBibmZMZXhlciA9IEJORkxleGVyLmZyb21Ob3RoaW5nKCksXG4gICAgICBibmZQYXJzZXIgPSBCTkZQYXJzZXIuZnJvbU5vdGhpbmcoKTtcblxuY2xhc3MgVmlldyBleHRlbmRzIEVsZW1lbnQge1xuICBrZXlVcEhhbmRsZXIoKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGJuZiA9IHRoaXMuZ2V0Qk5GKCksXG4gICAgICAgICAgICB0b2tlbnMgPSBibmZMZXhlci50b2tlbnNGcm9tQk5GKGJuZik7XG5cbiAgICAgIGxldCBydWxlcztcblxuICAgICAgcnVsZXMgPSBibmZQYXJzZXIucnVsZXNGcm9tVG9rZW5zKHRva2Vucyk7XG5cbiAgICAgIHJ1bGVzID0gZWxpbWluYXRlTGVmdFJlY3Vyc2lvbihydWxlcyk7XG5cbiAgICAgIGNvbnN0IG11bHRpTGluZSA9IHRydWUsXG4gICAgICAgICAgICBydWxlc1N0cmluZyA9IHJ1bGVzQXNTdHJpbmcocnVsZXMsIG11bHRpTGluZSksXG4gICAgICAgICAgICBhZGp1c3RlZEJORiA9IHJ1bGVzU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuaGlkZUVycm9yKCk7XG5cbiAgICAgIHRoaXMuc2V0QWRqdXN0ZWRCTkYoYWRqdXN0ZWRCTkYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICB0aGlzLnNob3dFcnJvcigpO1xuXG4gICAgICB0aGlzLmNsZWFyQWRqdXN0ZWRCTkYoKTtcbiAgICB9XG4gIH1cblxuICBjaGlsZEVsZW1lbnRzKHByb3BlcnRpZXMpIHtcbiAgICBjb25zdCBrZXlVcEhhbmRsZXIgPSB0aGlzLmtleVVwSGFuZGxlci5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuIChcblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2x1bW5zXCI+XG4gICAgICAgIDxTaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgICAgPGgyPkJORjwvaDI+XG4gICAgICAgICAgPEJORlRleHRhcmVhIG9uS2V5VXA9e2tleVVwSGFuZGxlcn0gLz5cbiAgICAgICAgPC9TaXplYWJsZUVsZW1lbnQ+XG4gICAgICAgIDxNYWluVmVydGljYWxTcGxpdHRlciAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbHVtblwiPlxuICAgICAgICAgIDxoMj5BZGp1c3RlZCBCTkY8L2gyPlxuICAgICAgICAgIDxBZGp1c3RlZEJORlRleHRhcmVhIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICApO1xuICB9XG5cbiAgaW5pdGlhbGlzZSgpIHtcbiAgICB0aGlzLmFzc2lnbkNvbnRleHQoKTtcblxuICAgIGNvbnN0IGJuZiA9IGV4YW1wbGVCTkY7IC8vL1xuXG4gICAgdGhpcy5zZXRCTkYoYm5mKTtcblxuICAgIHRoaXMua2V5VXBIYW5kbGVyKCk7XG4gIH1cblxuICBzdGF0aWMgZnJvbVByb3BlcnRpZXMocHJvcGVydGllcykge1xuICAgIGNvbnN0IHZpZXcgPSBFbGVtZW50LmZyb21Qcm9wZXJ0aWVzKFZpZXcsIHByb3BlcnRpZXMpO1xuXG4gICAgdmlldy5pbml0aWFsaXNlKCk7XG5cbiAgICByZXR1cm4gdmlld1xuICB9XG59XG5cbk9iamVjdC5hc3NpZ24oVmlldywge1xuICB0YWdOYW1lOiAnZGl2JyxcbiAgZGVmYXVsdFByb3BlcnRpZXM6IHtcbiAgICBjbGFzc05hbWU6ICd2aWV3J1xuICB9XG59KTtcblxubW9kdWxlLmV4cG9ydHMgPSBWaWV3O1xuIl19