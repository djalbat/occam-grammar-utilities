"use strict";

import { Parts, partTypes, PartChoice } from "occam-parsers";

const { OptionalPart, IsolatedPartPart, ChoiceOfPartsPart, BranchingPartsPart, OneOrMorePartsPart, ZeroOrMorePartsPart, SequenceOfPartsPart } = Parts,
      { RuleNamePartType,
        IsolatedPartPartType,
        OptionalPartPartType,
        ChoiceOfPartsPartType,
        BranchingPartsPartType,
        OneOrMorePartsPartType,
        ZeroOrMorePartsPartType,
        SequenceOfPartsPartType } = partTypes;

export function replaceRuleNameParts(parts, callback) {
  parts = [ ///
    ...parts
  ];

  const partsLength = parts.length;

  for (let index = 0; index < partsLength; index++) {
    let part;

    part = parts[index];

    const partNonTerminalPart= part.isNonTerminalPart();

    if (partNonTerminalPart) {
      const nonTerminalPart = part, ///
            type = nonTerminalPart.getType();

      switch (type) {
        case RuleNamePartType: {
          const ruleNamePart = replaceRuleNamePart(part, callback);

          part = ruleNamePart;  ///

          break;
        }

        case OptionalPartPartType: {
          const optionalPart = nonTerminalPart; ///

          part = optionalPart.getPart();

          const ruleNamePart = replaceRuleNamePart(part, callback);

          if (ruleNamePart !== null) {
            part = ruleNamePart;  ///

            const optionalPart = OptionalPart.fromPart(part);

            part = optionalPart;  ///
          } else {
            part = nonTerminalPart; ///
          }

          break;
        }

        case ZeroOrMorePartsPartType: {
          const zeroOrMorePartsPart = nonTerminalPart;  ///

          part = zeroOrMorePartsPart.getPart();

          const ruleNamePart = replaceRuleNamePart(part, callback);

          if (ruleNamePart !== null) {
            part = ruleNamePart;  ///

            const zeroOrMorePartsPart = ZeroOrMorePartsPart.fromPart(part);

            part = zeroOrMorePartsPart;  ///
          } else {
            part = nonTerminalPart; ///
          }

          break;
        }

        case OneOrMorePartsPartType: {
          const oneOrMorePartsPart = nonTerminalPart; ///

          part = oneOrMorePartsPart.getPart();

          const ruleNamePart = replaceRuleNamePart(part, callback);

          if (ruleNamePart !== null) {
            part = ruleNamePart;  ///

            const oneOrMorePartsPart = OneOrMorePartsPart.fromPart(part);

            part = oneOrMorePartsPart;  ///
          } else {
            part = nonTerminalPart; ///
          }

          break;
        }

        case IsolatedPartPartType: {
          const isolatedPartsPart = nonTerminalPart;  ///

          part = isolatedPartsPart.getPart();

          const ruleNamePart = replaceRuleNamePart(part, callback);

          if (ruleNamePart !== null) {
            part = ruleNamePart;  ///

            const isolatedPartsPart = IsolatedPartPart.fromPart(part);

            part = isolatedPartsPart;  ///
          } else {
            part = nonTerminalPart; ///
          }

          break;
        }

        case SequenceOfPartsPartType: {
          let parts,
              sequenceOfPartsPart;

          sequenceOfPartsPart = nonTerminalPart; ///

          parts = sequenceOfPartsPart.getParts(); ///

          parts = replaceRuleNameParts(parts, callback);

          sequenceOfPartsPart = SequenceOfPartsPart.fromParts(parts);

          part = sequenceOfPartsPart; ///

          break;
        }

        case BranchingPartsPartType: {
          let parts,
              branchingPartsPart;

          branchingPartsPart = nonTerminalPart; ///

          parts = branchingPartsPart.getParts(); ///

          parts = replaceRuleNameParts(parts, callback);

          branchingPartsPart = BranchingPartsPart.fromParts(parts);

          part = branchingPartsPart; ///

          break;
        }

        case ChoiceOfPartsPartType: {
          let parts,
              partChoices,
              choiceOfPartsPart;

          const precedences = [];

          choiceOfPartsPart = nonTerminalPart;  ///

          partChoices = choiceOfPartsPart.getPartChoices();

          parts = partChoices.map((partChoice) => {
            const part = partChoice.getPart(),
                  precedence = partChoice.getPrecedence();

            precedences.push(precedence);

            return part;
          });

          parts = replaceRuleNameParts(parts, callback);

          partChoices = parts.map((part, index) => {
            const precedence = precedences[index],
                  partChoice = PartChoice.fromPartAndPrecedence(part, precedence);

            return partChoice;
          });

          choiceOfPartsPart = ChoiceOfPartsPart.fromPartChoices(partChoices);

          part = choiceOfPartsPart; ///

          break;
        }
      }

      parts[index] = part;
    }
  }

  return parts;
}

function replaceRuleNamePart(part, callback) {
  let ruleNamePart = null;

  const partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    const nonTerminalPart = part, ///
          type = nonTerminalPart.getType();

    switch (type) {
      case RuleNamePartType: {
        ruleNamePart = nonTerminalPart; ///

        ruleNamePart = callback(ruleNamePart);  ///

        break;
      }
    }
  }

  return ruleNamePart;
}
