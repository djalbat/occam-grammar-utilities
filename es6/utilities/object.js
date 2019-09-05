'use strict';

function addToArrayMap(object, name, element) {
  let array;

  const names = Object.keys(object),
        namesIncludesName = names.includes(name);

  if (namesIncludesName) {
    array = object[name];
  } else {
    array = [];

    object[name] = array;
  }

  array.push(element);
}


module.exports = {
  addToArrayMap
};
