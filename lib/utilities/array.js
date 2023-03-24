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
    leftDifference: function() {
        return leftDifference;
    },
    rightDifference: function() {
        return rightDifference;
    }
});
var _necessary = require("necessary");
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, unshift = _necessary.arrayUtilities.unshift, firstLast = _necessary.arrayUtilities.firstLast, secondLast = _necessary.arrayUtilities.secondLast, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmluZCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgdW5zaGlmdCwgZmlyc3RMYXN0LCBzZWNvbmRMYXN0LCBiYWNrd2FyZHNTb21lLCBiYWNrd2FyZHNGaW5kLCBiYWNrd2FyZHNFdmVyeSB9ID0gYXJyYXlVdGlsaXRpZXM7XG5cbmV4cG9ydCBmdW5jdGlvbiBsZWZ0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlBLCAoZWxlbWVudEEpID0+IHtcbiAgICBjb25zdCBhcnJheUJJbmNsdWRlc0VsZW1lbnRBID0gYXJyYXlCLmluY2x1ZGVzKGVsZW1lbnRBKTtcblxuICAgIGlmICghYXJyYXlCSW5jbHVkZXNFbGVtZW50QSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJpZ2h0RGlmZmVyZW5jZShhcnJheUEsIGFycmF5Qikge1xuICBmaWx0ZXIoYXJyYXlCLCAoZWxlbWVudEIpID0+IHtcbiAgICBjb25zdCBhcnJheUFJbmNsdWRlc0VsZW1lbnRCID0gYXJyYXlBLmluY2x1ZGVzKGVsZW1lbnRCKTtcblxuICAgIGlmICghYXJyYXlBSW5jbHVkZXNFbGVtZW50Qikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9KTtcbn1cbiJdLCJuYW1lcyI6WyJmaXJzdCIsImxhc3QiLCJmaW5kIiwiZmlsdGVyIiwiZnJvbnQiLCJoZWFkIiwidGFpbCIsInB1c2giLCJ1bnNoaWZ0IiwiZmlyc3RMYXN0Iiwic2Vjb25kTGFzdCIsImJhY2t3YXJkc1NvbWUiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJsZWZ0RGlmZmVyZW5jZSIsInJpZ2h0RGlmZmVyZW5jZSIsImFycmF5VXRpbGl0aWVzIiwiYXJyYXlBIiwiYXJyYXlCIiwiZWxlbWVudEEiLCJhcnJheUJJbmNsdWRlc0VsZW1lbnRBIiwiaW5jbHVkZXMiLCJlbGVtZW50QiIsImFycmF5QUluY2x1ZGVzRWxlbWVudEIiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7OztJQUllQSxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxNQUFNO2VBQU5BOztJQUFRQyxLQUFLO2VBQUxBOztJQUFPQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxJQUFJO2VBQUpBOztJQUFNQyxPQUFPO2VBQVBBOztJQUFTQyxTQUFTO2VBQVRBOztJQUFXQyxVQUFVO2VBQVZBOztJQUFZQyxhQUFhO2VBQWJBOztJQUFlQyxhQUFhO2VBQWJBOztJQUFlQyxjQUFjO2VBQWRBOztJQUVqSEMsY0FBYztlQUFkQTs7SUFVQUMsZUFBZTtlQUFmQTs7O3lCQWRlO0FBRXhCLElBQVFmLFFBQXFJZ0IseUJBQWMsQ0FBbkpoQixPQUFPQyxPQUE4SGUseUJBQWMsQ0FBNUlmLE1BQU1DLE9BQXdIYyx5QkFBYyxDQUF0SWQsTUFBTUMsU0FBa0hhLHlCQUFjLENBQWhJYixRQUFRQyxRQUEwR1kseUJBQWMsQ0FBeEhaLE9BQU9DLE9BQW1HVyx5QkFBYyxDQUFqSFgsTUFBTUMsT0FBNkZVLHlCQUFjLENBQTNHVixNQUFNQyxPQUF1RlMseUJBQWMsQ0FBckdULE1BQU1DLFVBQWlGUSx5QkFBYyxDQUEvRlIsU0FBU0MsWUFBd0VPLHlCQUFjLENBQXRGUCxXQUFXQyxhQUE2RE0seUJBQWMsQ0FBM0VOLFlBQVlDLGdCQUFpREsseUJBQWMsQ0FBL0RMLGVBQWVDLGdCQUFrQ0kseUJBQWMsQ0FBaERKLGVBQWVDLGlCQUFtQkcseUJBQWMsQ0FBakNIO0FBRTFILFNBQVNDLGVBQWVHLE1BQU0sRUFBRUMsTUFBTSxFQUFFO0lBQzdDZixPQUFPYyxRQUFRLFNBQUNFLFVBQWE7UUFDM0IsSUFBTUMseUJBQXlCRixPQUFPRyxRQUFRLENBQUNGO1FBRS9DLElBQUksQ0FBQ0Msd0JBQXdCO1lBQzNCLE9BQU8sSUFBSTtRQUNiLENBQUM7SUFDSDtBQUNGO0FBRU8sU0FBU0wsZ0JBQWdCRSxNQUFNLEVBQUVDLE1BQU0sRUFBRTtJQUM5Q2YsT0FBT2UsUUFBUSxTQUFDSSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5Qk4sT0FBT0ksUUFBUSxDQUFDQztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRiJ9