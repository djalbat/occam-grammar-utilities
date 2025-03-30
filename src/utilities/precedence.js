"use strict";

export function isNonTerminalNodeUnprecedented(nonTerminalNode) {
  let nonTerminalNodeUnprecedented;

  const childNonTerminalNodeUnprecedented = nonTerminalNode.someChildNode((childNode) => {
          const childNodeNonTerminalNode = childNode.isNonTerminalNode();

          if (childNodeNonTerminalNode) {
            const childNonTerminalNode = childNode, ///
                  childNonTerminalNodeUnprecedented = isNonTerminalNodeUnprecedented(childNonTerminalNode);

            if (childNonTerminalNodeUnprecedented) {
              return true;
            }
          }
        });

  if (childNonTerminalNodeUnprecedented) {
    nonTerminalNodeUnprecedented = true;
  } else {
    const precedence = nonTerminalNode.getPrecedence();

    if (precedence !== null) {
      const ruleName = nonTerminalNode.getRuleName();

      nonTerminalNodeUnprecedented = nonTerminalNode.someChildNode((childNode) => {  ///
        const childNodeLowerPrecedence = childNode.isLowerPrecedence(ruleName, precedence);

        if (childNodeLowerPrecedence) {
          return true;
        }
      });
    }
  }

  return nonTerminalNodeUnprecedented;
}
