'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var easy = require('easy');

var InputElement = easy.InputElement;

var ParseTreeTextarea = function (_InputElement) {
  _inherits(ParseTreeTextarea, _InputElement);

  function ParseTreeTextarea() {
    _classCallCheck(this, ParseTreeTextarea);

    return _possibleConstructorReturn(this, (ParseTreeTextarea.__proto__ || Object.getPrototypeOf(ParseTreeTextarea)).apply(this, arguments));
  }

  _createClass(ParseTreeTextarea, [{
    key: 'setParseTree',
    value: function setParseTree(parseTree) {
      if (parseTree !== null) {
        parseTree.shiftLine(); //

        var parseTreeString = parseTree.asString(),
            value = parseTreeString; ///

        this.setValue(value);
      } else {
        this.clearParseTree();
      }
    }
  }, {
    key: 'clearParseTree',
    value: function clearParseTree() {
      var value = '';

      this.setValue(value);
    }
  }, {
    key: 'parentContext',
    value: function parentContext() {
      var setParseTree = this.setParseTree.bind(this),
          clearParseTree = this.clearParseTree.bind(this);

      return {
        setParseTree: setParseTree,
        clearParseTree: clearParseTree
      };
    }
  }], [{
    key: 'fromProperties',
    value: function fromProperties(properties) {
      return InputElement.fromProperties(ParseTreeTextarea, properties);
    }
  }]);

  return ParseTreeTextarea;
}(InputElement);

Object.assign(ParseTreeTextarea, {
  tagName: 'textarea',
  defaultProperties: {
    className: 'parse-tree',
    spellCheck: 'false',
    readOnly: true
  }
});

module.exports = ParseTreeTextarea;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2VzNi9leGFtcGxlL3RleHRhcmVhL3BhcnNlVHJlZS5qcyJdLCJuYW1lcyI6WyJlYXN5IiwicmVxdWlyZSIsIklucHV0RWxlbWVudCIsIlBhcnNlVHJlZVRleHRhcmVhIiwicGFyc2VUcmVlIiwic2hpZnRMaW5lIiwicGFyc2VUcmVlU3RyaW5nIiwiYXNTdHJpbmciLCJ2YWx1ZSIsInNldFZhbHVlIiwiY2xlYXJQYXJzZVRyZWUiLCJzZXRQYXJzZVRyZWUiLCJiaW5kIiwicHJvcGVydGllcyIsImZyb21Qcm9wZXJ0aWVzIiwiT2JqZWN0IiwiYXNzaWduIiwidGFnTmFtZSIsImRlZmF1bHRQcm9wZXJ0aWVzIiwiY2xhc3NOYW1lIiwic3BlbGxDaGVjayIsInJlYWRPbmx5IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7QUFFQSxJQUFNQSxPQUFPQyxRQUFRLE1BQVIsQ0FBYjs7SUFFUUMsWSxHQUFpQkYsSSxDQUFqQkUsWTs7SUFFRkMsaUI7Ozs7Ozs7Ozs7O2lDQUNTQyxTLEVBQVc7QUFDdEIsVUFBSUEsY0FBYyxJQUFsQixFQUF3QjtBQUN0QkEsa0JBQVVDLFNBQVYsR0FEc0IsQ0FDRTs7QUFFeEIsWUFBTUMsa0JBQWtCRixVQUFVRyxRQUFWLEVBQXhCO0FBQUEsWUFDTUMsUUFBUUYsZUFEZCxDQUhzQixDQUlVOztBQUVoQyxhQUFLRyxRQUFMLENBQWNELEtBQWQ7QUFDRCxPQVBELE1BT087QUFDTCxhQUFLRSxjQUFMO0FBQ0Q7QUFDRjs7O3FDQUVnQjtBQUNmLFVBQU1GLFFBQVEsRUFBZDs7QUFFQSxXQUFLQyxRQUFMLENBQWNELEtBQWQ7QUFDRDs7O29DQUVlO0FBQ2QsVUFBTUcsZUFBZSxLQUFLQSxZQUFMLENBQWtCQyxJQUFsQixDQUF1QixJQUF2QixDQUFyQjtBQUFBLFVBQ01GLGlCQUFpQixLQUFLQSxjQUFMLENBQW9CRSxJQUFwQixDQUF5QixJQUF6QixDQUR2Qjs7QUFHQSxhQUFRO0FBQ05ELGtDQURNO0FBRU5EO0FBRk0sT0FBUjtBQUlEOzs7bUNBRXFCRyxVLEVBQVk7QUFBRSxhQUFPWCxhQUFhWSxjQUFiLENBQTRCWCxpQkFBNUIsRUFBK0NVLFVBQS9DLENBQVA7QUFBb0U7Ozs7RUE5QjFFWCxZOztBQWlDaENhLE9BQU9DLE1BQVAsQ0FBY2IsaUJBQWQsRUFBaUM7QUFDL0JjLFdBQVMsVUFEc0I7QUFFL0JDLHFCQUFtQjtBQUNqQkMsZUFBVyxZQURNO0FBRWpCQyxnQkFBWSxPQUZLO0FBR2pCQyxjQUFVO0FBSE87QUFGWSxDQUFqQzs7QUFTQUMsT0FBT0MsT0FBUCxHQUFpQnBCLGlCQUFqQiIsImZpbGUiOiJwYXJzZVRyZWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IGVhc3kgPSByZXF1aXJlKCdlYXN5Jyk7XG5cbmNvbnN0IHsgSW5wdXRFbGVtZW50IH0gPSBlYXN5O1xuXG5jbGFzcyBQYXJzZVRyZWVUZXh0YXJlYSBleHRlbmRzIElucHV0RWxlbWVudCB7XG4gIHNldFBhcnNlVHJlZShwYXJzZVRyZWUpIHtcbiAgICBpZiAocGFyc2VUcmVlICE9PSBudWxsKSB7XG4gICAgICBwYXJzZVRyZWUuc2hpZnRMaW5lKCk7ICAvL1xuXG4gICAgICBjb25zdCBwYXJzZVRyZWVTdHJpbmcgPSBwYXJzZVRyZWUuYXNTdHJpbmcoKSxcbiAgICAgICAgICAgIHZhbHVlID0gcGFyc2VUcmVlU3RyaW5nOyAgLy8vXG5cbiAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmNsZWFyUGFyc2VUcmVlKCk7XG4gICAgfVxuICB9XG5cbiAgY2xlYXJQYXJzZVRyZWUoKSB7XG4gICAgY29uc3QgdmFsdWUgPSAnJztcblxuICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xuICB9XG5cbiAgcGFyZW50Q29udGV4dCgpIHtcbiAgICBjb25zdCBzZXRQYXJzZVRyZWUgPSB0aGlzLnNldFBhcnNlVHJlZS5iaW5kKHRoaXMpLFxuICAgICAgICAgIGNsZWFyUGFyc2VUcmVlID0gdGhpcy5jbGVhclBhcnNlVHJlZS5iaW5kKHRoaXMpO1xuXG4gICAgcmV0dXJuICh7XG4gICAgICBzZXRQYXJzZVRyZWUsXG4gICAgICBjbGVhclBhcnNlVHJlZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGZyb21Qcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHsgcmV0dXJuIElucHV0RWxlbWVudC5mcm9tUHJvcGVydGllcyhQYXJzZVRyZWVUZXh0YXJlYSwgcHJvcGVydGllcyk7IH1cbn1cblxuT2JqZWN0LmFzc2lnbihQYXJzZVRyZWVUZXh0YXJlYSwge1xuICB0YWdOYW1lOiAndGV4dGFyZWEnLFxuICBkZWZhdWx0UHJvcGVydGllczoge1xuICAgIGNsYXNzTmFtZTogJ3BhcnNlLXRyZWUnLFxuICAgIHNwZWxsQ2hlY2s6ICdmYWxzZScsXG4gICAgcmVhZE9ubHk6IHRydWVcbiAgfVxufSk7XG5cbm1vZHVsZS5leHBvcnRzID0gUGFyc2VUcmVlVGV4dGFyZWE7XG4iXX0=