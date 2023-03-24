"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    addLeftRecursiveDefinition: function() {
        return addLeftRecursiveDefinition;
    },
    addLeftRecursiveDefinitions: function() {
        return addLeftRecursiveDefinitions;
    },
    findLeftRecursiveDefinitions: function() {
        return findLeftRecursiveDefinitions;
    },
    removeLeftRecursiveDefinitions: function() {
        return removeLeftRecursiveDefinitions;
    },
    findDirectlyLeftRecursiveDefinition: function() {
        return findDirectlyLeftRecursiveDefinition;
    },
    findDirectlyLeftRecursiveDefinitions: function() {
        return findDirectlyLeftRecursiveDefinitions;
    },
    findIndirectlyLeftRecursiveDefinitions: function() {
        return findIndirectlyLeftRecursiveDefinitions;
    }
});
var _directly = /*#__PURE__*/ _interopRequireDefault(require("../recursiveDefinition/left/directly"));
var _indirectly = /*#__PURE__*/ _interopRequireDefault(require("../recursiveDefinition/left/indirectly"));
var _array = require("../utilities/array");
function _instanceof(left, right) {
    if (right != null && typeof Symbol !== "undefined" && right[Symbol.hasInstance]) {
        return !!right[Symbol.hasInstance](left);
    } else {
        return left instanceof right;
    }
}
function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function addLeftRecursiveDefinition(addedLeftRecursiveDefinition, context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
    leftRecursiveDefinitions.push(addedLeftRecursiveDefinition);
}
function addLeftRecursiveDefinitions(addedLeftRecursiveDefinitions, context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
    (0, _array.push)(leftRecursiveDefinitions, addedLeftRecursiveDefinitions);
}
function findLeftRecursiveDefinitions(rule, callback, context) {
    if (context === undefined) {
        context = callback; ///
        callback = function(leftRecursiveDefinition) {
            return true;
        };
    }
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
    leftRecursiveDefinitions = leftRecursiveDefinitions.filter(function(leftRecursiveDefinition) {
        if (rule === null) {
            return true;
        }
        var leftRecursiveDefinitionsRule = leftRecursiveDefinition.getRule();
        if (leftRecursiveDefinitionsRule === rule) {
            var found = callback(leftRecursiveDefinition);
            if (found) {
                return true;
            }
        }
    });
    return leftRecursiveDefinitions;
}
function removeLeftRecursiveDefinitions(removedLeftRecursiveDefinitions, context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
    (0, _array.leftDifference)(leftRecursiveDefinitions, removedLeftRecursiveDefinitions);
}
function findDirectlyLeftRecursiveDefinition(rule, context) {
    if (context === undefined) {
        context = rule; ///
        rule = null;
    }
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions, directlyLeftRecursiveDefinition = leftRecursiveDefinitions.find(function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _directly.default);
        if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            if (rule === null) {
                return true;
            }
            var directlyLeftRecursiveDefinition = leftRecursiveDefinition, directlyLeftRecursiveDefinitionRule = directlyLeftRecursiveDefinition.getRule();
            if (rule === directlyLeftRecursiveDefinitionRule) {
                return true;
            }
        }
    }) || null;
    return directlyLeftRecursiveDefinition;
}
function findDirectlyLeftRecursiveDefinitions(rule, context) {
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions, directlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter(function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionDirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _directly.default);
        if (leftRecursiveDefinitionDirectlyLeftRecursiveDefinition) {
            if (rule === null) {
                return true;
            }
            var directlyLeftRecursiveDefinition = leftRecursiveDefinition, directlyLeftRecursiveDefinitionsRule = directlyLeftRecursiveDefinition.getRule();
            if (directlyLeftRecursiveDefinitionsRule === rule) {
                return true;
            }
        }
    });
    return directlyLeftRecursiveDefinitions;
}
function findIndirectlyLeftRecursiveDefinitions(rule, callback, context) {
    if (context === undefined) {
        context = callback; ///
        callback = function(indirectlyLeftRecursiveDefinition) {
            return true;
        };
    }
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions, indirectlyLeftRecursiveDefinitions = leftRecursiveDefinitions.filter(function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly.default);
        if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
            if (rule === null) {
                return true;
            }
            var indirectlyLeftRecursiveDefinition = leftRecursiveDefinition, indirectlyLeftRecursiveDefinitionRule = indirectlyLeftRecursiveDefinition.getRule();
            if (indirectlyLeftRecursiveDefinitionRule === rule) {
                var found = callback(indirectlyLeftRecursiveDefinition);
                if (found) {
                    return true;
                }
            }
        }
    });
    return indirectlyLeftRecursiveDefinitions;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIHB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gY2FsbGJhY2s7IC8vL1xuXG4gICAgY2FsbGJhY2sgPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHRydWVcbiAgfVxuXG4gIGxldCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgZm91bmQgPSBjYWxsYmFjayhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0RGlmZmVyZW5jZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlbW92ZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IHJ1bGU7IC8vL1xuXG4gICAgcnVsZSA9IG51bGw7XG4gIH1cblxuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5maW5kKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPT09IHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBjYWxsYmFjazsgLy8vXG5cbiAgICBjYWxsYmFjayA9IChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY2FsbGJhY2soaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicHVzaCIsImFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImNhbGxiYWNrIiwidW5kZWZpbmVkIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaWx0ZXIiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnNSdWxlIiwiZ2V0UnVsZSIsImZvdW5kIiwicmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnREaWZmZXJlbmNlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmQiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUnVsZSIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsIkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU9nQkEsMEJBQTBCO2VBQTFCQTs7SUFNQUMsMkJBQTJCO2VBQTNCQTs7SUFNQUMsNEJBQTRCO2VBQTVCQTs7SUE0QkFDLDhCQUE4QjtlQUE5QkE7O0lBTUFDLG1DQUFtQztlQUFuQ0E7O0lBNEJBQyxvQ0FBb0M7ZUFBcENBOztJQXNCQUMsc0NBQXNDO2VBQXRDQTs7OzZEQXJHNEI7K0RBQ0U7cUJBRVQ7Ozs7Ozs7Ozs7Ozs7QUFFOUIsU0FBU04sMkJBQTJCTyw0QkFBNEIsRUFBRUMsT0FBTyxFQUFFO0lBQ2hGLElBQU0sQUFBRUMsMkJBQTZCRCxRQUE3QkM7SUFFUkEseUJBQXlCQyxJQUFJLENBQUNIO0FBQ2hDO0FBRU8sU0FBU04sNEJBQTRCVSw2QkFBNkIsRUFBRUgsT0FBTyxFQUFFO0lBQ2xGLElBQU0sQUFBRUMsMkJBQTZCRCxRQUE3QkM7SUFFUkMsSUFBQUEsV0FBSSxFQUFDRCwwQkFBMEJFO0FBQ2pDO0FBRU8sU0FBU1QsNkJBQTZCVSxJQUFJLEVBQUVDLFFBQVEsRUFBRUwsT0FBTyxFQUFFO0lBQ3BFLElBQUlBLFlBQVlNLFdBQVc7UUFDekJOLFVBQVVLLFVBQVUsR0FBRztRQUV2QkEsV0FBVyxTQUFDRTttQkFBNEIsSUFBSTs7SUFDOUMsQ0FBQztJQUVELElBQUksQUFBRU4sMkJBQTZCRCxRQUE3QkM7SUFFTkEsMkJBQTJCQSx5QkFBeUJPLE1BQU0s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