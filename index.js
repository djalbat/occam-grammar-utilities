'use strict';

module.exports = {
  eliminateOrphanedRules: require('./lib/eliminateOrphanedRules'),
  eliminateImplicitLeftRecursion: require('./lib/eliminateImplicitLeftRecursion'),
  eliminateImmediateLeftRecursion: require('./lib/eliminateImmediateLeftRecursion'),
  eliminateLeftRecursion: require('./lib/eliminateLeftRecursion')
};
