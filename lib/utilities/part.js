'use strict';

var parsers = require('occam-parsers');

var arrayUtilities = require('../utilities/array');

var first = arrayUtilities.first;
var Parts = parsers.Parts,
    partTypes = parsers.partTypes,
    RuleNamePartType = partTypes.RuleNamePartType,
    OptionalPartPartType = partTypes.OptionalPartPartType,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType,
    ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
    OneOrMorePartsPartType = partTypes.OneOrMorePartsPartType,
    ZeroOrMorePartsPartType = partTypes.ZeroOrMorePartsPartType,
    RuleNamePart = Parts.RuleNamePart,
    OptionalPartPart = Parts.OptionalPartPart;


function isPartRecursive(part) {
  var recursiveRuleNames = recursiveRuleNamesFromPart(part),
      recursiveRuleNamesLength = recursiveRuleNames.length,
      partRecursive = recursiveRuleNamesLength > 0;

  return partRecursive;
}

function isPartLeftRecursive(part) {
  var leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part),
      partLeftRecursive = leftRecursiveRuleName !== null;

  return partLeftRecursive;
}

function recursiveRuleNamesFromPart(part) {
  var recursiveRuleNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var partRecursive = false;

  var partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    var type = part.getType();

    switch (type) {
      case RuleNamePartType:
        {
          var ruleNamePart = part,
              ///
          ruleName = ruleNamePart.getRuleName(),
              recursiveRuleNamesIncludesRuleName = recursiveRuleNames.includes(ruleName);

          if (!recursiveRuleNamesIncludesRuleName) {
            var recursiveRuleName = ruleName; ///

            recursiveRuleNames.push(recursiveRuleName);
          }
        }
        break;

      case OptionalPartPartType:
        {
          var optionalPartPart = part; ///

          part = optionalPartPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case OneOrMorePartsPartType:
        {
          var oneOrMorePartsPart = part; ///

          part = oneOrMorePartsPart.getPart();

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case ZeroOrMorePartsPartType:
        {
          var zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart(); ///

          recursiveRuleNamesFromPart(part, recursiveRuleNames);
        }
        break;

      case GroupOfPartsPartType:
        {
          var groupOfPartsPart = part,
              ///
          parts = groupOfPartsPart.getParts();

          partRecursive = parts.some(function (part) {
            recursiveRuleNamesFromPart(part, recursiveRuleNames);
          });
        }
        break;

      case ChoiceOfPartsPartType:
        {
          var choiceOfPartsPart = part,
              ///
          _parts = choiceOfPartsPart.getParts();

          partRecursive = _parts.some(function (part) {
            recursiveRuleNamesFromPart(part, recursiveRuleNames);
          });
        }
        break;
    }
  }

  return partRecursive;
}

function leftRecursiveRuleNameFromPart(part) {
  var leftRecursiveRuleName = null;

  var partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    var type = part.getType();

    switch (type) {
      case RuleNamePartType:
        {
          var ruleNamePart = part,
              ///
          ruleName = ruleNamePart.getRuleName();

          leftRecursiveRuleName = ruleName; ///
        }
        break;

      case OptionalPartPartType:
        {
          var optionalPartPart = part; ///

          part = optionalPartPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case OneOrMorePartsPartType:
        {
          var oneOrMorePartsPart = part; ///

          part = oneOrMorePartsPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case ZeroOrMorePartsPartType:
        {
          var zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case GroupOfPartsPartType:
        {
          var groupOfPartsPart = part,
              ///
          parts = groupOfPartsPart.getParts(),
              firstPart = first(parts);

          part = firstPart; ///

          leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);
        }
        break;

      case ChoiceOfPartsPartType:
        {
          var choiceOfPartsPart = part,
              ///
          _parts2 = choiceOfPartsPart.getParts();

          _parts2.some(function (part) {
            leftRecursiveRuleName = leftRecursiveRuleNameFromPart(part);

            if (leftRecursiveRuleName !== null) {
              return true;
            }
          });
        }
        break;
    }
  }

  return leftRecursiveRuleName;
}

function ruleNamePartFromRuleName(ruleName) {
  var lookAhead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var noWhitespace = false,
      ///
  ruleNamePart = new RuleNamePart(ruleName, noWhitespace, lookAhead);

  return ruleNamePart;
}

function optionalRuleNamePartPartFromRuleName(ruleName) {
  var ruleNamePart = ruleNamePartFromRuleName(ruleName),
      optionalRuleNamePartPart = new OptionalPartPart(ruleNamePart);

  return optionalRuleNamePartPart;
}

module.exports = {
  isPartRecursive: isPartRecursive,
  isPartLeftRecursive: isPartLeftRecursive,
  recursiveRuleNamesFromPart: recursiveRuleNamesFromPart,
  leftRecursiveRuleNameFromPart: leftRecursiveRuleNameFromPart,
  ruleNamePartFromRuleName: ruleNamePartFromRuleName,
  optionalRuleNamePartPartFromRuleName: optionalRuleNamePartPartFromRuleName
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcGFydC5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJQYXJ0cyIsInBhcnRUeXBlcyIsIlJ1bGVOYW1lUGFydFR5cGUiLCJPcHRpb25hbFBhcnRQYXJ0VHlwZSIsIkdyb3VwT2ZQYXJ0c1BhcnRUeXBlIiwiQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIiwiT25lT3JNb3JlUGFydHNQYXJ0VHlwZSIsIlplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIiwiUnVsZU5hbWVQYXJ0IiwiT3B0aW9uYWxQYXJ0UGFydCIsImlzUGFydFJlY3Vyc2l2ZSIsInBhcnQiLCJyZWN1cnNpdmVSdWxlTmFtZXMiLCJyZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0xlbmd0aCIsImxlbmd0aCIsInBhcnRSZWN1cnNpdmUiLCJpc1BhcnRMZWZ0UmVjdXJzaXZlIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVBhcnQiLCJwYXJ0TGVmdFJlY3Vyc2l2ZSIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwic29tZSIsImNob2ljZU9mUGFydHNQYXJ0IiwiZmlyc3RQYXJ0IiwicnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lIiwibG9va0FoZWFkIiwibm9XaGl0ZXNwYWNlIiwib3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0RnJvbVJ1bGVOYW1lIiwib3B0aW9uYWxSdWxlTmFtZVBhcnRQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCOztBQUVBLElBQU1DLGlCQUFpQkQsUUFBUSxvQkFBUixDQUF2Qjs7SUFFUUUsSyxHQUFVRCxjLENBQVZDLEs7SUFFQUMsSyxHQUFxQkosTyxDQUFyQkksSztJQUFPQyxTLEdBQWNMLE8sQ0FBZEssUztJQUNQQyxnQixHQUs0QkQsUyxDQUw1QkMsZ0I7SUFDQUMsb0IsR0FJNEJGLFMsQ0FKNUJFLG9CO0lBQ0FDLG9CLEdBRzRCSCxTLENBSDVCRyxvQjtJQUNBQyxxQixHQUU0QkosUyxDQUY1QkkscUI7SUFDQUMsc0IsR0FDNEJMLFMsQ0FENUJLLHNCO0lBQ0FDLHVCLEdBQTRCTixTLENBQTVCTSx1QjtJQUNBQyxZLEdBQW1DUixLLENBQW5DUSxZO0lBQWNDLGdCLEdBQXFCVCxLLENBQXJCUyxnQjs7O0FBRXRCLFNBQVNDLGVBQVQsQ0FBeUJDLElBQXpCLEVBQStCO0FBQzdCLE1BQU1DLHFCQUFxQkMsMkJBQTJCRixJQUEzQixDQUEzQjtBQUFBLE1BQ01HLDJCQUEyQkYsbUJBQW1CRyxNQURwRDtBQUFBLE1BRU1DLGdCQUFpQkYsMkJBQTJCLENBRmxEOztBQUlBLFNBQU9FLGFBQVA7QUFDRDs7QUFFRCxTQUFTQyxtQkFBVCxDQUE2Qk4sSUFBN0IsRUFBbUM7QUFDakMsTUFBTU8sd0JBQXdCQyw4QkFBOEJSLElBQTlCLENBQTlCO0FBQUEsTUFDTVMsb0JBQXFCRiwwQkFBMEIsSUFEckQ7O0FBR0EsU0FBT0UsaUJBQVA7QUFDRDs7QUFFRCxTQUFTUCwwQkFBVCxDQUFvQ0YsSUFBcEMsRUFBbUU7QUFBQSxNQUF6QkMsa0JBQXlCLHVFQUFKLEVBQUk7O0FBQ2pFLE1BQUlJLGdCQUFnQixLQUFwQjs7QUFFQSxNQUFNSyxzQkFBc0JWLEtBQUtXLGlCQUFMLEVB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QTlDLEVBQXdEO0FBQ3RELE1BQU1ELGVBQWVpQix5QkFBeUJoQixRQUF6QixDQUFyQjtBQUFBLE1BQ01vQiwyQkFBMkIsSUFBSXJDLGdCQUFKLENBQXFCZ0IsWUFBckIsQ0FEakM7O0FBR0EsU0FBT3FCLHdCQUFQO0FBQ0Q7O0FBRURDLE9BQU9DLE9BQVAsR0FBaUI7QUFDZnRDLGtDQURlO0FBRWZPLDBDQUZlO0FBR2ZKLHdEQUhlO0FBSWZNLDhEQUplO0FBS2Z1QixvREFMZTtBQU1mRztBQU5lLENBQWpCIiwiZmlsZSI6InBhcnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHN0cmljdCc7XG5cbmNvbnN0IHBhcnNlcnMgPSByZXF1aXJlKCdvY2NhbS1wYXJzZXJzJyk7XG5cbmNvbnN0IGFycmF5VXRpbGl0aWVzID0gcmVxdWlyZSgnLi4vdXRpbGl0aWVzL2FycmF5Jyk7XG5cbmNvbnN0IHsgZmlyc3QgfSA9IGFycmF5VXRpbGl0aWVzO1xuXG5jb25zdCB7IFBhcnRzLCBwYXJ0VHlwZXMgfSA9IHBhcnNlcnMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBHcm91cE9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzLFxuICAgICAgeyBSdWxlTmFtZVBhcnQsIE9wdGlvbmFsUGFydFBhcnQgfSA9IFBhcnRzO1xuXG5mdW5jdGlvbiBpc1BhcnRSZWN1cnNpdmUocGFydCkge1xuICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZXMgPSByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0KSxcbiAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzTGVuZ3RoID0gcmVjdXJzaXZlUnVsZU5hbWVzLmxlbmd0aCxcbiAgICAgICAgcGFydFJlY3Vyc2l2ZSA9IChyZWN1cnNpdmVSdWxlTmFtZXNMZW5ndGggPiAwKTtcblxuICByZXR1cm4gcGFydFJlY3Vyc2l2ZTtcbn1cblxuZnVuY3Rpb24gaXNQYXJ0TGVmdFJlY3Vyc2l2ZShwYXJ0KSB7XG4gIGNvbnN0IGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21QYXJ0KHBhcnQpLFxuICAgICAgICBwYXJ0TGVmdFJlY3Vyc2l2ZSA9IChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgIT09IG51bGwpO1xuXG4gIHJldHVybiBwYXJ0TGVmdFJlY3Vyc2l2ZTtcbn1cblxuZnVuY3Rpb24gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzID0gW10pIHtcbiAgbGV0IHBhcnRSZWN1cnNpdmUgPSBmYWxzZTtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCksXG4gICAgICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzSW5jbHVkZXNSdWxlTmFtZSA9IHJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIXJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3Vyc2l2ZVJ1bGVOYW1lID0gcnVsZU5hbWU7IC8vL1xuXG4gICAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXMucHVzaChyZWN1cnNpdmVSdWxlTmFtZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9wdGlvbmFsUGFydFBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9wdGlvbmFsUGFydFBhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIE9uZU9yTW9yZVBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb25lT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgIC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9uZU9yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAvLy9cblxuICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTsgIC8vL1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBHcm91cE9mUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgY29uc3QgZ3JvdXBPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgcGFydHMgPSBncm91cE9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0UmVjdXJzaXZlID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0UmVjdXJzaXZlID0gcGFydHMuc29tZSgocGFydCkgPT4ge1xuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcGFydFJlY3Vyc2l2ZTtcbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVBhcnQocGFydCkge1xuICBsZXQgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbnVsbDtcblxuICBjb25zdCBwYXJ0Tm9uVGVybWluYWxQYXJ0ID0gcGFydC5pc05vblRlcm1pbmFsUGFydCgpO1xuXG4gIGlmIChwYXJ0Tm9uVGVybWluYWxQYXJ0KSB7XG4gICAgY29uc3QgdHlwZSA9IHBhcnQuZ2V0VHlwZSgpO1xuXG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlIFJ1bGVOYW1lUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgcnVsZU5hbWVQYXJ0ID0gcGFydCwgIC8vL1xuICAgICAgICAgICAgICAgIHJ1bGVOYW1lID0gcnVsZU5hbWVQYXJ0LmdldFJ1bGVOYW1lKCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT3B0aW9uYWxQYXJ0UGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3Qgb3B0aW9uYWxQYXJ0UGFydCA9IHBhcnQ7IC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lRnJvbVBhcnQocGFydCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21QYXJ0KHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIFplcm9Pck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHplcm9Pck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAvLy9cblxuICAgICAgICAgIHBhcnQgPSB6ZXJvT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZSA9IGxlZnRSZWN1cnNpdmVSdWxlTmFtZUZyb21QYXJ0KHBhcnQpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuXG4gICAgICBjYXNlIEdyb3VwT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IGdyb3VwT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgICAgcGFydHMgPSBncm91cE9mUGFydHNQYXJ0LmdldFBhcnRzKCksXG4gICAgICAgICAgICAgICAgZmlyc3RQYXJ0ID0gZmlyc3QocGFydHMpO1xuXG4gICAgICAgICAgcGFydCA9IGZpcnN0UGFydDsgLy8vXG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUGFydChwYXJ0KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5zb21lKChwYXJ0KSA9PiB7XG4gICAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUGFydChwYXJ0KTtcblxuICAgICAgICAgICAgaWYgKGxlZnRSZWN1cnNpdmVSdWxlTmFtZSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lO1xufVxuXG5mdW5jdGlvbiBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUsIGxvb2tBaGVhZCA9IGZhbHNlKSB7XG4gIGNvbnN0IG5vV2hpdGVzcGFjZSA9IGZhbHNlLCAvLy9cbiAgICAgICAgcnVsZU5hbWVQYXJ0ID0gbmV3IFJ1bGVOYW1lUGFydChydWxlTmFtZSwgbm9XaGl0ZXNwYWNlLCBsb29rQWhlYWQpO1xuXG4gIHJldHVybiBydWxlTmFtZVBhcnQ7XG59XG5cbmZ1bmN0aW9uIG9wdGlvbmFsUnVsZU5hbWVQYXJ0UGFydEZyb21SdWxlTmFtZShydWxlTmFtZSkge1xuICBjb25zdCBydWxlTmFtZVBhcnQgPSBydWxlTmFtZVBhcnRGcm9tUnVsZU5hbWUocnVsZU5hbWUpLFxuICAgICAgICBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnQgPSBuZXcgT3B0aW9uYWxQYXJ0UGFydChydWxlTmFtZVBhcnQpO1xuXG4gIHJldHVybiBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnQ7XG59XG5cbm1vZHVsZS5leHBvcnRzID0ge1xuICBpc1BhcnRSZWN1cnNpdmUsXG4gIGlzUGFydExlZnRSZWN1cnNpdmUsXG4gIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0LFxuICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVGcm9tUGFydCxcbiAgcnVsZU5hbWVQYXJ0RnJvbVJ1bGVOYW1lLFxuICBvcHRpb25hbFJ1bGVOYW1lUGFydFBhcnRGcm9tUnVsZU5hbWVcbn07XG4iXX0=