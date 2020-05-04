"use strict";

export function isInstanceOf(instance, Class) {
  const constructor = instance.constructor;

  if (constructor) {
    if (constructor.name === Class.name) {  ///
      return true;
    } else {
      const prototype = Object.getPrototypeOf(constructor);

      return isPrototypeInstanceOf(prototype, Class);
    }
  }

  return false;
}

function isPrototypeInstanceOf(prototype, Class) {
  if (prototype) {
    if (prototype.name === Class.name) {  ///
      return true;
    } else {
      prototype = Object.getPrototypeOf(prototype);

      return isPrototypeInstanceOf(prototype, Class);
    }
  }

  return false;
}
