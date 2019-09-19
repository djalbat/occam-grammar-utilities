'use strict';

function addToArrayMap(object, name, element) {
  let array;

  const keys = Object.keys(object),
        names = keys, ///
        namesIncludesName = names.includes(name);

  if (namesIncludesName) {
    array = object[name];
  } else {
    array = [];

    object[name] = array;
  }

  array.push(element);
}

function forEachNameValueWithRemove(object, callback) {
  const keys = Object.keys(object);

  keys.forEach((key) => {
    const name = key, ///
          value = object[key],
          remove = callback(name, value);

    if (remove) {
      delete object[key];
    }
  });
}

module.exports = {
  addToArrayMap,
  forEachNameValueWithRemove
};
