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
    },
    retrieveGreatestIndirectlyLeftRecursiveDefinition: function() {
        return retrieveGreatestIndirectlyLeftRecursiveDefinition;
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
function retrieveGreatestIndirectlyLeftRecursiveDefinition(context) {
    var greatestIndirectlyLeftRecursiveDefinition = null;
    var leftRecursiveDefinitions = context.leftRecursiveDefinitions;
    leftRecursiveDefinitions.forEach(function(leftRecursiveDefinition) {
        var leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition = _instanceof(leftRecursiveDefinition, _indirectly.default);
        if (leftRecursiveDefinitionIndirectlyLeftRecursiveDefinition) {
            var indirectlyLeftRecursiveDefinition = leftRecursiveDefinition; ///
            if (greatestIndirectlyLeftRecursiveDefinition === null) {
                greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
            } else {
                var indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition.isGreaterThan(greatestIndirectlyLeftRecursiveDefinition);
                if (indirectlyLeftRecursiveDefinitionGreaterThanGreatestIndirectlyLeftRecursiveDefinition) {
                    greatestIndirectlyLeftRecursiveDefinition = indirectlyLeftRecursiveDefinition; ///
                }
            }
        }
    });
    return greatestIndirectlyLeftRecursiveDefinition;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY29udGV4dC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcblxuaW1wb3J0IERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gZnJvbSBcIi4uL3JlY3Vyc2l2ZURlZmluaXRpb24vbGVmdC9kaXJlY3RseVwiO1xuaW1wb3J0IEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBmcm9tIFwiLi4vcmVjdXJzaXZlRGVmaW5pdGlvbi9sZWZ0L2luZGlyZWN0bHlcIjtcblxuaW1wb3J0IHsgcHVzaCwgbGVmdERpZmZlcmVuY2UgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2FycmF5XCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbihhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5wdXNoKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKGFkZGVkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0O1xuXG4gIHB1c2gobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLCBhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zKHJ1bGUsIGNhbGxiYWNrLCBjb250ZXh0KSB7XG4gIGlmIChjb250ZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICBjb250ZXh0ID0gY2FsbGJhY2s7IC8vL1xuXG4gICAgY2FsbGJhY2sgPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHRydWVcbiAgfVxuXG4gIGxldCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4geyAgLy8vXG4gICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUnVsZSA9PT0gcnVsZSkge1xuICAgICAgY29uc3QgZm91bmQgPSBjYWxsYmFjayhsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgIGlmIChmb3VuZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH0pO1xuXG4gIHJldHVybiBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocmVtb3ZlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucywgY29udGV4dCkge1xuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0RGlmZmVyZW5jZShsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMsIHJlbW92ZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24ocnVsZSwgY29udGV4dCkge1xuICBpZiAoY29udGV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgY29udGV4dCA9IHJ1bGU7IC8vL1xuXG4gICAgcnVsZSA9IG51bGw7XG4gIH1cblxuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dCxcbiAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucy5maW5kKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICAgIGNvbnN0IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikge1xuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvblJ1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgICAgaWYgKHJ1bGUgPT09IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSkgfHwgbnVsbDtcblxuICByZXR1cm4gZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZpbmREaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyhydWxlLCBjb250ZXh0KSB7XG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMgPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZmlsdGVyKChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbikgPT4ge1xuICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gaW5zdGFuY2VvZiBEaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgaWYgKHJ1bGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPSBkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmdldFJ1bGUoKTtcblxuICAgICAgICAgIGlmIChkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUgPT09IHJ1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgcmV0dXJuIGRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmluZEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMocnVsZSwgY2FsbGJhY2ssIGNvbnRleHQpIHtcbiAgaWYgKGNvbnRleHQgPT09IHVuZGVmaW5lZCkge1xuICAgIGNvbnRleHQgPSBjYWxsYmFjazsgLy8vXG5cbiAgICBjYWxsYmFjayA9IChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHRydWVcbiAgfVxuXG4gIGNvbnN0IHsgbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIH0gPSBjb250ZXh0LFxuICAgICAgICBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zID0gbGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zLmZpbHRlcigobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICAgICAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgICAgICAgIGlmIChydWxlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiwgIC8vL1xuICAgICAgICAgICAgICAgICAgaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uUnVsZSA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbi5nZXRSdWxlKCk7XG5cbiAgICAgICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlID09PSBydWxlKSB7XG4gICAgICAgICAgICAgIGNvbnN0IGZvdW5kID0gY2FsbGJhY2soaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKTtcblxuICAgICAgICAgICAgICBpZiAoZm91bmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG5cbiAgcmV0dXJuIGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnM7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByZXRyaWV2ZUdyZWF0ZXN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKGNvbnRleHQpIHtcbiAgbGV0IGdyZWF0ZXN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gbnVsbDtcblxuICBjb25zdCB7IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyB9ID0gY29udGV4dDtcblxuICBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMuZm9yRWFjaCgobGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pID0+IHtcbiAgICBjb25zdCBsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbkluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IChsZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiBpbnN0YW5jZW9mIEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbik7XG5cbiAgICBpZiAobGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pIHtcbiAgICAgIGNvbnN0IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGxlZnRSZWN1cnNpdmVEZWZpbml0aW9uOyAgLy8vXG5cbiAgICAgIGlmIChncmVhdGVzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9PT0gbnVsbCkge1xuICAgICAgICBncmVhdGVzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiA9IGluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbjsgLy8vXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25HcmVhdGVyVGhhbkdyZWF0ZXN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uID0gaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uLmlzR3JlYXRlclRoYW4oZ3JlYXRlc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24pO1xuXG4gICAgICAgIGlmIChpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25HcmVhdGVyVGhhbkdyZWF0ZXN0SW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uKSB7XG4gICAgICAgICAgZ3JlYXRlc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24gPSBpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247IC8vL1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9KTtcblxuICByZXR1cm4gZ3JlYXRlc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb247XG59XG4iXSwibmFtZXMiOlsiYWRkTGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhZGRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwicmVtb3ZlTGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwiZmluZERpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJmaW5kSW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJldHJpZXZlR3JlYXRlc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiY29udGV4dCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInB1c2giLCJhZGRlZExlZnRSZWN1cnNpdmVEZWZpbml0aW9ucyIsInJ1bGUiLCJjYWxsYmFjayIsInVuZGVmaW5lZCIsImxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiZmlsdGVyIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zUnVsZSIsImdldFJ1bGUiLCJmb3VuZCIsInJlbW92ZWRMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJsZWZ0RGlmZmVyZW5jZSIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmaW5kIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25EaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uIiwiRGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbnMiLCJkaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uc1J1bGUiLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25zIiwibGVmdFJlY3Vyc2l2ZURlZmluaXRpb25JbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJpbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb25SdWxlIiwiZ3JlYXRlc3RJbmRpcmVjdGx5TGVmdFJlY3Vyc2l2ZURlZmluaXRpb24iLCJmb3JFYWNoIiwiaW5kaXJlY3RseUxlZnRSZWN1cnNpdmVEZWZpbml0aW9uR3JlYXRlclRoYW5HcmVhdGVzdEluZGlyZWN0bHlMZWZ0UmVjdXJzaXZlRGVmaW5pdGlvbiIsImlzR3JlYXRlclRoYW4iXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQU9nQkEsMEJBQTBCO2VBQTFCQTs7SUFNQUMsMkJBQTJCO2VBQTNCQTs7SUFNQUMsNEJBQTRCO2VBQTVCQTs7SUE0QkFDLDhCQUE4Qjtl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