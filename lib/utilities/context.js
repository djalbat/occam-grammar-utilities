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
var _definition = require("../utilities/definition");
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
function findLeftRecursiveDefinitions(rule, callback) {
    var definitions = rule.getDefinitions(), leftRecursiveDefinitions = definitions.filter(function(definition) {
        var definitionLeftRecursive = (0, _definition.isDefinitionLeftRecursive)(definition);
        if (definitionLeftRecursive) {
            var leftRecursiveDefinition = definition, found = callback(leftRecursiveDefinition);
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5pbXBvcnQgeyBpc0RlZmluaXRpb25MZWZ0UmVjdXJzaXZlIH0gZnJvbSBcIi4uL3V0aWxpdGllcy9kZWZpbml0aW9uXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIHB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNhbGxiYWNrKSB7XG4gIGNvbnN0IGRlZmluaXRpb25zID0gcnVsZS5nZXREZWZpbml0aW9ucygpLFxuICAgICAgICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBkZWZpbml0aW9ucy5maWx0ZXIoKGRlZmluaXRpb24pID0+IHsgIC8vL1xuICAgICAgICAgIGNvbnN0IGRlZmluaXRpb25MZWZ0UmVjdXJzaXZlID0gaXNEZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZShkZWZpbml0aW9uKTtcblxuICAgICAgICAgIGlmIChkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSkge1xuICAgICAgICAgICAgY29uc3QgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBkZWZpbml0aW9uLFxuICAgICAgICAgICAgICAgICAgZm91bmQgPSBjYWxsYmFjayhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0RGlmZmVyZW5jZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlbW92ZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IHJ1bGU7IC8vL1xuXG4gICAgcnVsZSA9IG51bGw7XG4gIH1cblxuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5maW5kKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPT09IHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBjYWxsYmFjazsgLy8vXG5cbiAgICBjYWxsYmFjayA9IChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY2FsbGJhY2soaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG4iXSwibmFtZXMiOlsiYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJjb250ZXh0IiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicHVzaCIsImFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicnVsZSIsImNhbGxiYWNrIiwiZGVmaW5pdGlvbnMiLCJnZXREZWZpbml0aW9ucyIsImZpbHRlciIsImRlZmluaXRpb24iLCJkZWZpbml0aW9uTGVmdFJlY3Vyc2l2ZSIsImlzRGVmaW5pdGlvbkxlZnRSZWN1cnNpdmUiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZvdW5kIiwicmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsImxlZnREaWZmZXJlbmNlIiwidW5kZWZpbmVkIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImZpbmQiLCJsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUiLCJnZXRSdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFRZ0JBLDBCQUEwQjtlQUExQkE7O0lBTUFDLDJCQUEyQjtlQUEzQkE7O0lBTUFDLDRCQUE0QjtlQUE1QkE7O0lBa0JBQyw4QkFBOEI7ZUFBOUJBOztJQU1BQyxtQ0FBbUM7ZUFBbkNBOztJQTRCQUMsb0NBQW9DO2VBQXBDQTs7SUFzQkFDLHNDQUFzQztlQUF0Q0E7Ozs2REE1RjRCOytEQUNFO3FCQUVUOzBCQUNLOzs7Ozs7Ozs7Ozs7O0FBRW5DLFNBQVNOLDJCQUEyQk8sNEJBQTRCLEVBQUVDLE9BQU8sRUFBRTtJQUNoRixJQUFNLEFBQUVDLDJCQUE2QkQsUUFBN0JDO0lBRVJBLHlCQUF5QkMsSUFBSSxDQUFDSDtBQUNoQztBQUVPLFNBQVNOLDRCQUE0QlUsNkJBQTZCLEVBQUVILE9BQU8sRUFBRTtJQUNsRixJQUFNLEFBQUVDLDJCQUE2QkQsUUFBN0JDO0lBRVJDLElBQUFBLFdBQUksRUFBQ0QsMEJBQTBCRTtBQUNqQztBQUVPLFNBQVNULDZCQUE2QlUsSUFBSSxFQUFFQyxRQUFRLEVBQUU7SUFDM0QsSUFBTUMsY0FBY0YsS0FBS0csY0FBYyxJQUNqQ04sMkJBQTJCSyxZQUFZRSxNQUFNLENBQUMsU0FBQ0MsWUFBZTtRQUM1RCxJQUFNQywwQkFBMEJDLElBQUFBLHFDQUF5QixFQUFDRjtRQUUxRCxJQUFJQyx5QkFBeUI7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