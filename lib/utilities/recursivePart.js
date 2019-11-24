'use strict';

var parsers = require('occam-parsers'),
    necessary = require('necessary');

var arrayUtilities = necessary.arrayUtilities,
    first = arrayUtilities.first;
var partTypes = parsers.partTypes,
    RuleNamePartType = partTypes.RuleNamePartType,
    OptionalPartPartType = partTypes.OptionalPartPartType,
    GroupOfPartsPartType = partTypes.GroupOfPartsPartType,
    ChoiceOfPartsPartType = partTypes.ChoiceOfPartsPartType,
    OneOrMorePartsPartType = partTypes.OneOrMorePartsPartType,
    ZeroOrMorePartsPartType = partTypes.ZeroOrMorePartsPartType;


function recursiveRuleNamesFromPart(part, recursiveRuleNames) {
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

          parts.forEach(function (part) {
            return recursiveRuleNamesFromPart(part, recursiveRuleNames);
          });
        }
        break;

      case ChoiceOfPartsPartType:
        {
          var choiceOfPartsPart = part,
              ///
          _parts = choiceOfPartsPart.getParts();

          _parts.forEach(function (part) {
            return recursiveRuleNamesFromPart(part, recursiveRuleNames);
          });
        }
        break;
    }
  }
}

function leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames) {
  var partNonTerminalPart = part.isNonTerminalPart();

  if (partNonTerminalPart) {
    var type = part.getType();

    switch (type) {
      case RuleNamePartType:
        {
          var ruleNamePart = part,
              ///
          ruleName = ruleNamePart.getRuleName(),
              leftRecursiveRuleNamesIncludesRuleName = leftRecursiveRuleNames.includes(ruleName);

          if (!leftRecursiveRuleNamesIncludesRuleName) {
            var leftRecursiveRuleName = ruleName; ///

            leftRecursiveRuleNames.push(leftRecursiveRuleName);
          }
        }
        break;

      case OptionalPartPartType:
        {
          var optionalPartPart = part; ///

          part = optionalPartPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case OneOrMorePartsPartType:
        {
          var oneOrMorePartsPart = part; ///

          part = oneOrMorePartsPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case ZeroOrMorePartsPartType:
        {
          var zeroOrMorePartsPart = part; ///

          part = zeroOrMorePartsPart.getPart();

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case GroupOfPartsPartType:
        {
          var groupOfPartsPart = part,
              ///
          parts = groupOfPartsPart.getParts(),
              firstPart = first(parts);

          part = firstPart; ///

          leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
        }
        break;

      case ChoiceOfPartsPartType:
        {
          var choiceOfPartsPart = part,
              ///
          _parts2 = choiceOfPartsPart.getParts();

          _parts2.forEach(function (part) {
            return leftRecursiveRuleNamesFromPart(part, leftRecursiveRuleNames);
          });
        }
        break;
    }
  }
}

module.exports = {
  recursiveRuleNamesFromPart: recursiveRuleNamesFromPart,
  leftRecursiveRuleNamesFromPart: leftRecursiveRuleNamesFromPart
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2VzNi91dGlsaXRpZXMvcmVjdXJzaXZlUGFydC5qcyJdLCJuYW1lcyI6WyJwYXJzZXJzIiwicmVxdWlyZSIsIm5lY2Vzc2FyeSIsImFycmF5VXRpbGl0aWVzIiwiZmlyc3QiLCJwYXJ0VHlwZXMiLCJSdWxlTmFtZVBhcnRUeXBlIiwiT3B0aW9uYWxQYXJ0UGFydFR5cGUiLCJHcm91cE9mUGFydHNQYXJ0VHlwZSIsIkNob2ljZU9mUGFydHNQYXJ0VHlwZSIsIk9uZU9yTW9yZVBhcnRzUGFydFR5cGUiLCJaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwicGFydCIsInJlY3Vyc2l2ZVJ1bGVOYW1lcyIsInBhcnROb25UZXJtaW5hbFBhcnQiLCJpc05vblRlcm1pbmFsUGFydCIsInR5cGUiLCJnZXRUeXBlIiwicnVsZU5hbWVQYXJ0IiwicnVsZU5hbWUiLCJnZXRSdWxlTmFtZSIsInJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUiLCJpbmNsdWRlcyIsInJlY3Vyc2l2ZVJ1bGVOYW1lIiwicHVzaCIsIm9wdGlvbmFsUGFydFBhcnQiLCJnZXRQYXJ0Iiwib25lT3JNb3JlUGFydHNQYXJ0IiwiemVyb09yTW9yZVBhcnRzUGFydCIsImdyb3VwT2ZQYXJ0c1BhcnQiLCJwYXJ0cyIsImdldFBhcnRzIiwiZm9yRWFjaCIsImNob2ljZU9mUGFydHNQYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0IiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyIsImxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lIiwibGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lIiwiZmlyc3RQYXJ0IiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUEsSUFBTUEsVUFBVUMsUUFBUSxlQUFSLENBQWhCO0FBQUEsSUFDTUMsWUFBWUQsUUFBUSxXQUFSLENBRGxCOztBQUdNLElB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c0JBQXJDO0FBQ0Q7QUFDRDs7QUFFRixXQUFLM0IscUJBQUw7QUFBNkI7QUFDekIsY0FBTXlCLG9CQUFvQnJCLElBQTFCO0FBQUEsY0FBZ0M7QUFDMUJrQixvQkFBUUcsa0JBQWtCRixRQUFsQixFQURkOztBQUdBRCxrQkFBTUUsT0FBTixDQUFjLFVBQUNwQixJQUFEO0FBQUEsbUJBQVVzQiwrQkFBK0J0QixJQUEvQixFQUFxQ3VCLHNCQUFyQyxDQUFWO0FBQUEsV0FBZDtBQUNEO0FBQ0Q7QUExREo7QUE0REQ7QUFDRjs7QUFFREksT0FBT0MsT0FBUCxHQUFpQjtBQUNmN0Isd0RBRGU7QUFFZnVCO0FBRmUsQ0FBakIiLCJmaWxlIjoicmVjdXJzaXZlUGFydC5qcyIsInNvdXJjZXNDb250ZW50IjpbIid1c2Ugc3RyaWN0JztcblxuY29uc3QgcGFyc2VycyA9IHJlcXVpcmUoJ29jY2FtLXBhcnNlcnMnKSxcbiAgICAgIG5lY2Vzc2FyeSA9IHJlcXVpcmUoJ25lY2Vzc2FyeScpO1xuXG5jb25zdCB7IGFycmF5VXRpbGl0aWVzIH0gPSBuZWNlc3NhcnksXG4gICAgICB7IGZpcnN0IH0gPSBhcnJheVV0aWxpdGllcztcblxuY29uc3QgeyBwYXJ0VHlwZXMgfSA9IHBhcnNlcnMsXG4gICAgICB7IFJ1bGVOYW1lUGFydFR5cGUsXG4gICAgICAgIE9wdGlvbmFsUGFydFBhcnRUeXBlLFxuICAgICAgICBHcm91cE9mUGFydHNQYXJ0VHlwZSxcbiAgICAgICAgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlLFxuICAgICAgICBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSB9ID0gcGFydFR5cGVzO1xuXG5mdW5jdGlvbiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0luY2x1ZGVzUnVsZU5hbWUgPSByZWN1cnNpdmVSdWxlTmFtZXMuaW5jbHVkZXMocnVsZU5hbWUpO1xuXG4gICAgICAgICAgaWYgKCFyZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCByZWN1cnNpdmVSdWxlTmFtZSA9IHJ1bGVOYW1lOyAvLy9cblxuICAgICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzLnB1c2gocmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgIC8vL1xuXG4gICAgICAgICAgcGFydCA9IG9wdGlvbmFsUGFydFBhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPbmVPck1vcmVQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IG9uZU9yTW9yZVBhcnRzUGFydCA9IHBhcnQ7ICAvLy9cblxuICAgICAgICAgIHBhcnQgPSBvbmVPck1vcmVQYXJ0c1BhcnQuZ2V0UGFydCgpO1xuXG4gICAgICAgICAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7ICAvLy9cblxuICAgICAgICAgIHJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIHJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgR3JvdXBPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgIGNvbnN0IGdyb3VwT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAgLy8vXG4gICAgICAgICAgICAgIHBhcnRzID0gZ3JvdXBPZlBhcnRzUGFydC5nZXRQYXJ0cygpO1xuXG4gICAgICAgICAgcGFydHMuZm9yRWFjaCgocGFydCkgPT4gcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgcmVjdXJzaXZlUnVsZU5hbWVzKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgQ2hvaWNlT2ZQYXJ0c1BhcnRUeXBlIDoge1xuICAgICAgICBjb25zdCBjaG9pY2VPZlBhcnRzUGFydCA9IHBhcnQsIC8vL1xuICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiByZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCByZWN1cnNpdmVSdWxlTmFtZXMpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lc0Zyb21QYXJ0KHBhcnQsIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMpIHtcbiAgY29uc3QgcGFydE5vblRlcm1pbmFsUGFydCA9IHBhcnQuaXNOb25UZXJtaW5hbFBhcnQoKTtcblxuICBpZiAocGFydE5vblRlcm1pbmFsUGFydCkge1xuICAgIGNvbnN0IHR5cGUgPSBwYXJ0LmdldFR5cGUoKTtcblxuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBSdWxlTmFtZVBhcnRUeXBlIDoge1xuICAgICAgICAgIGNvbnN0IHJ1bGVOYW1lUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBydWxlTmFtZSA9IHJ1bGVOYW1lUGFydC5nZXRSdWxlTmFtZSgpLFxuICAgICAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lID0gbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcy5pbmNsdWRlcyhydWxlTmFtZSk7XG5cbiAgICAgICAgICBpZiAoIWxlZnRSZWN1cnNpdmVSdWxlTmFtZXNJbmNsdWRlc1J1bGVOYW1lKSB7XG4gICAgICAgICAgICBjb25zdCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWUgPSBydWxlTmFtZTsgLy8vXG5cbiAgICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXMucHVzaChsZWZ0UmVjdXJzaXZlUnVsZU5hbWUpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBPcHRpb25hbFBhcnRQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvcHRpb25hbFBhcnRQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb3B0aW9uYWxQYXJ0UGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgT25lT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCBvbmVPck1vcmVQYXJ0c1BhcnQgPSBwYXJ0OyAgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gb25lT3JNb3JlUGFydHNQYXJ0LmdldFBhcnQoKTtcblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBaZXJvT3JNb3JlUGFydHNQYXJ0VHlwZSA6IHtcbiAgICAgICAgICBjb25zdCB6ZXJvT3JNb3JlUGFydHNQYXJ0ID0gcGFydDsgLy8vXG5cbiAgICAgICAgICBwYXJ0ID0gemVyb09yTW9yZVBhcnRzUGFydC5nZXRQYXJ0KCk7XG5cbiAgICAgICAgICBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcyk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG5cbiAgICAgIGNhc2UgR3JvdXBPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgZ3JvdXBPZlBhcnRzUGFydCA9IHBhcnQsICAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGdyb3VwT2ZQYXJ0c1BhcnQuZ2V0UGFydHMoKSxcbiAgICAgICAgICAgICAgICBmaXJzdFBhcnQgPSBmaXJzdChwYXJ0cyk7XG5cbiAgICAgICAgICBwYXJ0ID0gZmlyc3RQYXJ0OyAvLy9cblxuICAgICAgICAgIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydChwYXJ0LCBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcblxuICAgICAgY2FzZSBDaG9pY2VPZlBhcnRzUGFydFR5cGUgOiB7XG4gICAgICAgICAgY29uc3QgY2hvaWNlT2ZQYXJ0c1BhcnQgPSBwYXJ0LCAvLy9cbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGNob2ljZU9mUGFydHNQYXJ0LmdldFBhcnRzKCk7XG5cbiAgICAgICAgICBwYXJ0cy5mb3JFYWNoKChwYXJ0KSA9PiBsZWZ0UmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQocGFydCwgbGVmdFJlY3Vyc2l2ZVJ1bGVOYW1lcykpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgcmVjdXJzaXZlUnVsZU5hbWVzRnJvbVBhcnQsXG4gIGxlZnRSZWN1cnNpdmVSdWxlTmFtZXNGcm9tUGFydFxufTtcbiJdfQ==