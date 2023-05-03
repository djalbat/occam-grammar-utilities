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
    firstLast: function() {
        return firstLast;
    },
    secondLast: function() {
        return secondLast;
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
    backwardsForEach: function() {
        return backwardsForEach;
    },
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, firstLast = _necessary.arrayUtilities.firstLast, secondLast = _necessary.arrayUtilities.secondLast, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmluZCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgZmlyc3RMYXN0LCBzZWNvbmRMYXN0LCBiYWNrd2FyZHNTb21lLCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSwgYmFja3dhcmRzRm9yRWFjaCB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImxhc3QiLCJmaW5kIiwiZmlsdGVyIiwiZnJvbnQiLCJoZWFkIiwidGFpbCIsInB1c2giLCJ1bnNoaWZ0IiwiZmlyc3RMYXN0Iiwic2Vjb25kTGFzdCIsImJhY2t3YXJkc1NvbWUiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGb3JFYWNoIiwibGVmdERpZmZlcmVuY2UiLCJyaWdodERpZmZlcmVuY2UiLCJhcnJheVV0aWxpdGllcyIsImFycmF5QSIsImFycmF5QiIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiZWxlbWVudEIiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZUEsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsT0FBTztlQUFQQTs7SUFBU0MsU0FBUztlQUFUQTs7SUFBV0MsVUFBVTtlQUFWQTs7SUFBWUMsYUFBYTtlQUFiQTs7SUFBZUMsYUFBYTtlQUFiQTs7SUFBZUMsY0FBYztlQUFkQTs7SUFBZ0JDLGdCQUFnQjtlQUFoQkE7O0lBRWpJQyxjQUFjO2VBQWRBOztJQVVBQyxlQUFlO2VBQWZBOzs7eUJBZGU7QUFFeEIsSUFBUWhCLFFBQXVKaUIseUJBQWMsQ0FBcktqQixPQUFPQyxPQUFnSmdCLHlCQUFjLENBQTlKaEIsTUFBTUMsT0FBMEllLHlCQUFjLENBQXhKZixNQUFNQyxTQUFvSWMseUJBQWMsQ0FBbEpkLFFBQVFDLFFBQTRIYSx5QkFBYyxDQUExSWIsT0FBT0MsT0FBcUhZLHlCQUFjLENBQW5JWixNQUFNQyxPQUErR1cseUJBQWMsQ0FBN0hYLE1BQU1DLE9BQXlHVSx5QkFBYyxDQUF2SFYsTUFBTUMsVUFBbUdTLHlCQUFjLENBQWpIVCxTQUFTQyxZQUEwRlEseUJBQWMsQ0FBeEdSLFdBQVdDLGFBQStFTyx5QkFBYyxDQUE3RlAsWUFBWUMsZ0JBQW1FTSx5QkFBYyxDQUFqRk4sZUFBZUMsZ0JBQW9ESyx5QkFBYyxDQUFsRUwsZUFBZUMsaUJBQXFDSSx5QkFBYyxDQUFuREosZ0JBQWdCQyxtQkFBcUJHLHlCQUFjLENBQW5DSDtBQUUxSSxTQUFTQyxlQUFlRyxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUM3Q2hCLE9BQU9lLFFBQVEsU0FBQ0UsVUFBYTtRQUMzQixJQUFNQyx5QkFBeUJGLE9BQU9HLFFBQVEsQ0FBQ0Y7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0FBQ0Y7QUFFTyxTQUFTTCxnQkFBZ0JFLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzlDaEIsT0FBT2dCLFFBQVEsU0FBQ0ksVUFBYTtRQUMzQixJQUFNQyx5QkFBeUJOLE9BQU9JLFFBQVEsQ0FBQ0M7UUFFL0MsSUFBSSxDQUFDQyx3QkFBd0I7WUFDM0IsT0FBTyxJQUFJO1FBQ2IsQ0FBQztJQUNIO0FBQ0YifQ==