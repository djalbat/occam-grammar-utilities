"use strict";

export function isNonTerminalNodeUnprecedented(nonTerminalNode) {
  let nonTerminalNodeUnprecedented;

  const childNodes = nonTerminalNode.getChildNodes(),
        childNonTerminalNodes = childNodes.filter((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            return true;
          }
        }),
        childNonTerminalNodeUnprecedented = childNonTerminalNodes.some((childNonTerminalNode) => {
          const childNonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(childNonTerminalNode);

          if (childNonTerminalNodeUnprecedented) {
            return true;
          }
        });

  if (childNonTerminalNodeUnprecedented) {
    nonTerminalNodeUnprecedented = true;
  } else {
    const precedence = nonTerminalNode.getPrecedence();

    if (precedence !== null) {
      const ruleName = nonTerminalNode.getRuleName(),
            childNodes = nonTerminalNode.getChildNodes();

      nonTerminalNodeUnprecedented = childNodes.some((childNode) => {  ///
        const childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);

        if (childNodeLowerPrecedence) {
          return true;
        }
      });
    }
  }

  return nonTerminalNodeUnprecedented;
}
