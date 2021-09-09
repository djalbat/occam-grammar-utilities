"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.isInstanceOf = isInstanceOf;
function isInstanceOf(instance, Class) {
    var constructor = instance.constructor;
    if (constructor) {
        if (constructor.name === Class.name) {
            return true;
        } else {
            var prototype = Object.getPrototypeOf(constructor);
            return isPrototypeInstanceOf(prototype, Class);
        }
    }
    return false;
}
function isPrototypeInstanceOf(prototype, Class) {
    if (prototype) {
        if (prototype.name === Class.name) {
            return true;
        } else {
            prototype = Object.getPrototypeOf(prototype);
            return isPrototypeInstanceOf(prototype, Class);
        }
    }
    return false;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy91dGlsaXRpZXMvY2xhc3MuanMiXSwibmFtZXMiOlsiaXNJbnN0YW5jZU9mIiwiaW5zdGFuY2UiLCJDbGFzcyIsImNvbnN0cnVjdG9yIiwibmFtZSIsInByb3RvdHlwZSIsIk9iamVjdCIsImdldFByb3RvdHlwZU9mIiwiaXNQcm90b3R5cGVJbnN0YW5jZU9mIl0sIm1hcHBpbmdzIjoiQ0FBQSxVQUFZOzs7O1FBRUksWUFBWSxHQUFaLFlBQVk7U0FBWixZQUFZLENBQUMsUUFBUSxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQzdDLEdBQUssQ0FBQyxXQUFXLEdBQUcsUUFBUSxDQUFDLFdBQVc7SUFFeEMsRUFBRSxFQUFFLFdBQVcsRUFBRSxDQUFDO1FBQ2hCLEVBQUUsRUFBRSxXQUFXLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNwQyxNQUFNLENBQUMsSUFBSTtRQUNiLENBQUMsTUFBTSxDQUFDO1lBQ04sR0FBSyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUMsY0FBYyxDQUFDLFdBQVc7WUFFbkQsTUFBTSxDQUFDLHFCQUFxQixDQUFDLFNBQVMsRUFBRSxLQUFLO1FBQy9DLENBQUM7SUFDSCxDQUFDO0lBRUQsTUFBTSxDQUFDLEtBQUs7QUFDZCxDQUFDO1NBRVEscUJBQXFCLENBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxDQUFDO0lBQ2hELEVBQUUsRUFBRSxTQUFTLEVBQUUsQ0FBQztRQUNkLEVBQUUsRUFBRSxTQUFTLENBQUMsSUFBSSxLQUFLLEtBQUssQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNsQyxNQUFNLENBQUMsSUFBSTtRQUNiLENBQUMsTUFBTSxDQUFDO1lBQ04sU0FBUyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsU0FBUztZQUUzQyxNQUFNLENBQUMscUJBQXFCLENBQUMsU0FBUyxFQUFFLEtBQUs7UUFDL0MsQ0FBQztJQUNILENBQUM7SUFFRCxNQUFNLENBQUMsS0FBSztBQUNkLENBQUMifQ==