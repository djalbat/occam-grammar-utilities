"use strict";

export function intersection(elementsA, elementsB) {
  const elements = [];

  elementsA.forEach((elementA) => {
    elementsB.forEach((elementB) => {
      if (elementA === elementB) {
        const element = elementA, ///
              elementsIncludesElement = elements.includes(element);

        if (!elementsIncludesElement) {
          elements.push(element);
        }
      }
    });
  });

  return elements;
}