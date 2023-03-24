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
    first: function() {
        return first;
    },
    last: function() {
        return last;
    },
    find: function() {
        return find;
    },
    filter: function() {
        return filter;
    },
    front: function() {
        return front;
    },
    head: function() {
        return head;
    },
    tail: function() {
        return tail;
    },
    push: function() {
        return push;
    },
    unshift: function() {
        return unshift;
    },
    backwardsSome: function() {
        return backwardsSome;
    },
    backwardsFind: function() {
        return backwardsFind;
    },
    backwardsEvery: function() {
        return backwardsEvery;
    },
    flatten: function() {
        return flatten;
    },
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
function flatten(arrays) {
    var flattenedArray = [];
    arrays.forEach(function(array) {
        var elements = array; ///
        elements.forEach(function(element) {
            var flattenedArrayIncludesElement = flattenedArray.includes(element);
            if (!flattenedArrayIncludesElement) {
                flattenedArray.push(element);
            }
        });
    });
    return flattenedArray;
}
function leftDifference(arrayA, arrayB) {
    filter(arrayA, function(elementA) {
        var arrayBIncludesElementA = arrayB.includes(elementA);
        if (!arrayBIncludesElementA) {
            return true;
        }
    });
}
function rightDifference(arrayA, arrayB) {
    filter(arrayB, function(elementB) {
        var arrayAIncludesElementB = arrayA.includes(elementB);
        if (!arrayAIncludesElementB) {
            return true;
        }
    });
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmluZCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgYmFja3dhcmRzU29tZSwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnkgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gZmxhdHRlbihhcnJheXMpIHtcbiAgY29uc3QgZmxhdHRlbmVkQXJyYXkgPSBbXTtcblxuICBhcnJheXMuZm9yRWFjaCgoYXJyYXkpID0+IHtcbiAgICBjb25zdCBlbGVtZW50cyA9IGFycmF5OyAvLy9cblxuICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IGZsYXR0ZW5lZEFycmF5SW5jbHVkZXNFbGVtZW50ID0gZmxhdHRlbmVkQXJyYXkuaW5jbHVkZXMoZWxlbWVudCk7XG5cbiAgICAgIGlmICghZmxhdHRlbmVkQXJyYXlJbmNsdWRlc0VsZW1lbnQpIHtcbiAgICAgICAgZmxhdHRlbmVkQXJyYXkucHVzaChlbGVtZW50KTtcbiAgICAgIH1cbiAgICB9KVxuICB9KVxuXG4gIHJldHVybiBmbGF0dGVuZWRBcnJheTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGxlZnREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUEsIChlbGVtZW50QSkgPT4ge1xuICAgIGNvbnN0IGFycmF5QkluY2x1ZGVzRWxlbWVudEEgPSBhcnJheUIuaW5jbHVkZXMoZWxlbWVudEEpO1xuXG4gICAgaWYgKCFhcnJheUJJbmNsdWRlc0VsZW1lbnRBKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gcmlnaHREaWZmZXJlbmNlKGFycmF5QSwgYXJyYXlCKSB7XG4gIGZpbHRlcihhcnJheUIsIChlbGVtZW50QikgPT4ge1xuICAgIGNvbnN0IGFycmF5QUluY2x1ZGVzRWxlbWVudEIgPSBhcnJheUEuaW5jbHVkZXMoZWxlbWVudEIpO1xuXG4gICAgaWYgKCFhcnJheUFJbmNsdWRlc0VsZW1lbnRCKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH0pO1xufVxuIl0sIm5hbWVzIjpbImZpcnN0IiwibGFzdCIsImZpbmQiLCJmaWx0ZXIiLCJmcm9udCIsImhlYWQiLCJ0YWlsIiwicHVzaCIsInVuc2hpZnQiLCJiYWNrd2FyZHNTb21lIiwiYmFja3dhcmRzRmluZCIsImJhY2t3YXJkc0V2ZXJ5IiwiZmxhdHRlbiIsImxlZnREaWZmZXJlbmNlIiwicmlnaHREaWZmZXJlbmNlIiwiYXJyYXlVdGlsaXRpZXMiLCJhcnJheXMiLCJmbGF0dGVuZWRBcnJheSIsImZvckVhY2giLCJhcnJheSIsImVsZW1lbnRzIiwiZWxlbWVudCIsImZsYXR0ZW5lZEFycmF5SW5jbHVkZXNFbGVtZW50IiwiaW5jbHVkZXMiLCJhcnJheUEiLCJhcnJheUIiLCJlbGVtZW50QSIsImFycmF5QkluY2x1ZGVzRWxlbWVudEEiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUllQSxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxNQUFNO2VBQU5BOztJQUFRQyxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxPQUFPO2VBQVBBOztJQUFTQyxhQUFhO2VBQWJBOztJQUFlQyxhQUFhO2VBQWJBOztJQUFlQyxjQUFjO2VBQWRBOztJQUUxRkMsT0FBTztlQUFQQTs7SUFrQkFDLGNBQWM7ZUFBZEE7O0lBVUFDLGVBQWU7ZUFBZkE7Ozt5QkFoQ2U7QUFFeEIsSUFBUWQsUUFBOEdlLHlCQUFjLENBQTVIZixPQUFPQyxPQUF1R2MseUJBQWMsQ0FBckhkLE1BQU1DLE9BQWlHYSx5QkFBYyxDQUEvR2IsTUFBTUMsU0FBMkZZLHlCQUFjLENBQXpHWixRQUFRQyxRQUFtRlcseUJBQWMsQ0FBakdYLE9BQU9DLE9BQTRFVSx5QkFBYyxDQUExRlYsTUFBTUMsT0FBc0VTLHlCQUFjLENBQXBGVCxNQUFNQyxPQUFnRVEseUJBQWMsQ0FBOUVSLE1BQU1DLFVBQTBETyx5QkFBYyxDQUF4RVAsU0FBU0MsZ0JBQWlETSx5QkFBYyxDQUEvRE4sZUFBZUMsZ0JBQWtDSyx5QkFBYyxDQUFoREwsZUFBZUMsaUJBQW1CSSx5QkFBYyxDQUFqQ0o7QUFFbkcsU0FBU0MsUUFBUUksTUFBTSxFQUFFO0lBQzlCLElBQU1DLGlCQUFpQixFQUFFO0lBRXpCRCxPQUFPRSxPQUFPLENBQUMsU0FBQ0MsT0FBVTtRQUN4QixJQUFNQyxXQUFXRCxPQUFPLEdBQUc7UUFFM0JDLFNBQVNGLE9BQU8sQ0FBQyxTQUFDRyxTQUFZO1lBQzVCLElBQU1DLGdDQUFnQ0wsZUFBZU0sUUFBUSxDQUFDRjtZQUU5RCxJQUFJLENBQUNDLCtCQUErQjtnQkFDbENMLGVBQWVWLElBQUksQ0FBQ2M7WUFDdEIsQ0FBQztRQUNIO0lBQ0Y7SUFFQSxPQUFPSjtBQUNUO0FBRU8sU0FBU0osZUFBZVcsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDN0N0QixPQUFPcUIsUUFBUSxTQUFDRSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5QkYsT0FBT0YsUUFBUSxDQUFDRztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRjtBQUVPLFNBQVNiLGdCQUFnQlUsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDOUN0QixPQUFPc0IsUUFBUSxTQUFDRyxVQUFhO1FBQzNCLElBQU1DLHlCQUF5QkwsT0FBT0QsUUFBUSxDQUFDSztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRiJ9