'use strict';

module.exports = {
  eliminateCycles: require('./lib/eliminateCycles'),
  eliminateOrphanedRules: require('./lib/eliminateOrphanedRules'),
  eliminateImplicitLeftRecursion: require('./lib/eliminateImplicitLeftRecursion'),
  eliminateImmediateLeftRecursion: require('./lib/eliminateImmediateLeftRecursion'),
  eliminateLeftRecursion: require('./lib/eliminateLeftRecursion')
};
