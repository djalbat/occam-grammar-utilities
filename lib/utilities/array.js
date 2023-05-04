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
    compress: function() {
        return compress;
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
var first = _necessary.arrayUtilities.first, last = _necessary.arrayUtilities.last, find = _necessary.arrayUtilities.find, filter = _necessary.arrayUtilities.filter, front = _necessary.arrayUtilities.front, head = _necessary.arrayUtilities.head, tail = _necessary.arrayUtilities.tail, push = _necessary.arrayUtilities.push, compress = _necessary.arrayUtilities.compress, unshift = _necessary.arrayUtilities.unshift, firstLast = _necessary.arrayUtilities.firstLast, secondLast = _necessary.arrayUtilities.secondLast, backwardsSome = _necessary.arrayUtilities.backwardsSome, backwardsFind = _necessary.arrayUtilities.backwardsFind, backwardsEvery = _necessary.arrayUtilities.backwardsEvery, backwardsForEach = _necessary.arrayUtilities.backwardsForEach;
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvYXJyYXkuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG5cbmltcG9ydCB7IGFycmF5VXRpbGl0aWVzIH0gZnJvbSBcIm5lY2Vzc2FyeVwiO1xuXG5leHBvcnQgY29uc3QgeyBmaXJzdCwgbGFzdCwgZmluZCwgZmlsdGVyLCBmcm9udCwgaGVhZCwgdGFpbCwgcHVzaCwgY29tcHJlc3MsIHVuc2hpZnQsIGZpcnN0TGFzdCwgc2Vjb25kTGFzdCwgYmFja3dhcmRzU29tZSwgYmFja3dhcmRzRmluZCwgYmFja3dhcmRzRXZlcnksIGJhY2t3YXJkc0ZvckVhY2ggfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5leHBvcnQgZnVuY3Rpb24gbGVmdERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QSwgKGVsZW1lbnRBKSA9PiB7XG4gICAgY29uc3QgYXJyYXlCSW5jbHVkZXNFbGVtZW50QSA9IGFycmF5Qi5pbmNsdWRlcyhlbGVtZW50QSk7XG5cbiAgICBpZiAoIWFycmF5QkluY2x1ZGVzRWxlbWVudEEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiByaWdodERpZmZlcmVuY2UoYXJyYXlBLCBhcnJheUIpIHtcbiAgZmlsdGVyKGFycmF5QiwgKGVsZW1lbnRCKSA9PiB7XG4gICAgY29uc3QgYXJyYXlBSW5jbHVkZXNFbGVtZW50QiA9IGFycmF5QS5pbmNsdWRlcyhlbGVtZW50Qik7XG5cbiAgICBpZiAoIWFycmF5QUluY2x1ZGVzRWxlbWVudEIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfSk7XG59XG4iXSwibmFtZXMiOlsiZmlyc3QiLCJsYXN0IiwiZmluZCIsImZpbHRlciIsImZyb250IiwiaGVhZCIsInRhaWwiLCJwdXNoIiwiY29tcHJlc3MiLCJ1bnNoaWZ0IiwiZmlyc3RMYXN0Iiwic2Vjb25kTGFzdCIsImJhY2t3YXJkc1NvbWUiLCJiYWNrd2FyZHNGaW5kIiwiYmFja3dhcmRzRXZlcnkiLCJiYWNrd2FyZHNGb3JFYWNoIiwibGVmdERpZmZlcmVuY2UiLCJyaWdodERpZmZlcmVuY2UiLCJhcnJheVV0aWxpdGllcyIsImFycmF5QSIsImFycmF5QiIsImVsZW1lbnRBIiwiYXJyYXlCSW5jbHVkZXNFbGVtZW50QSIsImluY2x1ZGVzIiwiZWxlbWVudEIiLCJhcnJheUFJbmNsdWRlc0VsZW1lbnRCIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUFJZUEsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsTUFBTTtlQUFOQTs7SUFBUUMsS0FBSztlQUFMQTs7SUFBT0MsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsSUFBSTtlQUFKQTs7SUFBTUMsUUFBUTtlQUFSQTs7SUFBVUMsT0FBTztlQUFQQTs7SUFBU0MsU0FBUztlQUFUQTs7SUFBV0MsVUFBVTtlQUFWQTs7SUFBWUMsYUFBYTtlQUFiQTs7SUFBZUMsYUFBYTtlQUFiQTs7SUFBZUMsY0FBYztlQUFkQTs7SUFBZ0JDLGdCQUFnQjtlQUFoQkE7O0lBRTNJQyxjQUFjO2VBQWRBOztJQVVBQyxlQUFlO2VBQWZBOzs7eUJBZGU7QUFFeEIsSUFBUWpCLFFBQWlLa0IseUJBQWMsQ0FBL0tsQixPQUFPQyxPQUEwSmlCLHlCQUFjLENBQXhLakIsTUFBTUMsT0FBb0pnQix5QkFBYyxDQUFsS2hCLE1BQU1DLFNBQThJZSx5QkFBYyxDQUE1SmYsUUFBUUMsUUFBc0ljLHlCQUFjLENBQXBKZCxPQUFPQyxPQUErSGEseUJBQWMsQ0FBN0liLE1BQU1DLE9BQXlIWSx5QkFBYyxDQUF2SVosTUFBTUMsT0FBbUhXLHlCQUFjLENBQWpJWCxNQUFNQyxXQUE2R1UseUJBQWMsQ0FBM0hWLFVBQVVDLFVBQW1HUyx5QkFBYyxDQUFqSFQsU0FBU0MsWUFBMEZRLHlCQUFjLENBQXhHUixXQUFXQyxhQUErRU8seUJBQWMsQ0FBN0ZQLFlBQVlDLGdCQUFtRU0seUJBQWMsQ0FBakZOLGVBQWVDLGdCQUFvREsseUJBQWMsQ0FBbEVMLGVBQWVDLGlCQUFxQ0kseUJBQWMsQ0FBbkRKLGdCQUFnQkMsbUJBQXFCRyx5QkFBYyxDQUFuQ0g7QUFFcEosU0FBU0MsZUFBZUcsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDN0NqQixPQUFPZ0IsUUFBUSxTQUFDRSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5QkYsT0FBT0csUUFBUSxDQUFDRjtRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRjtBQUVPLFNBQVNMLGdCQUFnQkUsTUFBTSxFQUFFQyxNQUFNLEVBQUU7SUFDOUNqQixPQUFPaUIsUUFBUSxTQUFDSSxVQUFhO1FBQzNCLElBQU1DLHlCQUF5Qk4sT0FBT0ksUUFBUSxDQUFDQztRQUUvQyxJQUFJLENBQUNDLHdCQUF3QjtZQUMzQixPQUFPLElBQUk7UUFDYixDQUFDO0lBQ0g7QUFDRiJ9