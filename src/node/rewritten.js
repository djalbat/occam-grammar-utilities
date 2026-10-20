"use strict";

import { arrayUtilities } from "necessary";
import { NonTerminalNode } from "occam-parsers";

const { first, tail } = arrayUtilities;

export default class RewrittenNode extends NonTerminalNode {
  isMutable() {
    const mutable = true;

    return mutable;
  }

  isSingular() {
    const multiplicity = this.getMultiplicity(),
          singular = (multiplicity === 1);

    return singular;
  }

  isLeftLeaning() {
    const leftLeaningNode = this.findLeftLeaningNode(),
          leftLeaning = (leftLeaningNode !== null);

    return leftLeaning;
  }

  isRightLeaning() {
    const rightLeaningNode = this.findRightLeaningNode(),
          rightLeaning = (rightLeaningNode !== null);

    return rightLeaning;
  }

  findLeftLeaningNode(rewrittenNode, state) {
    let leftLeaningNode = null;

    const ruleName = this.getRuleName();

    this.forwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          leftLeaningNode = nonTerminalNode;  ///
        }
      }

      return true;
    });

    if (leftLeaningNode !== null) {
      const mutable = leftLeaningNode.isMutable();

      if (!mutable) {
        const nonTerminalNode = leftLeaningNode; ///

        rewrittenNode = rewrittenNode.replaceNonTerminalNode(nonTerminalNode, state); ///

        leftLeaningNode = rewrittenNode; ///
      }
    }

    return leftLeaningNode;
  }

  findRightLeaningNode(rewrittenNode, state) {
    let rightLeaningNode = null;

    const ruleName = this.getRuleName();

    this.backwardsSomeChildNode((childNode) => {
      const childNodeNonTerminalNode = childNode.isNonTerminalNode();

      if (childNodeNonTerminalNode) {
        const nonTerminalNode = childNode,  ///
              nonTerminalNodeRuleName = nonTerminalNode.getRuleName();

        if (nonTerminalNodeRuleName === ruleName) {
          rightLeaningNode = nonTerminalNode;  ///
        }
      }

      return true;
    });

    if (rightLeaningNode !== null) {
      const mutable = rightLeaningNode.isMutable();

      if (!mutable) {
        const nonTerminalNode = rightLeaningNode; ///

        rewrittenNode = rewrittenNode.replaceNonTerminalNode(nonTerminalNode, state); ///

        rightLeaningNode = rewrittenNode; ///
      }
    }

    return rightLeaningNode;
  }

  lift() {
    const parentNode = this.getParentNode(),
          removedChildNodes = this.removeChildNodes(),
          replacedChildNode = this,  ///
          replacementChildNodes = removedChildNodes;  ///

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);
  }

  remove() {
    const parentNode = this.getParentNode(),
          removedChildNode = this;  ///

    parentNode.removeChildNode(removedChildNode);
  }

  rewrite(state) {
    let rewrittenNode;

    rewrittenNode = this.clone(); ///

    rewrittenNode.simplify(state);

    rewrittenNode = rewrittenNode.resolve(state); ///

    const nonTerminalNode = (rewrittenNode !== null) ?
                              rewrittenNode.restore(rewrittenNode, state) :
                                null;

    return nonTerminalNode;
  }

  resolve(state) {
    let rewrittenNode = this;

    const rightLeaningNode = this.findRightLeaningNode(rewrittenNode, state),
          rightLeftLeaningNode = (rightLeaningNode !== null) ?
                                   rightLeaningNode.findLeftLeaningNode(rewrittenNode, state) :  ///
                                     null;

    if (rightLeftLeaningNode !== null) {
      let leftLeaningNode = this.rotateLeft(rightLeftLeaningNode, rightLeaningNode, state);

      const unprecedented = this.isUnprecedented(),  ///
            leftLeaningNodeUnprecedented = leftLeaningNode.isUnprecedented();

      if (unprecedented || leftLeaningNodeUnprecedented) {
        this.rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode)
      } else {
        leftLeaningNode = leftLeaningNode.resolve(state); ///

        if (leftLeaningNode === null) {
          rewrittenNode = null;
        }
      }
    }

    if (rewrittenNode !== null) {
      const unprecedented = this.isUnprecedented();

      if (unprecedented) {
        rewrittenNode = null;
      }
    }

    return rewrittenNode;
  }

  restore(rewrittenNode, state) {
    let nonTerminalNode;

    const mutableChildNodes = this.reduceChildNode((mutableChildNodes, childNode) => {
      const childNodeMutable = childNode.isMutable();

      if (childNodeMutable) {
        const mutableChildNode = childNode; ///

        mutableChildNodes.push(mutableChildNode);
      }

      return mutableChildNodes;
    }, []);

    mutableChildNodes.forEach((mutableChildNode) => {
      mutableChildNode.restore(rewrittenNode, state);
    });

    nonTerminalNode = this.createNonTerminalNode(state);

    const parentNode = this.getParentNode();

    if (parentNode !== null) {
      const replacedNode = this,  ///
            replacementChildNode = nonTerminalNode, ///
            replacementChildNodes = [
              replacementChildNode
            ];

      parentNode.replaceChildNode(replacedNode, replacementChildNodes);
    }

    return nonTerminalNode;
  }

  simplify(state) {
    const singular = this.isSingular(),
          childNodes = this.getChildNodes(),
          firstChildNode = first(childNodes),
          reducedNode = firstChildNode; ///

    if (singular) {
      reducedNode.lift(state);

      return;
    }

    const tailChildNodes = tail(childNodes),
          repeatedNodes = tailChildNodes, ///
          rewrittenNode = this; ///

    let accumulatorNode;

    accumulatorNode = reducedNode.accumulate(rewrittenNode, state);

    repeatedNodes.forEach((repeatedNode, index) => {
      const initial = (index === 0);

      accumulatorNode = repeatedNode.lift(accumulatorNode, rewrittenNode, initial, state);
    });
  }

  rotateLeft(rightLeftLeaningNode, rightLeaningNode, state) {
    let leftLeaningNode;

    rightLeftLeaningNode.remove();

    const removedChildNodes = this.removeAllButLastChildNode();

    rightLeaningNode.lift();

    const childNodes = [
      ...removedChildNodes,
      rightLeftLeaningNode
    ];

    let precedence;

    precedence = this.getPrecedence();

    const rewrittenNode = this.createRewrittenNode(childNodes, precedence, state);

    leftLeaningNode = rewrittenNode; ///

    precedence = rightLeaningNode.getPrecedence();

    this.setPrecedence(precedence);

    const childNode = leftLeaningNode,  ///
          startIndex = 0;

    this.addChildNode(childNode, startIndex);

    return leftLeaningNode;
  }

  rotateRight(rightLeftLeaningNode, rightLeaningNode, leftLeaningNode) {
    let childNodes;

    childNodes = this.removeAllButFirstChildNode();

    rightLeftLeaningNode.remove();

    leftLeaningNode.lift();

    let precedence;

    precedence = this.getPrecedence();

    rightLeaningNode.setPrecedence(precedence);

    precedence = leftLeaningNode.getPrecedence();

    this.setPrecedence(precedence);

    childNodes = [  ///
      rightLeftLeaningNode,
      ...childNodes
    ];

    rightLeaningNode.addChildNodes(childNodes);

    const childNode = rightLeaningNode,  ///
          multiplicity = this.getMultiplicity(),
          startIndex = multiplicity;  ///

    this.addChildNode(childNode, startIndex);
  }

  removeAllButLastChildNode() {
    const multiplicity = this.getMultiplicity(),
          startIndex = 0,
          deleteCount = (multiplicity - 1),
          removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodes;
  }

  removeAllButFirstChildNode() {
    const multiplicity = this.getMultiplicity(),
          startIndex = 1,
          deleteCount = (multiplicity - 1),
          removedChildNodes = this.spliceChildNodes(startIndex, deleteCount);

    return removedChildNodes;
  }

  replaceNonTerminalNode(nonTerminalNode, state) {
    let rewrittenNode;

    const parentNode = nonTerminalNode.getParentNode(),
          precedence = nonTerminalNode.getPrecedence(),
          childNodes = nonTerminalNode.removeChildNodes(),
          replacedChildNode = nonTerminalNode;  ///

    rewrittenNode = this.createRewrittenNode(childNodes, precedence, state);

    const replacementChildNode = rewrittenNode, ///
          replacementChildNodes = [
            replacementChildNode
          ];

    parentNode.replaceChildNode(replacedChildNode, replacementChildNodes);

    return rewrittenNode;
  }

  createRewrittenNode(childNodes, precedence, state) {
    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          rewrittenNode = RewrittenNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return rewrittenNode;
  }

  createNonTerminalNode(childNodes, precedence, state) {
    if (state === undefined) {
      state = childNodes; ///

      precedence = this.getPrecedence();

      childNodes = this.removeChildNodes();
    }

    const opacity = this.getOpacity(),
          ruleName = this.getRuleName(),
          NonTerminalNode = state.NonTerminalNodeFromRuleName(ruleName),
          nonTerminalNode = NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity);

    return nonTerminalNode;
  }

  static fromRuleNameChildNodesPrecedenceAndOpacity(ruleName, childNodes, precedence, opacity) { return NonTerminalNode.fromRuleNameChildNodesPrecedenceAndOpacity(RewrittenNode, ruleName, childNodes, precedence, opacity); }
}
